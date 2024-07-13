import {
  TournamentGrid
} from "/build/_shared/chunk-6DQQZVHB.js";
import "/build/_shared/chunk-YUNIXQN2.js";
import "/build/_shared/chunk-B3LWZSUK.js";
import "/build/_shared/chunk-CF33ONIU.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
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
  result_default,
  space_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.users.$uuid.my-tournaments.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserMyTournaments() {
  const { user } = (0, import_react2.useContext)(AuthContext);
  const { uuid, tournaments } = useLoaderData();
  const { t } = useTranslation();
  const draftTournaments = tournaments.filter(
    (tournament) => tournament.status === "draft"
  );
  const pendingTournaments = tournaments.filter(
    (tournament) => tournament.status === "pending"
  );
  const approvedTournaments = tournaments.filter(
    (tournament) => tournament.status !== "draft" && tournament.status !== "pending" && tournament.status !== "rejected"
  );
  return !tournaments.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
    lineNumber: 115,
    columnNumber: 21
  }, this), title: t("no past tournament") }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this) : tournaments === null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentGrid, { loading: true, data: null }, void 0, false, {
    fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 50, direction: "vertical", style: { display: "flex" }, children: [
    user && user.uuid === uuid && draftTournaments.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentGrid, { data: draftTournaments, title: t("draft") }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    user && user.uuid === uuid && pendingTournaments.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TournamentGrid, { data: pendingTournaments, title: t("pending") }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this),
    approvedTournaments.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TournamentGrid,
      {
        data: approvedTournaments,
        title: user && user.uuid === uuid ? t("approved") : void 0
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
        lineNumber: 132,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.my-tournaments.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
export {
  UserMyTournaments as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.my-tournaments-UABYAGR4.js.map
