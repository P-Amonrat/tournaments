import { useMatches } from "@remix-run/react";
import { Flex, Skeleton } from "antd";
import { GameCard, OverlayBg } from "~/components/common";

interface PartyHeroProps {
  game: any;
  loading?: boolean;
  onGameClick: () => void;
}

export function PartyHero(props: PartyHeroProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { game, loading, onGameClick } = props;

  return (
    <Flex
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          game && game.bannerImageUrl && game.bannerImageUrl !== "-"
            ? `url("${cdnUrl}/${game.bannerImageUrl}")`
            : `url("/image/placeholder.png")`,
      }}
    >
      <OverlayBg />
      <Flex
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1440,
          paddingInline: "3.5%",
          marginInline: "auto",
        }}
      >
        {loading ? (
          <Skeleton active />
        ) : (
          <Flex
            style={{
              position: "relative",
              width: "100%",
              paddingBlock: 20,
            }}
          >
            <GameCard
              avatarStyle={{
                position: "absolute",
                width: 240,
                left: 0,
                bottom: -40,
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: 20,
                zIndex: 1,
                boxShadow: "0px 0px 24px 0px rgba(71, 0, 252, 0.50)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  game && game.mainImageUrl && game.mainImageUrl !== "-"
                    ? `url("${cdnUrl}/${game.mainImageUrl}")`
                    : `url("/image/placeholder.png")`,
              }}
              onClick={onGameClick}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
