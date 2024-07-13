import {
  ImageSelector
} from "/build/_shared/chunk-KKNWOUET.js";
import {
  AffixMenu
} from "/build/_shared/chunk-N2TOCZNK.js";
import {
  ToCopyField
} from "/build/_shared/chunk-JFV4VOHN.js";
import {
  KycForm
} from "/build/_shared/chunk-VMEWQXI4.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import "/build/_shared/chunk-KD3NNI5X.js";
import {
  ShareDropDown
} from "/build/_shared/chunk-ZP5K5WKW.js";
import {
  Image,
  Link,
  Mail,
  PenLine,
  Phone,
  ThumbsUp,
  UserCheck
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  CameraOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  PlusOutlined_default,
  avatar_default,
  button_default,
  card_default,
  col_default,
  empty_default,
  form_default,
  image_default,
  list_default,
  modal_default,
  notification_default,
  row_default,
  skeleton_default,
  space_default,
  theme_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Outlet,
  useFetcher,
  useLoaderData,
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

// app/routes/_app.users.$uuid.tsx
var import_react5 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/pages/User/UserHero.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
function UserHero(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const {
    data,
    fetcher,
    isOwner,
    loading,
    frameAsset,
    onLikeAmountClicked,
    amountLikeByUser
  } = props;
  const { token } = useToken();
  const displayImageField = "displayImage";
  const coverImageField = "coverImage";
  const { baseUrl } = (0, import_react2.useContext)(AppContext);
  const profileUrl = `${baseUrl}/users/${(data == null ? void 0 : data.userName) ? data.userName : data.uuid}`;
  const [messageApi, contextHolder] = notification_default.useNotification();
  let displayFrameImages = [];
  const cardStyle = {
    position: "relative",
    display: "flex",
    height: "25vw",
    minHeight: 150,
    maxHeight: 400,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: data && data.coverImage ? `url("${cdnUrl}/${data.coverImage}")` : "url('/image/placeholder.png')"
  };
  const bodyStyle = {
    height: "100%",
    padding: 0
  };
  const avatarStyle = {
    position: "absolute",
    // left: "3.5%",
    padding: 0,
    border: data.assetFrame ? "none" : `6px solid ${token.colorBgLayout}`,
    borderRadius: "50%",
    bottom: -50,
    zIndex: 1
  };
  const coverImageChangeButtonStyle = {
    position: "relative",
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    color: "#fff",
    borderRadius: 6
  };
  const displayPresetImages = Array(8).fill("").map(
    (arg, index) => `${cdnUrl}/profile-avatars/profile-${index + 1}.jpg`
  );
  if (frameAsset) {
    displayFrameImages = frameAsset.map((item) => ({
      id: `${item.id}`,
      url: `${cdnUrl}/${item.url}`
    }));
  }
  const coverPresetImages = Array(16).fill("").map(
    (arg, index) => index < 8 ? `${cdnUrl}/profile-covers/cover-${index + 1}.jpg` : `${cdnUrl}/profile-covers/cover2-${index - 7}.jpg`
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, style: cardStyle, bodyStyle, children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true, style: { position: "relative" } }, void 0, false, {
    fileName: "app/components/pages/User/UserHero.tsx",
    lineNumber: 123,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayBg, {}, void 0, false, {
      fileName: "app/components/pages/User/UserHero.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          display: "flex",
          flex: "auto",
          alignItems: "end",
          position: "relative",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          maxWidth: 1440,
          marginInline: "auto",
          paddingInline: "3.5%",
          paddingBlock: 20
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              style: { position: "relative", width: "100%", height: "100%" },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: avatarStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "hover-show-parent",
                    style: { position: "relative" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        avatar_default,
                        {
                          src: data && data.displayImage && cdnUrl ? `${cdnUrl}/${data.displayImage}` : "/image/user-placeholder.png",
                          style: { zIndex: -1, border: "none" },
                          size: 120
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/UserHero.tsx",
                          lineNumber: 150,
                          columnNumber: 19
                        },
                        this
                      ),
                      data.assetFrame && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        avatar_default,
                        {
                          src: `${cdnUrl}/${data.assetFrame}`,
                          style: {
                            position: "absolute",
                            left: -30,
                            top: -30,
                            overflow: "visible"
                          },
                          size: 180
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/UserHero.tsx",
                          lineNumber: 160,
                          columnNumber: 21
                        },
                        this
                      ),
                      isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        ImageSelector,
                        {
                          callback: {
                            method: "patch",
                            key: displayImageField,
                            path: "/resources/upload/user-display-image"
                          },
                          title: t("select avatar image"),
                          fetcher,
                          fieldName: displayImageField,
                          presetImages: displayPresetImages,
                          frameImages: displayFrameImages,
                          presetRound: true,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            OverlayBg,
                            {
                              className: "hover-show-child",
                              style: { cursor: "pointer", borderRadius: "50%" },
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                CameraOutlined_default,
                                {
                                  style: { fontSize: 30, color: "#fff" }
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/components/pages/User/UserHero.tsx",
                                  lineNumber: 189,
                                  columnNumber: 25
                                },
                                this
                              )
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/UserHero.tsx",
                              lineNumber: 185,
                              columnNumber: 23
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/UserHero.tsx",
                          lineNumber: 172,
                          columnNumber: 21
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/pages/User/UserHero.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/User/UserHero.tsx",
                  lineNumber: 145,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: data.assetFrame ? 150 : 150,
                      bottom: 0,
                      padding: "5px 10px",
                      // backgroundColor:
                      //   scheme === "dark" ? "#221f20" : token.colorBgLayout,
                      // color: token.colorTextBase,
                      backgroundColor: "#000000",
                      color: "#fff",
                      borderRadius: "6px",
                      cursor: "pointer"
                    },
                    onClick: onLikeAmountClicked,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbsUp, {}, void 0, false, {
                        fileName: "app/components/pages/User/UserHero.tsx",
                        lineNumber: 214,
                        columnNumber: 19
                      }, this),
                      amountLikeByUser
                    ] }, void 0, true, {
                      fileName: "app/components/pages/User/UserHero.tsx",
                      lineNumber: 213,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/UserHero.tsx",
                    lineNumber: 197,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/pages/User/UserHero.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "absolute", top: 15, right: 17 }, children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ImageSelector,
            {
              callback: {
                method: "patch",
                key: coverImageField,
                path: "/resources/upload/user-cover-image"
              },
              title: t("select cover image"),
              fetcher,
              fieldName: coverImageField,
              presetImages: coverPresetImages,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                button_default,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {}, void 0, false, {
                    fileName: "app/components/pages/User/UserHero.tsx",
                    lineNumber: 234,
                    columnNumber: 29
                  }, this),
                  style: coverImageChangeButtonStyle,
                  children: t("change cover")
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserHero.tsx",
                  lineNumber: 233,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserHero.tsx",
              lineNumber: 222,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserHero.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/UserHero.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ImageSelector,
            {
              callback: {
                method: "patch",
                key: coverImageField,
                path: "/resources/upload/user-cover-image"
              },
              title: t("select cover image"),
              fetcher,
              fieldName: coverImageField,
              presetImages: coverPresetImages,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, {}, void 0, false, {
                fileName: "app/components/pages/User/UserHero.tsx",
                lineNumber: 256,
                columnNumber: 33
              }, this), style: coverImageChangeButtonStyle, children: t("change cover") }, void 0, false, {
                fileName: "app/components/pages/User/UserHero.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserHero.tsx",
              lineNumber: 245,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserHero.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { at: "sm", children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ShareDropDown,
            {
              copiedMessage: t("profile url copied"),
              postUrl: profileUrl,
              shareProfile: true
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserHero.tsx",
              lineNumber: 264,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserHero.tsx",
            lineNumber: 262,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/UserHero.tsx",
        lineNumber: 127,
        columnNumber: 11
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/UserHero.tsx",
    lineNumber: 125,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/UserHero.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/UserSingleMenus.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var UserSingleMenus = (isOwner, isOrganizer) => {
  const { t } = useTranslation();
  const menus = [
    {
      link: ".",
      level: 2,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("profile") }, void 0, false, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 14,
        columnNumber: 14
      }, this)
    },
    {
      link: "my-conversations",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("my conversations") }, void 0, false, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 18,
        columnNumber: 14
      }, this)
    },
    {
      link: "my-album",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("my album") }, void 0, false, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 22,
        columnNumber: 14
      }, this)
    }
  ];
  if (isOwner) {
    menus.push({
      link: "messages",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("my notifications") }, void 0, false, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 39,
        columnNumber: 14
      }, this)
    });
  }
  menus.push({
    link: "joined-tournaments",
    label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("joined tournaments") }, void 0, false, {
      fileName: "app/components/pages/User/UserSingleMenus.tsx",
      lineNumber: 45,
      columnNumber: 12
    }, this)
  });
  if (isOwner) {
    menus.push({
      link: "my-tournaments",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("my tournaments") }, void 0, false, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 51,
        columnNumber: 14
      }, this)
    });
    menus.push({
      link: "/tournaments/new",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/User/UserSingleMenus.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        t("create tournament")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserSingleMenus.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    });
  }
  return { menus };
};

