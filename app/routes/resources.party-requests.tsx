import { json, type LoaderFunction } from '@remix-run/node';
import * as APIServer from '~/api';
import { getSessionFromRequest } from '~/session.server';
import { dummyPartyRequests } from '~/components/common';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let requests: any[] = dummyPartyRequests; // FIXME: change this to null
  if (searchParams.partyId && searchParams.gameId) {
    try {
      const requestsRes = await APIServer.clientFromSession(session).request(
        APIServer.getPartyRequests(searchParams.partyId, searchParams.gameId)
      );
      if (requestsRes.data) {
        requests = requestsRes.data;
      }
    } catch (e) {}
    return json({ requests, partyId: searchParams.partyId });
  } else {
    return null;
  }
};
