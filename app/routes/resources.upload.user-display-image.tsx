import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const displayImage = formData.get("displayImage") as string;
  const assetId = formData.get("assetId") as string;
  let assetIdNumber: any;
  if (assetId) {
    assetIdNumber = assetId.match(/\d+/) as any;
  }

  if (displayImage) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.updateDisplayImage(displayImage)
      );
      const { data } = await APIServer.clientFromSession(session).request(
        APIServer.me()
      );
      session.set("me", data);
      session.flash("flashMessage", {
        type: "success",
        message: "Successfully uploaded display image",
      });
    } catch (e) {
      session.flash("flashMessage", {
        type: "error",
        message: "upload failed",
      });
    }
  }
  if (assetIdNumber) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.updateFrame(Number(assetIdNumber[0]))
      );
      const { data } = await APIServer.clientFromSession(session).request(
        APIServer.me()
      );
      session.set("me", data);
      session.flash("flashMessage", {
        type: "success",
        message: "Successfully uploaded frame image",
      });
    } catch (e: any) {
      session.flash("flashMessage", {
        type: "error",
        message: e.response.data.message,
      });
    }
  }
  await commitSession(session);

  return json(null);
};
