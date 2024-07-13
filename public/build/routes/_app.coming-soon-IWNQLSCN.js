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

// app/routes/_app.coming-soon.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ComingSoon() {
  const { scheme } = (0, import_react.useContext)(AppContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("/image/comingsoon-${scheme}.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.coming-soon.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
export {
  ComingSoon as default
};
//# sourceMappingURL=/build/routes/_app.coming-soon-IWNQLSCN.js.map
