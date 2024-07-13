import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Result,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { TextEditor, TiltButton } from "~/components/common";
import { AppContext, AuthContext } from "~/contexts";
import {
  type LoaderFunction,
  json,
  type ActionFunction,
  redirect,
} from "@remix-run/node";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import * as APIServer from "~/api";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { ArrowUpDown, Trash2 } from "lucide-react";
const { Text, Title } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  let personalDetails = [];
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
  const uuid = entries.uuid;

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
        return redirect(`/users/${uuid}`, {
          headers: {
            "Set-Cookie": await commitSession(session),
          },
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
    case "sorting":
      try {
        await APIServer.clientFromSession(session).request(
          APIServer.updatePersonalDetails(data)
        );
        session.flash("flashMessage", {
          type: "success",
          message: `successfully sorted personal details`,
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

// Modal properties
const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
};

export default function SettingsPersonalDetails() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = useState(true);
  const [messageApi, contextHolder] = notification.useNotification();

  const { scheme } = useContext(AppContext);
  const submit = useSubmit();
  const [form] = Form.useForm();
  const [sortingModal, setSortingModal] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  // State to manage the list of personal details
  const [personalDetailsList, setPersonalDetailsList] = useState(
    personalDetails?.details?.length > 0
      ? personalDetails.details.map((detail: any, index: number) => ({
          title: detail.title,
          detail: detail.detail,
          id: index + 1,
        }))
      : [
          {
            id: 1,
            title: "",
            detail: "",
          },
        ]
  );

  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };

  const onChangeSortItems = (items: any) => {
    setPersonalDetailsList(items);
  };

  const onCloseSortingModal = () => {
    setSortingModal(false);
  };

  const handleSubmitSorting = () => {
    setSortingModal(false);
    form.setFieldsValue({ personalDetails: personalDetailsList });
    const newValues = { personalDetails: personalDetailsList };
    submit(
      {
        data: JSON.stringify(newValues),
        action: "sorting",
      },
      { method: "post" }
    );
  };

  const handleRemove = (index: any) => {
    setPersonalDetailsList((prevList: any) =>
      prevList.filter((_: any, i: any) => i !== index)
    );
  };

  const handlePersonalDetails = (values: any) => {
    submit(
      {
        data: JSON.stringify(values),
        uuid: user.uuid,
        action: "update",
      },
      { method: "post" }
    );
  };

  useEffect(() => {
    setTextEditorLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: 600 }}>
      <Space size={10} style={{ marginBottom: 20 }}>
        <Title level={2} style={{ margin: 0 }}>
          {t("personal details")}
        </Title>
        {personalDetails?.details?.length > 0 && (
          <Button
            type="text"
            style={{
              marginTop: 2,
              marginRight: 10,
              fontWeight: 600,
              textAlign: "center",
            }}
            onClick={handleToggleSortingMode}
          >
            <ArrowUpDown
              style={{
                color: "#7C6FF6",
                fontSize: "1.2em",
                marginRight: "5px",
              }}
            />
            {t("sort order")}
          </Button>
        )}
      </Space>
      <Form
        layout="vertical"
        form={form}
        name="dynamic_form_complex"
        initialValues={{ personalDetails: personalDetailsList }}
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
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Space
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 600 }} className="required">
                      {t("title personal details")}
                    </Text>
                    <div
                      onClick={() => {
                        handleRemove(index);
                        remove(field.name); // Update the form state
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Space style={{ color: "#D61515" }}>
                        <Trash2 />
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
                    </div>
                  </Space>

                  <Form.Item
                    name={[field.name, "title"]}
                    rules={[
                      () => ({
                        validator(_, value) {
                          if (!value || value === "") {
                            const message = t(
                              "please input title personal detail"
                            );
                            return Promise.reject(new Error(message));
                          }
                          if (value.length > 30) {
                            const message = t(
                              "title must contain only 30 charaters"
                            );
                            return Promise.reject(new Error(message));
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    <Input
                      count={{
                        show: true,
                        max: 30,
                      }}
                    />
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
                      <Form.Item
                        name={[field.name, "detail"]}
                        rules={[
                          { required: true, message: t("please input detail") },
                        ]}
                      >
                        <TextEditor
                          id={`detail${index}`}
                          initialValues={personalDetailsList[index]?.detail}
                          fetcher={fetcher}
                          onChange={(values) =>
                            form.setFieldValue(
                              `personalDetails[${index}].detail`,
                              values
                            )
                          }
                        />
                      </Form.Item>
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
                onClick={() => {
                  if (fields.length < 3) {
                    add();
                  } else {
                    messageApi.open({
                      type: "error",
                      message: t("you can only add up to 3 personal details"),
                      duration: 5,
                      placement: "bottomRight",
                    });
                  }
                }}
                style={{ marginTop: 20 }}
              >
                + {t("Add Item")}
              </TiltButton>
            </div>
          )}
        </Form.List>

        <TiltButton
          color="primary"
          onClick={form.submit}
          style={{ marginTop: 20 }}
        >
          {t("save")}
        </TiltButton>
      </Form>
      <Modal
        {...modalProps}
        onCancel={() => setSortingModal(false)}
        open={sortingModal}
      >
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <Text style={{ fontSize: "24px", fontWeight: "600" }}>
            {t("sorting order")}
          </Text>
          <Divider style={{ margin: 7 }} />
          <SortableList
            items={personalDetailsList}
            onChange={onChangeSortItems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">
                    {item.rankingGame?.name
                      ? item.rankingGame.name
                      : item.title}
                  </TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onCloseSortingModal}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={handleSubmitSorting}>
                {t("save")}
              </TiltButton>
            </Col>
          </Row>
        </div>
      </Modal>
      {contextHolder}
    </div>
  );
}
