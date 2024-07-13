import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get('id') as string;
  const data = formData.get('data') as string;
  const toSubmitData = JSON.parse(data);
  let party: any = null; // FIXME: change this to null

  if (id) {
    try {
      const partyRes = await APIServer.clientFromSession(session).request(
        APIServer.updateParty(id, toSubmitData)
      );
      if (partyRes && partyRes.data) {
        party = partyRes.data;
      }
      session.flash('flashMessage', {
        type: 'success',
        message: `Successfully update party`,
      });
      await commitSession(session);
      return json({
        success: 'update-party',
        party,
      });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'update party failed',
      });
      await commitSession(session);
      // return json({
      //   success: 'update-party',
      //   party,
      // }); // FIXME: remove this out
      return null;
    }
  }
};
