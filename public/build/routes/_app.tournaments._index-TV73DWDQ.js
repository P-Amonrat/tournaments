import {
  TournamentSlider,
  TournamentSliderItem
} from "/build/_shared/chunk-3DK26MTZ.js";
import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  AffixMenu
} from "/build/_shared/chunk-N2TOCZNK.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import {
  TournamentGrid
} from "/build/_shared/chunk-6DQQZVHB.js";
import "/build/_shared/chunk-YUNIXQN2.js";
import "/build/_shared/chunk-B3LWZSUK.js";
import "/build/_shared/chunk-CF33ONIU.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  ControlOutlined_default,
  HistoryOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  button_default,
  col_default,
  row_default,
  select_default,
  skeleton_default,
  space_default,
  theme_default,
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
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tournaments._index.tsx
var import_react3 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/pages/Tournament/TournamentIndexHeader.tsx
var import_react = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text } = typography_default;
function TournamentIndexHeader(props) {
  const { t } = useTranslation();
  const { token } = useToken();
  const { user } = (0, import_react.useContext)(AuthContext);
  const { initialValues, items, games, onGameChanged } = props;
  const gameOptions = [
    {
      label: t("all games"),
      value: ""
    }
  ];
  if ((0, import_lodash.isArray)(games) && games.length > 0) {
    games.map((game) => {
      gameOptions.push({
        label: game.name,
        value: game.name
      });
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      select_default,
      {
        defaultValue: initialValues.game ? initialValues.game : "",
        onSelect: onGameChanged,
        options: gameOptions,
        style: { width: 140, marginBottom: 20 }
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true, loading: items === null, paragraph: false, title: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { color: token.colorTextSecondary }, children: `${items ? items.length : 0} ${t("items")}` }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", style: { textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "horizontal", size: 15, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `/users/${user.userName ? user.userName : user.uuid}`,
            style: { color: token.colorTextBase },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "horizontal", size: 5, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlOutlined_default, { style: { color: "#7063f4" } }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
                lineNumber: 64,
                columnNumber: 19
              }, this),
              t("dashboard")
            ] }, void 0, true, {
              fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `/users/${(user == null ? void 0 : user.userName) ? user.userName : user.uuid}/joined-tournaments`,
            style: { color: token.colorTextBase },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "horizontal", size: 5, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HistoryOutlined_default, { style: { color: "#7063f4" } }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this),
              t("history")
            ] }, void 0, true, {
              fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
            lineNumber: 68,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Tournament/TournamentIndexHeader.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/_app.tournaments._index.tsx
var import_lodash2 = __toESM(require_lodash());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TournamentLayout() {
  const { searchParams, tournaments, games, count } = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const location = useLocation();
  const [featuredTournaments, setFeaturedTournaments] = (0, import_react3.useState)(null);
  const [items, setItems] = (0, import_react3.useState)(null);
  const handleLoadMore = (0, import_react3.useCallback)(() => {
    const newSearchParams = { ...searchParams, offset: items.length };
    const queryString = new URLSearchParams(
      (0, import_lodash2.omitBy)(newSearchParams, import_lodash2.isNil)
    ).toString();
    fetcher.load(`.?${queryString}`);
  }, [items, searchParams]);
  const handleGameChanged = (0, import_react3.useCallback)(
    (game) => {
      const newSearchParams = { ...searchParams };
      if (game && game.length > 0) {
        newSearchParams["game"] = game;
      } else {
        delete newSearchParams["game"];
      }
      submit(
        (0, import_lodash2.omitBy)(newSearchParams, (v) => (0, import_lodash2.isNil)(v) && (0, import_lodash2.isEmpty)(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams]
  );
  (0, import_react3.useEffect)(() => {
    fetcher.load("/resources/featured-tournaments");
  }, []);
  (0, import_react3.useEffect)(() => {
    setItems([...tournaments]);
  }, [tournaments]);
  (0, import_react3.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.featuredTournaments) {
      setFeaturedTournaments(fetcher.data.featuredTournaments);
    }
    if (fetcher.data.tournaments) {
      setItems((items2) => [...items2, ...fetcher.data.tournaments]);
    }
  }, [fetcher.data]);
  const hasSearchParams = searchParams.game && searchParams.game.length > 0 ? true : false;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 20,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { borderRadius: 10, overflow: "hidden" }, children: !featuredTournaments ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TournamentSliderItem, { loading: true, data: null }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TournamentSlider, { data: featuredTournaments }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 186,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AffixMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          TiltMenus,
          {
            activeFromQueryString: true,
            menus: [
              {
                link: hasSearchParams ? `.?game=${searchParams.game}` : ".",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("all tournaments") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments._index.tsx",
                  lineNumber: 199,
                  columnNumber: 22
                }, this)
              },
              {
                link: hasSearchParams ? `.?status=upcoming&game=${searchParams.game}` : ".?status=upcoming",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("upcoming tournaments") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments._index.tsx",
                  lineNumber: 205,
                  columnNumber: 22
                }, this)
              },
              {
                link: hasSearchParams ? `.?status=opening&game=${searchParams.game}` : ".?status=opening",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("opening tournaments") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments._index.tsx",
                  lineNumber: 211,
                  columnNumber: 22
                }, this)
              },
              {
                link: hasSearchParams ? `.?status=ongoing&game=${searchParams.game}` : ".?status=ongoing",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("ongoing tournaments") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments._index.tsx",
                  lineNumber: 217,
                  columnNumber: 22
                }, this)
              },
              {
                link: hasSearchParams ? `.?status=finished&game=${searchParams.game}` : ".?status=finished",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("finished tournaments") }, void 0, false, {
                  fileName: "app/routes/_app.tournaments._index.tsx",
                  lineNumber: 223,
                  columnNumber: 22
                }, this)
              }
            ],
            preventScrollReset: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments._index.tsx",
            lineNumber: 194,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 193,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          TournamentIndexHeader,
          {
            initialValues: searchParams,
            items,
            games,
            onGameChanged: handleGameChanged
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments._index.tsx",
            lineNumber: 229,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          TournamentGrid,
          {
            loading: navigation.state === "loading" && navigation.location.pathname === location.pathname,
            data: items
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments._index.tsx",
            lineNumber: 235,
            columnNumber: 7
          },
          this
        ),
        items && items.length < count && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { textAlign: "center", marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(button_default, { onClick: handleLoadMore, size: "large", children: t("load more") }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 243,
          columnNumber: 9
        }, this),
        navigation.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loading, {}, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 251,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.tournaments._index.tsx",
          lineNumber: 250,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.tournaments._index.tsx",
      lineNumber: 178,
      columnNumber: 5
    },
    this
  );
}
export {
  TournamentLayout as default
};
//# sourceMappingURL=/build/routes/_app.tournaments._index-TV73DWDQ.js.map
