import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const requestId = formData.get('requestId') as string;
  const partyId = formData.get('partyId') as string;

  if (requestId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.rejectPartyRequest(partyId, { requestId: +requestId })
      );
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully rejected request`,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'reject request failed',
      });
    }
  }
  await commitSession(session);
  return json({ success: `reject-party-request`, partyId });
};
