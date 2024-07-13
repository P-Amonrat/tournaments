import { useContext } from "react";
import { Card, Col, Divider, Empty, Flex, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { MyAchievementProfileEntry } from "./MyAchievementProfileEntry";
import { FaCircle } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { AppContext } from "~/contexts";
import { Trophy } from "lucide-react";
const { Text } = Typography;

interface MyAcheivementProfileSectionProps {
  data: any;
  type?: string;
}

export function MyAcheivementProfileSection(
  props: MyAcheivementProfileSectionProps
) {
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = useContext(AppContext);

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
            <Trophy style={{ color: "#7C6FF6" }} />
            <Text style={{ fontSize: "24px", fontWeight: 600 }}>
              {t("my achievement")}
            </Text>
          </Space>
        </Col>
        <Col>
          <Space direction="horizontal" size={12} wrap>
            <Space direction="horizontal" size={5} align="center">
              <FaCircle style={{ color: "#D4FB6F" }} />
              {data[0].title}
            </Space>
            <Space direction="horizontal" size={5} align="center">
              <FaCircle style={{ color: "#7C6FF6" }} />
              {data[1].title}
            </Space>
            <Space direction="horizontal" size={5} align="center">
              <FaCircle style={{ color: "#E3E3E3" }} />
              {data[2].title}
            </Space>
          </Space>
        </Col>
      </Row>
      <Divider style={{ marginBlock: 15 }} />

      {data[0].userAchievements?.length > 0 ||
      data[1].userAchievements?.length > 0 ||
      data[2].userAchievements?.length > 0 ? (
        <Flex
          gap={0}
          align="flex-start"
          style={{ overflow: "auto", marginInline: -18, paddingInline: 8 }}
          className="hide-scrollbar"
        >
          {data[0]
            ? data[0]?.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index} style={{ padding: 10 }}>
                    <MyAchievementProfileEntry
                      data={achievement}
                      type={data[0].type}
                    />
                  </div>
                )
              )
            : null}
          {data[1]
            ? data[1]?.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index} style={{ padding: 10 }}>
                    <MyAchievementProfileEntry
                      data={achievement}
                      type={data[1].type}
                    />
                  </div>
                )
              )
            : null}
          {data[2]
            ? data[2]?.userAchievements.map(
                (achievement: any, index: number) => (
                  <div key={index} style={{ padding: 10 }}>
                    <MyAchievementProfileEntry
                      data={achievement}
                      type={data[2].type}
                    />
                  </div>
                )
              )
            : null}
        </Flex>
      ) : (
        <Empty description={<span>{t("no data")}</span>} />
      )}
    </Card>
  );
}
