import { useNavigation } from "@remix-run/react";
import { Card, Flex, Image, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Loading, OverlayBg, TiltButton } from "~/components/common";
const { Title } = Typography;

interface CampaignStartProps {
  onNext: () => void;
}

export function CampaignStart(props: CampaignStartProps) {
  const { onNext } = props;
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    const userAgent = navigator.userAgent || "";

    // Check for common patterns in the userAgent string to determine device type
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(isMobile);
  }, []);

  return (
    <Card
      bordered={false}
      style={{
        position: "relative",
        maxWidth: 700,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-0.png')`,
        backgroundSize: "cover",
        borderRadius: 30,
      }}
      bodyStyle={{
        paddingBlock: !isMobile ? 60 : undefined,
        paddingInline: "6%",
      }}
    >
      <Flex vertical justify="center" gap={20} style={{ textAlign: "center" }}>
        <Image
          src="/image/logo.png"
          preview={false}
          width={!isMobile ? 240 : 200}
          wrapperStyle={{ marginInline: "auto", marginBottom: 20 }}
        />
        <Title
          style={{
            margin: 0,
            color: "inherit",
            fontFamily: "A4SPEED",
            fontSize: !isMobile ? 50 : 35,
          }}
          level={1}
        >
          {t("Valo Quiz")}
        </Title>
        <Title
          style={{
            margin: 0,
            color: "inherit",
            lineHeight: 1.5,
            fontSize: 24,
          }}
          level={2}
        >
          {t("who you look alike in Valorant, let's create and share")}
        </Title>
      </Flex>
      <Flex justify="center" style={{ paddingInline: 50, marginTop: 40 }}>
        <TiltButton
          color="pink"
          onClick={onNext}
          style={{
            width: "100%",
            fontSize: !isMobile ? 32 : 27,
          }}
        >
          {t("start quiz")}!
        </TiltButton>
      </Flex>
      {navigation.state === "loading" && (
        <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
          <Loading />
        </OverlayBg>
      )}
    </Card>
  );
}
