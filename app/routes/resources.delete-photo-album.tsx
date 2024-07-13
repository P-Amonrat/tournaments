import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const albumId = formData.get("albumId");
  const photoId = formData.get("photoId");

  if (albumId && albumId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deletePhotoAlbum(albumId, photoId)
      );

      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted photo`,
      });

      await commitSession(session);

      return json({
        success: "delete-photo",
        action: "deleted",
      });
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
