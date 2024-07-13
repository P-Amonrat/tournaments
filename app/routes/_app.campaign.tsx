import { Flex } from "antd";
import { Outlet, type V2_MetaFunction } from "@remix-run/react";
import { OverlayBg } from "~/components/common";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "ตอบคำถามหาฉายา แล้วแชร์ให้โลกรู้ว่าxรึงเป็นใคร !",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: "ทายนิสัย ...คุณเป็นใครเวลาเล่น Valorant | Ctrlg.gg",
    },
    {
      property: "og:image",
      content: "https://d2007awoau332v.cloudfront.net/assets/quiz.jpg",
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
      content: "ตอบคำถามหาฉายา แล้วแชร์ให้โลกรู้ว่าxรึงเป็นใคร !",
    },
  ];
};

export default function Campaign() {
  return (
    <Flex
      align="center"
      style={{
        minHeight: "calc(100vh - 220px)",
        width: "100%",
        paddingBlock: 10,
        paddingInline: "3.5%",
        backgroundImage: "url('/image/campaign-background.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <OverlayBg />
      <Outlet />
    </Flex>
  );
}
