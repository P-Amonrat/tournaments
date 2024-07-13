import React from "react";
import { Card, Space, Typography } from "antd";
const { Text } = Typography;

interface ResponsiveImageCardProps {
  image: string;
  label: string;
  onClick?: (e: any) => void;
}

export const ResponsiveImageCard: React.FC<ResponsiveImageCardProps> = (
  props: ResponsiveImageCardProps
) => {
  const { image, label, onClick } = props;
  return (
    <Card
      onClick={onClick}
      bordered={false}
      bodyStyle={{ padding: 20, textAlign: "center" }}
      style={onClick ? { cursor: "pointer" } : {}}
    >
      <Space direction="vertical" size={10} style={{ display: "flex" }}>
        <div style={{ paddingInline: "2.5%" }}>
          <div
            style={{
              width: "100%",
              paddingBottom: "100%",
              marginInline: "auto",
              borderRadius: "50%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              overflow: "hidden",
            }}
          />
        </div>
        <Text>{label}</Text>
      </Space>
    </Card>
  );
};
