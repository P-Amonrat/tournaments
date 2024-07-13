import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
// import { commitSession, getSessionFromRequest } from "~/session.server";
import { isEmail, isPhone } from "~/utils/helper";
import * as APIServer from "~/api";
import { commitSession, getSessionFromRequest } from "~/session.server";

export const action: ActionFunction = async ({ request }: any) => {
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const currentAction = formData.get("action");
  const credential = formData.get("credential");
  const otpNum = formData.get("otpNum");
  const refCode = formData.get("refCode");
  let otpRef = "" as string;

  if (currentAction === "resend-otp") {
    if (isEmail(credential)) {
      try {
        const reSendOtpRes = await APIServer.clientFromSession().request(
          APIServer.reSendOtpEmail({ email: credential })
        );
        if (reSendOtpRes) {
          const otpData = reSendOtpRes.data;
          otpRef = otpData.data.reference_code;
        }
      } catch (e: any) {
        console.log(e.response.data.message);

        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
        console.log("e", e);
      }
    } else if (isPhone(credential)) {
      try {
        const reSendOtpRes = await APIServer.clientFromSession().request(
          APIServer.reSendOtpPhoneNumber({ phoneNumber: credential })
        );
        if (reSendOtpRes) {
          const otpData = reSendOtpRes.data;
          otpRef = otpData.data.reference_code;
        }
      } catch (e: any) {
        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
        console.log("e", e);
      }
    }
    return json({ refCode: otpRef });
  } else if (currentAction === "verify-otp") {
    let isOtpVerified = false as boolean;

    if (isEmail(credential)) {
      try {
        const verifyEmailOtpRes = await APIServer.clientFromSession().request(
          APIServer.verifyEmailOtp({
            email: credential,
            referenceCode: refCode,
            otpCode: otpNum,
          })
        );
        if (verifyEmailOtpRes) {
          const verifyEmailOtpData = verifyEmailOtpRes.data;
          isOtpVerified = verifyEmailOtpData.success;
        }
      } catch (e: any) {
        console.log("e", e);
      }
    } else if (isPhone(credential)) {
      try {
        const verifyPhoneNumberOtpRes =
          await APIServer.clientFromSession().request(
            APIServer.verifyPhoneNumberOtp({
              phoneNumber: credential,
              referenceCode: refCode,
              otpCode: otpNum,
            })
          );

        if (verifyPhoneNumberOtpRes) {
          const verifyPhoneNumberOtpData = verifyPhoneNumberOtpRes.data;
          isOtpVerified = verifyPhoneNumberOtpData.success;
        }
      } catch (e: any) {
        console.log("e", e);
      }
    }

    return json({ otpVerified: isOtpVerified });
  } else {
    let userExist = false as boolean;
    if (isEmail(credential)) {
      try {
        const searchRes = await APIServer.clientFromSession().request(
          APIServer.searchEmail(credential)
        );
        if (searchRes.data) {
          const userSearchData = searchRes.data;
          userExist = userSearchData.data.is_found;
        }

        if (!userExist) {
          try {
            const sendOtpRes = await APIServer.clientFromSession().request(
              APIServer.sendOtpEmail({ email: credential })
            );
            if (sendOtpRes) {
              const otpData = sendOtpRes.data;
              otpRef = otpData.data.reference_code;
            }
          } catch (e: any) {
            console.log("error from otp", e.response.data.message.message);
            session.flash("flashMessage", {
              type: "error",
              message: e.response.data.message.message,
            });
          }
        }
      } catch (e: any) {
        console.log("e", e.response.data.message);
        session.flash("flashMessage", {
          type: "error",
          message:
            e.errors && e.errors.length > 1
              ? e.errors[0]
              : e.response.data.message,
        });
      }
    } else if (isPhone(credential)) {
      try {
        const searchRes = await APIServer.clientFromSession().request(
          APIServer.searchPhoneNumber(credential)
        );
        if (searchRes.data) {
          const userSearchData = searchRes.data;
          userExist = userSearchData.data.is_found;
        }

        if (!userExist) {
          try {
            const sendOtpRes = await APIServer.clientFromSession().request(
              APIServer.sendOtpPhoneNumber({ phoneNumber: credential })
            );
            if (sendOtpRes) {
              const otpData = sendOtpRes.data;
              otpRef = otpData.data.reference_code;
            }
          } catch (e: any) {
            console.log("e", e.response.data.message);
            session.flash("flashMessage", {
              type: "error",
              message: e.response.data.message,
            });
          }
        }
      } catch (e: any) {
        console.log("e", e.response.data.message);
        session.flash("flashMessage", {
          type: "error",
          message: e.response.data.message,
        });
        console.log("e", e);
      }
    }
    if (userExist) {
      return json(
        { credentialExist: true },
        {
          headers: { "Set-Cookie": await commitSession(session) },
        }
      );
    } else {
      return json(
        { refCode: otpRef, credentialExist: false },
        {
          headers: { "Set-Cookie": await commitSession(session) },
        }
      );
    }
  }
};
