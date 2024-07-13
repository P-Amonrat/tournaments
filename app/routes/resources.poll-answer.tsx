import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);

  if (searchParams.id) {
    try {
      const answerRes = await APIServer.clientFromSession(session).request(
        APIServer.getMyPollAnswer(searchParams.id)
      );
      return json({
        answer: answerRes.data ? answerRes.data.pollOptionId : null,
        pollId: searchParams.id,
      });
    } catch (e) {
      return json({
        answer: null,
        pollId: searchParams.id,
      });
    }
  }
};
