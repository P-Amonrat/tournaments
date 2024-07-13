import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export function generateUploadPath(data: any): AxiosRequestConfig {
  const { isSlip, ...values } = data;

  return {
    method: "POST",
    url: `/api/v1/images/upload`,
    data: { ...values, isSlip: isSlip === "true" ? true : false },
  };
}

export function generateUploadPathMultiple(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/images/upload/multiple`,
    data,
  };
}

export async function uploadFile(
  type: string,
  presignedUrl: string,
  data: any
) {
  const headers = {
    "Content-Type": type,
    "X-Amz-Acl": "public-read",
  } as any;
  let output = null;
  let res = null;

  res = await axios({
    method: "PUT",
    url: presignedUrl,
    headers,
    data,
  });

  if (res.data) {
    output = res.data;
  }

  return { output, ok: true };
}
