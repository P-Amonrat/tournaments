import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunction, redirect } from "@remix-run/node";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { CampaignResult2 } from "~/components/pages/Campaign/CampaignResult2";
import { commitSession, getSessionFromRequest } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  let campaignResult = session.get("campaignResult");
  const gift = session.get("gift");
  if (!campaignResult) {
    return redirect("/campaign");
  }

  return json(
    { campaignResult, gift },
    {
      headers: { "Set-Cookie": await commitSession(session) },
    }
  );
};

export default function CampaignResultPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <DndProvider options={HTML5toTouch}>
        <CampaignResult2
          data={loaderData.campaignResult}
          gift={loaderData.gift}
        />
      </DndProvider>
    </>
  );
}
