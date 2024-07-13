import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  RefreshCw
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  flex_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/GameCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function GameCard(props) {
  const { avatarStyle, onClick, action } = props;
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: avatarStyle, onClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { paddingBottom: "125%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    flex_default,
    {
      style: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingBlock: 10
      },
      vertical: true,
      align: "center",
      justify: "center",
      children: action !== "update" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          OverlayBg,
          {
            style: {
              cursor: "pointer",
              backgroundColor: "rgba(122, 111, 237, 0.85)"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/common/GameCard.tsx",
            lineNumber: 36,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { style: { color: "#fff" } }, void 0, false, {
            fileName: "app/components/common/GameCard.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, style: { margin: 0, color: "#fff" }, children: t("change game") }, void 0, false, {
            fileName: "app/components/common/GameCard.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/GameCard.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/GameCard.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/GameCard.tsx",
      lineNumber: 23,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/common/GameCard.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/GameCard.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

export {
  GameCard
};
//# sourceMappingURL=/build/_shared/chunk-OR6TXDR3.js.map
