import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-EA6MLCKC.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useNavigate,
  useRouteLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.parties._index.tsx
var import_lodash = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E15\u0E35\u0E49\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A\u0E08\u0E1A\u0E17\u0E35\u0E48 CTRL G"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/party.jpg`
    },
    {
      property: "og:image:width",
      content: "200"
    },
    {
      property: "og:image:height",
      content: "200"
    },
    {
      property: "og:description",
      content: "\u0E2B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E15\u0E35\u0E49\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A\u0E08\u0E1A\u0E17\u0E35\u0E48 CTRL G"
    }
  ];
};
function PartiesIndex() {
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const { games } = routeLoader;
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    const valorantGame = games && games.length > 0 ? games.find((game) => (0, import_lodash.toLower)(game.name) === "valorant") : null;
    const gameId = valorantGame ? valorantGame.id : 1;
    navigate(`/parties/${gameId}`);
  }, [games, navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loading, {}, void 0, false, {
    fileName: "app/routes/_app.parties._index.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.parties._index.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  PartiesIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.parties._index-SUYWLSM6.js.map
