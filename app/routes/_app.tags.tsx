import { json, type LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  let rooms: any[] = [];
  let games: any[] = [];
  let tags: any[] = [];
  let reactionOptions: any[] = [];
  try {
    const roomRes = await APIServer.clientFromSession().request(
      APIServer.getWebboardRooms()
    );
    const gameRes = await APIServer.clientFromSession().request(
      APIServer.getGames()
    );
    const tagRes = await APIServer.clientFromSession().request(
      APIServer.getWebboardTags({ popular: true })
    );
    const reactionRes = await APIServer.clientFromSession().request(
      APIServer.getReactions()
    );
    if (roomRes.data) {
      rooms = roomRes.data;
    }
    if (gameRes.data) {
      games = gameRes.data;
    }
    if (tagRes.data) {
      tags = tagRes.data;
    }
    if (reactionRes.data) {
      reactionOptions = reactionRes.data;
    }
  } catch (e) {
    console.log("tag single error", e);
  }
  return json({ rooms, games, reactionOptions, tags });
};

export default function TagsLayout() {
  return <Outlet />;
}
