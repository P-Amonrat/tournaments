import {
  TiltCheck
} from "/build/_shared/chunk-64CVQ3LE.js";
import {
  BackButton
} from "/build/_shared/chunk-5IANIR6E.js";
import {
  InlineAvatar
} from "/build/_shared/chunk-A5OSP4DA.js";
import {
  KycWizard
} from "/build/_shared/chunk-PJTOFOWN.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
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
  DeleteOutlined_default,
  EditOutlined_default,
  LoadingOutlined_default,
  PlusOutlined_default,
  QuestionCircleOutlined_default,
  button_default,
  card_default,
  col_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  modal_default,
  notification_default,
  result_default,
  row_default,
  select_default,
  space_default,
  switch_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Webboard/WebboardForm.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function WebboardForm(props) {
  const {
    editmode,
    fetcher,
    form,
    games,
    loading,
    rooms,
    tags,
    allTags,
    tournament,
    navigationState
  } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = (0, import_react.useContext)(AuthContext);
  const { scheme } = (0, import_react.useContext)(AppContext);
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const [hasPoll, setHasPoll] = (0, import_react.useState)(
    form.getFieldValue("hasPoll") ? form.getFieldValue("hasPoll") : false
  );
  const [textEditorLoading, setTextEditorLoading] = (0, import_react.useState)(true);
  const [kycWizardModal, setKycWizardModal] = (0, import_react.useState)(false);
  const allTagOptions = allTags ? allTags.map((tag) => ({ label: tag.name, value: tag.name })) : [];
  const tagOptions = tags ? tags.map((tag) => ({ label: tag.name, value: tag.name })) : [];
  const cardStyle = {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  const [searchedOptions, setSearchedOptions] = (0, import_react.useState)(tagOptions);
  const handleSearch = (inputValue) => {
    if (inputValue) {
      setSearchedOptions(allTagOptions);
    } else {
      setSearchedOptions(tagOptions);
    }
  };
  const roomWihtoutTournament = rooms.filter(
    (item) => item.nameEn !== "tournament"
  );
  const roomWithOutBuySell = roomWihtoutTournament.filter(
    (item) => item.nameEn !== "buy sell"
  );
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const openKycWizardModal = () => {
    setKycWizardModal(true);
  };
  const closeKycWizardModal = () => {
    setKycWizardModal(false);
  };
  const handlePollChanged = (checked, e) => {
    setHasPoll(checked);
  };
  const handleMultipleSelect = (0, import_react.useCallback)(
    (field, values) => {
      form.setFieldValue(field, values);
    },
    [form]
  );
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "thumbnailImage") {
        form.setFieldValue("thumbnailImage", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);
  (0, import_react.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, style: cardStyle, bodyStyle: { padding: 30 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BackButton, {}, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardForm.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [60, 40], children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        InlineAvatar,
        {
          avatarUrl: user && user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png",
          title: user && user.displayName ? user.displayName : ""
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 161,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Webboard/WebboardForm.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "title",
            rules: [
              {
                required: true,
                message: t("please input title")
              }
            ],
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("title") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 181,
              columnNumber: 15
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { maxLength: 200 }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 186,
              columnNumber: 13
            }, this)
          },
          "title",
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 171,
            columnNumber: 11
          },
          this
        ),
        !tournament && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "roomIds",
            rules: [
              {
                required: true,
                message: t("please input room")
              }
            ],
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("rooms") }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 200,
                columnNumber: 19
              }, this),
              !user.isDopaVerified && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                tooltip_default,
                {
                  placement: "top",
                  arrow: false,
                  title: t(
                    'KYC to access "buy sell" and "tournament" rooms'
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    QuestionCircleOutlined_default,
                    {
                      onClick: openKycWizardModal,
                      style: { cursor: "pointer", color: "#7a6fee" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                      lineNumber: 211,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 204,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TiltCheck,
              {
                fieldName: "roomIds",
                labelKey: "name",
                labelValue: "id",
                multiple: true,
                options: user.isDopaVerified ? roomWihtoutTournament : roomWithOutBuySell,
                onSelect: handleMultipleSelect,
                initialValues: form.getFieldValue("roomIds")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 220,
                columnNumber: 15
              },
              this
            )
          },
          "roomIds",
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 189,
            columnNumber: 13
          },
          this
        ),
        !tournament && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "gameIds",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("games") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TiltCheck,
              {
                fieldName: "gameIds",
                labelKey: "name",
                labelValue: "id",
                multiple: true,
                options: games,
                onSelect: handleMultipleSelect,
                initialValues: form.getFieldValue("gameIds")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 246,
                columnNumber: 15
              },
              this
            )
          },
          "gameIds",
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 237,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "tags",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("tags") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 261,
              columnNumber: 15
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              select_default,
              {
                mode: "tags",
                style: { width: "100%" },
                placeholder: t("input tags"),
                options: searchedOptions,
                onSearch: handleSearch,
                onChange: (tags2) => {
                  const processedTags = tags2.map(
                    (tag) => tag.replace(/^#+/, "")
                  );
                  form.setFieldsValue({ tags: processedTags });
                }
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 266,
                columnNumber: 13
              },
              this
            )
          },
          "tags",
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 257,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 5,
            style: { display: "flex", marginBottom: 20, marginTop: 20 },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { marginBottom: 10, alignItems: "baseline" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600 }, children: [
                  t("please upload post thumbnail"),
                  " (",
                  t("recommended ratio"),
                  " ",
                  "4:5)"
                ] }, void 0, true, {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 287,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 286,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  form_default.Item,
                  {
                    name: "thumbnailImage",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      FileUploader,
                      {
                        fetcher,
                        fieldName: "thumbnailImage",
                        onUploading: setUploading,
                        onErrorFileTooLarge: handleFileTooLarge,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                            lineNumber: 312,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("upload") }, void 0, false, {
                            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                            lineNumber: 313,
                            columnNumber: 23
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                          lineNumber: 311,
                          columnNumber: 21
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                        lineNumber: 305,
                        columnNumber: 19
                      },
                      this
                    )
                  },
                  "thumbnailImage",
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 293,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 292,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 285,
                columnNumber: 13
              }, this),
              uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                result_default,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 321,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 320,
                  columnNumber: 15
                },
                this
              ) : form && form.getFieldValue("thumbnailImage") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                image_default,
                {
                  preview: false,
                  style: { maxWidth: 400 },
                  src: `${cdnUrl}/${form.getFieldValue("thumbnailImage")}`
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 324,
                  columnNumber: 15
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 330,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 280,
            columnNumber: 11
          },
          this
        ),
        !textEditorLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "content",
            rules: [
              {
                required: true,
                message: t("please input content")
              }
            ],
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("content") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 344,
              columnNumber: 17
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TextEditor,
              {
                id: "post-content",
                initialValues: form.getFieldValue("content"),
                fetcher,
                onChange: (values) => form.setFieldValue("content", values)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 349,
                columnNumber: 15
              },
              this
            )
          },
          "content",
          false,
          {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 334,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 359,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 359,
          columnNumber: 13
        }, this),
        !editmode && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: "hasPoll",
              valuePropName: "checked",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("create poll") }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 369,
                columnNumber: 21
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, { onChange: handlePollChanged }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 374,
                columnNumber: 19
              }, this)
            },
            "hasPoll",
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 364,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 363,
            columnNumber: 15
          }, this),
          hasPoll && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, style: { margin: 0 }, children: t("poll options") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 379,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.List,
              {
                name: "pollOptions",
                initialValue: ["", ""],
                rules: [
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(
                          new Error(t("at least 2 options"))
                        );
                      }
                      if (names.length > 10) {
                        return Promise.reject(
                          new Error(t("maximum 10 options"))
                        );
                      }
                    }
                  }
                ],
                children: (fields, { add, remove }, { errors }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 10, vertical: true, children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.Item, { noStyle: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    row_default,
                    {
                      gutter: [10, 10],
                      wrap: false,
                      style: { alignItems: "center" },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          form_default.Item,
                          {
                            ...field,
                            noStyle: true,
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: t(
                                  "Please input option or delete this field."
                                )
                              }
                            ],
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              input_default,
                              {
                                placeholder: "option",
                                style: { width: "100%" }
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                                lineNumber: 426,
                                columnNumber: 37
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                            lineNumber: 413,
                            columnNumber: 35
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                          lineNumber: 412,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          button_default,
                          {
                            danger: true,
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                              lineNumber: 435,
                              columnNumber: 43
                            }, this),
                            onClick: () => remove(field.name)
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                            lineNumber: 433,
                            columnNumber: 35
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                          lineNumber: 432,
                          columnNumber: 33
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                      lineNumber: 407,
                      columnNumber: 31
                    },
                    this
                  ) }, field.key, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 406,
                    columnNumber: 29
                  }, this)) }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 404,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.ErrorList, { errors }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 443,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: () => add(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusOutlined_default, { style: { fontSize: "1.2em" } }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 446,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 445,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 444,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                  lineNumber: 403,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 382,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 378,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, this),
        contextHolder,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { justify: "space-between", style: { marginTop: 40 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltButton,
            {
              disabled: loading || navigationState !== "idle",
              color: "primary",
              onClick: !loading ? () => form.submit() : void 0,
              children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 464,
                columnNumber: 17
              }, this) : editmode ? t("edit post") : t("create post")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 458,
              columnNumber: 13
            },
            this
          ),
          !editmode && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("anonymous") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardForm.tsx",
              lineNumber: 473,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "anonymous",
                valuePropName: "checked",
                noStyle: true,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  switch_default,
                  {
                    disabled: user.isDopaVerified ? false : true
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 480,
                    columnNumber: 19
                  },
                  this
                )
              },
              "anonymous",
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 474,
                columnNumber: 17
              },
              this
            ),
            !user.isDopaVerified && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              tooltip_default,
              {
                placement: "top",
                arrow: false,
                title: t('KYC to access "anonymouse" and "buy sell" rooms'),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  QuestionCircleOutlined_default,
                  {
                    onClick: openKycWizardModal,
                    style: { cursor: "pointer", color: "#7a6fee" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                    lineNumber: 491,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardForm.tsx",
                lineNumber: 486,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardForm.tsx",
            lineNumber: 472,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 457,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Webboard/WebboardForm.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardForm.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    !user.isDopaVerified && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        open: kycWizardModal,
        closable: false,
        footer: false,
        onCancel: closeKycWizardModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KycWizard, {}, void 0, false, {
          fileName: "app/components/pages/Webboard/WebboardForm.tsx",
          lineNumber: 509,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Webboard/WebboardForm.tsx",
        lineNumber: 503,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardForm.tsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}

export {
  WebboardForm
};
//# sourceMappingURL=/build/_shared/chunk-PWW2RPXV.js.map
