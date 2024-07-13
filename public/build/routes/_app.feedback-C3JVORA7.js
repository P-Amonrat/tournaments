import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  UploadOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  LoadingOutlined_default,
  card_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  notification_default,
  result_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useActionData,
  useFetcher,
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

// app/routes/_app.feedback.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function Feedback() {
  const { t } = useTranslation();
  const actionData = useActionData();
  const matches = useMatches();
  const submit = useSubmit();
  const { cdnUrl } = matches[0].data;
  const { user } = (0, import_react2.useContext)(AuthContext);
  const fetcher = useFetcher();
  const [form] = form_default.useForm();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [submitting, setSubmitting] = (0, import_react2.useState)(false);
  const [uploading, setUploading] = (0, import_react2.useState)(false);
  const [success, setSuccess] = (0, import_react2.useState)(false);
  const [attachedImage, setAttachedImage] = (0, import_react2.useState)("");
  const handleSubmitFeedback = (values) => {
    setSubmitting(true);
    submit({ data: JSON.stringify(values) }, { method: "post" });
  };
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  (0, import_react2.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "image") {
        form.setFieldValue("image", fetcher.data.key);
        setAttachedImage(fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);
  (0, import_react2.useEffect)(() => {
    if (actionData) {
      setSubmitting(false);
      if (actionData.success) {
        setSuccess(true);
      }
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 50,
        maxWidth: 800,
        marginInline: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, bodyStyle: { padding: 40 }, children: success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { status: "success", title: t("successfully sent feedback") }, void 0, false, {
          fileName: "app/routes/_app.feedback.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 1, style: { marginTop: 0, marginBottom: 30 }, children: t("feedback") }, void 0, false, {
            fileName: "app/routes/_app.feedback.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, style: { fontSize: 18 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default,
              {
                form,
                onFinish: handleSubmitFeedback,
                layout: "vertical",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    form_default.Item,
                    {
                      name: "message",
                      rules: [
                        {
                          required: true,
                          message: t("please input feedback message")
                        }
                      ],
                      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: 20, fontWeight: 600 }, children: t("message") }, void 0, false, {
                        fileName: "app/routes/_app.feedback.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                      }, this),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default.TextArea, { rows: 4, disabled: !user || submitting }, void 0, false, {
                        fileName: "app/routes/_app.feedback.tsx",
                        lineNumber: 138,
                        columnNumber: 19
                      }, this)
                    },
                    "message",
                    false,
                    {
                      fileName: "app/routes/_app.feedback.tsx",
                      lineNumber: 123,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    form_default.Item,
                    {
                      name: "image",
                      label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: 20, fontWeight: 600 }, children: t("attachment image") }, void 0, false, {
                        fileName: "app/routes/_app.feedback.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                      }, this),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        FileUploader,
                        {
                          disabled: !user || uploading || submitting,
                          fetcher,
                          fieldName: "image",
                          onUploading: setUploading,
                          onErrorFileTooLarge: handleFileTooLarge,
                          children: uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            result_default,
                            {
                              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                                fileName: "app/routes/_app.feedback.tsx",
                                lineNumber: 158,
                                columnNumber: 31
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.feedback.tsx",
                              lineNumber: 157,
                              columnNumber: 23
                            },
                            this
                          ) : attachedImage.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            image_default,
                            {
                              preview: false,
                              style: { maxWidth: 400, cursor: "pointer" },
                              src: `${cdnUrl}/${attachedImage}`
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/_app.feedback.tsx",
                              lineNumber: 161,
                              columnNumber: 23
                            },
                            this
                          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            space_default,
                            {
                              size: 10,
                              style: {
                                padding: "5px 15px",
                                backgroundColor: "#e5e4e4",
                                color: "#000",
                                borderRadius: 6,
                                cursor: "pointer"
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadOutlined_default, {}, void 0, false, {
                                  fileName: "app/routes/_app.feedback.tsx",
                                  lineNumber: 177,
                                  columnNumber: 25
                                }, this),
                                t("select file")
                              ]
                            },
                            void 0,
                            true,
                            {
                              fileName: "app/routes/_app.feedback.tsx",
                              lineNumber: 167,
                              columnNumber: 23
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/_app.feedback.tsx",
                          lineNumber: 149,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    "image",
                    false,
                    {
                      fileName: "app/routes/_app.feedback.tsx",
                      lineNumber: 140,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/_app.feedback.tsx",
                lineNumber: 118,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TiltButton,
              {
                color: user && !uploading && !submitting ? "primary" : "secondary",
                onClick: user && !uploading && !submitting ? () => form.submit() : void 0,
                style: { marginTop: 20 },
                children: user ? t("submit feedback") : t("please login to submit feedback")
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.feedback.tsx",
                lineNumber: 185,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.feedback.tsx",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.feedback.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.feedback.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.feedback.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        contextHolder
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/_app.feedback.tsx",
      lineNumber: 101,
      columnNumber: 5
    },
    this
  );
}
export {
  Feedback as default
};
//# sourceMappingURL=/build/routes/_app.feedback-C3JVORA7.js.map
