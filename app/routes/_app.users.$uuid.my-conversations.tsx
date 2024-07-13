import { useTranslation } from "react-i18next";
import { Outlet } from "@remix-run/react";
import { type LoaderFunction } from "@remix-run/node";
import { Col, Flex, Row, Space } from "antd";
import { CommentOutlined, MessageOutlined } from "@ant-design/icons";
import { TiltMenus } from "~/components/common";
// import { getSessionFromRequest } from "~/session.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  // const session = await getSessionFromRequest(request);
  // const me = session.get("me");
  // const { uuid } = params;

  // if (!me || !me.uuid || `${me.uuid}` !== `${uuid}`) {
  //   return redirect("/");
  // }

  try {
    return null;
  } catch (e) {
    console.log("e", e);
  }
  return null;
};

export default function UserMyConversations() {
  const { t } = useTranslation();

  return (
    <Row gutter={[20, 0]}>
      <Col span={24} md={6}>
        <Flex vertical gap={20}>
          <TiltMenus
            direction="vertical"
            menus={[
              {
                link: ".",
                level: 3,
                label: (
                  <Space size={10}>
                    <MessageOutlined />
                    {t("my webboards")}
                  </Space>
                ),
              },
              {
                link: "comments",
                label: (
                  <Space size={10}>
                    <CommentOutlined />
                    {t("my comments")}
                  </Space>
                ),
              },
            ]}
          />
        </Flex>
      </Col>
      <Col span={24} md={18}>
        <Outlet />
      </Col>
    </Row>
  );
}
