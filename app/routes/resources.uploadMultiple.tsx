import type { ActionFunction } from "@remix-run/node";
import {
  json,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
import { decode } from "base64-arraybuffer";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const uploadHandler = unstable_createMemoryUploadHandler();
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const submitData = Object.fromEntries(formData) as any;
  const inputData = JSON.parse(submitData.inputData);
  const imagesList = JSON.parse(submitData.imageList);
  const field = formData.get("field") as string;

  console.log("inputData", inputData);

  // if (submitData.inputData) {
  //   try {
  //     const uploadPath = await APIServer.clientFromSession(session).request(
  //       APIServer.generateUploadPathMultiple(JSON.parse(submitData.inputData))
  //     );

  //     const uploadPathData = uploadPath.data;

  //     uploadPathData.forEach(async (pathItem: any, index: number) => {
  //       const targetImage = imagesList.find(
  //         (image: any) => image.uuid === pathItem.uuid
  //       );

  //       if (pathItem && pathItem.presignedUrl) {
  //         console.log("before success");

  //         const uploadRes = await APIServer.uploadFile(
  //           pathItem.type,
  //           pathItem.presignedUrl,
  //           decode(targetImage.file)
  //         );
  //         console.log("uploadRes", uploadRes);
  //         console.log("success");

  //         const imageUrl = pathItem.key;
  //         console.log("imageUrl", imageUrl);

  //         if (uploadRes.ok) {
  //           // tempPreview.push({
  //           //   key: item.key,
  //           //   name: targetImage.name,
  //           //   source: targetImage.source,
  //           //   path: item.keyPath,
  //           //   isSuccess: true,
  //           // });
  //           console.log("Ok");
  //         } else {
  //           // tempPreview.push({
  //           //   key: item.key,
  //           //   name: targetImage.name,
  //           //   source: targetImage.source,
  //           //   path: item.keyPath,
  //           //   isSuccess: false,
  //           // });
  //           console.log("Oh no");
  //         }

  //         return json({
  //           field: field,
  //           url: `${process.env.CDN_URL}/${imageUrl}`,
  //           key: imageUrl,
  //           isSlip: true,
  //           previewImage: "",
  //         });
  //       }
  //     });
  //   } catch (e: any) {
  //     return json({ error: "error null" });
  //     console.log("error from uplpad", e.response.data);
  //     console.log("error from upload");
  //   }
  // }

  if (submitData.inputData) {
    try {
      const uploadPath = await APIServer.clientFromSession(session).request(
        APIServer.generateUploadPathMultiple(JSON.parse(submitData.inputData))
      );

      const imageKeyList: any[] = [];
      const imageKeyOnlyList: any[] = [];

      const uploadPromises = uploadPath.data.map(async (pathItem: any) => {
        const targetImage = imagesList.find(
          (image: any) => image.uuid === pathItem.uuid
        );

        if (pathItem && pathItem.presignedUrl) {
          await APIServer.uploadFile(
            pathItem.type,
            pathItem.presignedUrl,
            decode(targetImage.file)
          );

          imageKeyList.push({ key: pathItem.key, uuid: pathItem.uuid }); // Collect the key
          imageKeyOnlyList.push(pathItem.key);
        }
      });

      await Promise.all(uploadPromises);

      return json({ success: true, field, imageKeyList, imageKeyOnlyList });
    } catch (e) {
      console.error("Error during upload:", e);

      return json({ error: "Error during upload" });
    }
  }

  return json(null);
};
