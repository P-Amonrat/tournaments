import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  notification,
  Result,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { FileUploader, TextEditor, TiltButton } from "~/components/common";
import { isArray } from "lodash";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;

interface TournamentFormProps {
  fetcher: any;
  form: any;
  games: any;
  initialAdditionalLength?: number;
  prizeInitialAdditionalLength?: number;
  loading?: boolean;
  submitLabel: string;
  edit?: boolean;
}

export function TournamentForm(props: TournamentFormProps) {
  const {
    fetcher,
    form,
    games,
    initialAdditionalLength,
    prizeInitialAdditionalLength,
    loading,
    submitLabel,
  } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [textEditorLoading, setTextEditorLoading] = useState<boolean>(true);
  const [additionalFieldsLength, setAdditionalFieldsLength] = useState<number>(
    initialAdditionalLength ? initialAdditionalLength : 0
  );
  const [prizeAdditionalFieldsLength, setPrizeAdditionalFieldsLength] =
    useState<number>(
      prizeInitialAdditionalLength ? prizeInitialAdditionalLength : 3
    );

  const gameOptions: any[] = [];
  if (isArray(games) && games.length > 0) {
    games.map((game: any) => {
      gameOptions.push({
        label: game.name,
        value: game.id,
      });
    });
  }

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  const handleAddMoreFields = () => {
    setAdditionalFieldsLength((previous) => 1 + previous);
  };

  const handleAddMorePrizeFields = () => {
    setPrizeAdditionalFieldsLength((previous) => 1 + previous);
  };

  const valueZeroRemart = t("value must be higher than 0");

  const handleDeleteAdditionalField = useCallback(
    (index: number) => {
      if (
        index != additionalFieldsLength - 1 &&
        additionalFieldsLength - 1 > 0
      ) {
        Array(additionalFieldsLength - 1)
          .fill("")
          .map((field, i) => {
            if (i >= index) {
              form.setFieldsValue({
                [`additionalFields[${i}]["isRequired"]`]: form.getFieldValue(
                  `additionalFields[${i + 1}]["isRequired"]`
                ),
                [`additionalFields[${i}]["type"]`]: form.getFieldValue(
                  `additionalFields[${i + 1}]["type"]`
                ),
                [`additionalFields[${i}]["name"]`]: form.getFieldValue(
                  `additionalFields[${i + 1}]["name"]`
                ),
                [`additionalFields[${i}]["nameEn"]`]: form.getFieldValue(
                  `additionalFields[${i + 1}]["nameEn"]`
                ),
              });
            }
          });
      }
      form.resetFields([
        `additionalFields[${additionalFieldsLength - 1}]["isRequired"]`,
        `additionalFields[${additionalFieldsLength - 1}]["type"]`,
        `additionalFields[${additionalFieldsLength - 1}]["name"]`,
        `additionalFields[${additionalFieldsLength - 1}]["nameEn"]`,
      ]);
      setAdditionalFieldsLength((previous) => previous - 1);
    },
    [additionalFieldsLength, form]
  );

  const handleDeletePrizeAdditionalField = useCallback(
    (index: number) => {
      if (
        index != prizeAdditionalFieldsLength - 1 &&
        prizeAdditionalFieldsLength - 1 > 0
      ) {
        Array(prizeAdditionalFieldsLength - 1)
          .fill("")
          .map((field, i) => {
            if (i >= index) {
              form.setFieldsValue({
                [`prize[${i}]`]: form.getFieldValue(`prize[${i + 1}]`),
              });
            }
          });
      }
      form.resetFields([`prize[${prizeAdditionalFieldsLength - 1}]`]);
      setPrizeAdditionalFieldsLength((previous) => previous - 1);
    },
    [prizeAdditionalFieldsLength, form]
  );

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "thumbnailImageUrl") {
        form.setFieldValue("thumbnailImageUrl", fetcher.data.key);
      }
      if (fetcher.data.field === "bannerImageUrl") {
        form.setFieldValue("bannerImageUrl", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);

  useEffect(() => {
    setTextEditorLoading(false);
  }, []);

  return (
    <>
      <Row gutter={20}>
        <Col span={24} md={8}>
          <Form.Item
            key="gameId"
            name="gameId"
            rules={[
              {
                required: true,
                message: t("please select game"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("game")}
              </Text>
            }
          >
            <Select options={gameOptions} />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="type"
            name="type"
            rules={[
              {
                required: true,
                message: t("please select tournament type"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("tournament type")}
              </Text>
            }
          >
            <Select
              options={[
                {
                  label: t("single elimination"),
                  value: "single_elimination",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={8} style={{ display: "none" }}>
          <Form.Item
            key="isOnline"
            name="isOnline"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is online")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        key="name"
        name="name"
        rules={[
          {
            required: true,
            message: t("please input tournament name"),
          },
        ]}
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("tournament name")}
          </Text>
        }
      >
        <Input />
      </Form.Item>
      <Form.Item
        key="nameEn"
        name="nameEn"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("tournament name (English)")}
          </Text>
        }
      >
        <Input />
      </Form.Item>
      <Form.Item
        key="discordUrl"
        name="discordUrl"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("discord url")}
          </Text>
        }
      >
        <Input />
      </Form.Item>
      <Row gutter={20}>
        <Col span={24} md={8}>
          <Form.Item
            key="isKycRequired"
            name="isKycRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is kyc required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="isDiscordIdRequired"
            name="isDiscordIdRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is discordId required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="isEmailRequired"
            name="isEmailRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is email required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="isPhoneNumberRequired"
            name="isPhoneNumberRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is phone Number required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="isIgnRequired"
            name="isIgnRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is ign required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="isSlipRequired"
            name="isSlipRequired"
            valuePropName="checked"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("is slip required")}
              </Text>
            }
          >
            <Switch />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Space
        direction="vertical"
        size={5}
        style={{ display: "flex", marginBottom: 20 }}
      >
        <Row style={{ marginBottom: 10, alignItems: "baseline" }}>
          <Col flex="auto">
            <Text className="required" style={{ fontWeight: 600 }}>
              {t("please upload thumnail image")} ({t("recommended ratio")} 2:1)
            </Text>
          </Col>
          <Col flex="none">
            <Form.Item
              key="thumbnailImageUrl"
              name="thumbnailImageUrl"
              rules={[
                {
                  required: true,
                  message: `${t("please upload thumnail image")} ${t(
                    "recommended ratio"
                  )} 2:1`,
                },
              ]}
            >
              <FileUploader
                fetcher={fetcher}
                fieldName={"thumbnailImageUrl"}
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
        ) : form && form.getFieldValue("thumbnailImageUrl") ? (
          <Image
            preview={false}
            style={{ maxWidth: 400 }}
            src={`${cdnUrl}/${form.getFieldValue("thumbnailImageUrl")}`}
          />
        ) : (
          <></>
        )}
      </Space>
      <Space
        direction="vertical"
        size={5}
        style={{ display: "flex", marginBottom: 20 }}
      >
        <Row style={{ marginBottom: 10, alignItems: "baseline" }}>
          <Col flex="auto">
            <Text className="required" style={{ fontWeight: 600 }}>
              {t("please upload banner image")} ({t("recommended ratio")} 3:1)
            </Text>
          </Col>
          <Col flex="none">
            <Form.Item
              key="bannerImageUrl"
              name="bannerImageUrl"
              rules={[
                {
                  required: true,
                  message: `${t("please upload banner image")} ${t(
                    "recommended ratio"
                  )} 3:1`,
                },
              ]}
            >
              <FileUploader
                fetcher={fetcher}
                fieldName={"bannerImageUrl"}
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
        ) : form && form.getFieldValue("bannerImageUrl") ? (
          <Image
            preview={false}
            style={{ maxWidth: 400 }}
            src={`${cdnUrl}/${form.getFieldValue("bannerImageUrl")}`}
          />
        ) : (
          <></>
        )}
      </Space>
      <Divider />
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            name="registrationStartDate"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("registration start date")}
              </Text>
            }
            rules={[
              {
                required: true,
                message: `${t("please select registration start date")}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  } else {
                    if (getFieldValue("registrationEndDate")) {
                      if (
                        value.isBefore(
                          dayjs(getFieldValue("registrationEndDate"))
                        )
                      ) {
                        return Promise.resolve();
                      }
                    } else {
                      return Promise.resolve();
                    }
                    return Promise.reject("start date must be before end date");
                  }
                },
              }),
            ]}
          >
            <DatePicker
              name="registrationStartDate"
              showToday={false}
              allowClear={false}
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              style={{ display: "flex" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="registrationEndDate"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("registration end date")}
              </Text>
            }
            rules={[
              {
                required: true,
                message: `${t("please select registration end date")}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || !getFieldValue("registrationStartDate")) {
                    return Promise.resolve();
                  }
                  if (
                    value.isAfter(dayjs(getFieldValue("registrationStartDate")))
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "end date must be after the start date"
                  );
                },
              }),
            ]}
          >
            <DatePicker
              name="registrationEndDate"
              showToday={false}
              allowClear={false}
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              style={{ display: "flex" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            name="startDate"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("start date")}
              </Text>
            }
            rules={[
              {
                required: true,
                message: `${t("please select start date")}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  } else {
                    if (getFieldValue("endDate")) {
                      if (value.isBefore(dayjs(getFieldValue("endDate")))) {
                        return Promise.resolve();
                      }
                    } else {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "start date must be before end date and at least 2 days later than today"
                    );
                  }
                },
              }),
            ]}
          >
            <DatePicker
              name="startDate"
              showToday={false}
              allowClear={false}
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              style={{ display: "flex" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="endDate"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("end date")}
              </Text>
            }
            rules={[
              {
                required: true,
                message: `${t("please select end date")}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || !getFieldValue("startDate")) {
                    return Promise.resolve();
                  }
                  if (value.isAfter(dayjs(getFieldValue("startDate")))) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "end date must be after the start date"
                  );
                },
              }),
            ]}
          >
            <DatePicker
              name="endDate"
              showToday={false}
              allowClear={false}
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              style={{ display: "flex" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={20}>
        <Col span={24} md={8}>
          <Form.Item
            key="maxTeam"
            name="maxTeam"
            rules={[
              {
                required: true,
                message: t("please input max team"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("maximum team")}
              </Text>
            }
          >
            <Select
              options={[
                {
                  value: 8,
                  label: "8",
                },
                {
                  value: 16,
                  label: "16",
                },
                {
                  value: 32,
                  label: "32",
                },
                {
                  value: 64,
                  label: "64",
                },
                {
                  value: 128,
                  label: "128",
                },
                {
                  value: 256,
                  label: "256",
                },
                {
                  value: 512,
                  label: "512",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="playerCount"
            name="playerCount"
            rules={[
              {
                required: true,
                message: t("please input number of required player"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(valueZeroRemart);
                },
              }),
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("required players")}
              </Text>
            }
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key="additionalPlayerCount"
            name="additionalPlayerCount"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(valueZeroRemart);
                },
              }),
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("additional player")}
              </Text>
            }
          >
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Form.Item
        key="finalRoundLocation"
        name="finalRoundLocation"
        // rules={[
        //   {
        //     required: true,
        //     message: t("final round location"),
        //   },
        // ]}
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("final round location")}
          </Text>
        }
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        key="finalRoundLocationEn"
        name="finalRoundLocationEn"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("final round location (English)")}
          </Text>
        }
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Divider />
      <Form.Item
        key="totalPrize"
        name="totalPrize"
        // rules={[
        //   {
        //     required: true,
        //     message: t("please input tournament name"),
        //   },
        // ]}
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("total prize")}
          </Text>
        }
      >
        <Input type="number" />
      </Form.Item>
      <Row gutter={[20, 10]} style={{ marginTop: 15, marginBottom: 10 }}>
        <Col flex="auto">
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("prize additional fields")}
          </Text>
        </Col>
      </Row>
      {prizeAdditionalFieldsLength > 0 && (
        <Space direction="vertical" size={20} style={{ display: "flex" }}>
          {Array(prizeAdditionalFieldsLength)
            .fill("")
            .map((field, index: number) => (
              <Row
                key={index}
                gutter={[10, 15]}
                style={{ alignItems: "center" }}
              >
                <div style={{ marginLeft: "6px", marginRight: "10px" }}>
                  {t("prizeNumber")} {index + 1}
                </div>
                <Col flex="auto">
                  <Form.Item
                    name={`prize[${index}]`}
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        validator: async () => {
                          if (prizeAdditionalFieldsLength > 10) {
                            return Promise.reject(
                              new Error(t("maximum 10 prizes"))
                            );
                          }
                        },
                      },
                    ]}
                  >
                    <Input placeholder={t("prize")} />
                  </Form.Item>
                </Col>
                <Col flex="none">
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeletePrizeAdditionalField(index)}
                  />
                </Col>
              </Row>
            ))}
        </Space>
      )}
      <Space style={{ marginTop: "10px" }}>
        <Button
          icon={<PlusOutlined />}
          style={{
            backgroundColor: "#7a6fee",
            color: "#fff",
          }}
          onClick={handleAddMorePrizeFields}
        >
          {t("add more prize")}
        </Button>
        {prizeAdditionalFieldsLength > 10 && (
          <div style={{ color: "red" }}>{t("maximum 10 prizes")}</div>
        )}
      </Space>
      {/* <Row gutter={20}>
        <Col span={24} md={8}>
          <Form.Item
            key={`prize[0]`}
            name={`prize[0]`}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t(`1st prize`)}
              </Text>
            }
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(valueZeroRemart);
                },
              }),
            ]}
          >
            <Input type="number" min="0" />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key={`prize[1]`}
            name={`prize[1]`}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t(`2nd prize`)}
              </Text>
            }
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(valueZeroRemart);
                },
              }),
            ]}
          >
            <Input type="number" min="0" />
          </Form.Item>
        </Col>
        <Col span={24} md={8}>
          <Form.Item
            key={`prize[2]`}
            name={`prize[2]`}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t(`3rd prize`)}
              </Text>
            }
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(valueZeroRemart);
                },
              }),
            ]}
          >
            <Input type="number" min="0" />
          </Form.Item>
        </Col>
      </Row> */}
      <Divider />
      {!textEditorLoading ? (
        <Space size={10} direction="vertical" style={{ display: "flex" }}>
          <Form.Item
            key="description"
            name="description"
            rules={[
              {
                required: true,
                message: t("please input description"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("description")}
              </Text>
            }
          >
            <TextEditor
              id="description"
              initialValues={form.getFieldValue("description")}
              fetcher={fetcher}
              onChange={(values: any) =>
                form.setFieldValue("description", values)
              }
            />
          </Form.Item>
          <Form.Item
            key="descriptionEn"
            name="descriptionEn"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("descriptionEn")}
              </Text>
            }
          >
            <TextEditor
              id="descriptionEn"
              initialValues={form.getFieldValue("descriptionEn")}
              fetcher={fetcher}
              onChange={(values: any) =>
                form.setFieldValue("descriptionEn", values)
              }
            />
          </Form.Item>
        </Space>
      ) : (
        <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      <Divider />
      {!textEditorLoading ? (
        <Space size={10} direction="vertical" style={{ display: "flex" }}>
          <Form.Item
            key="qualificationRules"
            name="qualificationRules"
            rules={[
              {
                required: true,
                message: t("please input qualification rules"),
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("qualification rules")}
              </Text>
            }
          >
            <TextEditor
              id="qualificationRules"
              initialValues={form.getFieldValue("qualificationRules")}
              fetcher={fetcher}
              onChange={(values: any) =>
                form.setFieldValue("qualificationRules", values)
              }
            />
          </Form.Item>
          <Form.Item
            key="qualificationRulesEn"
            name="qualificationRulesEn"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("qualification rules (English)")}
              </Text>
            }
          >
            <TextEditor
              id="qualificationRulesEn"
              initialValues={form.getFieldValue("qualificationRulesEn")}
              fetcher={fetcher}
              onChange={(values: any) =>
                form.setFieldValue("qualificationRulesEn", values)
              }
            />
          </Form.Item>
          <Form.Item
            key="bracketContent"
            name="bracketContent"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("Upload bracket")}
              </Text>
            }
          >
            <TextEditor
              id="bracketContent"
              initialValues={form.getFieldValue("bracketContent")}
              fetcher={fetcher}
              onChange={(values: any) =>
                form.setFieldValue("bracketContent", values)
              }
            />
          </Form.Item>
        </Space>
      ) : (
        <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      <Row gutter={20} justify="space-between">
        <Col>
          <Space>
            <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
              {t("create tournament post")}
            </Text>
            <Form.Item
              key="isTournamentPost"
              name="isTournamentPost"
              valuePropName="checked"
              style={{ marginTop: "10px" }}
            >
              <Switch defaultChecked />
            </Form.Item>
          </Space>
        </Col>
        <Col style={{ marginTop: "14px" }}>
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("tournament Q&A post title can be edited on webboard")}
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[20, 10]} style={{ marginBottom: 20 }}>
        <Col flex="auto">
          <Title level={4} style={{ margin: 0 }}>
            {t("additional fields")}
          </Title>
        </Col>
        <Col flex="none">
          {/* <Button
            icon={<PlusOutlined />}
            style={{ backgroundColor: "#7a6fee", color: "#fff" }}
            onClick={handleAddMoreFields}
          >
            {t("add more")}
          </Button> */}
          <Space style={{ marginTop: "10px" }}>
            <Button
              icon={<PlusOutlined />}
              style={{ backgroundColor: "#7a6fee", color: "#fff" }}
              onClick={handleAddMoreFields}
            >
              {t("add more")}
            </Button>
            {additionalFieldsLength > 10 && (
              <div style={{ color: "red" }}>{t("maximum 10 fields")}</div>
            )}
          </Space>
        </Col>
      </Row>
      {additionalFieldsLength > 0 && (
        <Space direction="vertical" size={20} style={{ display: "flex" }}>
          {Array(additionalFieldsLength)
            .fill("")
            .map((field, index: number) => (
              <Row
                key={index}
                gutter={[10, 15]}
                style={{ alignItems: "center" }}
              >
                <Col flex="none">
                  <Form.Item
                    name={`requirementFields[${index}]["isRequired"]`}
                    valuePropName="checked"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        validator: async () => {
                          if (additionalFieldsLength > 10) {
                            return Promise.reject(
                              new Error(t("maximum 10 fields"))
                            );
                          }
                        },
                      },
                    ]}
                  >
                    <Checkbox>{t("required")}</Checkbox>
                  </Form.Item>
                </Col>
                <Col flex="none">
                  <Form.Item
                    name={`requirementFields[${index}]["type"]`}
                    style={{ marginBottom: 0 }}
                  >
                    <Select
                      style={{ width: 120 }}
                      options={[
                        {
                          label: t("text input"),
                          value: "text",
                        },
                        {
                          label: t("date picker"),
                          value: "date",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col flex="auto">
                  <Form.Item
                    name={`requirementFields[${index}]["name"]`}
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message: t("please input name"),
                      },
                    ]}
                  >
                    <Input placeholder={t("name")} />
                  </Form.Item>
                </Col>
                <Col flex="auto">
                  <Form.Item
                    name={`requirementFields[${index}]["nameEn"]`}
                    style={{ marginBottom: 0 }}
                  >
                    <Input placeholder={t("name (English)")} />
                  </Form.Item>
                </Col>
                <Col flex="none">
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteAdditionalField(index)}
                  />
                </Col>
              </Row>
            ))}
        </Space>
      )}
      {contextHolder}
      {loading ? (
        <TiltButton color="secondary" style={{ marginTop: 40 }}>
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        </TiltButton>
      ) : (
        <TiltButton
          color="primary"
          onClick={() => form.submit()}
          style={{ marginTop: 40 }}
        >
          {submitLabel}
        </TiltButton>
      )}
    </>
  );
}
