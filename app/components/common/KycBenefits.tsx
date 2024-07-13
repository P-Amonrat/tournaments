import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Badge, Card, Col, Divider, Flex, Row, Typography } from "antd";
import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import { AppContext, AuthContext } from "~/contexts";

import { TiltButton } from "./TiltButton";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;

interface KycBenefitsProps {
  children?: any;
  onVerifyKyc?: () => void;
}

export const KycBenefits: React.FC<KycBenefitsProps> = (
  props: KycBenefitsProps
) => {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { children, onVerifyKyc } = props;
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);

  let cardStyle = {
    borderRadius: 10,
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  const generalLists: any[] = [
    t("can enter buy sell page"),
    t("create post with own profile"),
  ];

  const kycLists: any[] = [
    t("can create post and comment in buy sell room"),
    t("can create post and comment in anonymouse mode"),
    t("get verrified badge"),
  ];

  return (
    <Flex vertical gap={20}>
      <Flex vertical gap={10}>
        <Title level={3} style={{ margin: 0 }}>
          {t("KYC benefits")}
        </Title>
        <Text>
          {children
            ? children
            : t("start buy sell & anonymous after complete verification")}
        </Text>
      </Flex>
      <Row wrap={false}>
        <Col span={12} style={{ paddingTop: 75, paddingBottom: 25 }} order={0}>
          <Card
            bordered={false}
            style={{ ...cardStyle, height: "100%" }}
            bodyStyle={{ padding: 30 }}
          >
            <Flex vertical>
              <Title level={3} style={{ margin: 0, textAlign: "center" }}>
                {t("general user")}
              </Title>
              <Divider />
              {generalLists.map((item: any, index: number) => (
                <div key={`general-${index}`}>
                  <Flex gap={10} align="flex-start">
                    <CheckCircleOutlined
                      style={{ fontSize: "1.8em", color: "#7a6fee" }}
                    />
                    <Text>{item}</Text>
                  </Flex>
                  <Divider />
                </div>
              ))}
            </Flex>
          </Card>
        </Col>
        <Col span={12}>
          <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
            <Badge
              count={
                <CheckCircleFilled style={{ fontSize: 30, color: "#7a6fee" }} />
              }
              offset={[-8, 76]}
            >
              <Avatar
                size={90}
                src={
                  user.displayImage
                    ? `${cdnUrl}/${user.displayImage}`
                    : "image/placeholder.png"
                }
              />
            </Badge>
          </div>
          <Card
            bordered={false}
            style={{
              marginTop: -45,
              backgroundColor: "#cefb6a",
              ...cardStyle,
            }}
            bodyStyle={{ paddingBlock: 60, paddingInline: 30 }}
          >
            <Flex vertical>
              <Title
                level={3}
                style={{ margin: 0, textAlign: "center", color: "#231f20" }}
              >
                {t("verified user")}
              </Title>
              <Divider />
              {kycLists.map((item: any, index: number) => (
                <div key={`general-${index}`}>
                  <Flex gap={10} align="flex-start">
                    <CheckCircleOutlined
                      style={{ fontSize: "1.8em", color: "#7a6fee" }}
                    />
                    <Text style={{ color: "#231f20" }}>{item}</Text>
                  </Flex>
                  <Divider />
                </div>
              ))}
              {onVerifyKyc && (
                <TiltButton
                  color="dark"
                  style={{ padding: "15px 30px" }}
                  onClick={onVerifyKyc}
                >
                  {t("start verification")}
                </TiltButton>
              )}
            </Flex>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};
