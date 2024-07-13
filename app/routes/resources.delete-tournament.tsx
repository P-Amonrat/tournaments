import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id") as string;

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deleteTournament(id)
      );
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully deleted tournament}`,
      });
      return redirect(`/tournaments`, {
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
