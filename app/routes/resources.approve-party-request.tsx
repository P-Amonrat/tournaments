import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const gameId = formData.get('gameId') as string;
  const requestId = formData.get('requestId') as string;
  const partyId = formData.get('partyId') as string;
  let newParty: any = null;

  if (requestId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.approvePartyRequest(partyId, { requestId: +requestId })
      );
      if (partyId) {
        const partyRes = await APIServer.clientFromSession().request(
          APIServer.getParty(partyId, gameId)
        );
        if (partyRes && partyRes.data && partyRes.data.party) {
          newParty = partyRes.data.party;
        }
      }
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully approved request`,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'approve request failed',
      });
    }
  }
  await commitSession(session);
  return json({ success: `approve-party-request`, partyId, party: newParty });
};
