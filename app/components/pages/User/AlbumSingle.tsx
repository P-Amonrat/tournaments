import { useCallback, useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import {
  Card,
  Col,
  Flex,
  Row,
  theme,
  Typography,
  notification,
  Space,
  Spin,
  Image,
  Tooltip,
  Button,
  Modal,
} from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { useTranslation } from "react-i18next";
import { AlbumEntryControl } from "./AlbumEntryControl";
import {
  LockOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { LuHelpCircle, LuImagePlus } from "react-icons/lu";
import { FileUploaderMultiple } from "~/components/common";
const { useToken } = theme;
const { Text, Title } = Typography;

interface AlbumSingleProps {
  data: any;
  uuid: string;
  photos: any;
  fetcher?: any;
  isMyWebboard?: boolean;
}

export function AlbumSingle(props: AlbumSingleProps) {
  const { data, uuid, photos, fetcher } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const { token } = useToken();
  const isOwner = user && data && data.userId && data.userId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [visible, setVisible] = useState<any>(false);
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);
  const [modal, contextHolder2] = Modal.useModal();

  const photosStyle = {
    height: 200,
    opacity: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as any;

  const cardStyle = {
    borderRadius: 10,
    boxShadow:
      scheme === "dark" ? "none" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    border: "none",
  };

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const handleDelete = useCallback(
    (photoId: string) => {
      modal.confirm({
        title: `${t(`are you sure you want to delete this photo?`)}`,
        icon: <ExclamationCircleFilled />,
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { albumId: data.id, photoId: photoId },
            {
              method: "post",
              action: `/resources/delete-photo-album`,
            }
          );
        },
      });
    },
    [fetcher]
  );

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "paths" && fetcher.data.imageKeyOnlyList) {
        fetcher.submit(
          {
            paths: JSON.stringify({ paths: fetcher.data.imageKeyOnlyList }),
            id: data.id,
          },
          {
            method: "put",
            action: "/resources/upload-album-paths",
            encType: "multipart/form-data",
          }
        );
      }
      setUploading(false);
    }
  }, [fetcher.data]);

  return (
    <>
      <Card style={cardStyle}>
        <Flex gap={20} vertical>
          <Flex justify="space-between" align="flex-start" wrap="wrap">
            <Title level={5}>
              {data.isPrivate ? (
                <LockOutlined
                  style={{ color: "#7C6FF6", marginRight: "5px" }}
                />
              ) : (
                ""
              )}
              {data.name}
            </Title>
            <AlbumEntryControl
              fetcher={fetcher}
              id={data.id}
              userUuid={uuid}
              isOwner={isOwner}
              isForumAdmin={isForumAdmin}
              initialValues={data}
              postType="album"
            />
          </Flex>
          <Text>{data.description}</Text>
          <Row gutter={[20, 20]} wrap>
            {isOwner && (
              <Col span={12} md={6}>
                {uploading ? (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "60%",
                      borderRadius: 12,
                      backgroundColor: token.colorBgLayout,
                    }}
                  >
                    <Space
                      direction="vertical"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Spin size="large" style={{ color: "#7C6FF6" }} />
                      <Text style={{ color: "#7C6FF6", margin: 0 }}>
                        {t("uploading")}
                      </Text>
                    </Space>
                  </div>
                ) : (
                  <FileUploaderMultiple
                    fetcher={fetcher}
                    fieldName={"paths"}
                    maxUpload={5}
                    onUploading={setUploading}
                    onErrorFileTooLarge={handleFileTooLarge}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "60%",
                        borderRadius: 12,
                        backgroundColor: token.colorBgLayout,
                        cursor: "pointer",
                      }}
                    >
                      <Space
                        direction="horizontal"
                        size={10}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <LuImagePlus style={{ fontSize: "1.5em" }} />
                        <Title level={5} style={{ margin: 0 }}>
                          {t("upload images in album")}
                        </Title>
                      </Space>
                    </div>
                    <div style={{ position: "absolute", top: -10, right: 0 }}>
                      <Tooltip
                        placement="top"
                        arrow={false}
                        title={`${t("recommended resolution")} 1920x1080 px`}
                      >
                        <LuHelpCircle
                          size={24}
                          style={{ cursor: "pointer", color: "#7a6fee" }}
                        />
                      </Tooltip>
                    </div>
                  </FileUploaderMultiple>
                )}
              </Col>
            )}
            {uploading && photos.length === 0 ? (
              <Col span={12} md={6}>
                <Card
                  bordered={false}
                  style={{
                    ...photosStyle,
                  }}
                />
              </Col>
            ) : (
              false
            )}
            {photos.map((photo: any, index: number) => (
              <Col
                key={index}
                span={12}
                md={6}
                onMouseEnter={() => setHoveredPhoto(photo.path)}
                onMouseLeave={() => setHoveredPhoto(null)}
              >
                <div
                  style={{
                    width: "100%",
                    paddingBottom: "60%",
                    borderRadius: 12,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url("${cdnUrl}/${photo.path}")`,
                    cursor: "pointer",
                  }}
                  onClick={() => setVisible(photo.path)}
                >
                  <Image
                    style={{ display: "none" }}
                    wrapperStyle={{ display: "none" }}
                    src={`${cdnUrl}/${photo.path}`}
                    preview={{
                      visible: visible === photo.path,
                      src: `${cdnUrl}/${photo.path}`,
                      onVisibleChange: (value) => {
                        setVisible(value);
                      },
                    }}
                  />
                  {hoveredPhoto === photo.path && isOwner && (
                    // <Button
                    //   type="primary"
                    //   shape="circle"
                    //   icon={<DeleteOutlined />}
                    //   style={{
                    // position: "absolute",
                    // top: 10,
                    // right: 10,
                    //   }}
                    //   onClick={(e) => {
                    //     e.stopPropagation();
                    //     handleDelete(photo.id);
                    //   }}
                    // />
                    <Text
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 15,
                        fontSize: 18,
                        cursor: "pointer",
                        color: "#ffff",
                        backgroundColor: "#f5222d",
                        padding: "0 5px",
                        borderRadius: 5,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(photo.id);
                      }}
                    >
                      <DeleteOutlined />
                    </Text>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Flex>
        {contextHolder}
        {contextHolder2}
      </Card>
    </>
  );
}
