import {
  useFetcher,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Card, Form, Typography } from "antd";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import * as APIServer from "~/api";
import { TournamentForm } from "~/components/pages/Tournament/TournamentForm";
import { unflattenObject } from "~/utils/helper";

const { Title } = Typography;

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

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const data = formdata.get("data") as any;
  const toSubmitData = JSON.parse(data);
  let tournament: any = null;
  try {
    const tournamentRes = await APIServer.clientFromSession(session).request(
      APIServer.createTournament(toSubmitData)
    );
    if (tournamentRes && tournamentRes.data) {
      tournament = tournamentRes.data;
    }

    session.flash("flashMessage", {
      type: "success",
      message: `successfully create tournament`,
    });
  } catch (e: any) {
    console.log("error from create", e.response.data);

    session.flash("flashMessage", {
      type: "error",
      message: e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data,
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
};

export default function TournamentNew() {
  const { t } = useTranslation();
  const { games } = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = Form.useForm();
  const navigation = useNavigation();

  const handleCreateTournament = (values: any) => {
    if (values.isOnline) {
      const {
        finalRoundLocation,
        playerCount,
        additionalPlayerCount,
        finalRoundLocationEn,
        ...value
      } = values;
      submit(
        {
          data: JSON.stringify(
            unflattenObject({
              ...value,
              playerCount: Number(playerCount),
              additionalPlayerCount: Number(additionalPlayerCount),
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
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto",
      }}
    >
      <Card
        style={{
          borderRadius: 12,
          maxWidth: 800,
          marginInline: "auto",
        }}
        bodyStyle={{ padding: 30 }}
      >
        <Title level={2} style={{ marginTop: 0, marginBottom: 40 }}>
          {t("create tournament")}
        </Title>
        <Form
          form={form}
          onFinish={handleCreateTournament}
          layout="vertical"
          scrollToFirstError
        >
          <TournamentForm
            fetcher={fetcher}
            form={form}
            games={games}
            loading={navigation.state !== "idle"}
            submitLabel={t("submit")}
          />
        </Form>
      </Card>
    </div>
  );
}
