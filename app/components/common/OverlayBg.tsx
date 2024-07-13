import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

interface OverlayBgProps {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
  opacity?: number;
  style?: React.CSSProperties;
}

export const OverlayBg: React.FC<OverlayBgProps> = (props: OverlayBgProps) => {
  const { children, className, loading, onClick, opacity, style } = props;
  return (
    <div
      className={className ? className : ""}
      style={{
        display: "flex",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: `rgba(0,0,0,${opacity ? opacity : 0.5})`,
        alignItems: "center",
        justifyContent: "center",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onClick={onClick ? onClick : undefined}
    >
      {loading ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : children ? (
        children
      ) : null}
    </div>
  );
};
