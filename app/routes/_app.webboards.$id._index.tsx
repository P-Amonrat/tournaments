import { json, type LoaderFunction } from "@remix-run/node";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Element, scroller } from "react-scroll";
import { Affix, Card, Col, notification, Row, Skeleton } from "antd";
import { isEmpty, isNil, omitBy } from "lodash";
import {
  BackButton,
  IndexFilter,
  KycWizard,
  Media,
  Pagination,
} from "~/components/common";
import {
  WebboardSingleCommentBox,
  WebboardSingleComments,
  WebboardSinglePost,
  WebboardTags,
} from "~/components/pages/Webboard";
import * as APIServer from "~/api";
import { AppContext, AuthContext } from "~/contexts";
import { resetFetcher } from "~/utils/helper";
import { commitSession, getSessionFromRequest } from "~/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionFromRequest(request);
  const { id } = params;
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  const backToIndex = session.get("backToIndex");
  const me = session.get("me");
  let comments: any = null;
  let commentRes: any;

  if (id) {
    try {
      if (me) {
        commentRes = await APIServer.clientFromSession(session).request(
          APIServer.getCommentsFromWebboardId(id, searchParams)
        );
      } else {
        commentRes = await APIServer.clientFromSession().request(
          APIServer.getCommentsFromWebboardId(id, searchParams)
        );
      }

      if (commentRes && commentRes.data) {
        comments = commentRes.data;
      }
    } catch (e) {
      console.log("webboard single comment error", e);
    }
  }

  await commitSession(session);
  return json({ id, backToIndex, comments, searchParams });
};

export default function WebboardSingle() {
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const routeLoader = useRouteLoaderData("routes/_app.webboards.$id");
  const { id, backToIndex, comments, searchParams } = useLoaderData();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const submit = useSubmit();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);
  const revalidator = useRevalidator();
  const { webboard } = routeLoader;
  const { games, rooms, reactionOptions, tags } = webboardRouteLoader;
  const [api, contextHolder] = notification.useNotification();
  const [quotedComment, setQuotedComment] = useState<any>(null);
  const isBuySell =
    webboard &&
    webboard.postRooms.find((r: any) => r.room.nameEn === "buy sell");

  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room: any) => ({
        label: t(room.nameEn),
        value: room.id,
      })),
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options: games.map((game: any) => ({
        label: game.name,
        value: game.id,
        image: game.iconUrl,
      })),
    },
  ];

  const navigateToIndex = (name: string, value: string | number) => {
    navigate(`/webboards?${name}=${value}`);
  };

  const handleChangePage = useCallback(
    (page: number) => {
      const newSearchParams = { ...searchParams } as any;
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }

      const searchParamsString = new URLSearchParams(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v))
      ).toString();

      const pathWithoutHash = `${location.pathname}?${searchParamsString}`;

      // submit(
      //   omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
      //   { method: "get", preventScrollReset: true }
      // );

      navigate(pathWithoutHash, { preventScrollReset: true });
    },
    [searchParams, submit]
  );

  const handleReplyComment = (comment: any) => {
    setQuotedComment(comment);
    scroller.scrollTo("comment-box", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -80,
    });
  };

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      revalidator.state === "idle"
    ) {
      if (
        fetcher.data.success &&
        fetcher.data.success === "create-comment" &&
        `${fetcher.data.webboardId}` === `${id}`
      ) {
        revalidator.revalidate();
        resetFetcher(fetcher);
        setQuotedComment(null);
        api.open({
          message: t("Successfully commented"),
          type: "success",
          duration: 5,
          placement: "bottomRight",
        });
      }
    }
  }, [fetcher, id, revalidator]);

  useEffect(() => {
    if (location.hash && location.hash.length > 0) {
      let commentId: string = "";
      commentId = location.hash.replace("#comment-", "comment-");
      if (commentId.length > 0) {
        scroller.scrollTo(commentId, {
          duration: 1000,
          delay: 100,
          smooth: true,
          offset: -80,
        });
        // setTimeout(() => {
        //   navigate(location.pathname, { preventScrollReset: true });
        // }, 3000);
      }
    }
  }, [location]);

  return (
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto",
      }}
    >
      <Row gutter={[30, 10]}>
        <Col span={24} md={{ span: 6, order: 0 }}>
          <Affix offsetTop={80}>
            <div
              className="hide-scrollbar"
              style={{
                maxHeight: "calc(100vh - 60px)",
                overflowY: "auto",
              }}
            >
              <IndexFilter
                // alwaysActive
                onFilterClicked={navigateToIndex}
                filters={filters}
                mobileAppendChildren={
                  <WebboardTags data={tags} fetcher={fetcher} mobileStyle />
                }
              />
            </div>
          </Affix>
        </Col>
        <Col span={24} md={{ span: 6, order: 2 }}>
          <Media greaterThan="sm">
            <Affix offsetTop={80}>
              <div>
                <WebboardTags data={tags} fetcher={fetcher} />
              </div>
            </Affix>
          </Media>
        </Col>
        <Col span={24} md={{ span: 12, order: 1 }}>
          <BackButton
            // navigateTo={backToIndex ? -2 : null}
            navigateTo={backToIndex ? -2 : "/webboards"}
            fallbackUrl="/webboards"
          />
          <WebboardSinglePost
            data={webboard}
            fetcher={fetcher}
            reactionOptions={reactionOptions}
          />
          {navigation.state === "loading" &&
          navigation.location.pathname === location.pathname ? (
            <Card>
              <Skeleton active />
            </Card>
          ) : comments.items.length > 0 ? (
            <WebboardSingleComments
              data={comments.items}
              fetcher={fetcher}
              reactionOptions={reactionOptions}
              onReplyComment={handleReplyComment}
            />
          ) : (
            <></>
          )}
          {user && (
            <Element name="comment-box">
              <Card
                bordered={false}
                style={{
                  marginBottom: 20,
                  borderRadius: 10,
                  boxShadow:
                    scheme === "dark"
                      ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
                      : "0px 4px 15px -5px rgba(0,0,0,0.75)",
                }}
              >
                {!user.kycLevel && isBuySell ? (
                  <KycWizard />
                ) : (
                  <WebboardSingleCommentBox
                    disabled={revalidator.state !== "idle"}
                    fetcher={fetcher}
                    postId={id}
                    refComment={quotedComment}
                  />
                )}
              </Card>
            </Element>
          )}
          {comments.totalPages > 1 && (
            <Pagination
              currentPage={comments.page}
              totalPages={comments.totalPages}
              onPageClicked={handleChangePage}
            />
          )}
        </Col>
      </Row>
      {contextHolder}
    </div>
  );
}
