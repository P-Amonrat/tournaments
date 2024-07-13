import { Avatar, Card, Col, Flex, Row, Space, Typography } from "antd";
import { EnvironmentOutlined, MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
import { Mail } from "lucide-react";

const { Text, Title } = Typography;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          height: "40vh",
          backgroundImage: `url("/image/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          paddingInline: "3.5%",
          paddingBlock: 50,
          maxWidth: 1100,
          marginInline: "auto",
        }}
      >
        <Card bordered={false} bodyStyle={{ padding: 40 }}>
          <Title level={1} style={{ marginTop: 0, marginBottom: 30 }}>
            {t("contact")}
          </Title>
          <Flex vertical gap={20}>
            <Flex gap={20} align="baseline">
              <div style={{ paddingTop: 6 }}>
                <EnvironmentOutlined style={{ fontSize: 20 }} />
              </div>
              <Flex vertical gap={6}>
                <Text style={{ fontSize: 18 }}>{t("address paragraph 1")}</Text>
                <Text style={{ fontSize: 18 }}>{t("address paragraph 2")}</Text>
              </Flex>
            </Flex>
            <Flex gap={20} align="baseline">
              <div style={{ paddingTop: 10 }}>
                <Mail style={{ fontSize: 20 }} />
              </div>
              <Flex vertical gap={6}>
                <Text style={{ fontSize: 18 }}>pasavit@ctrlg.gg</Text>
                <Text style={{ fontSize: 18 }}>mintauka@ctrlg.gg</Text>
              </Flex>
            </Flex>
            <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
              {t("contact paragraph 1")}
            </Text>
            <Row gutter={15}>
              <Col span={24} md={8}>
                <Link to="https://www.facebook.com/ctrlg.platform?mibextid=LQQJ4d">
                  <Space size={10}>
                    <Avatar src="/image/social/facebook.png" size={30} />
                    <Text style={{ fontSize: 18 }}>ctrlg.platform</Text>
                  </Space>
                </Link>
              </Col>

              <Col span={24} md={8}>
                <Link to="https://youtube.com/@CTRLG.PLATFORM?si=OvpDc2Tyf7UaRviZ">
                  <Space size={10}>
                    <Avatar src="/image/social/youtube.png" size={30} />
                    <Text style={{ fontSize: 18 }}>@ctrlg.platform</Text>
                  </Space>
                </Link>
              </Col>
              <Col span={24} md={8}>
                <Link to="https://www.tiktok.com/@ctrlg.gg?_t=8go9chi62Fe&_r=1">
                  <Space size={10}>
                    <Avatar
                      src="/image/social/tiktok.svg"
                      size={30}
                      style={{ backgroundColor: "#000", padding: 5 }}
                    />
                    <Text style={{ fontSize: 18 }}>@ctrlg.gg</Text>
                  </Space>
                </Link>
              </Col>
            </Row>
          </Flex>
        </Card>
      </div>
    </>
  );
}
