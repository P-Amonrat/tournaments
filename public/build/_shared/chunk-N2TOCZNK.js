import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  affix_default,
  theme_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/layouts/AffixMenu.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var AffixMenu = (props) => {
  const { children, direction, offsetTop } = props;
  const { token } = useToken();
  const { scheme } = (0, import_react.useContext)(AppContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: offsetTop ? offsetTop : 64, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        backgroundColor: token.colorBgLayout,
        paddingTop: direction === "vertical" ? 0 : 30,
        paddingBottom: 30,
        marginBottom: direction === "vertical" ? 0 : 30,
        borderBottom: direction === "vertical" ? "none" : `1px solid  ${scheme === "dark" ? "#3e3e3e" : "#dfdfdf"}`
      },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/layouts/AffixMenu.tsx",
      lineNumber: 19,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/layouts/AffixMenu.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

export {
  AffixMenu
};
//# sourceMappingURL=/build/_shared/chunk-N2TOCZNK.js.map
