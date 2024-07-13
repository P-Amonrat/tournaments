import {
  json,
  redirect,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import * as APIServer from "~/api";
import { getSessionFromRequest } from "~/session.server";

let webboard: any = null;
let contentWithoutTags: string = ""; // Declare contentWithoutTags here

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionFromRequest(request);
  const { id } = params;
  const me = session.get("me");
  let webboardRes: any;

  if (id) {
    try {
      if (me) {
        webboardRes = await APIServer.clientFromSession(session).request(
          APIServer.getWebboard(id)
        );
      } else {
        webboardRes = await APIServer.clientFromSession().request(
          APIServer.getWebboard(id)
        );
      }
      if (webboardRes && webboardRes.data) {
        webboard = webboardRes.data;
      }
    } catch (e) {
      console.log("webboards single error", e);
      return redirect("/webboards");
    }
  }

  return json({ webboard });
};

export { webboard };

export default function WebboardSingle() {
  const { webboard } = useLoaderData();
  useEffect(() => {
    // Create a temporary element when the component mounts
    const tempElement = document.createElement("div");
    tempElement.innerHTML = webboard?.content || "";
    contentWithoutTags = tempElement.textContent || "";
  }, []); // Run only once after the component mounts

  return <Outlet />;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "พูดคุยแลกเปลี่ยนความรู้และข่าวสารจากวงการเกมและวงการอีสปอร์ต",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    { property: "og:title", content: webboard?.title + " | Ctrlg.gg" },
    {
      property: "og:image",
      content: webboard?.thumbnailImage
        ? `https://d2007awoau332v.cloudfront.net/${webboard?.thumbnailImage}`
        : "https://d2007awoau332v.cloudfront.net/assets/webboard.jpg",
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:description",
      content: "พูดคุยแลกเปลี่ยนความรู้และข่าวสารจากวงการเกมและวงการอีสปอร์ต",
    },
  ];
};
