import {
  card_default,
  flex_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function About() {
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          height: "40vh",
          backgroundImage: `url("/image/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.about.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          paddingInline: "3.5%",
          paddingBlock: 50,
          maxWidth: 1100,
          marginInline: "auto"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, bodyStyle: { padding: 40 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 1, style: { marginTop: 0, marginBottom: 30 }, children: t("about") }, void 0, false, {
            fileName: "app/routes/_app.about.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, style: { fontSize: 18 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: t("about us paragraph 1") }, void 0, false, {
              fileName: "app/routes/_app.about.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: t("about us paragraph 2") }, void 0, false, {
              fileName: "app/routes/_app.about.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: t("about us paragraph 3") }, void 0, false, {
              fileName: "app/routes/_app.about.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "inherit" }, children: t("about us paragraph 4") }, void 0, false, {
              fileName: "app/routes/_app.about.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.about.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.about.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.about.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.about.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  About as default
};
//# sourceMappingURL=/build/routes/_app.about-UWXKRC7G.js.map
