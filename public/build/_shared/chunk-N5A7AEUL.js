import {
  Poll,
  WebboardEntryAuthor,
  WebboardEntryControl,
  WebboardEntryMeta,
  WebboardEntryTags,
  WebboardReaction
} from "/build/_shared/chunk-D5KO673L.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  InboxOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  col_default,
  divider_default,
  flex_default,
  image_default,
  result_default,
  row_default,
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

// app/components/pages/Webboard/WebboardEntry.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function WebboardEntry(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { data, fetcher, reactionOptions, isMyWebboard } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react.useContext)(AppContext);
  const { user } = (0, import_react.useContext)(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isOwner = user && data && data.author && data.authorId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const showThumbail = data.thumbnailImage && data.thumbnailImage.length && !data.poll;
  const cardStyle = {
    borderRadius: 12
    // boxShadow:
    //   scheme === "dark" ? "none" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    // border: "none",
  };
  const linkToSingle = (event) => {
    event.stopPropagation();
    navigate(`/webboards/${data.id}`);
  };
  console.log("data", data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: cardStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 20, vertical: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          WebboardEntryAuthor,
          {
            anonymous: data.anonymous,
            isAdmin: (_a = data.author) == null ? void 0 : _a.roles.includes("forum_admin"),
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            displayName: (_b = data.author) == null ? void 0 : _b.displayName,
            displayImage: `${cdnUrl}/${(_c = data.author) == null ? void 0 : _c.displayImage}`,
            assetFrame: `${cdnUrl}/${(_d = data.author) == null ? void 0 : _d.assetFrame}`,
            userUuid: ((_e = data.author) == null ? void 0 : _e.userName) ? data.author.userName : (_f = data.author) == null ? void 0 : _f.uuid,
            isVerified: (_g = data.author) == null ? void 0 : _g.isDopaVerified,
            role: (_h = data.author) == null ? void 0 : _h.roles
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        ),
        !isMyWebboard && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          WebboardEntryControl,
          {
            fetcher,
            id: data.id,
            isOwner,
            isForumAdmin,
            postType: "webboard"
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        row_default,
        {
          gutter: [20, 20],
          wrap: true,
          style: { cursor: "pointer" },
          onClick: linkToSingle,
          children: [
            showThumbail && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", span: 24, md: { span: 8, order: 1 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              image_default,
              {
                src: `${cdnUrl}/${data.thumbnailImage}`,
                wrapperStyle: {
                  borderRadius: 8,
                  overflow: "hidden"
                },
                preview: false
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                lineNumber: 86,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                flex: "auto",
                span: 24,
                md: showThumbail ? { span: 16, order: 0 } : 24,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "1.2em" }, children: data.title }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                    lineNumber: 102,
                    columnNumber: 15
                  }, this),
                  data.poll && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: (event) => event.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Poll,
                    {
                      data: data.poll,
                      fetcher,
                      onClick: linkToSingle,
                      fromIndex: true,
                      webboardId: data.id
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                      lineNumber: 105,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                  }, this),
                  data.postTags && data.postTags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardEntryTags, { data: data.postTags }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    WebboardEntryMeta,
                    {
                      rooms: data.postRooms,
                      games: data.postGames
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                      lineNumber: 117,
                      columnNumber: 15
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
                lineNumber: 96,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
          lineNumber: 78,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    !isMyWebboard && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginBlock: 20 } }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        WebboardReaction,
        {
          data: data.postReactionCounts,
          postId: data.id,
          postType: "webboard",
          fetcher,
          reactionOptions,
          userReaction: data.userPostReactions,
          children: (data.commentCounts || data.commentCounts === 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { cursor: "pointer" }, onClick: linkToSingle, children: `${data.commentCounts} ${t("comments")}` }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
          lineNumber: 128,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardEntry.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardLists.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function WebboardLists(props) {
  const { data, fetcher, reactionOptions, isMyWebboard } = props;
  const { t } = useTranslation();
  if (data.length > 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, gap: 16, children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      WebboardEntry,
      {
        fetcher,
        data: item,
        reactionOptions,
        isMyWebboard
      },
      item.id,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardLists.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardLists.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this);
  } else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(card_default, { style: { borderRadius: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardLists.tsx",
      lineNumber: 34,
      columnNumber: 23
    }, this), title: t("no webboard") }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardLists.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardLists.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this);
  }
}

export {
  WebboardLists
};
//# sourceMappingURL=/build/_shared/chunk-N5A7AEUL.js.map
