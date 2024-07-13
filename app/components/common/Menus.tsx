import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Space, Switch, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { RightOutlined } from "@ant-design/icons";

import { Link } from "@remix-run/react";
import {
  BadgeHelp,
  Globe,
  Home,
  LogOut,
  MessagesSquare,
  Moon,
  Settings,
  Trophy,
  User,
  Users,
} from "lucide-react";

const { Text } = Typography;

export const Menus: any = (mode?: "center" | "dropdown" | "full") => {
  const { changeLanguage, changeScheme, locale, scheme } =
    useContext(AppContext);
  const { logout, user } = useContext(AuthContext);
  const { t } = useTranslation();

  const handleChangeLanguage = useCallback(
    (e: any) => {
      e.stopPropagation();
      changeLanguage(locale === "th" ? "en" : "th");
    },
    [locale]
  );

  const handleChangeScheme = (checked: boolean, e: any) => {
    e.stopPropagation();
    changeScheme(checked ? "dark" : "light");
  };

  const centerMenus = [
    {
      key: "/",
      link: "/",
      // , strokeWidth: 0.4
      label: <Home style={{ fontSize: 20 }} />,
      tooltip: t("home"),
    },
    {
      key: "/webboards",
      link: "/webboards",
      // , strokeWidth: 0.4
      label: <MessagesSquare style={{ fontSize: 20 }} />,
      tooltip: t("webboard"),
    },
    {
      key: "/parties",
      link: "/parties",
      label: <Users style={{ fontSize: 20 }} />,
      tooltip: t("party matching"),
    },
    {
      key: "/tournaments",
      link: "/tournaments",
      label: <Trophy style={{ fontSize: 20 }} />,
      tooltip: t("tournaments"),
    },
    {
      key: "/campaign",
      link: "/campaign",
      label: <BadgeHelp style={{ fontSize: 20 }} />,
      tooltip: t("campaign"),
    },
  ];

  const mobileMenus = [
    {
      key: "/",
      link: "/",
      label: (
        <Link to="/" style={{ color: "inherit" }}>
          <Space direction="horizontal" size={10}>
            <Home />
            {t("home")}
          </Space>
        </Link>
      ),
    },
    {
      key: "/webboards",
      link: "/webboards",
      label: (
        <Link to="/webboards" style={{ color: "inherit" }}>
          <Space direction="horizontal" size={10}>
            <MessagesSquare />
            {t("webboard")}
          </Space>
        </Link>
      ),
    },
    {
      key: "/parties",
      link: "/parties",
      label: (
        <Link to="/parties">
          <Space direction="horizontal" size={10}>
            <Users />
            {t("parties")}
          </Space>
        </Link>
      ),
    },
    {
      key: "/tournaments",
      link: "/tournaments",
      label: (
        <Link to="/tournaments">
          <Space direction="horizontal" size={10}>
            <Trophy />
            {t("tournament")}
          </Space>
        </Link>
      ),
    },
    {
      key: "/campaign",
      link: "/campaign",
      label: (
        <Link to="/campaign">
          <Space direction="horizontal" size={10}>
            <BadgeHelp />
            {t("campaign")}
          </Space>
        </Link>
      ),
    },
    {
      key: "2",
      type: "divider",
    },
  ];

  let dropdownMenus = [];
  if (user) {
    dropdownMenus.push({
      key: `/users/${user?.uuid}`,
      label: (
        <Link to={`/users/${user?.userName ? user.userName : user.uuid}`}>
          <Space direction="horizontal" size={10}>
            <User />
            {t("profile")}
          </Space>
        </Link>
      ),
    });
    dropdownMenus.push({
      key: `/settings`,
      label: (
        <Link to={`/settings`}>
          <Space direction="horizontal" size={10}>
            <Settings />
            {t("settings")}
          </Space>
        </Link>
      ),
    });
  }

  dropdownMenus = dropdownMenus.concat([
    // {
    //   key: "/faqs",
    //   label: (
    //     <Link to="/">
    //       <Space direction="horizontal" size={10}>
    //         <QuestionCircleOutlined />
    //         {t("FAQs")}
    //       </Space>
    //     </Link>
    //   ),
    // },
    {
      key: "locale",
      label: (
        <Row onClick={handleChangeLanguage}>
          <Col flex="auto">
            <Space direction="horizontal" size={10}>
              <Globe size={19} />
              {t("language")}
            </Space>
          </Col>
          <Col flex="none">
            <Space direction="horizontal" size={5}>
              <span style={{ textTransform: "uppercase" }}>{locale}</span>
              <RightOutlined />
            </Space>
          </Col>
        </Row>
      ),
    },
    {
      key: "scheme",
      label: (
        <Row onClick={(e: any) => e.stopPropagation()}>
          <Col flex="auto">
            <Space direction="horizontal" size={10}>
              <Moon />
              {t("darkmode")}
            </Space>
          </Col>
          <Col flex="none">
            <Switch
              size="small"
              onChange={handleChangeScheme}
              checked={scheme === "dark"}
            />
          </Col>
        </Row>
      ),
    },
  ]);

  if (user) {
    dropdownMenus.push({
      key: "logout",
      label: (
        <Space
          direction="horizontal"
          style={{ cursor: "pointer" }}
          size={10}
          onClick={logout}
        >
          <Text type="danger">
            <LogOut />
          </Text>
          <Text type="danger">{t("logout")}</Text>
        </Space>
      ),
    });
  }

  return { centerMenus, dropdownMenus, mobileMenus };
};
