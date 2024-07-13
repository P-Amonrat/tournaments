import {
  require_modules
} from "/build/_shared/chunk-3HAWV4PW.js";
import {
  KycWizard
} from "/build/_shared/chunk-PJTOFOWN.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  UserAvatar
} from "/build/_shared/chunk-C3CQI34N.js";
import {
  Poll,
  WebboardEntryAuthor,
  WebboardEntryControl,
  WebboardEntryMeta,
  WebboardEntryTags,
  WebboardReaction
} from "/build/_shared/chunk-D5KO673L.js";
import {
  ShareDropDown
} from "/build/_shared/chunk-ZP5K5WKW.js";
import {
  TextEditor
} from "/build/_shared/chunk-Z5XIZAK5.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  LoadingOutlined_default,
  QuestionCircleOutlined_default,
  card_default,
  col_default,
  divider_default,
  flex_default,
  modal_default,
  require_dayjs_min,
  result_default,
  row_default,
  space_default,
  switch_default,
  theme_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches,
  useNavigate,
  useSearchParams
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Webboard/WebboardSingleCommentBox.tsx
var import_react8 = __toESM(require_react());

// app/components/common/QuotedComment.tsx
var import_react6 = __toESM(require_react());
var import_react_scroll3 = __toESM(require_modules());

// app/components/pages/Webboard/WebboardSingleComment.tsx
var import_react = __toESM(require_react());
var import_react_scroll = __toESM(require_modules());
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
function WebboardSingleComment(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { data, fetcher, borderBottom, onReply, reactionOptions } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const { token } = useToken();
  const { user, openLoginModal } = (0, import_react.useContext)(AuthContext);
  const [comment, setComment] = (0, import_react.useState)(data);
  const [editMode, setEditMode] = (0, import_react.useState)(false);
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const handleReply = (0, import_react.useCallback)(() => {
    if (user) {
      if (onReply) {
        onReply(comment);
      }
    } else {
      openLoginModal();
    }
  }, [comment, onReply]);
  (0, import_react.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success && (fetcher.data.success === "delete-comment" || fetcher.data.success === "reaction-comment" || fetcher.data.success === "update-comment") && fetcher.data.postId && `${fetcher.data.postId}` === `${data.id}`) {
      if (fetcher.data.success === "delete-comment") {
        setComment({ ...comment, deletedAt: (0, import_dayjs.default)() });
      } else if (fetcher.data.post) {
        setComment(fetcher.data.post);
      }
      setEditMode(false);
    }
  }, [data, fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_scroll.Element, { name: `comment-${comment.id}`, children: comment.isPublished && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        padding: 24,
        borderRadius: 0,
        borderBottom: borderBottom ? borderBottom : "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 30, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            WebboardEntryAuthor,
            {
              anonymous: comment.anonymous,
              isAdmin: false,
              createdAt: comment.createdAt,
              deletedAt: comment.deletedAt,
              updatedAt: comment.updatedAt,
              displayName: comment.author && ((_a = comment.author) == null ? void 0 : _a.displayName),
              displayImage: comment.author && `${cdnUrl}/${(_b = comment.author) == null ? void 0 : _b.displayImage}`,
              assetFrame: `${cdnUrl}/${(_c = data.author) == null ? void 0 : _c.assetFrame}`,
              userUuid: comment.author && ((_d = comment.author) == null ? void 0 : _d.userName) ? comment.author.userName : (_e = comment.author) == null ? void 0 : _e.uuid,
              isVerified: (_f = comment.author) == null ? void 0 : _f.isDopaVerified,
              role: (_g = comment.author) == null ? void 0 : _g.roles
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
              lineNumber: 77,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            WebboardEntryControl,
            {
              fetcher,
              id: comment.id,
              ignoreShare: true,
              isOwner: !comment.deletedAt && user && comment.author && comment.author.id === user.id,
              isForumAdmin,
              postType: "comment",
              onEditClicked: () => setEditMode(true)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 30,
            style: { display: "flex", paddingLeft: 60 },
            children: [
              editMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                WebboardSingleCommentBox,
                {
                  disabled: fetcher.state !== "idle",
                  initialData: comment,
                  editMode: true,
                  fetcher,
                  onCancel: () => setEditMode(false),
                  refComment: comment.quotedComment
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                  lineNumber: 118,
                  columnNumber: 17
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                comment.quotedComment && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuotedComment, { data: comment.quotedComment }, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                  lineNumber: 129,
                  columnNumber: 21
                }, this),
                !comment.deletedAt ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "ctrlg-html",
                    style: { color: token.colorTextBase },
                    dangerouslySetInnerHTML: {
                      __html: `${comment.content}`
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                    lineNumber: 132,
                    columnNumber: 21
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  typography_default.Text,
                  {
                    style: { color: "#5B5758", fontStyle: "italic" },
                    children: t("Deleted comment")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                    lineNumber: 140,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                lineNumber: 127,
                columnNumber: 17
              }, this),
              (comment.author && comment.author.signature && !comment.anonymous || !comment.deletedAt) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginBlock: 0 } }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                lineNumber: 151,
                columnNumber: 40
              }, this),
              comment.author && comment.author.signature && !comment.anonymous && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "ctrlg-html",
                  style: { color: token.colorTextBase },
                  dangerouslySetInnerHTML: {
                    __html: `${comment.author.signature}`
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                },
                this
              ),
              !comment.deletedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                WebboardReaction,
                {
                  data: comment.commentReactionCounts,
                  postId: comment.id,
                  postType: "comment",
                  fetcher,
                  reactionOptions,
                  userReaction: comment.userCommentReactions,
                  children: !comment.deletedAt && onReply && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: handleReply, children: t("reply") }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                    lineNumber: 173,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
                  lineNumber: 164,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
      lineNumber: 68,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardSingleComment.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardSingleComments.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken2 } = theme_default;
