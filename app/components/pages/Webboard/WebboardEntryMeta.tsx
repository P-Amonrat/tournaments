import { useMatches, useNavigate } from "@remix-run/react";
import { Avatar, Space, theme, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { TiltButton } from "~/components/common";
const { Text } = Typography;
const { useToken } = theme;

interface WebboardEntryMetaProps {
  rooms: any[];
  games: any[];
}

export function WebboardEntryMeta(props: WebboardEntryMetaProps) {
  const { games, rooms } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToGame = (gameId: string | number) => {
    navigate(`/webboards?games=${gameId}`);
  };

  const navigateToRoom = (roomId: string | number) => {
    navigate(`/webboards?rooms=${roomId}`);
  };

  return (
    <Space wrap size={[6, 4]} style={{ lineHeight: 1 }}>
      {games.map(
        (game: any) =>
          game.game?.id && (
            <Avatar
              key={`game-${game.game.id}`}
              style={{ cursor: "pointer" }}
              src={`${cdnUrl}/${game.game.iconUrl}`}
              size={36}
              onClick={() => navigateToGame(game.game.id)}
            />
          )
      )}
      {rooms.map((room: any) =>
        room.room?.id && room.room?.name ? (
          <TiltButton
            key={`room-${room.room.id}`}
            color="transparent"
            onClick={() => navigateToRoom(room.room.id)}
            style={{
              padding: "5px 10px",
              height: "auto",
              borderColor: token.colorBorder,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            <Text>{t(room.room.nameEn)}</Text>
          </TiltButton>
        ) : null
      )}
    </Space>
  );
}
