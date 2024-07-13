import { useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import { Card, Flex, Space, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { LockOutlined } from "@ant-design/icons";
import { ExperienceEntryControl } from "./ExperienceEntryControl";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;

interface ExperienceEntryProps {
  data: any;
  rankingGame?: any;
  fetcher?: any;
  isMyWebboard?: boolean;
}

export function ExperienceEntry(props: ExperienceEntryProps) {
  const { data, rankingGame, fetcher } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const { t } = useTranslation();
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  // Add placeholders if there are fewer than 4 photos

  useEffect(() => {
    // Listen for changes in screen size and update state variable accordingly
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      // Cleanup: Remove event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardStyle = {
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #E5E4E4",
  };

  return (
    <>
      <Card style={cardStyle}>
        <Flex gap={20} vertical>
          <Flex justify="space-between" align="flex-start" wrap="wrap">
            <Space
              direction="vertical"
              size={1}
              style={{ margin: 0, padding: 0 }}
            >
              <Title level={5}>{data.name}</Title>
              <Text>
                {dayjs(data.startDate).format("MMM YYYY")} -{" "}
                {data.endDate
                  ? dayjs(data.endDate).format("MMM YYYY")
                  : t("present")}
              </Text>
            </Space>
            <ExperienceEntryControl
              fetcher={fetcher}
              id={data.id}
              isOwner={isOwner}
              isForumAdmin={isForumAdmin}
              initialValues={data}
              postType="experience"
            />
          </Flex>
          <Text>{data.description}</Text>
        </Flex>
      </Card>
    </>
  );
}
