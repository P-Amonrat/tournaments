import { redirect, type LoaderFunction } from "@remix-run/node";
import * as APIServer from "~/api";
import { commitSession, getSessionFromRequest } from "~/session.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  const { uuid } = params;
  const session = await getSessionFromRequest(request);
  session.set("uuidTeamToJoin", uuid);
  let toJoinTeams = session.get("toJoinTeams");
  let team: any = null;

  try {
    const teamRes = await APIServer.clientFromSession().request(
      APIServer.getTeam(uuid)
    );
    if (teamRes.data) {
      team = teamRes.data;
    }
  } catch (e) {
    console.log("e", e);
  }

  if (!toJoinTeams) {
    toJoinTeams = [team];
  } else {
    const inIndex = toJoinTeams.findIndex((t: any) => t.id == team.id);
    if (inIndex < 0) {
      toJoinTeams.push(team);
    } else {
      toJoinTeams.splice(inIndex, 1, team);
    }
  }
  session.set("toJoinTeams", toJoinTeams);

  return redirect(`/tournaments/${team.tournamentId}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
