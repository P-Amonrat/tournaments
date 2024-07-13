import {
  Card,
  Col,
  Flex,
  Image,
  Input,
  Modal,
  Row,
  Skeleton,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";

import { useFetcher, useNavigate } from "@remix-run/react";
import { useContext, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { DndBox, Media } from "~/components/common";
import dayjs from "dayjs";
import domtoimage from "dom-to-image";
import { AppContext, AuthContext } from "~/contexts";
import { adjustTranslateValues } from "~/utils/helper";
import { CampaignTitle } from "./CampaignTitle";
import { CampaignControl } from "./CampaignControl";
import { CampaignGift } from "./CampaignGift";
import { CampaignEditButton } from "./CampaignEditButton";
import { CampaignStickers } from "./CampaignStickers";
import { CampaignThumbnailUpload } from "./CampaignThumbnailUpload";

const { Text } = Typography;

interface CampaignResultProps {
  data: any;
  gift: any;
}

export function CampaignResult2(props: CampaignResultProps) {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { data, gift } = props;
  const navigate = useNavigate();
  const rootRef: any = useRef<Element>();
  const { clickedId, user, openLoginModal } = useContext(AuthContext);
  const { baseUrl } = useContext(AppContext);

  const [image, setImage] = useState<string>(
    `/image/campaign/character-${data.character}.png`
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [giftModal, setGiftModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState(t("input in game username"));

  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: any;
    };
  }>({});

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
    styles: {
      body: { padding: "3px 5px", maxWidth: "100%" },
    },
  } as any;

  const thumbnailStyle = {
    position: "absolute",
    display: "block",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "9%",
    width: "44%",
    height: "41%",
    top: "37%",
    left: "28%",
  } as any;

  const textInputStyle = {
    position: "absolute",
    left: "7%",
    top: "15%",
    width: "86%",
    padding: "8px 11px",
    whiteSpace: "nowrap",
    border: 0,
    color: "white",
    borderRadius: "5px",
    fontSize: 24,
    textAlign: "center",
  } as any;

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleUpload = (e: any) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const dropNewBox = (name: string, left: number, top: number, boxes: any) => {
    const newBoxes = { ...boxes };
    newBoxes[dayjs().unix()] = {
      top,
      left,
      title: name,
    };
    setBoxes(newBoxes);
  };

  const [{}, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: any, monitor) {
        const containerWidth = rootRef.current.width;
        const containerHeight = rootRef.current.height;
        if (!item.id) {
          const offset = monitor.getClientOffset();
          if (offset) {
            const left =
              ((offset.x - rootRef.current.x - containerWidth * 0.05) * 100) /
              containerWidth;
            const top =
              ((offset.y - rootRef.current.y - containerWidth * 0.05) * 100) /
              containerHeight;
            dropNewBox(item.name, left, top, boxes);
          }
        }
        return undefined;
      },
      collect(monitor) {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [boxes]
  );

  const combinedRef = (el: any) => {
    drop(el);
    if (el) {
      rootRef.current = el.getBoundingClientRect();
    }
  };

  const handleCreateNew = () => {
    navigate("/campaign");
  };

  const handleShare = () => {
    const userAgent = navigator.userAgent || "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    if (isMobile) {
      handleSaveImage(null, true);
    } else {
      handleSaveImage();
      const tempAnchor = document.createElement("a");
      tempAnchor.href = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/campaign`;
      tempAnchor.target = "_blank";
      tempAnchor.rel = "noreferrer";
      document.body.appendChild(tempAnchor);
      tempAnchor.click();
      document.body.removeChild(tempAnchor);
    }
  };

  const handleSaveImage = async (e?: any, isMobile?: boolean) => {
    const elementToCapture = document.getElementsByClassName(
      "campaign-result"
    ) as any;
    if (elementToCapture && elementToCapture.length) {
      elementToCapture[0].insertAdjacentHTML(
        "afterend",
        elementToCapture[0].outerHTML
      );
      const newElement = document.getElementsByClassName(
        "campaign-result"
      )[1] as any;
      newElement.setAttribute("class", "campaign-export");
      const targetWidth = 805;
      const targetHeight = 1213;
      newElement.style.width = `${targetWidth}px`;
      newElement.style.height = `${targetHeight}px`;
      adjustTranslateValues(
        newElement,
        elementToCapture[0].offsetWidth,
        elementToCapture[0].offsetHeight,
        targetWidth,
        targetHeight
      );

      try {
        await domtoimage.toPng(newElement);

        if (isMobile) {
          const blob = await domtoimage.toBlob(newElement);
          const file = await new File([blob], "image.png", {
            type: blob.type,
          });

          const dataImage = {
            files: [file],
            title: "Image",
            text: "image",
          };
          await navigator.share(dataImage);
        } else {
          // dowload image
          await domtoimage
            .toBlob(newElement)
            .then(function (blob: any) {
              let filename = "image.jpg";
              let link = document.createElement("a");
              link.download = filename.toLowerCase();
              link.href = URL.createObjectURL(blob);
              link.target = "_blank";
              link.rel = "noreferrer";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch(function (error) {
              console.error("Error exporting image:", error);
            });
        }

        newElement.remove();
      } catch (error) {
        console.error("Error exporting image:", error);
        throw error;
      }
    }
  };

  const getTheGift = () => {
    if (!gift) {
      fetcher.submit(
        {},
        {
          method: "post",
          action: `/resources/get-the-gift`,
        }
      );
    }
    setGiftModal(true);
  };

  const closeGiftModal = () => {
    setGiftModal(false);
  };

  const handleBackToProfile = () => {
    navigate(`/users/${user?.userName ? user.userName : user.uuid}`);
  };

  return (
    <Card
      bordered={false}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 900,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-0.png')`,
        backgroundSize: "cover",
        borderRadius: 30,
      }}
      bodyStyle={{ padding: 10 }}
    >
      <Media at="sm">
        <CampaignTitle />
      </Media>
      <div style={{ width: "100%" }}>
        <Row gutter={[10, 0]} align="middle">
          <Col span={24} md={12}>
            <div
              className="campaign-result"
              ref={combinedRef}
              style={{
                position: "relative",
                height: 0,
                paddingBottom: "150.7%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  preview={false}
                  src={`/image/campaign/new/${
                    data === "rare" ? "rare" : data.result
                  }-bg.png`}
                  style={{ width: "100%" }}
                  placeholder={<Skeleton active />}
                />
                <Image
                  preview={false}
                  wrapperStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  src={`/image/campaign/new/${data.alias}.png`}
                />
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    ...thumbnailStyle,
                  }}
                />
                <Image
                  preview={false}
                  wrapperStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  src={`/image/campaign/new/${
                    data === "rare" ? "rare" : data.result
                  }-frame.png`}
                />
                {editMode && (
                  <CampaignThumbnailUpload
                    style={thumbnailStyle}
                    onUpload={handleUpload}
                  />
                )}
                {editMode ? (
                  <Input
                    className="text-input"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      ...textInputStyle,
                    }}
                    maxLength={30}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={t("input your game username")}
                  />
                ) : (
                  <Text className="text-input" style={textInputStyle}>
                    {inputValue}
                  </Text>
                )}
                {Object.keys(boxes).map((key) => {
                  const { left, top, title } = boxes[key] as {
                    top: number;
                    left: number;
                    title: string;
                  };
                  return (
                    <DndBox
                      key={key}
                      id={key}
                      isTargetImage={clickedId === key}
                      left={left}
                      top={top}
                      title={title}
                      editMode={editMode}
                    />
                  );
                })}
              </div>
            </div>
            <CampaignEditButton
              onClick={user ? () => setEditMode(!editMode) : openLoginModal}
              editMode={editMode}
            />
          </Col>
          <Col span={24} md={12}>
            {editMode ? (
              <>
                <Media greaterThan="sm">
                  <Flex className="campaign-sticker-picker" wrap="wrap">
                    <CampaignStickers />
                  </Flex>
                </Media>
                <Media at="sm">
                  <div
                    className="campaign-sticker-picker"
                    style={{ paddingTop: 20, paddingBottom: 40 }}
                  >
                    <CampaignStickers />
                  </div>
                </Media>
              </>
            ) : (
              <Flex align="center" vertical>
                <Media greaterThan="sm">
                  <CampaignTitle />
                </Media>
                <Flex align="center">
                  <CampaignControl
                    onNewClicked={handleCreateNew}
                    onSaveClicked={handleSaveImage}
                    onShareClicked={handleShare}
                    onGiftClicked={user ? getTheGift : openLoginModal}
                  />
                </Flex>
              </Flex>
            )}
          </Col>
        </Row>
      </div>
      <Modal {...modalProps} onCancel={closeGiftModal} open={giftModal}>
        <CampaignGift gift={gift} onBack={handleBackToProfile} />
      </Modal>
    </Card>
  );
}
