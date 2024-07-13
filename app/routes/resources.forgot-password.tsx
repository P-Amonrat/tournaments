import { json, type ActionFunction } from "@remix-run/node";
// import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { getSessionFromRequest } from "~/session.server";

export const action: ActionFunction = async ({ request }: any) => {
  let session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const email = formData.get("email");

  try {
    const forgotPasswordRes = await APIServer.clientFromSession().request(
      APIServer.forgotPassword({ email: email })
    );
    if (forgotPasswordRes) {
      const forgotPasswordData = forgotPasswordRes.data;
    }
    session.flash("flashMessage", {
      type: "success",
      message: `reset password email has been sent, please return to ctrlg after reset success`,
    });
    return json({ sendForgotPassword: true });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: e.response.data.message,
    });
    return json({ sendForgotPassword: true });
  }
};
