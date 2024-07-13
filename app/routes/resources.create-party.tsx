import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { parseAndConvert } from "~/utils/helper";
import { dummyParty } from "~/components/common";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);

  try {
    const partyRes = await APIServer.clientFromSession(session).request(
      APIServer.createParty(toSubmitData)
    );
    session.flash("flashMessage", {
      type: "success",
      message: `successfully created party`,
    });
    await commitSession(session);
    return json({
      success: "create-party",
      gameId: partyRes.data ? partyRes.data.gameId : null,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: "failed to create party",
    });
    await commitSession(session);
    // return json({
    //   success: "create-party",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
