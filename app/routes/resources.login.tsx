import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import { isEmail, isPhone } from "~/utils/helper";
import * as APIServer from "~/api";
import { toLower } from "lodash";

export const action: ActionFunction = async ({ request }: any) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const loginChannel = formData.get("channel");
  const callFromPath = formData.get("currentPath");
  const credential = formData.get("credential");
  const password = formData.get("password");
  let toJoinTeams = session.get("toJoinTeams");
  const uuidTeamToJoin = session.get("uuidTeamToJoin");
  const redirectUri = session.get("redirectUri");

  // to set last visited page, in order to redirect back to that page after login
  if (callFromPath) {
    session.set("lastVisited", redirectUri ? redirectUri : callFromPath);
  }

  if (loginChannel) {
    return redirect(
      loginChannel === "google"
        ? "/resources/login-social?provider=google"
        : "/resources/login-social?provider=line",
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  } else {
    const confirmPassword = formData.get("confirmPassword");
    if (confirmPassword) {
      if (isEmail(credential)) {
        try {
          const resMe = await APIServer.clientFromSession().request(
            APIServer.registerEmail({
              email: toLower(credential),
              password: password,
            })
          );

          if (resMe.data) {
            session.set("accessToken", resMe.data.accessToken);
            session.set("refreshToken", resMe.data.refreshToken);

            try {
              const { data } = await APIServer.clientFromSession(
                session
              ).request(APIServer.me());
              session.set("me", data);
            } catch (e) {
              console.log("e", e);
            }
          }
          session.flash("flashMessage", {
            type: "success",
            message: `successfully Register Account`,
          });
        } catch (e: any) {
          console.log("e", e);
          session.flash("flashMessage", {
            type: "error",
            message: e.response.data.message.message,
          });
        }

        if (toJoinTeams) {
          return redirect(`/teams/${uuidTeamToJoin}/join`, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else if (redirectUri) {
          return redirect(redirectUri, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else {
          return json(
            { loggedIn: true },
            {
              headers: {
                "Set-Cookie": await commitSession(session),
              },
            }
          );
        }
      } else if (isPhone(credential)) {
        try {
          const resMe = await APIServer.clientFromSession().request(
            APIServer.registerPhoneNumber({
              phoneNumber: credential,
              password: password,
            })
          );

          if (resMe.data) {
            session.set("accessToken", resMe.data.accessToken);
            session.set("refreshToken", resMe.data.refreshToken);

            //set user data
            try {
              const { data } = await APIServer.clientFromSession(
                session
              ).request(APIServer.me());
              session.set("me", data);
            } catch (e) {
              console.log("e", e);
            }
          }
          session.flash("flashMessage", {
            type: "success",
            message: `successfully Register Account`,
          });
        } catch (e: any) {
          session.flash("flashMessage", {
            type: "error",
            message: e.response.data.message.message,
          });
        }
        if (toJoinTeams) {
          return redirect(`/teams/${uuidTeamToJoin}/join`, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else if (redirectUri) {
          return redirect(redirectUri, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else {
          return json(
            { loggedIn: true },
            {
              headers: {
                "Set-Cookie": await commitSession(session),
              },
            }
          );
        }
      }
    } else {
      if (isEmail(credential)) {
        try {
          const resMe = await APIServer.clientFromSession().request(
            APIServer.loginEmail({ email: credential, password: password })
          );

          if (resMe.data) {
            session.set("accessToken", resMe.data.accessToken);
            session.set("refreshToken", resMe.data.refreshToken);

            //set user data
            try {
              const { data } = await APIServer.clientFromSession(
                session
              ).request(APIServer.me());
              session.set("me", data);
            } catch (e) {
              console.log("e", e);
            }
          }
          session.flash("flashMessage", {
            type: "success",
            message: `successfully Login`,
          });
        } catch (e: any) {
          console.log("e = ", e);
          const message =
            e.response.data.isBanned === true
              ? "user is banned"
              : "invalid password";
          session.flash("flashMessage", {
            type: "error",
            message: message,
          });
        }

        if (toJoinTeams) {
          return redirect(`/teams/${uuidTeamToJoin}/join`, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else if (redirectUri) {
          return redirect(redirectUri, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else {
          return json(
            { loggedIn: true },
            {
              headers: {
                "Set-Cookie": await commitSession(session),
              },
            }
          );
        }
      } else if (isPhone(credential)) {
        try {
          const resMe = await APIServer.clientFromSession().request(
            APIServer.loginPhoneNumber({
              phoneNumber: credential,
              password: password,
            })
          );

          if (resMe.data) {
            session.set("accessToken", resMe.data.accessToken);
            session.set("refreshToken", resMe.data.refreshToken);

            //set user data
            try {
              const { data } = await APIServer.clientFromSession(
                session
              ).request(APIServer.me());
              session.set("me", data);
            } catch (e) {
              console.log("e", e);
            }
          }
          session.flash("flashMessage", {
            type: "success",
            message: `successfully Login`,
          });
        } catch (e: any) {
          session.flash("flashMessage", {
            type: "error",
            message: e.response.data.message.message,
          });
        }
        if (toJoinTeams) {
          return redirect(`/teams/${uuidTeamToJoin}/join`, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else if (redirectUri) {
          return redirect(redirectUri, {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
          });
        } else {
          return json(
            { loggedIn: true },
            {
              headers: {
                "Set-Cookie": await commitSession(session),
              },
            }
          );
        }
      }
    }
    return json(
      { loggedIn: true },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }
};
