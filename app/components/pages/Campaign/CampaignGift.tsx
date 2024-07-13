import { useMatches } from "@remix-run/react";
import { Image, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { TiltButton } from "~/components/common";
const { Text, Title } = Typography;

interface CampaignGiftProps {
  onBack: () => void;
  gift: any;
}

export function CampaignGift(props: CampaignGiftProps) {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { gift, onBack } = props;

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Title level={5}>{t("This is your gift")}</Title>
      <Space direction="vertical">
        {gift && <Image src={`${cdnUrl}/${gift}`} style={{ width: "50%" }} />}
        <div>
          <Space direction="vertical" size={1}>
            <Text>{t("select your profile frame")}</Text>
            <Text>{t("by clicking your profile picture")}</Text>
          </Space>
        </div>
      </Space>
      <TiltButton
        color="primary"
        onClick={onBack}
        style={{ marginTop: "10px" }}
      >
        <Space>{t("go to profile")}</Space>
      </TiltButton>
    </div>
  );
}
