import { type LoaderFunction, json } from "@remix-run/node";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("postId");
  const commentId = url.searchParams.get("commentId");

  try {
    if (!postId || !commentId) {
      throw new Error("Post ID and Comment ID are required.");
    }

    const commentPosition = await APIServer.clientFromSession().request(
      APIServer.getCommentPosition(postId, commentId)
    );

    return json(commentPosition.data);
  } catch (error) {}
};
