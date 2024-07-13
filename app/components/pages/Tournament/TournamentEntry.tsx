import { useTranslation } from "react-i18next";
import { Card, Skeleton, Space, Typography } from "antd";
import { TournamentDate, TournamentEntryHeader, TournamentEntryLabel } from ".";
import { Author, TiltButton } from "~/components/common";
import { useMatches, useNavigate } from "@remix-run/react";
import { useContext } from "react";
import { AppContext, AuthContext } from "~/contexts";
import { renderData } from "~/utils/helper";

const { Title } = Typography;

interface TournamentEntryProps {
  data: any;
  loading?: boolean;
}

export function TournamentEntry(props: TournamentEntryProps) {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { locale } = useContext(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { data, loading } = props;
  const navigate = useNavigate();
  const itemHeadStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.thumbnailImageUrl
        ? `url("${cdnUrl}/${data.thumbnailImageUrl}")`
        : `url("/image/placeholder.png")`, // change this to tournamet image,
  } as any;

  const handleClick = () => {
    navigate(`/tournaments/${data.id}`);
  };

  if (loading) {
    return (
      <Card bordered={false} style={{ borderRadius: 10 }}>
        <Skeleton active />
      </Card>
    );
  }

  return (
    <Space
      onClick={handleClick}
      direction="vertical"
      size={0}
      style={{ display: "flex", height: "100%", cursor: "pointer" }}
    >
      <Card
        bordered={false}
        style={{ borderRadius: 10, zIndex: 1 }}
        headStyle={itemHeadStyle}
        bodyStyle={{ padding: 15 }}
        title={
          <TournamentEntryHeader
            game={data.game}
            participants={data.maxTeam}
            reward={data.totalPrize}
          />
        }
      >
        <Space direction="vertical" size={3} style={{ display: "flex" }}>
          <Title
            level={5}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {renderData(data, "name", locale)}
          </Title>
          <TournamentDate
            startDate={data.startDate}
            endDate={data.endDate}
            size={13}
          />
          <Author
            avatarSize={20}
            fontSize={13}
            displayImage={
              data?.organizer?.displayImage
                ? `${cdnUrl}/${data?.organizer?.displayImage}`
                : undefined
            }
          >
            {data?.organizer?.displayName
              ? data?.organizer?.displayName
              : user.displayName}
          </Author>
          {data.status === "opening" ? (
            <TiltButton color="primary" style={{ marginTop: 15 }}>
              {t("attend")}
            </TiltButton>
          ) : data.status === "joined" ? (
            <TiltButton color="secondary" style={{ marginTop: 15 }}>
              {t("attended")}
            </TiltButton>
          ) : (
            <div style={{ height: 40, marginTop: 15 }} />
          )}
        </Space>
      </Card>
      <div style={{ paddingInline: 15 }}>
        <TournamentEntryLabel
          status={data.status}
          startDate={data.registrationStartDate}
          endDate={data.registrationEndDate}
        />
      </div>
    </Space>
  );
}
