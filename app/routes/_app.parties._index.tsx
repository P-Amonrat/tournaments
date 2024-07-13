import {
  type V2_MetaFunction,
  useNavigate,
  useRouteLoaderData,
} from "@remix-run/react";
import { toLower } from "lodash";
import { useEffect } from "react";
import { Loading, OverlayBg } from "~/components/common";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/party.jpg`,
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:description",
      content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
    },
  ];
};

export default function PartiesIndex() {
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const { games } = routeLoader;
  const navigate = useNavigate();

  useEffect(() => {
    const valorantGame =
      games && games.length > 0
        ? games.find((game: any) => toLower(game.name) === "valorant")
        : null;
    const gameId = valorantGame ? valorantGame.id : 1;
    navigate(`/parties/${gameId}`);
  }, [games, navigate]);

  return (
    <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
      <Loading />
    </OverlayBg>
  );
}
