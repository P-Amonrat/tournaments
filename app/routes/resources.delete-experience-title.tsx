import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id");

  if (id) {
    try {
      const experienceRes = await APIServer.clientFromSession(session).request(
        APIServer.deleteExperienceTitle(id)
      );
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted experience title`,
      });
      return redirect(`/settings/experiences`, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
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
