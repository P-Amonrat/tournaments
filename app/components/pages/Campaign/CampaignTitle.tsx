import { useTranslation } from "react-i18next";
import { Flex, Typography } from "antd";

const { Text, Title } = Typography;

export function CampaignTitle() {
  const { t } = useTranslation();

  return (
    <Flex
      vertical
      gap={0}
      justify="center"
      style={{ marginBottom: 10, textAlign: "center" }}
    >
      <Title
        style={{
          marginBlock: 0,
          color: "inherit",
          fontSize: 28,
        }}
        level={2}
      >
        {t("this is your profile")}
      </Title>
      <div style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: "0.85em",
            color: "inherit",
          }}
        >
          {t("customize profile by your own style, and share to your friends")}
        </Text>
      </div>
    </Flex>
  );
}
