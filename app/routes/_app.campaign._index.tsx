import { useFetcher } from "@remix-run/react";
import {
  type ActionFunction,
  redirect,
  json,
  V2_MetaFunction,
} from "@remix-run/node";
import { useCallback, useContext, useState } from "react";
import {
  CampaignActions,
  CampaignQuiz,
  CampaignStart,
} from "~/components/pages/Campaign";
import { getRandomInt, randomRarity } from "~/utils/helper";

import { commitSession, getSessionFromRequest } from "~/session.server";
import { AuthContext } from "~/contexts";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const campaignResult: any = formdata.get("campaignResult");
  const campaignResultData = JSON.parse(campaignResult);
  const redirection = formdata.get("redirection");
  const rarity = randomRarity();
  session.set("rarity", rarity);
  session.set("campaignResult", campaignResultData);

  session.unset("gift");
  if (redirection === "true") {
    session.flash("rerandom", true);
    return redirect("/campaign/result", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } else {
    session.flash("redirectUri", "/campaign/result");
    session.flash("rerandom", true);
    return json(null, {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "ตอบคำถามหาฉายา แล้วแชร์ให้โลกรู้ว่าxรึงเป็นใคร !",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: "ทายนิสัย ...คุณเป็นใครเวลาเล่น Valorant | Ctrlg.gg",
    },
    {
      property: "og:image",
      content: "https://d2007awoau332v.cloudfront.net/assets/quiz.jpg",
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:description",
      content: "ตอบคำถามหาฉายา แล้วแชร์ให้โลกรู้ว่าxรึงเป็นใคร !",
    },
  ];
};

export default function CampaignIndex() {
  const fetcher = useFetcher();
  const { user, openLoginModal } = useContext(AuthContext);
  const [step, setStep] = useState<number>(0);
  const [toSubmit, setToSubmit] = useState<string>("");

  const next = () => {
    setStep((prev: number) => prev + 1);
  };

  const handleQuizFinished = useCallback(
    (values: any) => {
      if (user) {
        fetcher.submit(
          {
            campaignResult: JSON.stringify({
              result: values,
              character: getRandomInt(1, 16),
              powers: [
                getRandomInt(1, 5),
                getRandomInt(1, 5),
                getRandomInt(1, 5),
                getRandomInt(1, 5),
              ],
              alias: getRandomInt(1, 20),
            }),
            redirection: true,
          },
          { method: "post" }
        );
      } else {
        setToSubmit(values);
        next();
      }
    },
    [user]
  );

  const handleSubmitQuiz = useCallback(
    (withLogin: boolean) => {
      if (withLogin) {
        openLoginModal();
      }
      fetcher.submit(
        {
          campaignResult: JSON.stringify({
            result: toSubmit,
            character: getRandomInt(1, 16),
            powers: [
              getRandomInt(1, 5),
              getRandomInt(1, 5),
              getRandomInt(1, 5),
              getRandomInt(1, 5),
            ],
            alias: getRandomInt(1, 20),
          }),
          redirection: !withLogin || user ? true : false,
        },
        { method: "post" }
      );
    },
    [toSubmit, user]
  );

  return (
    <>
      {step == 1 ? (
        <CampaignQuiz onSubmit={handleQuizFinished} />
      ) : step == 2 ? (
        <CampaignActions onSubmit={handleSubmitQuiz} />
      ) : (
        <CampaignStart onNext={next} />
      )}
    </>
  );
}
