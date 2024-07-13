import {
  AffixMenu
} from "/build/_shared/chunk-N2TOCZNK.js";
import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import {
  Pagination
} from "/build/_shared/chunk-JJYDDLYQ.js";
import "/build/_shared/chunk-337STSEA.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  BellOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  avatar_default,
  card_default,
  col_default,
  empty_default,
  flex_default,
  require_dayjs_min,
  row_default,
  skeleton_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
  useMatches,
  useNavigate,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.users.$uuid.messages.tsx
var import_react3 = __toESM(require_react());
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());
var import_session = __toESM(require_session());

// app/components/pages/User/UserNotificationEntry.tsx
var import_react = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
var UserNotificationEntry = (props) => {
  var _a;
  const { data } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [diff, setDiff] = (0, import_react.useState)(null);
  const { user } = (0, import_react.useContext)(AuthContext);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const navigate = useNavigate();
  const fetcher = useFetcher();
  let cardStyle = {
    cursor: "pointer",
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  const getProperTimeDifference = (date) => {
    if (!date)
      return null;
    const diffMonths = (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "month");
    if (diffMonths >= 12) {
      return { unit: "year", value: (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "year") };
    } else if (diffMonths >= 1) {
      return { unit: "month", value: diffMonths };
    } else {
      const diffDays = (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "day");
      if (diffDays >= 1) {
        return { unit: "day", value: diffDays };
      } else {
        const diffHours = (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "hour");
        if (diffHours >= 1) {
          return { unit: "hour", value: diffHours };
        } else {
          const diffMinutes = (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "minute");
          if (diffMinutes >= 1) {
            return { unit: "minute", value: diffMinutes };
          } else {
            const diffSeconds = (0, import_dayjs.default)().diff((0, import_dayjs.default)(date), "second");
            return { unit: "second", value: diffSeconds };
          }
        }
      }
    }
  };
  const navigateToEntry = (0, import_react.useCallback)(async () => {
    if (data.relateType === "party") {
      navigate("/parties");
    }
    if (data.relateType === "webboard" && data.metadata.postId && data.metadata.commentId) {
      try {
        fetcher.load(
          `/resources/comment-position?postId=${data.metadata.postId}&commentId=${data.metadata.commentId}`
        );
      } catch (error) {
        console.error("get comment position error", error);
        navigate(`/webboards/${data.metadata.postId}`);
      }
    }
    if (data.relateType === "tournament" && data.metadata.tournament && data.metadata.tournament.id && data.metadata.tournament.deleteAt) {
      navigate(`/tournaments`);
    } else if (data.relateType === "tournament" && data.metadata.tournament && data.metadata.tournament.id) {
      navigate(`/tournaments/${data.metadata.tournament.id}`);
    }
  }, [data]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.state !== "loading") {
      const page = fetcher.data.page;
      const postId = data.metadata.postId;
      const commentId = data.metadata.commentId;
      if (postId && commentId) {
        navigate(`/webboards/${postId}?page=${page}#comment-${commentId}`);
      }
    }
  }, [fetcher.data, fetcher.state, data, navigate]);
  (0, import_react.useEffect)(() => {
    if (data.createdAt) {
      setDiff(getProperTimeDifference(data.createdAt));
    }
  }, [data]);
  const getNotificationMessage = (context, metadata, fromUserDisplayName) => {
    if (context === "commentPost") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has commented on your post"
      )}`;
    }
    if (context === "teamTournamentRemove") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:that has been approved to join"
      )} ${metadata.tournament.name || ""} ${t(
        "notification:tournament has been removed because"
      )} ${metadata.team.remark || ""}`;
    }
    if (context === "commentReply") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has replied to your comment"
      )}`;
    }
    if (context === "partyRequest") {
      return `${fromUserDisplayName ? fromUserDisplayName : ""} ${t(
        "notification:has sent a request to join your party"
      )}`;
    }
    if (context === "partyReady") {
      return `${t(
        `notification:Your Party is ready! start gaming by adding friend's username`
      )}`;
    }
    if (context === "partyAccept") {
      return `${t("notification:Your request to join")}  ${metadata.partyName || ""} ${t("notification:party has been accepted")}`;
    }
    if (context === "partyReject") {
      return `${t("notification:Your request to join")}  ${metadata.partyName || ""} ${t("notification:party has been rejected")}`;
    }
    if (context === "teamTournamentApproval") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:has been approved to join"
      )} ${metadata.tournament.name || ""} ${t("notification:tournament")}`;
    }
    if (context === "teamTournamentRejection") {
      return `${t("notification:Your team")} ${metadata.team.name || ""} ${t(
        "notification:request to join"
      )} ${metadata.tournament.name || ""} ${t(
        "notification:tournament has been rejected because"
      )} ${metadata.team.remark || ""}`;
    }
    if (context === "orgTournamentApproval") {
      return `${t("notification:Your tournament")}  ${metadata.name || ""} ${t(
        "notification:has been approved"
      )}`;
    }
    if (context === "orgTournamentRejection") {
      return `${t("notification:Your tournament")}  ${metadata.name || ""} ${t(
        "notification:has been rejected because"
      )} ${metadata.team.remark || ""}`;
    }
    return "no data";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      style: cardStyle,
      bodyStyle: { padding: 15 },
      onClick: navigateToEntry,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { wrap: false, gutter: 15, style: { alignItems: "flex-start" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          avatar_default,
          {
            size: 50,
            src: data.fromUser && data.fromUser.displayImage ? `${cdnUrl}/${data.fromUser.displayImage}` : user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png"
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/UserNotificationEntry.tsx",
            lineNumber: 206,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/User/UserNotificationEntry.tsx",
          lineNumber: 205,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: getNotificationMessage(
            data.context,
            data.metadata,
            (_a = data.fromUser) == null ? void 0 : _a.displayName
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserNotificationEntry.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { children: diff ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: `${diff.value} ${t(`${diff.unit}s ago`)}` }, void 0, false, {
            fileName: "app/components/pages/User/UserNotificationEntry.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            skeleton_default,
            {
              paragraph: { width: 50, rows: 1, style: { margin: 0 } },
              title: false,
              active: true
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/UserNotificationEntry.tsx",
              lineNumber: 231,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/UserNotificationEntry.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/UserNotificationEntry.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserNotificationEntry.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/UserNotificationEntry.tsx",
          lineNumber: 217,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/UserNotificationEntry.tsx",
        lineNumber: 204,
        columnNumber: 7
      }, this)
    },
    data.id,
    false,
    {
      fileName: "app/components/pages/User/UserNotificationEntry.tsx",
      lineNumber: 198,
      columnNumber: 5
    },
    this
  );
};

// app/routes/_app.users.$uuid.messages.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function UserMessagesIndex() {
  const { t } = useTranslation();
  const { notifications, searchParams, uuid } = useLoaderData();
  const submit = useSubmit();
  const handleChangePage = (0, import_react3.useCallback)(
    (page) => {
      const newSearchParams = { ...searchParams };
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
        { method: "get" }
      );
    },
    [searchParams, submit]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [20, 0], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AffixMenu, { direction: "vertical", offsetTop: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { gap: 20, vertical: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TiltMenus,
      {
        direction: "vertical",
        menus: [
          {
            link: `/users/${uuid}/messages`,
            level: 3,
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellOutlined_default, {}, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.messages.tsx",
                lineNumber: 96,
                columnNumber: 23
              }, this),
              t("all notifications")
            ] }, void 0, true, {
              fileName: "app/routes/_app.users.$uuid.messages.tsx",
              lineNumber: 94,
              columnNumber: 21
            }, this)
          }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.messages.tsx",
        lineNumber: 87,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: 18, children: notifications && notifications.items && notifications.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, gap: 20, children: notifications.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserNotificationEntry, { data: item }, item.id, false, {
        fileName: "app/routes/_app.users.$uuid.messages.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.messages.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      notifications.totalPages > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Pagination,
        {
          currentPage: notifications.page,
          totalPages: notifications.totalPages,
          onPageClicked: handleChangePage
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.users.$uuid.messages.tsx",
          lineNumber: 118,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(empty_default, { description: t("no notifications") }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.messages.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.messages.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
export {
  UserMessagesIndex as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.messages-UNAEDZKE.js.map
