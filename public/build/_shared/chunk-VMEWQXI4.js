import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  checkCitizenId,
  hasStartEndEmptySpace,
  validateBirthYear
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  InfoCircleOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  LoadingOutlined_default,
  checkbox_default,
  date_picker_default,
  divider_default,
  form_default,
  image_default,
  input_default,
  modal_default,
  require_dayjs_min,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/KycForm.tsx
var import_react = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function KycForm(props) {
  const { t } = useTranslation();
  const { fetcher, form, loading } = props;
  const { user, openLoginModal } = (0, import_react.useContext)(AuthContext);
  const [laserModal, setLaserModalModal] = (0, import_react.useState)(false);
  const handleSubmit = (values) => {
    const { dateOfBirth, acceptWhalletConsent, ...value } = values;
    const originalYear = (0, import_dayjs.default)(dateOfBirth).year();
    const buddistYear = originalYear + 543;
    const newDateOfBirth = (0, import_dayjs.default)(dateOfBirth).year(buddistYear);
    if (!user) {
      openLoginModal();
      return;
    }
    fetcher.submit(
      {
        action: "submit-kyc",
        data: JSON.stringify({
          ...value,
          birthday: (0, import_dayjs.default)(newDateOfBirth).format("YYYY-MM-DD")
        })
      },
      { method: "post" }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    form_default,
    {
      form,
      onFinish: handleSubmit,
      initialValues: user && user.profile,
      layout: "vertical",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t("KYC info") }, void 0, false, {
          fileName: "app/components/common/KycForm.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
          fileName: "app/components/common/KycForm.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "firstName",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("first name") }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            normalize: (value) => value.trim(),
            rules: [
              {
                required: true,
                message: `${t("please input firstname")}`
              },
              {
                pattern: /^[ก-๙ ]+$/,
                message: `${t("invalid thai pattern")}`
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value.length) {
                    if (hasStartEndEmptySpace(value)) {
                      return Promise.reject(
                        new Error(`${t("first or last character can't be space")}`)
                      );
                    }
                  }
                  return Promise.resolve();
                }
              })
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 104,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 70,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "lastName",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("last name") }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this),
            colon: false,
            normalize: (value) => value.trim(),
            rules: [
              {
                required: true,
                message: `${t("please input lastname")}`
              },
              {
                pattern: /^[ก-๙ ]+$/,
                message: `${t("invalid thai pattern")}`
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value.length) {
                    if (hasStartEndEmptySpace(value)) {
                      return Promise.reject(
                        new Error(`${t("first or last character can't be space")}`)
                      );
                    }
                  }
                  return Promise.resolve();
                }
              })
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 141,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 106,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "dateOfBirth",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("date of birth") }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 146,
              columnNumber: 11
            }, this),
            style: { textAlign: "left" },
            rules: [
              {
                required: true,
                message: `${t("please select date of birth")}`
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  } else {
                    if (!validateBirthYear) {
                      return Promise.reject(
                        new Error(`${t("you're underage, please check birthyear")}`)
                      );
                    }
                  }
                  return Promise.resolve();
                }
              })
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              date_picker_default,
              {
                name: "dateOfBirth",
                disabledDate: (current) => current && current > (0, import_dayjs.default)().endOf("day"),
                showToday: false,
                allowClear: false,
                placeholder: "DD/MM/YYYY",
                format: "DD/MM/YYYY",
                style: { display: "flex" }
              },
              void 0,
              false,
              {
                fileName: "app/components/common/KycForm.tsx",
                lineNumber: 172,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 143,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "idCard",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("citizen id") }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this),
            rules: [
              {
                required: true,
                message: `${t("please input citizen id")}`
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (!checkCitizenId(value)) {
                    return Promise.reject(
                      new Error(`${t("please input correct citizen id")}`)
                    );
                  }
                  return Promise.resolve();
                }
              })
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "text", maxLength: 13, minLength: 13 }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 209,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 182,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "idCardLaser",
            labelCol: { span: 24 },
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("laser code") }, void 0, false, {
                fileName: "app/components/common/KycForm.tsx",
                lineNumber: 216,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                InfoCircleOutlined_default,
                {
                  style: { cursor: "pointer", color: "#9052ee" },
                  onClick: () => setLaserModalModal(true)
                },
                void 0,
                false,
                {
                  fileName: "app/components/common/KycForm.tsx",
                  lineNumber: 219,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            rules: [
              {
                required: true,
                message: `${t("please input laser code")}`
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }
                  if (value.length) {
                    if (!value.substring(0, 2).toLowerCase().match(/^[a-z]+$/i)) {
                      return Promise.reject(
                        new Error(
                          `"${value.substring(0, 2)}" ${t(
                            "first 2 characters must be alphabet"
                          )}`
                        )
                      );
                    }
                    if (!value.substring(2).toLowerCase().match(/^[0-9]+$/i)) {
                      return Promise.reject(
                        new Error(`${t("last 10 characters must be numbers")}`)
                      );
                    }
                    if (value.length < 12) {
                      return Promise.reject(
                        new Error(`${t("invalid laser idcard length")}`)
                      );
                    }
                    if (value.indexOf("-") > -1) {
                      return Promise.reject(new Error(`${t("please remove -")}`));
                    }
                  }
                  return Promise.resolve();
                }
              })
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { maxLength: 12, placeholder: `${t("please do not input '-'")}` }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 274,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 211,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "acceptWhalletConsent",
            valuePropName: "checked",
            rules: [
              {
                required: true,
                message: `${t("please agree to this field")}`
              }
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(checkbox_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: t("you agree to allow whallet to send KYC data to DOPA") }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 288,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 287,
              columnNumber: 9
            }, this)
          },
          "acceptWhalletConsent",
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 276,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          modal_default,
          {
            open: laserModal,
            closable: false,
            footer: false,
            style: { display: "flex", justifyContent: "center" },
            onCancel: () => setLaserModalModal(false),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(image_default, { width: 400, preview: false, src: "/image/laser.png" }, void 0, false, {
              fileName: "app/components/common/KycForm.tsx",
              lineNumber: 300,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 293,
            columnNumber: 7
          },
          this
        ),
        loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
          fileName: "app/components/common/KycForm.tsx",
          lineNumber: 304,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/common/KycForm.tsx",
          lineNumber: 303,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          TiltButton,
          {
            color: "primary",
            onClick: () => form.submit(),
            style: { marginTop: 20 },
            children: t("submit")
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycForm.tsx",
            lineNumber: 307,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/KycForm.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  );
}

export {
  KycForm
};
//# sourceMappingURL=/build/_shared/chunk-VMEWQXI4.js.map
