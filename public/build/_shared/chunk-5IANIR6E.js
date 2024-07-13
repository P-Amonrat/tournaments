import {
  LeftOutlined_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useNavigate
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/BackButton.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function BackButton(props) {
  const { t } = useTranslation();
  const { fallbackUrl, navigateTo } = props;
  const navigate = useNavigate();
  const handleBack = (0, import_react2.useCallback)(() => {
    navigate(
      navigateTo !== void 0 && navigateTo !== null ? navigateTo : document.referrer === "" && fallbackUrl !== void 0 ? window.open(fallbackUrl, "_self") : -1
    );
  }, [navigateTo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    space_default,
    {
      size: 8,
      onClick: handleBack,
      style: {
        marginBottom: 30,
        fontSize: "1.2em",
        alignItems: "center",
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LeftOutlined_default, {}, void 0, false, {
          fileName: "app/components/common/BackButton.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/components/common/BackButton.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: t("back") }, void 0, false, {
          fileName: "app/components/common/BackButton.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/BackButton.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

export {
  BackButton
};
//# sourceMappingURL=/build/_shared/chunk-5IANIR6E.js.map
