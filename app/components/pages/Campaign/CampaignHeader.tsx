import { Flex, Image, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text } = Typography;

export function CampaignHeader() {
  const { t } = useTranslation();

  return (
    <Flex justify="flex-end" style={{ marginBottom: 10, paddingRight: 10 }}>
      <Space size={0} direction="vertical">
        <Text
          style={{
            marginLeft: 10,
            letterSpacing: 1,
            fontSize: 8,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {t("Power by")}
        </Text>
        <Image src="/image/logo.png" preview={false} width={100} />
      </Space>
    </Flex>
  );
}
