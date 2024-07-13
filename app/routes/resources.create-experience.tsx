import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);

  try {
    const experienceRes = await APIServer.clientFromSession(session).request(
      APIServer.createExpereince(toSubmitData)
    );
    // session.flash("flashMessage", {
    //   type: "success",
    //   message: `successfully created experience`,
    // });
    // await commitSession(session);

    // console.log("experienceRes", experienceRes);

    return json({
      success: "create-experience",
      action: "created",
      experienceTitleId: experienceRes.data.experienceTitleId,
    });
  } catch (e: any) {
    console.log("error", e);

    session.flash("flashMessage", {
      type: "error",
      message: e.response.data?.message
        ? e.response.data.message
        : "failed to create experience",
    });
    await commitSession(session);
    // return json({
    //   success: "create-experience",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
