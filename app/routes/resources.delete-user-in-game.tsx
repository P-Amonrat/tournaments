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
      const experienceRes = await APIServer.clientFromSession(session).request(
        APIServer.deleteUserInGame(id)
      );

      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted user in game`,
      });
      await commitSession(session);

      return json({
        success: "delete-experience",
        action: "deleted",
        experienceTitleId: experienceRes.data.experienceTitleId,
      });
    } catch (e: any) {
      console.log("e", e.response.data);

      session.flash("flashMessage", {
        type: "error",
        message: "delete failed",
      });
      await commitSession(session);
      return json(null);
    }
  }
};
