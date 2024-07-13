import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useLoaderData, useSubmit } from "@remix-run/react";
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Modal,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TiltButton } from "~/components/common";
import { AppContext, AuthContext } from "~/contexts";
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
import { MyAchievementEntry } from "~/components/pages/User/MyAchievementEntry";
import { AchievementForm } from "~/components/pages/User/AchievementForm";
import { AchievementTitleForm } from "~/components/pages/User/AchievementTitleForm";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { ArrowUpDown, PenLine } from "lucide-react";
const { Title, Text } = Typography;

let defaultGame: any;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let achievements = [];
  let firstGameId = null;
  let games: any[] = [];
  try {
    const achievementsRes = await APIServer.clientFromSession(session).request(
      APIServer.getAchievement()
    );
    // if (achievementsRes.data) {
    //   achievements = achievementsRes.data;
    // }
    if (achievementsRes.data) {
      achievements = achievementsRes.data.map(
        (achievement: any, index: number) => ({
          ...achievement,
          id: index + 1, // Generate unique id for each achievement
        })
      );
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
    achievements,
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
  // const matches = useMatches();
  // const { cdnUrl } = matches[0].data;
  const { user } = useContext(AuthContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const { achievements } = useLoaderData();
  const [achievementBrandTitleModal, setAchievementBrandTitleModal] =
    useState(false);
  const [achievementTournamentTitleModal, setAchievementTournamentTitleModal] =
    useState(false);
  const [achievementOthersTitleModal, setAchievementOthersTitleModal] =
    useState(false);
  const [achievementBrandModal, setAchievementBrandModal] = useState(false);
  const [achievementTournamentModal, setAchievementTournamentModal] =
    useState(false);
  const [achievementOthersModal, setAchievementOthersModal] = useState(false);
  const [achievementLists, setAchievementLists] = useState(achievements);
  const [brandItems, setBrandItems] = useState<any>(
    achievementLists.find((item: any) => item.type === "brand")
  );
  const [brandItemsLists, setBrandItemsLists] = useState<any[]>(
    brandItems.userAchievements
  );
  const [tournamentItems, setTournamentItems] = useState<any>(
    achievementLists.find((item: any) => item.type === "tournament")
  );

  const [tournamentItemsLists, setTournamentItemsLists] = useState<any[]>(
    tournamentItems.userAchievements
  );
  const [othersItems, setOthersItems] = useState<any>(
    achievementLists.find((item: any) => item.type === "others")
  );
  const [othersItemsLists, setOthersItemsLists] = useState<any[]>(
    othersItems.userAchievements
  );
  const [sortingBrandModal, setSortingBrandModal] = useState<boolean>(false);
  const [sortingTournamentModal, setSortingTournamentModal] =
    useState<boolean>(false);

  const [sortingOthersModal, setSortingOthersModal] = useState<boolean>(false);
  const [sortingTypeModal, setSortingTypeModal] = useState<boolean>(false);
  const containerRef = useRef(null);

  const { scheme } = useContext(AppContext);
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  const [brandForm] = Form.useForm();
  const [tournamentForm] = Form.useForm();
  const [othersForm] = Form.useForm();

  const [brandTitleForm] = Form.useForm();
  const [tournamentTitleForm] = Form.useForm();
  const [othersTitleForm] = Form.useForm();
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

  const onChangeSortBrandtems = (items: any) => {
    setBrandItemsLists(items);
  };

  const onChangeSortTournamenttems = (items: any) => {
    setTournamentItemsLists(items);
  };

  const onChangeSortOtherstems = (items: any) => {
    setOthersItemsLists(items);
  };

  const onChangeSortTypeItems = (items: any) => {
    setAchievementLists(items);
  };

  const handleToggleBrandSortingMode = () => {
    setSortingBrandModal(!sortingBrandModal);
  };

  const onClosesortingBrandModal = () => {
    setSortingBrandModal(false);
  };

  const handleToggleTournamentSortingMode = () => {
    setSortingTournamentModal(!sortingBrandModal);
  };

  const onClosesortingTournamentModal = () => {
    setSortingTournamentModal(false);
  };

  const handleToggleOthersSortingMode = () => {
    setSortingOthersModal(!sortingBrandModal);
  };

  const onClosesortingOthersModal = () => {
    setSortingOthersModal(false);
  };

  const onClosesortingTypeModal = () => {
    setSortingTypeModal(false);
  };

  const handleToggleTypeSortingMode = () => {
    setSortingTypeModal(!sortingBrandModal);
  };

  const handleSubmitTypeSorting = () => {
    setSortingTypeModal(false);
    const itemsId = {
      order: achievementLists.map((item: any, index: number) => item.type),
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "put",
        action: `/resources/sorting-my-achievement-title`,
      }
    );
  };

  const handleSubmitBrandSorting = () => {
    setSortingBrandModal(false);
    const itemsId = {
      type: "brand",
      userAchievementIds: brandItemsLists.map(
        (item: any, index: number) => item.id
      ),
    };

    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`,
      }
    );
  };

  const handleSubmitTournamentSorting = () => {
    setSortingTournamentModal(false);
    const itemsId = {
      type: "tournament",
      userAchievementIds: tournamentItemsLists.map(
        (item: any, index: number) => item.id
      ),
    };

    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`,
      }
    );
  };

  const handleSubmitOthersSorting = () => {
    setSortingOthersModal(false);
    const itemsId = {
      type: "others",
      userAchievementIds: othersItemsLists.map(
        (item: any, index: number) => item.id
      ),
    };

    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`,
      }
    );
  };

  useEffect(() => {
    const container = containerRef.current as any;

    if (container) {
      // Array of the child divs
      const divs = Array.from(container.children);

      // Sort by a custom logic: in this example, based on a static order array
      const orderMap = {
        brand: brandItems.sortOrder,
        tournament: tournamentItems.sortOrder,
        others: othersItems.sortOrder,
        // brand: 1,
        // tournament: 2,
        // others: 3,
      } as any;

      const sortedDivs = divs.sort(
        (a: any, b: any) => orderMap[a.id] - orderMap[b.id]
      );

      // Re-append sorted divs
      container.innerHTML = ""; // Clear existing elements
      sortedDivs.forEach((div) => {
        container.appendChild(div);
      });
    }
  }, [brandItems.sortOrder, othersItems.sortOrder, tournamentItems.sortOrder]);

  useEffect(() => {
    setAchievementLists(
      achievements && achievements.length ? achievements : []
    );
  }, [achievements]);

  useEffect(() => {
    setBrandItems(achievementLists.find((item: any) => item.type === "brand"));
    setTournamentItems(
      achievementLists.find((item: any) => item.type === "tournament")
    );
    setOthersItems(
      achievementLists.find((item: any) => item.type === "others")
    );
    setBrandItemsLists(brandItems.userAchievements);
    setOthersItemsLists(othersItems.userAchievements);
    setTournamentItemsLists(tournamentItems.userAchievements);
  }, [
    achievementLists,
    brandItems.userAchievements,
    othersItems.userAchievements,
    tournamentItems.userAchievements,
  ]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    if (fetcher.data.achievements) {
      setAchievementLists(fetcher.data.achievements);
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
  //   setAchievementLists([...achievements]);
  // }, [achievements]);

  // useEffect(() => {
  //   if (fetcher.data && fetcher.data.success) {
  //     if (
  //       fetcher.data.success &&
  //       fetcher.data.success !== "create-achievement-title"
  //     ) {
  //       console.log("fetcher.data.success", fetcher.data.success);
  //       fetcher.load(`.?rankingGameId=2`);
  //       messageApi.open({
  //         type: "success",
  //         message: t(`Successfully ${fetcher.data.action} achievement`),
  //         duration: 5,
  //         placement: "bottomRight",
  //       });
  //     }
  //   }
  // }, [fetcher.data]);
  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // cursor: "pointer",
  } as any;

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
          <Title level={2}>{t("my achievement")}</Title>
        </Space>

        <div ref={containerRef}>
          <div id="brand">
            <Flex justify="space-between">
              <div>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px",
                  }}
                >
                  {brandItems?.title}
                </Text>
                <Space
                  style={{ cursor: "pointer" }}
                  onClick={() => setAchievementBrandTitleModal(true)}
                >
                  <PenLine style={{ color: "#7C6FF6" }} />
                  <Text>{t("change")}</Text>
                </Space>
              </div>
              {brandItems?.userAchievements.length > 0 && (
                <Text
                  style={{
                    marginRight: 10,
                    marginTop: 0,
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleToggleBrandSortingMode}
                >
                  <Space>
                    <ArrowUpDown
                      style={{ color: "#7C6FF6", fontSize: "1.2em" }}
                    />
                    {t("sort order")}
                  </Space>
                </Text>
              )}
            </Flex>
            <Flex gap={20} align="flex-start" style={{ overflow: "auto" }}>
              <div>
                <Card
                  bordered={false}
                  style={{
                    ...photosStyle,
                    backgroundColor: "#EEEEEE",
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "15px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => setAchievementBrandModal(true)}
                >
                  <div
                    style={{
                      textAlign: "center",
                      margin: 0,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      msTransform: "translate(-50%,-50%)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Space size={5} style={{ color: "black" }}>
                      <PlusOutlined />
                      {t("add")}
                    </Space>
                  </div>
                </Card>
              </div>
              {brandItems?.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index}>
                    <MyAchievementEntry
                      data={achievement}
                      fetcher={fetcher}
                      isMyWebboard={true}
                      type="brand"
                    />
                  </div>
                )
              )}
            </Flex>
            <Divider style={{ marginBlock: 20 }} />
          </div>
          <div id="tournament">
            <Flex justify="space-between">
              <div>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px",
                  }}
                >
                  {tournamentItems.title}
                </Text>
                <Space
                  style={{ cursor: "pointer" }}
                  onClick={() => setAchievementTournamentTitleModal(true)}
                >
                  <PenLine style={{ color: "#7C6FF6" }} />
                  <Text>{t("change")}</Text>
                </Space>
              </div>
              {tournamentItems?.userAchievements.length > 0 && (
                <Text
                  style={{
                    marginRight: 10,
                    marginTop: 0,
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleToggleTournamentSortingMode}
                >
                  <Space>
                    <ArrowUpDown
                      style={{ color: "#7C6FF6", fontSize: "1.2em" }}
                    />
                    {t("sort order")}
                  </Space>
                </Text>
              )}
            </Flex>
            <Flex gap={20} align="flex-start" style={{ overflow: "auto" }}>
              <div>
                <Card
                  bordered={false}
                  style={{
                    ...photosStyle,
                    backgroundColor: "#EEEEEE",
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "15px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => setAchievementTournamentModal(true)}
                >
                  <div
                    style={{
                      textAlign: "center",
                      margin: 0,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      msTransform: "translate(-50%,-50%)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Space size={5} style={{ color: "black" }}>
                      <PlusOutlined />
                      {t("add")}
                    </Space>
                  </div>
                </Card>
              </div>
              {tournamentItems.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index}>
                    <MyAchievementEntry
                      data={achievement}
                      fetcher={fetcher}
                      isMyWebboard={true}
                      type="tournament"
                    />
                  </div>
                )
              )}
            </Flex>
            <Divider style={{ marginBlock: 20 }} />
          </div>
          <div id="others">
            <Flex justify="space-between">
              <div>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px",
                  }}
                >
                  {othersItems.title}
                </Text>
                <Space
                  style={{ cursor: "pointer" }}
                  onClick={() => setAchievementOthersTitleModal(true)}
                >
                  <PenLine style={{ color: "#7C6FF6" }} />
                  <Text>{t("change")}</Text>
                </Space>
              </div>
              {othersItems?.userAchievements.length > 0 && (
                <Text
                  style={{
                    marginRight: 10,
                    marginTop: 0,
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleToggleOthersSortingMode}
                >
                  <Space>
                    <ArrowUpDown
                      style={{ color: "#7C6FF6", fontSize: "1.2em" }}
                    />
                    {t("sort order")}
                  </Space>
                </Text>
              )}
            </Flex>
            <Flex gap={20} align="flex-start" style={{ overflow: "auto" }}>
              <div>
                <Card
                  bordered={false}
                  style={{
                    ...photosStyle,
                    backgroundColor: "#EEEEEE",
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "15px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => setAchievementOthersModal(true)}
                >
                  <div
                    style={{
                      textAlign: "center",
                      margin: 0,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      msTransform: "translate(-50%,-50%)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Space size={5} style={{ color: "black" }}>
                      <PlusOutlined />
                      {t("add")}
                    </Space>
                  </div>
                </Card>
              </div>
              {othersItems.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index}>
                    <MyAchievementEntry
                      data={achievement}
                      fetcher={fetcher}
                      isMyWebboard={true}
                      type="others"
                    />
                  </div>
                )
              )}
            </Flex>
            <Divider style={{ marginBlock: 20 }} />
          </div>
        </div>
        <Flex justify="space-between" style={{ marginBottom: 10 }}>
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
            onClick={handleToggleTypeSortingMode}
          >
            <Space>
              <ArrowUpDown style={{ color: "#7C6FF6", fontSize: "1.2em" }} />
              {t("sort order")}
            </Space>
          </Text>
        </Flex>
        <Space direction="vertical">
          {achievementLists.map((achievement: any, index: number) => (
            <div key={index}>
              {index + 1}. {achievement.title}
            </div>
          ))}
        </Space>
        <TiltButton
          color="primary"
          onClick={handleSubmitToProfileIndex}
          style={{ marginTop: 20 }}
        >
          {t("save")}
        </TiltButton>
      </div>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementBrandModal(false)}
        open={achievementBrandModal}
      >
        <AchievementForm
          fetcher={fetcher}
          form={brandForm}
          action="create"
          type="brand"
          onCancel={() => setAchievementBrandModal(false)}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementTournamentModal(false)}
        open={achievementTournamentModal}
      >
        <AchievementForm
          fetcher={fetcher}
          form={tournamentForm}
          action="create"
          type="tournament"
          onCancel={() => {
            setAchievementTournamentModal(false);
          }}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementOthersModal(false)}
        open={achievementOthersModal}
      >
        <AchievementForm
          fetcher={fetcher}
          form={othersForm}
          action="create"
          type="others"
          onCancel={() => setAchievementOthersModal(false)}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementBrandTitleModal(false)}
        open={achievementBrandTitleModal}
      >
        <AchievementTitleForm
          fetcher={fetcher}
          form={brandTitleForm}
          action="update"
          type="brand"
          initialValues={brandItems}
          onCancel={() => setAchievementBrandTitleModal(false)}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementTournamentTitleModal(false)}
        open={achievementTournamentTitleModal}
      >
        <AchievementTitleForm
          fetcher={fetcher}
          form={tournamentTitleForm}
          action="update"
          type="tournament"
          initialValues={tournamentItems}
          onCancel={() => setAchievementTournamentTitleModal(false)}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setAchievementOthersTitleModal(false)}
        open={achievementOthersTitleModal}
      >
        <AchievementTitleForm
          fetcher={fetcher}
          form={othersTitleForm}
          action="update"
          type="others"
          initialValues={othersItems}
          onCancel={() => setAchievementOthersTitleModal(false)}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setSortingBrandModal(false)}
        open={sortingBrandModal}
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
            items={brandItemsLists}
            onChange={onChangeSortBrandtems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.name}</TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onClosesortingBrandModal}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={handleSubmitBrandSorting}>
                {t("save")}
              </TiltButton>
            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setSortingTournamentModal(false)}
        open={sortingTournamentModal}
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
            items={tournamentItemsLists}
            onChange={onChangeSortTournamenttems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.name}</TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton
                color="secondary"
                onClick={onClosesortingTournamentModal}
              >
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton
                color="primary"
                onClick={handleSubmitTournamentSorting}
              >
                {t("save")}
              </TiltButton>
            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setSortingOthersModal(false)}
        open={sortingOthersModal}
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
            items={othersItemsLists}
            onChange={onChangeSortOtherstems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.name}</TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onClosesortingOthersModal}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={handleSubmitOthersSorting}>
                {t("save")}
              </TiltButton>
            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setSortingTypeModal(false)}
        open={sortingTypeModal}
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
            items={achievementLists}
            onChange={onChangeSortTypeItems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.title}</TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onClosesortingTypeModal}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={handleSubmitTypeSorting}>
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
