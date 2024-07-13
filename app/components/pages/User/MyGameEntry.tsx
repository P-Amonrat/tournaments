import { useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import {
  Card,
  Col,
  Flex,
  Input,
  Row,
  Image,
  Typography,
  Space,
  Tooltip,
} from "antd";
import { AppContext, AuthContext } from "~/contexts";
import { MyGameEntryControl } from "./MyGameEntryControl";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { LuUserCircle } from "react-icons/lu";
const { Text, Title } = Typography;

interface MyGameEntryProps {
  data: any;
  fetcher?: any;
  game?: any;
  games: any[];
  isMyWebboard?: boolean;
}

export function MyGameEntry(props: MyGameEntryProps) {
  const { t } = useTranslation();
  const { data, fetcher, game, games } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [screenSize, setScreenSize] = useState<string>(""); // Initialize state variable to hold screen size

  const targetRank = data.rank;
  const foundRank = data.rankingGame.rank.find(
    (rank: any) => rank.name === targetRank
  );

  const photosStyle = {
    position: "relative",
    height: 200,
    width: "131.64px",
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
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

  const cardStyle = {
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #E5E4E4",
    overflow: "auto",
  };

  const triangleClipPath = "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)";
  const triangleClipPathTop =
    "polygon(0 0, 50% 25%, 100% 0, 100% 100%, 0 100%)";

  const gameCard = (
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
            top: 95,
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
            width={50}
            preview={false}
            src={`${cdnUrl}/${foundRank?.icon}`}
          />
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

  return (
    <>
      <Card style={cardStyle}>
        <Row>
          <Col span={screenSize === "greaterThanSM" ? 6 : 24}>
            {screenSize === "greaterThanSM" ? (
              gameCard
            ) : (
              <Flex
                justify="center" // This centers horizontally
                align="center" // This centers vertically
              >
                {gameCard}
              </Flex>
            )}
          </Col>
          <Col span={screenSize === "greaterThanSM" ? 18 : 24}>
            <div
              style={{
                marginLeft: "15px",
                justifyContent: "center",
              }}
            >
              <Flex justify="space-between" align="flex-start" wrap="wrap">
                <Space
                  direction="vertical"
                  size={1}
                  style={{ margin: 0, padding: 0 }}
                >
                  <Title level={5}>{t("username in game")}</Title>
                </Space>
                <MyGameEntryControl
                  fetcher={fetcher}
                  id={data.id}
                  isOwner={isOwner}
                  isForumAdmin={isForumAdmin}
                  initialValues={data}
                  game={game}
                  games={games}
                  postType="experience"
                />
              </Flex>
              <Input
                disabled
                value={data.ign}
                style={{ marginBottom: "15px" }}
              />
              <Title level={5}>{t("rank in game")}</Title>
              <Input disabled value={t(`${data.rank}`)} />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
