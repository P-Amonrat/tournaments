import { useTranslation } from "react-i18next";
import { Flex, Space, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";

import { OverlayBg } from "./OverlayBg";
import { TiltButton } from "./TiltButton";
import { RefreshCw } from "lucide-react";
const { Title } = Typography;

interface GameCardProps {
  avatarStyle: React.CSSProperties;
  onClick: () => void;
  action?: string;
}

export function GameCard(props: GameCardProps) {
  const { avatarStyle, onClick, action } = props;
  const { t } = useTranslation();

  return (
    <div style={avatarStyle} onClick={onClick}>
      <div style={{ paddingBottom: "125%" }}>
        <Flex
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingBlock: 10,
          }}
          vertical
          align="center"
          justify="center"
        >
          {action !== "update" && (
            <>
              <OverlayBg
                style={{
                  cursor: "pointer",
                  backgroundColor: "rgba(122, 111, 237, 0.85)",
                }}
              />
              <Space size={10} style={{ position: "relative" }}>
                <RefreshCw style={{ color: "#fff" }} />

                <Title level={5} style={{ margin: 0, color: "#fff" }}>
                  {t("change game")}
                </Title>
              </Space>
            </>
          )}
        </Flex>
      </div>
    </div>
  );
}
