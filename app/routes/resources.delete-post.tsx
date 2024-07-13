import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id") as string;
  const type = formData.get("type") as string;

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        type === "comment"
          ? APIServer.deleteComment(id)
          : APIServer.deleteWebboard(id)
      );
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted ${type ? type : "post"}`,
      });
      if (type === "webboard") {
        return redirect(`/webboards`, {
          headers: {
            "Set-Cookie": await commitSession(session),
          },
        });
      } else {
        await commitSession(session);
        return json({
          postId: id,
          success: `delete-comment`,
        });
      }
    } catch (e: any) {
      session.flash("flashMessage", {
        type: "error",
        message: "delete failed",
      });
      console.log("e", e);
      await commitSession(session);
      return json(null);
    }
  }
};
