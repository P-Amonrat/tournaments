import React, { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Result,
  Row,
  Select,
  Space,
  Switch,
  Typography,
  Image,
  Tooltip,
  notification,
} from "antd";
import {
  DeleteOutlined,
  LoadingOutlined,
  PlusOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { AppContext, AuthContext } from "~/contexts";
import {
  BackButton,
  FileUploader,
  InlineAvatar,
  KycWizard,
  TextEditor,
  TiltButton,
  TiltCheck,
} from "~/components/common";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;

interface WebboardFormProps {
  editmode?: boolean;
  fetcher: any;
  form: any;
  games: any[];
  loading?: boolean;
  rooms: any[];
  tags?: any[];
  allTags?: any[];
  tournament?: any;
  onKycClicked?: () => void;
  navigationState?: string;
}

export function WebboardForm(props: WebboardFormProps) {
  const {
    editmode,
    fetcher,
    form,
    games,
    loading,
    rooms,
    tags,
    allTags,
    tournament,
    navigationState,
  } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [hasPoll, setHasPoll] = useState<boolean>(
    form.getFieldValue("hasPoll") ? form.getFieldValue("hasPoll") : false
  );
  const [textEditorLoading, setTextEditorLoading] = useState<boolean>(true);
  const [kycWizardModal, setKycWizardModal] = useState<boolean>(false);
  const allTagOptions = allTags
    ? allTags.map((tag: any) => ({ label: tag.name, value: tag.name }))
    : [];
  const tagOptions = tags
    ? tags.map((tag: any) => ({ label: tag.name, value: tag.name }))
    : [];
  const cardStyle = {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  const [searchedOptions, setSearchedOptions] = useState(tagOptions);

  // Update options based on user input
  const handleSearch = (inputValue: string) => {
    if (inputValue) {
      // If there is input, switch to allTagOptions for searching
      setSearchedOptions(allTagOptions);
    } else {
      // If input is empty, revert to tagOptions
      setSearchedOptions(tagOptions);
    }
  };

  const roomWihtoutTournament = rooms.filter(
    (item) => item.nameEn !== "tournament"
  );
  const roomWithOutBuySell = roomWihtoutTournament.filter(
    (item) => item.nameEn !== "buy sell"
  );

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const openKycWizardModal = () => {
    setKycWizardModal(true);
  };

  const closeKycWizardModal = () => {
    setKycWizardModal(false);
  };

  const handlePollChanged = (checked: boolean, e: any) => {
    setHasPoll(checked);
  };

  const handleMultipleSelect = useCallback(
    (field: string, values: any) => {
      form.setFieldValue(field, values);
    },
    [form]
  );

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "thumbnailImage") {
        form.setFieldValue("thumbnailImage", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);

  useEffect(() => {
    setTextEditorLoading(false);
  }, []);

  return (
    <Card bordered={false} style={cardStyle} bodyStyle={{ padding: 30 }}>
      <BackButton />
      <Row gutter={[60, 40]}>
        <Col flex="none">
          <InlineAvatar
            avatarUrl={
              user && user.displayImage
                ? `${cdnUrl}/${user.displayImage}`
                : "image/placeholder.png"
            }
            title={user && user.displayName ? user.displayName : ""}
          />
        </Col>
        <Col flex="auto">
          <Form.Item
            key="title"
            name="title"
            rules={[
              {
                required: true,
                message: t("please input title"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("title")}
              </Text>
            }
          >
            <Input maxLength={200} />
          </Form.Item>
          {!tournament && (
            <Form.Item
              key="roomIds"
              name="roomIds"
              rules={[
                {
                  required: true,
                  message: t("please input room"),
                },
              ]}
              label={
                <Space size={10}>
                  <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                    {t("rooms")}
                  </Text>
                  {!user.isDopaVerified && (
                    <Tooltip
                      placement="top"
                      arrow={false}
                      title={t(
                        'KYC to access "buy sell" and "tournament" rooms'
                      )}
                    >
                      <QuestionCircleOutlined
                        onClick={openKycWizardModal}
                        style={{ cursor: "pointer", color: "#7a6fee" }}
                      />
                    </Tooltip>
                  )}
                </Space>
              }
            >
              <TiltCheck
                fieldName="roomIds"
                labelKey="name"
                labelValue="id"
                multiple
                options={
                  user.isDopaVerified
                    ? roomWihtoutTournament
                    : roomWithOutBuySell
                }
                // onSelect={handleMultipleSelect}
                onSelect={handleMultipleSelect}
                initialValues={form.getFieldValue("roomIds")}
              />
            </Form.Item>
          )}
          {!tournament && (
            <Form.Item
              key="gameIds"
              name="gameIds"
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("games")}
                </Text>
              }
            >
              <TiltCheck
                fieldName="gameIds"
                labelKey="name"
                labelValue="id"
                multiple
                options={games}
                onSelect={handleMultipleSelect}
                initialValues={form.getFieldValue("gameIds")}
              />
            </Form.Item>
          )}
          <Form.Item
            key="tags"
            name="tags"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("tags")}
              </Text>
            }
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder={t("input tags")}
              options={searchedOptions}
              onSearch={handleSearch} // Handle search input change
              onChange={(tags: string[]) => {
                const processedTags = tags.map((tag: string) =>
                  tag.replace(/^#+/, "")
                );
                form.setFieldsValue({ tags: processedTags });
              }}
            />
          </Form.Item>
          <Space
            direction="vertical"
            size={5}
            style={{ display: "flex", marginBottom: 20, marginTop: 20 }}
          >
            <Row style={{ marginBottom: 10, alignItems: "baseline" }}>
              <Col flex="auto">
                <Text style={{ fontWeight: 600 }}>
                  {t("please upload post thumbnail")} ({t("recommended ratio")}{" "}
                  4:5)
                </Text>
              </Col>
              <Col flex="none">
                <Form.Item
                  key="thumbnailImage"
                  name="thumbnailImage"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: `${t("please upload thumnail image")} ${t(
                  //       "recommended ratio"
                  //     )} 2:1`,
                  //   },
                  // ]}
                >
                  <FileUploader
                    fetcher={fetcher}
                    fieldName={"thumbnailImage"}
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
              <Result
                icon={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
            ) : form && form.getFieldValue("thumbnailImage") ? (
              <Image
                preview={false}
                style={{ maxWidth: 400 }}
                src={`${cdnUrl}/${form.getFieldValue("thumbnailImage")}`}
              />
            ) : (
              <></>
            )}
          </Space>
          {!textEditorLoading ? (
            <Form.Item
              key="content"
              name="content"
              rules={[
                {
                  required: true,
                  message: t("please input content"),
                },
              ]}
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("content")}
                </Text>
              }
            >
              <TextEditor
                id="post-content"
                initialValues={form.getFieldValue("content")}
                fetcher={fetcher}
                onChange={(values: any) =>
                  form.setFieldValue("content", values)
                }
              />
            </Form.Item>
          ) : (
            <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          )}
          {!editmode && (
            <>
              <Space size={10} style={{ marginTop: 20 }}>
                <Form.Item
                  key="hasPoll"
                  name="hasPoll"
                  valuePropName="checked"
                  label={
                    <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                      {t("create poll")}
                    </Text>
                  }
                >
                  <Switch onChange={handlePollChanged} />
                </Form.Item>
              </Space>
              {hasPoll && (
                <Flex vertical gap={20} style={{ marginTop: 30 }}>
                  <Title level={5} style={{ margin: 0 }}>
                    {t("poll options")}
                  </Title>
                  <Form.List
                    name="pollOptions"
                    initialValue={["", ""]}
                    rules={[
                      {
                        validator: async (_, names) => {
                          if (!names || names.length < 2) {
                            return Promise.reject(
                              new Error(t("at least 2 options"))
                            );
                          }
                          if (names.length > 10) {
                            return Promise.reject(
                              new Error(t("maximum 10 options"))
                            );
                          }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        <Flex gap={10} vertical>
                          {fields.map((field, index) => (
                            <Form.Item key={field.key} noStyle>
                              <Row
                                gutter={[10, 10]}
                                wrap={false}
                                style={{ alignItems: "center" }}
                              >
                                <Col flex="auto">
                                  <Form.Item
                                    {...field}
                                    noStyle
                                    rules={[
                                      {
                                        required: true,
                                        whitespace: true,
                                        message: t(
                                          "Please input option or delete this field."
                                        ),
                                      },
                                    ]}
                                  >
                                    <Input
                                      placeholder="option"
                                      style={{ width: "100%" }}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col flex="none">
                                  <Button
                                    danger
                                    icon={<DeleteOutlined />}
                                    onClick={() => remove(field.name)}
                                  />
                                </Col>
                              </Row>
                            </Form.Item>
                          ))}
                        </Flex>
                        <Form.ErrorList errors={errors} />
                        <Space>
                          <TiltButton color="secondary" onClick={() => add()}>
                            <PlusOutlined style={{ fontSize: "1.2em" }} />
                          </TiltButton>
                        </Space>
                      </>
                    )}
                  </Form.List>
                </Flex>
              )}
            </>
          )}
          {contextHolder}
          <Flex justify="space-between" style={{ marginTop: 40 }}>
            <TiltButton
              disabled={loading || navigationState !== "idle"}
              color="primary"
              onClick={!loading ? () => form.submit() : undefined}
            >
              {loading ? (
                <LoadingOutlined style={{ fontSize: 24 }} spin />
              ) : editmode ? (
                t("edit post")
              ) : (
                t("create post")
              )}
            </TiltButton>
            {!editmode && (
              <Space size={10}>
                <Text>{t("anonymous")}</Text>
                <Form.Item
                  key="anonymous"
                  name="anonymous"
                  valuePropName="checked"
                  noStyle
                >
                  <Switch
                    // onClick={user.isDopaVerified ? undefined : onKycClicked}
                    disabled={user.isDopaVerified ? false : true}
                  />
                </Form.Item>
                {!user.isDopaVerified && (
                  <Tooltip
                    placement="top"
                    arrow={false}
                    title={t('KYC to access "anonymouse" and "buy sell" rooms')}
                  >
                    <QuestionCircleOutlined
                      onClick={openKycWizardModal}
                      style={{ cursor: "pointer", color: "#7a6fee" }}
                    />
                  </Tooltip>
                )}
              </Space>
            )}
          </Flex>
        </Col>
      </Row>
      {!user.isDopaVerified && (
        <Modal
          open={kycWizardModal}
          closable={false}
          footer={false}
          onCancel={closeKycWizardModal}
        >
          <KycWizard />
        </Modal>
      )}
    </Card>
  );
}
