import { useContext } from "react";
import { Card, Divider, Empty, Flex, Space } from "antd";
import { useTranslation } from "react-i18next";
import { MyGameProfileEntry } from "./MyGameProfileEntry";
import { LiaAwardSolid } from "react-icons/lia";
import { AppContext } from "~/contexts";
import { Award } from "lucide-react";

interface MyGameProfileSectionProps {
  data: any;
}

export function MyGameProfileSection(props: MyGameProfileSectionProps) {
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = useContext(AppContext);

  return (
    <>
      <Card
        style={{
          borderRadius: 12,
          boxShadow:
            scheme === "dark"
              ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)"
              : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
          border: "none",
        }}
      >
        <Flex justify="space-between">
          <Space
            direction="horizontal"
            size={5}
            style={{ fontSize: 24, fontWeight: 600 }}
            align="center"
          >
            <Award style={{ color: "#7C6FF6" }} />
            {t("rank in game")}
          </Space>
        </Flex>
        <Divider
          style={{
            marginBlock: 15,
            borderColor: scheme === "dark" ? "#3e3e3e" : "#dfdfdf",
          }}
        />
        {data[0] ? (
          <Flex
            gap={30}
            align="flex-start"
            style={{ overflow: "auto", marginInline: -18, paddingInline: 8 }}
            className="hide-scrollbar"
          >
            {data.map((gameInfo: any, index: number) => (
              <div key={index} style={{ padding: 10 }}>
                <div
                  style={{
                    filter:
                      scheme === "dark"
                        ? "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.6))"
                        : "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
                  }}
                >
                  <MyGameProfileEntry data={gameInfo} />
                </div>
              </div>
            ))}
          </Flex>
        ) : (
          <Empty description={<span>{t("no data")}</span>} />
        )}
      </Card>
    </>
  );
}
