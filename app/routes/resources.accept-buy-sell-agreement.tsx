import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  let output = null;

  try {
    await APIServer.clientFromSession(session).request(
      APIServer.acceptBuySellAgreement()
    );
    const { data } = await APIServer.clientFromSession(session).request(
      APIServer.me()
    );
    session.set("me", data);
    session.flash("flashMessage", {
      type: "success",
      message: "Successfully accepted buy sell agreements",
    });
    output = { success: "accept-buy-sell-agreement" };
  } catch (e) {
    session.flash("flashMessage", {
      type: "error",
      message: "accept buy sell failed",
    });
  }
  await commitSession(session);

  return json(output);
};
