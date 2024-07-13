import { Avatar, Badge, Tooltip } from "antd";
import { MinusCircleOutlined, UserOutlined } from "@ant-design/icons";

interface UserAvatarProps {
  dashed?: boolean;
  display?: string;
  name?: string;
  onClick?: (e: any) => void;
  onRemove?: (e: any) => void;
  size?: number;
}

export function UserAvatar(props: UserAvatarProps) {
  const { dashed, display, name, onClick, onRemove, size } = props;
  let output = display ? (
    <div
      onClick={onClick ? onClick : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {name ? (
        <Tooltip placement="bottom" title={name} arrow={false}>
          <Avatar src={display} size={size ? size : 60} />
        </Tooltip>
      ) : (
        <Avatar src={display} size={size ? size : 60} />
      )}
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        padding: 4,
        border: `1px ${dashed ? "dashed" : "solid"} #c0b4b7`,
        borderRadius: "50%",
        height: size ? size : "60px",
        width: size ? size : "60px",
        lineHeight: size ? size : "60px",
        justifyContent: "center",
        alignItems: "center",
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick ? onClick : undefined}
    >
      <UserOutlined
        style={{
          fontSize: 20,
          color: "#c0b4b7",
        }}
      />
    </div>
  );

  if (onRemove) {
    return (
      <Badge
        count={
          <div
            style={{
              display: "flex",
              backgroundColor: "#c43025",
              padding: 3,
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={onRemove}
          >
            <MinusCircleOutlined
              style={{ fontSize: 12, color: "#fff", strokeWidth: 2 }}
            />
          </div>
        }
      >
        {output}
      </Badge>
    );
  } else {
    return output;
  }
}
