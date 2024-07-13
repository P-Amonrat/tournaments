import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { userPrefs } from "~/session.server";

export const action: ActionFunction = async ({ request }: any) => {
  const cookie = request.headers.get("Cookie");
  const userPrefsCookie = (await userPrefs.parse(cookie)) || {};
  const formData = await request.formData();

  switch (formData.get("action")) {
    case "accept-cookies":
      userPrefsCookie.allowCookies = formData.get("allowCookies");
      break;
    case "change-locale":
      userPrefsCookie.locale = formData.get("locale") || "th";
      break;
    case "change-scheme":
      userPrefsCookie.scheme = formData.get("scheme") || "light";
      break;
  }

  return json(
    {},
    {
      headers: {
        "Set-Cookie": await userPrefs.serialize(userPrefsCookie),
      },
    }
  );
};
