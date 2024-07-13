import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Divider,
  Flex,
  Form,
  Input,
  notification,
  Row,
  Space,
  // theme,
  Typography,
  Avatar,
  theme,
  Modal,
} from "antd";
import {
  LoadingOutlined,
  CameraOutlined,
  EditOutlined,
} from "@ant-design/icons";
// import { AuthContext } from "~/contexts";
import { FileUploader, OverlayBg, TiltButton } from "~/components/common";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;
const { useToken } = theme;

interface ExperienceTitleFormProps {
  fetcher: any;
  form: any;
  action: string;
  initialValues?: any;
  gameId: number | undefined;
  onCancel: () => void;
  handleDeleteExperienceTitle?: () => void;
}

export function ExperienceTitleForm(props: ExperienceTitleFormProps) {
  const {
    fetcher,
    form,
    initialValues,
    onCancel,
    action,
    gameId,
    handleDeleteExperienceTitle,
  } = props;

  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  // const { user } = useContext(AuthContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [modal, contextHolder2] = Modal.useModal();

  const avatarStyle = {
    position: "absolute",
    left: "1.5%",
    bottom: -30,
    padding: 2,
    border: `5px solid ${token.colorBgLayout}`,
    borderRadius: "50%",
    overflow: "hidden",
  } as any;

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const handleSubmit = useCallback(
    (values: any) => {
      const { isPrivate, ...rest } = values;

      fetcher.submit(
        {
          data: JSON.stringify({
            ...rest,
            rankingGameId: gameId,
            id: initialValues?.id,
          }),
        },
        action === "create"
          ? {
              method: "post",
              action: `/resources/create-experience-title`,
            }
          : {
              method: "put",
              action: `/resources/edit-experience-title`,
            }
      );
      form.setFieldValue("icon", null);
      form.resetFields();
      onCancel();
    },
    [fetcher, form, onCancel]
  );

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "icon") {
        form.setFieldValue("icon", fetcher.data.key);
      }

      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);

  return (
    <div style={{ padding: 10 }}>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Title level={4} style={{ margin: 0 }}>
          {action === "create"
            ? t("add experience title")
            : t("edit experience title")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <Form.Item
            key="icon"
            name="icon"
            style={{ margin: "0px", marginBottom: "25px", padding: "0px" }}
            rules={[
              {
                required: true,
                message: (
                  <div style={{ marginTop: "17px" }}>
                    {t("please input game icon")}
                  </div>
                ),
              },
            ]}
          >
            <Row style={{ marginBottom: 10 }}>
              <Col flex="auto">
                <Space direction="vertical" size={5}>
                  <Text style={{ fontWeight: 600 }}>{t("game icon")}</Text>
                  {fetcher && fetcher.state && fetcher.state !== "idle" ? (
                    <Avatar size={75}>
                      <LoadingOutlined style={{ fontSize: 24 }} spin />
                    </Avatar>
                  ) : (
                    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                      <div style={avatarStyle} className="hover-show-parent">
                        <OverlayBg
                          className="hover-show-child"
                          style={{ cursor: "pointer" }}
                        >
                          <CameraOutlined
                            style={{ fontSize: 30, color: "#fff" }}
                          />
                        </OverlayBg>
                        <FileUploader
                          fetcher={fetcher}
                          fieldName={"icon"}
                          // maxUpload={5}
                          onUploading={setUploading}
                          onErrorFileTooLarge={handleFileTooLarge}
                        >
                          <Avatar
                            size={75}
                            // src={`${cdnUrl}/profile-teams/profile-team-${1}.jpg`}
                            src={`${cdnUrl}/${form.getFieldValue("icon")}`}
                          />
                        </FileUploader>
                      </div>
                    </div>
                  )}
                </Space>
              </Col>
              <Col flex="none">
                <FileUploader
                  fetcher={fetcher}
                  fieldName={"icon"}
                  // maxUpload={5}
                  onUploading={setUploading}
                  onErrorFileTooLarge={handleFileTooLarge}
                >
                  <Space size={5} style={{ cursor: "pointer" }}>
                    <EditOutlined style={{ color: "#8263ea" }} />
                    <Text>{t("change")}</Text>
                  </Space>
                </FileUploader>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            key="title"
            name="title"
            rules={[
              {
                required: true,
                message: t("please input experience title"),
              },
            ]}
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("experience title")}
                </Text>
              </Space>
            }
          >
            <Input />
          </Form.Item>
        </Flex>
        <Space direction="vertical" style={{ display: "flex" }}>
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onCancel}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={() => form.submit()}>
                {action === "create"
                  ? t("create experience")
                  : t("edit experience")}
              </TiltButton>
            </Col>
          </Row>
          {initialValues && (
            <TiltButton color="danger" onClick={handleDeleteExperienceTitle}>
              {t("delete experience title")}
            </TiltButton>
          )}
        </Space>
      </Form>
      {contextHolder}
      {contextHolder2}
    </div>
  );
}
