import { useMatches } from "@remix-run/react";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

interface GameUserSelectProps {
  currentGameId?: number | null;
  games: any[];
  onGameSelect: (gameId: number) => void;
}

export function GameUserSelect(props: GameUserSelectProps) {
  const { currentGameId, games, onGameSelect } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();

  return (
    <div style={{ padding: 10 }}>
      <Title
        level={4}
        style={{ marginTop: 0, marginBottom: 40, textAlign: "center" }}
      >
        {t("select game")}
      </Title>
      <Row gutter={[20, 20]}>
        {games.map((game: any) => (
          <Col
            key={game.id}
            span={8}
            style={{
              textAlign: "center",
              cursor: "pointer",
            }} //FIXME: must check with somethingelse which is note max players
            onClick={() => onGameSelect(game.id)}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "133%",
                marginBottom: 10,
                borderRadius: 20,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  game && game.image && game.image !== "-"
                    ? `url("${cdnUrl}/${game.image}")`
                    : `url("/image/placeholder.png")`,
                transform:
                  currentGameId && currentGameId == game.id
                    ? "scale(1.05)"
                    : undefined,
                zIndex:
                  currentGameId && currentGameId == game.id ? 1 : undefined,
                boxShadow:
                  currentGameId && currentGameId == game.id
                    ? "0px 0px 24px 0px rgba(71, 0, 252, 0.50)"
                    : undefined,
              }}
            />
            <Text>{game.name}</Text>
          </Col>
        ))}
      </Row>
    </div>
  );
}
