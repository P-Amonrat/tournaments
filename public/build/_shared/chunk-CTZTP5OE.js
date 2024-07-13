import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/TiltButton.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TiltButton = (props) => {
  const { children, color, disabled, noBorder, onClick, overLayStyle, style } = props;
  const { scheme } = (0, import_react.useContext)(AppContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `tilt-button ${color && !disabled ? `${color} ` : "secondary "}${onClick && !disabled ? `clickable ` : ""} ${scheme} ${noBorder ? "no-border" : ""}`,
      style,
      onClick: !disabled ? onClick : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "tilt-button-overlay", style: overLayStyle }, void 0, false, {
          fileName: "app/components/common/TiltButton.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { display: "flex", justifyContent: "center" }, children }, void 0, false, {
          fileName: "app/components/common/TiltButton.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/TiltButton.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
};

export {
  TiltButton
};
//# sourceMappingURL=/build/_shared/chunk-CTZTP5OE.js.map
