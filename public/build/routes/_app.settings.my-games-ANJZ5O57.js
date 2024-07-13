import {
  GameCard
} from "/build/_shared/chunk-OR6TXDR3.js";
import "/build/_shared/chunk-GKESGK3R.js";
import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ArrowUpDown
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  flattenObject,
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  AlertOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  DeleteOutlined_default,
  EditOutlined_default,
  ExclamationCircleFilled_default,
  PlusOutlined_default,
  avatar_default,
  button_default,
  card_default,
  col_default,
  divider_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  modal_default,
  notification_default,
  row_default,
  select_default,
  space_default,
  theme_default,
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
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.settings.my-games.tsx
var import_react7 = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());

// app/components/pages/User/MyGameEntry.tsx
var import_react5 = __toESM(require_react());

// app/components/pages/User/MyGameEntryControl.tsx
var import_react4 = __toESM(require_react());

// app/components/pages/User/UserGameForm.tsx
var import_react2 = __toESM(require_react());

// app/components/pages/User/GameUserSelect.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function GameUserSelect(props) {
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
        fileName: "app/components/pages/User/GameUserSelect.tsx",
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
          cursor: "pointer"
        },
        onClick: () => onGameSelect(game.id),
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
                backgroundImage: game && game.image && game.image !== "-" ? `url("${cdnUrl}/${game.image}")` : `url("/image/placeholder.png")`,
                transform: currentGameId && currentGameId == game.id ? "scale(1.05)" : void 0,
                zIndex: currentGameId && currentGameId == game.id ? 1 : void 0,
                boxShadow: currentGameId && currentGameId == game.id ? "0px 0px 24px 0px rgba(71, 0, 252, 0.50)" : void 0
              }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/GameUserSelect.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: game.name }, void 0, false, {
            fileName: "app/components/pages/User/GameUserSelect.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ]
      },
      game.id,
      true,
      {
        fileName: "app/components/pages/User/GameUserSelect.tsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/pages/User/GameUserSelect.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/GameUserSelect.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/UserGameForm.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var { useToken } = theme_default;
function UserGameForm(props) {
  const { fetcher, form, game, games, action, initialValues, onCancel } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const { user } = (0, import_react2.useContext)(AuthContext);
  let defaultValues = initialValues ? initialValues : void 0;
  let defaultMode = null;
  let ign = "";
  const gameId = game.id;
  const userGame = user && user.userGames && user.userGames.length > 0 ? user.userGames.find((userGame2) => userGame2.gameId === gameId) : null;
  if (userGame) {
    ign = userGame.ign;
  }
  if (game && game.modes) {
    defaultMode = game.modes.find((m) => m.isDefaultMode);
    if (defaultMode) {
      defaultValues = {
        mode: defaultMode.name,
        slots: defaultMode.maxPlayer - 1,
        username: ign
      };
    }
  }
  const [gameModal, setGameModal] = (0, import_react2.useState)(false);
  const [selectedGameId, setSelectedGameId] = (0, import_react2.useState)(
    initialValues && initialValues.rankingGameId ? initialValues.rankingGameId : game.id ? game.id : null
  );
  const [selectedGame, setSelectedGame] = (0, import_react2.useState)(
    initialValues && initialValues.rankingGameId ? games.find((g) => g.id == initialValues.rankingGameId) : game ? game : null
  );
  const modalProps3 = {
    closeIcon: false,
    footer: null,
    modalRender: (modal) => modal
  };
  const openGameModal = () => {
    setGameModal(true);
  };
  const closeGameModal = () => {
    setGameModal(false);
  };
  const handleGameChanged = (gameId2) => {
    const newSelectedGame = games.find((g) => g.id == gameId2);
    form.resetFields();
    setGameModal(false);
    setSelectedGameId(gameId2);
    setSelectedGame(newSelectedGame);
  };
  const handleSubmit = (0, import_react2.useCallback)(
    (values) => {
      if (selectedGameId) {
        const newValues = {
          ...values,
          rankingGameId: selectedGameId,
          id: initialValues ? initialValues.id : null
        };
        fetcher.submit(
          {
            data: JSON.stringify(newValues)
          },
          action === "create" ? {
            method: "post",
            action: `/resources/create-user-in-game`
          } : {
            method: "put",
            action: `/resources/edit-user-in-game`
          }
        );
        form.resetFields();
      }
      onCancel();
    },
    [selectedGameId]
  );
  (0, import_react2.useEffect)(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(flattenObject(initialValues));
      }
    }
  }, [initialValues, form, fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      form_default,
      {
        form,
        initialValues: defaultValues,
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title2, { level: 4, style: { margin: 0 }, children: t(`${action === "create" ? "add game" : "edit game"}`) }, void 0, false, {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 153,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 156,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { gap: 15, vertical: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [15, 15], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { children: selectedGame ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              GameCard,
              {
                avatarStyle: {
                  position: "relative",
                  width: 160,
                  overflow: "hidden",
                  cursor: action === "update" ? "default" : "pointer",
                  borderRadius: 10,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: selectedGame && selectedGame.image && selectedGame.image !== "-" ? `url("${cdnUrl}/${selectedGame.image}")` : `url("/image/placeholder.png")`
                },
                onClick: openGameModal,
                action
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserGameForm.tsx",
                lineNumber: 162,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              card_default,
              {
                style: {
                  backgroundColor: token.colorBgElevated,
                  textAlign: "center"
                },
                bodyStyle: { padding: "30px 10px", cursor: "pointer" },
                onClick: openGameModal,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 5, align: "center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    image_default,
                    {
                      preview: false,
                      src: "/image/game-icon.svg",
                      width: 30,
                      height: 30
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/UserGameForm.tsx",
                      lineNumber: 191,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { children: t("select game") }, void 0, false, {
                    fileName: "app/components/pages/User/UserGameForm.tsx",
                    lineNumber: 197,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/UserGameForm.tsx",
                  lineNumber: 190,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/UserGameForm.tsx",
                lineNumber: 182,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 160,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this),
            selectedGame && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                form_default.Item,
                {
                  name: "ign",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: `${t("in game username")}` }, void 0, false, {
                    fileName: "app/components/pages/User/UserGameForm.tsx",
                    lineNumber: 215,
                    columnNumber: 21
                  }, this),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(input_default, {}, void 0, false, {
                    fileName: "app/components/pages/User/UserGameForm.tsx",
                    lineNumber: 221,
                    columnNumber: 19
                  }, this)
                },
                "ign",
                false,
                {
                  fileName: "app/components/pages/User/UserGameForm.tsx",
                  lineNumber: 205,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                form_default.Item,
                {
                  name: "rank",
                  rules: [
                    {
                      required: true,
                      message: t("please input game rank")
                    }
                  ],
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("rank") }, void 0, false, {
                    fileName: "app/components/pages/User/UserGameForm.tsx",
                    lineNumber: 234,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/User/UserGameForm.tsx",
                    lineNumber: 233,
                    columnNumber: 21
                  }, this),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    select_default,
                    {
                      style: { width: "100%" },
                      placeholder: t("select rank"),
                      options: selectedGame.rank ? selectedGame.rank.map((rank) => ({
                        label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 5, children: [
                          rank.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            avatar_default,
                            {
                              src: `${cdnUrl}/${rank.icon}`,
                              size: 20,
                              shape: "square"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/UserGameForm.tsx",
                              lineNumber: 249,
                              columnNumber: 35
                            },
                            this
                          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
                            fileName: "app/components/pages/User/UserGameForm.tsx",
                            lineNumber: 255,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { style: { color: "inherit" }, children: rank.name }, void 0, false, {
                            fileName: "app/components/pages/User/UserGameForm.tsx",
                            lineNumber: 257,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/User/UserGameForm.tsx",
                          lineNumber: 247,
                          columnNumber: 31
                        }, this),
                        value: rank.name
                      })) : []
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/UserGameForm.tsx",
                      lineNumber: 240,
                      columnNumber: 19
                    },
                    this
                  )
                },
                "rank",
                false,
                {
                  fileName: "app/components/pages/User/UserGameForm.tsx",
                  lineNumber: 223,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 158,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 274,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 273,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: t(`${action === "create" ? "add game" : "edit"}`) }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 279,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/UserGameForm.tsx",
              lineNumber: 278,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 272,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/UserGameForm.tsx",
        lineNumber: 147,
        columnNumber: 7
      },
      this
    ),
    !initialValues ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        ...modalProps3,
        width: 600,
        onCancel: closeGameModal,
        open: gameModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          GameUserSelect,
          {
            currentGameId: selectedGameId ? selectedGameId : null,
            games,
            onGameSelect: handleGameChanged
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/UserGameForm.tsx",
            lineNumber: 292,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/UserGameForm.tsx",
        lineNumber: 286,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
      fileName: "app/components/pages/User/UserGameForm.tsx",
      lineNumber: 299,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/UserGameForm.tsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/MyGameEntryControl.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text3, Title: Title3 } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function MyGameEntryControl(props) {
  const {
    fetcher,
    id,
    isOwner,
    isForumAdmin,
    postType,
    initialValues,
    game,
    games
  } = props;
  const { t } = useTranslation();
  const [reason, setReason] = (0, import_react4.useState)("");
  const [modal, contextHolder] = modal_default.useModal();
  const [reportModal, setReportModal] = (0, import_react4.useState)(false);
  const [gameInfoModal, setGameInfoModal] = (0, import_react4.useState)(false);
  const [form] = form_default.useForm();
  const { Option } = select_default;
  const handleOpenCreateExperienceModal = () => {
    setGameInfoModal(true);
  };
  const handleDeleteGame = (0, import_react4.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this rank?`)}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: initialValues.id },
          {
            method: "post",
            action: `/resources/delete-user-in-game`
          }
        );
      }
    });
  }, [fetcher]);
  const openReportModal = () => {
    setReportModal(true);
  };
  const closeReportModal = () => {
    setReportModal(false);
  };
  const onReasonChanged = (e) => {
    setReason(e.target.value);
  };
  const [selectedReason, setSelectedReason] = (0, import_react4.useState)("");
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
  const reasonSelect = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    select_default,
    {
      style: { width: "100%" },
      onChange: onReasonSelected,
      value: selectedReason ? selectedReason : void 0,
      disabled: fetcher.state !== "idle",
      placeholder: t("select reason"),
      listHeight: 300,
      children: reasonOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Option, { value: option.value, children: option.label }, option.value, false, {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/MyGameEntryControl.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
  const submitReport = (0, import_react4.useCallback)(() => {
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
  const deletePost = (0, import_react4.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this post`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 145,
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
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { size: 10, style: { color: "#f5222d" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AlertOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/User/MyGameEntryControl.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        t("report")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      onClick: openReportModal
    }
  ];
  if (isOwner || isForumAdmin) {
    menus.push({
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/User/MyGameEntryControl.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      onClick: deletePost
    });
  }
  (0, import_react4.useEffect)(() => {
    setReason("");
  }, [id]);
  (0, import_react4.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success === `report-${postType ? postType : "webboard"}` && fetcher.state === "idle") {
      setReason("");
      setReportModal(false);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { size: 15, children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        Text3,
        {
          style: { fontSize: 18, cursor: "pointer" },
          onClick: handleOpenCreateExperienceModal,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/User/MyGameEntryControl.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyGameEntryControl.tsx",
          lineNumber: 209,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        Text3,
        {
          style: { fontSize: 18, cursor: "pointer", color: "#f5222d" },
          onClick: handleDeleteGame,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/User/MyGameEntryControl.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyGameEntryControl.tsx",
          lineNumber: 215,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyGameEntryControl.tsx",
      lineNumber: 208,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/MyGameEntryControl.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setGameInfoModal(false),
        open: gameInfoModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          UserGameForm,
          {
            fetcher,
            form,
            game,
            games,
            action: "update",
            onCancel: () => setGameInfoModal(false),
            initialValues
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyGameEntryControl.tsx",
            lineNumber: 229,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/MyGameEntryControl.tsx",
        lineNumber: 224,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyGameEntryControl.tsx",
    lineNumber: 202,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/MyGameEntry.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text4, Title: Title4 } = typography_default;
function MyGameEntry(props) {
  const { t } = useTranslation();
  const { data, fetcher, game, games } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react5.useContext)(AppContext);
  const { user } = (0, import_react5.useContext)(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [screenSize, setScreenSize] = (0, import_react5.useState)("");
  const targetRank = data.rank;
  const foundRank = data.rankingGame.rank.find(
    (rank) => rank.name === targetRank
  );
  const photosStyle = {
    position: "relative",
    height: 200,
    width: "131.64px",
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center"
    // cursor: "pointer",
  };
  (0, import_react5.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const cardStyle = {
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #E5E4E4",
    overflow: "auto"
  };
  const triangleClipPath = "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)";
  const triangleClipPathTop = "polygon(0 0, 50% 25%, 100% 0, 100% 100%, 0 100%)";
  const gameCard = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      style: {
        filter: "url('#goo')",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        card_default,
        {
          bordered: false,
          style: {
            ...photosStyle,
            clipPath: triangleClipPath,
            backgroundImage: `url("${cdnUrl}/${data.rankingGame.image}")`,
            textAlign: "center",
            justifyContent: "center",
            filter: "url('#goo')"
          },
          bodyStyle: { padding: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { position: "absolute", width: "100%", bottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "triangle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "div",
              {
                className: "triangle-box",
                style: {
                  backgroundColor: (foundRank == null ? void 0 : foundRank.backgroundColor) ? foundRank == null ? void 0 : foundRank.backgroundColor : "rgba(222,151,35)"
                }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameEntry.tsx",
                lineNumber: 107,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/User/MyGameEntry.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/MyGameEntry.tsx",
              lineNumber: 105,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 95,
                  // bottom: "50px",
                  width: "100%",
                  left: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 1
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  image_default,
                  {
                    style: {
                      marginBottom: 5,
                      zIndex: 2,
                      filter: "drop-shadow(0px 4px 8px rgba(255, 255, 255, 0.6))"
                    },
                    width: 50,
                    preview: false,
                    src: `${cdnUrl}/${foundRank == null ? void 0 : foundRank.icon}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/MyGameEntry.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameEntry.tsx",
                lineNumber: 117,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "svg",
              {
                style: { position: "absolute", visibility: "hidden" },
                width: "0",
                height: "0",
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("filter", { id: "goo", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "feGaussianBlur",
                    {
                      in: "SourceGraphic",
                      stdDeviation: "4",
                      result: "blur"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/MyGameEntry.tsx",
                      lineNumber: 150,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "feColorMatrix",
                    {
                      in: "blur",
                      mode: "matrix",
                      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                      result: "goo"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/MyGameEntry.tsx",
                      lineNumber: 155,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" }, void 0, false, {
                    fileName: "app/components/pages/User/MyGameEntry.tsx",
                    lineNumber: 161,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/MyGameEntry.tsx",
                  lineNumber: 149,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/MyGameEntry.tsx",
                  lineNumber: 148,
                  columnNumber: 11
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameEntry.tsx",
                lineNumber: 141,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/User/MyGameEntry.tsx",
          lineNumber: 93,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/MyGameEntry.tsx",
      lineNumber: 87,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(card_default, { style: cardStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: screenSize === "greaterThanSM" ? 6 : 24, children: screenSize === "greaterThanSM" ? gameCard : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      flex_default,
      {
        justify: "center",
        align: "center",
        children: gameCard
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/MyGameEntry.tsx",
        lineNumber: 177,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/pages/User/MyGameEntry.tsx",
      lineNumber: 173,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: screenSize === "greaterThanSM" ? 18 : 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        style: {
          marginLeft: "15px",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              space_default,
              {
                direction: "vertical",
                size: 1,
                style: { margin: 0, padding: 0 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title4, { level: 5, children: t("username in game") }, void 0, false, {
                  fileName: "app/components/pages/User/MyGameEntry.tsx",
                  lineNumber: 198,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameEntry.tsx",
                lineNumber: 193,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              MyGameEntryControl,
              {
                fetcher,
                id: data.id,
                isOwner,
                isForumAdmin,
                initialValues: data,
                game,
                games,
                postType: "experience"
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/User/MyGameEntry.tsx",
                lineNumber: 200,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/User/MyGameEntry.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            input_default,
            {
              disabled: true,
              value: data.ign,
              style: { marginBottom: "15px" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/MyGameEntry.tsx",
              lineNumber: 211,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title4, { level: 5, children: t("rank in game") }, void 0, false, {
            fileName: "app/components/pages/User/MyGameEntry.tsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, { disabled: true, value: t(`${data.rank}`) }, void 0, false, {
            fileName: "app/components/pages/User/MyGameEntry.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/MyGameEntry.tsx",
        lineNumber: 186,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/pages/User/MyGameEntry.tsx",
      lineNumber: 185,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyGameEntry.tsx",
    lineNumber: 172,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/MyGameEntry.tsx",
    lineNumber: 171,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/MyGameEntry.tsx",
    lineNumber: 170,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings.my-games.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Title: Title5, Text: Text5 } = typography_default;
var modalProps2 = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function SettingsMyGames() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const { gamesInfo, games, defaultGame } = useLoaderData();
  const [gameInfoModal, setGameInfoModal] = (0, import_react7.useState)(false);
  const [gameInfoLists, setGameInfoLists] = (0, import_react7.useState)(gamesInfo);
  const [sortingModal, setSortingModal] = (0, import_react7.useState)(false);
  const [screenSize, setScreenSize] = (0, import_react7.useState)("");
  const [form] = form_default.useForm();
  const { user } = (0, import_react7.useContext)(AuthContext);
  const submit = useSubmit();
  const handleSubmitToProfileIndex = () => {
    submit(
      {
        uuid: user.uuid,
        action: "save-to-profile-index"
      },
      { method: "post" }
    );
  };
  const openExperienceModal = () => {
    setGameInfoModal(true);
  };
  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };
  const onChangeSortItems = (items) => {
    setGameInfoLists(items);
  };
  const onCloseSortingModal = () => {
    setSortingModal(false);
  };
  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      userRankingGameIds: gameInfoLists.map(
        (item, index) => item.id
      )
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-my-games`
      }
    );
  };
  (0, import_react7.useEffect)(() => {
    setGameInfoLists(gamesInfo && gamesInfo.length ? gamesInfo : []);
  }, [gamesInfo]);
  (0, import_react7.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.gamesInfo) {
      setGameInfoLists(fetcher.data.gamesInfo);
    }
  }, [fetcher.data]);
  (0, import_react7.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        space_default,
        {
          size: 10,
          direction: "horizontal",
          style: {
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title5, { level: 2, children: t("my games") }, void 0, false, {
              fileName: "app/routes/_app.settings.my-games.tsx",
              lineNumber: 287,
              columnNumber: 11
            }, this),
            screenSize === "greaterThanSM" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { justify: "end", style: { margin: 10 }, children: [
              gameInfoLists.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                button_default,
                {
                  type: "text",
                  style: {
                    marginTop: 2,
                    marginRight: 10,
                    fontWeight: 600,
                    textAlign: "center"
                  },
                  onClick: handleToggleSortingMode,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      ArrowUpDown,
                      {
                        style: {
                          color: "#7C6FF6",
                          fontSize: "1.2em",
                          marginRight: "5px"
                        }
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.settings.my-games.tsx",
                        lineNumber: 301,
                        columnNumber: 19
                      },
                      this
                    ),
                    t("sort order")
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 291,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: () => openExperienceModal(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, { style: { color: "black" } }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 314,
                  columnNumber: 19
                }, this),
                t("add game")
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-games.tsx",
                lineNumber: 313,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/routes/_app.settings.my-games.tsx",
                lineNumber: 312,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_app.settings.my-games.tsx",
              lineNumber: 289,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_app.settings.my-games.tsx",
          lineNumber: 278,
          columnNumber: 9
        },
        this
      ),
      screenSize === "atSM" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { justify: "end", style: { margin: 10, marginTop: 0 }, children: [
        gameInfoLists.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          button_default,
          {
            type: "text",
            style: {
              marginTop: 2,
              marginRight: 10,
              fontWeight: 600,
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                ArrowUpDown,
                {
                  style: {
                    color: "#7C6FF6",
                    fontSize: "1.2em",
                    marginRight: "5px"
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 333,
                  columnNumber: 17
                },
                this
              ),
              t("sort order")
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-games.tsx",
            lineNumber: 324,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: () => openExperienceModal(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, { style: { color: "black" } }, void 0, false, {
            fileName: "app/routes/_app.settings.my-games.tsx",
            lineNumber: 346,
            columnNumber: 17
          }, this),
          t("add game")
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings.my-games.tsx",
          lineNumber: 345,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.settings.my-games.tsx",
          lineNumber: 344,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.my-games.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, this),
      gameInfoLists.map((experience, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        MyGameEntry,
        {
          data: experience,
          fetcher,
          game: defaultGame,
          games
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.my-games.tsx",
          lineNumber: 355,
          columnNumber: 13
        },
        this
      ) }, index, false, {
        fileName: "app/routes/_app.settings.my-games.tsx",
        lineNumber: 354,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        TiltButton,
        {
          color: "primary",
          onClick: handleSubmitToProfileIndex,
          style: { marginTop: 20 },
          children: t("save")
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.my-games.tsx",
          lineNumber: 363,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.my-games.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setGameInfoModal(false),
        open: gameInfoModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          UserGameForm,
          {
            fetcher,
            form,
            game: defaultGame,
            games,
            action: "create",
            onCancel: () => setGameInfoModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-games.tsx",
            lineNumber: 390,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-games.tsx",
        lineNumber: 385,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setSortingModal(false),
        open: sortingModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.my-games.tsx",
                lineNumber: 409,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-games.tsx",
                lineNumber: 412,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: gameInfoLists,
                  onChange: onChangeSortItems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.my-games.tsx",
                      lineNumber: 420,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-games.tsx",
                      lineNumber: 419,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: item.rankingGame.name }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-games.tsx",
                      lineNumber: 422,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.my-games.tsx",
                    lineNumber: 418,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings.my-games.tsx",
                    lineNumber: 417,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 413,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onCloseSortingModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 429,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 428,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 434,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-games.tsx",
                  lineNumber: 433,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-games.tsx",
                lineNumber: 427,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-games.tsx",
            lineNumber: 404,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-games.tsx",
        lineNumber: 399,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.my-games.tsx",
    lineNumber: 276,
    columnNumber: 5
  }, this);
}
export {
  SettingsMyGames as default
};
//# sourceMappingURL=/build/routes/_app.settings.my-games-ANJZ5O57.js.map
