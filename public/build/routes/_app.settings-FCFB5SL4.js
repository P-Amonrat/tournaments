import {
  AffixMenu
} from "/build/_shared/chunk-N2TOCZNK.js";
import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import {
  Award,
  Gamepad2,
  MessagesSquare,
  SquareUser,
  Trophy,
  User
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  col_default,
  flex_default,
  row_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Outlet
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.settings.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function Settings() {
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [20, 0], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AffixMenu, { direction: "vertical", offsetTop: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t("settings") }, void 0, false, {
            fileName: "app/routes/_app.settings.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.settings.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltMenus,
            {
              direction: "vertical",
              menus: [
                {
                  link: ".",
                  level: 1,
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 64,
                      columnNumber: 25
                    }, this),
                    t("profile")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 63,
                    columnNumber: 23
                  }, this)
                },
                {
                  link: "webboard",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessagesSquare, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 73,
                      columnNumber: 25
                    }, this),
                    t("webboard")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 72,
                    columnNumber: 23
                  }, this)
                },
                {
                  link: "my-games",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 82,
                      columnNumber: 25
                    }, this),
                    t("my games")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 81,
                    columnNumber: 23
                  }, this)
                },
                {
                  link: "my-achievement",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 91,
                      columnNumber: 25
                    }, this),
                    t("my achievement")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 90,
                    columnNumber: 23
                  }, this)
                },
                {
                  link: "experiences",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gamepad2, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 100,
                      columnNumber: 25
                    }, this),
                    t("experiences")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)
                },
                {
                  link: "personal-details",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquareUser, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.tsx",
                      lineNumber: 109,
                      columnNumber: 25
                    }, this),
                    t("personal details")
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.tsx",
                    lineNumber: 108,
                    columnNumber: 23
                  }, this)
                }
              ]
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings.tsx",
              lineNumber: 56,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 18, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: { borderRadius: 12 }, bodyStyle: { padding: 30 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.settings.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.settings.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}
export {
  Settings as default
};
//# sourceMappingURL=/build/routes/_app.settings-FCFB5SL4.js.map
