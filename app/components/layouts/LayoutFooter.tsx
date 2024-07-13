import React, { useContext } from "react";
import { Col, Image, Layout, Row, Space, theme, Typography } from "antd";
import { AppContext } from "~/contexts";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Media } from "../common";
const { Text } = Typography;
const { useToken } = theme;
const { Footer } = Layout;

export const LayoutFooter: React.FC<{}> = () => {
  const { scheme } = useContext(AppContext);
  const { token } = useToken();
  const { t } = useTranslation();

  const footerTopPart = (
    direction: "horizontal" | "vertical",
    space: number
  ) => {
    return (
      <Space size={space} direction={direction}>
        <Image
          preview={false}
          src={`/image/logo-with-text-${scheme}.png`}
          width={150}
          wrapperStyle={
            direction === "vertical"
              ? { marginBottom: 30 }
              : { marginRight: 50 }
          }
        />
        <Link to="/">
          <Text style={{ fontSize: "1.2em" }}>{t("home")}</Text>
        </Link>
        <Link to="/about">
          <Text style={{ fontSize: "1.2em" }}>{t("about")}</Text>
        </Link>
        <Link to="/contact">
          <Text style={{ fontSize: "1.2em" }}>{t("contact")}</Text>
        </Link>
        <Link to="/feedback">
          <Text style={{ fontSize: "1.2em" }}>{t("feedback")}</Text>
        </Link>
      </Space>
    );
  };

  return (
    <Footer
      style={{
        padding: "40px 0 0",
        backgroundColor: token.colorBgContainer,
        zIndex: 11,
      }}
    >
      <Space
        direction="vertical"
        size={30}
        style={{
          display: "flex",
          paddingInline: "3.5%",
          maxWidth: 1440,
          marginInline: "auto",
          paddingBottom: 20,
        }}
      >
        <Media greaterThan="sm">{footerTopPart("horizontal", 40)}</Media>
        <Media at="sm">{footerTopPart("vertical", 20)}</Media>
        <Row gutter={[15, 15]}>
          <Col xs={24} flex="auto">
            <Text>© CTRL G</Text>
          </Col>
          <Col xs={24} flex="none">
            <Media greaterThan="sm">
              <Space size={20}>
                <a href="/privacy-policies" target="_blank">
                  <Text>{t("privacy")}</Text>
                </a>
                <a href="/terms-of-service" target="_blank">
                  <Text>{t("terms")}</Text>
                </a>
              </Space>
            </Media>
            <Media at="sm">
              <Space size={20}>
                <a href="/privacy-policies" target="_blank">
                  <Text style={{ fontSize: "0.8em" }}>{t("privacy")}</Text>
                </a>
                <a href="/terms-of-service" target="_blank">
                  <Text style={{ fontSize: "0.8em" }}>{t("terms")}</Text>
                </a>
              </Space>
            </Media>
          </Col>
        </Row>
      </Space>
      <Row>
        <Col span={24} md={16} />
        <Col span={24} md={8}>
          <div
            style={{
              height: 20,
              width: "100%",
              backgroundImage: "url('/image/stripe.png')",
            }}
          />
        </Col>
      </Row>
    </Footer>
  );
};
