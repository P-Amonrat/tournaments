import {
  renderData
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  EnvironmentOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CalendarOutlined_default,
  card_default,
  col_default,
  require_dayjs_min,
  row_default,
  space_default,
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
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tournaments.$id._index.tsx
var import_dayjs = __toESM(require_dayjs_min());

// app/components/common/CardWithLabel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function CardWithLabel(props) {
  const { icon, label, detail } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      style: {
        height: "100%",
        backgroundColor: "transparent",
        border: "1px solid #dfdfdf"
      },
      bodyStyle: { padding: 15 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { fontWeight: 600 }, children: [
          icon && icon,
          label
        ] }, void 0, true, {
          fileName: "app/components/common/CardWithLabel.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: detail }, void 0, false, {
          fileName: "app/components/common/CardWithLabel.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/CardWithLabel.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/CardWithLabel.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentSingleRewards.tsx
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text: Text2, Title } = typography_default;
function TournamentSingleRewards(props) {
  const { t } = useTranslation();
  const { reward } = props;
  const { token } = useToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    row_default,
    {
      style: {
        position: "relative",
        paddingBottom: "5px",
        // paddingBlock: 20,
        // paddingInline: "3.5%",
        overflowX: "auto",
        scrollbarColor: "#999 transparent",
        scrollbarWidth: "thin"
      },
      gutter: [20, 20],
      wrap: false,
      children: reward.filter((r) => r !== "").map((r, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        col_default,
        {
          span: reward.length >= 3 ? 8 : 24 / reward.length,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            card_default,
            {
              bordered: false,
              bodyStyle: { padding: 15 },
              style: {
                height: "100%",
                borderRadius: 10,
                backgroundColor: index === 0 ? "#8861f2" : index === 1 ? token.colorPrimary : token.colorBgBase
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Text2,
                  {
                    style: index === 0 ? { color: "#fff" } : index === 1 ? { color: "#000" } : {},
                    children: `${t("reward #")} ${index + 1}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Title,
                  {
                    level: 3,
                    style: index === 0 ? { color: "#fff", margin: 0 } : index === 1 ? { color: "#000", margin: 0 } : { margin: 0 },
                    children: (0, import_lodash.toNumber)(r) ? `${(0, import_lodash.toNumber)(r).toLocaleString()} ${t("thb")}` : r
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          )
        },
        `reward-${index}`,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Tournament/TournamentSingleRewards.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app.tournaments.$id._index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken2 } = theme_default;
var { Text: Text3, Title: Title2 } = typography_default;
function TournamentSingleDetail() {
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const { locale } = (0, import_react2.useContext)(AppContext);
  const { t } = useTranslation();
  const { token } = useToken2();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TournamentSingleRewards, { reward: tournament.prize }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(row_default, { gutter: [20, 20], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 24, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        CardWithLabel,
        {
          label: t("tournament date"),
          detail: `${(0, import_dayjs.default)(tournament.startDate).format("DD MMM")} - ${(0, import_dayjs.default)(
            tournament.endDate
          ).format("DD MMM")}`,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CalendarOutlined_default, { style: { color: "#8861f2" } }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id._index.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.tournaments.$id._index.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.tournaments.$id._index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 24, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        CardWithLabel,
        {
          label: t("tournament location"),
          detail: tournament.finalRoundLocation ? renderData(tournament, "finalRoundLocation", locale) : "-",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EnvironmentOutlined_default, { style: { color: "#8861f2" } }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id._index.tsx",
            lineNumber: 43,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.tournaments.$id._index.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.tournaments.$id._index.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.tournaments.$id._index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      space_default,
      {
        size: 10,
        direction: "vertical",
        style: { display: "flex", marginTop: 20 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title2, { level: 4, children: t("detail_2") }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id._index.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "div",
            {
              className: "ctrlg-html",
              style: { color: token.colorTextBase },
              dangerouslySetInnerHTML: {
                __html: `${renderData(tournament, "description", locale)}`
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id._index.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.tournaments.$id._index.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      space_default,
      {
        size: 10,
        direction: "vertical",
        style: { display: "flex", marginTop: 20 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title2, { level: 4, children: t("rules") }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id._index.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "div",
            {
              className: "ctrlg-html",
              style: { color: token.colorTextBase },
              dangerouslySetInnerHTML: {
                __html: renderData(tournament, "qualificationRules", locale)
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id._index.tsx",
              lineNumber: 68,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id._index.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.tournaments.$id._index.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.tournaments.$id._index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  TournamentSingleDetail as default
};
//# sourceMappingURL=/build/routes/_app.tournaments.$id._index-SU3JDJ3J.js.map
