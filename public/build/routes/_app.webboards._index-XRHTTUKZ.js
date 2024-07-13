import {
  WebboardIndexHeader
} from "/build/_shared/chunk-KPSLXTRG.js";
import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  IndexFilter
} from "/build/_shared/chunk-5WX7JNC5.js";
import {
  WebboardTags
} from "/build/_shared/chunk-WSOOSU5J.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  WebboardLists
} from "/build/_shared/chunk-N5A7AEUL.js";
import "/build/_shared/chunk-D5KO673L.js";
import "/build/_shared/chunk-ZP5K5WKW.js";
import {
  Pagination
} from "/build/_shared/chunk-JJYDDLYQ.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  Author
} from "/build/_shared/chunk-B3LWZSUK.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  affix_default,
  card_default,
  col_default,
  notification_default,
  row_default,
  skeleton_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Link,
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.webboards._index.tsx
var import_react2 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/pages/Webboard/WebboardIndexSlider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function WebboardIndexSlider(props) {
  const { data } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    row_default,
    {
      className: "hide-scrollbar",
      style: {
        position: "relative",
        paddingBlock: 20,
        paddingInline: "3.5%",
        overflowX: "auto"
      },
      gutter: 10,
      wrap: false,
      children: data.map((webboard) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        col_default,
        {
          span: 12,
          md: 8,
          lg: 6,
          xl: 4,
          xxl: 4,
          style: { position: "relative" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              style: {
                position: "relative",
                paddingBottom: "120%"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/webboards/${webboard.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                card_default,
                {
                  bordered: false,
                  style: {
                    position: "absolute",
                    display: "flex",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: 12,
                    backgroundImage: `url(${webboard.thumbnailImage ? `${cdnUrl}/${webboard.thumbnailImage}` : "/image/CTRLG-logo-banner.jpg"})`,
                    overflow: "hidden",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  },
                  bodyStyle: {
                    display: "flex",
                    flex: "auto",
                    paddingBottom: 20,
                    alignItems: "end"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayBg, {}, void 0, false, {
                      fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      space_default,
                      {
                        direction: "vertical",
                        size: 10,
                        style: { position: "relative", color: "#fff" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            Title,
                            {
                              level: 3,
                              className: "text-with-ellipsis",
                              style: { color: "inherit", margin: 0 },
                              children: webboard.title
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                              lineNumber: 78,
                              columnNumber: 19
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            Author,
                            {
                              avatarSize: 24,
                              fontSize: 14,
                              displayImage: webboard.anonymous ? "/image/avatar-anonymous.jpg" : `${cdnUrl}/${webboard.author.displayImage}`,
                              children: webboard.anonymous ? t("anonymous") : webboard.author.displayName
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                              lineNumber: 85,
                              columnNumber: 19
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                  lineNumber: 46,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
              lineNumber: 39,
              columnNumber: 11
            },
            this
          )
        },
        webboard.id,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Webboard/WebboardIndexSlider.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app.webboards._index.tsx
var import_lodash = __toESM(require_lodash());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function WebboardIndex() {
  const routeLoader = useRouteLoaderData("routes/_app.webboards");
  const revalidator = useRevalidator();
  const { searchParams, featuredWebboards, webboards } = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const navigate = useNavigate();
  const location = useLocation();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { user, openLoginModal } = (0, import_react2.useContext)(AuthContext);
  const { games, rooms, reactionOptions, tags } = routeLoader;
  const [api, contextHolder] = notification_default.useNotification();
  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room) => ({
        label: t(room.nameEn),
        value: room.id
      }))
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options: games.length > 0 ? games.map((game) => ({
        label: game.name,
        value: game.id,
        image: game.iconUrl
      })) : []
    }
  ];
  const handleFilter = (0, import_react2.useCallback)(
    (name, value) => {
      const newSearchParams = { ...searchParams };
      if (searchParams && searchParams[name]) {
        const values = searchParams[name].split(",");
        const containedIndex = values.indexOf(`${value}`);
        if (containedIndex > -1) {
          values.splice(containedIndex, 1);
        } else {
          values.push(value.toString());
        }
        if (values.length) {
          newSearchParams[name] = values.join(",");
        } else {
          delete newSearchParams[name];
        }
      } else {
        newSearchParams[name] = `${value}`;
      }
      submit(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );
  const handleDebounceFilter = (0, import_react2.useMemo)(
    () => (0, import_lodash.debounce)(handleFilter, 300),
    [handleFilter]
  );
  const handleChangePage = (0, import_react2.useCallback)(
    (page) => {
      const newSearchParams = { ...searchParams };
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "delete-webboard") {
        revalidator.revalidate();
        resetFetcher(fetcher);
        api.open({
          message: t("successfully deleted post"),
          type: "success",
          duration: 5,
          placement: "bottomRight"
        });
      }
    }
  }, [fetcher, revalidator]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { paddingBlock: 30 }, children: [
    featuredWebboards && featuredWebboards.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WebboardIndexSlider, { data: featuredWebboards }, void 0, false, {
      fileName: "app/routes/_app.webboards._index.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        style: {
          paddingInline: "3.5%",
          paddingBlock: 20,
          maxWidth: 1440,
          marginInline: "auto"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [30, 10], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "hide-scrollbar",
              style: {
                maxHeight: "calc(100vh - 60px)",
                overflowY: "auto"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                IndexFilter,
                {
                  values: searchParams,
                  onFilterClicked: handleDebounceFilter,
                  filters,
                  mobileAppendChildren: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WebboardTags, { data: tags, fetcher, mobileStyle: true }, void 0, false, {
                    fileName: "app/routes/_app.webboards._index.tsx",
                    lineNumber: 222,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.webboards._index.tsx",
                  lineNumber: 217,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.webboards._index.tsx",
              lineNumber: 210,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 208,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WebboardTags, { data: tags, fetcher }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 232,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 229,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 228,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: { span: 12, order: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              WebboardIndexHeader,
              {
                fetcher,
                searchParams,
                submit,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  TiltButton,
                  {
                    color: "primary",
                    onClick: () => user ? navigate("/webboards/new") : openLoginModal(),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: t("new post") }, void 0, false, {
                      fileName: "app/routes/_app.webboards._index.tsx",
                      lineNumber: 249,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.webboards._index.tsx",
                    lineNumber: 243,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.webboards._index.tsx",
                lineNumber: 238,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { marginTop: 30 }, children: navigation.state === "loading" && navigation.location.pathname === location.pathname ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
              fileName: "app/routes/_app.webboards._index.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                WebboardLists,
                {
                  data: webboards.items,
                  fetcher,
                  reactionOptions
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.webboards._index.tsx",
                  lineNumber: 258,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Pagination,
                {
                  currentPage: webboards.page,
                  totalPages: webboards.totalPages,
                  onPageClicked: handleChangePage
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.webboards._index.tsx",
                  lineNumber: 263,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_app.webboards._index.tsx",
              lineNumber: 257,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.webboards._index.tsx",
              lineNumber: 252,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.webboards._index.tsx",
            lineNumber: 237,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.webboards._index.tsx",
          lineNumber: 207,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.webboards._index.tsx",
        lineNumber: 199,
        columnNumber: 7
      },
      this
    ),
    contextHolder,
    navigation.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "app/routes/_app.webboards._index.tsx",
      lineNumber: 277,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.webboards._index.tsx",
      lineNumber: 276,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.webboards._index.tsx",
    lineNumber: 195,
    columnNumber: 5
  }, this);
}
export {
  WebboardIndex as default
};
//# sourceMappingURL=/build/routes/_app.webboards._index-XRHTTUKZ.js.map
