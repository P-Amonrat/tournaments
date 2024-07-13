import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);

  try {
    const resUnreadNoti = await APIServer.clientFromSession(session).request(
      APIServer.getUnreadNotificationsCount()
    );
    if (resUnreadNoti.data && resUnreadNoti.data.count) {
      return json({ unreadCount: resUnreadNoti.data.count });
    } else {
      return json(null);
    }
  } catch (e) {
    return json(null);
  }
};
