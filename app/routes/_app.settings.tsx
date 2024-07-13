import { useTranslation } from "react-i18next";
import { Outlet } from "@remix-run/react";
import { type LoaderFunction } from "@remix-run/node";
import { Card, Col, Flex, Row, Space, Typography } from "antd";
import {
  MessageOutlined,
  UserOutlined,
  PlaySquareOutlined,
  ProfileOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { IoGameControllerOutline } from "react-icons/io5";
import { Media, TiltMenus } from "~/components/common";
import { AffixMenu } from "~/components/layouts";
import { mustAuthenticated } from "~/session.server";
import {
  Award,
  Gamepad2,
  MessagesSquare,
  SquareUser,
  Trophy,
  User,
} from "lucide-react";
const { Title } = Typography;

export const loader: LoaderFunction = async ({ params, request }) => {
  await mustAuthenticated(request);
  try {
    return null;
  } catch (e) {
    console.log("e", e);
  }
  return null;
};

export default function Settings() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto",
      }}
    >
      <Row gutter={[20, 0]}>
        <Col span={24} md={6}>
          <AffixMenu direction="vertical" offsetTop={20}>
            <Flex vertical gap={20}>
              <Media greaterThan="sm">
                <Title level={4} style={{ margin: 0 }}>
                  {t("settings")}
                </Title>
              </Media>
              <TiltMenus
                direction="vertical"
                menus={[
                  {
                    link: ".",
                    level: 1,
                    label: (
                      <Space size={10}>
                        <User />
                        {t("profile")}
                      </Space>
                    ),
                  },
                  {
                    link: "webboard",
                    label: (
                      <Space size={10}>
                        <MessagesSquare />
                        {t("webboard")}
                      </Space>
                    ),
                  },
                  {
                    link: "my-games",
                    label: (
                      <Space size={10}>
                        <Award />
                        {t("my games")}
                      </Space>
                    ),
                  },
                  {
                    link: "my-achievement",
                    label: (
                      <Space size={10}>
                        <Trophy />
                        {t("my achievement")}
                      </Space>
                    ),
                  },
                  {
                    link: "experiences",
                    label: (
                      <Space size={10}>
                        <Gamepad2 />
                        {t("experiences")}
                      </Space>
                    ),
                  },
                  {
                    link: "personal-details",
                    label: (
                      <Space size={10}>
                        <SquareUser />
                        {t("personal details")}
                      </Space>
                    ),
                  },
                ]}
              />
            </Flex>
          </AffixMenu>
        </Col>
        <Col span={24} md={18}>
          <Card style={{ borderRadius: 12 }} bodyStyle={{ padding: 30 }}>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
