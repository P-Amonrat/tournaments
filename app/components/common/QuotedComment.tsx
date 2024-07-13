import { useCallback, useContext } from "react";
import { scroller } from "react-scroll";
import { Card, Flex, theme } from "antd";
import { AppContext } from "~/contexts";
import { OverlayBg } from "~/components/common";
import { WebboardEntryAuthor } from "../pages/Webboard";
import { useSearchParams, useMatches, useNavigate } from "@remix-run/react";

const { useToken } = theme;

interface QuotedCommentProps {
  data: any;
}

export function QuotedComment(props: QuotedCommentProps) {
  const { data } = props;
  const { token } = useToken();
  const { scheme } = useContext(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClickQuotedComment = useCallback(() => {
    let currentPage: any = searchParams.get("page");
    currentPage = currentPage ? parseInt(currentPage) : 1;
    const quotedPage = data.page;

    // this is to prevent the comment that got deleted (unpublished) and no page number to be quoted
    if (quotedPage === undefined || quotedPage === null) {
      return;
    }

    if (currentPage == quotedPage) {
      scroller.scrollTo(`comment-${data.id}`, {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate(`?page=${quotedPage}#comment-${data.id}`);
    }
  }, [data, searchParams]);

  console.log("data quote", data);

  return (
    <Card
      style={{
        position: "relative",
        maxHeight: 400,
        overflow: "hidden",
        backgroundColor: token.colorBgLayout,
      }}
      bordered={false}
      bodyStyle={{ padding: 20 }}
    >
      <Flex justify="space-between" align="flex-start" wrap="wrap">
        <WebboardEntryAuthor
          anonymous={data.anonymous}
          // isAdmin={comment.createdBy.roles.includes("admin")}
          isAdmin={false}
          createdAt={data.createdAt}
          updatedAt={data.updatedAt}
          displayName={data.author && data.author?.displayName}
          displayImage={data.author && `${cdnUrl}/${data.author?.displayImage}`}
          assetFrame={`${cdnUrl}/${data.author?.assetFrame}`}
          userUuid={
            data.author && data.author?.userName
              ? data.author.userName
              : data.author?.uuid
          }
          isVerified={data.author?.isDopaVerified}
          role={data.author?.roles}
        />
      </Flex>
      <div
        className="ctrlg-html"
        style={{
          color: token.colorTextBase,
          opacity: 0.85,
          marginTop: 20,
        }}
        dangerouslySetInnerHTML={{
          __html: `${data.content}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          height: 200,
          width: "100%",
          background:
            scheme === "dark"
              ? "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
              : "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
        }}
      />
      <OverlayBg
        style={{ backgroundColor: "transparent" }}
        onClick={handleClickQuotedComment}
      />
    </Card>
  );
}
