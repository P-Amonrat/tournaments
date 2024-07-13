import {
  TbPhotoPlus
} from "/build/_shared/chunk-ECVYUX7O.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ArrowUpDown,
  PenLine,
  Trash2
} from "/build/_shared/chunk-EKWFIVWG.js";
import "/build/_shared/chunk-3W3BLEBW.js";
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
  EditOutlined_default,
  ExclamationCircleFilled_default,
  LoadingOutlined_default,
  PlusOutlined_default,
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

// app/routes/_app.settings.my-achievement.tsx
var import_react7 = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());

// app/components/pages/User/MyAchievementEntry.tsx
var import_react4 = __toESM(require_react());

// app/components/pages/User/MyArchievementEntryControl.tsx
var import_react3 = __toESM(require_react());

// app/components/pages/User/AchievementForm.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function AchievementForm(props) {
  const { fetcher, form, initialValues, onCancel, action, type } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const [previewImage, setPreviewImage] = (0, import_react.useState)(
    initialValues == null ? void 0 : initialValues.image
  );
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#EEEEEE"
  };
  const handleSubmit = (values) => {
    const { isPrivate, ...rest } = values;
    fetcher.submit(
      {
        data: JSON.stringify({
          ...rest,
          type,
          id: initialValues == null ? void 0 : initialValues.id
        })
      },
      action === "create" ? {
        method: "post",
        action: `/resources/create-achievement`
      } : {
        method: "put",
        action: `/resources/edit-achievement`
      }
    );
    setPreviewImage(null);
    form.setFieldValue("image", null);
    form.resetFields();
    onCancel();
  };
  (0, import_react.useEffect)(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(flattenObject(initialValues));
        setPreviewImage(initialValues == null ? void 0 : initialValues.image);
      }
    }
  }, [initialValues, form]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "image") {
        form.setFieldValue("image", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default,
      {
        form,
        initialValues: flattenObject(initialValues),
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: action === "create" ? t("add achievement") : t("edit achievement") }, void 0, false, {
            fileName: "app/components/pages/User/AchievementForm.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/AchievementForm.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 15, vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "image",
                style: { margin: "0px", padding: "0px" },
                rules: [
                  {
                    required: true,
                    message: t("please input achievement image")
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600 }, children: t("achievement image") }, void 0, false, {
                      fileName: "app/components/pages/User/AchievementForm.tsx",
                      lineNumber: 135,
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
                            fileName: "app/components/pages/User/AchievementForm.tsx",
                            lineNumber: 148,
                            columnNumber: 23
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/User/AchievementForm.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                      },
                      this
                    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      !form.getFieldValue("image") && !initialValues && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        FileUploader,
                        {
                          fetcher,
                          fieldName: "image",
                          onUploading: setUploading,
                          onErrorFileTooLarge: handleFileTooLarge,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            card_default,
                            {
                              bordered: false,
                              style: {
                                ...photosStyle,
                                backgroundImage: `url("${cdnUrl}/${initialValues ? previewImage : form.getFieldValue("image")}")`,
                                textAlign: "center",
                                justifyContent: "center",
                                margin: "15px 0",
                                cursor: "pointer"
                              },
                              children: !form.getFieldValue("image") && !previewImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                                      fileName: "app/components/pages/User/AchievementForm.tsx",
                                      lineNumber: 194,
                                      columnNumber: 35
                                    }, this),
                                    t("add")
                                  ] }, void 0, true, {
                                    fileName: "app/components/pages/User/AchievementForm.tsx",
                                    lineNumber: 193,
                                    columnNumber: 33
                                  }, this)
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/components/pages/User/AchievementForm.tsx",
                                  lineNumber: 182,
                                  columnNumber: 31
                                },
                                this
                              )
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/AchievementForm.tsx",
                              lineNumber: 166,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/AchievementForm.tsx",
                          lineNumber: 159,
                          columnNumber: 25
                        },
                        this
                      ),
                      (form.getFieldValue("image") || initialValues) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                          src: `${cdnUrl}/${initialValues ? previewImage : form.getFieldValue("image")}`,
                          preview: true
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/AchievementForm.tsx",
                          lineNumber: 203,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/components/pages/User/AchievementForm.tsx",
                      lineNumber: 157,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/User/AchievementForm.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/User/AchievementForm.tsx",
                    lineNumber: 133,
                    columnNumber: 15
                  }, this),
                  (form.getFieldValue("image") || initialValues) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    FileUploader,
                    {
                      fetcher,
                      fieldName: "image",
                      onUploading: setUploading,
                      onErrorFileTooLarge: handleFileTooLarge,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                          fileName: "app/components/pages/User/AchievementForm.tsx",
                          lineNumber: 235,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("change") }, void 0, false, {
                          fileName: "app/components/pages/User/AchievementForm.tsx",
                          lineNumber: 236,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/pages/User/AchievementForm.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/AchievementForm.tsx",
                      lineNumber: 228,
                      columnNumber: 19
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/User/AchievementForm.tsx",
                    lineNumber: 227,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 132,
                  columnNumber: 13
                }, this)
              },
              "image",
              false,
              {
                fileName: "app/components/pages/User/AchievementForm.tsx",
                lineNumber: 121,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "name",
                rules: [
                  {
                    required: true,
                    message: t("please input achievement name")
                  }
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("achievement name") }, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 254,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 253,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 260,
                  columnNumber: 13
                }, this)
              },
              "name",
              false,
              {
                fileName: "app/components/pages/User/AchievementForm.tsx",
                lineNumber: 243,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "url",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("achievement url") }, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 267,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 266,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/User/AchievementForm.tsx",
                  lineNumber: 273,
                  columnNumber: 13
                }, this)
              },
              "url",
              false,
              {
                fileName: "app/components/pages/User/AchievementForm.tsx",
                lineNumber: 262,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/User/AchievementForm.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/User/AchievementForm.tsx",
              lineNumber: 278,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AchievementForm.tsx",
              lineNumber: 277,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: action === "create" ? t("create achievement") : t("edit") }, void 0, false, {
              fileName: "app/components/pages/User/AchievementForm.tsx",
              lineNumber: 283,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AchievementForm.tsx",
              lineNumber: 282,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/AchievementForm.tsx",
            lineNumber: 276,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/AchievementForm.tsx",
        lineNumber: 110,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AchievementForm.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/MyArchievementEntryControl.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function MyArchievementEntryControl(props) {
  const { fetcher, id, isOwner, isForumAdmin, postType, initialValues, type } = props;
  const { t } = useTranslation();
  const [reason, setReason] = (0, import_react3.useState)("");
  const [modal, contextHolder] = modal_default.useModal();
  const [reportModal, setReportModal] = (0, import_react3.useState)(false);
  const [gameInfoModal, setGameInfoModal] = (0, import_react3.useState)(false);
  const [form] = form_default.useForm();
  const { Option } = select_default;
  const handleOpenCreateExperienceModal = () => {
    setGameInfoModal(true);
  };
  const handleLeaveParty = (0, import_react3.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this achievement?`)}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
        lineNumber: 50,
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
            action: `/resources/delete-achievement`
          }
        );
      }
    });
  }, [fetcher]);
  const openReportModal = () => {
    setReportModal(true);
  };
  const deletePost = (0, import_react3.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this post`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
        lineNumber: 74,
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
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, style: { color: "#f5222d" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        t("report")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      onClick: openReportModal
    }
  ];
  if (isOwner || isForumAdmin) {
    menus.push({
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, {}, void 0, false, {
          fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      onClick: deletePost
    });
  }
  (0, import_react3.useEffect)(() => {
    setReason("");
  }, [id]);
  (0, import_react3.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success === `report-${postType ? postType : "webboard"}` && fetcher.state === "idle") {
      setReason("");
      setReportModal(false);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 5, children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Text2,
        {
          style: {
            fontSize: 18,
            cursor: "pointer",
            color: "#ffff",
            backgroundColor: "#000000",
            padding: "0 5px",
            borderRadius: 5
          },
          onClick: handleOpenCreateExperienceModal,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PenLine, {}, void 0, false, {
            fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
          lineNumber: 138,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Text2,
        {
          style: {
            fontSize: 18,
            cursor: "pointer",
            color: "#ffff",
            backgroundColor: "#f5222d",
            padding: "0 5px",
            borderRadius: 5
          },
          onClick: handleLeaveParty,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, {}, void 0, false, {
            fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
          lineNumber: 151,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setGameInfoModal(false),
        open: gameInfoModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          AchievementForm,
          {
            fetcher,
            form,
            action: "update",
            type,
            onCancel: () => setGameInfoModal(false),
            initialValues
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
            lineNumber: 172,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
        lineNumber: 167,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyArchievementEntryControl.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/MyAchievementEntry.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text3, Title: Title3 } = typography_default;
function MyAchievementEntry(props) {
  const { t } = useTranslation();
  const { data, fetcher, type } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react4.useContext)(AppContext);
  const { user } = (0, import_react4.useContext)(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [screenSize, setScreenSize] = (0, import_react4.useState)("");
  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(233, 233, 233, 1)"
    // cursor: "pointer",
  };
  (0, import_react4.useEffect)(() => {
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
  const gameCard = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        ...photosStyle,
        backgroundImage: `url("${cdnUrl}/${data.image}")`,
        textAlign: "center",
        justifyContent: "center",
        margin: "15px 0"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          style: {
            marginLeft: "30px",
            marginTop: "-20px",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            MyArchievementEntryControl,
            {
              fetcher,
              id: data.id,
              isOwner,
              isForumAdmin,
              type,
              initialValues: data,
              postType: "experience"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/MyAchievementEntry.tsx",
              lineNumber: 76,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyAchievementEntry.tsx",
          lineNumber: 69,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/MyAchievementEntry.tsx",
      lineNumber: 59,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: gameCard }, void 0, false, {
    fileName: "app/components/pages/User/MyAchievementEntry.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/AchievementTitleForm.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text4, Title: Title4 } = typography_default;
function AchievementTitleForm(props) {
  const { fetcher, form, initialValues, onCancel, action, type } = props;
  const { t } = useTranslation();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react6.useState)(false);
  const handleSubmit = (values) => {
    const { isPrivate, ...rest } = values;
    fetcher.submit(
      {
        data: JSON.stringify({
          ...rest,
          type,
          id: initialValues == null ? void 0 : initialValues.id
        })
      },
      {
        method: "put",
        action: `/resources/edit-achievement-title`
      }
    );
    form.resetFields();
    onCancel();
  };
  (0, import_react6.useEffect)(() => {
    if (initialValues) {
      form.setFieldsValue(flattenObject(initialValues));
    }
  }, [initialValues, form, fetcher.data]);
  (0, import_react6.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "image") {
        form.setFieldValue("image", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      form_default,
      {
        form,
        initialValues: flattenObject(initialValues),
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title4, { level: 4, style: { margin: 0 }, children: action === "create" ? t("add achievement title") : t("edit achievement title") }, void 0, false, {
            fileName: "app/components/pages/User/AchievementTitleForm.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/AchievementTitleForm.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { gap: 15, vertical: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            form_default.Item,
            {
              name: "title",
              rules: [
                {
                  required: true,
                  message: t("please input achievement title")
                }
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text4, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("achievement title") }, void 0, false, {
                fileName: "app/components/pages/User/AchievementTitleForm.tsx",
                lineNumber: 95,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/components/pages/User/AchievementTitleForm.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/components/pages/User/AchievementTitleForm.tsx",
                lineNumber: 101,
                columnNumber: 13
              }, this)
            },
            "title",
            false,
            {
              fileName: "app/components/pages/User/AchievementTitleForm.tsx",
              lineNumber: 84,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/User/AchievementTitleForm.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/User/AchievementTitleForm.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AchievementTitleForm.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: action === "create" ? t("create achievement") : t("edit achievement") }, void 0, false, {
              fileName: "app/components/pages/User/AchievementTitleForm.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/AchievementTitleForm.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/AchievementTitleForm.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/AchievementTitleForm.tsx",
        lineNumber: 71,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AchievementTitleForm.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings.my-achievement.tsx
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
  const { user } = (0, import_react7.useContext)(AuthContext);
  const [messageApi, contextHolder] = notification_default.useNotification();
  const { achievements } = useLoaderData();
  const [achievementBrandTitleModal, setAchievementBrandTitleModal] = (0, import_react7.useState)(false);
  const [achievementTournamentTitleModal, setAchievementTournamentTitleModal] = (0, import_react7.useState)(false);
  const [achievementOthersTitleModal, setAchievementOthersTitleModal] = (0, import_react7.useState)(false);
  const [achievementBrandModal, setAchievementBrandModal] = (0, import_react7.useState)(false);
  const [achievementTournamentModal, setAchievementTournamentModal] = (0, import_react7.useState)(false);
  const [achievementOthersModal, setAchievementOthersModal] = (0, import_react7.useState)(false);
  const [achievementLists, setAchievementLists] = (0, import_react7.useState)(achievements);
  const [brandItems, setBrandItems] = (0, import_react7.useState)(
    achievementLists.find((item) => item.type === "brand")
  );
  const [brandItemsLists, setBrandItemsLists] = (0, import_react7.useState)(
    brandItems.userAchievements
  );
  const [tournamentItems, setTournamentItems] = (0, import_react7.useState)(
    achievementLists.find((item) => item.type === "tournament")
  );
  const [tournamentItemsLists, setTournamentItemsLists] = (0, import_react7.useState)(
    tournamentItems.userAchievements
  );
  const [othersItems, setOthersItems] = (0, import_react7.useState)(
    achievementLists.find((item) => item.type === "others")
  );
  const [othersItemsLists, setOthersItemsLists] = (0, import_react7.useState)(
    othersItems.userAchievements
  );
  const [sortingBrandModal, setSortingBrandModal] = (0, import_react7.useState)(false);
  const [sortingTournamentModal, setSortingTournamentModal] = (0, import_react7.useState)(false);
  const [sortingOthersModal, setSortingOthersModal] = (0, import_react7.useState)(false);
  const [sortingTypeModal, setSortingTypeModal] = (0, import_react7.useState)(false);
  const containerRef = (0, import_react7.useRef)(null);
  const { scheme } = (0, import_react7.useContext)(AppContext);
  const [screenSize, setScreenSize] = (0, import_react7.useState)("");
  const [brandForm] = form_default.useForm();
  const [tournamentForm] = form_default.useForm();
  const [othersForm] = form_default.useForm();
  const [brandTitleForm] = form_default.useForm();
  const [tournamentTitleForm] = form_default.useForm();
  const [othersTitleForm] = form_default.useForm();
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
  const onChangeSortBrandtems = (items) => {
    setBrandItemsLists(items);
  };
  const onChangeSortTournamenttems = (items) => {
    setTournamentItemsLists(items);
  };
  const onChangeSortOtherstems = (items) => {
    setOthersItemsLists(items);
  };
  const onChangeSortTypeItems = (items) => {
    setAchievementLists(items);
  };
  const handleToggleBrandSortingMode = () => {
    setSortingBrandModal(!sortingBrandModal);
  };
  const onClosesortingBrandModal = () => {
    setSortingBrandModal(false);
  };
  const handleToggleTournamentSortingMode = () => {
    setSortingTournamentModal(!sortingBrandModal);
  };
  const onClosesortingTournamentModal = () => {
    setSortingTournamentModal(false);
  };
  const handleToggleOthersSortingMode = () => {
    setSortingOthersModal(!sortingBrandModal);
  };
  const onClosesortingOthersModal = () => {
    setSortingOthersModal(false);
  };
  const onClosesortingTypeModal = () => {
    setSortingTypeModal(false);
  };
  const handleToggleTypeSortingMode = () => {
    setSortingTypeModal(!sortingBrandModal);
  };
  const handleSubmitTypeSorting = () => {
    setSortingTypeModal(false);
    const itemsId = {
      order: achievementLists.map((item, index) => item.type)
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "put",
        action: `/resources/sorting-my-achievement-title`
      }
    );
  };
  const handleSubmitBrandSorting = () => {
    setSortingBrandModal(false);
    const itemsId = {
      type: "brand",
      userAchievementIds: brandItemsLists.map(
        (item, index) => item.id
      )
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`
      }
    );
  };
  const handleSubmitTournamentSorting = () => {
    setSortingTournamentModal(false);
    const itemsId = {
      type: "tournament",
      userAchievementIds: tournamentItemsLists.map(
        (item, index) => item.id
      )
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`
      }
    );
  };
  const handleSubmitOthersSorting = () => {
    setSortingOthersModal(false);
    const itemsId = {
      type: "others",
      userAchievementIds: othersItemsLists.map(
        (item, index) => item.id
      )
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-my-achievement`
      }
    );
  };
  (0, import_react7.useEffect)(() => {
    const container = containerRef.current;
    if (container) {
      const divs = Array.from(container.children);
      const orderMap = {
        brand: brandItems.sortOrder,
        tournament: tournamentItems.sortOrder,
        others: othersItems.sortOrder
        // brand: 1,
        // tournament: 2,
        // others: 3,
      };
      const sortedDivs = divs.sort(
        (a, b) => orderMap[a.id] - orderMap[b.id]
      );
      container.innerHTML = "";
      sortedDivs.forEach((div) => {
        container.appendChild(div);
      });
    }
  }, [brandItems.sortOrder, othersItems.sortOrder, tournamentItems.sortOrder]);
  (0, import_react7.useEffect)(() => {
    setAchievementLists(
      achievements && achievements.length ? achievements : []
    );
  }, [achievements]);
  (0, import_react7.useEffect)(() => {
    setBrandItems(achievementLists.find((item) => item.type === "brand"));
    setTournamentItems(
      achievementLists.find((item) => item.type === "tournament")
    );
    setOthersItems(
      achievementLists.find((item) => item.type === "others")
    );
    setBrandItemsLists(brandItems.userAchievements);
    setOthersItemsLists(othersItems.userAchievements);
    setTournamentItemsLists(tournamentItems.userAchievements);
  }, [
    achievementLists,
    brandItems.userAchievements,
    othersItems.userAchievements,
    tournamentItems.userAchievements
  ]);
  (0, import_react7.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.achievements) {
      setAchievementLists(fetcher.data.achievements);
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
  const photosStyle = {
    position: "relative",
    height: 150,
    width: 120,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center"
    // cursor: "pointer",
  };
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
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title5, { level: 2, children: t("my achievement") }, void 0, false, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 476,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 467,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref: containerRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "brand", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Text5,
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px"
                  },
                  children: brandItems == null ? void 0 : brandItems.title
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 483,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                space_default,
                {
                  style: { cursor: "pointer" },
                  onClick: () => setAchievementBrandTitleModal(true),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PenLine, { style: { color: "#7C6FF6" } }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 496,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { children: t("change") }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 497,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 492,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 482,
              columnNumber: 15
            }, this),
            (brandItems == null ? void 0 : brandItems.userAchievements.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text5,
              {
                style: {
                  marginRight: 10,
                  marginTop: 0,
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "pointer"
                },
                onClick: handleToggleBrandSortingMode,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    ArrowUpDown,
                    {
                      style: { color: "#7C6FF6", fontSize: "1.2em" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 512,
                      columnNumber: 21
                    },
                    this
                  ),
                  t("sort order")
                ] }, void 0, true, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 511,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 501,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 481,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 20, align: "flex-start", style: { overflow: "auto" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              card_default,
              {
                bordered: false,
                style: {
                  ...photosStyle,
                  backgroundColor: "#EEEEEE",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "15px 0",
                  cursor: "pointer"
                },
                onClick: () => setAchievementBrandModal(true),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 5, style: { color: "black" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
                        fileName: "app/routes/_app.settings.my-achievement.tsx",
                        lineNumber: 546,
                        columnNumber: 23
                      }, this),
                      t("add")
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 545,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 534,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 522,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 521,
              columnNumber: 15
            }, this),
            brandItems == null ? void 0 : brandItems.userAchievements.map(
              (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                MyAchievementEntry,
                {
                  data: achievement,
                  fetcher,
                  isMyWebboard: true,
                  type: "brand"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 555,
                  columnNumber: 21
                },
                this
              ) }, index, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 554,
                columnNumber: 19
              }, this)
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 520,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { marginBlock: 20 } }, void 0, false, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 565,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 480,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "tournament", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Text5,
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px"
                  },
                  children: tournamentItems.title
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 570,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                space_default,
                {
                  style: { cursor: "pointer" },
                  onClick: () => setAchievementTournamentTitleModal(true),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PenLine, { style: { color: "#7C6FF6" } }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 583,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { children: t("change") }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 584,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 579,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 569,
              columnNumber: 15
            }, this),
            (tournamentItems == null ? void 0 : tournamentItems.userAchievements.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text5,
              {
                style: {
                  marginRight: 10,
                  marginTop: 0,
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "pointer"
                },
                onClick: handleToggleTournamentSortingMode,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    ArrowUpDown,
                    {
                      style: { color: "#7C6FF6", fontSize: "1.2em" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 599,
                      columnNumber: 21
                    },
                    this
                  ),
                  t("sort order")
                ] }, void 0, true, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 598,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 588,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 568,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 20, align: "flex-start", style: { overflow: "auto" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              card_default,
              {
                bordered: false,
                style: {
                  ...photosStyle,
                  backgroundColor: "#EEEEEE",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "15px 0",
                  cursor: "pointer"
                },
                onClick: () => setAchievementTournamentModal(true),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 5, style: { color: "black" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
                        fileName: "app/routes/_app.settings.my-achievement.tsx",
                        lineNumber: 633,
                        columnNumber: 23
                      }, this),
                      t("add")
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 632,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 621,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 609,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 608,
              columnNumber: 15
            }, this),
            tournamentItems.userAchievements.map(
              (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                MyAchievementEntry,
                {
                  data: achievement,
                  fetcher,
                  isMyWebboard: true,
                  type: "tournament"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 642,
                  columnNumber: 21
                },
                this
              ) }, index, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 641,
                columnNumber: 19
              }, this)
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 607,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { marginBlock: 20 } }, void 0, false, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 652,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 567,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "others", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Text5,
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "inherit",
                    marginRight: "10px"
                  },
                  children: othersItems.title
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 657,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                space_default,
                {
                  style: { cursor: "pointer" },
                  onClick: () => setAchievementOthersTitleModal(true),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PenLine, { style: { color: "#7C6FF6" } }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 670,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { children: t("change") }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 671,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 666,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 656,
              columnNumber: 15
            }, this),
            (othersItems == null ? void 0 : othersItems.userAchievements.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Text5,
              {
                style: {
                  marginRight: 10,
                  marginTop: 0,
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "pointer"
                },
                onClick: handleToggleOthersSortingMode,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    ArrowUpDown,
                    {
                      style: { color: "#7C6FF6", fontSize: "1.2em" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 686,
                      columnNumber: 21
                    },
                    this
                  ),
                  t("sort order")
                ] }, void 0, true, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 685,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 675,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 655,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { gap: 20, align: "flex-start", style: { overflow: "auto" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              card_default,
              {
                bordered: false,
                style: {
                  ...photosStyle,
                  backgroundColor: "#EEEEEE",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "15px 0",
                  cursor: "pointer"
                },
                onClick: () => setAchievementOthersModal(true),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 5, style: { color: "black" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
                        fileName: "app/routes/_app.settings.my-achievement.tsx",
                        lineNumber: 720,
                        columnNumber: 23
                      }, this),
                      t("add")
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 719,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 708,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 696,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 695,
              columnNumber: 15
            }, this),
            othersItems.userAchievements.map(
              (achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                MyAchievementEntry,
                {
                  data: achievement,
                  fetcher,
                  isMyWebboard: true,
                  type: "others"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 729,
                  columnNumber: 21
                },
                this
              ) }, index, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 728,
                columnNumber: 19
              }, this)
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 694,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { marginBlock: 20 } }, void 0, false, {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 739,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 654,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 479,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(flex_default, { justify: "space-between", style: { marginBottom: 10 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Text5,
          {
            style: {
              fontWeight: 600,
              fontSize: "inherit",
              marginRight: "10px"
            },
            children: t("display order")
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 744,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 743,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Text5,
          {
            style: {
              marginRight: 10,
              marginTop: 0,
              fontWeight: 600,
              textAlign: "center",
              cursor: "pointer"
            },
            onClick: handleToggleTypeSortingMode,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ArrowUpDown, { style: { color: "#7C6FF6", fontSize: "1.2em" } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 765,
                columnNumber: 15
              }, this),
              t("sort order")
            ] }, void 0, true, {
              fileName: "app/routes/_app.settings.my-achievement.tsx",
              lineNumber: 764,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 754,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 742,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { direction: "vertical", children: achievementLists.map((achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        index + 1,
        ". ",
        achievement.title
      ] }, index, true, {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 772,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 770,
        columnNumber: 9
      }, this),
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
          fileName: "app/routes/_app.settings.my-achievement.tsx",
          lineNumber: 777,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.my-achievement.tsx",
      lineNumber: 466,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementBrandModal(false),
        open: achievementBrandModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementForm,
          {
            fetcher,
            form: brandForm,
            action: "create",
            type: "brand",
            onCancel: () => setAchievementBrandModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 790,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 785,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementTournamentModal(false),
        open: achievementTournamentModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementForm,
          {
            fetcher,
            form: tournamentForm,
            action: "create",
            type: "tournament",
            onCancel: () => {
              setAchievementTournamentModal(false);
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 803,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 798,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementOthersModal(false),
        open: achievementOthersModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementForm,
          {
            fetcher,
            form: othersForm,
            action: "create",
            type: "others",
            onCancel: () => setAchievementOthersModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 818,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 813,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementBrandTitleModal(false),
        open: achievementBrandTitleModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementTitleForm,
          {
            fetcher,
            form: brandTitleForm,
            action: "update",
            type: "brand",
            initialValues: brandItems,
            onCancel: () => setAchievementBrandTitleModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 831,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 826,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementTournamentTitleModal(false),
        open: achievementTournamentTitleModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementTitleForm,
          {
            fetcher,
            form: tournamentTitleForm,
            action: "update",
            type: "tournament",
            initialValues: tournamentItems,
            onCancel: () => setAchievementTournamentTitleModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 845,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 840,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setAchievementOthersTitleModal(false),
        open: achievementOthersTitleModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          AchievementTitleForm,
          {
            fetcher,
            form: othersTitleForm,
            action: "update",
            type: "others",
            initialValues: othersItems,
            onCancel: () => setAchievementOthersTitleModal(false)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 859,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 854,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setSortingBrandModal(false),
        open: sortingBrandModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 878,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 881,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: brandItemsLists,
                  onChange: onChangeSortBrandtems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 889,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 888,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: item.name }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 891,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 887,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 886,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 882,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onClosesortingBrandModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 898,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 897,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitBrandSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 903,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 902,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 896,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 873,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 868,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setSortingTournamentModal(false),
        open: sortingTournamentModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 920,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 923,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: tournamentItemsLists,
                  onChange: onChangeSortTournamenttems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 931,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 930,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: item.name }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 933,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 929,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 928,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 924,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  TiltButton,
                  {
                    color: "secondary",
                    onClick: onClosesortingTournamentModal,
                    children: t("cancel")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 940,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 939,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  TiltButton,
                  {
                    color: "primary",
                    onClick: handleSubmitTournamentSorting,
                    children: t("save")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 948,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 947,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 938,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 915,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 910,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setSortingOthersModal(false),
        open: sortingOthersModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 968,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 971,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: othersItemsLists,
                  onChange: onChangeSortOtherstems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 979,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 978,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: item.name }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 981,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 977,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 976,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 972,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onClosesortingOthersModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 988,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 987,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitOthersSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 993,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 992,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 986,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 963,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 958,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setSortingTypeModal(false),
        open: sortingTypeModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text5, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 1010,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 1013,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: achievementLists,
                  onChange: onChangeSortTypeItems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 1021,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 1020,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: item.title }, void 0, false, {
                      fileName: "app/routes/_app.settings.my-achievement.tsx",
                      lineNumber: 1023,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 1019,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings.my-achievement.tsx",
                    lineNumber: 1018,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 1014,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onClosesortingTypeModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 1030,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 1029,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitTypeSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 1035,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.my-achievement.tsx",
                  lineNumber: 1034,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.my-achievement.tsx",
                lineNumber: 1028,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.my-achievement.tsx",
            lineNumber: 1005,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.my-achievement.tsx",
        lineNumber: 1e3,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.my-achievement.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}
export {
  SettingsMyGames as default
};
//# sourceMappingURL=/build/routes/_app.settings.my-achievement-K2YCFIRX.js.map
