import { useContext } from "react";
import { Link } from "@remix-run/react";
import { Card, Col, Divider, Empty, Row, Space, theme, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { AppContext } from "~/contexts";
import { AlbumIndexEntry } from "./AlbumIndexEntry";
import { LuImage } from "react-icons/lu";
import { Book } from "lucide-react";
const { useToken } = theme;
const { Text, Title } = Typography;

interface MyAlbumsSectionProps {
  data: any;
  uuid: string;
}

export function MyAlbumsSection(props: MyAlbumsSectionProps) {
  const { t } = useTranslation();
  const { data, uuid } = props;
  const { token } = useToken();
  const { scheme } = useContext(AppContext);
  const newData = data.slice(0, 7);

  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow:
          scheme === "dark"
            ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)"
            : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none",
      }}
    >
      <Row
        justify="space-between"
        style={{ alignItems: "center" }}
        gutter={[0, 10]}
      >
        <Col flex="auto">
          <Space
            style={{
              fontWeight: 600,
              marginRight: "10px",
              fontSize: "24px",
            }}
          >
            <Book style={{ color: "#7C6FF6" }} />
            <Text style={{ fontSize: "24px", fontWeight: 600 }}>
              {t("my albums")}
            </Text>
          </Space>
        </Col>
      </Row>
      <Divider style={{ marginBlock: 10 }} />
      {newData && newData.length ? (
        <Row gutter={[30, 30]}>
          {newData.slice(0, 2).map((album: any, index: number) => (
            <Col key={index} span={12} md={8}>
              <AlbumIndexEntry album={album} uuid={uuid} />
            </Col>
          ))}
          {data.length > 2 && (
            <Col span={12} md={8}>
              <Link to="my-album">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "60%",
                    borderRadius: 12,
                    backgroundColor: token.colorBgLayout,
                  }}
                >
                  <Title
                    level={5}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      margin: 0,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {t("view more")}
                  </Title>
                </div>
              </Link>
            </Col>
          )}
        </Row>
      ) : (
        <Empty description={<span>{t("no data")}</span>} />
      )}
    </Card>
  );
}
