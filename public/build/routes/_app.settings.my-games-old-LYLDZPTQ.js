import {
  GameSelect
} from "/build/_shared/chunk-6656VHVN.js";
import {
  TextEditor
} from "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  DeleteOutlined_default,
  LoadingOutlined_default,
  form_default,
  input_default,
  modal_default,
  result_default,
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
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.settings.my-games-old.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function SettingsMyGames() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails, games } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = (0, import_react.useState)(true);
  const [gameModal, setGameModal] = (0, import_react.useState)(false);
  const [newGameCallback, setNewGameCallback] = (0, import_react.useState)(null);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const [personalDetailsList, setPersonalDetailsList] = (0, import_react.useState)(
    personalDetails.details.length > 0 ? personalDetails.details.map((detail) => ({
      title: detail.title,
      detail: detail.detail
    })) : [
      {
        id: 1,
        title: "",
        detail: ""
      }
    ]
  );
  const handleRemove = (index) => {
    setPersonalDetailsList(
      (prevList) => prevList.filter((_, i) => i !== index)
    );
  };
  const openGameModal = (callback) => {
    setNewGameCallback(callback);
    setGameModal(true);
  };
  const closeGameModal = () => {
    setGameModal(false);
    setNewGameCallback(null);
  };
  const handleGameChanged = (gameId) => {
    if (newGameCallback) {
      newGameCallback({
        title: gameId,
        detail: ""
      });
    }
    closeGameModal();
  };
  const handlePersonalDetails = (values) => {
    submit(
      {
        data: JSON.stringify(values),
        action: "update"
      },
      { method: "post" }
    );
  };
  (0, import_react.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0 }, children: t("my games") }, void 0, false, {
      fileName: "app/routes/_app.settings.my-games-old.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.settings.my-games-old.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default,
      {
        layout: "vertical",
        form,
        name: "dynamic_form_complex",
        initialValues: { personalDetails: personalDetailsList },
        onFinish: handlePersonalDetails,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.List, { name: "personalDetails", children: (fields, { add, remove }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              style: {
                display: "flex",
                rowGap: 16,
                flexDirection: "column"
              },
              children: [
                fields.map((field, index) => {
                  var _a;
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      space_default,
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 10
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600 }, className: "required", children: t("title personal details") }, void 0, false, {
                            fileName: "app/routes/_app.settings.my-games-old.tsx",
                            lineNumber: 208,
                            columnNumber: 21
                          }, this),
                          index > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                              onClick: () => {
                                handleRemove(index);
                                remove(field.name);
                              },
                              style: { cursor: "pointer" },
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { style: { color: "#D61515" }, children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                                  fileName: "app/routes/_app.settings.my-games-old.tsx",
                                  lineNumber: 220,
                                  columnNumber: 27
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                  Text,
                                  {
                                    style: {
                                      fontWeight: 600,
                                      fontSize: "inherit",
                                      color: "#D61515"
                                    },
                                    children: t("delete detail box")
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/routes/_app.settings.my-games-old.tsx",
                                    lineNumber: 221,
                                    columnNumber: 27
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "app/routes/_app.settings.my-games-old.tsx",
                                lineNumber: 219,
                                columnNumber: 25
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.settings.my-games-old.tsx",
                              lineNumber: 212,
                              columnNumber: 23
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/_app.settings.my-games-old.tsx",
                        lineNumber: 201,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      form_default.Item,
                      {
                        name: [field.name, "title"],
                        rules: [
                          { required: true, message: t("please input title") }
                        ],
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
                          fileName: "app/routes/_app.settings.my-games-old.tsx",
                          lineNumber: 241,
                          columnNumber: 21
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.settings.my-games-old.tsx",
                        lineNumber: 235,
                        columnNumber: 19
                      },
                      this
                    ),
                    !textEditorLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        Text,
                        {
                          style: {
                            fontWeight: 600,
                            fontSize: "inherit"
                          },
                          className: "required",
                          children: t("detail personal details")
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.settings.my-games-old.tsx",
                          lineNumber: 246,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        form_default.Item,
                        {
                          name: [field.name, "detail"],
                          rules: [
                            { required: true, message: t("please input detail") }
                          ],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            TextEditor,
                            {
                              id: "detail",
                              initialValues: (_a = personalDetailsList[index]) == null ? void 0 : _a.detail,
                              fetcher,
                              onChange: (values) => form.setFieldValue(
                                `personalDetails[${index}].detail`,
                                values
                              )
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.settings.my-games-old.tsx",
                              lineNumber: 261,
                              columnNumber: 25
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.settings.my-games-old.tsx",
                          lineNumber: 255,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.my-games-old.tsx",
                      lineNumber: 245,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      result_default,
                      {
                        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                          fileName: "app/routes/_app.settings.my-games-old.tsx",
                          lineNumber: 276,
                          columnNumber: 29
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.settings.my-games-old.tsx",
                        lineNumber: 275,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, field.key, true, {
                    fileName: "app/routes/_app.settings.my-games-old.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                  }, this);
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  TiltButton,
                  {
                    color: `${scheme}-base`,
                    onClick: () => openGameModal((newDetail) => add(newDetail)),
                    style: { marginTop: 20 },
                    children: [
                      "+ ",
                      t("Add Item")
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/_app.settings.my-games-old.tsx",
                    lineNumber: 282,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_app.settings.my-games-old.tsx",
              lineNumber: 192,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.settings.my-games-old.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltButton,
            {
              color: "primary",
              onClick: form.submit,
              style: { marginTop: 20 },
              children: t("save")
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings.my-games-old.tsx",
              lineNumber: 295,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.settings.my-games-old.tsx",
        lineNumber: 183,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        width: 600,
        onCancel: closeGameModal,
        open: gameModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GameSelect, { games, onGameSelect: handleGameChanged }, void 0, false, {
          fileName: "app/routes/_app.settings.my-games-old.tsx",
          lineNumber: 310,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-games-old.tsx",
        lineNumber: 304,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.my-games-old.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}
export {
  SettingsMyGames as default
};
//# sourceMappingURL=/build/routes/_app.settings.my-games-old-LYLDZPTQ.js.map
