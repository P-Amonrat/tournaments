import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const paths = formData.get("paths") as string;
  const id = formData.get("id") as string;
  const photosPath = JSON.parse(paths);

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.addAlbumPhotos(id, JSON.parse(paths))
      );

      session.flash("flashMessage", {
        type: "success",
        message: `successfully upload photos`,
      });
      await commitSession(session);
      return json({
        success: "add-album-photos",
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "upload photos failed",
      });
      await commitSession(session);
      return null;
    }
  }
};
