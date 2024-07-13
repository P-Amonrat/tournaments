import {
  TextEditor
} from "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  LoadingOutlined_default,
  result_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.settings.webboard.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function SettingsWebboard() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { user } = (0, import_react.useContext)(AuthContext);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [content, setContent] = (0, import_react.useState)("");
  const submit = useSubmit();
  const onSubmit = () => {
    submit(
      {
        signature: content
      },
      { method: "post" }
    );
  };
  (0, import_react.useEffect)(() => {
    setLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0 }, children: t("webboard") }, void 0, false, {
        fileName: "app/routes/_app.settings.webboard.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("signature") }, void 0, false, {
        fileName: "app/routes/_app.settings.webboard.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.webboard.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
      !loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        TextEditor,
        {
          id: "signature",
          initialValues: user.signature && user.signature,
          fetcher,
          onChange: setContent
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.webboard.tsx",
          lineNumber: 76,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
        fileName: "app/routes/_app.settings.webboard.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/_app.settings.webboard.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        TiltButton,
        {
          color: "primary",
          onClick: onSubmit,
          style: { marginTop: 20 },
          children: t("save")
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.webboard.tsx",
          lineNumber: 85,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.webboard.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.webboard.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
export {
  SettingsWebboard as default
};
//# sourceMappingURL=/build/routes/_app.settings.webboard-2SQB5LSQ.js.map
