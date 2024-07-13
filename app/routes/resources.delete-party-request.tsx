import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const requestId = formData.get('requestId') as string;
  const partyId = formData.get('partyId') as string;
  const gameId = formData.get('gameId') as string;
  let partyRequest: any = null; // FIXME: change this to null

  if (requestId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deletePartyRequest(partyId, { requestId: +requestId })
      );
      if (partyId) {
        const requestsRes = await APIServer.clientFromSession(session).request(
          APIServer.getPartyRequest(partyId, gameId)
        );
        if (requestsRes.data) {
          partyRequest = requestsRes.data;
        }
      }
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully deleted request`,
      });
      await commitSession(session);
      return json({
        success: 'delete-party-request',
        request: partyRequest,
        partyId: partyId,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'delete party request failed',
      });
      await commitSession(session);
      return json(null);
    }
  }
};
