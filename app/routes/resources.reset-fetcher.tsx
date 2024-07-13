import { json, type LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }: any) => {
  return json(null);
};
