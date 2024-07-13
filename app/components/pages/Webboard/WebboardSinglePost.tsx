import dayjs from "dayjs";
import { useContext } from "react";
import { Card, Divider, Flex, theme, Typography } from "antd";
import { Link } from "react-scroll";
import { AppContext, AuthContext } from "~/contexts";
import { WebboardEntryAuthor } from "./WebboardEntryAuthor";
import { WebboardEntryControl } from "./WebboardEntryControl";
import { WebboardEntryTags } from "./WebboardEntryTags";
import { WebboardEntryMeta } from "./WebboardEntryMeta";
import { useTranslation } from "react-i18next";
import { WebboardReaction } from "./WebboardReaction";
import { Poll, TiltButton } from "~/components/common";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { useMatches, useNavigate } from "@remix-run/react";

const { useToken } = theme;

const { Text, Title } = Typography;

interface WebboardSinglePostProps {
  data: any;
  fetcher: any;
  reactionOptions?: any[];
}

export function WebboardSinglePost(props: WebboardSinglePostProps) {
  const { data, fetcher, reactionOptions } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const { t } = useTranslation();
  const { scheme, baseUrl } = useContext(AppContext);
  const { user, openLoginModal } = useContext(AuthContext);
  const postUrl = `${baseUrl}/webboards/${data.id}`;
  const isOwner = user && data && data.author && data.authorId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const navigate = useNavigate();

  const navigateToTournament = () => {
    navigate(`/tournaments/${data.tournament_id}`);
  };

  const cardStyle = {
    marginBottom: 20,
    borderRadius: 10,
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  return (
    <Card bordered={false} style={cardStyle}>
      <Flex vertical gap={30}>
        <Flex justify="space-between" align="flex-start" wrap="wrap">
          <WebboardEntryAuthor
            anonymous={data.anonymous}
            // isAdmin={data.author.roles.includes("forum_admin")}
            isAdmin={false}
            createdAt={data.createdAt}
            updatedAt={data.updatedAt}
            displayName={data.author?.displayName}
            displayImage={`${cdnUrl}/${data.author?.displayImage}`}
            assetFrame={`${cdnUrl}/${data.author?.assetFrame}`}
            isVerified={data.author?.isDopaVerified}
            role={data.author?.roles}
            userUuid={
              data.author?.userName ? data.author.userName : data.author?.uuid
            }
          />
          <WebboardEntryControl
            fetcher={fetcher}
            id={data.id}
            ignoreShare
            isOwner={isOwner}
            isForumAdmin={isForumAdmin}
            postType="webboard"
          />
        </Flex>
        <Title level={4} style={{ margin: 0 }}>
          {data.title}
        </Title>
        {data.poll && (
          <Poll data={data.poll} fetcher={fetcher} queryInitialAnswer />
        )}
        <div
          className="ctrlg-html"
          style={{ color: token.colorTextBase }}
          dangerouslySetInnerHTML={{
            __html: `${data.content}`,
          }}
        />
        <Divider style={{ marginBlock: 0 }} />
        {data.author?.signature && !data.anonymous && (
          <div
            className="ctrlg-html"
            style={{ color: token.colorTextBase }}
            dangerouslySetInnerHTML={{
              __html: `${data.author.signature}`,
            }}
          />
        )}
        {data.postTags && data.postTags.length > 0 && (
          <WebboardEntryTags data={data.postTags} />
        )}
        <Flex gap={20} justify="space-between" align="center" wrap="wrap">
          <WebboardEntryMeta rooms={data.postRooms} games={data.postGames} />
          {data.updatedAt &&
            data.createdAt &&
            data.updatedAt !== data.createdAt && (
              <Text style={{ opacity: 0.6 }}>{`${t("edited at")} ${dayjs(
                data.updatedAt
              ).format("DD/MM/YYYY - HH:mm")}`}</Text>
            )}
        </Flex>
        <WebboardReaction
          data={data.postReactionCounts}
          postId={data.id}
          postType="webboard"
          fetcher={fetcher}
          reactionOptions={reactionOptions}
          userReaction={data.userPostReactions}
        />
        <Divider style={{ marginBlock: 0 }} />
        <Flex justify="space-between" align="center" gap={20} wrap="wrap">
          <Flex align="center" gap={15} justify="space-between">
            <Link
              to="comment-box"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => (user ? null : openLoginModal())}
            >
              <TiltButton color="primary">{t("comment")}</TiltButton>
            </Link>
            <Text>{`${data.commentCounts} ${t("comments")}`}</Text>
          </Flex>
          <Flex align="center" gap={15} justify="space-between">
            {data.tournament_id && (
              <TiltButton
                color="secondary-brand"
                onClick={navigateToTournament}
              >
                {t("back to tournament")}
              </TiltButton>
            )}
            <ShareDropDown postUrl={postUrl} dropDownPlacement="topRight" />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
