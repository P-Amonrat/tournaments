import { json, type ActionFunction } from "@remix-run/node";
import * as APIServer from "~/api";

export const action: ActionFunction = async ({ request }: any) => {
  const formData = await request.formData();
  const name = formData.get("name");
  let tags: any[] = [];
  let tagsRes: any;

  try {
    if (name === "#") {
      tagsRes = await APIServer.clientFromSession().request(
        APIServer.getWebboardTags()
      );
    } else {
      tagsRes = await APIServer.clientFromSession().request(
        APIServer.getWebboardTags({ name: name })
      );
    }

    if (tagsRes.data) {
      tags = tagsRes.data;
    }
  } catch (e) {
    console.log("tags error", e);
  }

  return json({ tags });
};
