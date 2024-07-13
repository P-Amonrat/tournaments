import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useActionData,
  useFetcher,
  useMatches,
  useSubmit,
} from "@remix-run/react";
import {
  Card,
  Flex,
  Form,
  Image,
  Input,
  notification,
  Result,
  Space,
  Typography,
} from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileUploader, TiltButton } from "~/components/common";
import { AuthContext } from "~/contexts";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

const { Text, Title } = Typography;

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const data = formdata.get("data") as any;
  const toSubmitData = JSON.parse(data);

  try {
    await APIServer.clientFromSession(session).request(
      APIServer.submitFeedback(toSubmitData)
    );
    await commitSession(session);
    return json({ success: true });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data,
    });
    await commitSession(session);
    return json({ success: false });
  }
};

export default function Feedback() {
  const { t } = useTranslation();
  const actionData = useActionData();
  const matches = useMatches();
  const submit = useSubmit();
  const { cdnUrl } = matches[0].data;
  const { user } = useContext(AuthContext);
  const fetcher = useFetcher();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = notification.useNotification();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [attachedImage, setAttachedImage] = useState<string>("");

  const handleSubmitFeedback = (values: any) => {
    setSubmitting(true);
    submit({ data: JSON.stringify(values) }, { method: "post" });
  };

  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  useEffect(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "image") {
        form.setFieldValue("image", fetcher.data.key);
        setAttachedImage(fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);

  useEffect(() => {
    if (actionData) {
      setSubmitting(false);
      if (actionData.success) {
        setSuccess(true);
      }
    }
  }, [actionData]);

  return (
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 50,
        maxWidth: 800,
        marginInline: "auto",
      }}
    >
      <Card bordered={false} bodyStyle={{ padding: 40 }}>
        {success ? (
          <Result status="success" title={t("successfully sent feedback")} />
        ) : (
          <>
            <Title level={1} style={{ marginTop: 0, marginBottom: 30 }}>
              {t("feedback")}
            </Title>
            <Flex vertical gap={20} style={{ fontSize: 18 }}>
              <Form
                form={form}
                onFinish={handleSubmitFeedback}
                layout="vertical"
              >
                <Form.Item
                  key="message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: t("please input feedback message"),
                    },
                  ]}
                  label={
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>
                      {t("message")}
                    </Text>
                  }
                >
                  <Input.TextArea rows={4} disabled={!user || submitting} />
                </Form.Item>
                <Form.Item
                  key="image"
                  name="image"
                  label={
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>
                      {t("attachment image")}
                    </Text>
                  }
                >
                  <FileUploader
                    disabled={!user || uploading || submitting}
                    fetcher={fetcher}
                    fieldName={"image"}
                    onUploading={setUploading}
                    onErrorFileTooLarge={handleFileTooLarge}
                  >
                    {uploading ? (
                      <Result
                        icon={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                      />
                    ) : attachedImage.length > 0 ? (
                      <Image
                        preview={false}
                        style={{ maxWidth: 400, cursor: "pointer" }}
                        src={`${cdnUrl}/${attachedImage}`}
                      />
                    ) : (
                      <Space
                        size={10}
                        style={{
                          padding: "5px 15px",
                          backgroundColor: "#e5e4e4",
                          color: "#000",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        <UploadOutlined />
                        {t("select file")}
                      </Space>
                    )}
                  </FileUploader>
                </Form.Item>
              </Form>
              <Space>
                <TiltButton
                  color={
                    user && !uploading && !submitting ? "primary" : "secondary"
                  }
                  onClick={
                    user && !uploading && !submitting
                      ? () => form.submit()
                      : undefined
                  }
                  style={{ marginTop: 20 }}
                >
                  {user
                    ? t("submit feedback")
                    : t("please login to submit feedback")}
                </TiltButton>
              </Space>
            </Flex>
          </>
        )}
      </Card>
      {contextHolder}
    </div>
  );
}
