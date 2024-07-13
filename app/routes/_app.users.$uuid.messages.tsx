import { useCallback } from "react";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { redirect, type LoaderFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { isEmpty, isNil, omitBy } from "lodash";
import { Card, Col, Empty, Flex, Row, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Pagination, TiltMenus, dummyNotifications } from "~/components/common";
import { AffixMenu } from "~/components/layouts";
import { getSessionFromRequest, mustAuthenticated } from "~/session.server";
import * as APIServer from "~/api";
import { UserNotificationEntry } from "~/components/pages/User/UserNotificationEntry";

export const loader: LoaderFunction = async ({ params, request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  const me = session.get("me");
  const { uuid } = params;

  if (
    !me ||
    !me.uuid ||
    (`${me.uuid}` !== `${uuid}` && `${me?.userName}` !== `${uuid}`)
  ) {
    return redirect("/");
  }

  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  // let unreadNotificationsCount = 0;
  let notifications: any = null;
  try {
    // const resUnreadNoti = await APIServer.clientFromSession(session).request(
    //   APIServer.getUnreadNotificationsCount()
    // );
    // if (resUnreadNoti.data) {
    //   unreadNotificationsCount = resUnreadNoti.data.count;
    // }
    const notificationRes = await APIServer.clientFromSession(session).request(
      APIServer.getNotifications(searchParams)
    );
    if (notificationRes.data) {
      notifications = notificationRes.data;
    }

    await APIServer.clientFromSession(session).request(
      APIServer.readAllNotifications()
    );
  } catch (e) {
    notifications = dummyNotifications; // FIXME: remove this out
    console.log("e", e);
  }
  return {
    notifications,
    // unreadNotificationsCount,
    searchParams,
    uuid,
  };
};

export default function UserMessagesIndex() {
  const { t } = useTranslation();
  const { notifications, searchParams, uuid } = useLoaderData();
  const submit = useSubmit();

  const handleChangePage = useCallback(
    (page: number) => {
      const newSearchParams = { ...searchParams } as any;
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get" }
      );
    },
    [searchParams, submit]
  );

  return (
    <Row gutter={[20, 0]}>
      <Col span={24} md={6}>
        <AffixMenu direction="vertical" offsetTop={20}>
          <Flex gap={20} vertical>
            <TiltMenus
              direction="vertical"
              menus={[
                {
                  link: `/users/${uuid}/messages`,
                  level: 3,
                  label: (
                    <Space size={10}>
                      {/* <Badge count={unreadNotificationsCount}> */}
                      <BellOutlined />
                      {/* </Badge> */}
                      {t("all notifications")}
                    </Space>
                  ),
                },
              ]}
            />
          </Flex>
        </AffixMenu>
      </Col>
      <Col span={24} md={18}>
        {notifications &&
        notifications.items &&
        notifications.items.length > 0 ? (
          <>
            <Flex vertical gap={20}>
              {notifications.items.map((item: any) => (
                <UserNotificationEntry data={item} key={item.id} />
              ))}
            </Flex>
            {notifications.totalPages > 1 && (
              <Pagination
                currentPage={notifications.page}
                totalPages={notifications.totalPages}
                onPageClicked={handleChangePage}
              />
            )}
          </>
        ) : (
          <Card>
            <Empty description={t("no notifications")} />
          </Card>
        )}
      </Col>
    </Row>
  );
}
