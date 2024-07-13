import { useCallback, useContext, useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Divider, Flex, Space, Typography, theme } from "antd";
import { AuthContext } from "~/contexts";
import { WebboardEntryAuthor } from "./WebboardEntryAuthor";
import { WebboardEntryControl } from "./WebboardEntryControl";
import { WebboardReaction } from "./WebboardReaction";
import { QuotedComment, TiltButton } from "~/components/common";
import { WebboardSingleCommentBox } from "./WebboardSingleCommentBox";
import { useMatches } from "@remix-run/react";
import dayjs from "dayjs";

const { useToken } = theme;

interface WebboardSingleCommentProps {
  data: any;
  fetcher: any;
  borderBottom?: any;
  onReply?: (comment: any) => void;
  reactionOptions?: any[];
}

export function WebboardSingleComment(props: WebboardSingleCommentProps) {
  const { data, fetcher, borderBottom, onReply, reactionOptions } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const { token } = useToken();
  const { user, openLoginModal } = useContext(AuthContext);
  const [comment, setComment] = useState<any>(data);
  const [editMode, setEditMode] = useState<boolean>(false);
  const isForumAdmin = user && user.roles.includes("forum_admin");

  const handleReply = useCallback(() => {
    if (user) {
      if (onReply) {
        onReply(comment);
      }
    } else {
      openLoginModal();
    }
  }, [comment, onReply]);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.data.success &&
      (fetcher.data.success === "delete-comment" ||
        fetcher.data.success === "reaction-comment" ||
        fetcher.data.success === "update-comment") &&
      fetcher.data.postId &&
      `${fetcher.data.postId}` === `${data.id}`
    ) {
      if (fetcher.data.success === "delete-comment") {
        setComment({ ...comment, deletedAt: dayjs() });
      } else if (fetcher.data.post) {
        setComment(fetcher.data.post);
      }
      setEditMode(false);
    }
  }, [data, fetcher]);

  return (
    <Element name={`comment-${comment.id}`}>
      {comment.isPublished && (
        <div
          style={{
            padding: 24,
            borderRadius: 0,
            borderBottom: borderBottom ? borderBottom : "none",
          }}
        >
          <Flex vertical gap={30}>
            <Flex justify="space-between" align="flex-start" wrap="wrap">
              <WebboardEntryAuthor
                anonymous={comment.anonymous}
                // isAdmin={comment.createdBy.roles.includes("admin")}
                isAdmin={false}
                createdAt={comment.createdAt}
                deletedAt={comment.deletedAt}
                updatedAt={comment.updatedAt}
                displayName={comment.author && comment.author?.displayName}
                displayImage={
                  comment.author && `${cdnUrl}/${comment.author?.displayImage}`
                }
                assetFrame={`${cdnUrl}/${data.author?.assetFrame}`}
                userUuid={
                  comment.author && comment.author?.userName
                    ? comment.author.userName
                    : comment.author?.uuid
                }
                isVerified={comment.author?.isDopaVerified}
                role={comment.author?.roles}
              />
              <WebboardEntryControl
                fetcher={fetcher}
                id={comment.id}
                ignoreShare
                isOwner={
                  !comment.deletedAt &&
                  user &&
                  comment.author &&
                  comment.author.id === user.id
                }
                isForumAdmin={isForumAdmin}
                postType="comment"
                onEditClicked={() => setEditMode(true)}
              />
            </Flex>
            <Space
              direction="vertical"
              size={30}
              style={{ display: "flex", paddingLeft: 60 }}
            >
              {editMode ? (
                <WebboardSingleCommentBox
                  disabled={fetcher.state !== "idle"}
                  initialData={comment}
                  editMode
                  fetcher={fetcher}
                  onCancel={() => setEditMode(false)}
                  refComment={comment.quotedComment}
                />
              ) : (
                <>
                  {comment.quotedComment && (
                    <QuotedComment data={comment.quotedComment} />
                  )}
                  {!comment.deletedAt ? (
                    <div
                      className="ctrlg-html"
                      style={{ color: token.colorTextBase }}
                      dangerouslySetInnerHTML={{
                        __html: `${comment.content}`,
                      }}
                    />
                  ) : (
                    <Typography.Text
                      style={{ color: "#5B5758", fontStyle: "italic" }}
                    >
                      {t("Deleted comment")}
                    </Typography.Text>
                  )}
                </>
              )}
              {((comment.author &&
                comment.author.signature &&
                !comment.anonymous) ||
                !comment.deletedAt) && <Divider style={{ marginBlock: 0 }} />}
              {comment.author &&
                comment.author.signature &&
                !comment.anonymous && (
                  <div
                    className="ctrlg-html"
                    style={{ color: token.colorTextBase }}
                    dangerouslySetInnerHTML={{
                      __html: `${comment.author.signature}`,
                    }}
                  />
                )}
              {!comment.deletedAt && (
                <WebboardReaction
                  data={comment.commentReactionCounts}
                  postId={comment.id}
                  postType="comment"
                  fetcher={fetcher}
                  reactionOptions={reactionOptions}
                  userReaction={comment.userCommentReactions}
                >
                  {!comment.deletedAt && onReply && (
                    <TiltButton color="primary" onClick={handleReply}>
                      {t("reply")}
                    </TiltButton>
                  )}
                </WebboardReaction>
              )}
            </Space>
          </Flex>
        </div>
      )}
    </Element>
  );
}
