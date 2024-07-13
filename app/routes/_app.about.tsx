import { Card, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Text, Title } = Typography;

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          height: "40vh",
          backgroundImage: `url("/image/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          paddingInline: "3.5%",
          paddingBlock: 50,
          maxWidth: 1100,
          marginInline: "auto",
        }}
      >
        <Card bordered={false} bodyStyle={{ padding: 40 }}>
          <Title level={1} style={{ marginTop: 0, marginBottom: 30 }}>
            {t("about")}
          </Title>
          <Flex vertical gap={20} style={{ fontSize: 18 }}>
            <Text style={{ fontSize: "inherit" }}>
              {t("about us paragraph 1")}
            </Text>
            <Text style={{ fontSize: "inherit" }}>
              {t("about us paragraph 2")}
            </Text>
            <Text style={{ fontSize: "inherit" }}>
              {t("about us paragraph 3")}
            </Text>
            <Text style={{ fontSize: "inherit" }}>
              {t("about us paragraph 4")}
            </Text>
          </Flex>
        </Card>
      </div>
    </>
  );
}
