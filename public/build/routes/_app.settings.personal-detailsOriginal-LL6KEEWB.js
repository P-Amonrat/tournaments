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

// app/routes/_app.settings.personal-detailsOriginal.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function SettingsPersonalDetails() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { personalDetails } = useLoaderData();
  const [textEditorLoading, setTextEditorLoading] = (0, import_react.useState)(true);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const action = "update";
  const initialValues = personalDetails ? { personalDetails: personalDetails.details } : {
    personalDetails: [
      {
        id: 1,
        title: "12312",
        description: "",
        createdAt: "2024-04-25T15:51:54.467Z"
      }
    ]
  };
  const handlePersonalDetails = (values) => {
    submit(
      {
        data: JSON.stringify(values),
        action
      },
      { method: "post" }
    );
  };
  (0, import_react.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0 }, children: t("personal details") }, void 0, false, {
      fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default,
      {
        layout: "vertical",
        form,
        name: "dynamic_form_complex",
        style: {
          maxWidth: 600
        },
        autoComplete: "off",
        initialValues,
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
                  return (
                    // <Card
                    //   size="small"
                    //   title={`Item ${field.name + 1}`}
                    //   key={field.key}
                    //   bordered={false}
                    //   extra={
                    // <CloseOutlined
                    //   onClick={() => {
                    //     remove(field.name);
                    //   }}
                    // />
                    //   }
                    // >
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        form_default.Item,
                        {
                          label: "id",
                          name: ["id"],
                          style: { display: "none" }
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                          lineNumber: 175,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        space_default,
                        {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 10
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              Text,
                              {
                                style: { fontWeight: 600, fontSize: "inherit" },
                                className: "required",
                                children: t("title personal details")
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "div",
                              {
                                onClick: () => {
                                  remove(field.name);
                                },
                                style: { cursor: "pointer" },
                                children: index === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { style: { color: "#D61515" }, children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                                    fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                    lineNumber: 202,
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
                                      fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                      lineNumber: 203,
                                      columnNumber: 27
                                    },
                                    this
                                  )
                                ] }, void 0, true, {
                                  fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                  lineNumber: 201,
                                  columnNumber: 25
                                }, this)
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                              },
                              this
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                          lineNumber: 181,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        form_default.Item,
                        {
                          name: [field.name, "title"],
                          rules: [
                            {
                              required: true,
                              message: t("please input title")
                            }
                          ],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
                            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                          }, this)
                        },
                        "title",
                        false,
                        {
                          fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                          lineNumber: 216,
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
                            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                            lineNumber: 230,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          space_default,
                          {
                            size: 10,
                            direction: "vertical",
                            style: { display: "flex", marginTop: 10 },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              form_default.Item,
                              {
                                name: [field.name, "detail"],
                                rules: [
                                  {
                                    required: true,
                                    message: t("please input detail")
                                  }
                                ],
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                  TextEditor,
                                  {
                                    id: "detail",
                                    initialValues: (_a = initialValues == null ? void 0 : initialValues.personalDetails[index]) == null ? void 0 : _a.detail,
                                    fetcher,
                                    onChange: (values) => form.setFieldValue("detail", values)
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                    lineNumber: 254,
                                    columnNumber: 27
                                  },
                                  this
                                )
                              },
                              "detail",
                              false,
                              {
                                fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                                lineNumber: 244,
                                columnNumber: 25
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                            lineNumber: 239,
                            columnNumber: 23
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                        lineNumber: 229,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        result_default,
                        {
                          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                            lineNumber: 269,
                            columnNumber: 29
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                          lineNumber: 268,
                          columnNumber: 21
                        },
                        this
                      )
                    ] }, field.key, true, {
                      fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                      lineNumber: 174,
                      columnNumber: 17
                    }, this)
                  );
                }),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  TiltButton,
                  {
                    color: `${scheme}-base`,
                    onClick: () => add(),
                    style: { marginTop: 20 },
                    children: [
                      "+ ",
                      t("Add Item")
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
                    lineNumber: 275,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
              lineNumber: 153,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.Item, { noStyle: true, shouldUpdate: true, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(typography_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: JSON.stringify(form.getFieldsValue(), null, 2) }, void 0, false, {
            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
            lineNumber: 289,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
            lineNumber: 286,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
        lineNumber: 140,
        columnNumber: 7
      },
      this
    ),
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
        fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
        lineNumber: 294,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.personal-detailsOriginal.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
export {
  SettingsPersonalDetails as default
};
//# sourceMappingURL=/build/routes/_app.settings.personal-detailsOriginal-LL6KEEWB.js.map
