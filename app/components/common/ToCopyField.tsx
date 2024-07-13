import { Alert, Space, Typography, theme, notification } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Copy } from "lucide-react";
const { useToken } = theme;
const { Text } = Typography;

interface ToCopyFieldProps {
  alertMessage?: string;
  copyMessage?: string;
  fontSize?: string;
  plain?: boolean;
  style?: React.CSSProperties;
  text: string;
}

export function ToCopyField(props: ToCopyFieldProps) {
  const { t } = useTranslation();
  const { alertMessage, copyMessage, fontSize, plain, style, text } = props;
  const { token } = useToken();
  const [messageApi, contextHolder] = notification.useNotification();
  const styleProperties = {
    ...style,
    cursor: "pointer",
    border: "none",
    backgroundColor: token.colorBgBase,
  };

  const handleCopyMessage = (e: any) => {
    navigator.clipboard.writeText(copyMessage ? copyMessage : text);
    messageApi.open({
      type: "success",
      message: alertMessage ? alertMessage : t("join team link copied"),
      duration: 5,
      placement: "bottomRight",
    });
  };

  return (
    <>
      {plain ? (
        <Space onClick={handleCopyMessage} className="text-hover-copy" size={5}>
          <Text style={{ color: "inherit" }}>{text}</Text>
          <Copy className="text-hover-copy-icon" style={{ color: "#7a6fee" }} />
        </Space>
      ) : (
        <Alert
          onClick={handleCopyMessage}
          message={
            <Text
              style={{
                display: "block",
                fontSize: fontSize ? fontSize : undefined,
                fontWeight: 600,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </Text>
          }
          action={<CopyOutlined style={{ color: "#7a6fee", paddingLeft: 5 }} />}
          style={styleProperties}
        />
      )}

      {contextHolder}
    </>
  );
}
