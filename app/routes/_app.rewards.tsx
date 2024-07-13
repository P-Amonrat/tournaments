import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return redirect("/coming-soon");
};

export default function Rewards() {
  return (
    <div>
      <h1>{"this is rewards center page"}</h1>
    </div>
  );
}
