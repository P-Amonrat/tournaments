import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ArrowUpDown
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
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  AlertOutlined_default,
  CameraOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  DeleteOutlined_default,
  EditOutlined_default,
  ExclamationCircleFilled_default,
  LoadingOutlined_default,
  PlusOutlined_default,
  avatar_default,
  button_default,
  card_default,
  col_default,
  date_picker_default,
  divider_default,
  flex_default,
  form_default,
  input_default,
  modal_default,
  notification_default,
  require_dayjs_min,
  row_default,
  select_default,
  space_default,
  switch_default,
  tabs_default,
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
  useNavigate,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.settings.experiences.tsx
var import_react8 = __toESM(require_react());
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());

// app/components/pages/User/ExperiencesForm.tsx
var import_react = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function ExperienceForm(props) {
  const { fetcher, form, initialValues, onCancel, action, gameId, titleType } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const [isPresent, setIsPresent] = (0, import_react.useState)(
    initialValues ? initialValues.endDate === null ? true : false : false
  );
  let initialData = {};
  if (initialValues) {
    const { startDate, endDate, ...rest } = initialValues;
    initialData = {
      ...rest,
      startDate: (initialValues == null ? void 0 : initialValues.startDate) && (0, import_dayjs.default)(initialValues.startDate).toISOString(),
      endDate: (initialValues == null ? void 0 : initialValues.endDate) && (0, import_dayjs.default)(initialValues.endDate).toISOString()
    };
  }
  const handlePresentChange = (checked) => {
    setIsPresent(checked);
    if (checked) {
      form.setFieldValue("endDate", null);
    }
  };
  const handleSubmit = (values) => {
    const { isPrivate, ...rest } = values;
    let submissionData = {
      ...rest,
      id: initialValues == null ? void 0 : initialValues.id
      // include initialValues ID if it exists
    };
    if (action === "edit") {
      submissionData = {
        ...submissionData
      };
    } else if (titleType === "experienceTitleId") {
      submissionData = {
        ...submissionData,
        experienceTitleId: gameId
      };
    } else {
      submissionData = {
        ...submissionData,
        rankingGameId: gameId
      };
    }
    fetcher.submit(
      {
        data: JSON.stringify(submissionData)
      },
      action === "create" ? {
        method: "post",
        action: `/resources/create-experience`
      } : {
        method: "put",
        action: `/resources/edit-experience`
      }
    );
    form.resetFields();
    onCancel();
  };
  (0, import_react.useEffect)(() => {
    if (initialValues) {
      form.setFieldsValue(flattenObject(initialData));
    }
  }, [initialValues, form]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "cover") {
        form.setFieldValue("cover", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default,
      {
        form,
        initialValues: flattenObject(initialData),
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: action === "create" ? t("add experience") : t("edit experience") }, void 0, false, {
            fileName: "app/components/pages/User/ExperiencesForm.tsx",
            lineNumber: 138,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/ExperiencesForm.tsx",
            lineNumber: 141,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 15, vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "name",
                rules: [
                  {
                    required: true,
                    message: t("please input experience name")
                  }
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("team name or tournament name") }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 154,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 153,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 160,
                  columnNumber: 13
                }, this)
              },
              "name",
              false,
              {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 143,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                form_default.Item,
                {
                  name: "startDate",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("experience start date") }, void 0, false, {
                    fileName: "app/components/pages/User/ExperiencesForm.tsx",
                    lineNumber: 167,
                    columnNumber: 19
                  }, this),
                  rules: [
                    {
                      required: true,
                      message: `${t("please select experience start date")}`
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value) {
                          return Promise.resolve();
                        } else {
                          if (getFieldValue("endDate")) {
                            if (value.isBefore(getFieldValue("endDate"))) {
                              return Promise.resolve();
                            }
                          } else {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "start date must be before end date"
                          );
                        }
                      }
                    })
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    date_picker_default,
                    {
                      name: "startDate",
                      showToday: false,
                      allowClear: false,
                      placeholder: "DD/MM/YYYY",
                      format: "DD/MM/YYYY",
                      style: { display: "flex" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/ExperiencesForm.tsx",
                      lineNumber: 196,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 164,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 163,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                form_default.Item,
                {
                  name: "endDate",
                  label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("experience end date") }, void 0, false, {
                    fileName: "app/components/pages/User/ExperiencesForm.tsx",
                    lineNumber: 210,
                    columnNumber: 19
                  }, this),
                  rules: [
                    {
                      required: !isPresent,
                      message: `${t("please select experience end date")}`
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || !getFieldValue("startDate")) {
                          return Promise.resolve();
                        }
                        if (value.isAfter((0, import_dayjs.default)(getFieldValue("startDate")))) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "end date must be after the start date"
                        );
                      }
                    })
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    date_picker_default,
                    {
                      name: "endDate",
                      showToday: false,
                      allowClear: false,
                      placeholder: "DD/MM/YYYY",
                      format: "DD/MM/YYYY",
                      style: { display: "flex" },
                      disabled: isPresent
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/ExperiencesForm.tsx",
                      lineNumber: 234,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 207,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 206,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 162,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { justify: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.Item, { name: "present", valuePropName: "checked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("present") }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, { onChange: handlePresentChange, value: isPresent }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 252,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this) }, "present", false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 247,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 246,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "description",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("description") }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 262,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesForm.tsx",
                  lineNumber: 261,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  input_default.TextArea,
                  {
                    placeholder: t("input description"),
                    autoSize: {
                      minRows: 5
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/User/ExperiencesForm.tsx",
                    lineNumber: 268,
                    columnNumber: 13
                  },
                  this
                )
              },
              "description",
              false,
              {
                fileName: "app/components/pages/User/ExperiencesForm.tsx",
                lineNumber: 257,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/User/ExperiencesForm.tsx",
            lineNumber: 142,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 278,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 277,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: action === "create" ? t("create experience") : t("edit") }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 283,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesForm.tsx",
              lineNumber: 282,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/ExperiencesForm.tsx",
            lineNumber: 276,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/ExperiencesForm.tsx",
        lineNumber: 132,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/ExperiencesForm.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings.experiences.tsx
var import_lodash = __toESM(require_lodash());

// app/components/pages/User/ExpereinceEntry.tsx
var import_react4 = __toESM(require_react());

// app/components/pages/User/ExperienceEntryControl.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function ExperienceEntryControl(props) {
  const {
    fetcher,
    id,
    ignoreShare,
    isOwner,
    isForumAdmin,
    postType,
    initialValues
  } = props;
  const { t } = useTranslation();
  const { baseUrl } = (0, import_react3.useContext)(AppContext);
  const [reason, setReason] = (0, import_react3.useState)("");
  const [modal, contextHolder] = modal_default.useModal();
  const [reportModal, setReportModal] = (0, import_react3.useState)(false);
  const [openCreateExperienceModal, setOpenCreateExperienceModal] = (0, import_react3.useState)(false);
  const [form] = form_default.useForm();
  const albumUrl = `${baseUrl}/album/${id}`;
  const { Option } = select_default;
  const handleOpenCreateExperienceModal = () => {
    setOpenCreateExperienceModal(true);
  };
  const handleDeleteExperience = (0, import_react3.useCallback)(() => {
    if (fetcher.state === "idle") {
      modal.confirm({
        title: `${t(`are you sure you want to delete this expereince?`)}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 66,
          columnNumber: 15
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
              action: `/resources/delete-experience`
            }
          );
        }
      });
    }
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
  const [selectedReason, setSelectedReason] = (0, import_react3.useState)("");
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
  const reasonSelect = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    select_default,
    {
      style: { width: "100%" },
      onChange: onReasonSelected,
      value: selectedReason ? selectedReason : void 0,
      disabled: fetcher.state !== "idle",
      placeholder: t("select reason"),
      listHeight: 300,
      children: reasonOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Option, { value: option.value, children: option.label }, option.value, false, {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
      lineNumber: 118,
      columnNumber: 5
    },
    this
  );
  const submitReport = (0, import_react3.useCallback)(() => {
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
  const deletePost = (0, import_react3.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this post`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 149,
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
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        t("report")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      onClick: openReportModal
    }
  ];
  if (isOwner || isForumAdmin) {
    menus.push({
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        t("delete")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 180,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 15, children: isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Text2,
        {
          style: { fontSize: 18, cursor: "pointer" },
          onClick: handleOpenCreateExperienceModal,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 213,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Text2,
        {
          style: { fontSize: 18, cursor: "pointer", color: "#f5222d" },
          onClick: handleDeleteExperience,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 219,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
      lineNumber: 212,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setOpenCreateExperienceModal(false),
        open: fetcher.state === "idle" && openCreateExperienceModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          ExperienceForm,
          {
            fetcher,
            form,
            onCancel: () => setOpenCreateExperienceModal(false),
            initialValues,
            action: "edit",
            gameId: initialValues.experienceTitleId
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
            lineNumber: 233,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 228,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        footer: null,
        open: reportModal,
        onCancel: closeReportModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title2, { level: 4, style: { margin: 0 }, children: t("please input reason to report") }, void 0, false, {
            fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
            lineNumber: 249,
            columnNumber: 11
          }, this),
          reasonSelect,
          selectedReason === "Others" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
              lineNumber: 254,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
              lineNumber: 261,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
          lineNumber: 248,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
        lineNumber: 242,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/ExperienceEntryControl.tsx",
    lineNumber: 206,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/ExpereinceEntry.tsx
var import_dayjs2 = __toESM(require_dayjs_min());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text3, Title: Title3 } = typography_default;
function ExperienceEntry(props) {
  const { data, rankingGame, fetcher } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react4.useContext)(AppContext);
  const { user } = (0, import_react4.useContext)(AuthContext);
  const isOwner = true;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const { t } = useTranslation();
  const [screenSize, setScreenSize] = (0, import_react4.useState)("");
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
  const cardStyle = {
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #E5E4E4"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(card_default, { style: cardStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { gap: 20, vertical: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        space_default,
        {
          direction: "vertical",
          size: 1,
          style: { margin: 0, padding: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title3, { level: 5, children: data.name }, void 0, false, {
              fileName: "app/components/pages/User/ExpereinceEntry.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text3, { children: [
              (0, import_dayjs2.default)(data.startDate).format("MMM YYYY"),
              " -",
              " ",
              data.endDate ? (0, import_dayjs2.default)(data.endDate).format("MMM YYYY") : t("present")
            ] }, void 0, true, {
              fileName: "app/components/pages/User/ExpereinceEntry.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/User/ExpereinceEntry.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ExperienceEntryControl,
        {
          fetcher,
          id: data.id,
          isOwner,
          isForumAdmin,
          initialValues: data,
          postType: "experience"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/ExpereinceEntry.tsx",
          lineNumber: 75,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/User/ExpereinceEntry.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text3, { children: data.description }, void 0, false, {
      fileName: "app/components/pages/User/ExpereinceEntry.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/ExpereinceEntry.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/ExpereinceEntry.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/ExpereinceEntry.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/ExperiencesTitleForm.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text4, Title: Title4 } = typography_default;
var { useToken } = theme_default;
function ExperienceTitleForm(props) {
  const {
    fetcher,
    form,
    initialValues,
    onCancel,
    action,
    gameId,
    handleDeleteExperienceTitle
  } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react6.useState)(false);
  const [modal, contextHolder2] = modal_default.useModal();
  const avatarStyle = {
    position: "absolute",
    left: "1.5%",
    bottom: -30,
    padding: 2,
    border: `5px solid ${token.colorBgLayout}`,
    borderRadius: "50%",
    overflow: "hidden"
  };
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const handleSubmit = (0, import_react6.useCallback)(
    (values) => {
      const { isPrivate, ...rest } = values;
      fetcher.submit(
        {
          data: JSON.stringify({
            ...rest,
            rankingGameId: gameId,
            id: initialValues == null ? void 0 : initialValues.id
          })
        },
        action === "create" ? {
          method: "post",
          action: `/resources/create-experience-title`
        } : {
          method: "put",
          action: `/resources/edit-experience-title`
        }
      );
      form.setFieldValue("icon", null);
      form.resetFields();
      onCancel();
    },
    [fetcher, form, onCancel]
  );
  (0, import_react6.useEffect)(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);
  (0, import_react6.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "icon") {
        form.setFieldValue("icon", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data, fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { padding: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      form_default,
      {
        form,
        initialValues,
        onFinish: handleSubmit,
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title4, { level: 4, style: { margin: 0 }, children: action === "create" ? t("add experience title") : t("edit experience title") }, void 0, false, {
            fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(divider_default, {}, void 0, false, {
            fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { gap: 15, vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              form_default.Item,
              {
                name: "icon",
                style: { margin: "0px", marginBottom: "25px", padding: "0px" },
                rules: [
                  {
                    required: true,
                    message: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginTop: "17px" }, children: t("please input game icon") }, void 0, false, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 146,
                      columnNumber: 19
                    }, this)
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { style: { marginBottom: 10 }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text4, { style: { fontWeight: 600 }, children: t("game icon") }, void 0, false, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 156,
                      columnNumber: 19
                    }, this),
                    fetcher && fetcher.state && fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(avatar_default, { size: 75, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 159,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 158,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginTop: "60px", marginBottom: "60px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: avatarStyle, className: "hover-show-parent", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        OverlayBg,
                        {
                          className: "hover-show-child",
                          style: { cursor: "pointer" },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            CameraOutlined_default,
                            {
                              style: { fontSize: 30, color: "#fff" }
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                              lineNumber: 168,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                          lineNumber: 164,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        FileUploader,
                        {
                          fetcher,
                          fieldName: "icon",
                          onUploading: setUploading,
                          onErrorFileTooLarge: handleFileTooLarge,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                            avatar_default,
                            {
                              size: 75,
                              src: `${cdnUrl}/${form.getFieldValue("icon")}`
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                              lineNumber: 179,
                              columnNumber: 27
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                          lineNumber: 172,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 163,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 162,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                    lineNumber: 154,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    FileUploader,
                    {
                      fetcher,
                      fieldName: "icon",
                      onUploading: setUploading,
                      onErrorFileTooLarge: handleFileTooLarge,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                          fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                          lineNumber: 199,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text4, { children: t("change") }, void 0, false, {
                          fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                          lineNumber: 200,
                          columnNumber: 21
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                        lineNumber: 198,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                      lineNumber: 191,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                    lineNumber: 190,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                  lineNumber: 153,
                  columnNumber: 13
                }, this)
              },
              "icon",
              false,
              {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 138,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              form_default.Item,
              {
                name: "title",
                rules: [
                  {
                    required: true,
                    message: t("please input experience title")
                  }
                ],
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text4, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("experience title") }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                  lineNumber: 218,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                  lineNumber: 217,
                  columnNumber: 15
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                  lineNumber: 224,
                  columnNumber: 13
                }, this)
              },
              "title",
              false,
              {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 207,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
            lineNumber: 137,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", style: { display: "flex" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 230,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 229,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: action === "create" ? t("create experience") : t("edit experience") }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 235,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
                lineNumber: 234,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
              lineNumber: 228,
              columnNumber: 11
            }, this),
            initialValues && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "danger", onClick: handleDeleteExperienceTitle, children: t("delete experience title") }, void 0, false, {
              fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
              lineNumber: 243,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
            lineNumber: 227,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
        lineNumber: 125,
        columnNumber: 7
      },
      this
    ),
    contextHolder,
    contextHolder2
  ] }, void 0, true, {
    fileName: "app/components/pages/User/ExperiencesTitleForm.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings.experiences.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Title: Title5, Text: Text5 } = typography_default;
var modalProps2 = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function SettingsExperiences() {
  var _a, _b;
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react8.useContext)(AppContext);
  const [messageApi, contextHolder] = notification_default.useNotification();
  const { experiencesTitle, experiences } = useLoaderData();
  const [experienceModal, setExperienceModal] = (0, import_react8.useState)(false);
  const [experienceTitleModal, setExperienceTitleModal] = (0, import_react8.useState)(false);
  const [experienceEditTitleModal, setExperienceEditTitleModal] = (0, import_react8.useState)(false);
  const [experienceLists, setExperienceLists] = (0, import_react8.useState)(experiences);
  const [experienceTitleLists, setExperienceTitleLists] = (0, import_react8.useState)(experiencesTitle);
  const [experienceTitleSortLists, setExperienceTitleSortLists] = (0, import_react8.useState)(experiencesTitle);
  const [gameId, setGameId] = (0, import_react8.useState)(
    (_a = experiencesTitle[0]) == null ? void 0 : _a.rankingGameId
  );
  const [screenSize, setScreenSize] = (0, import_react8.useState)("");
  const [titleType, setTitleType] = (0, import_react8.useState)(
    ((_b = experiencesTitle[0]) == null ? void 0 : _b.rankingGameId) ? "rankingGameId" : "experienceTitleId"
  );
  const [activeTabKey, setActiveTabKey] = (0, import_react8.useState)(0);
  const tabItems = (titleItems, items) => titleItems && titleItems.length && titleItems.map((game, index) => {
    var _a2, _b2, _c, _d;
    return {
      key: index,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          avatar_default,
          {
            src: `${cdnUrl}/${((_a2 = game.rankingGame) == null ? void 0 : _a2.icon) ? (_b2 = game.rankingGame) == null ? void 0 : _b2.icon : (game == null ? void 0 : game.icon) ? game.icon : null}`,
            size: 40,
            style: {
              margin: screenSize === "greaterThanSM" ? "0 8px" : "0 4px",
              boxShadow: scheme === "dark" ? "0px 5px 10px -2px rgba(0, 0, 0, 0.6)" : "0px 5px 10px -2px rgba(0, 0, 0, 0.2)",
              opacity: activeTabKey === index ? 1 : 0.5
            }
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 210,
            columnNumber: 11
          },
          this
        ),
        game.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            style: {
              position: "absolute",
              top: -10,
              right: 1,
              zIndex: 1e3
            },
            onClick: () => openTitleExperienceModal(game),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(avatar_default, { size: 20, style: { backgroundColor: "black" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EditOutlined_default, {}, void 0, false, {
              fileName: "app/routes/_app.settings.experiences.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.settings.experiences.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 229,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      children: fetcher.state === "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title5, { level: 4, children: ((_c = game.rankingGame) == null ? void 0 : _c.name) ? (_d = game.rankingGame) == null ? void 0 : _d.name : game.title }, void 0, false, {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        items.map((experience, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          ExperienceEntry,
          {
            data: experience,
            fetcher,
            isMyWebboard: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 252,
            columnNumber: 15
          },
          this
        ) }, index2, false, {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this)
    };
  });
  const [gameItems, setGameItems] = (0, import_react8.useState)(
    tabItems(experienceTitleLists, experienceLists)
  );
  const [editTitleValue, setEditTitleValue] = (0, import_react8.useState)();
  const [modal, contextHolder2] = modal_default.useModal();
  const [sortingModal, setSortingModal] = (0, import_react8.useState)(false);
  const { user } = (0, import_react8.useContext)(AuthContext);
  const [form] = form_default.useForm();
  const submit = useSubmit();
  const [titleForm] = form_default.useForm();
  const [titleEditForm] = form_default.useForm();
  const navigate = useNavigate();
  const operations = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    avatar_default,
    {
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PlusOutlined_default, { style: { color: "black" } }, void 0, false, {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 280,
        columnNumber: 13
      }, this),
      size: 40,
      style: { backgroundColor: "#f7f7f7", cursor: "pointer" },
      onClick: () => openExperienceTitleModal()
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.settings.experiences.tsx",
      lineNumber: 279,
      columnNumber: 5
    },
    this
  );
  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };
  const onChangeSortItems = (items) => {
    setExperienceTitleSortLists(items);
  };
  const onCloseSortingModal = () => {
    setSortingModal(false);
  };
  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      order: experienceTitleSortLists.map(
        (item, index) => item.haveOrignalId ? {
          experienceTitleId: item.id
        } : { rankingGameId: item.rankingGameId }
      )
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-my-experience-title`
      }
    );
  };
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
    setExperienceModal(true);
  };
  const openTitleExperienceModal = (value) => {
    setEditTitleValue(value);
    setExperienceEditTitleModal(true);
  };
  const openExperienceTitleModal = () => {
    setExperienceTitleModal(true);
  };
  (0, import_react8.useEffect)(() => {
    setExperienceLists(experiences && experiences.length ? experiences : []);
  }, [experiences, fetcher]);
  (0, import_react8.useEffect)(() => {
    setGameItems(tabItems(experienceTitleLists, experienceLists));
  }, [experienceLists, experienceTitleLists]);
  (0, import_react8.useEffect)(() => {
    setExperienceTitleLists(
      experiencesTitle && experiencesTitle.length ? experiencesTitle : []
    );
    setExperienceTitleSortLists(
      experiencesTitle && experiencesTitle.length ? experiencesTitle : []
    );
  }, [experiencesTitle, fetcher]);
  (0, import_react8.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.experiences) {
      setExperienceLists(fetcher.data.experiences);
    }
  }, [fetcher.data]);
  (0, import_react8.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.experiencesTitle) {
      setExperienceTitleLists(fetcher.data.experiencesTitle);
      setExperienceTitleSortLists(fetcher.data.experiencesTitle);
    }
  }, [fetcher.data]);
  const handleDeleteExperienceTitle = (0, import_react8.useCallback)(() => {
    if (fetcher.state === "idle") {
      modal.confirm({
        title: `${t(`are you sure you want to delete this expereince title?`)}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 387,
          columnNumber: 15
        }, this),
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { id: editTitleValue.id },
            {
              method: "post",
              action: `/resources/delete-experience-title`
            }
          );
          setExperienceEditTitleModal(false);
        }
      });
    }
  }, [fetcher]);
  const onChange = (key) => {
    var _a2, _b2, _c, _d, _e, _f, _g;
    const param = ((_a2 = experiencesTitle[key]) == null ? void 0 : _a2.rankingGameId) ? { rankingGameId: (_b2 = experiencesTitle[key]) == null ? void 0 : _b2.rankingGameId } : { experienceTitleId: (_c = experiencesTitle[key]) == null ? void 0 : _c.id };
    const newSearchParams = param;
    const queryString = new URLSearchParams(
      (0, import_lodash.omitBy)(newSearchParams, import_lodash.isNil)
    ).toString();
    setGameId(
      ((_d = experiencesTitle[key]) == null ? void 0 : _d.rankingGameId) ? (_e = experiencesTitle[key]) == null ? void 0 : _e.rankingGameId : (_f = experiencesTitle[key]) == null ? void 0 : _f.id
    );
    setTitleType(
      ((_g = experiencesTitle[key]) == null ? void 0 : _g.rankingGameId) ? "rankingGameId" : "experienceTitleId"
    );
    setActiveTabKey(key);
    fetcher.load(`.?${queryString}`);
  };
  (0, import_react8.useEffect)(() => {
    if (fetcher.data && fetcher.data.success && fetcher.data.experienceTitleId) {
      if (
        // fetcher.data.success &&
        // fetcher.data.success !== "create-experience-title" &&
        // fetcher.data.success !== "delete-experience-title"
        fetcher.data.success && fetcher.data.success !== "create-experience-title"
      ) {
        fetcher.load(`.?experienceTitleId=${fetcher.data.experienceTitleId}`);
        messageApi.open({
          type: "success",
          message: t(`Successfully ${fetcher.data.action} experience`),
          duration: 5,
          placement: "bottomRight"
        });
        navigate("/settings/experiences");
      }
    }
  }, [fetcher.data]);
  (0, import_react8.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        space_default,
        {
          size: 10,
          style: {
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title5, { level: 2, children: t("experiences") }, void 0, false, {
              fileName: "app/routes/_app.settings.experiences.tsx",
              lineNumber: 501,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                      fileName: "app/routes/_app.settings.experiences.tsx",
                      lineNumber: 512,
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
                fileName: "app/routes/_app.settings.experiences.tsx",
                lineNumber: 502,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 493,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        tabs_default,
        {
          items: gameItems,
          onChange,
          tabBarExtraContent: operations
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 523,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 522,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        TiltButton,
        {
          color: `${scheme}-base`,
          onClick: () => openExperienceModal(),
          style: { marginTop: 20 },
          children: [
            "+ ",
            t("add experince")
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 530,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 529,
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
          fileName: "app/routes/_app.settings.experiences.tsx",
          lineNumber: 538,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.settings.experiences.tsx",
      lineNumber: 492,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setExperienceModal(false),
        open: experienceModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          ExperienceForm,
          {
            fetcher,
            form,
            gameId,
            titleType,
            onCancel: () => setExperienceModal(false),
            action: "create"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 551,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 546,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setExperienceTitleModal(false),
        open: experienceTitleModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          ExperienceTitleForm,
          {
            fetcher,
            form: titleForm,
            gameId,
            onCancel: () => setExperienceTitleModal(false),
            action: "create"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 565,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 560,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      modal_default,
      {
        ...modalProps2,
        onCancel: () => setExperienceEditTitleModal(false),
        open: experienceEditTitleModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          ExperienceTitleForm,
          {
            fetcher,
            form: titleEditForm,
            gameId,
            onCancel: () => setExperienceEditTitleModal(false),
            action: "edit",
            initialValues: fetcher.state === "idle" && editTitleValue,
            handleDeleteExperienceTitle
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 578,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 573,
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
                fileName: "app/routes/_app.settings.experiences.tsx",
                lineNumber: 598,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings.experiences.tsx",
                lineNumber: 601,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                SortableList,
                {
                  items: experienceTitleSortLists,
                  onChange: onChangeSortItems,
                  renderItem: (item, items) => {
                    var _a2;
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                        fileName: "app/routes/_app.settings.experiences.tsx",
                        lineNumber: 609,
                        columnNumber: 22
                      }, this) }, void 0, false, {
                        fileName: "app/routes/_app.settings.experiences.tsx",
                        lineNumber: 608,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "gray", children: ((_a2 = item.rankingGame) == null ? void 0 : _a2.name) ? item.rankingGame.name : item.title }, void 0, false, {
                        fileName: "app/routes/_app.settings.experiences.tsx",
                        lineNumber: 611,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/_app.settings.experiences.tsx",
                      lineNumber: 607,
                      columnNumber: 17
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings.experiences.tsx",
                      lineNumber: 606,
                      columnNumber: 15
                    }, this);
                  }
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings.experiences.tsx",
                  lineNumber: 602,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", onClick: onCloseSortingModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings.experiences.tsx",
                  lineNumber: 622,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.experiences.tsx",
                  lineNumber: 621,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings.experiences.tsx",
                  lineNumber: 627,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings.experiences.tsx",
                  lineNumber: 626,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings.experiences.tsx",
                lineNumber: 620,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings.experiences.tsx",
            lineNumber: 593,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings.experiences.tsx",
        lineNumber: 588,
        columnNumber: 7
      },
      this
    ),
    contextHolder,
    contextHolder2
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings.experiences.tsx",
    lineNumber: 491,
    columnNumber: 5
  }, this);
}
export {
  SettingsExperiences as default
};
//# sourceMappingURL=/build/routes/_app.settings.experiences-LICYUBTT.js.map
