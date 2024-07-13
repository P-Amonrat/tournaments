import {
  Search
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  InboxOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CloseOutlined_default,
  LoadingOutlined_default,
  card_default,
  col_default,
  divider_default,
  input_default,
  result_default,
  row_default,
  select_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  Link
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Webboard/WebboardIndexHeader.tsx
var import_react = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function WebboardIndexHeader(props) {
  const { children, fetcher, searchParams, submit } = props;
  const [openSearch, setOpenSearch] = (0, import_react.useState)(false);
  const [tagOptions, setTagOptions] = (0, import_react.useState)(null);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const { t } = useTranslation();
  const searchCardStyle = {
    height: 54,
    marginTop: 10,
    borderRadius: 0,
    boxShadow: "none",
    overflow: "visible",
    zIndex: 1
  };
  const searchCardBodyStyle = {
    padding: 5,
    backgroundColor: "inherit",
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    overflow: "hidden"
  };
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
    setTagOptions(null);
  };
  const handleSearch = (0, import_react.useCallback)(
    (e) => {
      const searchString = e.target.value;
      let newSearchParams = { ...searchParams };
      if (searchString.length > 0) {
        if (searchString.indexOf("#") > -1) {
          if (searchString.length > 0) {
            fetcher.submit(
              { name: searchString },
              { method: "post", action: "/resources/tags" }
            );
          }
          if (newSearchParams.q) {
            delete newSearchParams["q"];
            submit(
              (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
              { method: "get", preventScrollReset: true }
            );
          }
        } else {
          setTagOptions(null);
          newSearchParams.q = searchString;
          submit(
            (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
            { method: "get", preventScrollReset: true }
          );
        }
      } else {
        setTagOptions(null);
        delete newSearchParams["q"];
        submit(
          (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
          { method: "get", preventScrollReset: true }
        );
      }
    },
    [fetcher, searchParams, submit]
  );
  const handleSortChanged = (0, import_react.useCallback)(
    (order) => {
      let newSearchParams = { ...searchParams };
      if (order.length > 0) {
        newSearchParams.orderBy = order;
      } else {
        delete newSearchParams["orderBy"];
      }
      submit(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );
  const handleDebounceSearch = (0, import_react.useMemo)(
    () => (0, import_lodash.debounce)(handleSearch, 500),
    [handleSearch]
  );
  (0, import_react.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && fetcher.data.tags) {
      setTagOptions(fetcher.data.tags);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [15, 15], wrap: true, style: { alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: openSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CloseOutlined_default,
          {
            style: { fontSize: 20 },
            onClick: handleCloseSearch
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
            lineNumber: 151,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { style: { fontSize: 20 }, onClick: handleOpenSearch }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          select_default,
          {
            defaultValue: searchParams && searchParams.orderBy ? searchParams.orderBy : "",
            style: { minWidth: 185 },
            onSelect: handleSortChanged,
            options: [
              { label: t("last update"), value: "" },
              { label: t("lastest post"), value: "post" },
              { label: t("most comments"), value: "comments" },
              { label: t("most reactions"), value: "reactions" }
            ]
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
            lineNumber: 159,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    openSearch && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      card_default,
      {
        bordered: false,
        bodyStyle: searchCardBodyStyle,
        style: searchCardStyle,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            input_default,
            {
              autoFocus: true,
              bordered: false,
              prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Search,
                {
                  className: "site-form-item-icon",
                  style: { fontSize: 20, paddingRight: 10 }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                  lineNumber: 185,
                  columnNumber: 15
                },
                this
              ),
              defaultValue: searchParams && searchParams.q ? searchParams.q : "",
              onChange: handleDebounceSearch
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
              lineNumber: 181,
              columnNumber: 11
            },
            this
          ),
          tagOptions !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginTop: 10, marginBottom: 0 } }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              space_default,
              {
                direction: "vertical",
                style: { display: "flex", maxHeight: 400, overflow: "auto" },
                size: 0,
                children: fetcher && fetcher.state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 20 }, spin: true }, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                  lineNumber: 202,
                  columnNumber: 19
                }, this) : tagOptions.length > 0 ? tagOptions.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Link,
                  {
                    className: `suggested-options ${scheme}`,
                    to: `/tags/${tag.id}`,
                    style: {
                      display: "flex",
                      padding: 10,
                      borderRadius: 6
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: `#${tag.name}` }, void 0, false, {
                      fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                      lineNumber: 215,
                      columnNumber: 23
                    }, this)
                  },
                  tag.name,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                    lineNumber: 205,
                    columnNumber: 21
                  },
                  this
                )) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  result_default,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
                      fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                      lineNumber: 220,
                      columnNumber: 27
                    }, this),
                    title: t("no participant")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                    lineNumber: 219,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
                lineNumber: 196,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
        lineNumber: 176,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardIndexHeader.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
}

export {
  WebboardIndexHeader
};
//# sourceMappingURL=/build/_shared/chunk-KPSLXTRG.js.map