// app/components/pages/User/UserSocial.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var UserSocial = (props) => {
  const { data, isOwner } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { size: 10, style: { display: "flex", flexWrap: "wrap" }, children: [
    data.profile.facebookLink && (data.profile.privateFacebookLink !== "private" || isOwner) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: data.profile.facebookLink.indexOf("https://") > -1 ? data.profile.facebookLink : `https://${data.profile.facebookLink}`,
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(avatar_default, { src: "/image/social/facebook.png", size: 40 }, void 0, false, {
          fileName: "app/components/pages/User/UserSocial.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/UserSocial.tsx",
        lineNumber: 18,
        columnNumber: 11
      },
      this
    ),
    data.profile.xLink && (data.profile.privateXLink !== "private" || isOwner) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: data.profile.xLink.indexOf("https://") > -1 ? data.profile.xLink : `https://${data.profile.xLink}`,
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(avatar_default, { src: "/image/social/x.png", size: 40 }, void 0, false, {
          fileName: "app/components/pages/User/UserSocial.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/UserSocial.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ),
    data.profile.twitchLink && (data.profile.privateTwitchLink !== "private" || isOwner) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: data.profile.twitchLink.indexOf("https://") > -1 ? data.profile.twitchLink : `https://${data.profile.twitchLink}`,
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(avatar_default, { src: "/image/social/twitch.png", size: 40 }, void 0, false, {
          fileName: "app/components/pages/User/UserSocial.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/UserSocial.tsx",
        lineNumber: 46,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/User/UserSocial.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/components/pages/User/UserTitle.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var { useToken: useToken2 } = theme_default;
var UserTitle = (props) => {
  const { data, isOwner, loading, onKycClicked, onSubmitLike, likeStatus } = props;
  const { token } = useToken2();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl, scheme } = (0, import_react3.useContext)(AppContext);
  const { user, openLoginModal } = (0, import_react3.useContext)(AuthContext);
  const profileUrl = `${baseUrl}/users/${data.userName ? data.userName : data.uuid}`;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const navigateToSetting = () => {
    navigate("/settings");
  };
  const roles = data.roles.sort((a, b) => a.id - b.id);
  return loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
    fileName: "app/components/pages/User/UserTitle.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 8, style: { display: "flex" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: [20, 20], style: { alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { display: "flex", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title, { level: 3, style: { margin: 0, fontSize: 36 }, children: data.displayName }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          roles[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { style: { marginRight: "5px" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              image_default,
              {
                width: 30,
                src: `${cdnUrl}/${roles[0].badgeImage}`,
                preview: false
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 69,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: t(roles[0].name) }, void 0, false, {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 74,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title, { level: 3, style: { margin: 0 }, children: data.displayName }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          roles[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            tooltip_default,
            {
              title: roles[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { style: { marginRight: "5px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { color: "white" }, children: t(roles[0].name) }, void 0, false, {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 89,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 88,
                columnNumber: 25
              }, this),
              placement: "top",
              arrow: false,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                image_default,
                {
                  width: 30,
                  src: `${cdnUrl}/${roles[0].badgeImage}`,
                  preview: false
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 98,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 85,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 10, style: { display: "flex", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            ShareDropDown,
            {
              copiedMessage: t("profile url copied"),
              postUrl: profileUrl,
              shareProfile: true
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 111,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { children: [
            isOwner && (!data.profile || data.profile && !data.isDopaVerified) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              TiltButton,
              {
                color: "primary",
                style: { paddingInline: 15 },
                onClick: onKycClicked,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { strokeWidth: 2 }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserCheck, {}, void 0, false, {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 130,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { color: "inherit" }, children: t("verify account") }, void 0, false, {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 131,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 129,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 124,
                columnNumber: 23
              },
              this
            ),
            data.isDopaVerified && !roles[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                image_default,
                {
                  width: 30,
                  src: "/image/verifiedUser.png",
                  preview: false
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 139,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: t("verified") }, void 0, false, {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 144,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this),
            !isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              TiltButton,
              {
                color: likeStatus ? "secondary" : "primary",
                style: { paddingInline: 15 },
                onClick: user ? onSubmitLike : openLoginModal,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  space_default,
                  {
                    size: 5,
                    style: {
                      strokeWidth: 2,
                      color: likeStatus ? "#7C6FF6" : "inherit"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThumbsUp, {}, void 0, false, {
                        fileName: "app/components/pages/User/UserTitle.tsx",
                        lineNumber: 160,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: likeStatus ? t("liked") : t("like") }, void 0, false, {
                        fileName: "app/components/pages/User/UserTitle.tsx",
                        lineNumber: 161,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 148,
                columnNumber: 21
              },
              this
            ),
            isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              TiltButton,
              {
                color: "secondary",
                style: { paddingInline: 15 },
                onClick: navigateToSetting,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  space_default,
                  {
                    size: 5,
                    style: {
                      strokeWidth: 2,
                      color: likeStatus ? "#7C6FF6" : "inherit"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PenLine, { style: { color: "#7a6fee" } }, void 0, false, {
                        fileName: "app/components/pages/User/UserTitle.tsx",
                        lineNumber: 178,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: t("edit profile") }, void 0, false, {
                        fileName: "app/components/pages/User/UserTitle.tsx",
                        lineNumber: 179,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 166,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: [10, 10], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 24, style: { minWidth: "320px" }, children: [
              isOwner && (!data.profile || data.profile && !data.isDopaVerified) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                TiltButton,
                {
                  color: "primary",
                  style: { paddingInline: 15 },
                  onClick: onKycClicked,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { strokeWidth: 2 }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserCheck, {}, void 0, false, {
                      fileName: "app/components/pages/User/UserTitle.tsx",
                      lineNumber: 198,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { color: "inherit" }, children: t("verify account") }, void 0, false, {
                      fileName: "app/components/pages/User/UserTitle.tsx",
                      lineNumber: 199,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 197,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 192,
                  columnNumber: 25
                },
                this
              ),
              data.isDopaVerified && !roles[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  image_default,
                  {
                    width: 30,
                    src: "/image/verifiedUser.png",
                    preview: false
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/UserTitle.tsx",
                    lineNumber: 207,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: t("verified") }, void 0, false, {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 212,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 206,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 24, style: { minWidth: "320px" }, children: [
              !isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                TiltButton,
                {
                  color: likeStatus ? "secondary" : "primary",
                  style: { paddingInline: 15 },
                  onClick: user ? onSubmitLike : openLoginModal,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    space_default,
                    {
                      size: 5,
                      style: {
                        strokeWidth: 2,
                        color: likeStatus ? "#7C6FF6" : "inherit"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThumbsUp, {}, void 0, false, {
                          fileName: "app/components/pages/User/UserTitle.tsx",
                          lineNumber: 230,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: likeStatus ? t("liked") : t("like") }, void 0, false, {
                          fileName: "app/components/pages/User/UserTitle.tsx",
                          lineNumber: 231,
                          columnNumber: 27
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/User/UserTitle.tsx",
                      lineNumber: 223,
                      columnNumber: 25
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 218,
                  columnNumber: 23
                },
                this
              ),
              isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                TiltButton,
                {
                  color: "secondary",
                  style: { paddingInline: 15 },
                  onClick: navigateToSetting,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    space_default,
                    {
                      size: 5,
                      style: {
                        strokeWidth: 2,
                        color: likeStatus ? "#7C6FF6" : "inherit"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PenLine, { style: { color: "#7a6fee" } }, void 0, false, {
                          fileName: "app/components/pages/User/UserTitle.tsx",
                          lineNumber: 248,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { children: t("edit profile") }, void 0, false, {
                          fileName: "app/components/pages/User/UserTitle.tsx",
                          lineNumber: 249,
                          columnNumber: 27
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/User/UserTitle.tsx",
                      lineNumber: 241,
                      columnNumber: 25
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/UserTitle.tsx",
                  lineNumber: 236,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserSocial, { data, isOwner }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { children: (data.profile.privateDiscordId !== "private" || isOwner) && data.profile.discordId && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(avatar_default, { src: "/image/social/discord.png", size: 30 }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 269,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: t("Discord ID") }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 270,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          ToCopyField,
          {
            alertMessage: t("discord ID copied"),
            copyMessage: data.profile.discordId,
            text: data.profile.discordId,
            style: { paddingBlock: 3 },
            fontSize: "0.9em"
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 271,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 268,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { children: (data.profile.privateEmail !== "private" || isOwner) && data.profile.profileEmail && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { marginTop: "5px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Mail, { style: { color: "#7063f4" } }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 285,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.profileEmail }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 286,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 284,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 281,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { children: (data.profile.privatePhone !== "private" || isOwner) && data.profile.profilePhoneNumber && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { marginTop: "5px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Phone, { style: { color: "#7063f4" } }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 296,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.profilePhoneNumber }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 297,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 295,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 264,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { at: "sm", style: { marginLeft: "9px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: 10, style: { marginBottom: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 24, style: { marginLeft: "-5px" }, children: (data.profile.privateDiscordId !== "private" || isOwner) && data.profile.discordId && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(avatar_default, { src: "/image/social/discord.png", size: 30 }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 311,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: t("Discord ID") }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            ToCopyField,
            {
              alertMessage: t("discord ID copied"),
              copyMessage: data.profile.discordId,
              text: data.profile.discordId,
              style: { paddingBlock: 3 },
              fontSize: "0.9em"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 313,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 310,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 307,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 24, children: (data.profile.privateEmail !== "private" || isOwner) && data.profile.profileEmail && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { marginTop: "5px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Mail, { style: { color: "#7063f4" } }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 327,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.profileEmail }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 328,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 326,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 323,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 24, children: (data.profile.privatePhone !== "private" || isOwner) && data.profile.profilePhoneNumber && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { marginTop: "5px" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Phone, { style: { color: "#7063f4" } }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 338,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.profilePhoneNumber }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 339,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 337,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 334,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 306,
        columnNumber: 9
      }, this),
      (data.profile.bio || data.profile.websiteUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            className: "ctrlg-html",
            style: {
              fontSize: "0.9em",
              color: scheme === "dark" ? "#fff" : "#000"
            },
            dangerouslySetInnerHTML: {
              __html: `${data.profile.bio}`
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 348,
            columnNumber: 13
          },
          this
        ),
        (data.profile.websiteUrl && data.profile.privateWebsite !== "private" || data.profile.websiteUrl && isOwner) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { style: { color: "#786fe6" } }, void 0, false, {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 362,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "a",
            {
              href: data.profile.websiteUrl.indexOf("https://") > -1 || data.profile.websiteUrl.indexOf("http://") > -1 ? data.profile.websiteUrl : `https://${data.profile.websiteUrl}`,
              target: "_blank",
              rel: "noreferrer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.websiteUrl }, void 0, false, {
                fileName: "app/components/pages/User/UserTitle.tsx",
                lineNumber: 373,
                columnNumber: 19
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 363,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 347,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginTop: "15px", marginLeft: "-2px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserSocial, { data, isOwner }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 382,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 305,
      columnNumber: 7
    }, this),
    (data.profile.bio || data.profile.websiteUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "ctrlg-html",
          style: {
            fontSize: "0.9em",
            color: scheme === "dark" ? "#fff" : "#000"
          },
          dangerouslySetInnerHTML: {
            __html: `${data.profile.bio}`
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 388,
          columnNumber: 13
        },
        this
      ),
      (data.profile.websiteUrl && data.profile.privateWebsite !== "private" || data.profile.websiteUrl && isOwner) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { style: { color: "#786fe6" } }, void 0, false, {
          fileName: "app/components/pages/User/UserTitle.tsx",
          lineNumber: 402,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            href: data.profile.websiteUrl.indexOf("https://") > -1 || data.profile.websiteUrl.indexOf("http://") > -1 ? data.profile.websiteUrl : `https://${data.profile.websiteUrl}`,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: data.profile.websiteUrl }, void 0, false, {
              fileName: "app/components/pages/User/UserTitle.tsx",
              lineNumber: 413,
              columnNumber: 19
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/UserTitle.tsx",
            lineNumber: 403,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserTitle.tsx",
        lineNumber: 401,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 387,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/UserTitle.tsx",
      lineNumber: 386,
      columnNumber: 9
    }, this),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/UserTitle.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
};

// app/routes/_app.users.$uuid.tsx
var import_session = __toESM(require_session());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function UserSingleLayout() {
  const {
    userInfo,
    uuid,
    frameAsset,
    likeCurrenUser,
    allLikeByUser,
    amountLikeByUser,
    searchParams
  } = useLoaderData();
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const [form] = form_default.useForm();
  const { user } = (0, import_react5.useContext)(AuthContext);
  const navigate = useNavigate();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const isOrganizer = user && user.roles.includes("organizer") && user.uuid === uuid;
  const isOwner = user && user.id === userInfo.id;
  const { menus } = UserSingleMenus(isOwner, isOrganizer);
  const [kycModal, setKycModal] = (0, import_react5.useState)(false);
  const [likeAmountModal, setLikeAmountModal] = (0, import_react5.useState)(false);
  const [likeStatus, setLikeStatus] = (0, import_react5.useState)(false);
  const [allLikeByUserList, setAllLikeByUserList] = (0, import_react5.useState)([]);
  const [amountLikeByUserNumber, setAmountLikeByUserNumber] = (0, import_react5.useState)(amountLikeByUser);
  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent", padding: 0 } },
    modalRender: (modal) => modal
  };
  const onSubmitLike = () => {
    fetcher.submit(
      {
        action: "submit-likeToggle"
        // data: JSON.stringify({
        //   ...value,
        //   birthday: dayjs(newDateOfBirth).format("YYYY-MM-DD"),
        // }),
      },
      { method: "post" }
    );
  };
  const loadMoreData = () => {
    console.log("loadmore Data");
    const newSearchParams = {
      ...searchParams,
      offset: allLikeByUserList.length
    };
    const queryString = new URLSearchParams(
      (0, import_lodash.omitBy)(newSearchParams, import_lodash.isNil)
    ).toString();
    fetcher.load(`.?${queryString}`);
  };
  (0, import_react5.useEffect)(() => {
    if (fetcher.data && fetcher.data.success && fetcher.state === "idle") {
      setKycModal(false);
    }
  }, [fetcher]);
  (0, import_react5.useEffect)(() => {
    if (likeCurrenUser == null ? void 0 : likeCurrenUser.isLiked) {
      setLikeStatus(true);
    } else {
      setLikeStatus(false);
    }
  }, [likeCurrenUser]);
  (0, import_react5.useEffect)(() => {
    setAllLikeByUserList(
      allLikeByUser.items && allLikeByUser.items.length ? allLikeByUser.items : []
    );
  }, [allLikeByUser.items]);
  (0, import_react5.useEffect)(() => {
    setAllLikeByUserList([...allLikeByUser.items]);
  }, [allLikeByUser.items]);
  (0, import_react5.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.allLikeByUser) {
      setAllLikeByUserList((items) => [
        ...items,
        ...fetcher.data.allLikeByUser.items
      ]);
    }
  }, [fetcher.data]);
  (0, import_react5.useEffect)(() => {
    setAmountLikeByUserNumber(amountLikeByUser);
  }, [amountLikeByUser]);
  console.log("fecther", fetcher.state);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      UserHero,
      {
        data: userInfo,
        frameAsset,
        fetcher,
        isOwner,
        onLikeAmountClicked: () => setLikeAmountModal(true),
        amountLikeByUser: amountLikeByUserNumber
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.tsx",
        lineNumber: 315,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        style: {
          paddingInline: "3.5%",
          paddingBlock: 50,
          maxWidth: 1440,
          marginInline: "auto"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            UserTitle,
            {
              data: userInfo,
              isOwner,
              onKycClicked: () => setKycModal(true),
              likeStatus,
              onSubmitLike
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.users.$uuid.tsx",
              lineNumber: 331,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AffixMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltMenus, { menus, preventScrollReset: true }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.tsx",
            lineNumber: 339,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.tsx",
            lineNumber: 338,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.tsx",
            lineNumber: 341,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.users.$uuid.tsx",
        lineNumber: 323,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setKycModal(false),
        open: kycModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          KycForm,
          {
            fetcher,
            form,
            loading: navigation.state !== "idle"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.users.$uuid.tsx",
            lineNumber: 348,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.tsx",
        lineNumber: 343,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setLikeAmountModal(false),
        open: likeAmountModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            id: "scrollableDiv1",
            style: { maxHeight: "400px", overflowY: "auto" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(typography_default.Title, { level: 4, children: t("people who liked you") }, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.tsx",
                lineNumber: 363,
                columnNumber: 11
              }, this),
              allLikeByUserList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                list_default,
                {
                  style: { marginTop: 10 },
                  bordered: false,
                  dataSource: allLikeByUserList,
                  renderItem: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      "div",
                      {
                        style: {
                          position: "relative",
                          // Set position to relative for the parent div
                          padding: "40px",
                          backgroundImage: `url(${cdnUrl}/${item.assetFrame})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "fit-content",
                          // Adjust the width to fit content
                          height: "fit-content",
                          // Adjust the height to fit content
                          display: "inline-block"
                          // Make the div behave as an inline-block
                        },
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              top: "18.5%",
                              left: "17.5%"
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                              avatar_default,
                              {
                                src: item && item.displayImage && cdnUrl ? `${cdnUrl}/${item.displayImage}` : "/image/user-placeholder.png",
                                size: 50
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/_app.users.$uuid.tsx",
                                lineNumber: 394,
                                columnNumber: 25
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_app.users.$uuid.tsx",
                            lineNumber: 387,
                            columnNumber: 23
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.users.$uuid.tsx",
                        lineNumber: 374,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      typography_default.Title,
                      {
                        level: 5,
                        onClick: () => {
                          setLikeAmountModal(false);
                          navigate(
                            `/users/${(item == null ? void 0 : item.userName) ? item.userName : item.uuid}`
                          );
                        },
                        style: { cursor: "pointer" },
                        children: item.displayName
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.users.$uuid.tsx",
                        lineNumber: 405,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.users.$uuid.tsx",
                    lineNumber: 373,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.users.$uuid.tsx",
                    lineNumber: 372,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.users.$uuid.tsx",
                  lineNumber: 367,
                  columnNumber: 13
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                empty_default,
                {
                  image: empty_default.PRESENTED_IMAGE_SIMPLE,
                  description: t("no user")
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.users.$uuid.tsx",
                  lineNumber: 422,
                  columnNumber: 13
                },
                this
              ),
              fetcher.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                skeleton_default,
                {
                  avatar: true,
                  paragraph: {
                    rows: 0
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.users.$uuid.tsx",
                  lineNumber: 428,
                  columnNumber: 13
                },
                this
              ),
              allLikeByUserList && allLikeByUserList.length < amountLikeByUserNumber && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { textAlign: "center", margin: "20px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(button_default, { onClick: loadMoreData, children: "Load More" }, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.tsx",
                lineNumber: 438,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.tsx",
                lineNumber: 437,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.users.$uuid.tsx",
            lineNumber: 359,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.tsx",
        lineNumber: 354,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.tsx",
    lineNumber: 314,
    columnNumber: 5
  }, this);
}
export {
  UserSingleLayout as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid-GG7VAC2J.js.map
