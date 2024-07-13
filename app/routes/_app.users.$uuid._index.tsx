import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Space } from "antd";
import { type V2_MetaFunction, useRouteLoaderData } from "@remix-run/react";
import { AuthContext } from "~/contexts";
import { MyGameProfileSection } from "~/components/pages/User/MyGameProfileSection";
import { MyDetailsSection } from "~/components/pages/User/MyDetailsSection";
import { MyAlbumsSection } from "~/components/pages/User/MyAlbumsSection";
import { MyExperiencesSection } from "~/components/pages/User/MyExperiencesSection";
import { MyAcheivementProfileSection } from "~/components/pages/User/MyAcheivementProfileSection";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "สร้างโปรไฟล์ง่าย ๆ แบบ Player, Streamer มืออาชีพ",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: `อยากเกิดก็เข้ามาเปิดดิ..หมายถึง เปิด Player Profile | Ctrlg.gg`,
    },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/profile.jpg`,
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:description",
      content: "สร้างโปรไฟล์ง่าย ๆ แบบ Player, Streamer มืออาชีพ",
    },
  ];
};

export default function UserSingle() {
  const routeLoader = useRouteLoaderData("routes/_app.users.$uuid");
  const { userInfo, userSummaryInfo, uuid } = routeLoader;
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const items = [] as any[];
  const isOwner = user && user.id === userInfo.id;
  const containerRef = useRef(null);

  if (userInfo.profile.privateEmail !== "private" || isOwner) {
    items.push({
      key: "email",
      label: t("email"),
      children: userInfo.profile.profileEmail
        ? userInfo.profile.profileEmail
        : "-",
    });
  }
  if (userInfo.profile.privatePhone !== "private" || isOwner) {
    items.push({
      key: "phone",
      label: t("phone number"),
      children: userInfo.profile.profilePhoneNumber
        ? userInfo.profile.profilePhoneNumber
        : "-",
    });
  }
  if (userInfo.profile.privateDiscordId !== "private" || isOwner) {
    items.push({
      key: "discordId",
      label: t("discord ID"),
      children: userInfo.profile.discordId ? userInfo.profile.discordId : "-",
    });
  }

  useEffect(() => {
    const container = containerRef.current as any;

    if (container) {
      // Array of the child divs
      const divs = Array.from(container.children);

      // Sort by a custom logic: in this example, based on a static order array
      const orderMap = {
        userRankingGames: userSummaryInfo.sortOrder.userRankingGames,
        userAchievements: userSummaryInfo.sortOrder.userAchievements,
        userExperiences: userSummaryInfo.sortOrder.userExperiences,
        personalDetails: userSummaryInfo.sortOrder.personalDetails,
        albums: userSummaryInfo.sortOrder.albums,
      } as any;

      const sortedDivs = divs.sort(
        (a: any, b: any) => orderMap[a.id] - orderMap[b.id]
      );

      // Re-append sorted divs
      container.innerHTML = ""; // Clear existing elements
      sortedDivs.forEach((div) => {
        container.appendChild(div);
      });
    }
  }, [
    userSummaryInfo.sortOrder.albums,
    userSummaryInfo.sortOrder.personalDetails,
    userSummaryInfo.sortOrder.userAchievements,
    userSummaryInfo.sortOrder.userExperiences,
    userSummaryInfo.sortOrder.userRankingGames,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        columnGap: "16px",
      }}
    >
      <div id="userRankingGames">
        <MyGameProfileSection data={userSummaryInfo.userRankingGames} />
      </div>
      <div id="userAchievements">
        <MyAcheivementProfileSection data={userSummaryInfo.userAchievements} />
      </div>
      <div id="userExperiences">
        <MyExperiencesSection data={userSummaryInfo.userExperiences} />
      </div>
      <div id="personalDetails">
        <MyDetailsSection data={userSummaryInfo.personalDetails?.details} />
      </div>
      <div id="albums">
        <MyAlbumsSection data={userSummaryInfo.albums?.items} uuid={uuid} />
      </div>
      {/* <Descriptions
        layout="vertical"
        column={{ xs: 2, md: 4, lg: 4, xl: 4, xxl: 6 }}
        colon={false}
        items={items}
      />
      {userInfo.userGames.length ? (
        <Row gutter={[30, 20]}>
          {userInfo.userGames.map((gameUsername: any, index: number) => (
            <Col key={index} span={12} md={6} lg={4}>
              {gameUsername.ign && (
                <>
                  <Card
                    bordered={false}
                    style={{
                      height: 250,
                      marginBottom: 5,
                      borderRadius: 12,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url('${
                        gameUsername &&
                        gameUsername.game &&
                        gameUsername.game.mainImageUrl
                          ? `${cdnUrl}/${gameUsername.game.mainImageUrl}`
                          : "/image/placeholder.png"
                      }')`,
                    }}
                  />
                  <Text style={{ fontWeight: 600, fontSize: "1.1em" }}>
                    {gameUsername.ign
                      ? gameUsername.ign
                      : gameUsername.gameName}
                  </Text>
                </>
              )}
            </Col>
          ))}
        </Row>
      ) : (
        <Card style={{ borderRadius: 10 }}>
          <Result icon={<InboxOutlined />} title={t("no game username")} />
        </Card>
      )} */}
    </div>
  );
}
