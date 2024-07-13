import {
  require_oAuth2
} from "/build/_shared/chunk-UQXDDOA5.js";
import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  card_default,
  result_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.auth.google.callback.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_oAuth2 = __toESM(require_oAuth2());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function GoogleCallback() {
  const submit = useSubmit();
  const handleCallback = () => {
    const payload = {
      action: "googleCallback"
    };
    submit(payload, { method: "post" });
  };
  (0, import_react.useEffect)(() => {
    const timer = setTimeout(() => {
      handleCallback();
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: { height: 400 }, bordered: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, {}, void 0, false, {
    fileName: "app/routes/_app.auth.google.callback.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.auth.google.callback.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { status: "error", title: error.message }, void 0, false, {
    fileName: "app/routes/_app.auth.google.callback.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
export {
  ErrorBoundary,
  GoogleCallback as default
};
//# sourceMappingURL=/build/routes/_app.auth.google.callback-YWTGCHCC.js.map
