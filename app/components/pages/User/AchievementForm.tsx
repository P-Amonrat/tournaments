import { useEffect, useState } from "react";
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
  Typography,
  Card,
  Image,
} from "antd";
import { LoadingOutlined, EditOutlined } from "@ant-design/icons";
import { FileUploader, TiltButton } from "~/components/common";
import { useMatches } from "@remix-run/react";
import { flattenObject } from "~/utils/helper";
import { TbPhotoPlus } from "react-icons/tb";
const { Text, Title } = Typography;

interface AchievementFormProps {
  fetcher: any;
  form: any;
  action: string;
  type?: string;
  initialValues?: any;
  onCancel: () => void;
}

export function AchievementForm(props: AchievementFormProps) {
  const { fetcher, form, initialValues, onCancel, action, type } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  // const { user } = useContext(AuthContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(
    initialValues?.image
  );

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#EEEEEE",
  } as any;

  const handleSubmit = (values: any) => {
    const { isPrivate, ...rest } = values;
    fetcher.submit(
      {
        data: JSON.stringify({
          ...rest,
          type: type,
          id: initialValues?.id,
        }),
      },
      action === "create"
        ? {
            method: "post",
            action: `/resources/create-achievement`,
          }
        : {
            method: "put",
            action: `/resources/edit-achievement`,
          }
    );
    setPreviewImage(null);
    form.setFieldValue("image", null);
    form.resetFields();
    onCancel();
  };

  useEffect(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(flattenObject(initialValues));
        setPreviewImage(initialValues?.image);
      }
    }
  }, [initialValues, form]);

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "image") {
        form.setFieldValue("image", fetcher.data.key);
      }

      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);

  return (
    <div style={{ padding: 10 }}>
      <Form
        form={form}
        initialValues={flattenObject(initialValues)}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Title level={4} style={{ margin: 0 }}>
          {action === "create" ? t("add achievement") : t("edit achievement")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <Form.Item
            key="image"
            name="image"
            style={{ margin: "0px", padding: "0px" }}
            rules={[
              {
                required: true,
                message: t("please input achievement image"),
              },
            ]}
          >
            <Row>
              <Col flex="auto">
                <Space direction="vertical" size={5}>
                  <Text style={{ fontWeight: 600 }}>
                    {t("achievement image")}
                  </Text>
                  {fetcher && fetcher.state && fetcher.state !== "idle" ? (
                    <Card
                      bordered={false}
                      style={{
                        ...photosStyle,
                        textAlign: "center",
                        justifyContent: "center",
                        margin: "15px 0",
                      }}
                    >
                      <LoadingOutlined
                        style={{
                          fontSize: 24,
                          margin: "40px auto",
                        }}
                        spin
                      />
                    </Card>
                  ) : (
                    <div>
                      {!form.getFieldValue("image") && !initialValues && (
                        <FileUploader
                          fetcher={fetcher}
                          fieldName={"image"}
                          // maxUpload={5}
                          onUploading={setUploading}
                          onErrorFileTooLarge={handleFileTooLarge}
                        >
                          <Card
                            bordered={false}
                            style={{
                              ...photosStyle,
                              backgroundImage: `url("${cdnUrl}/${
                                initialValues
                                  ? previewImage
                                  : form.getFieldValue("image")
                              }")`,
                              textAlign: "center",
                              justifyContent: "center",
                              margin: "15px 0",
                              cursor: "pointer",
                            }}
                          >
                            {!form.getFieldValue("image") && !previewImage && (
                              <div
                                style={{
                                  textAlign: "center",
                                  margin: 0,
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  msTransform: "translate(-50%,-50%)",
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                <Space size={5} style={{ color: "black" }}>
                                  <TbPhotoPlus />
                                  {t("add")}
                                </Space>
                              </div>
                            )}
                          </Card>
                        </FileUploader>
                      )}
                      {(form.getFieldValue("image") || initialValues) && (
                        <Image
                          style={{
                            marginTop: "15px",
                            position: "relative",
                            height: 150,
                            width: 120,
                            borderRadius: 5,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "#EEEEEE",
                          }}
                          src={`${cdnUrl}/${
                            initialValues
                              ? previewImage
                              : form.getFieldValue("image")
                          }`}
                          preview={true}
                        />
                      )}
                    </div>
                  )}
                </Space>
              </Col>
              {(form.getFieldValue("image") || initialValues) && (
                <Col flex="none">
                  <FileUploader
                    fetcher={fetcher}
                    fieldName={"image"}
                    onUploading={setUploading}
                    onErrorFileTooLarge={handleFileTooLarge}
                  >
                    <Space size={5} style={{ cursor: "pointer" }}>
                      <EditOutlined style={{ color: "#8263ea" }} />
                      <Text>{t("change")}</Text>
                    </Space>
                  </FileUploader>
                </Col>
              )}
            </Row>
          </Form.Item>
          <Form.Item
            key="name"
            name="name"
            rules={[
              {
                required: true,
                message: t("please input achievement name"),
              },
            ]}
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("achievement name")}
                </Text>
              </Space>
            }
          >
            <Input />
          </Form.Item>
          <Form.Item
            key="url"
            name="url"
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("achievement url")}
                </Text>
              </Space>
            }
          >
            <Input />
          </Form.Item>
        </Flex>
        <Row gutter={10} style={{ marginTop: 30 }}>
          <Col span={12}>
            <TiltButton color="secondary" onClick={onCancel}>
              {t("cancel")}
            </TiltButton>
          </Col>
          <Col span={12}>
            <TiltButton color="primary" onClick={() => form.submit()}>
              {action === "create" ? t("create achievement") : t("edit")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {contextHolder}
    </div>
  );
}
