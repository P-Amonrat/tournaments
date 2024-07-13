import {
  TournamentSlider,
  TournamentSliderItem
} from "/build/_shared/chunk-3DK26MTZ.js";
import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import "/build/_shared/chunk-YUNIXQN2.js";
import "/build/_shared/chunk-B3LWZSUK.js";
import "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  carousel_default,
  flex_default,
  image_default,
  skeleton_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Link,
  useFetcher,
  useMatches,
  useNavigate,
  useNavigation
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app._index.tsx
var import_react3 = __toESM(require_react());

// app/components/common/BannerWithText.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function BannerWithText(props) {
  const { height, image, link, message, minHeight, style, transparent } = props;
  const navigate = useNavigate();
  const handleLink = (e) => {
    navigate(link);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      bordered: false,
      className: "banner-with-text",
      onClick: handleLink,
      style: {
        position: "relative",
        display: "flex",
        height: height ? height : "auto",
        minHeight: minHeight ? minHeight : "auto",
        overflow: "hidden",
        borderRadius: 10,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        backgroundImage: image ? `url("${image}")` : "url('/image/placeholder.png')",
        ...style
      },
      bodyStyle: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      },
      children: [
        !transparent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "banner-gradient",
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/common/BannerWithText.tsx",
            lineNumber: 53,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/common/BannerWithText.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this),
        message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Title,
          {
            className: "banner-title",
            level: 2,
            style: {
              fontSize: "29px",
              position: "relative",
              margin: 0,
              color: "#fff"
            },
            children: message
          },
          void 0,
          false,
          {
            fileName: "app/components/common/BannerWithText.tsx",
            lineNumber: 67,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/components/common/BannerWithText.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/BannerWithText.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/HomeBannerSliderItem.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function HomeBannerSliderItem(props) {
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const navigate = useNavigate();
  const handleItemClicked = () => {
    const isAbsoluteURL = /^https?:\/\//i.test(data.url);
    if (isAbsoluteURL) {
      window.open(data.url, "_blank");
    } else {
      navigate(data.url);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    image_default,
    {
      preview: false,
      src: `${cdnUrl}/${data.image}`,
      onClick: handleItemClicked,
      wrapperStyle: { width: "100%", cursor: "pointer" }
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Tournament/HomeBannerSliderItem.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function AppIndex() {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const [loading, setLoading] = (0, import_react3.useState)(true);
  const [featuredTournaments, setFeaturedTournaments] = (0, import_react3.useState)(null);
  const [homeBanners, setHomeBanners] = (0, import_react3.useState)(null);
  const bannerHeight = 330;
  (0, import_react3.useEffect)(() => {
    fetcher.load("/resources/home-banners");
  }, []);
  (0, import_react3.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && fetcher.data.featuredTournaments && fetcher.data.homeBanners) {
      setLoading(false);
      setFeaturedTournaments(fetcher.data.featuredTournaments);
      setHomeBanners(fetcher.data.homeBanners);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          carousel_default,
          {
            draggable: false,
            className: "banner-carousel center-mode",
            dots: false,
            arrows: true,
            infinite: true,
            centerMode: true,
            waitForAnimate: true,
            centerPadding: "10%",
            speed: 180,
            slidesToShow: 3,
            slidesToScroll: 1,
            style: { height: bannerHeight, marginBottom: 30 },
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  draggable: true,
                  centerPadding: "80px",
                  slidesToShow: 1
                }
              }
            ],
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("webboard").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Webboard.jpg`,
                  link: "/webboards",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 76,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 74,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("party matching").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Party.jpg`,
                  link: "/parties",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 87,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 85,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("tournaments").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Tournament.jpg`,
                  link: "/tournaments",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 98,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 96,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("secret chamber").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Secret.jpg`,
                  link: "/secret-chambers",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 109,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 108,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 107,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("reward center").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Reward.jpg`,
                  link: "/rewards",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 119,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 118,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 117,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "banner-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                BannerWithText,
                {
                  message: t("play quiz").toUpperCase(),
                  image: `${cdnUrl}/banners/Banner-Quiz.jpg`,
                  link: "/campaign",
                  style: { height: "100%" }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app._index.tsx",
                  lineNumber: 130,
                  columnNumber: 13
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 128,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app._index.tsx",
            lineNumber: 50,
            columnNumber: 7
          },
          this
        ),
        loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(skeleton_default, { active: true, title: false }, void 0, false, {
          fileName: "app/routes/_app._index.tsx",
          lineNumber: 141,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { vertical: true, gap: 40, children: [
          homeBanners ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            carousel_default,
            {
              arrows: true,
              dotPosition: "bottom",
              autoplay: true,
              autoplaySpeed: 5e3,
              waitForAnimate: true,
              className: "banner-carousel",
              children: homeBanners.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HomeBannerSliderItem, { data: item }, `banner-${index}`, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 154,
                columnNumber: 17
              }, this))
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app._index.tsx",
              lineNumber: 145,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Link,
            {
              style: {
                display: "flex",
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 30
              },
              to: "https://www.facebook.com/ctrlg.platform",
              target: "_blank",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(image_default, { src: `/image/home-banner.jpg`, preview: false }, void 0, false, {
                fileName: "app/routes/_app._index.tsx",
                lineNumber: 168,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app._index.tsx",
              lineNumber: 158,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { borderRadius: 10, overflow: "hidden" }, children: !featuredTournaments ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TournamentSliderItem, { loading: true, data: null }, void 0, false, {
            fileName: "app/routes/_app._index.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TournamentSlider, { data: featuredTournaments }, void 0, false, {
            fileName: "app/routes/_app._index.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_app._index.tsx",
            lineNumber: 171,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app._index.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this),
        navigation.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loading, {}, void 0, false, {
          fileName: "app/routes/_app._index.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app._index.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app._index.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
export {
  AppIndex as default
};
//# sourceMappingURL=/build/routes/_app._index-IKR77ZIF.js.map
