import { json, type LoaderFunction } from '@remix-run/node';
import * as APIServer from '~/api';
import { getSessionFromRequest } from '~/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let chats: any = null; // FIXME: change this to null
  if (searchParams.partyId && searchParams.gameId) {
    try {
      const chatsRes = await APIServer.clientFromSession(session).request(
        APIServer.getPartyChats(searchParams.partyId, searchParams.gameId)
      );
      if (chatsRes.data) {
        chats = chatsRes.data;
      }
    } catch (e) {
      console.log('e', e);
    }
    return json({ chats, partyId: searchParams.partyId });
  } else {
    return null;
  }
};
