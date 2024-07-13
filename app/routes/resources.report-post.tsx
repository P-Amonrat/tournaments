import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id") as string;
  const type = formData.get("type") as string;
  const reason = formData.get("reason") as string;

  if (id && reason) {
    try {
      await APIServer.clientFromSession(session).request(
        type === "comment"
          ? APIServer.reportComment(id, { reason })
          : APIServer.reportWebboard(id, { reason })
      );
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully reported ${type ? type : "post"}`,
      });
    } catch (e: any) {
      session.flash("flashMessage", {
        type: "error",
        message: e.response.data.message,
      });
    }
  }
  await commitSession(session);
  return json({ success: `report-${type ? type : "post"}` });
};
