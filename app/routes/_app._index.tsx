import { useEffect, useState } from "react";
import { Link, useFetcher, useMatches, useNavigation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Carousel, Flex, Image, Skeleton } from "antd";
import { BannerWithText, Loading, OverlayBg } from "~/components/common";
import {
  TournamentSlider,
  TournamentSliderItem,
} from "~/components/pages/Tournament";
import { HomeBannerSliderItem } from "~/components/pages/Tournament/HomeBannerSliderItem";

export default function AppIndex() {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [featuredTournaments, setFeaturedTournaments] = useState<any>(null);
  const [homeBanners, setHomeBanners] = useState<any>(null);
  const bannerHeight = 330;

  useEffect(() => {
    fetcher.load("/resources/home-banners");
  }, []);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      fetcher.data.featuredTournaments &&
      fetcher.data.homeBanners
    ) {
      setLoading(false);
      setFeaturedTournaments(fetcher.data.featuredTournaments);
      setHomeBanners(fetcher.data.homeBanners);
    }
  }, [fetcher]);

  return (
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto",
      }}
    >
      <Carousel
        draggable={false}
        className="banner-carousel center-mode"
        dots={false}
        arrows
        infinite
        centerMode
        waitForAnimate
        centerPadding="10%"
        speed={180}
        slidesToShow={3}
        slidesToScroll={1}
        style={{ height: bannerHeight, marginBottom: 30 }}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              draggable: true,
              centerPadding: "80px",
              slidesToShow: 1,
            },
          },
        ]}
      >
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("webboard").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Webboard.jpg`}
              // image={`/image/webboard1.jpg`}
              link="/webboards"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("party matching").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Party.jpg`}
              // image={`/image/teammatch1.jpg`}
              link="/parties"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("tournaments").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Tournament.jpg`}
              // image={`/image/tournament1.jpg`}
              link="/tournaments"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("secret chamber").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Secret.jpg`}
              link="/secret-chambers"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("reward center").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Reward.jpg`}
              // image={`/image/reward.jpg`}
              link="/rewards"
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="banner-card">
          <div>
            <BannerWithText
              message={t("play quiz").toUpperCase()}
              image={`${cdnUrl}/banners/Banner-Quiz.jpg`}
              // image={`/image/teammatch1.jpg`}
              link="/campaign"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </Carousel>
      {loading ? (
        <Skeleton active title={false} />
      ) : (
        <Flex vertical gap={40}>
          {homeBanners ? (
            <Carousel
              arrows={true}
              dotPosition="bottom"
              autoplay
              autoplaySpeed={5000}
              waitForAnimate
              className="banner-carousel"
            >
              {homeBanners.map((item: any, index: number) => (
                <HomeBannerSliderItem key={`banner-${index}`} data={item} />
              ))}
            </Carousel>
          ) : (
            <Link
              style={{
                display: "flex",
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 30,
              }}
              to="https://www.facebook.com/ctrlg.platform"
              target="_blank"
            >
              <Image src={`/image/home-banner.jpg`} preview={false} />
            </Link>
          )}
          <div style={{ borderRadius: 10, overflow: "hidden" }}>
            {!featuredTournaments ? (
              <TournamentSliderItem loading data={null} />
            ) : (
              <TournamentSlider data={featuredTournaments} />
            )}
          </div>
        </Flex>
      )}
      {navigation.state === "loading" && (
        <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
          <Loading />
        </OverlayBg>
      )}
    </div>
  );
}
