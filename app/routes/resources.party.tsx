import { json, type LoaderFunction } from "@remix-run/node";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let party: any = null;
  if ((searchParams && searchParams.partyId, searchParams.gameId)) {
    try {
      const partyRes = await APIServer.clientFromSession().request(
        APIServer.getParty(searchParams.partyId, searchParams.gameId)
      );
      if (partyRes.data && partyRes.data.party) {
        party = partyRes.data.party;
      }
    } catch (e) {}
    return json({
      party,
      partyId: searchParams.partyId,
      gameId: searchParams.gameId,
    });
  } else {
    return null;
  }
};
