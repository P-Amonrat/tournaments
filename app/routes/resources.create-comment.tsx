import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const postId = formData.get("postId") as string;
  const comment = formData.get("comment") as string;
  const toSubmitComment = JSON.parse(comment);

  if (postId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.createComment(postId, toSubmitComment)
      );

      // session.flash("flashMessage", {
      //   type: "success",
      //   message: `Successfully commented`,
      // });
      // await commitSession(session);
      return json({
        success: "create-comment",
        webboardId: postId,
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "comment failed",
      });
      await commitSession(session);
      return null;
    }
  }
};
