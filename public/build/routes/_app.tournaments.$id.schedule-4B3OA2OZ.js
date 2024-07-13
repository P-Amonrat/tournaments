import {
  card_default,
  result_default,
  theme_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useRouteLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tournaments.$id.schedule.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Title } = typography_default;
function TournamentSingleSchedule() {
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const { t } = useTranslation();
  const { token } = useToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 3, style: { marginBottom: 30 }, children: t("tournament schedule") }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.schedule.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    tournament.bracketContent ? (
      // <Image src={tournament.scheduleImageUrl} />
      // <div
      //   className="ctrlg-html"
      //   style={{ color: token.colorTextBase }}
      //   dangerouslySetInnerHTML={{
      //     __html: `${renderData(
      //       tournament.bracketContent,
      //       "description",
      //       locale
      //     )}`,
      //   }}
      // />
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "ctrlg-html",
          style: { color: token.colorTextBase },
          dangerouslySetInnerHTML: {
            __html: `${tournament.bracketContent}`
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.tournaments.$id.schedule.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      )
    ) : (
      // <div>{tournament.bracketContent}</div>
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { title: t("schedule hasn't yet been released") }, void 0, false, {
        fileName: "app/routes/_app.tournaments.$id.schedule.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_app.tournaments.$id.schedule.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.tournaments.$id.schedule.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  TournamentSingleSchedule as default
};
//# sourceMappingURL=/build/routes/_app.tournaments.$id.schedule-4B3OA2OZ.js.map
