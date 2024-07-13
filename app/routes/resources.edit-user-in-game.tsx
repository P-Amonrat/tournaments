import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);
  const gameInfoId = toSubmitData.id;

  console.log("toSubmitData", toSubmitData);

  try {
    const partyRes = await APIServer.clientFromSession(session).request(
      APIServer.editUserInGame(gameInfoId, toSubmitData)
    );
    session.flash("flashMessage", {
      type: "success",
      message: `successfully updated user in game`,
    });
    await commitSession(session);
    return json({
      success: "create-party",
      gameId: partyRes.data ? partyRes.data.gameId : null,
    });
  } catch (e: any) {
    // console.log("error from create", e);

    session.flash("flashMessage", {
      type: "error",
      message: e.response.data.message,
    });
    await commitSession(session);
    // return json({
    //   success: "create-party",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
