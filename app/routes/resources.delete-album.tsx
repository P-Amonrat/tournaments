import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id");
  const uuid = formData.get("uuid");

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deleteAlbum(id)
      );

      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted album`,
      });

      await commitSession(session);

      return redirect(`/users/${uuid}/my-album`, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
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
