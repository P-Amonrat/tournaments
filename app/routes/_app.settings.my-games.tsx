import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Modal,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import { PlusOutlined, VerticalAlignMiddleOutlined } from "@ant-design/icons";
import { TiltButton } from "~/components/common";
import {
  type LoaderFunction,
  json,
  type ActionFunction,
  redirect,
} from "@remix-run/node";

import * as APIServer from "~/api";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import { MyGameEntry } from "~/components/pages/User/MyGameEntry";
import { UserGameForm } from "~/components/pages/User/UserGameForm";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { AuthContext } from "~/contexts";
import { ArrowUpDown } from "lucide-react";
const { Title, Text } = Typography;

let defaultGame: any;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let gamesInfoTitle = [];
  let gamesInfo = [];
  let firstGameId = null;
  let games: any[] = [];
  try {
    const gamesInfoTitleRes = await APIServer.clientFromSession(
      session
    ).request(APIServer.getExperiencesTitle());
    if (gamesInfoTitleRes.data) {
      gamesInfoTitle = gamesInfoTitleRes.data;
    }
    firstGameId = gamesInfoTitle[0]?.rankingGameId
      ? { rankingGameId: gamesInfoTitle[0]?.rankingGameId }
      : { experienceTitleId: gamesInfoTitle[0]?.id };

    const gamesInfoRes = await APIServer.clientFromSession(session).request(
      APIServer.getUserGameInfo()
    );
    if (gamesInfoRes.data) {
      gamesInfo = gamesInfoRes.data;
    }

    const gameRes = await APIServer.clientFromSession(session).request(
      APIServer.getUserGameLists()
    );
    if (gameRes.data) {
      games = gameRes.data;
      defaultGame = games.find((game: any) => `${game.name}` === `VALORANT`);
    }
  } catch (e) {
    console.log("user setting error", e);
  }

  return json({
    gamesInfoTitle,
    gamesInfo,
    firstGameId,
    games,
    defaultGame,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const entries = Object.fromEntries(formdata) as any;
  const data = entries.data ? JSON.parse(entries.data) : null;
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
    case "save-to-profile-index":
      session.flash("flashMessage", {
        type: "success",
        message: `successfully saved to profile index`,
      });
      return redirect(`/users/${uuid}`, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
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
  const [messageApi, contextHolder] = notification.useNotification();
  const { gamesInfo, games, defaultGame } = useLoaderData();
  const [gameInfoModal, setGameInfoModal] = useState(false);
  const [gameInfoLists, setGameInfoLists] = useState<[]>(gamesInfo);
  const [sortingModal, setSortingModal] = useState<boolean>(false);

  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  const [form] = Form.useForm();
  const { user } = useContext(AuthContext);
  const submit = useSubmit();

  const handleSubmitToProfileIndex = () => {
    submit(
      {
        uuid: user.uuid,
        action: "save-to-profile-index",
      },
      { method: "post" }
    );
  };

  const openExperienceModal = () => {
    setGameInfoModal(true);
  };

  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };

  const onChangeSortItems = (items: any) => {
    setGameInfoLists(items);
  };

  const onCloseSortingModal = () => {
    setSortingModal(false);
  };

  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      userRankingGameIds: gameInfoLists.map(
        (item: any, index: number) => item.id
      ),
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-my-games`,
      }
    );
  };

  useEffect(() => {
    setGameInfoLists(gamesInfo && gamesInfo.length ? gamesInfo : []);
  }, [gamesInfo]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    if (fetcher.data.gamesInfo) {
      setGameInfoLists(fetcher.data.gamesInfo);
    }
  }, [fetcher.data]);

  useEffect(() => {
    // Listen for changes in screen size and update state variable accordingly
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   setGameInfoLists([...gamesInfo]);
  // }, [gamesInfo]);

  // useEffect(() => {
  //   if (fetcher.data && fetcher.data.success) {
  //     if (
  //       fetcher.data.success &&
  //       fetcher.data.success !== "create-experience-title"
  //     ) {
  //       console.log("fetcher.data.success", fetcher.data.success);
  //       fetcher.load(`.?rankingGameId=2`);
  //       messageApi.open({
  //         type: "success",
  //         message: t(`Successfully ${fetcher.data.action} experience`),
  //         duration: 5,
  //         placement: "bottomRight",
  //       });
  //     }
  //   }
  // }, [fetcher.data]);

  return (
    <div style={{ maxWidth: 600 }}>
      <div>
        <Space
          size={10}
          direction="horizontal"
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title level={2}>{t("my games")}</Title>
          {screenSize === "greaterThanSM" && (
            <Row justify={"end"} style={{ margin: 10 }}>
              {gameInfoLists.length > 0 && (
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

              <TiltButton color="primary" onClick={() => openExperienceModal()}>
                <Space>
                  <PlusOutlined style={{ color: "black" }} />
                  {t("add game")}
                </Space>
              </TiltButton>
            </Row>
          )}
        </Space>
        {screenSize === "atSM" && (
          <Row justify={"end"} style={{ margin: 10, marginTop: 0 }}>
            {gameInfoLists.length > 0 && (
              <Button
                type="text"
                style={{
                  marginTop: 2,
                  marginRight: 10,
                  fontWeight: 600,
                  textAlign: "center",
                }}
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

            <TiltButton color="primary" onClick={() => openExperienceModal()}>
              <Space>
                <PlusOutlined style={{ color: "black" }} />
                {t("add game")}
              </Space>
            </TiltButton>
          </Row>
        )}

        {gameInfoLists.map((experience: any, index: number) => (
          <div key={index}>
            <MyGameEntry
              data={experience}
              fetcher={fetcher}
              game={defaultGame}
              games={games}
            />
          </div>
        ))}
        <TiltButton
          color="primary"
          onClick={handleSubmitToProfileIndex}
          style={{ marginTop: 20 }}
        >
          {t("save")}
        </TiltButton>
      </div>
      {/* <Modal
        {...modalProps}
        onCancel={() => setGameInfoModal(false)}
        open={gameInfoModal}
      >
        <ExperienceForm
          fetcher={fetcher}
          form={form}
          gameId={gameId}
          titleType={titleType}
          onCancel={() => setGameInfoModal(false)}
          action="create"
        />
      </Modal> */}
      <Modal
        {...modalProps}
        onCancel={() => setGameInfoModal(false)}
        open={gameInfoModal}
      >
        <UserGameForm
          fetcher={fetcher}
          form={form}
          game={defaultGame}
          games={games}
          action="create"
          onCancel={() => setGameInfoModal(false)}
        />
      </Modal>
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
            items={gameInfoLists}
            onChange={onChangeSortItems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.rankingGame.name}</TiltButton>
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
