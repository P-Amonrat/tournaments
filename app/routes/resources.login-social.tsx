import { json, type LoaderArgs } from "@remix-run/node";
import {
  googleAuthenticator,
  lineAuthenticator,
} from "~/configs/oAuth2.server";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url) as any;
  const provider = url.searchParams.get("provider");

  switch (provider) {
    case "line":
      return lineAuthenticator.authenticate("line", request);
    case "google":
      return googleAuthenticator.authenticate("google", request);
    default:
      return json({ errorMessage: "invalid provider" });
  }
};
