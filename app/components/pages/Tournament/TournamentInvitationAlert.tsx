import { Button, Card, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface TournamentInvitationAlertProps {
  data: any;
  onClick: (team: any) => void;
}

export function TournamentInvitationAlert(
  props: TournamentInvitationAlertProps
) {
  const { data, onClick } = props;
  const { t } = useTranslation();

  if (!data || data.length <= 0) {
    return null;
  }

  return (
    <Card
      bodyStyle={{ padding: "10px 15px" }}
      bordered={false}
      style={{
        backgroundColor: "#7164f4",
        color: "#fff",
        border: 0,
        marginTop: 30,
      }}
    >
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Space size={5}>
          <InfoCircleOutlined />
          {`${t("tournament invitation to")} "${data.name}"`}
        </Space>
        <Button
          type="primary"
          size="middle"
          style={{ color: "#000", borderRadius: 4 }}
          onClick={(e: any) => onClick(data)}
        >
          {t("join")}
        </Button>
      </Space>
    </Card>
  );
}
