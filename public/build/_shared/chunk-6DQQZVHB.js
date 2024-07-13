import {
  TournamentDate,
  TournamentReward
} from "/build/_shared/chunk-YUNIXQN2.js";
import {
  Author
} from "/build/_shared/chunk-B3LWZSUK.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  renderData
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  avatar_default,
  card_default,
  col_default,
  require_dayjs_min,
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

// app/components/pages/Tournament/TournamentEntry.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function TournamentEntry(props) {
  var _a, _b, _c, _d;
  const { t } = useTranslation();
  const { user } = (0, import_react2.useContext)(AuthContext);
  const { locale } = (0, import_react2.useContext)(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { data, loading } = props;
  const navigate = useNavigate();
  const itemHeadStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: data && data.thumbnailImageUrl ? `url("${cdnUrl}/${data.thumbnailImageUrl}")` : `url("/image/placeholder.png")`
    // change this to tournamet image,
  };
  const handleClick = () => {
    navigate(`/tournaments/${data.id}`);
  };
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    space_default,
    {
      onClick: handleClick,
      direction: "vertical",
      size: 0,
      style: { display: "flex", height: "100%", cursor: "pointer" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          card_default,
          {
            bordered: false,
            style: { borderRadius: 10, zIndex: 1 },
            headStyle: itemHeadStyle,
            bodyStyle: { padding: 15 },
            title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TournamentEntryHeader,
              {
                game: data.game,
                participants: data.maxTeam,
                reward: data.totalPrize
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                lineNumber: 62,
                columnNumber: 11
              },
              this
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 3, style: { display: "flex" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  level: 5,
                  style: {
                    margin: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: renderData(data, "name", locale)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                  lineNumber: 70,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                TournamentDate,
                {
                  startDate: data.startDate,
                  endDate: data.endDate,
                  size: 13
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                  lineNumber: 81,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Author,
                {
                  avatarSize: 20,
                  fontSize: 13,
                  displayImage: ((_a = data == null ? void 0 : data.organizer) == null ? void 0 : _a.displayImage) ? `${cdnUrl}/${(_b = data == null ? void 0 : data.organizer) == null ? void 0 : _b.displayImage}` : void 0,
                  children: ((_c = data == null ? void 0 : data.organizer) == null ? void 0 : _c.displayName) ? (_d = data == null ? void 0 : data.organizer) == null ? void 0 : _d.displayName : user.displayName
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                  lineNumber: 86,
                  columnNumber: 11
                },
                this
              ),
              data.status === "opening" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", style: { marginTop: 15 }, children: t("attend") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this) : data.status === "joined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", style: { marginTop: 15 }, children: t("attended") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                lineNumber: 104,
                columnNumber: 13
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: 40, marginTop: 15 } }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
                lineNumber: 108,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
              lineNumber: 69,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
            lineNumber: 56,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { paddingInline: 15 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          TournamentEntryLabel,
          {
            status: data.status,
            startDate: data.registrationStartDate,
            endDate: data.registrationEndDate
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
            lineNumber: 113,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentEntry.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentEntryHeader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TournamentEntryHeader(props) {
  const { t } = useTranslation();
  const { game, participants, reward } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 15px"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          space_default,
          {
            style: {
              display: "flex",
              flex: "0 0 auto",
              justifyContent: "space-between",
              alignItems: "start"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tag_default, { color: "#000", bordered: false, children: `${participants} ${t("teams")}` }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
                lineNumber: 36,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TournamentGame, { size: 36, game }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
                lineNumber: 39,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          space_default,
          {
            style: { display: "flex", flex: "auto", alignItems: "end" },
            size: 0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TournamentReward, { reward }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
              lineNumber: 45,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
            lineNumber: 41,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentEntryHeader.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentEntryLabel.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text } = typography_default;
function TournamentEntryLabel(props) {
  const { status, startDate, endDate } = props;
  const { token } = useToken();
  const { t } = useTranslation();
  let label;
  switch (status) {
    case "ongoing":
      label = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { style: { color: "#000" }, children: t("tournament ongoing") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this);
      break;
    case "upcoming":
      label = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 5, wrap: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: t("opening registration") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        startDate && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { style: { fontWeight: 600 }, children: (0, import_dayjs.default)(startDate).format("DD MMM YYYY") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this);
      break;
    case "finished":
      label = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: t("tournament finished") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this);
      break;
    default:
      label = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 5, wrap: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: t("opening registration") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        startDate && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { style: { fontWeight: 600 }, children: `${t("today")} - ${(0, import_dayjs.default)(endDate).format("DD MMM YYYY")}` }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    card_default,
    {
      bodyStyle: { padding: 10, textAlign: "center" },
      bordered: false,
      style: {
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: status === "ongoing" ? token.colorPrimary : token.colorBgBase
      },
      children: label
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Tournament/TournamentEntryLabel.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentGame.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function TournamentGame(props) {
  const { game, size } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    avatar_default,
    {
      size: size ? size : 45,
      src: game.iconUrl ? `${cdnUrl}/${game.iconUrl}` : "",
      children: game.name
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Tournament/TournamentGame.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentGrid.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Title: Title2 } = typography_default;
function TournamentGrid(props) {
  const { data, loading, title } = props;
  const dummy = Array(8).fill("");
  const entries = loading ? dummy : data ? data : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title2, { level: 4, style: { marginTop: 0, marginBottom: 30 }, children: title }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentGrid.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: [20, 20], children: entries.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 24, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TournamentEntry, { data: item, loading }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentGrid.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, loading ? `dummy-${index}` : item.id, false, {
      fileName: "app/components/pages/Tournament/TournamentGrid.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentGrid.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Tournament/TournamentGrid.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

export {
  TournamentGrid
};
//# sourceMappingURL=/build/_shared/chunk-6DQQZVHB.js.map
