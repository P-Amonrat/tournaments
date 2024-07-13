import { useMatches } from "@remix-run/react";
import { Avatar } from "antd";

interface TournamentGameProps {
  game: any;
  size?: number;
}

export function TournamentGame(props: TournamentGameProps) {
  const { game, size } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  return (
    <Avatar
      size={size ? size : 45}
      src={game.iconUrl ? `${cdnUrl}/${game.iconUrl}` : ""}
    >
      {game.name}
    </Avatar>
  );
}
