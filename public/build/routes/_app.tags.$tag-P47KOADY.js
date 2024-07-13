import {
  WebboardIndexHeader
} from "/build/_shared/chunk-KPSLXTRG.js";
import {
  IndexFilter
} from "/build/_shared/chunk-5WX7JNC5.js";
import {
  BackButton
} from "/build/_shared/chunk-5IANIR6E.js";
import {
  WebboardTags
} from "/build/_shared/chunk-WSOOSU5J.js";
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
import "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
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
  col_default,
  notification_default,
  row_default,
  skeleton_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
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

// app/routes/_app.tags.$tag.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function TagSingle() {
  const routeLoader = useRouteLoaderData("routes/_app.tags");
  const revalidator = useRevalidator();
  const submit = useSubmit();
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const { searchParams, webboards } = useLoaderData();
  const { games, rooms, reactionOptions, tags } = routeLoader;
  const { t } = useTranslation();
  const [api, contextHolder] = notification_default.useNotification();
  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room) => ({
        label: room.name,
        value: room.id
      }))
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options: games.map((game) => ({
        label: game.name,
        value: game.id,
        image: game.iconUrl
      }))
    }
  ];
  const handleFilter = (0, import_react.useCallback)(
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
  const handleDebounceFilter = (0, import_react.useMemo)(
    () => (0, import_lodash.debounce)(handleFilter, 300),
    [handleFilter]
  );
  const handleChangePage = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [30, 10], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "hide-scrollbar",
              style: {
                maxHeight: "calc(100vh - 60px)",
                overflowY: "auto"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                IndexFilter,
                {
                  values: searchParams,
                  onFilterClicked: handleDebounceFilter,
                  filters,
                  mobileAppendChildren: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardTags, { data: tags, fetcher, mobileStyle: true }, void 0, false, {
                    fileName: "app/routes/_app.tags.$tag.tsx",
                    lineNumber: 179,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tags.$tag.tsx",
                  lineNumber: 174,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tags.$tag.tsx",
              lineNumber: 167,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 165,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardTags, { data: tags, fetcher }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 186,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 185,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 12, order: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BackButton, {}, void 0, false, {
              fileName: "app/routes/_app.tags.$tag.tsx",
              lineNumber: 195,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              WebboardIndexHeader,
              {
                fetcher,
                searchParams,
                submit,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Title,
                  {
                    level: 2,
                    style: { fontStyle: "italic", margin: 0 },
                    children: `#${webboards.tagName}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.tags.$tag.tsx",
                    lineNumber: 201,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.tags.$tag.tsx",
                lineNumber: 196,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginTop: 30 }, children: navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
              fileName: "app/routes/_app.tags.$tag.tsx",
              lineNumber: 208,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                WebboardLists,
                {
                  data: webboards.items,
                  fetcher,
                  reactionOptions
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tags.$tag.tsx",
                  lineNumber: 211,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Pagination,
                {
                  currentPage: webboards.page,
                  totalPages: webboards.totalPages,
                  onPageClicked: handleChangePage
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tags.$tag.tsx",
                  lineNumber: 216,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_app.tags.$tag.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.tags.$tag.tsx",
              lineNumber: 206,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.tags.$tag.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.tags.$tag.tsx",
          lineNumber: 164,
          columnNumber: 7
        }, this),
        contextHolder
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.tags.$tag.tsx",
      lineNumber: 156,
      columnNumber: 5
    },
    this
  );
}
export {
  TagSingle as default
};
//# sourceMappingURL=/build/routes/_app.tags.$tag-P47KOADY.js.map
