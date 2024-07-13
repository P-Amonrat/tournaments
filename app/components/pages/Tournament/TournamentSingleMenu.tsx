import { useTranslation } from "react-i18next";
// import { Space } from "antd";
// import { EditOutlined } from "@ant-design/icons";

export const TournamentSingleMenu: any = (isOrganizer: boolean) => {
  const { t } = useTranslation();
  const menus = [
    {
      link: ".",
      level: 2,
      label: <span>{t("detail_1")}</span>,
    },
    {
      link: "schedule",
      label: <span>{t("tournament schedule")}</span>,
    },
    {
      link: "teams",
      label: <span>{t("participants")}</span>,
    },
    {
      link: "webboard",
      label: <span>{t("tournament board")}</span>, 
    },
  ];

  // if (isOrganizer) {
  //   menus.push({
  //     link: "edit",
  //     label: (
  //       <Space size={5}>
  //         <EditOutlined /> {t("edit")}
  //       </Space>
  //     ),
  //   });
  // }
  return { menus };
};
