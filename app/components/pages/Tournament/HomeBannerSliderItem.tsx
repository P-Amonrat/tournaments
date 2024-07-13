// import { useTranslation } from "react-i18next";
import { Card, Image } from "antd";
import { useMatches, useNavigate } from "@remix-run/react";
// const { useToken } = theme;

interface TournamentSliderItemProps {
  data: any;
  loading?: boolean;
}

export function HomeBannerSliderItem(props: TournamentSliderItemProps) {
  // const { t } = useTranslation();
  const { data } = props;
  // const { token } = useToken();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const navigate = useNavigate();
  // const itemStyle = {
  //   // margin: "0 55px",
  //   position: "relative",
  //   display: "flex",
  //   flexDirection: "column",
  //   borderRadius: 0,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundImage:
  //     data && data.image && data.image !== "-"
  //       ? `url("${cdnUrl}/${data.image}")`
  //       : undefined,
  //   cursor: "pointer",
  // } as any;
  // const itemBodyStyle = {
  //   display: "flex",
  //   flex: "auto",
  //   paddingBottom: 48,
  //   alignItems: "end",
  // } as any;
  // const itemHeadStyle = {
  //   position: "relative",
  //   border: 0,
  //   flex: "0 0 auto",
  //   zIndex: 1,
  // } as any;

  const handleItemClicked = () => {
    // navigate(`${data.url}`);
    const isAbsoluteURL = /^https?:\/\//i.test(data.url);

    if (isAbsoluteURL) {
      window.open(data.url, "_blank");
    } else {
      navigate(data.url);
    }
  };

  return (
    <Image
      preview={false}
      src={`${cdnUrl}/${data.image}`}
      onClick={handleItemClicked}
      wrapperStyle={{ width: "100%", cursor: "pointer" }}
    />
  );

  // return (
  //   <Card
  //     className="home-banner-slider-item"
  //     bordered={false}
  //     onClick={handleItemClicked}
  //     style={itemStyle}
  //     bodyStyle={itemBodyStyle}
  //     headStyle={itemHeadStyle}
  //     // title={
  //     //   <Tag
  //     //     color={token.colorPrimary}
  //     //     style={{ color: "#201d1d", fontWeight: 600 }}
  //     //   >
  //     //     {t("Home Banner")}
  //     //   </Tag>
  //     // }
  //   />
  // );
}
