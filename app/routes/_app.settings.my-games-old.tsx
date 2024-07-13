import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import { Form, Input, Modal, Result, Space, Typography } from "antd";
import { LoadingOutlined, DeleteOutlined } from "@ant-design/icons";
import { GameSelect, TextEditor, TiltButton } from "~/components/common";
import { AppContext } from "~/contexts";
import {
  type LoaderFunction,
  json,
  type ActionFunction,
} from "@remix-run/node";

import * as APIServer from "~/api";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
const { Text, Title } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  let personalDetails = [];
  let games = [];
  try {
    const personalDetailsRes = await APIServer.clientFromSession(
      session
    ).request(APIServer.getPersonalDetails());
    if (personalDetailsRes.data) {
      personalDetails = personalDetailsRes.data;
    }
    const gameRes = await APIServer.clientFromSession(session).request(
      APIServer.getGamesWithRanksAndModes()
    );
    if (gameRes.data) {
      games = gameRes.data;
    }
  } catch (e) {
    console.log("user setting error", e);
  }

  return json({ personalDetails, games });
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

// Modal properties
const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
};

// Main component
export default function SettingsMyGames() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails, games } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = useState(true);
  const [gameModal, setGameModal] = useState(false);
  const [newGameCallback, setNewGameCallback] = useState<any>(null); // Callback to add new detail
  const { scheme } = useContext(AppContext);
  const submit = useSubmit();
  const [form] = Form.useForm();

  const [personalDetailsList, setPersonalDetailsList] = useState(
    personalDetails.details.length > 0
      ? personalDetails.details.map((detail: any) => ({
          title: detail.title,
          detail: detail.detail,
        }))
      : [
          {
            id: 1,
            title: "",
            detail: "",
          },
        ]
  );

  const handleRemove = (index: any) => {
    setPersonalDetailsList((prevList: any) =>
      prevList.filter((_: any, i: any) => i !== index)
    );
  };

  const openGameModal = (callback: any) => {
    setNewGameCallback(callback); // Set callback for when game is selected
    setGameModal(true);
  };

  const closeGameModal = () => {
    setGameModal(false);
    setNewGameCallback(null); // Clear the callback when modal is closed
  };

  const handleGameChanged = (gameId: any) => {
    if (newGameCallback) {
      // Add new item with the game title
      newGameCallback({
        title: gameId,
        detail: "",
      });
    }
    closeGameModal(); // Close modal after selection
  };

  const handlePersonalDetails = (values: any) => {
    submit(
      {
        data: JSON.stringify(values),
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
      <Space size={10} direction="vertical" style={{ marginBottom: 20 }}>
        <Title level={2} style={{ margin: 0 }}>
          {t("my games")}
        </Title>
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
                    {index > 0 && (
                      <div
                        onClick={() => {
                          handleRemove(index);
                          remove(field.name);
                        }}
                        style={{ cursor: "pointer" }}
                      >
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
                      </div>
                    )}
                  </Space>

                  <Form.Item
                    name={[field.name, "title"]}
                    rules={[
                      { required: true, message: t("please input title") },
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
                      <Form.Item
                        name={[field.name, "detail"]}
                        rules={[
                          { required: true, message: t("please input detail") },
                        ]}
                      >
                        <TextEditor
                          id="detail"
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
                onClick={() =>
                  openGameModal((newDetail: any) => add(newDetail))
                } // Pass the callback to add new detail
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
        width={600}
        onCancel={closeGameModal}
        open={gameModal}
      >
        <GameSelect games={games} onGameSelect={handleGameChanged} />
      </Modal>
    </div>
  );
}
