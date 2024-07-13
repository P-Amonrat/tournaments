import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get('id') as string;
  const gameId = formData.get('gameId') as string;

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.leaveParty(id)
      );
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully left party`,
      });
      await commitSession(session);
      return json({ success: 'leave-party', gameId: gameId });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'leave party failed',
      });
      await commitSession(session);
      return json(null);
    }
  }
};
