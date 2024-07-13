import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;

  const toSubmitData = JSON.parse(data);
  const albumId = toSubmitData.id;

  try {
    const albumRes = await APIServer.clientFromSession(session).request(
      APIServer.editAlbum(albumId, toSubmitData)
    );
    session.flash("flashMessage", {
      type: "success",
      message: `successfully updated album`,
    });
    await commitSession(session);

    console.log("albumRes", albumRes);

    return json({
      success: "update-album",
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message: e.response.data?.message
        ? e.response.data.message
        : "failed to updated album",
    });
    await commitSession(session);
    // return json({
    //   success: "create-album",
    //   gameId: dummyParty.gameId,
    // }); // FIXME: remove this out
    return null;
  }
};
