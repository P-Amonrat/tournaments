import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);

  try {
    const achievementRes = await APIServer.clientFromSession(session).request(
      APIServer.editAchievementTitle(toSubmitData)
    );
    session.flash("flashMessage", {
      type: "success",
      message: `successfully updated achievement title`,
    });
    await commitSession(session);

    // console.log("achievementRes", achievementRes.data);

    return json({
      success: "update-achievement",
      action: "updated",
    });
  } catch (e: any) {
    console.log("e", e.response.data);

    session.flash("flashMessage", {
      type: "error",
      message: e.response.data?.message
        ? e.response.data.message
        : "failed to updated achievement title",
    });
    await commitSession(session);
    // return json({
    //   success: "create-achievement",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
