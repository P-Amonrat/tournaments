import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ArrowUpDown,
  Trash2
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  TextEditor
} from "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
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
  LoadingOutlined_default,
  button_default,
  col_default,
  divider_default,
  form_default,
  input_default,
  modal_default,
  notification_default,
  result_default,
  row_default,
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

// app/routes/_app.settings.personal-details.tsx
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
function SettingsPersonalDetails() {
  var _a, _b;
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = (0, import_react.useState)(true);
  const [messageApi, contextHolder] = notification_default.useNotification();
  const { scheme } = (0, import_react.useContext)(AppContext);
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const [sortingModal, setSortingModal] = (0, import_react.useState)(false);
  const { user } = (0, import_react.useContext)(AuthContext);
  const [personalDetailsList, setPersonalDetailsList] = (0, import_react.useState)(
    ((_a = personalDetails == null ? void 0 : personalDetails.details) == null ? void 0 : _a.length) > 0 ? personalDetails.details.map((detail, index) => ({
      title: detail.title,
      detail: detail.detail,
      id: index + 1
    })) : [
      {
        id: 1,
        title: "",
        detail: ""
      }
    ]
  );
  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };
  const onChangeSortItems = (items) => {
    setPersonalDetailsList(items);
  };
  const onCloseSortingModal = () => {
    setSortingModal(false);
  };
  const handleSubmitSorting = () => {
    setSortingModal(false);
    form.setFieldsValue({ personalDetails: personalDetailsList });
    const newValues = { personalDetails: personalDetailsList };
    submit(
      {
        data: JSON.stringify(newValues),
        action: "sorting"
      },
      { method: "post" }
    );
  };
  const handleRemove = (index) => {
    setPersonalDetailsList(
      (prevList) => prevList.filter((_, i) => i !== index)
    );
  };
  const handlePersonalDetails = (values) => {
    submit(
      {
        data: JSON.stringify(values),
        uuid: user.uuid,
        action: "update"
      },
      { method: "post" }
    );
  };
  (0, import_react.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0 }, children: t("personal details") }, void 0, false, {
        fileName: "app/routes/_app.settings.personal-details.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this),
      ((_b = personalDetails == null ? void 0 : personalDetails.details) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                fileName: "app/routes/_app.settings.personal-details.tsx",
                lineNumber: 234,
                columnNumber: 13
              },
              this
            ),
            t("sort order")
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_app.settings.personal-details.tsx",
          lineNumber: 224,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.personal-details.tsx",
      lineNumber: 219,
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
                  var _a2;
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
                            fileName: "app/routes/_app.settings.personal-details.tsx",
                            lineNumber: 270,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                              onClick: () => {
                                handleRemove(index);
                                remove(field.name);
                              },
                              style: { cursor: "pointer" },
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { style: { color: "#D61515" }, children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
                                  fileName: "app/routes/_app.settings.personal-details.tsx",
                                  lineNumber: 281,
                                  columnNumber: 25
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
                                    fileName: "app/routes/_app.settings.personal-details.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "app/routes/_app.settings.personal-details.tsx",
                                lineNumber: 280,
                                columnNumber: 23
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.settings.personal-details.tsx",
                              lineNumber: 273,
                              columnNumber: 21
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 263,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      form_default.Item,
                      {
                        name: [field.name, "title"],
                        rules: [
                          () => ({
                            validator(_, value) {
                              if (!value || value === "") {
                                const message = t(
                                  "please input title personal detail"
                                );
                                return Promise.reject(new Error(message));
                              }
                              if (value.length > 30) {
                                const message = t(
                                  "title must contain only 30 charaters"
                                );
                                return Promise.reject(new Error(message));
                              }
                              return Promise.resolve();
                            }
                          })
                        ],
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          input_default,
                          {
                            count: {
                              show: true,
                              max: 30
                            }
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_app.settings.personal-details.tsx",
                            lineNumber: 317,
                            columnNumber: 21
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 295,
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
                          fileName: "app/routes/_app.settings.personal-details.tsx",
                          lineNumber: 327,
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
                              id: `detail${index}`,
                              initialValues: (_a2 = personalDetailsList[index]) == null ? void 0 : _a2.detail,
                              fetcher,
                              onChange: (values) => form.setFieldValue(
                                `personalDetails[${index}].detail`,
                                values
                              )
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.settings.personal-details.tsx",
                              lineNumber: 342,
                              columnNumber: 25
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.settings.personal-details.tsx",
                          lineNumber: 336,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.personal-details.tsx",
                      lineNumber: 326,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      result_default,
                      {
                        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                          fileName: "app/routes/_app.settings.personal-details.tsx",
                          lineNumber: 357,
                          columnNumber: 29
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 356,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, field.key, true, {
                    fileName: "app/routes/_app.settings.personal-details.tsx",
                    lineNumber: 262,
                    columnNumber: 17
                  }, this);
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  TiltButton,
                  {
                    color: `${scheme}-base`,
                    onClick: () => {
                      if (fields.length < 3) {
                        add();
                      } else {
                        messageApi.open({
                          type: "error",
                          message: t("you can only add up to 3 personal details"),
                          duration: 5,
                          placement: "bottomRight"
                        });
                      }
                    },
                    style: { marginTop: 20 },
                    children: [
                      "+ ",
                      t("Add Item")
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/_app.settings.personal-details.tsx",
                    lineNumber: 363,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_app.settings.personal-details.tsx",
              lineNumber: 254,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.settings.personal-details.tsx",
            lineNumber: 252,
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
              fileName: "app/routes/_app.settings.personal-details.tsx",
              lineNumber: 385,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.settings.personal-details.tsx",
        lineNumber: 245,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setSortingModal(false),
        open: sortingModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.personal-details.tsx",
                lineNumber: 403,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.personal-details.tsx",
                lineNumber: 406,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                SortableList,
                {
                  items: personalDetailsList,
                  onChange: onChangeSortItems,
                  renderItem: (item, items) => {
                    var _a2;
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 414,
                        columnNumber: 22
                      }, this) }, void 0, false, {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 413,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "gray", children: ((_a2 = item.rankingGame) == null ? void 0 : _a2.name) ? item.rankingGame.name : item.title }, void 0, false, {
                        fileName: "app/routes/_app.settings.personal-details.tsx",
                        lineNumber: 416,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.personal-details.tsx",
                      lineNumber: 412,
                      columnNumber: 17
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.personal-details.tsx",
                      lineNumber: 411,
                      columnNumber: 15
                    }, this);
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.personal-details.tsx",
                  lineNumber: 407,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: onCloseSortingModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.personal-details.tsx",
                  lineNumber: 427,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.personal-details.tsx",
                  lineNumber: 426,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.personal-details.tsx",
                  lineNumber: 432,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.personal-details.tsx",
                  lineNumber: 431,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.personal-details.tsx",
                lineNumber: 425,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.personal-details.tsx",
            lineNumber: 398,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.personal-details.tsx",
        lineNumber: 393,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.personal-details.tsx",
    lineNumber: 218,
    columnNumber: 5
  }, this);
}
export {
  SettingsPersonalDetails as default
};
//# sourceMappingURL=/build/routes/_app.settings.personal-details-PMD7YMPY.js.map
