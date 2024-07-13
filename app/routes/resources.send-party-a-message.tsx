import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const partyId = formData.get("partyId") as string;
  const data = formData.get("data") as string;
  const toSubmitData = JSON.parse(data);

  if (partyId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.sendMessageToPartyChat(partyId, toSubmitData)
      );
      //   session.flash('flashMessage', {
      //     type: 'success',
      //     message: `successfully send a message`,
      //   });
      //   await commitSession(session);
      return json({
        success: "success-sending-a-message",
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "send a message failed",
      });
      await commitSession(session);
      return { sendFailed: true };
    }
  }
};
