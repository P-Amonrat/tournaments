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
} from "antd";
import { TiltButton } from "~/components/common";
import { flattenObject } from "~/utils/helper";
const { Text, Title } = Typography;

interface AchievementTitleFormProps {
  fetcher: any;
  form: any;
  action: string;
  type?: string;
  initialValues?: any;
  onCancel: () => void;
}

export function AchievementTitleForm(props: AchievementTitleFormProps) {
  const { fetcher, form, initialValues, onCancel, action, type } = props;
  const { t } = useTranslation();
  // const { user } = useContext(AuthContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);

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
      {
        method: "put",
        action: `/resources/edit-achievement-title`,
      }
    );
    form.resetFields();
    onCancel();
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(flattenObject(initialValues));
    }
  }, [initialValues, form, fetcher.data]);

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
          {action === "create"
            ? t("add achievement title")
            : t("edit achievement title")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <Form.Item
            key="title"
            name="title"
            rules={[
              {
                required: true,
                message: t("please input achievement title"),
              },
            ]}
            label={
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("achievement title")}
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
              {action === "create"
                ? t("create achievement")
                : t("edit achievement")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {contextHolder}
    </div>
  );
}
