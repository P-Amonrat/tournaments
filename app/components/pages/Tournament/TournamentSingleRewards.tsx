import { Card, Col, Row, Space, theme, Typography } from "antd";
import { toNumber } from "lodash";
import { useTranslation } from "react-i18next";
const { useToken } = theme;
const { Text, Title } = Typography;

interface TournamentSingleRewardsProps {
  reward: any[];
}

export function TournamentSingleRewards(props: TournamentSingleRewardsProps) {
  const { t } = useTranslation();
  const { reward } = props;
  const { token } = useToken();

  return (
    <Row
      style={{
        position: "relative",
        paddingBottom: "5px",
        // paddingBlock: 20,
        // paddingInline: "3.5%",
        overflowX: "auto",
        scrollbarColor: "#999 transparent",
        scrollbarWidth: "thin",
      }}
      gutter={[20, 20]}
      wrap={false}
    >
      {reward
        .filter((r: any) => r !== "") // Filter out rewards with empty string values
        .map((r: any, index: number) => (
          <Col
            span={reward.length >= 3 ? 8 : 24 / reward.length}
            key={`reward-${index}`}
          >
            <Card
              bordered={false}
              bodyStyle={{ padding: 15 }}
              style={{
                height: "100%",
                borderRadius: 10,
                backgroundColor:
                  index === 0
                    ? "#8861f2"
                    : index === 1
                    ? token.colorPrimary
                    : token.colorBgBase,
              }}
            >
              <Space direction="vertical">
                <Text
                  style={
                    index === 0
                      ? { color: "#fff" }
                      : index === 1
                      ? { color: "#000" }
                      : {}
                  }
                >
                  {`${t("reward #")} ${index + 1}`}
                </Text>
                <Title
                  level={3}
                  style={
                    index === 0
                      ? { color: "#fff", margin: 0 }
                      : index === 1
                      ? { color: "#000", margin: 0 }
                      : { margin: 0 }
                  }
                >
                  {toNumber(r)
                    ? `${toNumber(r).toLocaleString()} ${t("thb")}`
                    : r}
                </Title>
              </Space>
            </Card>
          </Col>
        ))}
    </Row>
    // <Row gutter={[20, 20]}>
    //   {reward
    //     .filter((r: any) => r !== "") // Filter out rewards with empty string values
    //     .map((r: any, index: number) => (
    //       <Col span={24} md={columnWidth} key={`reward-${index}`}>
    //         <Card
    //           bordered={false}
    //           bodyStyle={{ padding: 15 }}
    //           style={{
    //             height: "100%",
    //             borderRadius: 10,
    //             backgroundColor:
    //               index === 0
    //                 ? "#8861f2"
    //                 : index === 1
    //                 ? token.colorPrimary
    //                 : token.colorBgBase,
    //           }}
    //         >
    //           <Space direction="vertical">
    //             <Text
    //               style={
    //                 index === 0
    //                   ? { color: "#fff" }
    //                   : index === 1
    //                   ? { color: "#000" }
    //                   : {}
    //               }
    //             >
    //               {`${t("reward #")} ${index + 1}`}
    //             </Text>
    //             <Title
    //               level={3}
    //               style={
    //                 index === 0
    //                   ? { color: "#fff", margin: 0 }
    //                   : index === 1
    //                   ? { color: "#000", margin: 0 }
    //                   : { margin: 0 }
    //               }
    //             >{`${toNumber(r).toLocaleString()} ${t("thb")}`}</Title>
    //           </Space>
    //         </Card>
    //       </Col>
    //     ))}
    // </Row>
  );
}
