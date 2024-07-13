import {
  useCallback,
  type ReactNode,
  useEffect,
  useState,
  useContext,
  useMemo,
} from "react";
import { debounce } from "lodash";
import { Avatar, Dropdown, Flex, Space, Tooltip, Typography } from "antd";
import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { ReactionsBox, TiltButton } from "~/components/common";
import { resetFetcher } from "~/utils/helper";
import { AppContext, AuthContext } from "~/contexts";
import { useMatches } from "@remix-run/react";

const { Text } = Typography;

interface WebboardReactionProps {
  postId: string | number;
  postType?: "webboard" | "comment";
  data: any[];
  children?: ReactNode;
  fetcher?: any;
  reactionOptions?: any[];
  userReaction?: any[];
}

export function WebboardReaction(props: WebboardReactionProps) {
  const {
    data,
    children,
    fetcher,
    postId,
    postType,
    reactionOptions,
    userReaction,
  } = props;
  const [currentReactions, setCurrentReactions] = useState<any[]>(
    data
      ? data.sort((a: any, b: any) => {
          if (a.count > b.count) return -1;
          if (a.count < b.count) return 1;
          return 0;
        })
      : []
  );
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user, openLoginModal } = useContext(AuthContext);
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const disabled = !user;

  const hasMatchingReaction = useCallback(
    (reactionId: number) => {
      return userReaction?.some(
        (reactionObj: any) => reactionObj.reactionId === reactionId
      );
    },
    [userReaction]
  );

  const selectReaction = useCallback(
    (reactionId: string | number) => {
      fetcher.submit(
        { id: postId, reactionId: reactionId, type: postType },
        {
          method: "post",
          action: `/resources/reaction-post`,
        }
      );
      setDropOpen(false);
    },
    [postId, postType]
  );

  const handleDebounceSelectReaction = useMemo(
    () => debounce(selectReaction, 500),
    [selectReaction]
  );

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      fetcher.data.success &&
      fetcher.data.success === `reaction-${postType ? postType : "webboard"}` &&
      fetcher.data.postType &&
      fetcher.data.postType === postType &&
      fetcher.data.postId &&
      `${fetcher.data.postId}` === `${postId}` &&
      fetcher.data.reactions
    ) {
      setCurrentReactions([
        ...fetcher.data.reactions.sort((a: any, b: any) => {
          if (a.count > b.count) return -1;
          if (a.count < b.count) return 1;
          return 0;
        }),
      ]);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType, postId]);

  const filteredReactions = currentReactions.filter((cr: any) => cr.count > 0);

  return (
    <Flex gap={20} justify="space-between" align="center" wrap="wrap">
      <Space size={5} wrap>
        {filteredReactions &&
          filteredReactions.length > 0 &&
          filteredReactions.map((reaction: any) => (
            <Tooltip
              key={reaction.id}
              title={reaction.reaction.name}
              placement="top"
            >
              <div>
                {reaction.count !== 0 && (
                  <TiltButton
                    style={{
                      padding: "5px 10px",
                    }}
                    onClick={
                      !disabled
                        ? () =>
                            handleDebounceSelectReaction(reaction.reaction.id)
                        : () => openLoginModal()
                    }
                    color={
                      hasMatchingReaction(reaction.reactionId)
                        ? "secondary-brand"
                        : `${scheme}-base`
                    }
                  >
                    <Space
                      size={8}
                      style={{
                        fontSize: "1.1em",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        shape="square"
                        src={`${cdnUrl}/${reaction.reaction.image}`}
                        size={20}
                      />
                      <Text
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        {reaction.count && reaction.count.toLocaleString()}
                      </Text>
                    </Space>
                  </TiltButton>
                )}
              </div>
            </Tooltip>
          ))}
        {reactionOptions && reactionOptions.length > 0 && (
          <Dropdown
            arrow
            open={dropOpen}
            onOpenChange={!disabled ? setDropOpen : () => openLoginModal()}
            dropdownRender={(menus: ReactNode) => {
              return (
                <ReactionsBox
                  data={reactionOptions}
                  onReactionSelect={
                    !disabled ? handleDebounceSelectReaction : openLoginModal
                  }
                />
              );
            }}
            trigger={["click"]}
            placement="top"
          >
            <div>
              <TiltButton
                color={`${scheme}-base`}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                <Space size={2} style={{ fontSize: "1.1em" }}>
                  <SmileOutlined />
                  <PlusOutlined style={{ fontSize: "0.8em", strokeWidth: 2 }} />
                </Space>
              </TiltButton>
            </div>
          </Dropdown>
        )}
      </Space>
      {children && children}
    </Flex>
  );
}
