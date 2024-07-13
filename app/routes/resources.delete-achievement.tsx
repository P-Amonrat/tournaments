import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id");

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deleteAchievement(id)
      );

      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted achievement}`,
      });

      await commitSession(session);

      return json({
        success: "delete-achievement",
        action: "deleted",
      });
    } catch (e: any) {
      console.log("e", e.response.data);

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
