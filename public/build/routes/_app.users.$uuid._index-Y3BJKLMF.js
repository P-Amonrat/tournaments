import {
  AlbumIndexEntry
} from "/build/_shared/chunk-PDUDN3KR.js";
import {
  LuFileText,
  LuUserCircle
} from "/build/_shared/chunk-NZBABY6K.js";
import {
  GenIcon
} from "/build/_shared/chunk-64IMBVZI.js";
import {
  Award,
  Book,
  Gamepad2,
  Trophy
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  avatar_default,
  button_default,
  card_default,
  col_default,
  divider_default,
  empty_default,
  flex_default,
  image_default,
  require_dayjs_min,
  row_default,
  space_default,
  theme_default,
  timeline_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Link,
  useMatches,
  useRouteLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.users.$uuid._index.tsx
var import_react11 = __toESM(require_react());

// app/components/pages/User/MyGameProfileSection.tsx
var import_react2 = __toESM(require_react());

// app/components/pages/User/MyGameProfileEntry.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function MyGameProfileEntry(props) {
  const { t } = useTranslation();
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const targetRank = data.rank;
  const foundRank = data.rankingGame.rank.find(
    (rank) => rank.name.toLowerCase() === targetRank.toLowerCase()
  );
  const photosStyle = {
    position: "relative",
    height: 300,
    width: 200,
    backgroundSize: "cover",
    backgroundPosition: "center"
    // cursor: "pointer",
  };
  const triangleClipPath = "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        filter: "url('#goo')",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        card_default,
        {
          bordered: false,
          style: {
            ...photosStyle,
            clipPath: triangleClipPath,
            backgroundImage: `url("${cdnUrl}/${data.rankingGame.image}")`,
            textAlign: "center",
            justifyContent: "center",
            filter: "url('#goo')"
          },
          bodyStyle: { padding: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "absolute", width: "100%", bottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "triangle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "triangle-box",
                style: {
                  backgroundColor: (foundRank == null ? void 0 : foundRank.backgroundColor) ? foundRank == null ? void 0 : foundRank.backgroundColor : "rgba(222,151,35)"
                }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                lineNumber: 54,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
              lineNumber: 52,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 135,
                  // bottom: "50px",
                  width: "100%",
                  left: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 1
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    image_default,
                    {
                      style: {
                        marginBottom: 5,
                        zIndex: 2,
                        filter: "drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.6))"
                      },
                      width: 60,
                      preview: false,
                      src: `${cdnUrl}/${foundRank == null ? void 0 : foundRank.icon}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                      lineNumber: 77,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    space_default,
                    {
                      style: {
                        textAlign: "center",
                        marginBottom: 0,
                        color: "#FFF"
                      },
                      size: 0,
                      align: "center",
                      direction: "vertical",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LuUserCircle, { style: { fontSize: 18 } }, void 0, false, {
                            fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { title: (data == null ? void 0 : data.ign) || "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            Text,
                            {
                              style: {
                                display: "block",
                                color: "inherit",
                                whiteSpace: "nowrap",
                                maxWidth: 145,
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                              },
                              children: t((data == null ? void 0 : data.ign) || "")
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                              lineNumber: 100,
                              columnNumber: 17
                            },
                            this
                          ) }, void 0, false, {
                            fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                          lineNumber: 97,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          Text,
                          {
                            style: {
                              marginTop: 0,
                              fontSize: 14,
                              color: "#FFF",
                              whiteSpace: "nowrap"
                            },
                            children: foundRank == null ? void 0 : foundRank.name
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                      lineNumber: 87,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                lineNumber: 64,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                style: { position: "absolute", visibility: "hidden" },
                width: "0",
                height: "0",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("filter", { id: "goo", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "feGaussianBlur",
                    {
                      in: "SourceGraphic",
                      stdDeviation: "4",
                      result: "blur"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                      lineNumber: 135,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "feColorMatrix",
                    {
                      in: "blur",
                      mode: "matrix",
                      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                      result: "goo"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                      lineNumber: 140,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" }, void 0, false, {
                    fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                    lineNumber: 146,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                  lineNumber: 133,
                  columnNumber: 11
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
                lineNumber: 126,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/MyGameProfileEntry.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/User/MyGameProfileSection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MyGameProfileSection(props) {
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = (0, import_react2.useContext)(AppContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { justify: "space-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          space_default,
          {
            direction: "horizontal",
            size: 5,
            style: { fontSize: 24, fontWeight: 600 },
            align: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Award, { style: { color: "#7C6FF6" } }, void 0, false, {
                fileName: "app/components/pages/User/MyGameProfileSection.tsx",
                lineNumber: 37,
                columnNumber: 13
              }, this),
              t("rank in game")
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/User/MyGameProfileSection.tsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/User/MyGameProfileSection.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          divider_default,
          {
            style: {
              marginBlock: 15,
              borderColor: scheme === "dark" ? "#3e3e3e" : "#dfdfdf"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyGameProfileSection.tsx",
            lineNumber: 41,
            columnNumber: 9
          },
          this
        ),
        data[0] ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          flex_default,
          {
            gap: 30,
            align: "flex-start",
            style: { overflow: "auto", marginInline: -18, paddingInline: 8 },
            className: "hide-scrollbar",
            children: data.map((gameInfo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { padding: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                style: {
                  filter: scheme === "dark" ? "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.6))" : "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MyGameProfileEntry, { data: gameInfo }, void 0, false, {
                  fileName: "app/components/pages/User/MyGameProfileSection.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameProfileSection.tsx",
                lineNumber: 56,
                columnNumber: 17
              },
              this
            ) }, index, false, {
              fileName: "app/components/pages/User/MyGameProfileSection.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this))
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyGameProfileSection.tsx",
            lineNumber: 48,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("no data") }, void 0, false, {
          fileName: "app/components/pages/User/MyGameProfileSection.tsx",
          lineNumber: 70,
          columnNumber: 31
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/MyGameProfileSection.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyGameProfileSection.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/pages/User/MyGameProfileSection.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/MyDetailsSection.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text2 } = typography_default;
function MyDetailsSection(props) {
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = (0, import_react3.useContext)(AppContext);
  const [activeTabIndex, setActiveTabIndex] = (0, import_react3.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          row_default,
          {
            justify: "space-between",
            style: { alignItems: "center" },
            gutter: [0, 10],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              space_default,
              {
                style: {
                  fontWeight: 600,
                  marginRight: "10px",
                  fontSize: "24px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LuFileText, { style: { color: "#7C6FF6" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyDetailsSection.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontSize: "24px", fontWeight: 600 }, children: t("my personal details") }, void 0, false, {
                    fileName: "app/components/pages/User/MyDetailsSection.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/MyDetailsSection.tsx",
                lineNumber: 35,
                columnNumber: 11
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/MyDetailsSection.tsx",
              lineNumber: 34,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyDetailsSection.tsx",
            lineNumber: 29,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(divider_default, { style: { marginBlock: 10 } }, void 0, false, {
          fileName: "app/components/pages/User/MyDetailsSection.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this),
        data && data.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "vertical", size: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: `tilt-menu ${scheme}`, children: data.map((personalDetail, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "li",
            {
              className: "tilt-menu-item",
              onClick: () => setActiveTabIndex(index),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "span",
                {
                  className: `tilt-menu-link${activeTabIndex == index ? " active" : ""}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { color: "inherit" }, children: personalDetail.title }, void 0, false, {
                    fileName: "app/components/pages/User/MyDetailsSection.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/MyDetailsSection.tsx",
                  lineNumber: 59,
                  columnNumber: 17
                },
                this
              )
            },
            index,
            false,
            {
              fileName: "app/components/pages/User/MyDetailsSection.tsx",
              lineNumber: 54,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/pages/User/MyDetailsSection.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          data.map((personalDetail, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "div",
            {
              style: {
                display: activeTabIndex === index ? "block" : "none",
                marginTop: 10
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "div",
                {
                  className: "ctrlg-html",
                  dangerouslySetInnerHTML: {
                    __html: `${personalDetail.detail}`
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/MyDetailsSection.tsx",
                  lineNumber: 79,
                  columnNumber: 15
                },
                this
              )
            },
            `data-${index}`,
            false,
            {
              fileName: "app/components/pages/User/MyDetailsSection.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "app/components/pages/User/MyDetailsSection.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("no data") }, void 0, false, {
          fileName: "app/components/pages/User/MyDetailsSection.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/MyDetailsSection.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyDetailsSection.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/User/MyAlbumsSection.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text: Text3, Title } = typography_default;
function MyAlbumsSection(props) {
  const { t } = useTranslation();
  const { data, uuid } = props;
  const { token } = useToken();
  const { scheme } = (0, import_react4.useContext)(AppContext);
  const newData = data.slice(0, 7);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          row_default,
          {
            justify: "space-between",
            style: { alignItems: "center" },
            gutter: [0, 10],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              space_default,
              {
                style: {
                  fontWeight: 600,
                  marginRight: "10px",
                  fontSize: "24px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Book, { style: { color: "#7C6FF6" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyAlbumsSection.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { style: { fontSize: "24px", fontWeight: 600 }, children: t("my albums") }, void 0, false, {
                    fileName: "app/components/pages/User/MyAlbumsSection.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/MyAlbumsSection.tsx",
                lineNumber: 41,
                columnNumber: 11
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/MyAlbumsSection.tsx",
              lineNumber: 40,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyAlbumsSection.tsx",
            lineNumber: 35,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(divider_default, { style: { marginBlock: 10 } }, void 0, false, {
          fileName: "app/components/pages/User/MyAlbumsSection.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        newData && newData.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: [30, 30], children: [
          newData.slice(0, 2).map((album, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlbumIndexEntry, { album, uuid }, void 0, false, {
            fileName: "app/components/pages/User/MyAlbumsSection.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this) }, index, false, {
            fileName: "app/components/pages/User/MyAlbumsSection.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)),
          data.length > 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "my-album", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              style: {
                position: "relative",
                width: "100%",
                paddingBottom: "60%",
                borderRadius: 12,
                backgroundColor: token.colorBgLayout
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                Title,
                {
                  level: 5,
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    margin: 0,
                    transform: "translate(-50%, -50%)"
                  },
                  children: t("view more")
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/MyAlbumsSection.tsx",
                  lineNumber: 75,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/MyAlbumsSection.tsx",
              lineNumber: 66,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/MyAlbumsSection.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/MyAlbumsSection.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/MyAlbumsSection.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: t("no data") }, void 0, false, {
          fileName: "app/components/pages/User/MyAlbumsSection.tsx",
          lineNumber: 93,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/MyAlbumsSection.tsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyAlbumsSection.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/User/MyExperiencesSection.tsx
var import_react6 = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());

// node_modules/react-icons/fa/index.mjs
function FaAngleDoubleDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" }, "child": [] }] })(props);
}
function FaAngleDoubleUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" }, "child": [] }] })(props);
}
function FaCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" }, "child": [] }] })(props);
}

// app/components/pages/User/MyExperiencesSection.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Text: Text4, Title: Title2 } = typography_default;
function MyExperiencesSection(props) {
  const { t } = useTranslation();
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [screenSize, setScreenSize] = (0, import_react6.useState)("");
  const [displayLimit, setDisplayLimit] = (0, import_react6.useState)(1);
  const { scheme } = (0, import_react6.useContext)(AppContext);
  const expData = data.filter(
    (item) => Array.isArray(item.userExperiences) && item.userExperiences.length > 0
  );
  const isAllEmpty = expData.length === 0;
  const handleLoadMore = () => {
    setDisplayLimit(displayLimit + 1e3);
  };
  const handleLoadLess = () => {
    setDisplayLimit(displayLimit - 1e3);
  };
  (0, import_react6.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          row_default,
          {
            justify: "space-between",
            style: { alignItems: "center" },
            gutter: [0, 10],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              space_default,
              {
                style: {
                  fontWeight: 600,
                  marginRight: "10px",
                  fontSize: "24px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Gamepad2, { style: { color: "#7C6FF6" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "24px", fontWeight: 600 }, children: t("my experiences") }, void 0, false, {
                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                lineNumber: 88,
                columnNumber: 11
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/MyExperiencesSection.tsx",
              lineNumber: 87,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyExperiencesSection.tsx",
            lineNumber: 82,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { marginBlock: 10, marginBottom: "25px" } }, void 0, false, {
          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        !isAllEmpty ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { direction: "vertical", style: { display: "flex" }, children: expData.slice(0, displayLimit).map((experience, index) => {
            var _a, _b, _c;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              space_default,
              {
                direction: "vertical",
                style: { display: "flex" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  space_default,
                  {
                    direction: "vertical",
                    style: { display: "flex" },
                    size: "large",
                    children: [
                      experience.userExperiences[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          avatar_default,
                          {
                            src: `${cdnUrl}/${((_a = experience.rankingGame) == null ? void 0 : _a.icon) ? (_b = experience.rankingGame) == null ? void 0 : _b.icon : (experience == null ? void 0 : experience.icon) ? experience.icon : null}`,
                            size: 64,
                            style: {
                              boxShadow: scheme === "dark" ? "0px 5px 10px -2px rgba(0, 0, 0, 0.6)" : "0px 5px 10px -2px rgba(0, 0, 0, 0.2)"
                            }
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontWeight: 600, fontSize: "24px" }, children: ((_c = experience.rankingGame) == null ? void 0 : _c.name) ? experience.rankingGame.name : experience.title }, void 0, false, {
                          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                          lineNumber: 137,
                          columnNumber: 25
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                        lineNumber: 120,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginLeft: "25px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                        timeline_default,
                        {
                          items: experience.userExperiences.map(
                            (experienceItem, index2) => ({
                              key: index2,
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { justify: "space-between", children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                                  col_default,
                                  {
                                    span: screenSize === "greaterThanSM" ? 8 : 24,
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title2, { level: 5, children: experienceItem.name }, void 0, false, {
                                        fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 35
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { children: [
                                        (0, import_dayjs.default)(experienceItem.startDate).format(
                                          "MMM YYYY"
                                        ),
                                        " ",
                                        "-",
                                        " ",
                                        experienceItem.endDate ? (0, import_dayjs.default)(experienceItem.endDate).format(
                                          "MMM YYYY"
                                        ) : t("present")
                                      ] }, void 0, true, {
                                        fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                                        lineNumber: 156,
                                        columnNumber: 35
                                      }, this)
                                    ]
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 33
                                  },
                                  this
                                ),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                                  col_default,
                                  {
                                    span: screenSize === "greaterThanSM" ? 16 : 24,
                                    children: experienceItem.description
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                                    lineNumber: 168,
                                    columnNumber: 33
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                                lineNumber: 151,
                                columnNumber: 31
                              }, this)
                            })
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                          lineNumber: 146,
                          columnNumber: 23
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                    lineNumber: 114,
                    columnNumber: 19
                  },
                  this
                )
              },
              index,
              false,
              {
                fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                lineNumber: 109,
                columnNumber: 17
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/components/pages/User/MyExperiencesSection.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          displayLimit < data.length && !isAllEmpty && // Conditionally show "Load More"
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            button_default,
            {
              type: "text",
              onClick: handleLoadMore,
              style: {
                display: "flex",
                textAlign: "center",
                margin: "auto"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                t("load more"),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  FaAngleDoubleDown,
                  {
                    style: { color: "#7C6FF6", marginTop: "7px" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                    lineNumber: 199,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                lineNumber: 196,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/MyExperiencesSection.tsx",
              lineNumber: 187,
              columnNumber: 13
            },
            this
          ),
          displayLimit > data.length && !isAllEmpty && // Conditionally show "Load More"
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            button_default,
            {
              type: "text",
              onClick: handleLoadLess,
              style: {
                display: "flex",
                textAlign: "center",
                margin: "auto"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                t("load less"),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  FaAngleDoubleUp,
                  {
                    style: { color: "#7C6FF6", marginTop: "7px" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                    lineNumber: 219,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/pages/User/MyExperiencesSection.tsx",
                lineNumber: 216,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/MyExperiencesSection.tsx",
              lineNumber: 207,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: t("no data") }, void 0, false, {
          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
          lineNumber: 227,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/MyExperiencesSection.tsx",
          lineNumber: 227,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyExperiencesSection.tsx",
      lineNumber: 72,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/User/MyAcheivementProfileSection.tsx
var import_react10 = __toESM(require_react());

// app/components/pages/User/MyAchievementProfileEntry.tsx
var import_react8 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var { Text: Text5 } = typography_default;
function MyAchievementProfileEntry(props) {
  const { data, type } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react8.useContext)(AppContext);
  const backgroundColor = type === "brand" ? "#D4FB6F" : type === "tournament" ? "#7C6FF6" : "#E3E3E3";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    space_default,
    {
      onClick: (data == null ? void 0 : data.url) ? () => window.open(data.url, "_blank") : void 0,
      direction: "vertical",
      size: 0,
      style: {
        display: "flex",
        position: "relative",
        height: "100%",
        width: 200,
        cursor: (data == null ? void 0 : data.url) ? "pointer" : "default"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          card_default,
          {
            bordered: false,
            style: {
              position: "relative",
              height: 250,
              backgroundColor: scheme === "dark" ? "#121212" : "#e9e9e9",
              borderRadius: 10,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: data && data.image ? `url("${cdnUrl}/${data.image}")` : `url("/image/placeholder.png")`,
              boxShadow: scheme === "dark" ? "0 8px 20px 0 rgba(0, 0, 0, 0.6)" : "0 8px 20px 0 rgba(0, 0, 0, 0.2)",
              zIndex: 1
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
            lineNumber: 40,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            style: {
              position: "relative",
              paddingInline: "7.5%",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              card_default,
              {
                bodyStyle: { padding: 10, textAlign: "center" },
                bordered: false,
                style: {
                  position: "relative",
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  backgroundColor
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(tooltip_default, { title: data.name, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  Text5,
                  {
                    style: {
                      display: "block",
                      position: "relative",
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#000"
                    },
                    children: data.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
                    lineNumber: 79,
                    columnNumber: 13
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
                  lineNumber: 78,
                  columnNumber: 11
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
                lineNumber: 67,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
            lineNumber: 60,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyAchievementProfileEntry.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/User/MyAcheivementProfileSection.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var { Text: Text6 } = typography_default;
function MyAcheivementProfileSection(props) {
  var _a, _b, _c, _d, _e, _f;
  const { t } = useTranslation();
  const { data } = props;
  const { scheme } = (0, import_react10.useContext)(AppContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
        border: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          row_default,
          {
            justify: "space-between",
            style: { alignItems: "center" },
            gutter: [0, 10],
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                space_default,
                {
                  style: {
                    fontWeight: 600,
                    marginRight: "10px",
                    fontSize: "24px"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Trophy, { style: { color: "#7C6FF6" } }, void 0, false, {
                      fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text6, { style: { fontSize: "24px", fontWeight: 600 }, children: t("my achievement") }, void 0, false, {
                      fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                      lineNumber: 48,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 40,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                lineNumber: 39,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "horizontal", size: 12, wrap: true, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "horizontal", size: 5, align: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FaCircle, { style: { color: "#D4FB6F" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 56,
                    columnNumber: 15
                  }, this),
                  data[0].title
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 55,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "horizontal", size: 5, align: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FaCircle, { style: { color: "#7C6FF6" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 60,
                    columnNumber: 15
                  }, this),
                  data[1].title
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "horizontal", size: 5, align: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FaCircle, { style: { color: "#E3E3E3" } }, void 0, false, {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 64,
                    columnNumber: 15
                  }, this),
                  data[2].title
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                lineNumber: 54,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                lineNumber: 53,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
          fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        ((_a = data[0].userAchievements) == null ? void 0 : _a.length) > 0 || ((_b = data[1].userAchievements) == null ? void 0 : _b.length) > 0 || ((_c = data[2].userAchievements) == null ? void 0 : _c.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          flex_default,
          {
            gap: 0,
            align: "flex-start",
            style: { overflow: "auto", marginInline: -18, paddingInline: 8 },
            className: "hide-scrollbar",
            children: [
              data[0] ? (_d = data[0]) == null ? void 0 : _d.userAchievements.map(
                (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { padding: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  MyAchievementProfileEntry,
                  {
                    data: achievement,
                    type: data[0].type
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 85,
                    columnNumber: 21
                  },
                  this
                ) }, index, false, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 84,
                  columnNumber: 19
                }, this)
              ) : null,
              data[1] ? (_e = data[1]) == null ? void 0 : _e.userAchievements.map(
                (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { padding: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  MyAchievementProfileEntry,
                  {
                    data: achievement,
                    type: data[1].type
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                  },
                  this
                ) }, index, false, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 96,
                  columnNumber: 19
                }, this)
              ) : null,
              data[2] ? (_f = data[2]) == null ? void 0 : _f.userAchievements.map(
                (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { padding: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  MyAchievementProfileEntry,
                  {
                    data: achievement,
                    type: data[2].type
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                    lineNumber: 109,
                    columnNumber: 21
                  },
                  this
                ) }, index, false, {
                  fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
                  lineNumber: 108,
                  columnNumber: 19
                }, this)
              ) : null
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
            lineNumber: 75,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: t("no data") }, void 0, false, {
          fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
          lineNumber: 119,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/User/MyAcheivementProfileSection.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app.users.$uuid._index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E41\u0E1A\u0E1A Player, Streamer \u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: `\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E01\u0E34\u0E14\u0E01\u0E47\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E34..\u0E2B\u0E21\u0E32\u0E22\u0E16\u0E36\u0E07 \u0E40\u0E1B\u0E34\u0E14 Player Profile | Ctrlg.gg`
    },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/profile.jpg`
    },
    {
      property: "og:image:width",
      content: "200"
    },
    {
      property: "og:image:height",
      content: "200"
    },
    {
      property: "og:description",
      content: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E41\u0E1A\u0E1A Player, Streamer \u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E"
    }
  ];
};
function UserSingle() {
  var _a, _b;
  const routeLoader = useRouteLoaderData("routes/_app.users.$uuid");
  const { userInfo, userSummaryInfo, uuid } = routeLoader;
  const { user } = (0, import_react11.useContext)(AuthContext);
  const { t } = useTranslation();
  const items = [];
  const isOwner = user && user.id === userInfo.id;
  const containerRef = (0, import_react11.useRef)(null);
  if (userInfo.profile.privateEmail !== "private" || isOwner) {
    items.push({
      key: "email",
      label: t("email"),
      children: userInfo.profile.profileEmail ? userInfo.profile.profileEmail : "-"
    });
  }
  if (userInfo.profile.privatePhone !== "private" || isOwner) {
    items.push({
      key: "phone",
      label: t("phone number"),
      children: userInfo.profile.profilePhoneNumber ? userInfo.profile.profilePhoneNumber : "-"
    });
  }
  if (userInfo.profile.privateDiscordId !== "private" || isOwner) {
    items.push({
      key: "discordId",
      label: t("discord ID"),
      children: userInfo.profile.discordId ? userInfo.profile.discordId : "-"
    });
  }
  (0, import_react11.useEffect)(() => {
    const container = containerRef.current;
    if (container) {
      const divs = Array.from(container.children);
      const orderMap = {
        userRankingGames: userSummaryInfo.sortOrder.userRankingGames,
        userAchievements: userSummaryInfo.sortOrder.userAchievements,
        userExperiences: userSummaryInfo.sortOrder.userExperiences,
        personalDetails: userSummaryInfo.sortOrder.personalDetails,
        albums: userSummaryInfo.sortOrder.albums
      };
      const sortedDivs = divs.sort(
        (a, b) => orderMap[a.id] - orderMap[b.id]
      );
      container.innerHTML = "";
      sortedDivs.forEach((div) => {
        container.appendChild(div);
      });
    }
  }, [
    userSummaryInfo.sortOrder.albums,
    userSummaryInfo.sortOrder.personalDetails,
    userSummaryInfo.sortOrder.userAchievements,
    userSummaryInfo.sortOrder.userExperiences,
    userSummaryInfo.sortOrder.userRankingGames
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      ref: containerRef,
      style: {
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        columnGap: "16px"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "userRankingGames", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MyGameProfileSection, { data: userSummaryInfo.userRankingGames }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "userAchievements", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MyAcheivementProfileSection, { data: userSummaryInfo.userAchievements }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "userExperiences", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MyExperiencesSection, { data: userSummaryInfo.userExperiences }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "personalDetails", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MyDetailsSection, { data: (_a = userSummaryInfo.personalDetails) == null ? void 0 : _a.details }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 132,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "albums", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MyAlbumsSection, { data: (_b = userSummaryInfo.albums) == null ? void 0 : _b.items, uuid }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.users.$uuid._index.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.users.$uuid._index.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}
export {
  UserSingle as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.users.$uuid._index-Y3BJKLMF.js.map
