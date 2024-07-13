import {
  Share
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  CopyOutlined_default,
  avatar_default,
  dropdown_default,
  notification_default,
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

// app/components/common/ShareDropDown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function ShareDropDown(props) {
  const { copiedMessage, dropDownPlacement, postUrl, shareProfile } = props;
  const { t } = useTranslation();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const sharedMenus = [
    {
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CopyOutlined_default, {}, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this), size: 20 }, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        "Copy URL"
      ] }, void 0, true, {
        fileName: "app/components/common/ShareDropDown.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      onClick: () => {
        navigator.clipboard.writeText(postUrl);
        messageApi.open({
          type: "success",
          message: copiedMessage ? copiedMessage : t("post url copied"),
          duration: 5,
          placement: "bottomRight"
        });
      }
    },
    {
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: "/image/social/facebook.png", size: 20 }, void 0, false, {
              fileName: "app/components/common/ShareDropDown.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            "Facebook"
          ] }, void 0, true, {
            fileName: "app/components/common/ShareDropDown.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      )
    },
    {
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: `http://twitter.com/share?url=${postUrl}`,
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: "/image/social/x.png", size: 20 }, void 0, false, {
              fileName: "app/components/common/ShareDropDown.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            "X"
          ] }, void 0, true, {
            fileName: "app/components/common/ShareDropDown.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      )
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      dropdown_default,
      {
        arrow: false,
        menu: { items: sharedMenus },
        placement: dropDownPlacement ? dropDownPlacement : "bottomRight",
        trigger: ["click"],
        children: shareProfile ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary-brand", style: { paddingInline: 15 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { strokeWidth: 2, fontSize: "1.2em" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share, {}, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: 18, cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share, {}, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/ShareDropDown.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/common/ShareDropDown.tsx",
        lineNumber: 71,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/common/ShareDropDown.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

export {
  ShareDropDown
};
//# sourceMappingURL=/build/_shared/chunk-ZP5K5WKW.js.map
