import {
  Avatar,
  Button,
  Card,
  Flex,
  Image,
  Input,
  Modal,
  Skeleton,
  Space,
  Typography,
} from "antd";
import {
  CameraOutlined,
  CloseOutlined,
  EditOutlined,
  GiftOutlined,
  PlusOutlined,
  ShareAltOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import { useFetcher, useMatches, useNavigate } from "@remix-run/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { usePreview } from "react-dnd-multi-backend";
import results from "./results.json";
import {
  DndBox,
  DroppedBox,
  Loading,
  Media,
  OverlayBg,
  TiltButton,
} from "~/components/common";
import dayjs from "dayjs";
import domtoimage from "dom-to-image";
import { AppContext, AuthContext } from "~/contexts";
import { adjustTranslateValues } from "~/utils/helper";

const { Text, Title } = Typography;

interface CampaignResultProps {
  data: any;
  gift: any;
}

const alias = [
  '"One Tap"',
  '"ตอนเล่นเป็นควายตอนตายเป็นโค้ช"',
  '"เน้นเข้าร่วมไม่เน้นเข้ารอบ"',
  '"คุณท่านสุลต่าน"',
  '"เก่งมากไม่มาเล่นเอง"',
  '"ยิงลมคมกริบ"',
  '"ตัวดูดกระสุน"',
  '"หัตถ์พระเจ้า"',
  '"กระสุนสั่งตาย"',
  '"กระสุนแห่งรัก"',
  '"เดินแรงแกงหก"',
  '"ฉายเดี่ยวหมื่นลี้"',
  '"เครื่องจักรสังหาร"',
  '"หนุ่มหัวร้อน"',
  '"นักดูดวิญญาณ"',
  '"ตัวปลอมในชีวิตเธอ"',
  '"ลิฟต์ก็เอาผมไม่ลง"',
  '"เทพแห่งสงคราม"',
  '"มือวางระเบิด"',
  '"โล่มนุษย์"',
];

export function CampaignResult(props: CampaignResultProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { data, gift } = props;
  const navigate = useNavigate();
  const rootRef: any = useRef<Element>();
  const preview = usePreview();
  const { itemType, item, style } = preview;
  const { user, openLoginModal } = useContext(AuthContext);
  const { baseUrl } = useContext(AppContext);
  const resultsData = results as any;

  const [image, setImage] = useState<string>(
    `/image/campaign/character-${data.character}.png`
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [giftModal, setGiftModal] = useState<boolean>(false);
  const [exporting, setExporting] = useState<boolean>(false);
  const [exportedImage, setExportedImage] = useState<string | undefined>(
    undefined
  );
  const [exportedLinkImage, setExportedLinkImage] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");

  const [exportedLinkDowloadImage, setExportedLinkDowloadImage] =
    useState<any>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: any;
    };
  }>({});
  const campaignUrl = `${baseUrl}/campaign`;
  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${campaignUrl}`;
  const iconStyle = {
    backgroundColor: "#eb4d4f",
    cursor: "pointer",
    lineHeight: "45px",
  };
  const thumbnailStyle = {
    position: "absolute",
    top: "16.2%",
    left: "8.2%",
    width: "27.6%",
    height: "59%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as any;
  const powers = ["strength", "speed", "intelligence", "durability"];

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
    styles: {
      body: { padding: "3px 5px", maxWidth: "100%" },
    },
  } as any;

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleUpload = (e: any) => {
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCreateNew = () => {
    navigate("/campaign");
  };

  const openShareModal = async () => {
    setExportedImage(undefined);
    await exportAsImage();
    await exportImageBackup();
    // Any additional code to be executed after exportImageBackup
  };

  const exportImageBackup = async () => {
    setShareModal(true);
    setExportedImage(undefined);
    await exportAsImage();
    // Any additional code to be executed after exportAsImage
  };

  const closeShareModal = () => {
    setShareModal(false);
  };

  const closeGiftModal = () => {
    setGiftModal(false);
  };

  // const moveBox = useCallback(
  //   (id: string, left: number, top: number) => {
  //     const newBoxes = { ...boxes };
  //     newBoxes[id] = { ...boxes[id] };
  //     newBoxes[id].left = left;
  //     newBoxes[id].top = top;
  //     setBoxes(newBoxes);
  //   },
  //   [boxes]
  // );

  const dropNewBox = (name: string, left: number, top: number, boxes: any) => {
    const newBoxes = { ...boxes };
    newBoxes[dayjs().unix()] = {
      top,
      left,
      title: name,
    };
    setBoxes(newBoxes);
  };

  // const removeBox = useCallback(
  //   (id: string) => {
  //     const newBoxes = { ...boxes };
  //     delete newBoxes[id];
  //     setBoxes({ ...newBoxes });
  //   },
  //   [boxes, setBoxes]
  // );

  const [{ isOver, canDrop }, drop] = useDrop(
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

  const isActive = canDrop && isOver;

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

  const handleSharePc = () => {
    // Create a temporary anchor element
    exportedLinkDowloadImage.click();
    const tempAnchor = document.createElement("a");

    // Set the href attribute to the Facebook share URL
    tempAnchor.href = shareFacebookUrl;

    // Set target and rel attributes if needed
    tempAnchor.target = "_blank";
    tempAnchor.rel = "noreferrer";

    // Append the anchor element to the document (required for some browsers)
    document.body.appendChild(tempAnchor);

    // Programmatically trigger a click event
    tempAnchor.click();

    // Remove the temporary anchor element from the document
    document.body.removeChild(tempAnchor);
  };

  const handleShare = async () => {
    try {
      await navigator.share(exportedLinkImage);
    } catch (error) {
      console.error("Error exporting image:", error);
    }
  };

  const handleDowload = () => {
    exportedLinkDowloadImage.click();
  };

  const handleBackToProfile = () => {
    navigate(`/users/${user?.userName ? user.userName : user.uuid}`);
  };

  const exportAsImage = async () => {
    // Get the element you want to capture
    const elementToCapture = document.getElementsByClassName(
      "campaign-result"
    ) as any;
    setExporting(true);

    if (elementToCapture && elementToCapture.length) {
      elementToCapture[0].insertAdjacentHTML(
        "afterend",
        elementToCapture[0].outerHTML
      );
      const newElement = document.getElementsByClassName(
        "campaign-result"
      )[1] as any;
      newElement.setAttribute("class", "campaign-export");
      const targetWidth = 960;
      const targetHeight = 960 * 0.63875;
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
        const imageDataURL = await domtoimage.toPng(newElement);
        const blob = await domtoimage.toBlob(newElement);
        const file = await new File([blob], "image.png", {
          type: blob.type,
        });

        const dataImage = {
          files: [file],
          title: "Image",
          text: "image",
        };

        // dowload image
        await domtoimage
          .toBlob(newElement)
          .then(function (blob: any) {
            let filename = "image.jpg";
            let link = document.createElement("a");
            link.download = filename.toLowerCase();
            link.href = URL.createObjectURL(blob);
            setExportedLinkDowloadImage(link);
          })
          .catch(function (error) {
            console.error("Error exporting image:", error);
          });

        setExportedLinkImage(dataImage);
        setExportedImage(imageDataURL);
        setExporting(false);
        newElement.remove();
      } catch (error) {
        console.error("Error exporting image:", error);
        throw error;
      }
    }
  };

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    // Check for common patterns in the userAgent string to determine device type
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(isMobile);
  }, []);

  // useEffect(() => {
  //   if (fetcher.data) {
  //     if (fetcher.data.reward) {
  //       setUploading(false);
  //       if (callback) {
  //         const toSubmit = {} as any;
  //         toSubmit[callback.key] = fetcher.data.key;
  //         fetcher.submit(toSubmit, {
  //           method: callback.method,
  //           action: callback.path,
  //         });
  //       } else if (onSelect) {
  //         onSelect(fetcher.data);
  //       }
  //       setModal(false);
  //     }
  //   }
  // }, [fetcher]);

  return (
    <Card
      bordered={false}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1000,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-0.png')`,
        backgroundSize: "cover",
        borderRadius: 30,
      }}
      bodyStyle={{
        paddingBlock: 80,
        paddingInline: 20,
      }}
    >
      <Flex vertical gap={0} justify="center" style={{ textAlign: "center" }}>
        <Title
          style={{
            marginTop: 0,
            marginBottom: 20,
            color: "inherit",
          }}
          level={2}
        >
          {t("this is your profile")}
        </Title>
        <Text
          style={{
            fontSize: "1.15em",
            color: "inherit",
          }}
        >
          {t("customize profile by your own style, and share to your friends")}
        </Text>

        <div
          style={{
            position: "relative",
            height: 0,
            paddingBottom: "63.875%",
            overflow: "hidden",
          }}
        >
          <div
            ref={combinedRef}
            className="campaign-result"
            style={{
              position: "relative",
              padding: 0,
              overflow: "hidden",
              backgroundColor: isActive
                ? "rgba(255,255,255,0.6)"
                : canDrop
                ? "rgba(255,255,255,0.2)"
                : "transparent",
            }}
          >
            <Image
              preview={false}
              src={
                data === "rare"
                  ? `/image/campaign/${data}-background.png`
                  : `/image/campaign/${data.result}-background.png`
              }
              placeholder={<Skeleton active />}
            />
            <Image
              preview={false}
              wrapperStyle={{
                position: "absolute",
                top: "13.5%",
                left: "30.5%",
                width: "63%",
              }}
              src={`/image/campaign/detail-background.png`}
            />
            <div
              style={{
                overflow: "hidden",
                ...thumbnailStyle,
              }}
            />
            <Image
              preview={false}
              wrapperStyle={{
                position: "absolute",
                top: "7%",
                left: "3%",
                width: "38%",
              }}
              src={
                data === "rare"
                  ? `/image/campaign/${data}-frame.png`
                  : `/image/campaign/${data.result}-frame.png`
              }
            />
            {editMode && (
              <label
                htmlFor="upload-button"
                className="hover-show-parent"
                style={{
                  display: "block",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: "9%",
                  ...thumbnailStyle,
                }}
              >
                <OverlayBg style={{ cursor: "pointer" }}>
                  <CameraOutlined style={{ fontSize: 36, color: "#fff" }} />
                </OverlayBg>
                <input
                  type="file"
                  id="upload-button"
                  accept="image/png,image/jpeg"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
              </label>
            )}
            <div
              style={{
                position: "absolute",
                top: "16%",
                left: "40%",
                width: "50%",
                textAlign: "left",
              }}
            >
              <div className="campaign-title">
                <Space align="center" size={5}>
                  <Image
                    preview={false}
                    src={`/image/campaign/icon/${
                      resultsData[data.result]?.icon
                    }.png`}
                    wrapperStyle={{ display: "block" }}
                    style={{ display: "block" }}
                  />
                  {data === "rare"
                    ? resultsData[data].title
                    : resultsData[data.result]?.title}
                </Space>
              </div>
              <div className="campaign-description">
                {data === "rare"
                  ? resultsData[data].description
                  : resultsData[data.result]?.description}
              </div>
              <Flex vertical style={{ position: "relative" }}>
                {resultsData[data === "rare" ? data : data.result].powers.map(
                  (power: number, index: number) => (
                    <div key={`power-${index}`} className="campaign-power">
                      <Image
                        preview={false}
                        src={`/image/campaign/power-${power}.png`}
                        wrapperStyle={{ display: "block" }}
                        style={{ display: "block" }}
                      />
                      <span className="campaign-power-text">
                        <span className="campaign-power-text-inner">
                          {t(powers[index])}
                        </span>
                      </span>
                    </div>
                  )
                )}
              </Flex>
              <div className="alias-text" style={{ marginTop: "10px" }}>
                {alias[data.alias - 1]}
              </div>
              {/* <Text
                className="alias-text"
                style={{ position: "absolute", left: "40%", color: "#000" }}
              ></Text> */}
            </div>
            {editMode && (
              <Input
                className="text-input"
                style={{
                  position: "absolute",
                  left: "7%",
                  top: "80%",
                  width: "86%",
                  whiteSpace: "nowrap",
                  border: 0,
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                }}
                maxLength={30}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="กรอกชื่อในเกมของคุณ..."
              />
            )}

            {!editMode && (
              <Text
                className="text-input"
                style={{
                  position: "absolute",
                  left: "7%",
                  top: "80%",
                  width: "86%",
                  whiteSpace: "nowrap",
                  border: 0,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                }}
              >
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
                  left={left}
                  top={top}
                  title={title}
                  editMode={editMode}
                  isMobile={isMobile}
                />
              );
            })}
          </div>
          <Media greaterThan="sm">
            {editMode ? (
              <Avatar
                icon={editMode ? <CloseOutlined /> : <EditOutlined />}
                style={{
                  position: "absolute",
                  top: "4.5%",
                  right: "2%",
                  ...iconStyle,
                }}
                onClick={user ? () => setEditMode(!editMode) : openLoginModal}
                size={48}
              />
            ) : (
              <Button
                style={{
                  position: "absolute",
                  top: "4.5%",
                  right: "2%",
                  height: 48,
                  color: "#fff",
                  backgroundColor: "#eb4d4f",
                  border: "none",
                }}
                icon={<EditOutlined />}
                shape="round"
                onClick={user ? () => setEditMode(!editMode) : openLoginModal}
              >
                {t("edit")}
              </Button>
            )}
          </Media>
          <Media at="sm">
            {editMode ? (
              <Avatar
                icon={<CloseOutlined />}
                style={{
                  position: "absolute",
                  top: "4.5%",
                  right: "2%",
                  ...iconStyle,
                }}
                onClick={user ? () => setEditMode(!editMode) : openLoginModal}
                size={30}
              />
            ) : (
              <Button
                style={{
                  position: "absolute",
                  top: "4.5%",
                  right: "2%",
                  height: 30,
                  padding: "0 10px",
                  fontSize: 8,
                  color: "#fff",
                  backgroundColor: "#eb4d4f",
                  border: "none",
                }}
                icon={<EditOutlined />}
                shape="round"
                onClick={user ? () => setEditMode(!editMode) : openLoginModal}
              >
                {t("edit")}
              </Button>
            )}
          </Media>
          {preview.display && (
            <div
              style={{
                width: "8%",
                maxWidth: 96,
                ...style,
              }}
            >
              <img
                src={`/image/campaign/${item.name}.png`}
                alt={item.name}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>
        {editMode ? (
          <div
            style={{
              position: "relative",
              paddingBlock: "2%",
              marginInline: "auto",
              backgroundColor: "rgba(255,255,255, 0.5)",
            }}
          >
            <div className="campaign-sticker-picker">
              {Array(7)
                .fill("")
                .map((_, index) => (
                  <DroppedBox
                    key={`sticker-${index + 1}`}
                    name={`sticker-${index + 1}`}
                    editMode={editMode}
                  >
                    <Image
                      preview={false}
                      src={`/image/campaign/sticker-${index + 1}.png`}
                      className="campaign-sticker-drop"
                    />
                  </DroppedBox>
                ))}
            </div>
            <div className="campaign-sticker-picker">
              {Array(7)
                .fill("")
                .map((_, index) => (
                  <DroppedBox
                    key={`sticker-${index + 8}`}
                    name={`sticker-${index + 8}`}
                    editMode={editMode}
                  >
                    <Image
                      preview={false}
                      src={`/image/campaign/sticker-${index + 8}.png`}
                      className="campaign-sticker-drop"
                    />
                  </DroppedBox>
                ))}
            </div>
            <div className="campaign-sticker-picker">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <DroppedBox
                    key={`sticker-${index + 15}`}
                    name={`sticker-${index + 15}`}
                    editMode={editMode}
                  >
                    <Image
                      preview={false}
                      src={`/image/campaign/sticker-${index + 15}.png`}
                      className="campaign-sticker-drop"
                    />
                  </DroppedBox>
                ))}
            </div>
          </div>
        ) : (
          <Flex gap={20} align="center" justify="center">
            <Space direction="vertical" style={{ lineHeight: "45px" }}>
              <Avatar
                icon={<PlusOutlined />}
                style={iconStyle}
                onClick={handleCreateNew}
                size={50}
              />
              <Text style={{ color: "#fff" }}>{t("create new")}</Text>
            </Space>
            <Space direction="vertical">
              <Avatar
                icon={<ShareAltOutlined />}
                style={iconStyle}
                onClick={isMobile ? openShareModal : exportImageBackup}
                size={50}
              />
              <Text style={{ color: "#fff" }}>{t("share")}</Text>
            </Space>
            <Space direction="vertical">
              <Avatar
                icon={<GiftOutlined />}
                style={iconStyle}
                onClick={user ? getTheGift : openLoginModal}
                size={50}
              />
              <Text style={{ color: "#fff" }}>{t("get the gift")}</Text>
            </Space>
          </Flex>
        )}
      </Flex>
      {shareModal && (
        <Modal {...modalProps} onCancel={closeShareModal} open={shareModal}>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <Title level={5}>{t("This is your avatar")}</Title>
            {!exportedImage && exporting ? (
              <div id="exportArea">
                <div>
                  <Loading />
                </div>
                <Image src={`/image/campaign/${data.result}-background.png`} />
              </div>
            ) : (
              <Image src={exportedImage} />
            )}
            {exportedLinkDowloadImage && exportedLinkImage && (
              <Space>
                <TiltButton color="primary" onClick={handleDowload}>
                  <Space>
                    {t("Dowload Avatar")}
                    <DownloadOutlined />
                  </Space>
                </TiltButton>
                <TiltButton
                  color="primary"
                  onClick={isMobile ? handleShare : handleSharePc}
                >
                  <Space>
                    {t("Share Avatar")}
                    <ShareAltOutlined />
                  </Space>
                </TiltButton>
              </Space>
            )}
          </div>
        </Modal>
      )}
      {giftModal && (
        <Modal {...modalProps} onCancel={closeGiftModal} open={giftModal}>
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Title level={5}>{t("This is your gift")}</Title>
            <Space direction="vertical">
              {gift && (
                <Image src={`${cdnUrl}/${gift}`} style={{ width: "50%" }} />
              )}
              <div>
                <Space direction="vertical" size={1}>
                  <Text>{t("select your profile frame")}</Text>
                  <Text>{t("by clicking your profile picture")}</Text>
                </Space>
              </div>
            </Space>
            <TiltButton
              color="primary"
              onClick={handleBackToProfile}
              style={{ marginTop: "10px" }}
            >
              <Space>{t("go to profile")}</Space>
            </TiltButton>
          </div>
        </Modal>
      )}
    </Card>
  );
}
