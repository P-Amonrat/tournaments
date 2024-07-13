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
  useSubmit,
} from "@remix-run/react";
import { Element, scroller } from "react-scroll";
import { Card, notification, Skeleton } from "antd";
import { isEmpty, isNil, omitBy, toNumber } from "lodash";
import { dummyComments, dummyWebboard, Pagination } from "~/components/common";
import {
  WebboardSingleCommentBox,
  WebboardSingleComments,
  WebboardSinglePost,
} from "~/components/pages/Webboard";
import * as APIServer from "~/api";
import { AppContext, AuthContext } from "~/contexts";
import { resetFetcher } from "~/utils/helper";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params;
  let webboard: any = null;
  let comments: any = null;
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let reactionOptions: any[] = [];
  let tournament: any;

  if (id) {
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getTournament(toNumber(id))
      );

      if (tournamentRes.data) {
        tournament = tournamentRes.data;
      }

      const webboardRes = await APIServer.clientFromSession().request(
        APIServer.getTournamentWebboard(tournament.post.id)
      );
      if (webboardRes && webboardRes.data) {
        webboard = webboardRes.data;
        const reactionRes = await APIServer.clientFromSession().request(
          APIServer.getReactions()
        );
        const commentRes = await APIServer.clientFromSession().request(
          APIServer.getCommentsFromWebboardId(tournament.post.id, searchParams)
        );
        if (commentRes && commentRes.data) {
          comments = commentRes.data;
        }
        if (reactionRes.data) {
          reactionOptions = reactionRes.data;
        }
      }
    } catch (e) {
      webboard = dummyWebboard; // FIXME: remove this out
      comments = dummyComments; // FIXME: remove this out
    }
  }

  return json({ id, comments, reactionOptions, searchParams, webboard });
};

export default function TournamentSingleWebboard() {
  const { id, comments, reactionOptions, searchParams, webboard } =
    useLoaderData();
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);
  const navigation = useNavigation();
  const submit = useSubmit();
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const [api, contextHolder] = notification.useNotification();
  const [quotedComment, setQuotedComment] = useState<any>(null);

  const handleReplyComment = (comment: any) => {
    setQuotedComment(comment);
    scroller.scrollTo("comment-box", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -80,
    });
  };

  const handleChangePage = useCallback(
    (page: number) => {
      const newSearchParams = { ...searchParams } as any;
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get" }
      );
    },
    [searchParams, submit]
  );

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      revalidator.state === "idle"
    ) {
      if (fetcher.data.success && fetcher.data.success === "create-comment") {
        revalidator.revalidate();
        resetFetcher(fetcher);
        setQuotedComment(null);
        api.open({
          message: t("successfully commented"),
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
        setTimeout(() => {
          navigate(location.pathname, { preventScrollReset: true });
        }, 1200);
      }
    }
  }, [location]);

  return (
    <div>
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
            <WebboardSingleCommentBox
              disabled={revalidator.state !== "idle"}
              fetcher={fetcher}
              postId={webboard.id}
              refComment={quotedComment}
            />
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
      {contextHolder}
    </div>
  );
}
