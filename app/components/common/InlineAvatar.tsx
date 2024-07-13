import React from "react";
import { Avatar, Space, Typography } from "antd";
const { Title } = Typography;

interface InlineAvatarProps {
  avatarUrl?: string;
  avatarSize?: number;
  title: React.ReactNode;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  subtitle?: React.ReactNode;
}

export const InlineAvatar: React.FC<InlineAvatarProps> = (
  props: InlineAvatarProps
) => {
  const { avatarUrl, avatarSize, title, titleLevel, subtitle } = props;
  return (
    <Space size={10} style={{ alignItems: "center" }}>
      {avatarUrl && (
        <Avatar src={avatarUrl} size={avatarSize ? avatarSize : 60} />
      )}
      <Space direction="vertical" size={0}>
        <Title level={titleLevel ? titleLevel : 5} style={{ margin: 0 }}>
          {title}
        </Title>
        {subtitle && subtitle}
      </Space>
    </Space>
  );
};
