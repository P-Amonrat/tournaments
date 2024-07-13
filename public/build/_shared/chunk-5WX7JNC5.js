import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  ControlOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  avatar_default,
  card_default,
  divider_default,
  drawer_default,
  space_default,
  theme_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/IndexFilter.tsx
var import_lodash = __toESM(require_lodash());
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var { useToken } = theme_default;
function IndexFilter(props) {
  const {
    alwaysActive,
    filters,
    onFilterClicked,
    values,
    mobileAppendChildren
  } = props;
  const { token } = useToken();
  const { t } = useTranslation();
  const [mobileCollapsed, setMobileCollapsed] = (0, import_react.useState)(false);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  let filteredValues = {};
  if (values) {
    Object.keys(values).map((key) => {
      filteredValues[key] = (0, import_lodash.isArray)(values[key]) ? values[key] : values[key].split(",");
    });
  }
  const isActive = (values2, name, value) => {
    return alwaysActive ? true : values2 && values2[name] && values2[name].length && (0, import_lodash.indexOf)(values2[name], `${value}`) > -1;
  };
  const handleOpenCollapsed = () => {
    setMobileCollapsed(true);
  };
  const handleCloseCollapsed = () => {
    setMobileCollapsed(false);
  };
  const renderContent = () => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 10, style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, children: t("Filters") }, void 0, false, {
        fileName: "app/components/common/IndexFilter.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      filters.map((filter) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        space_default,
        {
          size: 10,
          direction: "vertical",
          style: { display: "flex" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, style: { marginTop: 0 }, children: filter.title }, void 0, false, {
              fileName: "app/components/common/IndexFilter.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              space_default,
              {
                wrap: true,
                size: 5,
                style: {
                  display: "flex",
                  paddingInline: filter.type === "tilt-button" ? 5 : 0
                },
                children: filter.options.map(
                  (option) => filter.type === "avatar" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    tooltip_default,
                    {
                      title: option.label,
                      placement: "bottom",
                      arrow: false,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        avatar_default,
                        {
                          src: `${cdnUrl}/${option.image}`,
                          size: 60,
                          onClick: () => onFilterClicked(filter.name, option.value),
                          style: isActive(filteredValues, filter.name, option.value) ? { opacity: 1, cursor: "pointer" } : {
                            opacity: 0.5,
                            filter: "grayscale(100%)",
                            cursor: "pointer"
                          }
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/common/IndexFilter.tsx",
                          lineNumber: 98,
                          columnNumber: 21
                        },
                        this
                      )
                    },
                    `${option.name}-${option.value}`,
                    false,
                    {
                      fileName: "app/components/common/IndexFilter.tsx",
                      lineNumber: 92,
                      columnNumber: 19
                    },
                    this
                  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    TiltButton,
                    {
                      color: isActive(filteredValues, filter.name, option.value) ? "primary" : "transparent",
                      onClick: () => onFilterClicked(filter.name, option.value),
                      style: {
                        borderColor: token.colorBorder,
                        fontStyle: "italic",
                        fontWeight: 400,
                        paddingBlock: 6
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
                        option.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: option.image, size: 20, shape: "square" }, void 0, false, {
                          fileName: "app/components/common/IndexFilter.tsx",
                          lineNumber: 131,
                          columnNumber: 25
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                          fileName: "app/components/common/IndexFilter.tsx",
                          lineNumber: 133,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: option.label }, void 0, false, {
                          fileName: "app/components/common/IndexFilter.tsx",
                          lineNumber: 135,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/common/IndexFilter.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                      }, this)
                    },
                    `${filter.name}-${option.value}`,
                    false,
                    {
                      fileName: "app/components/common/IndexFilter.tsx",
                      lineNumber: 114,
                      columnNumber: 19
                    },
                    this
                  )
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/common/IndexFilter.tsx",
                lineNumber: 82,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
              fileName: "app/components/common/IndexFilter.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this)
          ]
        },
        filter.name,
        true,
        {
          fileName: "app/components/common/IndexFilter.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, true, {
      fileName: "app/components/common/IndexFilter.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: renderContent() }, void 0, false, {
      fileName: "app/components/common/IndexFilter.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { at: "sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bodyStyle: { padding: 10, cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        space_default,
        {
          onClick: handleOpenCollapsed,
          size: 10,
          style: { display: "flex", fontSize: 20 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlOutlined_default, {}, void 0, false, {
              fileName: "app/components/common/IndexFilter.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("filter") }, void 0, false, {
              fileName: "app/components/common/IndexFilter.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/common/IndexFilter.tsx",
          lineNumber: 153,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/common/IndexFilter.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        drawer_default,
        {
          placement: "left",
          closable: false,
          onClose: handleCloseCollapsed,
          open: mobileCollapsed,
          width: 250,
          styles: { body: { padding: "30px 20px" } },
          children: [
            renderContent(),
            mobileAppendChildren ? mobileAppendChildren : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
              fileName: "app/components/common/IndexFilter.tsx",
              lineNumber: 171,
              columnNumber: 58
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/common/IndexFilter.tsx",
          lineNumber: 162,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/common/IndexFilter.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/IndexFilter.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

export {
  IndexFilter
};
//# sourceMappingURL=/build/_shared/chunk-5WX7JNC5.js.map
