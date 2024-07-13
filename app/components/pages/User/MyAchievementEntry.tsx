import { useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import { Card, Typography } from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { useTranslation } from "react-i18next";
import { MyArchievementEntryControl } from "./MyArchievementEntryControl";
const { Text, Title } = Typography;

interface MyAchievementEntryProps {
  data: any;
  fetcher?: any;
  type?: string;
  isMyWebboard?: boolean;
}

export function MyAchievementEntry(props: MyAchievementEntryProps) {
  const { t } = useTranslation();
  const { data, fetcher, type } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(233, 233, 233, 1)",
    // cursor: "pointer",
  } as any;

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

  const gameCard = (
    <Card
      bordered={false}
      style={{
        ...photosStyle,
        backgroundImage: `url("${cdnUrl}/${data.image}")`,
        textAlign: "center",
        justifyContent: "center",
        margin: "15px 0",
      }}
    >
      <div
        style={{
          marginLeft: "30px",
          marginTop: "-20px",
          justifyContent: "center",
        }}
      >
        <MyArchievementEntryControl
          fetcher={fetcher}
          id={data.id}
          isOwner={isOwner}
          isForumAdmin={isForumAdmin}
          type={type}
          initialValues={data}
          postType="experience"
        />
      </div>
    </Card>
  );

  return <>{gameCard}</>;
}
