import {
  WebboardSingleCommentBox,
  WebboardSingleComments,
  WebboardSinglePost
} from "/build/_shared/chunk-QXXYMUST.js";
import {
  require_modules
} from "/build/_shared/chunk-3HAWV4PW.js";
import "/build/_shared/chunk-PJTOFOWN.js";
import "/build/_shared/chunk-VMEWQXI4.js";
import "/build/_shared/chunk-GKESGK3R.js";
import "/build/_shared/chunk-C3CQI34N.js";
import "/build/_shared/chunk-3YDOJKCM.js";
import "/build/_shared/chunk-D5KO673L.js";
import "/build/_shared/chunk-ZP5K5WKW.js";
import {
  Pagination
} from "/build/_shared/chunk-JJYDDLYQ.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  notification_default,
  skeleton_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useRevalidator,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tournaments.$id.webboard.tsx
var import_node = __toESM(require_node());
var import_react = __toESM(require_react());
var import_react_scroll = __toESM(require_modules());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TournamentSingleWebboard() {
  const { id, comments, reactionOptions, searchParams, webboard } = useLoaderData();
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const location = useLocation();
  const { user } = (0, import_react.useContext)(AuthContext);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const navigation = useNavigation();
  const submit = useSubmit();
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const [api, contextHolder] = notification_default.useNotification();
  const [quotedComment, setQuotedComment] = (0, import_react.useState)(null);
  const handleReplyComment = (comment) => {
    setQuotedComment(comment);
    import_react_scroll.scroller.scrollTo("comment-box", {
      duration: 1e3,
      delay: 100,
      smooth: true,
      offset: -80
    });
  };
  const handleChangePage = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "create-comment") {
        revalidator.revalidate();
        resetFetcher(fetcher);
        setQuotedComment(null);
        api.open({
          message: t("successfully commented"),
          type: "success",
          duration: 5,
          placement: "bottomRight"
        });
      }
    }
  }, [fetcher, id, revalidator]);
  (0, import_react.useEffect)(() => {
    if (location.hash && location.hash.length > 0) {
      let commentId = "";
      commentId = location.hash.replace("#comment-", "comment-");
      if (commentId.length > 0) {
        import_react_scroll.scroller.scrollTo(commentId, {
          duration: 1e3,
          delay: 100,
          smooth: true,
          offset: -80
        });
        setTimeout(() => {
          navigate(location.pathname, { preventScrollReset: true });
        }, 1200);
      }
    }
  }, [location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WebboardSinglePost,
      {
        data: webboard,
        fetcher,
        reactionOptions
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
        lineNumber: 154,
        columnNumber: 7
      },
      this
    ),
    navigation.state === "loading" && navigation.location.pathname === location.pathname ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) : comments.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WebboardSingleComments,
      {
        data: comments.items,
        fetcher,
        reactionOptions,
        onReplyComment: handleReplyComment
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
        lineNumber: 165,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this),
    user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_scroll.Element, { name: "comment-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      card_default,
      {
        bordered: false,
        style: {
          marginBottom: 20,
          borderRadius: 10,
          boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          WebboardSingleCommentBox,
          {
            disabled: revalidator.state !== "idle",
            fetcher,
            postId: webboard.id,
            refComment: quotedComment
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
            lineNumber: 187,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
        lineNumber: 176,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this),
    comments.totalPages > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Pagination,
      {
        currentPage: comments.page,
        totalPages: comments.totalPages,
        onPageClicked: handleChangePage
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
        lineNumber: 197,
        columnNumber: 9
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.tournaments.$id.webboard.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}
export {
  TournamentSingleWebboard as default
};
//# sourceMappingURL=/build/routes/_app.tournaments.$id.webboard-GIWUWYR5.js.map
