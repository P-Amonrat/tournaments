import { useContext, useState } from "react";
import { Card, Col, Divider, Empty, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { AppContext } from "~/contexts";
import { LuFileText } from "react-icons/lu";
const { Text } = Typography;

interface MyDetailsSectionProps {
  data: any;
}

export function MyDetailsSection(props: MyDetailsSectionProps) {
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = useContext(AppContext);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

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
            <LuFileText style={{ color: "#7C6FF6" }} />
            <Text style={{ fontSize: "24px", fontWeight: 600 }}>
              {t("my personal details")}
            </Text>
          </Space>
        </Col>
      </Row>
      <Divider style={{ marginBlock: 10 }} />
      {data && data.length ? (
        <Space direction="vertical" size={10}>
          <ul className={`tilt-menu ${scheme}`}>
            {data.map((personalDetail: any, index: number) => (
              <li
                key={index}
                className="tilt-menu-item"
                onClick={() => setActiveTabIndex(index)}
              >
                <span
                  className={`tilt-menu-link${
                    activeTabIndex == index ? " active" : ""
                  }`}
                >
                  <Text style={{ color: "inherit" }}>
                    {personalDetail.title}
                  </Text>
                </span>
              </li>
            ))}
          </ul>
          {data.map((personalDetail: any, index: number) => (
            <div
              key={`data-${index}`}
              style={{
                display: activeTabIndex === index ? "block" : "none",
                marginTop: 10,
              }}
            >
              <div
                className="ctrlg-html"
                dangerouslySetInnerHTML={{
                  __html: `${personalDetail.detail}`,
                }}
              />
            </div>
          ))}
        </Space>
      ) : (
        <Empty description={<span>{t("no data")}</span>} />
      )}
    </Card>
  );
}
