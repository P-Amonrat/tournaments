import {
  theme_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/Loading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
function Loading() {
  const { token } = useToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 300,
        height: 30,
        backgroundColor: token.colorBgContainer,
        backgroundImage: "url('/image/stripe.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        transform: "translate(-50%,-50%)",
        animation: "loadingStripe 15s linear infinite",
        zIndex: 100
      }
    },
    void 0,
    false,
    {
      fileName: "app/components/common/Loading.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}

export {
  Loading
};
//# sourceMappingURL=/build/_shared/chunk-O2SDKC5O.js.map
