import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get('data') as string;
  const partyId = formData.get('partyId') as string;
  const gameId = formData.get('gameId') as string;
  const { isPrivate, hasParty, ...toSubmitData } = JSON.parse(data);

  let partyRequest: any = null; // FIXME: change this to null

  if (hasParty === true) {
    session.flash('flashMessage', {
      type: 'error',
      message: `Already has a party`,
    });
    await commitSession(session);
    return null;
  }

  if (partyId) {
    try {
      // const requestsRes =
      //   isPrivate === true
      //     ? await APIServer.clientFromSession(session).request(
      //         APIServer.createPartyRequest(partyId, toSubmitData)
      //       )
      //     : await APIServer.clientFromSession(session).request(
      //         APIServer.joinParty(partyId, toSubmitData)
      //       );

      const requestsRes = await APIServer.clientFromSession(session).request(
        APIServer.joinParty(partyId, toSubmitData)
      );

      if (requestsRes.data) {
        partyRequest = isPrivate === false ? null : requestsRes.data;
      }
      const { data } = await APIServer.clientFromSession(session).request(
        APIServer.me()
      );

      session.set('me', data);
      session.flash('flashMessage', {
        type: 'success',
        message: isPrivate
          ? `successfully created request`
          : `successfully joined party`,
      });
      await commitSession(session);
      return json({
        success: isPrivate === false ? 'join-party' : 'create-party-request',
        request: partyRequest,
        gameId: gameId,
        partyId: partyId,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'create party request failed',
      });
      await commitSession(session);
      // return json({
      //   success:
      //     partyRequest.status === 'approved'
      //       ? 'join-party'
      //       : 'create-party-request',
      //   request: partyRequest,
      //   gameId: gameId,
      //   partyId: partyId,
      // }); // FIXME: remove this out
      return json(null);
    }
  }
};
