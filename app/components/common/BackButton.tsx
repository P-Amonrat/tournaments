import { useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Space, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";

const { Text } = Typography;

interface BackbuttonProps {
  navigateTo?: any;
  fallbackUrl?: string;
}

export function BackButton(props: BackbuttonProps) {
  const { t } = useTranslation();
  const { fallbackUrl, navigateTo } = props;
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(
      navigateTo !== undefined && navigateTo !== null
        ? navigateTo
        : document.referrer === "" && fallbackUrl !== undefined
        ? window.open(fallbackUrl, "_self")
        : -1
    );
  }, [navigateTo]);

  return (
    <Space
      size={8}
      onClick={handleBack}
      style={{
        marginBottom: 30,
        fontSize: "1.2em",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Text style={{ fontSize: "inherit" }}>
        <LeftOutlined />
      </Text>
      <Text style={{ fontSize: "inherit" }}>{t("back")}</Text>
    </Space>
  );
}
