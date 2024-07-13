import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Card, Result, Typography, theme } from "antd";

const { useToken } = theme;

const { Title } = Typography;

export default function TournamentSingleSchedule() {
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const { t } = useTranslation();
  const { token } = useToken();

  return (
    <>
      <Title level={3} style={{ marginBottom: 30 }}>
        {t("tournament schedule")}
      </Title>
      {tournament.bracketContent ? (
        // <Image src={tournament.scheduleImageUrl} />
        // <div
        //   className="ctrlg-html"
        //   style={{ color: token.colorTextBase }}
        //   dangerouslySetInnerHTML={{
        //     __html: `${renderData(
        //       tournament.bracketContent,
        //       "description",
        //       locale
        //     )}`,
        //   }}
        // />
        <div
          className="ctrlg-html"
          style={{ color: token.colorTextBase }}
          dangerouslySetInnerHTML={{
            __html: `${tournament.bracketContent}`,
          }}
        />
      ) : (
        // <div>{tournament.bracketContent}</div>
        <Card style={{ borderRadius: 10 }}>
          <Result title={t("schedule hasn't yet been released")} />
        </Card>
      )}
    </>
  );
}
