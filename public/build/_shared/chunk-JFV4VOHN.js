import {
  Copy
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  CopyOutlined_default,
  alert_default,
  notification_default,
  space_default,
  theme_default,
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

// app/components/common/ToCopyField.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text } = typography_default;
function ToCopyField(props) {
  const { t } = useTranslation();
  const { alertMessage, copyMessage, fontSize, plain, style, text } = props;
  const { token } = useToken();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const styleProperties = {
    ...style,
    cursor: "pointer",
    border: "none",
    backgroundColor: token.colorBgBase
  };
  const handleCopyMessage = (e) => {
    navigator.clipboard.writeText(copyMessage ? copyMessage : text);
    messageApi.open({
      type: "success",
      message: alertMessage ? alertMessage : t("join team link copied"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    plain ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { onClick: handleCopyMessage, className: "text-hover-copy", size: 5, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { color: "inherit" }, children: text }, void 0, false, {
        fileName: "app/components/common/ToCopyField.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "text-hover-copy-icon", style: { color: "#7a6fee" } }, void 0, false, {
        fileName: "app/components/common/ToCopyField.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ToCopyField.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      alert_default,
      {
        onClick: handleCopyMessage,
        message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Text,
          {
            style: {
              display: "block",
              fontSize: fontSize ? fontSize : void 0,
              fontWeight: 600,
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap"
            },
            children: text
          },
          void 0,
          false,
          {
            fileName: "app/components/common/ToCopyField.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        ),
        action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyOutlined_default, { style: { color: "#7a6fee", paddingLeft: 5 } }, void 0, false, {
          fileName: "app/components/common/ToCopyField.tsx",
          lineNumber: 63,
          columnNumber: 19
        }, this),
        style: styleProperties
      },
      void 0,
      false,
      {
        fileName: "app/components/common/ToCopyField.tsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/common/ToCopyField.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

export {
  ToCopyField
};
//# sourceMappingURL=/build/_shared/chunk-JFV4VOHN.js.map
