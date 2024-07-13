import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id") as string;
  const type = formData.get("type") as string;
  const reactionId = formData.get("reactionId") as string;
  let updatedComment: any = null;
  let commentRes: any;

  if (id && reactionId) {
    try {
      const reactionRes = await APIServer.clientFromSession(session).request(
        type === "comment"
          ? APIServer.reactionComment(id, reactionId)
          : APIServer.reactionWebboard(id, reactionId)
      );

      if (type === "comment") {
        commentRes = await APIServer.clientFromSession(session).request(
          APIServer.getComment(id)
        );

        if (commentRes && commentRes.data) {
          updatedComment = commentRes.data;
        }
      }

      return json({
        success: `reaction-${type ? type : "webboard"}`,
        postId: id,
        post: updatedComment,
        postType: type,
        reactions:
          reactionRes && reactionRes.data
            ? type === "webboard"
              ? reactionRes.data.postReactionCounts
              : reactionRes.data.commentReactionCounts
            : null,
      });
    } catch (e) {
      return null;
    }
  }
};
