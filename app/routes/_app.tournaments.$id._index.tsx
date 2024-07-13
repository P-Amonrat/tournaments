import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { Col, Row, Space, theme, Typography } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { CardWithLabel } from "~/components/common";
import { TournamentSingleRewards } from "~/components/pages/Tournament";
import { useContext } from "react";
import { AppContext } from "~/contexts";
import { renderData } from "~/utils/helper";
const { useToken } = theme;

const { Text, Title } = Typography;

export default function TournamentSingleDetail() {
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const { locale } = useContext(AppContext);
  const { t } = useTranslation();
  const { token } = useToken();

  return (
    <Space direction="vertical" size={20} style={{ display: "flex" }}>
      <TournamentSingleRewards reward={tournament.prize} />
      <Row gutter={[20, 20]}>
        <Col span={24} md={12}>
          <CardWithLabel
            label={t("tournament date")}
            detail={`${dayjs(tournament.startDate).format("DD MMM")} - ${dayjs(
              tournament.endDate
            ).format("DD MMM")}`}
            icon={<CalendarOutlined style={{ color: "#8861f2" }} />}
          />
        </Col>
        <Col span={24} md={12}>
          <CardWithLabel
            label={t("tournament location")}
            detail={
              tournament.finalRoundLocation
                ? renderData(tournament, "finalRoundLocation", locale)
                : "-"
            }
            icon={<EnvironmentOutlined style={{ color: "#8861f2" }} />}
          />
        </Col>
      </Row>
      <Space
        size={10}
        direction="vertical"
        style={{ display: "flex", marginTop: 20 }}
      >
        <Title level={4}>{t("detail_2")}</Title>
        <div
          className="ctrlg-html"
          style={{ color: token.colorTextBase }}
          dangerouslySetInnerHTML={{
            __html: `${renderData(tournament, "description", locale)}`,
          }}
        />
      </Space>
      <Space
        size={10}
        direction="vertical"
        style={{ display: "flex", marginTop: 20 }}
      >
        <Title level={4}>{t("rules")}</Title>
        <Text>
          <div
            className="ctrlg-html"
            style={{ color: token.colorTextBase }}
            dangerouslySetInnerHTML={{
              __html: renderData(tournament, "qualificationRules", locale),
            }}
          />
        </Text>
      </Space>
    </Space>
  );
}
