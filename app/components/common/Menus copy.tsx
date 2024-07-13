import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Space, Switch, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import {
  // GiftOutlined,
  GlobalOutlined,
  HomeOutlined,
  LogoutOutlined,
  // QuestionCircleOutlined,
  RightOutlined,
  SettingOutlined,
  TrophyOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { FaRegMoon } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";

import { Link } from "@remix-run/react";
import { Globe } from "react-feather";
import { LogOut, Moon, Settings, User } from "lucide-react";

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
      label: <HomeOutlined style={{ fontSize: 20, strokeWidth: 0.4 }} />,
      tooltip: t("home"),
    },
    {
      key: "/webboards",
      link: "/webboards",
      label: (
        <VscCommentDiscussion style={{ fontSize: 20, strokeWidth: 0.4 }} />
      ),
      tooltip: t("webboard"),
    },
    {
      key: "/parties",
      link: "/parties",
      label: <UsergroupAddOutlined style={{ fontSize: 20 }} />,
      tooltip: t("party matching"),
    },
    {
      key: "/tournaments",
      link: "/tournaments",
      label: <TrophyOutlined style={{ fontSize: 20 }} />,
      tooltip: t("tournaments"),
    },
    {
      key: "/campaign",
      link: "/campaign",
      label: <GiftOutlined style={{ fontSize: 20 }} />,
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
            <HomeOutlined />
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
            <VscCommentDiscussion />
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
            <UsergroupAddOutlined />
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
            <TrophyOutlined />
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
            <GiftOutlined />
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
              <Globe />
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
              <Moon size={17} />
              {t("darkmode")}
            </Space>
          </Col>
          <Col flex="none">
            <Switch
              style={{ width: 10 }}
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
