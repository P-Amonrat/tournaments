import { useContext, useEffect, useState } from "react";
import {
  useFetcher,
  useLoaderData,
  useMatches,
  useSubmit,
} from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Result,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { PrivateFieldSelection, TiltButton } from "~/components/common";
import { AuthContext } from "~/contexts";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { TextEditorNoTools } from "~/components/common/TextEditorNoTools.client";
import { ArrowUpDown } from "lucide-react";
const { Text, Title } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  let games: any[] = [];
  try {
    const gameRes = await APIServer.clientFromSession().request(
      APIServer.getGames()
    );
    if (gameRes.data) {
      games = gameRes.data;
    }
  } catch (e) {
    console.log("user setting error", e);
  }

  const activeGame = games.filter((game) => game.isActive);

  return json({ games: activeGame });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const uuid = formdata.get("uuid");
  const entries = Object.fromEntries(formdata);
  delete entries.uuid;

  try {
    await APIServer.clientFromSession(session).request(
      APIServer.updateProfile(entries)
    );
    if (entries.gameProfiles) {
      await APIServer.clientFromSession(session).request(
        APIServer.updateGameProfile({ gameProfiles: entries.gameProfiles })
      );
    }
    const { data } = await APIServer.clientFromSession(session).request(
      APIServer.me()
    );

    session.set("me", data);
    session.flash("flashMessage", {
      type: "success",
      message: `successfully update profile`,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message:
        // e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data.message,
        "please enter username",
    });
  }

  return redirect(`/users/${uuid}`, {
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

export default function SettingsProfile() {
  const { t } = useTranslation();
  const { games } = useLoaderData();
  const submit = useSubmit();
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const socials = ["discord", "twitch", "facebook", "x"];
  const [sortingModal, setSortingModal] = useState<boolean>(false);
  const [textEditorLoading, setTextEditorLoading] = useState<boolean>(true);

  const updatedArray = user.profile.sortOrder.map((item: any, index: any) => {
    return { ...item, id: index + 1 };
  });

  const [sortOrderList, setSortOrderList] = useState<any>(updatedArray);

  const fetcher = useFetcher();
  let initialValues: any = null;
  if (user) {
    initialValues = {
      displayName: user.displayName ? user.displayName : "",
      userName: user?.userName ? user.userName : undefined,
      bio: user.profile.bio ? user.profile.bio : "",
      profileEmail: user.profile.profileEmail ? user.profile.profileEmail : "",
      privateEmail:
        user.profile.privateEmail === "public" ? "public" : "private",
      profilePhoneNumber: user.profile.profilePhoneNumber
        ? user.profile.profilePhoneNumber
        : "",
      privatePhone:
        user.profile.privatePhone === "public" ? "public" : "private",
      websiteUrl: user.profile.websiteUrl ? user.profile.websiteUrl : "",
      privateWebsite:
        user.profile.privateWebsite === "public" ? "public" : "private",
      discordId: user.profile.discordId ? user.profile.discordId : "",
      privateDiscordId:
        user.profile.privateDiscordId === "public" ? "public" : "private",
      facebookLink: user.profile.facebookLink ? user.profile.facebookLink : "",
      privateFacebookLink:
        user.profile.privateFacebookLink === "public" ? "public" : "private",
      twitchLink: user.profile.twitchLink ? user.profile.twitchLink : "",
      privateTwitchLink:
        user.profile.privateTwitchLink === "public" ? "public" : "private",
      xLink: user.profile.xLink ? user.profile.xLink : "",
      privateXLink:
        user.profile.privateXLink === "public" ? "public" : "private",
    } as any;
    if (games && games.length > 0 && user.userGames) {
      games.map((game: any) => {
        initialValues[`username-${game.id}`] = user.userGames.find(
          (userGame: any) => userGame.gameId == game.id
        )?.ign;
        return null;
      });
    }
  }
  const [userName, setUserName] = useState<string>(initialValues?.userName);
  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };

  const onChangeSortItems = (items: any) => {
    setSortOrderList(items);
  };

  const onCloseSortingModal = () => {
    setSortingModal(false);
  };

  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      order: sortOrderList.map((item: any, index: number) => item.name),
    };

    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
        uuid: user.uuid,
      },
      {
        method: "post",
        action: `/resources/sorting-profile`,
      }
    );
  };

  const onSubmit = (values: any) => {
    const result: any = {};
    Object.keys(values).map((key: string) => {
      if (values.hasOwnProperty(key)) {
        const parts = key.split("-");
        if (parts.length === 1) {
          result[key] = values[key];
        } else {
          switch (parts[0]) {
            // case "username":
            //   if (!result.userGames) {
            //     result.userGames = {};
            //   }
            //   result.userGames[parts[1]] = values[key];
            //   break;
            case "private":
              if (!result.privateFields) {
                result.privateFields = [];
              }
              if (values[key] === "private") {
                result.privateFields.push(parts[1]);
              }
              break;
          }
        }
      }
    });
    const gamesData = [];
    for (const key in values) {
      if (key.startsWith("username-")) {
        const idKey = key.replace("username-", "gameId");
        const gameId = values[idKey];
        gamesData.push({ ign: values[key], gameId: gameId });
      }
    }

    submit(
      {
        ...result,
        userName: userName,
        uuid: user.uuid,
        gameProfiles: JSON.stringify(gamesData),
        gameCount: gamesData.length,
      },
      { method: "post" }
    );
  };

  useEffect(() => {
    setTextEditorLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: 600 }}>
      <Title level={2} style={{ marginTop: 0, marginBottom: 40 }}>
        {t("profile")}
      </Title>
      <Form
        form={form}
        onFinish={onSubmit}
        layout="vertical"
        initialValues={initialValues}
      >
        <Space direction="vertical" size={10} style={{ display: "flex" }}>
          <Form.Item
            name="displayName"
            rules={[
              {
                required: true,
                message: t("please input display name"),
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value.length && value.length > 20) {
                    return Promise.reject(
                      new Error(
                        `${t(
                          "display name is too long (maximum 20 characters)"
                        )}`
                      )
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("display name")}
              </Text>
            }
          >
            <Input />
          </Form.Item>
          {!textEditorLoading ? (
            <Space size={10} direction="vertical" style={{ display: "flex" }}>
              <Form.Item
                key="bio"
                name="bio"
                label={
                  <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                    {t("bio")}
                  </Text>
                }
              >
                <TextEditorNoTools
                  id="bio"
                  initialValues={form.getFieldValue("bio")}
                  fetcher={fetcher}
                  onChange={(values: any) => form.setFieldValue("bio", values)}
                />
              </Form.Item>
            </Space>
          ) : (
            <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          )}
          {/* <Form.Item
            name="bio"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("bio")}
              </Text>
            }
          >
            <Input.TextArea rows={6} />
          </Form.Item> */}
          <Form.Item
            name="profileEmail"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("email")}
              </Text>
            }
          >
            <Input
              type="email"
              addonAfter={<PrivateFieldSelection fieldName="privateEmail" />}
            />
          </Form.Item>
          <Form.Item
            name="profilePhoneNumber"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("phone")}
              </Text>
            }
          >
            <Input
              type="tel"
              addonAfter={<PrivateFieldSelection fieldName="privatePhone" />}
            />
          </Form.Item>
          <Form.Item
            name="websiteUrl"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("website")}
              </Text>
            }
          >
            <Input
              type="website"
              addonAfter={<PrivateFieldSelection fieldName="privateWebsite" />}
            />
          </Form.Item>

          <Form.Item
            name="userName"
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("user url")}
              </Text>
            }
            rules={[
              {
                pattern: /^[A-Za-z0-9]*$/,
                message: t(
                  "only english characters and numbers are allowed, and no spaces"
                ),
              },
              {
                min: 5,
                message: t("username must be more than 5 characters"),
              },
              {
                max: 30,
                message: t("username can't be more than 30 characters"),
              },
            ]}
          >
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ marginTop: "7px", marginRight: "9px" }}>
                ctrlg.gg/users/
              </div>
              <div style={{ width: "100%" }}>
                <Form.Item name="userName" noStyle>
                  <Input
                    placeholder={t("username")}
                    value={userName}
                    onChange={handleUserNameChange}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <div style={{ marginTop: "7px", color: "#C7C8CC" }}>
            <ul>
              <li>{t("only english characters and numbers are allowed")}</li>
              <li>{t("spaces are not allowed")}</li>
              <li>{t("must contain 5-30 characters")}</li>
            </ul>
          </div>
          <label style={{ marginTop: "0", display: "flex", paddingBottom: 5 }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: "inherit",
              }}
            >
              {t("social accounts")}
            </Text>
          </label>
          {socials.map((social: string) => (
            <Form.Item
              key={social === "discord" ? `${social}Id` : `${social}Link`}
              name={social === "discord" ? `${social}Id` : `${social}Link`}
            >
              <Input
                addonBefore={
                  <Avatar src={`image/social/${social}.png`} size={40} />
                }
                placeholder={
                  social === "discord"
                    ? `Discord ID`
                    : `https://www.${social}.com/username`
                }
                addonAfter={
                  <PrivateFieldSelection
                    fieldName={`private${
                      social === "discord"
                        ? `${
                            social.charAt(0).toUpperCase() + social.slice(1)
                          }Id`
                        : `${
                            social.charAt(0).toUpperCase() + social.slice(1)
                          }Link`
                    }`}
                  />
                }
              />
            </Form.Item>
          ))}
          <Flex justify="space-between" style={{ marginBottom: 0 }}>
            <div>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: "inherit",
                  marginRight: "10px",
                }}
              >
                {t("display order")}
              </Text>
            </div>
            <Text
              style={{
                marginRight: 10,
                marginTop: 0,
                fontWeight: 600,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={handleToggleSortingMode}
            >
              <Space>
                <ArrowUpDown style={{ color: "#7C6FF6", fontSize: "1.2em" }} />
                {t("sort order")}
              </Space>
            </Text>
          </Flex>
          <Space direction="vertical">
            {sortOrderList.map((profile: any, index: number) => (
              <div key={index}>
                {index + 1}. {t(profile.name)}
              </div>
            ))}
          </Space>
          {/* {games.length > 0 && (
            <>
              <label style={{ display: "flex", paddingBottom: 5 }}>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "inherit",
                  }}
                >
                  {t("game usernames")}
                </Text>
              </label>
              {games.map((game: any, index: number) => (
                <div key={`game-username-${index}`}>
                  <Form.Item name={`username-${game.id}`}>
                    <Input
                      addonBefore={
                        <Avatar
                          src={
                            game.iconUrl
                              ? `${cdnUrl}/${game.iconUrl}`
                              : "/image/placeholder.png"
                          }
                          size={40}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name={`gameId${game.id}`}
                    initialValue={game.id}
                    style={{ display: "none" }}
                  >
                    <Input type="hidden" />
                  </Form.Item>
                </div>
              ))}
            </>
          )} */}
          <TiltButton
            color="primary"
            onClick={() => form.submit()}
            style={{ marginTop: 20 }}
          >
            {t("save")}
          </TiltButton>
        </Space>
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
            items={sortOrderList}
            onChange={onChangeSortItems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{t(`${item.name}`)}</TiltButton>
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
    </div>
  );
}
