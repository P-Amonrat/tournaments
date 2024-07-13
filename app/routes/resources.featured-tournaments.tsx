import { json, type LoaderFunction } from "@remix-run/node";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async () => {
  let featuredTournaments: any[] = [];
  try {
    const tournamentRes = await APIServer.clientFromSession().request(
      APIServer.getTournaments({ featured: true })
    );
    if (tournamentRes.data) {
      featuredTournaments = tournamentRes.data;
    }
  } catch (e) {
    console.log("e", e);
  }

  return json({ featuredTournaments });
};
