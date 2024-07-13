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
  DatePicker,
  Switch,
} from "antd";
// import { AuthContext } from "~/contexts";
import { TiltButton } from "~/components/common";
import { useMatches } from "@remix-run/react";
import dayjs from "dayjs";
import { flattenObject } from "~/utils/helper";
const { Text, Title } = Typography;
// const { useToken } = theme;

interface ExperienceFormProps {
  fetcher: any;
  form: any;
  action: string;
  initialValues?: any;
  titleType?: string;
  gameId: number | undefined;
  onCancel: () => void;
}

export function ExperienceForm(props: ExperienceFormProps) {
  const { fetcher, form, initialValues, onCancel, action, gameId, titleType } =
    props;

  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  // const { token } = useToken();
  // const { user } = useContext(AuthContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);
  const [isPresent, setIsPresent] = useState<boolean>(
    initialValues ? (initialValues.endDate === null ? true : false) : false
  ); // State for "present" switch
  let initialData = {} as any;

  if (initialValues) {
    const { startDate, endDate, ...rest } = initialValues;
    initialData = {
      ...rest,
      startDate:
        initialValues?.startDate &&
        dayjs(initialValues.startDate).toISOString(),
      endDate:
        initialValues?.endDate && dayjs(initialValues.endDate).toISOString(),
    };
  }

  const handlePresentChange = (checked: boolean) => {
    setIsPresent(checked);
    if (checked) {
      form.setFieldValue("endDate", null); // Set end date to null
    }
  };

  const handleSubmit = (values: any) => {
    const { isPrivate, ...rest } = values;

    // Create a new object for submission with the common fields
    let submissionData = {
      ...rest,
      id: initialValues?.id, // include initialValues ID if it exists
    };

    // Conditionally add or remove fields based on titleType
    if (action === "edit") {
      submissionData = {
        ...submissionData,
      };
    } else if (titleType === "experienceTitleId") {
      submissionData = {
        ...submissionData,
        experienceTitleId: gameId,
      };
    } else {
      submissionData = {
        ...submissionData,
        rankingGameId: gameId,
      };
    }

    fetcher.submit(
      {
        data: JSON.stringify(submissionData),
      },
      action === "create"
        ? {
            method: "post",
            action: `/resources/create-experience`,
          }
        : {
            method: "put",
            action: `/resources/edit-experience`,
          }
    );
    form.resetFields();
    onCancel();
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(flattenObject(initialData));
    }
  }, [initialValues, form]); // Dependency array includes initialValues and form

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "cover") {
        form.setFieldValue("cover", fetcher.data.key);
      }

      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);

  return (
    <div style={{ padding: 10 }}>
      <Form
        form={form}
        initialValues={flattenObject(initialData)}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Title level={4} style={{ margin: 0 }}>
          {action === "create" ? t("add experience") : t("edit experience")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <Form.Item
            key="name"
            name="name"
            rules={[
              {
                required: true,
                message: t("please input experience name"),
              },
            ]}
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("team name or tournament name")}
                </Text>
              </Space>
            }
          >
            <Input />
          </Form.Item>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                name="startDate"
                label={
                  <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                    {t("experience start date")}
                  </Text>
                }
                rules={[
                  {
                    required: true,
                    message: `${t("please select experience start date")}`,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value) {
                        return Promise.resolve();
                      } else {
                        if (getFieldValue("endDate")) {
                          if (value.isBefore(getFieldValue("endDate"))) {
                            return Promise.resolve();
                          }
                        } else {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "start date must be before end date"
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
                    {t("experience end date")}
                  </Text>
                }
                rules={[
                  {
                    required: !isPresent,
                    message: `${t("please select experience end date")}`,
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
                  disabled={isPresent} // Disable when "present" switch is on
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify={"end"}>
            <Form.Item key="present" name="present" valuePropName="checked">
              <Space>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("present")}
                </Text>
                <Switch onChange={handlePresentChange} value={isPresent} />
              </Space>
            </Form.Item>
          </Row>

          <Form.Item
            key="description"
            name="description"
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
            />
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
              {action === "create" ? t("create experience") : t("edit")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {contextHolder}
    </div>
  );
}
