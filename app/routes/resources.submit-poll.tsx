import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import { dummyPoll2 } from "~/components/common";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get("id") as string;
  const answerId = formData.get("answerId") as string;

  if (id) {
    try {
      const pollRes = await APIServer.clientFromSession(session).request(
        APIServer.submitPoll(id, answerId)
      );
      session.flash("flashMessage", {
        type: "success",
        message: `Successfully voted`,
      });
      await commitSession(session);
      return json({
        answer: answerId,
        pollId: id,
        poll: pollRes && pollRes.data ? pollRes.data.poll : null,
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "vote failed",
      });
      await commitSession(session);
      return null;
    }
  }
};
