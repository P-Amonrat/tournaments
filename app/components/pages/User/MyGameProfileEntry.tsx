import { useMatches } from "@remix-run/react";
import { Card, Image, Typography, Space, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { LuUserCircle } from "react-icons/lu";
const { Text } = Typography;

interface MyGameProfileEntryProps {
  data: any;
}

export function MyGameProfileEntry(props: MyGameProfileEntryProps) {
  const { t } = useTranslation();
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  const targetRank = data.rank;
  const foundRank = data.rankingGame.rank.find(
    (rank: any) => rank.name.toLowerCase() === targetRank.toLowerCase()
  );

  const photosStyle = {
    position: "relative",
    height: 300,
    width: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // cursor: "pointer",
  } as any;

  const triangleClipPath = "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)";

  return (
    <div
      style={{
        filter: "url('#goo')",
        overflow: "hidden",
      }}
    >
      <Card
        bordered={false}
        style={{
          ...photosStyle,
          clipPath: triangleClipPath,
          backgroundImage: `url("${cdnUrl}/${data.rankingGame.image}")`,
          textAlign: "center",
          justifyContent: "center",
          filter: "url('#goo')",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <div style={{ position: "absolute", width: "100%", bottom: 0 }}>
          <div className="triangle">
            <div
              className="triangle-box"
              style={{
                backgroundColor: foundRank?.backgroundColor
                  ? foundRank?.backgroundColor
                  : "rgba(222,151,35)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 135,
            // bottom: "50px",
            width: "100%",
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Image
            style={{
              marginBottom: 5,
              zIndex: 2,
              filter: "drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.6))",
            }}
            width={60}
            preview={false}
            src={`${cdnUrl}/${foundRank?.icon}`}
          />
          <Space
            style={{
              textAlign: "center",
              marginBottom: 0,
              color: "#FFF",
            }}
            size={0}
            align="center"
            direction="vertical"
          >
            <Space>
              <LuUserCircle style={{ fontSize: 18 }} />
              <Tooltip title={data?.ign || ""}>
                <Text
                  style={{
                    display: "block",
                    color: "inherit",
                    whiteSpace: "nowrap",
                    maxWidth: 145,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {t(data?.ign || "")}
                </Text>
              </Tooltip>
            </Space>
            <Text
              style={{
                marginTop: 0,
                fontSize: 14,
                color: "#FFF",
                whiteSpace: "nowrap",
              }}
            >
              {foundRank?.name}
            </Text>
          </Space>
        </div>
        <svg
          style={{ position: "absolute", visibility: "hidden" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </Card>
    </div>
  );
}
