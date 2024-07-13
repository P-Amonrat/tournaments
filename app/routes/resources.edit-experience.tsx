import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  console.log("in action edit");

  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);
  const experienceId = toSubmitData.id;

  console.log("toSubmitData", toSubmitData);

  try {
    const experienceRes = await APIServer.clientFromSession(session).request(
      APIServer.editExperience(experienceId, toSubmitData)
    );
    // session.flash("flashMessage", {
    //   type: "success",
    //   message: `successfully updated experience`,
    // });
    await commitSession(session);

    return json({
      success: "update-experience",
      action: "updated",
      experienceTitleId: experienceRes.data.experienceTitleId,
    });
  } catch (e: any) {
    console.log("e", e.response.data);

    session.flash("flashMessage", {
      type: "error",
      message: e.response.data?.message
        ? e.response.data.message
        : "failed to updated experience",
    });
    await commitSession(session);
    // return json({
    //   success: "create-experience",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
