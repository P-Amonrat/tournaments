import type { ActionFunction } from "@remix-run/node";
import {
  json,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { toNumber } from "lodash";
import { decode } from "base64-arraybuffer";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const uploadHandler = unstable_createMemoryUploadHandler();
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const file = formData.get("file") as any;
  const name = formData.get("name");
  const size = formData.get("size");
  const type = formData.get("type") as string;
  const field = formData.get("field") as string;
  const isSlip = formData.get("isSlip");
  const previewImage = formData.get("previewImage");

  console.log("from single upload");

  if (file && name && size && type) {
    try {
      const uploadPath = await APIServer.clientFromSession(session).request(
        APIServer.generateUploadPath({
          name: name,
          size: toNumber(size),
          type: type,
          isSlip: isSlip,
        })
      );

      if (uploadPath.data && uploadPath.data.presignedUrl) {
        await APIServer.uploadFile(
          type,
          uploadPath.data.presignedUrl,
          decode(file)
        );
        const imageUrl = uploadPath.data.key;
        return json({
          field: field,
          url: `${process.env.CDN_URL}/${imageUrl}`,
          key: imageUrl,
          isSlip: isSlip === "true" ? true : false,
          previewImage: previewImage,
        });
      }
    } catch (e) {
      console.log("error from uplpad", e);
    }
  }

  return json(null);
};
