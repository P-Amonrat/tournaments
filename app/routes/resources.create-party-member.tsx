import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get('data') as string;
  const gameId = formData.get('gameId') as string;
  const partyId = formData.get('partyId') as string;
  const toSubmitData = JSON.parse(data);
  let newParty: any = null;

  if (partyId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.createPartyMember(partyId, toSubmitData)
      );
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully created party member`,
      });
      const partyRes = await APIServer.clientFromSession().request(
        APIServer.getParty(partyId, gameId)
      );
      if (partyRes && partyRes.data && partyRes.data.party) {
        newParty = partyRes.data.party;
      }
      await commitSession(session);
      return json({
        success: 'create-party-member',
        party: newParty,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'failed to create party member',
      });
      await commitSession(session);
      return null;
    }
  }
};
