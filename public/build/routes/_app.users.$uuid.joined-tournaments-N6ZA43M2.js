import {
  TournamentGrid
} from "/build/_shared/chunk-6DQQZVHB.js";
import "/build/_shared/chunk-YUNIXQN2.js";
import "/build/_shared/chunk-B3LWZSUK.js";
import "/build/_shared/chunk-CF33ONIU.js";
import "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  InboxOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  result_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.users.$uuid.joined-tournaments.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserJoinedTournaments() {
  const { tournaments } = useLoaderData();
  const { t } = useTranslation();
  return tournaments.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentGrid, { loading: tournaments === null, data: tournaments }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.joined-tournaments.tsx",
    lineNumber: 143,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.joined-tournaments.tsx",
    lineNumber: 146,
    columnNumber: 21
  }, this), title: t("no past tournament") }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.joined-tournaments.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.joined-tournaments.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}
export {
  UserJoinedTournaments as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.joined-tournaments-N6ZA43M2.js.map
