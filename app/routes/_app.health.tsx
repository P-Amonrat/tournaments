import { json } from "@remix-run/node";

export const loader = async () => {
  return json("The App is Healthy", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
