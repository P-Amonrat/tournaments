import { Link, useMatches } from "@remix-run/react";
import { Card, Col, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Author, OverlayBg } from "~/components/common";
const { Title } = Typography;

interface WebboardIndexSliderProps {
  data: any[];
}

export function WebboardIndexSlider(props: WebboardIndexSliderProps) {
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();

  return (
    <Row
      className="hide-scrollbar"
      style={{
        position: "relative",
        paddingBlock: 20,
        paddingInline: "3.5%",
        overflowX: "auto",
      }}
      gutter={10}
      wrap={false}
    >
      {data.map((webboard: any) => (
        <Col
          span={12}
          md={8}
          lg={6}
          xl={4}
          xxl={4}
          key={webboard.id}
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "120%",
            }}
          >
            <Link to={`/webboards/${webboard.id}`}>
              <Card
                bordered={false}
                style={{
                  position: "absolute",
                  display: "flex",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  borderRadius: 12,
                  backgroundImage: `url(${
                    webboard.thumbnailImage
                      ? `${cdnUrl}/${webboard.thumbnailImage}`
                      : "/image/CTRLG-logo-banner.jpg"
                  })`,
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  flex: "auto",
                  paddingBottom: 20,
                  alignItems: "end",
                }}
              >
                <OverlayBg />
                <Space
                  direction="vertical"
                  size={10}
                  style={{ position: "relative", color: "#fff" }}
                >
                  <Title
                    level={3}
                    className="text-with-ellipsis"
                    style={{ color: "inherit", margin: 0 }}
                  >
                    {webboard.title}
                  </Title>
                  <Author
                    avatarSize={24}
                    fontSize={14}
                    displayImage={
                      webboard.anonymous
                        ? "/image/avatar-anonymous.jpg"
                        : `${cdnUrl}/${webboard.author.displayImage}`
                    }
                  >
                    {webboard.anonymous
                      ? t("anonymous")
                      : webboard.author.displayName}
                  </Author>
                </Space>
              </Card>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
}
