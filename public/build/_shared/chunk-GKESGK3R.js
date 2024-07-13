import {
  LoadingOutlined_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/OverlayBg.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OverlayBg = (props) => {
  const { children, className, loading, onClick, opacity, style } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: className ? className : "",
      style: {
        display: "flex",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: `rgba(0,0,0,${opacity ? opacity : 0.5})`,
        alignItems: "center",
        justifyContent: "center",
        cursor: onClick ? "pointer" : "default",
        ...style
      },
      onClick: onClick ? onClick : void 0,
      children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
        fileName: "app/components/common/OverlayBg.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this) : children ? children : null
    },
    void 0,
    false,
    {
      fileName: "app/components/common/OverlayBg.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

export {
  OverlayBg
};
//# sourceMappingURL=/build/_shared/chunk-GKESGK3R.js.map
