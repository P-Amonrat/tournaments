import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";
import { Space, theme, Typography } from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import { TiltButton } from "~/components/common";
const { Text } = Typography;
const { useToken } = theme;

interface UserOwnerConsoleProps {
  data: any;
}

export const UserOwnerConsole: React.FC<UserOwnerConsoleProps> = (
  props: UserOwnerConsoleProps
) => {
  const { data } = props;
  const { t } = useTranslation();
  const { token } = useToken();
  const navigate = useNavigate();

  const handlePopupKycForm = () => {
    console.log("popup kyc form");
  };

  const navigateToSetting = () => {
    navigate("/settings");
  };

  return (
    <Space size={20}>
      {!data.profile ||
        (data.profile && !data.isDopaVerified && (
          <TiltButton
            color="primary"
            style={{ paddingInline: 15 }}
            onClick={handlePopupKycForm}
          >
            <Space size={5} style={{ strokeWidth: 2 }}>
              <CheckCircleOutlined />
              <Text style={{ color: "inherit" }}>{t("verify account")}</Text>
            </Space>
          </TiltButton>
        ))}
      <Space size={5} style={{ cursor: "pointer" }} onClick={navigateToSetting}>
        <EditOutlined style={{ color: token.colorTextBase }} />
        <Text>{t("edit profile")}</Text>
      </Space>
    </Space>
  );
};
