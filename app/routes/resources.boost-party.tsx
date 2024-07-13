import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { commitSession, getSessionFromRequest } from '~/session.server';
import * as APIServer from '~/api';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const id = formData.get('id') as string;
  let party: any = null; // FIXME: change this to null

  if (id) {
    try {
      await APIServer.clientFromSession(session).request(
        APIServer.boostParty(id)
      );
      session.flash('flashMessage', {
        type: 'success',
        message: `successfully boosted party`,
      });
      await commitSession(session);
      // if (boostRes.data) {
      //   party = boostRes.data;
      // }
      return json({ success: 'boost-party', party });
    } catch (e) {
      session.flash('flashMessage', {
        type: 'error',
        message: 'boosted party failed',
      });
      await commitSession(session);
      // return json({ success: "boost-party", party }); // FIXME: remove this out
      return json(null);
    }
  }
};