function WebboardSingleComments(props) {
  const { data, fetcher, onReplyComment, reactionOptions, separate } = props;
  const { token } = useToken2();
  const { scheme } = (0, import_react3.useContext)(AppContext);
  const cardStyle = {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  return separate ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, children: data.map((comment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    card_default,
    {
      bodyStyle: { padding: 0 },
      style: cardStyle,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        WebboardSingleComment,
        {
          data: comment,
          fetcher,
          onReply: onReplyComment,
          reactionOptions
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      )
    },
    `comment-${comment.id}`,
    false,
    {
      fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
      lineNumber: 34,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(card_default, { bordered: false, bodyStyle: { padding: 0 }, style: cardStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, children: data.map((comment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    WebboardSingleComment,
    {
      data: comment,
      fetcher,
      onReply: onReplyComment,
      reactionOptions,
      borderBottom: index !== data.length - 1 ? `1px solid ${token.colorBorder}` : 0
    },
    `comment-${comment.id}`,
    false,
    {
      fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
      lineNumber: 52,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardSingleComments.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardSinglePost.tsx
var import_dayjs2 = __toESM(require_dayjs_min());
var import_react4 = __toESM(require_react());
var import_react_scroll2 = __toESM(require_modules());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken3 } = theme_default;
var { Text, Title } = typography_default;
function WebboardSinglePost(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { data, fetcher, reactionOptions } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken3();
  const { t } = useTranslation();
  const { scheme, baseUrl } = (0, import_react4.useContext)(AppContext);
  const { user, openLoginModal } = (0, import_react4.useContext)(AuthContext);
  const postUrl = `${baseUrl}/webboards/${data.id}`;
  const isOwner = user && data && data.author && data.authorId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const navigate = useNavigate();
  const navigateToTournament = () => {
    navigate(`/tournaments/${data.tournament_id}`);
  };
  const cardStyle = {
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(card_default, { bordered: false, style: cardStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { vertical: true, gap: 30, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        WebboardEntryAuthor,
        {
          anonymous: data.anonymous,
          isAdmin: false,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          displayName: (_a = data.author) == null ? void 0 : _a.displayName,
          displayImage: `${cdnUrl}/${(_b = data.author) == null ? void 0 : _b.displayImage}`,
          assetFrame: `${cdnUrl}/${(_c = data.author) == null ? void 0 : _c.assetFrame}`,
          isVerified: (_d = data.author) == null ? void 0 : _d.isDopaVerified,
          role: (_e = data.author) == null ? void 0 : _e.roles,
          userUuid: ((_f = data.author) == null ? void 0 : _f.userName) ? data.author.userName : (_g = data.author) == null ? void 0 : _g.uuid
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        WebboardEntryControl,
        {
          fetcher,
          id: data.id,
          ignoreShare: true,
          isOwner,
          isForumAdmin,
          postType: "webboard"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: data.title }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    data.poll && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Poll, { data: data.poll, fetcher, queryInitialAnswer: true }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "ctrlg-html",
        style: { color: token.colorTextBase },
        dangerouslySetInnerHTML: {
          __html: `${data.content}`
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 86,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(divider_default, { style: { marginBlock: 0 } }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    ((_h = data.author) == null ? void 0 : _h.signature) && !data.anonymous && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "ctrlg-html",
        style: { color: token.colorTextBase },
        dangerouslySetInnerHTML: {
          __html: `${data.author.signature}`
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 95,
        columnNumber: 11
      },
      this
    ),
    data.postTags && data.postTags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WebboardEntryTags, { data: data.postTags }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { gap: 20, justify: "space-between", align: "center", wrap: "wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WebboardEntryMeta, { rooms: data.postRooms, games: data.postGames }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      data.updatedAt && data.createdAt && data.updatedAt !== data.createdAt && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { style: { opacity: 0.6 }, children: `${t("edited at")} ${(0, import_dayjs2.default)(
        data.updatedAt
      ).format("DD/MM/YYYY - HH:mm")}` }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WebboardReaction,
      {
        data: data.postReactionCounts,
        postId: data.id,
        postType: "webboard",
        fetcher,
        reactionOptions,
        userReaction: data.userPostReactions
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 116,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(divider_default, { style: { marginBlock: 0 } }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "space-between", align: "center", gap: 20, wrap: "wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { align: "center", gap: 15, justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react_scroll2.Link,
          {
            to: "comment-box",
            smooth: true,
            duration: 500,
            offset: -80,
            onClick: () => user ? null : openLoginModal(),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TiltButton, { color: "primary", children: t("comment") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
              lineNumber: 134,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
            lineNumber: 127,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { children: `${data.commentCounts} ${t("comments")}` }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { align: "center", gap: 15, justify: "space-between", children: [
        data.tournament_id && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          TiltButton,
          {
            color: "secondary-brand",
            onClick: navigateToTournament,
            children: t("back to tournament")
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
            lineNumber: 140,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ShareDropDown, { postUrl, dropDownPlacement: "topRight" }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardSinglePost.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/components/common/QuotedComment.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken4 } = theme_default;
function QuotedComment(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { data } = props;
  const { token } = useToken4();
  const { scheme } = (0, import_react6.useContext)(AppContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClickQuotedComment = (0, import_react6.useCallback)(() => {
    let currentPage = searchParams.get("page");
    currentPage = currentPage ? parseInt(currentPage) : 1;
    const quotedPage = data.page;
    if (quotedPage === void 0 || quotedPage === null) {
      return;
    }
    if (currentPage == quotedPage) {
      import_react_scroll3.scroller.scrollTo(`comment-${data.id}`, {
        duration: 1e3,
        delay: 100,
        smooth: true,
        offset: -80
      });
    } else {
      navigate(`?page=${quotedPage}#comment-${data.id}`);
    }
  }, [data, searchParams]);
  console.log("data quote", data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    card_default,
    {
      style: {
        position: "relative",
        maxHeight: 400,
        overflow: "hidden",
        backgroundColor: token.colorBgLayout
      },
      bordered: false,
      bodyStyle: { padding: 20 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          WebboardEntryAuthor,
          {
            anonymous: data.anonymous,
            isAdmin: false,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            displayName: data.author && ((_a = data.author) == null ? void 0 : _a.displayName),
            displayImage: data.author && `${cdnUrl}/${(_b = data.author) == null ? void 0 : _b.displayImage}`,
            assetFrame: `${cdnUrl}/${(_c = data.author) == null ? void 0 : _c.assetFrame}`,
            userUuid: data.author && ((_d = data.author) == null ? void 0 : _d.userName) ? data.author.userName : (_e = data.author) == null ? void 0 : _e.uuid,
            isVerified: (_f = data.author) == null ? void 0 : _f.isDopaVerified,
            role: (_g = data.author) == null ? void 0 : _g.roles
          },
          void 0,
          false,
          {
            fileName: "app/components/common/QuotedComment.tsx",
            lineNumber: 60,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/common/QuotedComment.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            className: "ctrlg-html",
            style: {
              color: token.colorTextBase,
              opacity: 0.85,
              marginTop: 20
            },
            dangerouslySetInnerHTML: {
              __html: `${data.content}`
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/common/QuotedComment.tsx",
            lineNumber: 78,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "div",
          {
            style: {
              position: "absolute",
              top: 200,
              left: 0,
              height: 200,
              width: "100%",
              background: scheme === "dark" ? "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))" : "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))"
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/common/QuotedComment.tsx",
            lineNumber: 89,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          OverlayBg,
          {
            style: { backgroundColor: "transparent" },
            onClick: handleClickQuotedComment
          },
          void 0,
          false,
          {
            fileName: "app/components/common/QuotedComment.tsx",
            lineNumber: 102,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/QuotedComment.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Webboard/WebboardSingleCommentBox.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var { useToken: useToken5 } = theme_default;
function WebboardSingleCommentBox(props) {
  const {
    disabled,
    editMode,
    fetcher,
    initialData,
    onCancel,
    postId,
    refComment
  } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = (0, import_react8.useContext)(AuthContext);
  const { t } = useTranslation();
  const [loading, setLoading] = (0, import_react8.useState)(true);
  const [isReply, setIsReply] = (0, import_react8.useState)(false);
  const [content, setContent] = (0, import_react8.useState)(
    initialData && initialData.content ? initialData.content : ""
  );
  const [anonymous, setAnonymous] = (0, import_react8.useState)(
    initialData && initialData.anonymous ? initialData.anonymous : false
  );
  const [quotedComment, setQuotedComment] = (0, import_react8.useState)(refComment);
  const [kycWizardModal, setKycWizardModal] = (0, import_react8.useState)(false);
  const onSubmit = (0, import_react8.useCallback)(
    (e) => {
      if (postId) {
        fetcher.submit(
          {
            postId,
            comment: JSON.stringify({
              content,
              quotedCommentId: quotedComment ? quotedComment.id : null,
              anonymous
            })
          },
          {
            method: "post",
            action: `/resources/create-comment`
          }
        );
      } else if (initialData) {
        fetcher.submit(
          {
            commentId: initialData.id,
            comment: JSON.stringify({
              content,
              quotedCommentId: quotedComment ? quotedComment.id : null,
              anonymous
            })
          },
          {
            method: "put",
            action: `/resources/update-comment`
          }
        );
      }
      setContent("");
    },
    [anonymous, content, fetcher, initialData, postId, quotedComment]
  );
  const openKycWizardModal = () => {
    setKycWizardModal(true);
  };
  const closeKycWizardModal = () => {
    setKycWizardModal(false);
  };
  const handleAnonymousChanged = (checked, e) => {
    e.stopPropagation();
    setAnonymous(checked);
  };
  (0, import_react8.useEffect)(() => {
    if (refComment) {
      setQuotedComment(refComment);
    } else {
      setQuotedComment(null);
    }
  }, [refComment]);
  (0, import_react8.useEffect)(() => {
    if (disabled) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [disabled]);
  (0, import_react8.useEffect)(() => {
    if (quotedComment) {
      setIsReply(true);
    } else {
      setIsReply(false);
    }
  }, [quotedComment]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, children: [
    !initialData && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      UserAvatar,
      {
        display: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png",
        size: 50
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
        lineNumber: 144,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { flex: "auto", children: [
      quotedComment && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          flex_default,
          {
            justify: "space-between",
            align: "center",
            style: { marginBottom: 20 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title2, { level: 5, style: { margin: 0 }, children: t("reply to") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
            lineNumber: 157,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(QuotedComment, { data: quotedComment }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, {}, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      !loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          TextEditor,
          {
            id: "comment",
            fetcher,
            onChange: setContent,
            initialValues: initialData && initialData.content ? initialData.content : ""
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
            lineNumber: 179,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { justify: "space-between", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              TiltButton,
              {
                color: "primary",
                disabled: !content.length || loading || fetcher.state !== "idle",
                onClick: onSubmit,
                children: t("comment")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                lineNumber: 189,
                columnNumber: 17
              },
              this
            ),
            onCancel && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
              lineNumber: 199,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          !editMode && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text2, { children: t("anonymous") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              switch_default,
              {
                checked: anonymous,
                disabled: !user.isDopaVerified,
                onChange: handleAnonymousChanged
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                lineNumber: 207,
                columnNumber: 19
              },
              this
            ),
            !user.isDopaVerified && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              tooltip_default,
              {
                placement: "top",
                arrow: false,
                title: t(
                  'KYC to access "buy sell" and "tournament" rooms'
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  QuestionCircleOutlined_default,
                  {
                    onClick: openKycWizardModal,
                    style: { cursor: "pointer", color: "#7a6fee" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                    lineNumber: 220,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                lineNumber: 213,
                columnNumber: 21
              },
              this
            ),
            !user.isDopaVerified && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              modal_default,
              {
                open: kycWizardModal,
                closable: false,
                footer: false,
                onCancel: closeKycWizardModal,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(KycWizard, {}, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                  lineNumber: 233,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
                lineNumber: 227,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
        lineNumber: 241,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
        lineNumber: 241,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardSingleCommentBox.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

export {
  WebboardSingleCommentBox,
  WebboardSingleComments,
  WebboardSinglePost
};
//# sourceMappingURL=/build/_shared/chunk-QXXYMUST.js.map
