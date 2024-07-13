import {
  TournamentDate,
  TournamentReward
} from "/build/_shared/chunk-YUNIXQN2.js";
import {
  Author
} from "/build/_shared/chunk-B3LWZSUK.js";
import {
  renderData
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  avatar_default,
  card_default,
  carousel_default,
  col_default,
  row_default,
  skeleton_default,
  space_default,
  tag_default,
  theme_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches,
  useNavigate
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Tournament/TournamentSliderItem.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Title } = typography_default;
function TournamentSliderItem(props) {
  const { t } = useTranslation();
  const { data, loading } = props;
  const { token } = useToken();
  const { locale } = (0, import_react2.useContext)(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const navigate = useNavigate();
  const itemStyle = {
    position: "relative",
    display: "flex",
    height: 400,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: data && data.bannerImageUrl && data.bannerImageUrl !== "-" ? `url("${cdnUrl}/${data.bannerImageUrl}")` : void 0,
    cursor: "pointer"
  };
  const itemBodyStyle = {
    display: "flex",
    flex: "auto",
    paddingBottom: 48,
    alignItems: "end"
  };
  const itemHeadStyle = {
    position: "relative",
    border: 0,
    flex: "0 0 auto",
    zIndex: 1
  };
  const overlayStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)"
  };
  const handleItemClicked = () => {
    navigate(`/tournaments/${data.id}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      bordered: false,
      onClick: handleItemClicked,
      style: itemStyle,
      bodyStyle: itemBodyStyle,
      headStyle: itemHeadStyle,
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        tag_default,
        {
          color: token.colorPrimary,
          style: { color: "#201d1d", fontWeight: 600 },
          children: t("featured tournament")
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
          lineNumber: 83,
          columnNumber: 9
        },
        this
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: overlayStyle }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
          lineNumber: 93,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 10,
            style: { display: "flex", position: "relative" },
            children: [
              data.game && data.game.iconUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                avatar_default,
                {
                  size: 45,
                  src: data.game.iconUrl && data.game.iconUrl !== "-" ? `${cdnUrl}/${data.game.iconUrl}` : "",
                  children: data.game.name
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0, color: "#fff" }, children: renderData(data, "name", locale) }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                lineNumber: 112,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { color: "#fff" }, gutter: [15, 10], wrap: true, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentReward, { reward: data.prize[0] }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                  lineNumber: 117,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                  lineNumber: 116,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  TournamentDate,
                  {
                    startDate: data.startDate,
                    endDate: data.endDate
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                    lineNumber: 120,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                  lineNumber: 119,
                  columnNumber: 13
                }, this),
                data.organizer && data.organizer.displayName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Author,
                  {
                    displayImage: data.organizer && data.organizer.displayImage ? `${cdnUrl}/${data.organizer.displayImage}` : void 0,
                    children: data.organizer.displayName
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                  lineNumber: 126,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
                lineNumber: 115,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
            lineNumber: 95,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentSliderItem.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentSlider.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TournamentSlider(props) {
  const { data } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(carousel_default, { dots: { className: "left" }, arrows: true, children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TournamentSliderItem, { data: item }, item.id, false, {
    fileName: "app/components/pages/Tournament/TournamentSlider.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/Tournament/TournamentSlider.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

export {
  TournamentSlider,
  TournamentSliderItem
};
//# sourceMappingURL=/build/_shared/chunk-3DK26MTZ.js.map
