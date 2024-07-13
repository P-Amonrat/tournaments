import { Card, Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface CardWithLabelProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  detail: React.ReactNode;
}

export function CardWithLabel(props: CardWithLabelProps) {
  const { icon, label, detail } = props;

  return (
    <Card
      style={{
        height: "100%",
        backgroundColor: "transparent",
        border: "1px solid #dfdfdf",
      }}
      bodyStyle={{ padding: 15 }}
    >
      <Space direction="vertical">
        <Space size={10} style={{ fontWeight: 600 }}>
          {icon && icon}
          {label}
        </Space>
        <Text>{detail}</Text>
      </Space>
    </Card>
  );
}
