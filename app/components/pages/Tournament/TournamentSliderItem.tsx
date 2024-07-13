import { useTranslation } from "react-i18next";
import {
  Avatar,
  Card,
  Col,
  Row,
  Skeleton,
  Space,
  Tag,
  theme,
  Typography,
} from "antd";
import { TournamentDate, TournamentReward } from ".";
import { useMatches, useNavigate } from "@remix-run/react";
import { Author } from "~/components/common";
import { renderData } from "~/utils/helper";
import { useContext } from "react";
import { AppContext } from "~/contexts";
const { useToken } = theme;
const { Title } = Typography;

interface TournamentSliderItemProps {
  data: any;
  loading?: boolean;
}

export function TournamentSliderItem(props: TournamentSliderItemProps) {
  const { t } = useTranslation();
  const { data, loading } = props;
  const { token } = useToken();
  const { locale } = useContext(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const navigate = useNavigate();
  const itemStyle = {
    position: "relative",
    display: "flex",
    height: 400,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      data && data.bannerImageUrl && data.bannerImageUrl !== "-"
        ? `url("${cdnUrl}/${data.bannerImageUrl}")`
        : undefined,
    cursor: "pointer",
  } as any;
  const itemBodyStyle = {
    display: "flex",
    flex: "auto",
    paddingBottom: 48,
    alignItems: "end",
  } as any;
  const itemHeadStyle = {
    position: "relative",
    border: 0,
    flex: "0 0 auto",
    zIndex: 1,
  } as any;
  const overlayStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
  } as any;

  const handleItemClicked = () => {
    navigate(`/tournaments/${data.id}`);
  };

  return (
    <Card
      bordered={false}
      onClick={handleItemClicked}
      style={itemStyle}
      bodyStyle={itemBodyStyle}
      headStyle={itemHeadStyle}
      title={
        <Tag
          color={token.colorPrimary}
          style={{ color: "#201d1d", fontWeight: 600 }}
        >
          {t("featured tournament")}
        </Tag>
      }
    >
      <div style={overlayStyle} />
      {loading ? (
        <Skeleton active />
      ) : (
        <Space
          direction="vertical"
          size={10}
          style={{ display: "flex", position: "relative" }}
        >
          {data.game && data.game.iconUrl && (
            <Avatar
              size={45}
              src={
                data.game.iconUrl && data.game.iconUrl !== "-"
                  ? `${cdnUrl}/${data.game.iconUrl}`
                  : ""
              }
            >
              {data.game.name}
            </Avatar>
          )}
          <Title level={2} style={{ margin: 0, color: "#fff" }}>
            {renderData(data, "name", locale)}
          </Title>
          <Row style={{ color: "#fff" }} gutter={[15, 10]} wrap>
            <Col>
              <TournamentReward reward={data.prize[0]} />
            </Col>
            <Col>
              <TournamentDate
                startDate={data.startDate}
                endDate={data.endDate}
              />
            </Col>
            {data.organizer && data.organizer.displayName && (
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
            )}
          </Row>
        </Space>
      )}
    </Card>
  );
}
