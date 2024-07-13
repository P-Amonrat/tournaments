import { useContext } from "react";
import { useMatches, useNavigate } from "@remix-run/react";
import { Card, Col, Divider, Flex, Image, Row, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import {
  WebboardEntryAuthor,
  WebboardEntryControl,
  WebboardEntryMeta,
  WebboardEntryTags,
  WebboardReaction,
} from ".";
import { Poll } from "~/components/common";
import { useTranslation } from "react-i18next";
const { Text } = Typography;

interface WebboardEntryProps {
  data: any;
  fetcher?: any;
  reactionOptions?: any[];
  isMyWebboard?: boolean;
}

export function WebboardEntry(props: WebboardEntryProps) {
  const { data, fetcher, reactionOptions, isMyWebboard } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isOwner = user && data && data.author && data.authorId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");

  const showThumbail =
    data.thumbnailImage && data.thumbnailImage.length && !data.poll;
  const cardStyle = {
    borderRadius: 12,
    // boxShadow:
    //   scheme === "dark" ? "none" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    // border: "none",
  };

  const linkToSingle = (event: any) => {
    event.stopPropagation();
    navigate(`/webboards/${data.id}`);
  };

  console.log("data", data);

  return (
    <Card style={cardStyle}>
      <Flex gap={20} vertical>
        <Flex justify="space-between" align="flex-start" wrap="wrap">
          <WebboardEntryAuthor
            anonymous={data.anonymous}
            isAdmin={data.author?.roles.includes("forum_admin")}
            createdAt={data.createdAt}
            updatedAt={data.updatedAt}
            displayName={data.author?.displayName}
            displayImage={`${cdnUrl}/${data.author?.displayImage}`}
            assetFrame={`${cdnUrl}/${data.author?.assetFrame}`}
            userUuid={
              data.author?.userName ? data.author.userName : data.author?.uuid
            }
            isVerified={data.author?.isDopaVerified}
            role={data.author?.roles}
          />
          {!isMyWebboard && (
            <WebboardEntryControl
              fetcher={fetcher}
              id={data.id}
              isOwner={isOwner}
              isForumAdmin={isForumAdmin}
              postType="webboard"
            />
          )}
        </Flex>
        <Row
          gutter={[20, 20]}
          wrap
          style={{ cursor: "pointer" }}
          onClick={linkToSingle}
        >
          {showThumbail && (
            <Col flex="none" span={24} md={{ span: 8, order: 1 }}>
              <Image
                src={`${cdnUrl}/${data.thumbnailImage}`}
                wrapperStyle={{
                  borderRadius: 8,
                  overflow: "hidden",
                }}
                preview={false}
              />
            </Col>
          )}
          <Col
            flex="auto"
            span={24}
            md={showThumbail ? { span: 16, order: 0 } : 24}
          >
            <Flex vertical gap={20}>
              <Text style={{ fontSize: "1.2em" }}>{data.title}</Text>
              {data.poll && (
                <div onClick={(event) => event.stopPropagation()}>
                  <Poll
                    data={data.poll}
                    fetcher={fetcher}
                    onClick={linkToSingle}
                    fromIndex={true}
                    webboardId={data.id}
                  />
                </div>
              )}
              {data.postTags && data.postTags.length > 0 && (
                <WebboardEntryTags data={data.postTags} />
              )}
              <WebboardEntryMeta
                rooms={data.postRooms}
                games={data.postGames}
              />
            </Flex>
          </Col>
        </Row>
      </Flex>
      {!isMyWebboard && (
        <>
          <Divider style={{ marginBlock: 20 }} />
          <WebboardReaction
            data={data.postReactionCounts}
            postId={data.id}
            postType="webboard"
            fetcher={fetcher}
            reactionOptions={reactionOptions}
            userReaction={data.userPostReactions}
          >
            {(data.commentCounts || data.commentCounts === 0) && (
              <Text style={{ cursor: "pointer" }} onClick={linkToSingle}>{`${
                data.commentCounts
              } ${t("comments")}`}</Text>
            )}
          </WebboardReaction>
        </>
      )}
    </Card>
  );
}
