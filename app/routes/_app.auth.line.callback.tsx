import { useEffect } from "react";
import { Card, Result } from "antd";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import * as APIServer from "~/api";
import { useSubmit } from "@remix-run/react";
import { lineAuthenticator } from "~/configs/oAuth2.server";
import { commitSession, getSessionFromRequest } from "~/session.server";
import { Loading } from "~/components/common";

export const loader: LoaderFunction = async ({ request }: any) => {
  return null;
};

export const action: ActionFunction = async ({ request }: any) => {
  let session = await getSessionFromRequest(request);
  const lastVisited = session.get("redirectUri") || session.get("lastVisited");
  const uuidTeamToJoin = session.get("uuidTeamToJoin");
  let toJoinTeams = session.get("toJoinTeams");

  let profile: any;
  try {
    profile = await lineAuthenticator.authenticate("line", request, {
      throwOnError: true,
    });

    if (profile) {
      try {
        const resMe = await APIServer.clientFromSession().request(
          APIServer.socialLogin(
            profile.provider.toLowerCase(),
            profile.id,
            profile,
            profile.email
          )
        );

        if (resMe.data) {
          session.set("accessToken", resMe.data.accessToken);
          session.set("refreshToken", resMe.data.refreshToken);
          try {
            const { data } = await APIServer.clientFromSession(session).request(
              APIServer.me()
            );
            session.set("me", data);
          } catch (e) {
            console.log("e", e);
          }
        }
        session.flash("flashMessage", {
          type: "success",
          message: `successfully login`,
        });
      } catch (e: any) {
        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
        console.log(e);
      }
    }

    if (toJoinTeams) {
      return redirect(`/teams/${uuidTeamToJoin}/join`, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    } else {
      return redirect(lastVisited, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }
  } catch (error) {
    return redirect(lastVisited, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
};

export default function LineCallback() {
  const submit = useSubmit();

  const handleCallback = () => {
    const payload = {
      action: "lineCallback",
    };

    submit(payload, { method: "post" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCallback();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card style={{ height: 400 }} bordered={false}>
      <Loading />
    </Card>
  );
}

export function ErrorBoundary({ error }: any) {
  return <Result status="error" title={error.message} />;
}
