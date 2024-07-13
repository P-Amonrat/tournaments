import { Button, Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

interface AcceptCookiesFormProps {
  onAccept: (accepted: boolean) => void;
}

export const AcceptCookiesForm: React.FC<AcceptCookiesFormProps> = (
  props: AcceptCookiesFormProps
) => {
  const { onAccept } = props;
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <Card
        style={{
          position: "absolute",
          left: "5%",
          bottom: 20,
          width: "90%",
        }}
      >
        <Title level={4} style={{ marginBottom: 5 }}>
          {t("cookies usage")}
        </Title>
        <Space direction="vertical" size={15}>
          <Text>
            {t("allow cookies messages")}
            <a
              style={{ marginLeft: "6px" }}
              href="/privacy-policies"
              target="_blank"
              rel="noreferrer"
            >
              {t("cookies policy")}
            </a>
          </Text>
          <Space wrap>
            <Button onClick={() => onAccept(false)}>{t("reject")}</Button>
            <Button
              type="primary"
              onClick={() => onAccept(true)}
              style={{ color: "#000" }}
            >
              {t("accept")}
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};
