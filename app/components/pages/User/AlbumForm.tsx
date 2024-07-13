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
  Switch,
  Typography,
  Image,
  Card,
} from "antd";
import { EditOutlined, LoadingOutlined } from "@ant-design/icons";
// import { AuthContext } from "~/contexts";
import { FileUploader, TiltButton } from "~/components/common";
import { useMatches } from "@remix-run/react";
import { TbPhotoPlus } from "react-icons/tb";
const { Text, Title } = Typography;
// const { useToken } = theme;

interface AlbumFormProps {
  fetcher: any;
  form: any;
  action: string;
  initialValues?: any;
  onCancel: () => void;
}

export function AlbumForm(props: AlbumFormProps) {
  const { fetcher, form, initialValues, onCancel, action } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<any>(initialValues);
  const [previewCover, setPreviewCover] = useState<string | null>(
    initialValues?.cover
  );

  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#EEEEEE",
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
            isPrivate: isPrivate ? isPrivate : false,
            id: defaultValues ? defaultValues.id : undefined,
          }),
        },
        action === "create"
          ? {
              method: "post",
              action: `/resources/create-album`,
            }
          : {
              method: "put",
              action: `/resources/edit-album`,
            }
      );
      form.setFieldsValue(initialValues);
      form.setFieldValue("cover", null);
      setPreviewCover(null);
      form.resetFields();
      onCancel();
    },
    [fetcher, form, onCancel]
  );

  useEffect(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(initialValues);
        setPreviewCover(initialValues?.cover);
      }
    }
  }, [initialValues, form, fetcher.data]);

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "cover") {
        form.setFieldValue("cover", fetcher.data.key);
        setPreviewCover(fetcher.data.key);
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
          {action === "create" ? t("create album") : t("edit album")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          {/* <Row style={{ marginBottom: 10, alignItems: "baseline" }}>
            <Col flex="auto">
              <Text className="required" style={{ fontWeight: 600 }}>
                {t("upload cover image")} ({t("recommended resolution")}{" "}
                1920x1080 px)
              </Text>
            </Col>
            <Col flex="none">
              <Form.Item
                key="cover"
                name="cover"
                rules={[
                  {
                    required: true,
                    message: `${t("upload cover image")} ${t(
                      "recommended resolution"
                    )} 1920x1080 px`,
                  },
                ]}
              >
                <FileUploader
                  fetcher={fetcher}
                  fieldName={"cover"}
                  onUploading={setUploading}
                  onErrorFileTooLarge={handleFileTooLarge}
                >
                  <Space size={5} style={{ cursor: "pointer" }}>
                    <EditOutlined style={{ color: "#8263ea" }} />
                    <Text>{t("upload")}</Text>
                  </Space>
                </FileUploader>
              </Form.Item>
            </Col>
          </Row>
          {uploading ? (
            <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          ) : previewCover ? (
            <Image
              preview={false}
              style={{ maxWidth: 400 }}
              src={`${cdnUrl}/${previewCover}`}
            />
          ) : (
            false
          )} */}
          <Form.Item
            key="cover"
            name="cover"
            style={{ margin: "0px", padding: "0px" }}
            rules={[
              {
                required: true,
                message: `${t("upload cover image")} ${t(
                  "recommended resolution"
                )} 1920x1080 px`,
              },
            ]}
          >
            <Row>
              <Col flex="auto">
                <Space direction="vertical" size={5}>
                  <Text style={{ fontWeight: 600 }}>
                    {t("upload cover image")} ({t("recommended resolution")}{" "}
                    1920x1080 px)
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
                      {!form.getFieldValue("cover") && !initialValues && (
                        <FileUploader
                          fetcher={fetcher}
                          fieldName={"cover"}
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
                                  ? previewCover
                                  : form.getFieldValue("cover")
                              }")`,
                              textAlign: "center",
                              justifyContent: "center",
                              margin: "15px 0",
                              cursor: "pointer",
                            }}
                          >
                            {!form.getFieldValue("cover") && !previewCover && (
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
                      {(form.getFieldValue("cover") || initialValues) && (
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
                              ? previewCover
                              : form.getFieldValue("cover")
                          }`}
                          preview={true}
                        />
                      )}
                    </div>
                  )}
                </Space>
              </Col>
              {(form.getFieldValue("cover") || initialValues) && (
                <Col flex="none">
                  <FileUploader
                    fetcher={fetcher}
                    fieldName={"cover"}
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
            required={false}
            rules={[
              () => ({
                validator(_, value) {
                  if (!value || value === "") {
                    const message = t("please input album name");
                    return Promise.reject(new Error(message));
                  }
                  if (value.length > 30) {
                    const message = t(
                      "album name must contain only 30 charaters"
                    );
                    return Promise.reject(new Error(message));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("album name")}
                </Text>
              </Space>
            }
          >
            <Input
              count={{
                show: true,
                max: 30,
              }}
            />
          </Form.Item>
          <Form.Item
            key="description"
            name="description"
            rules={[
              () => ({
                validator(_, value) {
                  if (value && value.length > 500) {
                    const message = t(
                      "description must contain only 500 charaters"
                    );
                    return Promise.reject(new Error(message));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            label={
              <Space size={5}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("description")}
                </Text>
              </Space>
            }
          >
            <Input.TextArea
              placeholder={t("input description")}
              autoSize={{
                minRows: 5,
              }}
              count={{
                show: true,
                max: 500,
              }}
            />
          </Form.Item>
          <Space size={10}>
            <Form.Item
              key="isPrivate"
              name="isPrivate"
              valuePropName="checked"
              noStyle
            >
              <Switch />
            </Form.Item>
            <Text>{t("private album")}</Text>
          </Space>
        </Flex>
        <Row gutter={10} style={{ marginTop: 30 }}>
          <Col span={12}>
            <TiltButton color="secondary" onClick={onCancel}>
              {t("cancel")}
            </TiltButton>
          </Col>
          <Col span={12}>
            <TiltButton color="primary" onClick={() => form.submit()}>
              {action === "create" ? t("create album") : t("edit album")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {contextHolder}
    </div>
  );
}
