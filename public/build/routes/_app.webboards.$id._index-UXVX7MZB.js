import {
  IndexFilter
} from "/build/_shared/chunk-5WX7JNC5.js";
import {
  BackButton
} from "/build/_shared/chunk-5IANIR6E.js";
import {
  WebboardTags
} from "/build/_shared/chunk-WSOOSU5J.js";
import {
  WebboardSingleCommentBox,
  WebboardSingleComments,
  WebboardSinglePost
} from "/build/_shared/chunk-QXXYMUST.js";
import {
  require_modules
} from "/build/_shared/chunk-3HAWV4PW.js";
import {
  KycWizard
} from "/build/_shared/chunk-PJTOFOWN.js";
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
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
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
  affix_default,
  card_default,
  col_default,
  notification_default,
  row_default,
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
  useRouteLoaderData,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.webboards.$id._index.tsx
var import_node = __toESM(require_node());
var import_react = __toESM(require_react());
var import_react_scroll = __toESM(require_modules());
var import_lodash = __toESM(require_lodash());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function WebboardSingle() {
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const routeLoader = useRouteLoaderData("routes/_app.webboards.$id");
  const { id, backToIndex, comments, searchParams } = useLoaderData();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const submit = useSubmit();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const location = useLocation();
  const { user } = (0, import_react.useContext)(AuthContext);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const revalidator = useRevalidator();
  const { webboard } = routeLoader;
  const { games, rooms, reactionOptions, tags } = webboardRouteLoader;
  const [api, contextHolder] = notification_default.useNotification();
  const [quotedComment, setQuotedComment] = (0, import_react.useState)(null);
  const isBuySell = webboard && webboard.postRooms.find((r) => r.room.nameEn === "buy sell");
  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room) => ({
        label: t(room.nameEn),
        value: room.id
      }))
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options: games.map((game) => ({
        label: game.name,
        value: game.id,
        image: game.iconUrl
      }))
    }
  ];
  const navigateToIndex = (name, value) => {
    navigate(`/webboards?${name}=${value}`);
  };
  const handleChangePage = (0, import_react.useCallback)(
    (page) => {
      const newSearchParams = { ...searchParams };
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      const searchParamsString = new URLSearchParams(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v))
      ).toString();
      const pathWithoutHash = `${location.pathname}?${searchParamsString}`;
      navigate(pathWithoutHash, { preventScrollReset: true });
    },
    [searchParams, submit]
  );
  const handleReplyComment = (comment) => {
    setQuotedComment(comment);
    import_react_scroll.scroller.scrollTo("comment-box", {
      duration: 1e3,
      delay: 100,
      smooth: true,
      offset: -80
    });
  };
  (0, import_react.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "create-comment" && `${fetcher.data.webboardId}` === `${id}`) {
        revalidator.revalidate();
        resetFetcher(fetcher);
        setQuotedComment(null);
        api.open({
          message: t("Successfully commented"),
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
      }
    }
  }, [location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [30, 10], children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "hide-scrollbar",
              style: {
                maxHeight: "calc(100vh - 60px)",
                overflowY: "auto"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                IndexFilter,
                {
                  onFilterClicked: navigateToIndex,
                  filters,
                  mobileAppendChildren: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardTags, { data: tags, fetcher, mobileStyle: true }, void 0, false, {
                    fileName: "app/routes/_app.webboards.$id._index.tsx",
                    lineNumber: 218,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.webboards.$id._index.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.webboards.$id._index.tsx",
              lineNumber: 206,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 205,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 204,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 2 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardTags, { data: tags, fetcher }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 225,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 224,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 12, order: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              BackButton,
              {
                navigateTo: backToIndex ? -2 : "/webboards",
                fallbackUrl: "/webboards"
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.webboards.$id._index.tsx",
                lineNumber: 234,
                columnNumber: 11
              },
              this
            ),
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
                fileName: "app/routes/_app.webboards.$id._index.tsx",
                lineNumber: 239,
                columnNumber: 11
              },
              this
            ),
            navigation.state === "loading" && navigation.location.pathname === location.pathname ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
              fileName: "app/routes/_app.webboards.$id._index.tsx",
              lineNumber: 247,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.webboards.$id._index.tsx",
              lineNumber: 246,
              columnNumber: 13
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
                fileName: "app/routes/_app.webboards.$id._index.tsx",
                lineNumber: 250,
                columnNumber: 13
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
              fileName: "app/routes/_app.webboards.$id._index.tsx",
              lineNumber: 257,
              columnNumber: 13
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
                children: !user.kycLevel && isBuySell ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KycWizard, {}, void 0, false, {
                  fileName: "app/routes/_app.webboards.$id._index.tsx",
                  lineNumber: 273,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  WebboardSingleCommentBox,
                  {
                    disabled: revalidator.state !== "idle",
                    fetcher,
                    postId: id,
                    refComment: quotedComment
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.webboards.$id._index.tsx",
                    lineNumber: 275,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.webboards.$id._index.tsx",
                lineNumber: 261,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.webboards.$id._index.tsx",
              lineNumber: 260,
              columnNumber: 13
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
                fileName: "app/routes/_app.webboards.$id._index.tsx",
                lineNumber: 286,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.webboards.$id._index.tsx",
            lineNumber: 233,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.webboards.$id._index.tsx",
          lineNumber: 203,
          columnNumber: 7
        }, this),
        contextHolder
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.webboards.$id._index.tsx",
      lineNumber: 195,
      columnNumber: 5
    },
    this
  );
}
export {
  WebboardSingle as default
};
//# sourceMappingURL=/build/routes/_app.webboards.$id._index-UXVX7MZB.js.map
