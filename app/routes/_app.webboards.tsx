import { json, type LoaderFunction } from "@remix-run/node";
import { Outlet, useNavigation } from "@remix-run/react";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  let rooms: any[] = [];
  let games: any[] = [];
  let tags: any[] = [];
  let allTags: any[] = [];
  let reactionOptions: any[] = [];

  try {
    const webboardsInfoRes = await APIServer.clientFromSession().request(
      APIServer.getWebboardsInfo()
    );
    if (webboardsInfoRes.data) {
      games = webboardsInfoRes.data.games;
      rooms = webboardsInfoRes.data.rooms;
      reactionOptions = webboardsInfoRes.data.reactions;
      tags = webboardsInfoRes.data.popularTags;
      allTags = webboardsInfoRes.data.tags;
    }
  } catch (e) {
    console.log("webboard index error", e);
  }

  return json({ rooms, games, reactionOptions, tags, allTags });
};

export default function WebboardLayout() {
  return <Outlet />;
}
