import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSessionFromRequest, signOut } from "~/session.server";

export const action: ActionFunction = async ({ request }: any) => {
  const session = await getSessionFromRequest(request);

  return json(
    { logout: true },
    {
      headers: {
        "Set-Cookie": await signOut(session),
      },
    }
  );
};
