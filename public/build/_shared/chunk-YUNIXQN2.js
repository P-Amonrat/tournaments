import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  TrophyOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  CalendarOutlined_default,
  require_dayjs_min,
  space_default,
  tag_default
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

// app/components/pages/Tournament/TournamentDate.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TournamentDate(props) {
  const { startDate, endDate, size } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    space_default,
    {
      direction: "horizontal",
      size: 5,
      style: size ? { fontSize: size } : {},
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentDate.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this),
        `${(0, import_dayjs.default)(startDate).format("DD MMM")} - ${(0, import_dayjs.default)(endDate).format(
          "DD MMM"
        )}`
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentDate.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentReward.tsx
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TournamentReward(props) {
  const { t } = useTranslation();
  const { reward } = props;
  return reward ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    tag_default,
    {
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TrophyOutlined_default, {}, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentReward.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      style: { margin: 0, lineHeight: "24px", fontSize: 12 },
      color: "#7063f4",
      children: [
        (0, import_lodash.toNumber)(reward).toLocaleString(),
        " ",
        t("thb")
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentReward.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  ) : null;
}

export {
  TournamentDate,
  TournamentReward
};
//# sourceMappingURL=/build/_shared/chunk-YUNIXQN2.js.map
