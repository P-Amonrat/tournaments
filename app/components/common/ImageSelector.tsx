import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  Divider,
  Image,
  Modal,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import { FileUploader, OverlayBg, TiltButton } from "~/components/common";
import { useTranslation } from "react-i18next";
import { useMatches } from "@remix-run/react";
const { Title } = Typography;

interface ImageSelectorProps {
  callback?: any;
  children: React.ReactNode;
  fetcher: any;
  fieldName: string;
  onSelect?: (imageObj: any) => void;
  title: string;
  presetRound?: boolean;
  presetImages: string[];
  frameImages?: { id: string; url: string }[];
}

export function ImageSelector(props: ImageSelectorProps) {
  const {
    callback,
    children,
    fetcher,
    fieldName,
    onSelect,
    presetImages,
    presetRound,
    title,
    frameImages,
  } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const handleSelectImage = (image: string, action: string) => {
    const imageKey = image.replace(`${cdnUrl}/`, "");
    if (action === "frame") {
      if (callback) {
        const toSubmit = {} as any;
        toSubmit["assetId"] = imageKey;

        fetcher.submit(toSubmit, {
          method: callback.method,
          action: callback.path,
        });
      } else if (onSelect) {
        onSelect({ key: imageKey, url: image });
      }
    } else if (action === "all") {
      if (callback) {
        const toSubmit = {} as any;
        toSubmit[callback.key] = imageKey;

        fetcher.submit(toSubmit, {
          method: callback.method,
          action: callback.path,
        });
      } else if (onSelect) {
        onSelect({ key: imageKey, url: image });
      }
    }
    setModal(false);
  };

  const handleNoFrame = useCallback(() => {
    fetcher.submit(null, {
      method: "put",
      action: `/resources/no-frame`,
    });
    setModal(false);
  }, [fetcher]);

  useEffect(() => {
    if (
      fetcher.data &&
      fetcher.data.field &&
      fetcher.state &&
      fetcher.state === "idle"
    ) {
      if (fetcher.data.field === fieldName && fetcher.data.url) {
        setUploading(false);
        if (callback) {
          const toSubmit = {} as any;
          toSubmit[callback.key] = fetcher.data.key;
          fetcher.submit(toSubmit, {
            method: callback.method,
            action: callback.path,
          });
        } else if (onSelect) {
          onSelect(fetcher.data);
        }
        setModal(false);
      }
    }
  }, [fetcher]);

  return (
    <>
      <div onClick={() => setModal(true)}>{children}</div>
      <Modal
        closeIcon={false}
        closable={!uploading}
        footer={null}
        open={modal}
        onCancel={() => setModal(false)}
        modalRender={(modal) => modal}
        zIndex={1002}
      >
        <Card
          bodyStyle={{ padding: 20 }}
          style={{ backgroundColor: "transparent" }}
          bordered={false}
        >
          {frameImages && (
            <Space
              direction="vertical"
              size={30}
              style={{
                display: "flex",
                position: "relative",
              }}
            >
              <Title
                level={3}
                style={{ marginBottom: 20, marginTop: 0, textAlign: "center" }}
              >
                {t("select frame")}
              </Title>
              <Row gutter={[15, 15]} style={{ position: "relative" }}>
                <Col
                  span={4}
                  style={{ justifyContent: "center", cursor: "pointer" }}
                  onClick={handleNoFrame}
                >
                  <Image
                    src={"/image/no-frame.png"}
                    preview={false}
                    wrapperStyle={
                      presetRound
                        ? { borderRadius: "50%", overflow: "hidden" }
                        : undefined
                    }
                  />
                </Col>
                {frameImages.map((image) => (
                  <Col
                    key={image.id}
                    span={4}
                    style={{ justifyContent: "center", cursor: "pointer" }}
                    onClick={() => handleSelectImage(image.id, "frame")}
                  >
                    <Image
                      src={image.url}
                      preview={false}
                      wrapperStyle={
                        presetRound
                          ? { borderRadius: "50%", overflow: "hidden" }
                          : undefined
                      }
                    />
                  </Col>
                ))}
                {uploading && <OverlayBg loading />}
              </Row>
              <Divider plain style={{ marginBlock: 0, marginBottom: "15px" }} />
            </Space>
          )}
          <Space
            direction="vertical"
            size={30}
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <Title
              level={3}
              style={{ marginBottom: 20, marginTop: 0, textAlign: "center" }}
            >
              {title}
            </Title>
            <Row gutter={[15, 15]} style={{ position: "relative" }}>
              {presetImages.map((image: string) => (
                <Col
                  key={image}
                  span={4}
                  style={{ justifyContent: "center", cursor: "pointer" }}
                  onClick={() => handleSelectImage(image, "all")}
                >
                  <Image
                    src={image}
                    preview={false}
                    wrapperStyle={
                      presetRound
                        ? { borderRadius: "50%", overflow: "hidden" }
                        : undefined
                    }
                  />
                </Col>
              ))}
              {uploading && <OverlayBg loading />}
            </Row>
            <Divider plain style={{ marginBlock: 0 }}>
              {t("or")}
            </Divider>
            <FileUploader
              disabled={uploading}
              fetcher={fetcher}
              fieldName={fieldName}
              onUploading={setUploading}
              onErrorFileTooLarge={handleFileTooLarge}
            >
              <TiltButton
                color={uploading ? "secondary" : "primary"}
                style={{ width: 600, cursor: "pointer", maxWidth: "100%" }}
              >
                {t("upload image")}
              </TiltButton>
            </FileUploader>
          </Space>
        </Card>
      </Modal>
      {contextHolder}
    </>
  );
}
