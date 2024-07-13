import { json, type LoaderFunction } from '@remix-run/node';
import * as APIServer from '~/api';
import { getSessionFromRequest } from '~/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let partyRequest: any = null; // FIXME: change this to null
  if (searchParams.partyId && searchParams.gameId) {
    try {
      const requestsRes = await APIServer.clientFromSession(session).request(
        APIServer.getPartyRequest(searchParams.partyId, searchParams.gameId)
      );
      if (requestsRes.data) {
        partyRequest = requestsRes.data;
      }
    } catch (e) {}
    return json({ request: partyRequest, partyId: searchParams.partyId });
  } else {
    return null;
  }
};
