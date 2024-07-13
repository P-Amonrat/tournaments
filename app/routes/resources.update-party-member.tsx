import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const gameId = formData.get('gameId') as string;
  const partyId = formData.get('partyId') as string;
  const data = formData.get('data') as string;
  const toSubmitData = JSON.parse(data);
  let newParty: any = null;

  if (toSubmitData.memberId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.updatePartyMember(partyId, toSubmitData)
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
        message: `successfully update party member`,
      });
      await commitSession(session);
      return json({
        success: 'update-party-member',
        party: newParty,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'update party member failed',
      });
      await commitSession(session);
      return null;
    }
  }
};
