import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const coverImage = formData.get("coverImage") as string;

  if (coverImage) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.updateCoverImage(coverImage)
      );
      const { data } = await APIServer.clientFromSession(session).request(
        APIServer.me()
      );
      session.set("me", data);
      session.flash("flashMessage", {
        type: "success",
        message: "Successfully uploaded cover image",
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "upload failed",
      });
    }
  }
  await commitSession(session);
  return json(null);
};
