import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useFetcher,
  useLoaderData,
  useMatches,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Modal,
  Row,
  Space,
  Tabs,
  Typography,
  notification,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
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
import { ExperienceForm } from "~/components/pages/User/ExperiencesForm";
import { isNil, omitBy } from "lodash";
import { ExperienceEntry } from "~/components/pages/User/ExpereinceEntry";
import { ExperienceTitleForm } from "~/components/pages/User/ExperiencesTitleForm";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { ArrowUpDown } from "lucide-react";
const { Title, Text } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let experiencesTitle = [];
  let experiences = [];
  let firstGameId = null;
  try {
    const experiencesTitleRes = await APIServer.clientFromSession(
      session
    ).request(APIServer.getExperiencesTitle());
    if (experiencesTitleRes.data) {
      experiencesTitle = experiencesTitleRes.data;
    }
    if (experiencesTitleRes.data) {
      // experiencesTitle = experiencesTitleRes.data.map(
      //   (experienceTitle: any, index: number) => ({
      //     ...experienceTitle,

      //   })
      // );
      experiencesTitle = experiencesTitleRes.data.map(
        (item: any, index: number) =>
          item.id
            ? {
                ...item,
                haveOrignalId: true,
              }
            : { ...item, id: index + 1, haveOrignalId: false }
      );
    }
    firstGameId = experiencesTitle[0]?.rankingGameId
      ? { rankingGameId: experiencesTitle[0]?.rankingGameId }
      : { experienceTitleId: experiencesTitle[0]?.id };

    const experiencesRes = await APIServer.clientFromSession(session).request(
      APIServer.getExperiences(searchParams, firstGameId)
    );
    if (experiencesRes.data) {
      experiences = experiencesRes.data;
    }
  } catch (e) {
    console.log("user setting error", e);
  }

  return json({ experiencesTitle, experiences, firstGameId });
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
export default function SettingsExperiences() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const [messageApi, contextHolder] = notification.useNotification();
  const { experiencesTitle, experiences } = useLoaderData();
  const [experienceModal, setExperienceModal] = useState(false);
  const [experienceTitleModal, setExperienceTitleModal] = useState(false);
  const [experienceEditTitleModal, setExperienceEditTitleModal] =
    useState(false);

  const [experienceLists, setExperienceLists] = useState<[]>(experiences);
  const [experienceTitleLists, setExperienceTitleLists] =
    useState<[]>(experiencesTitle);
  const [experienceTitleSortLists, setExperienceTitleSortLists] =
    useState<[]>(experiencesTitle);

  const [gameId, setGameId] = useState<number | undefined>(
    experiencesTitle[0]?.rankingGameId
  );
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  const [titleType, setTitleType] = useState<string | undefined>(
    experiencesTitle[0]?.rankingGameId ? "rankingGameId" : "experienceTitleId"
  );
  const [activeTabKey, setActiveTabKey] = useState<number>(0); // Initialize active tab key state

  const tabItems = (titleItems: any, items: any) =>
    titleItems &&
    titleItems.length &&
    titleItems.map((game: any, index: number) => ({
      key: index,
      label: (
        <div style={{ position: "relative" }}>
          <Avatar
            src={`${cdnUrl}/${
              game.rankingGame?.icon
                ? game.rankingGame?.icon
                : game?.icon
                ? game.icon
                : null
            }`}
            size={40}
            style={{
              margin: screenSize === "greaterThanSM" ? "0 8px" : "0 4px",
              boxShadow:
                scheme === "dark"
                  ? "0px 5px 10px -2px rgba(0, 0, 0, 0.6)"
                  : "0px 5px 10px -2px rgba(0, 0, 0, 0.2)",
              opacity: activeTabKey === index ? 1 : 0.5,
            }}
          />
          {game.icon && (
            <div
              style={{
                position: "absolute",
                top: -10,
                right: 1,
                zIndex: 1000,
              }}
              onClick={() => openTitleExperienceModal(game)}
            >
              <Avatar size={20} style={{ backgroundColor: "black" }}>
                <EditOutlined />
              </Avatar>
            </div>
          )}
        </div>
      ),
      children: fetcher.state === "idle" && (
        <>
          <Title level={4}>
            {game.rankingGame?.name ? game.rankingGame?.name : game.title}
          </Title>
          {items.map((experience: any, index: number) => (
            <div key={index}>
              <ExperienceEntry
                data={experience}
                fetcher={fetcher}
                isMyWebboard={true}
              />
            </div>
          ))}
        </>
      ),
    }));

  const [gameItems, setGameItems] = useState<any>(
    tabItems(experienceTitleLists, experienceLists)
  );

  const [editTitleValue, setEditTitleValue] = useState<any>();
  const [modal, contextHolder2] = Modal.useModal();
  const [sortingModal, setSortingModal] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const [form] = Form.useForm();
  const submit = useSubmit();

  const [titleForm] = Form.useForm();
  const [titleEditForm] = Form.useForm();
  const navigate = useNavigate();
  const operations = (
    <Avatar
      icon={<PlusOutlined style={{ color: "black" }} />}
      size={40}
      style={{ backgroundColor: "#f7f7f7", cursor: "pointer" }}
      onClick={() => openExperienceTitleModal()}
    />
  );

  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };

  const onChangeSortItems = (items: any) => {
    setExperienceTitleSortLists(items);
  };

  const onCloseSortingModal = () => {
    setSortingModal(false);
  };

  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      order: experienceTitleSortLists.map((item: any, index: number) =>
        item.haveOrignalId
          ? {
              experienceTitleId: item.id,
            }
          : { rankingGameId: item.rankingGameId }
      ),
    };

    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-my-experience-title`,
      }
    );
  };

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
    setExperienceModal(true);
  };

  const openTitleExperienceModal = (value: any) => {
    setEditTitleValue(value);
    setExperienceEditTitleModal(true);
  };

  const openExperienceTitleModal = () => {
    setExperienceTitleModal(true);
  };

  useEffect(() => {
    setExperienceLists(experiences && experiences.length ? experiences : []);
  }, [experiences, fetcher]);

  useEffect(() => {
    setGameItems(tabItems(experienceTitleLists, experienceLists));
  }, [experienceLists, experienceTitleLists]);

  useEffect(() => {
    setExperienceTitleLists(
      experiencesTitle && experiencesTitle.length ? experiencesTitle : []
    );
    setExperienceTitleSortLists(
      experiencesTitle && experiencesTitle.length ? experiencesTitle : []
    );
  }, [experiencesTitle, fetcher]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    if (fetcher.data.experiences) {
      setExperienceLists(fetcher.data.experiences);
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    if (fetcher.data.experiencesTitle) {
      setExperienceTitleLists(fetcher.data.experiencesTitle);
      setExperienceTitleSortLists(fetcher.data.experiencesTitle);
    }
  }, [fetcher.data]);

  const handleDeleteExperienceTitle = useCallback(() => {
    if (fetcher.state === "idle") {
      modal.confirm({
        title: `${t(`are you sure you want to delete this expereince title?`)}`,
        icon: <ExclamationCircleFilled />,
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { id: editTitleValue.id },
            {
              method: "post",
              action: `/resources/delete-experience-title`,
            }
          );
          setExperienceEditTitleModal(false);
        },
      });
    }
  }, [fetcher]);

  const onChange = (key: any) => {
    const param = experiencesTitle[key]?.rankingGameId
      ? { rankingGameId: experiencesTitle[key]?.rankingGameId }
      : { experienceTitleId: experiencesTitle[key]?.id };
    const newSearchParams = param;

    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();
    setGameId(
      experiencesTitle[key]?.rankingGameId
        ? experiencesTitle[key]?.rankingGameId
        : experiencesTitle[key]?.id
    );
    setTitleType(
      experiencesTitle[key]?.rankingGameId
        ? "rankingGameId"
        : "experienceTitleId"
    );

    setActiveTabKey(key);

    fetcher.load(`.?${queryString}`);
  };

  useEffect(() => {
    if (
      fetcher.data &&
      fetcher.data.success &&
      fetcher.data.experienceTitleId
    ) {
      if (
        // fetcher.data.success &&
        // fetcher.data.success !== "create-experience-title" &&
        // fetcher.data.success !== "delete-experience-title"
        fetcher.data.success &&
        fetcher.data.success !== "create-experience-title"
      ) {
        fetcher.load(`.?experienceTitleId=${fetcher.data.experienceTitleId}`);
        messageApi.open({
          type: "success",
          message: t(`Successfully ${fetcher.data.action} experience`),
          duration: 5,
          placement: "bottomRight",
        });
        navigate("/settings/experiences");
      }
    }
    // else if (
    //   fetcher.data &&
    //   fetcher.data.success &&
    //   fetcher.data.success === "delete-experience-title"
    // ) {
    //   // fetcher.load(`.?rankingGameId=${8}`);
    //   messageApi.open({
    //     type: "success",
    //     message: t(`Successfully ${fetcher.data.action} experience title`),
    //     duration: 5,
    //     placement: "bottomRight",
    //   });
    //   navigate("/settings/experiences");
    // }
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

  return (
    <div>
      <div>
        <Space
          size={10}
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title level={2}>{t("experiences")}</Title>
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
        </Space>
        <div>
          <Tabs
            items={gameItems}
            onChange={onChange}
            tabBarExtraContent={operations}
          />
        </div>
        <div>
          <TiltButton
            color={`${scheme}-base`}
            onClick={() => openExperienceModal()}
            style={{ marginTop: 20 }}
          >
            + {t("add experince")}
          </TiltButton>
        </div>
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
        onCancel={() => setExperienceModal(false)}
        open={experienceModal}
      >
        <ExperienceForm
          fetcher={fetcher}
          form={form}
          gameId={gameId}
          titleType={titleType}
          onCancel={() => setExperienceModal(false)}
          action="create"
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setExperienceTitleModal(false)}
        open={experienceTitleModal}
      >
        <ExperienceTitleForm
          fetcher={fetcher}
          form={titleForm}
          gameId={gameId}
          onCancel={() => setExperienceTitleModal(false)}
          action="create"
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setExperienceEditTitleModal(false)}
        open={experienceEditTitleModal}
      >
        <ExperienceTitleForm
          fetcher={fetcher}
          form={titleEditForm}
          gameId={gameId}
          onCancel={() => setExperienceEditTitleModal(false)}
          action="edit"
          initialValues={fetcher.state === "idle" && editTitleValue}
          handleDeleteExperienceTitle={handleDeleteExperienceTitle}
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
            items={experienceTitleSortLists}
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
      {contextHolder2}
    </div>
  );
}
