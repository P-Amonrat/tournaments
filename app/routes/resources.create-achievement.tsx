import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);

  console.log("toSubmitData", toSubmitData);

  try {
    await APIServer.clientFromSession(session).request(
      APIServer.createAchievement(toSubmitData)
    );
    session.flash("flashMessage", {
      type: "success",
      message: `successfully created achievement`,
    });
    await commitSession(session);

    return json({
      success: "create-achievement",
      action: "created",
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: e.response.data?.message
        ? e.response.data.message
        : "failed to create achievement",
    });
    await commitSession(session);
    // return json({
    //   success: "create-achievement",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
