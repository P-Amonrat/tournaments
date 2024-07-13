import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const memberId = formData.get('memberId') as string;
  const gameId = formData.get('gameId') as string;
  const partyId = formData.get('partyId') as string;
  let newParty: any = null;

  if (memberId) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.deletePartyMember(partyId, { memberId: +memberId })
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
        message: `successfully deleted member`,
      });
      await commitSession(session);
      return json({ success: 'delete-party-member', party: newParty });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'delete party member failed',
      });
      await commitSession(session);
      return json({ success: 'delete-party-member', party: newParty }); // FIXME: remove this out
      return json(null);
    }
  }
};
