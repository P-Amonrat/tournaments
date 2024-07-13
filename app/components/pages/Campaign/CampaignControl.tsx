import { useTranslation } from "react-i18next";
import { Avatar, Flex, Space, Typography } from "antd";
import {
  DownloadOutlined,
  GiftOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface CampaignControlProps {
  onNewClicked: () => void;
  onSaveClicked: () => void;
  onShareClicked: () => void;
  onGiftClicked: () => void;
}

export function CampaignControl(props: CampaignControlProps) {
  const { t } = useTranslation();
  const { onGiftClicked, onNewClicked, onSaveClicked, onShareClicked } = props;

  const iconStyle = {
    backgroundColor: "#eb4d4f",
    cursor: "pointer",
    lineHeight: "45px",
  };

  return (
    <Flex gap={20} align="center" justify="center" style={{ marginTop: 20 }}>
      <Space direction="vertical" align="center">
        <Avatar
          icon={<PlusOutlined />}
          style={iconStyle}
          onClick={onNewClicked}
          size={50}
        />
        <Text style={{ color: "#fff" }}>{t("create new")}</Text>
      </Space>
      <Space direction="vertical" align="center">
        <Avatar
          icon={<DownloadOutlined />}
          style={iconStyle}
          onClick={onSaveClicked}
          size={50}
        />
        <Text style={{ color: "#fff" }}>{t("Download")}</Text>
      </Space>
      <Space direction="vertical" align="center">
        <Avatar
          icon={<ShareAltOutlined />}
          style={iconStyle}
          onClick={onShareClicked}
          size={50}
        />
        <Text style={{ color: "#fff" }}>{t("share")}</Text>
      </Space>
      <Space direction="vertical" align="center">
        <Avatar
          icon={<GiftOutlined />}
          style={iconStyle}
          onClick={onGiftClicked}
          size={50}
        />
        <Text style={{ color: "#fff" }}>{t("get the gift")}</Text>
      </Space>
    </Flex>
  );
}
