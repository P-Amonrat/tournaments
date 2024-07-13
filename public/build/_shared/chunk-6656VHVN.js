import {
  col_default,
  row_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/GameSelect.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function GameSelect(props) {
  const { currentGameId, games, onGameSelect } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Title,
      {
        level: 4,
        style: { marginTop: 0, marginBottom: 40, textAlign: "center" },
        children: t("select game")
      },
      void 0,
      false,
      {
        fileName: "app/components/common/GameSelect.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [20, 20], children: games.map((game) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      col_default,
      {
        span: 8,
        style: {
          textAlign: "center",
          cursor: game.maxPlayers ? "pointer" : "default"
        },
        onClick: game.maxPlayers ? () => onGameSelect(game.id) : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              style: {
                position: "relative",
                paddingBottom: "133%",
                marginBottom: 10,
                borderRadius: 20,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: game && game.mainImageUrl && game.mainImageUrl !== "-" ? `url("${cdnUrl}/${game.mainImageUrl}")` : `url("/image/placeholder.png")`,
                transform: currentGameId && currentGameId == game.id ? "scale(1.05)" : void 0,
                zIndex: currentGameId && currentGameId == game.id ? 1 : void 0,
                boxShadow: currentGameId && currentGameId == game.id ? "0px 0px 24px 0px rgba(71, 0, 252, 0.50)" : void 0
              }
            },
            void 0,
            false,
            {
              fileName: "app/components/common/GameSelect.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: game.name }, void 0, false, {
            fileName: "app/components/common/GameSelect.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ]
      },
      game.id,
      true,
      {
        fileName: "app/components/common/GameSelect.tsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/common/GameSelect.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/GameSelect.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

export {
  GameSelect
};
//# sourceMappingURL=/build/_shared/chunk-6656VHVN.js.map
