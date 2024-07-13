import { Avatar, Space } from "antd";

interface AuthorProps {
  children: any;
  avatarSize?: number;
  displayImage?: string;
  fontSize?: number;
}

export function Author(props: AuthorProps) {
  const { children, avatarSize, displayImage, fontSize } = props;

  return (
    <Space
      direction="horizontal"
      size={5}
      style={fontSize ? { fontSize: fontSize } : undefined}
    >
      <Avatar
        size={avatarSize ? avatarSize : 22}
        src={displayImage ? displayImage : null}
      >
        {children}
      </Avatar>
      {children}
    </Space>
  );
}
