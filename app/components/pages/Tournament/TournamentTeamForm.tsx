import {
  Avatar,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Result,
  Row,
  Space,
  Typography,
  notification,
  theme,
  Image,
} from "antd";
import {
  EditOutlined,
  LoadingOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useFetcher, useMatches } from "@remix-run/react";
import {
  FileUploader,
  ImageSelector,
  OverlayBg,
  TiltButton,
} from "~/components/common";

const { Text, Title } = Typography;
const { useToken } = theme;

interface TournamentTeamFormProps {
  form?: any;
  team?: any;
  onCancel?: (e: any) => void | undefined;
  isSlipRequired?: boolean;
  onSubmit: (values: any) => void;
  submitLabel: string;
}

const randomNumber = Math.floor(Math.random() * 8) + 1;

export function TournamentTeamForm(props: TournamentTeamFormProps) {
  const { form, isSlipRequired, onCancel, onSubmit, submitLabel, team } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification.useNotification();
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { token } = useToken();
  const displayImageField = "logo";
  const [previewImage, setPreviewImage] = useState<string>();
  const [isContactPerson, setIsContactPerson] = useState<boolean>(
    team && team.isContactPerson ? team.isContactPerson : false
  );
  const [uploading, setUploading] = useState<boolean>(false);
  const [isSlip, setIsSlip] = useState<boolean>(false);
  const [previewUploadImage, setPreviewUploadImage] = useState<any>();

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

  const handleContactPersonChange = (e: any) => {
    setIsContactPerson(e.target.checked);
  };

  const handleSelectPresetImage = useCallback(
    (image: any) => {
      form.setFieldValue(displayImageField, image.key);
      setPreviewImage(image.url);
    },
    [form]
  );

  const displayPresetImages = Array(8)
    .fill("")
    .map(
      (arg: string, index: number) =>
        `${cdnUrl}/profile-teams/profile-team-${index + 1}.jpg`
    );

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "slipImageUrl") {
        form.setFieldValue("slipImageUrl", fetcher.data.key);
        setIsSlip(fetcher.data.isSlip);
        setPreviewUploadImage(fetcher.data.previewImage);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      initialValues={team}
      layout="vertical"
    >
      <Title level={4} style={{ margin: 0 }}>
        {t(team ? "team info" : "create team")}
      </Title>
      <Divider style={{ marginBlock: 15 }} />
      <Space direction="vertical" size={0} style={{ display: "flex" }}>
        <Form.Item
          key={displayImageField}
          name={displayImageField}
          initialValue={`profile-teams/profile-team-${randomNumber}.jpg`}
          style={{ margin: "0px", marginBottom: "25px", padding: "0px" }}
          rules={[
            {
              required: true,
              message: t("please input team logo"),
            },
          ]}
        >
          <Row style={{ marginBottom: 10 }}>
            <Col flex="auto">
              <Space direction="vertical" size={5}>
                <Text style={{ fontWeight: 600 }}>{t("team logo")}</Text>
                {fetcher && fetcher.state && fetcher.state !== "idle" ? (
                  <Avatar size={75}>
                    <LoadingOutlined style={{ fontSize: 24 }} spin />
                  </Avatar>
                ) : (
                  <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                    <div style={avatarStyle} className="hover-show-parent">
                      <Avatar
                        size={75}
                        src={
                          previewImage
                            ? previewImage
                            : team && team.logo
                            ? `${cdnUrl}/${team.logo}`
                            : `${cdnUrl}/profile-teams/profile-team-${randomNumber}.jpg`
                        }
                      />
                      <ImageSelector
                        title={t("select display image")}
                        fetcher={fetcher}
                        fieldName={displayImageField}
                        onSelect={handleSelectPresetImage}
                        presetImages={displayPresetImages}
                        presetRound
                      >
                        <OverlayBg
                          className="hover-show-child"
                          style={{ cursor: "pointer" }}
                        >
                          <CameraOutlined
                            style={{ fontSize: 30, color: "#fff" }}
                          />
                        </OverlayBg>
                      </ImageSelector>
                    </div>
                  </div>
                )}
              </Space>
            </Col>
            <Col flex="none">
              <ImageSelector
                title={t("select display image")}
                fetcher={fetcher}
                fieldName={displayImageField}
                onSelect={handleSelectPresetImage}
                presetImages={displayPresetImages}
                presetRound
              >
                <Space size={5} style={{ cursor: "pointer" }}>
                  <EditOutlined style={{ color: "#8263ea" }} />
                  <Text>{t("change")}</Text>
                </Space>
              </ImageSelector>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          key="name"
          name="name"
          rules={[
            {
              required: true,
              message: t("please input team name"),
            },
          ]}
          label={
            <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
              {t("team name")}
            </Text>
          }
        >
          <Input />
        </Form.Item>
        {isSlipRequired && (
          <Space
            direction="vertical"
            size={5}
            style={{ display: "flex", marginBottom: 20 }}
          >
            <Row style={{ marginBottom: 10, alignItems: "baseline" }}>
              <Col flex="auto">
                <Text
                  className={isSlipRequired ? "required" : undefined}
                  style={{ fontWeight: 600 }}
                >
                  {t("upload slip image")}
                </Text>
              </Col>
              <Col flex="none">
                <Form.Item
                  key="slipImageUrl"
                  name="slipImageUrl"
                  rules={[
                    {
                      required: true,
                      message: `${t("please upload slip image")}`,
                    },
                  ]}
                >
                  <FileUploader
                    fetcher={fetcher}
                    fieldName={"slipImageUrl"}
                    onUploading={setUploading}
                    onErrorFileTooLarge={handleFileTooLarge}
                    isSlip={true}
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
            ) : form && form.getFieldValue("slipImageUrl") ? (
              <Image
                preview={false}
                style={{ maxWidth: "400px" }}
                alt="slip"
                src={
                  !isSlip
                    ? `${cdnUrl}/${form.getFieldValue("slipImageUrl")}`
                    : `data:image/png;base64,${previewUploadImage}`
                }
              />
            ) : (
              <></>
            )}
          </Space>
        )}
        <Form.Item
          key="isContactPerson"
          name="isContactPerson"
          initialValue={false}
          valuePropName="checked"
        >
          <Checkbox onChange={handleContactPersonChange}>
            <Text>{t("you are team contact person")}</Text>
          </Checkbox>
        </Form.Item>
        {isContactPerson === false && (
          <Card>
            <Title level={4} style={{ margin: 0 }}>
              {t("contact person")}
            </Title>
            <Divider style={{ marginBlock: 15 }} />
            <Form.Item
              key="contactName"
              name="contactName"
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("contact person name")}
                </Text>
              }
              rules={[
                {
                  required: true,
                  message: `${t("please input contactName")}`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              key="contactEmail"
              name="contactEmail"
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("contact person email")}
                </Text>
              }
              rules={[
                {
                  required: true,
                  message: `${t("please input email")}`,
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              key="contactPhoneNumber"
              name="contactPhoneNumber"
              label={
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("contact person phone")}
                </Text>
              }
              rules={[
                {
                  required: true,
                  message: `${t("please input phone number")}`,
                },
              ]}
            >
              <Input type="tel" />
            </Form.Item>
          </Card>
        )}
      </Space>
      <Row gutter={15} style={{ marginTop: 20 }}>
        <Col span={12}>
          <TiltButton color="secondary" onClick={onCancel}>
            {t("cancel")}
          </TiltButton>
        </Col>
        <Col span={12}>
          {fetcher && fetcher.state && fetcher.state !== "idle" ? (
            <TiltButton color="secondary">
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            </TiltButton>
          ) : (
            <TiltButton color="primary" onClick={() => form.submit()}>
              {submitLabel}
            </TiltButton>
          )}
        </Col>
      </Row>
      {contextHolder}
    </Form>
  );
}
