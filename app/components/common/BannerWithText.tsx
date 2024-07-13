import { useNavigate } from "@remix-run/react";
import { Card, Typography } from "antd";
import React from "react";
const { Title } = Typography;

interface BannerWithTextProps {
  height?: number | string;
  image?: string;
  link: string;
  message?: React.ReactNode;
  minHeight?: number | string;
  transparent?: boolean;
  style?: React.CSSProperties;
}

export function BannerWithText(props: BannerWithTextProps) {
  const { height, image, link, message, minHeight, style, transparent } = props;
  const navigate = useNavigate();

  const handleLink = (e: any) => {
    navigate(link);
  };

  return (
    <Card
      bordered={false}
      className="banner-with-text"
      onClick={handleLink}
      style={{
        position: "relative",
        display: "flex",
        height: height ? height : "auto",
        minHeight: minHeight ? minHeight : "auto",
        overflow: "hidden",
        borderRadius: 10,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        backgroundImage: image
          ? `url("${image}")`
          : "url('/image/placeholder.png')",
        ...style,
      }}
      bodyStyle={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {!transparent ? (
        <div
          className="banner-gradient"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <></>
      )}
      {message ? (
        <Title
          className="banner-title"
          level={2}
          style={{
            fontSize: "29px",
            position: "relative",
            margin: 0,
            color: "#fff",
          }}
        >
          {message}
        </Title>
      ) : (
        <></>
      )}
    </Card>
  );
}
