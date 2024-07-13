import { Space, Tag } from "antd";
import { TournamentGame, TournamentReward } from ".";
import { useTranslation } from "react-i18next";

interface TournamentEntryHeaderProps {
  game: string;
  participants: number;
  reward: number;
}

export function TournamentEntryHeader(props: TournamentEntryHeaderProps) {
  const { t } = useTranslation();
  const { game, participants, reward } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 15px",
      }}
    >
      <Space
        style={{
          display: "flex",
          flex: "0 0 auto",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Tag color="#000" bordered={false}>
          {`${participants} ${t("teams")}`}
        </Tag>
        <TournamentGame size={36} game={game} />
      </Space>
      <Space
        style={{ display: "flex", flex: "auto", alignItems: "end" }}
        size={0}
      >
        <TournamentReward reward={reward} />
      </Space>
    </div>
  );
}
