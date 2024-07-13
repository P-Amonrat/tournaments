import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);

  console.log("from no frame");

  try {
    await APIServer.clientFromSession(session).request(APIServer.noFrame());
    const { data } = await APIServer.clientFromSession(session).request(
      APIServer.me()
    );
    session.set("me", data);
    await commitSession(session);
    session.flash("flashMessage", {
      type: "success",
      message: "successfully deleted frame",
    });

    return json(null, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: "delete frame failed",
    });
    console.log("e", e);
    await commitSession(session);
    return json(null);
  }
};
