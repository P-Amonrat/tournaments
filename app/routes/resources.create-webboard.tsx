import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { parseAndConvert } from "~/utils/helper";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;
  const toSubmitData = parseAndConvert(JSON.parse(data));
  let webboard: any = null;

  try {
    const webboardRes = await APIServer.clientFromSession(session).request(
      APIServer.createWebboard(toSubmitData)
    );
    if (webboardRes && webboardRes.data) {
      webboard = webboardRes.data;
    }
    session.flash("flashMessage", {
      type: "success",
      message: `successfully create webboard`,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data,
    });
  }
  if (webboard) {
    return redirect(`/webboards/${webboard.id}`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    await commitSession(session);
    return json({ success: false });
  }
};
