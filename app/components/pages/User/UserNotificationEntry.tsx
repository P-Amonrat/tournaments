import { useCallback, useContext, useEffect, useState } from "react";
import { useMatches, useNavigate, useFetcher } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { Avatar, Card, Col, Flex, Skeleton, Row, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";

const { Text } = Typography;

interface UserNotificationEntryProps {
  data: any;
}

export const UserNotificationEntry: React.FC<UserNotificationEntryProps> = (
  props: UserNotificationEntryProps
) => {
  const { data } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [diff, setDiff] = useState<any>(null);
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);
  const navigate = useNavigate();
  const fetcher = useFetcher();

  let cardStyle = {
    cursor: "pointer",
    borderRadius: 10,
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  const getProperTimeDifference = (date: any) => {
    if (!date) return null;

    const diffMonths = dayjs().diff(dayjs(date), "month");
    if (diffMonths >= 12) {
      return { unit: "year", value: dayjs().diff(dayjs(date), "year") };
    } else if (diffMonths >= 1) {
      return { unit: "month", value: diffMonths };
    } else {
      const diffDays = dayjs().diff(dayjs(date), "day");
      if (diffDays >= 1) {
        return { unit: "day", value: diffDays };
      } else {
        const diffHours = dayjs().diff(dayjs(date), "hour");
        if (diffHours >= 1) {
          return { unit: "hour", value: diffHours };
        } else {
          const diffMinutes = dayjs().diff(dayjs(date), "minute");
          if (diffMinutes >= 1) {
            return { unit: "minute", value: diffMinutes };
          } else {
            const diffSeconds = dayjs().diff(dayjs(date), "second");
            return { unit: "second", value: diffSeconds };
          }
        }
      }
    }
  };

  const navigateToEntry = useCallback(async () => {
    if (data.relateType === "party") {
      navigate("/parties");
    }

    if (
      data.relateType === "webboard" &&
      data.metadata.postId &&
      data.metadata.commentId
    ) {
      try {
        fetcher.load(
          `/resources/comment-position?postId=${data.metadata.postId}&commentId=${data.metadata.commentId}`
        );
      } catch (error) {
        console.error("get comment position error", error);
        navigate(`/webboards/${data.metadata.postId}`);
      }
    }

    if (
      data.relateType === "tournament" &&
      data.metadata.tournament &&
      data.metadata.tournament.id &&
      data.metadata.tournament.deleteAt
    ) {
      navigate(`/tournaments`);
    } else if (
      data.relateType === "tournament" &&
      data.metadata.tournament &&
      data.metadata.tournament.id
    ) {
      navigate(`/tournaments/${data.metadata.tournament.id}`);
    }
  }, [data]);

  useEffect(() => {
    if (fetcher.data && fetcher.state !== "loading") {
      const page = fetcher.data.page;
      const postId = data.metadata.postId;
      const commentId = data.metadata.commentId;

      if (postId && commentId) {
        navigate(`/webboards/${postId}?page=${page}#comment-${commentId}`);
      }
    }
  }, [fetcher.data, fetcher.state, data, navigate]);

  useEffect(() => {
    if (data.createdAt) {
      setDiff(getProperTimeDifference(data.createdAt));
    }
  }, [data]);

  const getNotificationMessage = (
    context: string,
    metadata: any,
    fromUserDisplayName: any
  ) => {
    if (context === "commentPost") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has commented on your post"
      )}`;
    }

    if (context === "teamTournamentRemove") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:that has been approved to join"
      )} ${metadata.tournament.name || ""} ${t(
        "notification:tournament has been removed because"
      )} ${metadata.team.remark || ""}`;
    }

    if (context === "commentReply") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has replied to your comment"
      )}`;
    }

    if (context === "partyRequest") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has sent a request to join your party"
      )}`;
    }

    if (context === "partyReady") {
      return `${t(
        `notification:Your Party is ready! start gaming by adding friend's username`
      )}`;
    }

    if (context === "partyAccept") {
      return `${t("notification:Your request to join")}  ${
        metadata.partyName || ""
      } ${t("notification:party has been accepted")}`;
    }

    if (context === "partyReject") {
      return `${t("notification:Your request to join")}  ${
        metadata.partyName || ""
      } ${t("notification:party has been rejected")}`;
    }

    if (context === "teamTournamentApproval") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:has been approved to join"
      )} ${metadata.tournament.name || ""} ${t("notification:tournament")}`;
    }

    if (context === "teamTournamentRejection") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:request to join"
      )} ${metadata.tournament.name || ""} ${t(
        "notification:tournament has been rejected because"
      )} ${metadata.team.remark || ""}`;
    }

    if (context === "orgTournamentApproval") {
      return `${t("notification:Your tournament")}  ${metadata.name || ""} ${t(
        "notification:has been approved"
      )}`;
    }

    if (context === "orgTournamentRejection") {
      return `${t("notification:Your tournament")}  ${metadata.name || ""} ${t(
        "notification:has been rejected because"
      )} ${metadata.team.remark || ""}`;
    }

    return "no data";
  };

  return (
    <Card
      key={data.id}
      style={cardStyle}
      bodyStyle={{ padding: 15 }}
      onClick={navigateToEntry}
    >
      <Row wrap={false} gutter={15} style={{ alignItems: "flex-start" }}>
        <Col flex="none">
          <Avatar
            size={50}
            src={
              data.fromUser && data.fromUser.displayImage
                ? `${cdnUrl}/${data.fromUser.displayImage}`
                : user.displayImage
                ? `${cdnUrl}/${user.displayImage}`
                : "image/placeholder.png"
            }
          />
        </Col>
        <Col flex="auto">
          <Flex vertical gap={5}>
            <Flex justify="space-between" align="flex-start">
              <Text>
                {getNotificationMessage(
                  data.context,
                  data.metadata,
                  data.fromUser?.displayName
                )}
              </Text>
              <Flex>
                {diff ? (
                  <Text>{`${diff.value} ${t(`${diff.unit}s ago`)}`}</Text>
                ) : (
                  <Skeleton
                    paragraph={{ width: 50, rows: 1, style: { margin: 0 } }}
                    title={false}
                    active
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
};
