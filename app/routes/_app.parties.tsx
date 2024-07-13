import { json, V2_MetaFunction, type LoaderFunction } from "@remix-run/node";
import { dummyGames, dummyParties } from "~/components/common";
import * as APIServer from "~/api";
import { Outlet } from "@remix-run/react";
import { getSessionFromRequest, isAuthenticated } from "~/session.server";

let myParty: any;

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionFromRequest(request);
  let games: any[] = dummyGames; // FIXME: remove this out;
  let myParties: any[] = [];

  try {
    const gameRes = await APIServer.clientFromSession(session).request(
      APIServer.getGamesWithRanksAndModes()
    );
    if (gameRes.data) {
      games = gameRes.data;
    }

    const isAuthened = await isAuthenticated(request);
    if (isAuthened) {
      const myPartiesRes = await APIServer.clientFromSession(session).request(
        APIServer.getMyActiveParties()
      );
      if (myPartiesRes.data) {
        myParties = myPartiesRes.data;
        myParty = myParties[0];
      }
    }
  } catch (e) {
    // FIXME: remove this out
    myParties = [...dummyParties].splice(0, 1);
    games = dummyGames;
  }

  return json({
    games,
    myParties,
    hasParty: myParties && myParties.length > 0,
  });
};

export { myParty };

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "CTRL G" },
//     {
//       name: "description",
//       content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
//     },
//     { charSet: "utf-8" },
//     { name: "viewport", content: "width=device-width, user-scalable=no" },
//     { property: "og:title", content: "ชวนเพื่อนมาเล่น | Ctrlg.gg" },
//     {
//       property: "og:image",
//       content: `https://d2007awoau332v.cloudfront.net/assets/webboard.jpg`,
//     },
//     {
//       property: "og:image:width",
//       content: "200",
//     },
//     {
//       property: "og:image:height",
//       content: "200",
//     },
//     {
//       property: "og:description",
//       content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
//     },
//   ];
// };

export default function Parties() {
  return <Outlet />;
}
