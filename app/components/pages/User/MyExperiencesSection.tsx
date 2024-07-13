import { useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Row,
  Space,
  Timeline,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { AppContext } from "~/contexts";
import { Gamepad2 } from "lucide-react";
const { Text, Title } = Typography;

interface MyExperiencesSectionProps {
  data: any;
}

export function MyExperiencesSection(props: MyExperiencesSectionProps) {
  const { t } = useTranslation();
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size
  const [displayLimit, setDisplayLimit] = useState(1); // Initialize with 1 to show the first item
  const { scheme } = useContext(AppContext);

  const expData = data.filter(
    (item: any) =>
      Array.isArray(item.userExperiences) && item.userExperiences.length > 0
  );

  const isAllEmpty = expData.length === 0;

  // Function to handle "Load More" click
  const handleLoadMore = () => {
    setDisplayLimit(displayLimit + 1000); // Increase the limit by 1
  };

  const handleLoadLess = () => {
    setDisplayLimit(displayLimit - 1000); // Increase the limit by 1
  };

  useEffect(() => {
    // Listen for changes in screen size and update state variable accordingly
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Gamepad2 style={{ color: "#7C6FF6" }} />
            <Text style={{ fontSize: "24px", fontWeight: 600 }}>
              {t("my experiences")}
            </Text>
          </Space>
        </Col>
      </Row>
      <Divider style={{ marginBlock: 10, marginBottom: "25px" }} />
      {!isAllEmpty ? (
        <>
          <Space direction="vertical" style={{ display: "flex" }}>
            {expData
              .slice(0, displayLimit)
              .map((experience: any, index: number) => (
                <Space
                  direction="vertical"
                  key={index}
                  style={{ display: "flex" }}
                >
                  <Space
                    direction="vertical"
                    style={{ display: "flex" }}
                    size="large"
                  >
                    {experience.userExperiences[0] && (
                      <Space>
                        <Avatar
                          src={`${cdnUrl}/${
                            experience.rankingGame?.icon
                              ? experience.rankingGame?.icon
                              : experience?.icon
                              ? experience.icon
                              : null
                          }`}
                          size={64}
                          style={{
                            boxShadow:
                              scheme === "dark"
                                ? "0px 5px 10px -2px rgba(0, 0, 0, 0.6)"
                                : "0px 5px 10px -2px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                        <Text style={{ fontWeight: 600, fontSize: "24px" }}>
                          {experience.rankingGame?.name
                            ? experience.rankingGame.name
                            : experience.title}
                        </Text>
                      </Space>
                    )}

                    <div style={{ marginLeft: "25px" }}>
                      <Timeline
                        items={experience.userExperiences.map(
                          (experienceItem: any, index: number) => ({
                            key: index,
                            children: (
                              <Row justify="space-between">
                                <Col
                                  span={screenSize === "greaterThanSM" ? 8 : 24}
                                >
                                  <Title level={5}>{experienceItem.name}</Title>
                                  <Text>
                                    {dayjs(experienceItem.startDate).format(
                                      "MMM YYYY"
                                    )}{" "}
                                    -{" "}
                                    {experienceItem.endDate
                                      ? dayjs(experienceItem.endDate).format(
                                          "MMM YYYY"
                                        )
                                      : t("present")}
                                  </Text>
                                </Col>
                                <Col
                                  span={
                                    screenSize === "greaterThanSM" ? 16 : 24
                                  }
                                >
                                  {experienceItem.description}
                                </Col>
                              </Row>
                            ),
                          })
                        )}
                      />
                    </div>
                  </Space>
                </Space>
              ))}
          </Space>
          {displayLimit < data.length && !isAllEmpty && (
            // Conditionally show "Load More"
            <Button
              type="text"
              onClick={handleLoadMore}
              style={{
                display: "flex",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <Space>
                {t("load more")}
                {/* <ArrowDownOutlined style={{ color: "#7C6FF6" }} /> */}
                <FaAngleDoubleDown
                  style={{ color: "#7C6FF6", marginTop: "7px" }}
                />
              </Space>
            </Button>
          )}
          {displayLimit > data.length && !isAllEmpty && (
            // Conditionally show "Load More"
            <Button
              type="text"
              onClick={handleLoadLess}
              style={{
                display: "flex",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <Space>
                {t("load less")}
                {/* <ArrowDownOutlined style={{ color: "#7C6FF6" }} /> */}
                <FaAngleDoubleUp
                  style={{ color: "#7C6FF6", marginTop: "7px" }}
                />
              </Space>
            </Button>
          )}
        </>
      ) : (
        <Empty description={<span>{t("no data")}</span>} />
      )}
    </Card>
  );
}
