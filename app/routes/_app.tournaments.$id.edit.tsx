import {
  useFetcher,
  useLoaderData,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Card, Form } from "antd";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import * as APIServer from "~/api";
import { TournamentForm } from "~/components/pages/Tournament/TournamentForm";
import { flattenObject, unflattenObject } from "~/utils/helper";

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  let games: any[] = [];
  try {
    const gameRes = await APIServer.clientFromSession().request(
      APIServer.getGames()
    );
    if (gameRes.data) {
      games = gameRes.data;
    }
  } catch (e) {
    console.log("e", e);
  }
  return json({ games });
};

export const action: ActionFunction = async ({ params, request }) => {
  const { id } = params;
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  // const entries = Object.fromEntries(formdata) as any;
  const data = formdata.get("data") as any;
  const toSubmitData = JSON.parse(data);
  let tournament: any = null;
  if (id) {
    try {
      const tournamentRes = await APIServer.clientFromSession(session).request(
        APIServer.updateTournament(toSubmitData, Number(id))
      );
      if (tournamentRes && tournamentRes.data) {
        tournament = tournamentRes.data;
      }
      session.flash("flashMessage", {
        type: "success",
        message: `successfully update tournament`,
      });
    } catch (e: any) {
      console.log("error from edit", e.response.data.message);

      session.flash("flashMessage", {
        type: "error",
        message: e.response.data.message.data,
      });
    }
    if (tournament) {
      return redirect(`/tournaments/${tournament.id}`, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    } else {
      return json({ success: false });
    }
  } else {
    return json({ success: false });
  }
};

export default function TournamentEdit() {
  const { t } = useTranslation();
  const { games } = useLoaderData();
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = Form.useForm();
  const navigation = useNavigation();

  const handleEditTournament = (values: any) => {
    if (values.isOnline) {
      const { finalRoundLocation, finalRoundLocationEn, ...value } = values;
      submit(
        {
          data: JSON.stringify(
            unflattenObject({
              ...value,
            })
          ),
        },
        { method: "post" }
      );
    } else {
      const { playerCount, additionalPlayerCount, ...rest } = values;
      submit(
        {
          data: JSON.stringify(
            unflattenObject({
              ...rest,
              playerCount: Number(playerCount),
              additionalPlayerCount: Number(additionalPlayerCount),
            })
          ),
        },
        { method: "post" }
      );
    }
  };

  return (
    <Card
      style={{
        borderRadius: 12,
        maxWidth: 800,
        marginInline: "auto",
      }}
      bodyStyle={{ padding: 30 }}
    >
      <Form
        form={form}
        onFinish={handleEditTournament}
        layout="vertical"
        initialValues={flattenObject(tournament)}
        scrollToFirstError
      >
        <TournamentForm
          fetcher={fetcher}
          form={form}
          games={games}
          initialAdditionalLength={
            tournament &&
            tournament.requirementFields &&
            tournament.requirementFields.length
          }
          prizeInitialAdditionalLength={
            tournament && tournament.prize && tournament.prize.length
          }
          loading={navigation.state !== "idle"}
          submitLabel={t("submit")}
          edit={true}
        />
      </Form>
    </Card>
  );
}
