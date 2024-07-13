import React from "react";
import { Card, Space, Typography, theme } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
const { useToken } = theme;
const { Text } = Typography;

interface TournamentEntryLabelProps {
  status: string;
  startDate?: string;
  endDate?: string;
}

export function TournamentEntryLabel(props: TournamentEntryLabelProps) {
  const { status, startDate, endDate } = props;
  const { token } = useToken();
  const { t } = useTranslation();
  let label: React.ReactNode;

  switch (status) {
    case "ongoing":
      label = <Text style={{ color: "#000" }}>{t("tournament ongoing")}</Text>;
      break;
    case "upcoming":
      label = (
        <Space direction="horizontal" size={5} wrap>
          <Text>{t("opening registration")}</Text>
          {startDate && (
            <Text style={{ fontWeight: 600 }}>
              {dayjs(startDate).format("DD MMM YYYY")}
            </Text>
          )}
        </Space>
      );
      break;
    case "finished":
      label = <Text>{t("tournament finished")}</Text>;
      break;
    default:
      label = (
        <Space direction="horizontal" size={5} wrap>
          <Text>{t("opening registration")}</Text>
          {startDate && (
            <Text style={{ fontWeight: 600 }}>
              {`${t("today")} - ${dayjs(endDate).format("DD MMM YYYY")}`}
            </Text>
          )}
        </Space>
      );
      break;
  }

  return (
    <Card
      bodyStyle={{ padding: 10, textAlign: "center" }}
      bordered={false}
      style={{
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor:
          status === "ongoing" ? token.colorPrimary : token.colorBgBase,
      }}
    >
      {label}
    </Card>
  );
}
