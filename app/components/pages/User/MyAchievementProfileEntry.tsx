import { useContext } from "react";
import { useMatches } from "@remix-run/react";
import { Card, Space, Tooltip, Typography } from "antd";
import { AppContext } from "~/contexts";
const { Text } = Typography;

interface MyAchievementProfileEntryProps {
  data: any;
  type?: string;
}

export function MyAchievementProfileEntry(
  props: MyAchievementProfileEntryProps
) {
  const { data, type } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);

  const backgroundColor =
    type === "brand"
      ? "#D4FB6F"
      : type === "tournament"
      ? "#7C6FF6"
      : "#E3E3E3";

  return (
    <Space
      onClick={data?.url ? () => window.open(data.url, "_blank") : undefined}
      direction="vertical"
      size={0}
      style={{
        display: "flex",
        position: "relative",
        height: "100%",
        width: 200,
        cursor: data?.url ? "pointer" : "default",
      }}
    >
      <Card
        bordered={false}
        style={{
          position: "relative",
          height: 250,
          backgroundColor: scheme === "dark" ? "#121212" : "#e9e9e9",
          borderRadius: 10,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            data && data.image
              ? `url("${cdnUrl}/${data.image}")`
              : `url("/image/placeholder.png")`,
          boxShadow:
            scheme === "dark"
              ? "0 8px 20px 0 rgba(0, 0, 0, 0.6)"
              : "0 8px 20px 0 rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          paddingInline: "7.5%",
          overflow: "hidden",
        }}
      >
        <Card
          bodyStyle={{ padding: 10, textAlign: "center" }}
          bordered={false}
          style={{
            position: "relative",
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: backgroundColor,
          }}
        >
          <Tooltip title={data.name}>
            <Text
              style={{
                display: "block",
                position: "relative",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#000",
              }}
            >
              {data.name}
            </Text>
          </Tooltip>
        </Card>
      </div>
    </Space>
  );
}
