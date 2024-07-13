import { useCallback, useContext, useEffect, useState } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useMatches,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import {
  Avatar,
  Button,
  Empty,
  Form,
  List,
  Modal,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { UserHero, UserSingleMenus, UserTitle } from "~/components/pages/User";
import { KycForm, TiltMenus } from "~/components/common";
import { AuthContext } from "~/contexts";
import { AffixMenu } from "~/components/layouts";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";
import { isEmpty, isNil, omitBy } from "lodash";

export const loader: LoaderFunction = async ({ params, request }) => {
  const { uuid } = params;
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let userInfo: any;
  let userSummaryInfo: any;
  let frameAsset: any;
  let likeCurrenUser: any;
  let allLikeByUser: any;
  let amountLikeByUser: any;
  let games: any[] = [];
  let defaultGame: any;
  let gamesInfo = [];

  try {
    const allLikeByUserRes = await APIServer.clientFromSession(session).request(
      APIServer.allLikeByUser(uuid, searchParams)
    );
    allLikeByUser = allLikeByUserRes.data;
    amountLikeByUser = allLikeByUserRes.data.total;

    if (uuid !== undefined) {
      const userRes = await APIServer.clientFromSession(session).request(
        APIServer.getUserFromUuid(uuid)
      );
      if (userRes.data) {
        userInfo = userRes.data;
      }

      const userSummaryRes = await APIServer.clientFromSession(session).request(
        APIServer.getUserSummaryFromUuid(uuid)
      );
      if (userRes.data) {
        userSummaryInfo = userSummaryRes.data;
      }
    }

    if (session) {
      const frameRes = await APIServer.clientFromSession(session).request(
        APIServer.getMyAsset()
      );

      frameAsset = frameRes.data;

      const likeCurrenUserRes = await APIServer.clientFromSession(
        session
      ).request(APIServer.currentUserLike(uuid));
      likeCurrenUser = likeCurrenUserRes.data;
    }

    const gamesInfoRes = await APIServer.clientFromSession(session).request(
      APIServer.getUserGameInfo()
    );
    if (gamesInfoRes.data) {
      gamesInfo = gamesInfoRes.data;
    }

    const gameRes = await APIServer.clientFromSession(session).request(
      APIServer.getUserGameInfo()
    );
    if (gameRes.data) {
      games = gameRes.data;
      defaultGame = games.find((game: any) => `${game.name}` === `VALORANT`);
    }
  } catch (e) {
    console.log("e", e);
  }

  return json({
    searchParams,
    userInfo,
    uuid,
    frameAsset,
    likeCurrenUser,
    allLikeByUser,
    amountLikeByUser,
    defaultGame,
    games,
    gamesInfo,
    userSummaryInfo,
  });
};

export const action: ActionFunction = async ({ params, request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const submitData = formData.get("data");
  const action = formData.get("action");
  const { uuid } = params;

  switch (action) {
    case "submit-kyc":
      try {
        await APIServer.clientFromSession(session).request(
          APIServer.submitKyc(submitData)
        );
        const { data } = await APIServer.clientFromSession(session).request(
          APIServer.me()
        );
        session.set("me", data);
        session.flash("flashMessage", {
          type: "success",
          message: "Successfully Verified Kyc",
        });
        await commitSession(session);
        return json({ success: true });
      } catch (e: any) {
        session.flash("flashMessage", {
          type: "error",
          message: e.response.data.message.desc
            ? e.response.data.message.desc
            : e.response.data.message,
        });
        await commitSession(session);
      }
    case "submit-likeToggle":
      try {
        await APIServer.clientFromSession(session).request(
          APIServer.likeToggleUser(uuid)
        );
        const { data } = await APIServer.clientFromSession(session).request(
          APIServer.me()
        );
        session.set("me", data);
        // session.flash("flashMessage", {
        //   type: "success",
        //   message: "Successfully",
        // });
        await commitSession(session);
        return json({ success: true });
      } catch (e: any) {
        session.flash("flashMessage", {
          type: "error",
          message: e.response.data.message.desc
            ? e.response.data.message.desc
            : e.response.data.message,
        });
        await commitSession(session);
      }
  }

  return json(null);
};

export default function UserSingleLayout() {
  const {
    userInfo,
    uuid,
    frameAsset,
    likeCurrenUser,
    allLikeByUser,
    amountLikeByUser,
    searchParams,
  } = useLoaderData();
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const [form] = Form.useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const isOrganizer =
    user && user.roles.includes("organizer") && user.uuid === uuid;
  const isOwner = user && user.id === userInfo.id;
  const { menus } = UserSingleMenus(isOwner, isOrganizer);
  const [kycModal, setKycModal] = useState<boolean>(false);
  const [likeAmountModal, setLikeAmountModal] = useState<boolean>(false);
  const [likeStatus, setLikeStatus] = useState<boolean>(false);
  const [allLikeByUserList, setAllLikeByUserList] = useState<any>([]);
  const [amountLikeByUserNumber, setAmountLikeByUserNumber] =
    useState<number>(amountLikeByUser);

  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent", padding: 0 } },
    modalRender: (modal: any) => modal,
  };

  const onSubmitLike = () => {
    fetcher.submit(
      {
        action: "submit-likeToggle",
        // data: JSON.stringify({
        //   ...value,
        //   birthday: dayjs(newDateOfBirth).format("YYYY-MM-DD"),
        // }),
      },
      { method: "post" }
    );
  };

  // const loadMoreData = () => {
  //   const newSearchParams = {
  //     offset: allLikeByUserList.length,
  //   };
  //   fetcher.submit(
  //     omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
  //     {
  //       method: "get",
  //       preventScrollReset: true,
  //       action: "/resources/peopleWhoLiked",
  //     }
  //   );
  // };

  // const loadMoreData = useCallback(() => {
  //   console.log("loadmore Data");

  //   const newSearchParams = {
  //     ...searchParams,
  //     offset: allLikeByUserList.length,
  //   };
  //   const queryString = new URLSearchParams(
  //     omitBy(newSearchParams, isNil)
  //   ).toString();

  //   fetcher.load(`.?${queryString}`);
  // }, [allLikeByUserList, searchParams]);

  const loadMoreData = () => {
    console.log("loadmore Data");

    const newSearchParams = {
      ...searchParams,
      offset: allLikeByUserList.length,
    };
    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();

    fetcher.load(`.?${queryString}`);
  };

  useEffect(() => {
    if (fetcher.data && fetcher.data.success && fetcher.state === "idle") {
      setKycModal(false);
    }
  }, [fetcher]);

  useEffect(() => {
    if (likeCurrenUser?.isLiked) {
      setLikeStatus(true);
    } else {
      setLikeStatus(false);
    }
  }, [likeCurrenUser]);

  useEffect(() => {
    setAllLikeByUserList(
      allLikeByUser.items && allLikeByUser.items.length
        ? allLikeByUser.items
        : []
    );
  }, [allLikeByUser.items]);

  useEffect(() => {
    setAllLikeByUserList([...allLikeByUser.items]);
  }, [allLikeByUser.items]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.allLikeByUser) {
      setAllLikeByUserList((items: any[]) => [
        ...items,
        ...fetcher.data.allLikeByUser.items,
      ]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    setAmountLikeByUserNumber(amountLikeByUser);
  }, [amountLikeByUser]);
  console.log("fecther", fetcher.state);

  return (
    <>
      <UserHero
        data={userInfo}
        frameAsset={frameAsset}
        fetcher={fetcher}
        isOwner={isOwner}
        onLikeAmountClicked={() => setLikeAmountModal(true)}
        amountLikeByUser={amountLikeByUserNumber}
      />
      <div
        style={{
          paddingInline: "3.5%",
          paddingBlock: 50,
          maxWidth: 1440,
          marginInline: "auto",
        }}
      >
        <UserTitle
          data={userInfo}
          isOwner={isOwner}
          onKycClicked={() => setKycModal(true)}
          likeStatus={likeStatus}
          onSubmitLike={onSubmitLike}
        />
        <AffixMenu>
          <TiltMenus menus={menus} preventScrollReset />
        </AffixMenu>
        <Outlet />
      </div>
      <Modal
        {...modalProps}
        onCancel={() => setKycModal(false)}
        open={kycModal}
      >
        <KycForm
          fetcher={fetcher}
          form={form}
          loading={navigation.state !== "idle"}
        />
      </Modal>
      <Modal
        {...modalProps}
        onCancel={() => setLikeAmountModal(false)}
        open={likeAmountModal}
      >
        <div
          id="scrollableDiv1"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          <Typography.Title level={4}>
            {t("people who liked you")}
          </Typography.Title>
          {allLikeByUserList.length ? (
            <List
              style={{ marginTop: 10 }} // Adjust margin top as needed
              bordered={false}
              dataSource={allLikeByUserList}
              renderItem={(item: any) => (
                <div>
                  <Space>
                    <div
                      style={{
                        position: "relative", // Set position to relative for the parent div
                        padding: "40px",
                        backgroundImage: `url(${cdnUrl}/${item.assetFrame})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "fit-content", // Adjust the width to fit content
                        height: "fit-content", // Adjust the height to fit content
                        display: "inline-block", // Make the div behave as an inline-block
                      }}
                    >
                      {/* Position the Avatar inside the parent div */}
                      <div
                        style={{
                          position: "absolute",
                          top: "18.5%",
                          left: "17.5%",
                        }}
                      >
                        <Avatar
                          src={
                            item && item.displayImage && cdnUrl
                              ? `${cdnUrl}/${item.displayImage}`
                              : "/image/user-placeholder.png"
                          }
                          size={50}
                        />
                      </div>
                    </div>

                    <Typography.Title
                      level={5}
                      onClick={() => {
                        setLikeAmountModal(false);
                        navigate(
                          `/users/${item?.userName ? item.userName : item.uuid}`
                        );
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {item.displayName}
                    </Typography.Title>
                  </Space>
                </div>
              )}
            />
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={t("no user")}
            />
          )}
          {fetcher.state === "loading" && (
            <Skeleton
              avatar
              paragraph={{
                rows: 0,
              }}
            />
          )}
          {allLikeByUserList &&
            allLikeByUserList.length < amountLikeByUserNumber && (
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <Button onClick={loadMoreData}>Load More</Button>
              </div>
            )}
        </div>
      </Modal>
    </>
  );
}
