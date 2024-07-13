import { json, type ActionFunction } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const rarity = session.get("rarity");
  let reward: any;

  try {
    const getRewardRes = await APIServer.clientFromSession(session).request(
      APIServer.claimReward(rarity)
    );

    reward = getRewardRes.data;
    session.set("gift", reward.url);

    const { data } = await APIServer.clientFromSession(session).request(
      APIServer.me()
    );
    session.set("me", data);
    session.flash("flashMessage", {
      type: "success",
      message: `successfully claim reward`,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message:
        e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data.message,
    });
  }

  return json(
    { reward: reward },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};
