import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const commentId = formData.get("commentId") as string;
  const comment = formData.get("comment") as string;
  const toSubmitComment = JSON.parse(comment);
  let updatedComment: any = null;

  if (commentId) {
    try {
      const commentRes = await APIServer.clientFromSession(session).request(
        APIServer.updateComment(commentId, toSubmitComment)
      );
      if (commentRes && commentRes.data) {
        updatedComment = commentRes.data;
      }
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully update comment`,
      });
      await commitSession(session);

      return json({
        success: "update-comment",
        postId: commentId,
        post: updatedComment,
      });
    } catch (e: any) {
      session.flash("flashMessage", {
        type: "error",
        message: "update comment failed",
      });
      await commitSession(session);
      return null;
    }
  }
};
