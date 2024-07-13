import {
  Avatar,
  Card,
  Col,
  Row,
  Skeleton,
  Space,
  theme,
  Typography,
} from "antd";
import { TournamentDate } from ".";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { Author } from "~/components/common";
import { renderData } from "~/utils/helper";
import { useContext } from "react";
import { AppContext } from "~/contexts";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;
const { useToken } = theme;

interface TournamentHeroProps {
  data: any;
  loading?: boolean;
}

export function TournamentHero(props: TournamentHeroProps) {
  const { token } = useToken();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const { locale } = useContext(AppContext);
  const { data, loading } = props;
  const cardStyle = {
    position: "relative",
    display: "flex",
    height: 350,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.bannerImageUrl
        ? `url("${cdnUrl}/${data.bannerImageUrl}")`
        : undefined,
  } as any;
  const bodyStyle = {
    display: "flex",
    flex: "auto",
    alignItems: "end",
    width: "100%",
    paddingInline: "3.5%",
    maxWidth: 1440,
    marginInline: "auto",
    paddingBlock: 20,
  } as any;
  const overlayStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  } as any;

  return (
    <>
      <Card bordered={false} style={cardStyle} bodyStyle={bodyStyle}>
        <div style={overlayStyle} />
        {loading ? (
          <Skeleton active />
        ) : (
          <Space size={15} style={{ display: "flex", position: "relative" }}>
            <Avatar
              size={72}
              src={data.game.iconUrl ? `${cdnUrl}/${data.game.iconUrl}` : ""}
            >
              {data.game.name}
            </Avatar>
            <Space direction="vertical" size={5}>
              <Title level={2} style={{ margin: 0, color: "#fff" }}>
                {renderData(data, "name", locale)}
              </Title>
              <Row style={{ color: "#fff" }} gutter={[15, 10]} wrap>
                <Col>
                  <TournamentDate
                    startDate={data.startDate}
                    endDate={data.endDate}
                  />
                </Col>
                <Col>
                  <Author
                    displayImage={
                      data.organizer && data.organizer.displayImage
                        ? `${cdnUrl}/${data.organizer.displayImage}`
                        : undefined
                    }
                  >
                    {data.organizer.displayName}
                  </Author>
                </Col>
              </Row>
            </Space>
          </Space>
        )}
      </Card>
      <div
        style={{ paddingInline: "3.5%", maxWidth: 1440, marginInline: "auto" }}
      >
        <Card
          bodyStyle={{ padding: "10px 15px" }}
          bordered={false}
          style={{
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: token.colorBgBase,
          }}
        >
          <Space
            style={{ display: "flex", justifyContent: "space-between" }}
            wrap
          >
            <Space size={5}>
              <Text>{t("opening registration")}</Text>
              <Text style={{ fontWeight: 600 }}>
                {dayjs(data.registrationStartDate).format("DD MMM YYYY")}
              </Text>
            </Space>
            <Space size={5}>
              <Text>{t("participants")}</Text>
              <Card
                style={{ borderRadius: 6, backgroundColor: "transparent" }}
                bodyStyle={{ padding: "0 10px" }}
              >
                <Space size={4}>
                  <Text style={{ fontWeight: 600, fontSize: "1.5em" }}>
                    {data.maxTeam.toLocaleString()}
                  </Text>
                  <Text style={{ fontSize: "0.9em" }}>{t("teams")}</Text>
                </Space>
              </Card>
            </Space>
          </Space>
        </Card>
      </div>
    </>
  );
}
