import {
  TbPhotoPlus
} from "/build/_shared/chunk-ECVYUX7O.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  EditOutlined_default,
  LoadingOutlined_default,
  card_default,
  col_default,
  divider_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  notification_default,
  row_default,
  space_default,
  switch_default,
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

// app/components/pages/User/AlbumForm.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function AlbumForm(props) {
  const { fetcher, form, initialValues, onCancel, action } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const [defaultValues, setDefaultValues] = (0, import_react.useState)(initialValues);
  const [previewCover, setPreviewCover] = (0, import_react.useState)(
    initialValues == null ? void 0 : initialValues.cover
  );
  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#EEEEEE"
  };
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const handleSubmit = (0, import_react.useCallback)(
    (values) => {
      const { isPrivate, ...rest } = values;
      fetcher.submit(
        {
          data: JSON.stringify({
            ...rest,
            isPrivate: isPrivate ? isPrivate : false,
            id: defaultValues ? defaultValues.id : void 0
          })
        },
        action === "create" ? {
          method: "post",
          action: `/resources/create-album`
        } : {
          method: "put",
          action: `/resources/edit-album`
        }
      );
      form.setFieldsValue(initialValues);
      form.setFieldValue("cover", null);
      setPreviewCover(null);
      form.resetFields();
      onCancel();
    },
    [fetcher, form, onCancel]
  );
  (0, import_react.useEffect)(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(initialValues);
        setPreviewCover(initialValues == null ? void 0 : initialValues.cover);
      }
    }
  }, [initialValues, form, fetcher.data]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "cover") {
        form.setFieldValue("cover", fetcher.data.key);
        setPreviewCover(fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default,
      {
        form,
        initialValues,
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: action === "create" ? t("create album") : t("edit album") }, void 0, false, {
            fileName: "app/components/pages/User/AlbumForm.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/AlbumForm.tsx",
            lineNumber: 126,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 15, vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "cover",
                style: { margin: "0px", padding: "0px" },
                rules: [
                  {
                    required: true,
                    message: `${t("upload cover image")} ${t(
                      "recommended resolution"
                    )} 1920x1080 px`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600 }, children: [
                      t("upload cover image"),
                      " (",
                      t("recommended resolution"),
                      " ",
                      "1920x1080 px)"
                    ] }, void 0, true, {
                      fileName: "app/components/pages/User/AlbumForm.tsx",
                      lineNumber: 189,
                      columnNumber: 19
                    }, this),
                    fetcher && fetcher.state && fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      card_default,
                      {
                        bordered: false,
                        style: {
                          ...photosStyle,
                          textAlign: "center",
                          justifyContent: "center",
                          margin: "15px 0"
                        },
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          LoadingOutlined_default,
                          {
                            style: {
                              fontSize: 24,
                              margin: "40px auto"
                            },
                            spin: true
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/User/AlbumForm.tsx",
                            lineNumber: 203,
                            columnNumber: 23
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/User/AlbumForm.tsx",
                        lineNumber: 194,
                        columnNumber: 21
                      },
                      this
                    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      !form.getFieldValue("cover") && !initialValues && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        FileUploader,
                        {
                          fetcher,
                          fieldName: "cover",
                          onUploading: setUploading,
                          onErrorFileTooLarge: handleFileTooLarge,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            card_default,
                            {
                              bordered: false,
                              style: {
                                ...photosStyle,
                                backgroundImage: `url("${cdnUrl}/${initialValues ? previewCover : form.getFieldValue("cover")}")`,
                                textAlign: "center",
                                justifyContent: "center",
                                margin: "15px 0",
                                cursor: "pointer"
                              },
                              children: !form.getFieldValue("cover") && !previewCover && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "div",
                                {
                                  style: {
                                    textAlign: "center",
                                    margin: 0,
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    msTransform: "translate(-50%,-50%)",
                                    transform: "translate(-50%, -50%)"
                                  },
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { color: "black" }, children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TbPhotoPlus, {}, void 0, false, {
                                      fileName: "app/components/pages/User/AlbumForm.tsx",
                                      lineNumber: 249,
                                      columnNumber: 35
                                    }, this),
                                    t("add")
                                  ] }, void 0, true, {
                                    fileName: "app/components/pages/User/AlbumForm.tsx",
                                    lineNumber: 248,
                                    columnNumber: 33
                                  }, this)
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/components/pages/User/AlbumForm.tsx",
                                  lineNumber: 237,
                                  columnNumber: 31
                                },
                                this
                              )
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/AlbumForm.tsx",
                              lineNumber: 221,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/AlbumForm.tsx",
                          lineNumber: 214,
                          columnNumber: 25
                        },
                        this
                      ),
                      (form.getFieldValue("cover") || initialValues) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        image_default,
                        {
                          style: {
                            marginTop: "15px",
                            position: "relative",
                            height: 150,
                            width: 120,
                            borderRadius: 5,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "#EEEEEE"
                          },
                          src: `${cdnUrl}/${initialValues ? previewCover : form.getFieldValue("cover")}`,
                          preview: true
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/AlbumForm.tsx",
                          lineNumber: 258,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/components/pages/User/AlbumForm.tsx",
                      lineNumber: 212,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 188,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 187,
                    columnNumber: 15
                  }, this),
                  (form.getFieldValue("cover") || initialValues) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FileUploader,
                    {
                      fetcher,
                      fieldName: "cover",
                      onUploading: setUploading,
                      onErrorFileTooLarge: handleFileTooLarge,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                          fileName: "app/components/pages/User/AlbumForm.tsx",
                          lineNumber: 290,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("change") }, void 0, false, {
                          fileName: "app/components/pages/User/AlbumForm.tsx",
                          lineNumber: 291,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/pages/User/AlbumForm.tsx",
                        lineNumber: 289,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/AlbumForm.tsx",
                      lineNumber: 283,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                }, this)
              },
              "cover",
              false,
              {
                fileName: "app/components/pages/User/AlbumForm.tsx",
                lineNumber: 173,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "name",
                required: false,
                rules: [
                  () => ({
                    validator(_, value) {
                      if (!value || value === "") {
                        const message = t("please input album name");
                        return Promise.reject(new Error(message));
                      }
                      if (value.length > 30) {
                        const message = t(
                          "album name must contain only 30 charaters"
                        );
                        return Promise.reject(new Error(message));
                      }
                      return Promise.resolve();
                    }
                  })
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("album name") }, void 0, false, {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 321,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 320,
                  columnNumber: 15
                }, this),
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
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 327,
                    columnNumber: 13
                  },
                  this
                )
              },
              "name",
              false,
              {
                fileName: "app/components/pages/User/AlbumForm.tsx",
                lineNumber: 298,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "description",
                rules: [
                  () => ({
                    validator(_, value) {
                      if (value && value.length > 500) {
                        const message = t(
                          "description must contain only 500 charaters"
                        );
                        return Promise.reject(new Error(message));
                      }
                      return Promise.resolve();
                    }
                  })
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("description") }, void 0, false, {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 352,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 351,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  input_default.TextArea,
                  {
                    placeholder: t("input description"),
                    autoSize: {
                      minRows: 5
                    },
                    count: {
                      show: true,
                      max: 500
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 358,
                    columnNumber: 13
                  },
                  this
                )
              },
              "description",
              false,
              {
                fileName: "app/components/pages/User/AlbumForm.tsx",
                lineNumber: 334,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                form_default.Item,
                {
                  name: "isPrivate",
                  valuePropName: "checked",
                  noStyle: true,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
                    fileName: "app/components/pages/User/AlbumForm.tsx",
                    lineNumber: 376,
                    columnNumber: 15
                  }, this)
                },
                "isPrivate",
                false,
                {
                  fileName: "app/components/pages/User/AlbumForm.tsx",
                  lineNumber: 370,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("private album") }, void 0, false, {
                fileName: "app/components/pages/User/AlbumForm.tsx",
                lineNumber: 378,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/AlbumForm.tsx",
              lineNumber: 369,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/AlbumForm.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/User/AlbumForm.tsx",
              lineNumber: 383,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AlbumForm.tsx",
              lineNumber: 382,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: action === "create" ? t("create album") : t("edit album") }, void 0, false, {
              fileName: "app/components/pages/User/AlbumForm.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AlbumForm.tsx",
              lineNumber: 387,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/AlbumForm.tsx",
            lineNumber: 381,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/AlbumForm.tsx",
        lineNumber: 117,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AlbumForm.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

export {
  AlbumForm
};
//# sourceMappingURL=/build/_shared/chunk-GEQTK47T.js.map
