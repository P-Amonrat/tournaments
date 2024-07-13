import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import { Form, Input, Result, Space, Typography } from "antd";
import { LoadingOutlined, DeleteOutlined } from "@ant-design/icons";
import { TextEditor, TiltButton } from "~/components/common";
import { AppContext } from "~/contexts";
import {
  type LoaderFunction,
  json,
  type ActionFunction,
} from "@remix-run/node";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import * as APIServer from "~/api";
const { Text, Title } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  let personalDetails: any[] = [];
  try {
    const personalDetailsRes = await APIServer.clientFromSession(
      session
    ).request(APIServer.getPersonalDetails());
    if (personalDetailsRes.data) {
      personalDetails = personalDetailsRes.data;
    }
  } catch (e) {
    console.log("user setting error", e);
  }

  return json({ personalDetails });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const entries = Object.fromEntries(formdata) as any;
  const data = JSON.parse(entries.data);

  switch (entries.action) {
    case "create":
      try {
        await APIServer.clientFromSession(session).request(
          APIServer.createPersonalDetails(data)
        );
        session.flash("flashMessage", {
          type: "success",
          message: `successfully created personal details`,
        });
      } catch (e: any) {
        console.log("e", e.response.data);

        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
      }
      break;
    case "update":
      try {
        await APIServer.clientFromSession(session).request(
          APIServer.updatePersonalDetails(data)
        );
        session.flash("flashMessage", {
          type: "success",
          message: `successfully updated personal details`,
        });
      } catch (e: any) {
        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
      }
      break;
  }

  return json(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function SettingsPersonalDetails() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = useState<boolean>(true);
  const { scheme } = useContext(AppContext);
  const submit = useSubmit();
  const [form] = Form.useForm();
  // const action = personalDetails[0]?.title ? "update" : "update";
  const action = "update";

  const initialValues = personalDetails
    ? { personalDetails: personalDetails.details }
    : {
        personalDetails: [
          {
            id: 1,
            title: "12312",
            description: "",
            createdAt: "2024-04-25T15:51:54.467Z",
          },
        ],
      };

  const handlePersonalDetails = (values: any) => {
    submit(
      {
        data: JSON.stringify(values),
        action: action,
      },
      { method: "post" }
    );
  };

  useEffect(() => {
    setTextEditorLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: 600 }}>
      <Space size={10} direction="vertical" style={{ marginBottom: 20 }}>
        <Title level={2} style={{ margin: 0 }}>
          {t("personal details")}
        </Title>
      </Space>
      <Form
        layout="vertical"
        form={form}
        name="dynamic_form_complex"
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
        initialValues={initialValues}
        onFinish={handlePersonalDetails}
      >
        <Form.List name="personalDetails">
          {(fields, { add, remove }) => (
            <div
              style={{
                display: "flex",
                rowGap: 16,
                flexDirection: "column",
              }}
            >
              {fields.map((field, index: number) => (
                // <Card
                //   size="small"
                //   title={`Item ${field.name + 1}`}
                //   key={field.key}
                //   bordered={false}
                //   extra={
                // <CloseOutlined
                //   onClick={() => {
                //     remove(field.name);
                //   }}
                // />
                //   }
                // >
                <div key={field.key}>
                  <Form.Item
                    label="id"
                    name={["id"]}
                    style={{ display: "none" }}
                  />

                  <Space
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{ fontWeight: 600, fontSize: "inherit" }}
                      className="required"
                    >
                      {t("title personal details")}
                    </Text>
                    <div
                      onClick={() => {
                        remove(field.name);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {index === 0 ? null : (
                        <Space style={{ color: "#D61515" }}>
                          <DeleteOutlined />
                          <Text
                            style={{
                              fontWeight: 600,
                              fontSize: "inherit",
                              color: "#D61515",
                            }}
                          >
                            {t("delete detail box")}
                          </Text>
                        </Space>
                      )}
                    </div>
                  </Space>
                  <Form.Item
                    key="title"
                    name={[field.name, "title"]} // Use the correct name path
                    rules={[
                      {
                        required: true,
                        message: t("please input title"),
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  {!textEditorLoading ? (
                    <>
                      <Text
                        style={{
                          fontWeight: 600,
                          fontSize: "inherit",
                        }}
                        className="required"
                      >
                        {t("detail personal details")}
                      </Text>
                      <Space
                        size={10}
                        direction="vertical"
                        style={{ display: "flex", marginTop: 10 }}
                      >
                        <Form.Item
                          key="detail"
                          name={[field.name, "detail"]} // Use the correct name path
                          rules={[
                            {
                              required: true,
                              message: t("please input detail"),
                            },
                          ]}
                        >
                          <TextEditor
                            id="detail"
                            initialValues={
                              initialValues?.personalDetails[index]?.detail
                            }
                            fetcher={fetcher}
                            onChange={(values: any) =>
                              form.setFieldValue("detail", values)
                            }
                          />
                        </Form.Item>
                      </Space>
                    </>
                  ) : (
                    <Result
                      icon={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                    />
                  )}
                </div>
              ))}

              <TiltButton
                color={`${scheme}-base`}
                onClick={() => add()}
                style={{ marginTop: 20 }}
              >
                + {t("Add Item")}
              </TiltButton>
            </div>
          )}
        </Form.List>

        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form>
      <TiltButton
        color="primary"
        onClick={form.submit}
        style={{ marginTop: 20 }}
      >
        {t("save")}
      </TiltButton>
    </div>
  );
}
