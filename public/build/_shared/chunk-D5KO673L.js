import {
  ShareDropDown
} from "/build/_shared/chunk-ZP5K5WKW.js";
import {
  Ellipsis,
  PenLine,
  Trash2,
  TriangleAlert
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  InboxOutlined_default,
  SmileOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CheckCircleFilled_default,
  ExclamationCircleFilled_default,
  PlusOutlined_default,
  avatar_default,
  card_default,
  col_default,
  dropdown_default,
  flex_default,
  image_default,
  input_default,
  modal_default,
  require_dayjs_min,
  result_default,
  row_default,
  select_default,
  skeleton_default,
  space_default,
  tag_default,
  theme_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  Link,
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

// app/components/pages/Webboard/WebboardEntryAuthor.tsx
var import_dayjs = __toESM(require_dayjs_min());

// app/components/pages/Webboard/WebboardEntryControl.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function WebboardEntryControl(props) {
  const {
    fetcher,
    id,
    ignoreShare,
    isOwner,
    isForumAdmin,
    onEditClicked,
    postType
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { baseUrl } = (0, import_react2.useContext)(AppContext);
  const [reason, setReason] = (0, import_react2.useState)("");
  const [modal, contextHolder] = modal_default.useModal();
  const [reportModal, setReportModal] = (0, import_react2.useState)(false);
  const postUrl = `${baseUrl}/webboards/${id}`;
  const { Option } = select_default;
  const openReportModal = () => {
    setReportModal(true);
  };
  const closeReportModal = () => {
    setReportModal(false);
  };
  const handleEditClicked = () => {
    if (onEditClicked) {
      onEditClicked();
    } else {
      navigate(`/webboards/${id}/edit`);
    }
  };
  const onReasonChanged = (e) => {
    setReason(e.target.value);
  };
  const [selectedReason, setSelectedReason] = (0, import_react2.useState)("");
  const reasonOptions = [
    { label: " Inappropriate Content", value: "Inappropriate Content" },
    { label: "Violence", value: "Violence" },
    { label: "Harassment", value: "Harassment" },
    { label: " False Information", value: "False Information" },
    { label: "Spam", value: "Spam" },
    { label: "Unauthorized Sales", value: "Unauthorized Sales" },
    { label: "Others", value: "Others" }
  ];
  const onReasonSelected = (value) => {
    if (value !== "Others") {
      setReason(value);
    } else {
      setReason("");
    }
    setSelectedReason(value);
  };
  const reasonSelect = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    select_default,
    {
      style: { width: "100%" },
      onChange: onReasonSelected,
      value: selectedReason ? selectedReason : void 0,
      disabled: fetcher.state !== "idle",
      placeholder: t("select reason"),
      listHeight: 300,
      children: reasonOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Option, { value: option.value, children: option.label }, option.value, false, {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
      lineNumber: 91,
      columnNumber: 5
    },
    this
  );
  const submitReport = (0, import_react2.useCallback)(() => {
    if (reason.length > 0) {
      fetcher.submit(
        { reason, id, type: postType },
        {
          method: "post",
          action: `/resources/report-post`
        }
      );
    }
  }, [fetcher, postType, reason]);
  const deletePost = (0, import_react2.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this post`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id, type: postType },
          {
            method: "delete",
            action: `/resources/delete-post`
          }
        );
      }
    });
  }, [fetcher, id, postType]);
  const menus = [
    {
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { color: "#f5222d" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {}, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        t("report")
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      onClick: openReportModal
    }
  ];
  if (isOwner || isForumAdmin) {
    menus.push({
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      onClick: deletePost
    });
  }
  (0, import_react2.useEffect)(() => {
    setReason("");
  }, [id]);
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success === `report-${postType ? postType : "webboard"}` && fetcher.state === "idle") {
      setReason("");
      setReportModal(false);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 15, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        dropdown_default,
        {
          arrow: false,
          menu: { items: menus },
          placement: "bottomRight",
          trigger: ["click"],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: 18, cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, {}, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
            lineNumber: 188,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
            lineNumber: 187,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
          lineNumber: 181,
          columnNumber: 9
        },
        this
      ),
      !ignoreShare && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareDropDown, { postUrl }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 191,
        columnNumber: 26
      }, this),
      isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Text,
        {
          style: { fontSize: 18, cursor: "pointer" },
          onClick: handleEditClicked,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PenLine, {}, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
          lineNumber: 193,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        footer: null,
        open: reportModal,
        onCancel: closeReportModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t("please input reason to report") }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
            lineNumber: 208,
            columnNumber: 11
          }, this),
          reasonSelect,
          selectedReason === "Others" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            input_default.TextArea,
            {
              rows: 4,
              onChange: onReasonChanged,
              value: reason,
              disabled: fetcher.state !== "idle"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
              lineNumber: 213,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltButton,
            {
              color: "danger",
              onClick: submitReport,
              disabled: !reason.length || fetcher.state !== "idle",
              children: t("report")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
              lineNumber: 220,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
          lineNumber: 207,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
        lineNumber: 201,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardEntryControl.tsx",
    lineNumber: 179,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardEntryMeta.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2 } = typography_default;
var { useToken } = theme_default;
function WebboardEntryMeta(props) {
  const { games, rooms } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navigateToGame = (gameId) => {
    navigate(`/webboards?games=${gameId}`);
  };
  const navigateToRoom = (roomId) => {
    navigate(`/webboards?rooms=${roomId}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { wrap: true, size: [6, 4], style: { lineHeight: 1 }, children: [
    games.map(
      (game) => {
        var _a;
        return ((_a = game.game) == null ? void 0 : _a.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          avatar_default,
          {
            style: { cursor: "pointer" },
            src: `${cdnUrl}/${game.game.iconUrl}`,
            size: 36,
            onClick: () => navigateToGame(game.game.id)
          },
          `game-${game.game.id}`,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryMeta.tsx",
            lineNumber: 34,
            columnNumber: 13
          },
          this
        );
      }
    ),
    rooms.map(
      (room) => {
        var _a, _b;
        return ((_a = room.room) == null ? void 0 : _a.id) && ((_b = room.room) == null ? void 0 : _b.name) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          TiltButton,
          {
            color: "transparent",
            onClick: () => navigateToRoom(room.room.id),
            style: {
              padding: "5px 10px",
              height: "auto",
              borderColor: token.colorBorder,
              fontStyle: "italic",
              fontWeight: 400
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { children: t(room.room.nameEn) }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardEntryMeta.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this)
          },
          `room-${room.room.id}`,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryMeta.tsx",
            lineNumber: 45,
            columnNumber: 11
          },
          this
        ) : null;
      }
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardEntryMeta.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardEntryTags.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text3 } = typography_default;
function WebboardEntryTags(props) {
  const { data } = props;
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { wrap: true, size: [10, 4], style: { lineHeight: 1 }, children: data.sort((a, b) => {
    if (a.id > b.id)
      return -1;
    if (a.id < b.id)
      return 1;
    return 0;
  }).map((postTag) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/tags/${postTag.tag.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text3, { style: { color: "#7a6fee" }, children: t(`#${postTag.tag.name}`) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardEntryTags.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, postTag.tag.name, false, {
    fileName: "app/components/pages/Webboard/WebboardEntryTags.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/Webboard/WebboardEntryTags.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/pages/Webboard/WebboardReaction.tsx
var import_react5 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text4 } = typography_default;
function WebboardReaction(props) {
  const {
    data,
    children,
    fetcher,
    postId,
    postType,
    reactionOptions,
    userReaction
  } = props;
  const [currentReactions, setCurrentReactions] = (0, import_react5.useState)(
    data ? data.sort((a, b) => {
      if (a.count > b.count)
        return -1;
      if (a.count < b.count)
        return 1;
      return 0;
    }) : []
  );
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react5.useContext)(AppContext);
  const { user, openLoginModal } = (0, import_react5.useContext)(AuthContext);
  const [dropOpen, setDropOpen] = (0, import_react5.useState)(false);
  const disabled = !user;
  const hasMatchingReaction = (0, import_react5.useCallback)(
    (reactionId) => {
      return userReaction == null ? void 0 : userReaction.some(
        (reactionObj) => reactionObj.reactionId === reactionId
      );
    },
    [userReaction]
  );
  const selectReaction = (0, import_react5.useCallback)(
    (reactionId) => {
      fetcher.submit(
        { id: postId, reactionId, type: postType },
        {
          method: "post",
          action: `/resources/reaction-post`
        }
      );
      setDropOpen(false);
    },
    [postId, postType]
  );
  const handleDebounceSelectReaction = (0, import_react5.useMemo)(
    () => (0, import_lodash.debounce)(selectReaction, 500),
    [selectReaction]
  );
  (0, import_react5.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && fetcher.data.success && fetcher.data.success === `reaction-${postType ? postType : "webboard"}` && fetcher.data.postType && fetcher.data.postType === postType && fetcher.data.postId && `${fetcher.data.postId}` === `${postId}` && fetcher.data.reactions) {
      setCurrentReactions([
        ...fetcher.data.reactions.sort((a, b) => {
          if (a.count > b.count)
            return -1;
          if (a.count < b.count)
            return 1;
          return 0;
        })
      ]);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType, postId]);
  const filteredReactions = currentReactions.filter((cr) => cr.count > 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { gap: 20, justify: "space-between", align: "center", wrap: "wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, wrap: true, children: [
      filteredReactions && filteredReactions.length > 0 && filteredReactions.map((reaction) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        tooltip_default,
        {
          title: reaction.reaction.name,
          placement: "top",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: reaction.count !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TiltButton,
            {
              style: {
                padding: "5px 10px"
              },
              onClick: !disabled ? () => handleDebounceSelectReaction(reaction.reaction.id) : () => openLoginModal(),
              color: hasMatchingReaction(reaction.reactionId) ? "secondary-brand" : `${scheme}-base`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                space_default,
                {
                  size: 8,
                  style: {
                    fontSize: "1.1em",
                    alignItems: "center"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      avatar_default,
                      {
                        shape: "square",
                        src: `${cdnUrl}/${reaction.reaction.image}`,
                        size: 20
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                        lineNumber: 145,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      Text4,
                      {
                        style: {
                          fontWeight: 400
                        },
                        children: reaction.count && reaction.count.toLocaleString()
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                        lineNumber: 150,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                  lineNumber: 138,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
              lineNumber: 122,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        },
        reaction.id,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
          lineNumber: 115,
          columnNumber: 13
        },
        this
      )),
      reactionOptions && reactionOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        dropdown_default,
        {
          arrow: true,
          open: dropOpen,
          onOpenChange: !disabled ? setDropOpen : () => openLoginModal(),
          dropdownRender: (menus) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              ReactionsBox,
              {
                data: reactionOptions,
                onReactionSelect: !disabled ? handleDebounceSelectReaction : openLoginModal
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                lineNumber: 170,
                columnNumber: 17
              },
              this
            );
          },
          trigger: ["click"],
          placement: "top",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TiltButton,
            {
              color: `${scheme}-base`,
              style: {
                padding: "5px 10px",
                cursor: "pointer"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 2, style: { fontSize: "1.1em" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SmileOutlined_default, {}, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                  lineNumber: 190,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PlusOutlined_default, { style: { fontSize: "0.8em", strokeWidth: 2 } }, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                  lineNumber: 191,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
                lineNumber: 189,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
              lineNumber: 182,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
          lineNumber: 164,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    children && children
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardReaction.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/components/common/Poll.tsx
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken2 } = theme_default;
var { Text: Text5 } = typography_default;
function Poll(props) {
  const { onClick, data, queryInitialAnswer, fetcher, fromIndex, webboardId } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useToken2();
  const { user, openLoginModal } = (0, import_react7.useContext)(AuthContext);
  const [modal, contextHolder] = modal_default.useModal();
  const [poll, setPoll] = (0, import_react7.useState)(data);
  const [loading, setLoading] = (0, import_react7.useState)(
    user && queryInitialAnswer ? true : false
  );
  const [answered, setAnswered] = (0, import_react7.useState)(null);
  const handleVote = (0, import_react7.useCallback)(
    (answerId) => {
      modal.confirm({
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { direction: "vertical", size: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { children: `${t("are you to vote")}?` }, void 0, false, {
            fileName: "app/components/common/Poll.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { children: t("this action cannot be undone") }, void 0, false, {
            fileName: "app/components/common/Poll.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        okText: t("confirm"),
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { id: data.id, answerId },
            {
              method: "post",
              action: `/resources/submit-poll`
            }
          );
        }
      });
    },
    [data, fetcher]
  );
  (0, import_react7.useEffect)(() => {
    if (user && queryInitialAnswer) {
      setLoading(true);
      fetcher.load(`/resources/poll-answer?id=${data.id}`);
    }
  }, []);
  (0, import_react7.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && fetcher.data.pollId && `${fetcher.data.pollId}` === `${data.id}`) {
      setAnswered(fetcher.data.answer ? fetcher.data.answer : null);
      if (fetcher.data.poll) {
        setPoll(fetcher.data.poll);
      }
      setLoading(false);
    }
  }, [data, fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        backgroundColor: token.colorBgElevated,
        borderRadius: 10
        // maskImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2))`,
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 10, vertical: true, children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this) : poll.options && poll.options.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          poll.options.slice(0, fromIndex ? 4 : void 0).sort((a, b) => {
            if (a.id < b.id)
              return -1;
            if (a.id > b.id)
              return 1;
            return 0;
          }).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            row_default,
            {
              gutter: 10,
              style: { alignItems: "center" },
              wrap: false,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { flex: "none", children: option.userPollSelections && option.userPollSelections[0] || `${option.id}` === `${answered}` ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  CheckCircleFilled_default,
                  {
                    style: { color: "#7a6fee", fontSize: 30 }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/Poll.tsx",
                    lineNumber: 130,
                    columnNumber: 23
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "div",
                  {
                    style: {
                      width: 30,
                      height: 30,
                      border: `2px solid ${token.colorBorder}`,
                      borderRadius: "50%",
                      cursor: answered ? "default" : "pointer"
                    },
                    onClick: answered ? void 0 : user ? onClick ? onClick : () => handleVote(option.id) : () => openLoginModal()
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/Poll.tsx",
                    lineNumber: 134,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/common/Poll.tsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  card_default,
                  {
                    style: (
                      // answered &&
                      // `${option.userPollSelections}` === `${answered}`
                      //   ? { backgroundColor: "#7a6fee" }
                      //   : undefined
                      (option.userPollSelections && option.userPollSelections[0] || `${option.id}` === `${answered}`) && {
                        backgroundColor: "#7a6fee"
                      }
                    ),
                    bodyStyle: {
                      padding: 15
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      Text5,
                      {
                        style: {
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: option.userPollSelections && option.userPollSelections[0] || `${option.id}` === `${answered}` ? "#fff" : void 0
                        },
                        children: option.option
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/common/Poll.tsx",
                        lineNumber: 171,
                        columnNumber: 23
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/Poll.tsx",
                    lineNumber: 155,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/common/Poll.tsx",
                  lineNumber: 154,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  col_default,
                  {
                    flex: "none",
                    style: { minWidth: 40, textAlign: "center" },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "1.1em" }, children: option.count }, void 0, false, {
                      fileName: "app/components/common/Poll.tsx",
                      lineNumber: 193,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/Poll.tsx",
                    lineNumber: 189,
                    columnNumber: 19
                  },
                  this
                )
              ]
            },
            option.id,
            true,
            {
              fileName: "app/components/common/Poll.tsx",
              lineNumber: 120,
              columnNumber: 17
            },
            this
          )),
          poll.options.length > 4 && fromIndex === true && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            Text5,
            {
              style: { textAlign: "center", zIndex: 1e3 },
              onClick: () => navigate(`/webboards/${webboardId}`),
              children: t("and more options...")
            },
            void 0,
            false,
            {
              fileName: "app/components/common/Poll.tsx",
              lineNumber: 198,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InboxOutlined_default, {}, void 0, false, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 207,
          columnNumber: 25
        }, this), title: t("no option") }, void 0, false, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/common/Poll.tsx",
          lineNumber: 107,
          columnNumber: 7
        }, this),
        contextHolder
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/Poll.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
}

// app/components/common/ReactionsBox.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function ReactionsBox(props) {
  const { data, onReactionSelect } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    card_default,
    {
      bordered: false,
      bodyStyle: {
        padding: 10,
        width: 260,
        maxHeight: 260,
        overflow: "auto"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(flex_default, { gap: 10, wrap: "wrap", children: data && data.length > 0 && data.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        avatar_default,
        {
          shape: "square",
          src: `${cdnUrl}/${option.image}`,
          size: 40,
          onClick: () => onReactionSelect(option.id),
          style: { cursor: "pointer" }
        },
        option.id,
        false,
        {
          fileName: "app/components/common/ReactionsBox.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      )) }, void 0, false, {
        fileName: "app/components/common/ReactionsBox.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/ReactionsBox.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Webboard/WebboardEntryAuthor.tsx
var import_react11 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var { Text: Text6 } = typography_default;
function WebboardEntryAuthor(props) {
  const {
    anonymous,
    deletedAt,
    displayImage,
    displayName,
    isAdmin,
    createdAt,
    updatedAt,
    userUuid,
    isVerified,
    role,
    assetFrame
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [diff, setDiff] = (0, import_react11.useState)(null);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  let roles = [];
  if (role) {
    roles = role.sort((a, b) => a.id - b.id);
  }
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
  const linkToUser = (e) => {
    navigate(`/users/${userUuid}`);
  };
  (0, import_react11.useEffect)(() => {
    if (createdAt) {
      setDiff(getProperTimeDifference(createdAt));
    }
  }, [createdAt]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { size: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        style: {
          padding: "14.5px",
          backgroundImage: `url(${assetFrame})`,
          // backgroundImage: `url(/image/Space.gif)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          avatar_default,
          {
            src: displayImage && !anonymous ? displayImage : "/image/avatar-anonymous.jpg",
            size: 50,
            onClick: userUuid && !anonymous ? linkToUser : void 0,
            style: { cursor: userUuid && !anonymous ? "pointer" : "default" }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 97,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
        lineNumber: 88,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { direction: "vertical", size: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Text6,
          {
            style: {
              fontWeight: 600,
              cursor: userUuid && !anonymous ? "pointer" : "default"
            },
            onClick: userUuid && !anonymous ? linkToUser : void 0,
            children: anonymous ? t("anonymous") : displayName
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 110,
            columnNumber: 11
          },
          this
        ),
        isAdmin && !anonymous && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          tag_default,
          {
            style: { margin: 0, lineHeight: "24px", fontSize: 12 },
            color: "#7063f4",
            children: t("admin")
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 120,
            columnNumber: 13
          },
          this
        ),
        !anonymous && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
          isVerified && roles && roles.length < 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(tooltip_default, { placement: "top", arrow: false, title: t("verified"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            image_default,
            {
              width: 25,
              src: "/image/verifiedUser.png",
              preview: false
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
              lineNumber: 132,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 131,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          roles && roles.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(tooltip_default, { placement: "top", arrow: false, title: t(roles[0].name), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            image_default,
            {
              width: 25,
              src: `${cdnUrl}/${roles[0].badgeImage}`,
              preview: false
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
              lineNumber: 143,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 142,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      diff && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { wrap: true, children: [
        diff ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text6, { children: `${diff.value} ${t(`${diff.unit}s ago`)}` }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          skeleton_default,
          {
            paragraph: { width: 50, rows: 1, style: { margin: 0 } },
            title: false,
            active: true
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 159,
            columnNumber: 15
          },
          this
        ),
        updatedAt && createdAt && updatedAt !== createdAt && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "\xB7" }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text6, { style: { opacity: 0.6 }, children: `${t(
            deletedAt ? "deleted at" : "edited at"
          )} ${(0, import_dayjs.default)(deletedAt ? deletedAt : updatedAt).format(
            "DD/MM/YYYY - HH:mm"
          )}` }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
          lineNumber: 167,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardEntryAuthor.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

export {
  WebboardEntryAuthor,
  WebboardEntryControl,
  WebboardEntryMeta,
  WebboardEntryTags,
  WebboardReaction,
  Poll
};
//# sourceMappingURL=/build/_shared/chunk-D5KO673L.js.map
