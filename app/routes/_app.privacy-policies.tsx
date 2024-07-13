import type { LoaderFunction } from "@remix-run/node";
import { readFileSync } from "fs";

export const loader: LoaderFunction = async ({ request }) => {
  const pdf = readFileSync(`./public/privacy.pdf`);
  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};
