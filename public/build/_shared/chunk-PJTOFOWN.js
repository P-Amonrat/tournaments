import {
  KycForm
} from "/build/_shared/chunk-VMEWQXI4.js";
import {
  Link
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  CheckCircleOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CheckCircleFilled_default,
  DoubleRightOutlined_default,
  avatar_default,
  badge_default,
  card_default,
  col_default,
  divider_default,
  flex_default,
  modal_default,
  row_default,
  space_default,
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

// app/components/common/KycWizard.tsx
var import_react3 = __toESM(require_react());

// app/components/common/KycBenefits.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var KycBenefits = (props) => {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { children, onVerifyKyc } = props;
  const { user } = (0, import_react.useContext)(AuthContext);
  const { scheme } = (0, import_react.useContext)(AppContext);
  let cardStyle = {
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  const generalLists = [
    t("can enter buy sell page"),
    t("create post with own profile")
  ];
  const kycLists = [
    t("can create post and comment in buy sell room"),
    t("can create post and comment in anonymouse mode"),
    t("get verrified badge")
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 3, style: { margin: 0 }, children: t("KYC benefits") }, void 0, false, {
        fileName: "app/components/common/KycBenefits.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: children ? children : t("start buy sell & anonymous after complete verification") }, void 0, false, {
        fileName: "app/components/common/KycBenefits.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/KycBenefits.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { wrap: false, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, style: { paddingTop: 75, paddingBottom: 25 }, order: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        card_default,
        {
          bordered: false,
          style: { ...cardStyle, height: "100%" },
          bodyStyle: { padding: 30 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 3, style: { margin: 0, textAlign: "center" }, children: t("general user") }, void 0, false, {
              fileName: "app/components/common/KycBenefits.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
              fileName: "app/components/common/KycBenefits.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            generalLists.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 10, align: "flex-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  CheckCircleOutlined_default,
                  {
                    style: { fontSize: "1.8em", color: "#7a6fee" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/KycBenefits.tsx",
                    lineNumber: 72,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: item }, void 0, false, {
                  fileName: "app/components/common/KycBenefits.tsx",
                  lineNumber: 75,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/common/KycBenefits.tsx",
                lineNumber: 71,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
                fileName: "app/components/common/KycBenefits.tsx",
                lineNumber: 77,
                columnNumber: 19
              }, this)
            ] }, `general-${index}`, true, {
              fileName: "app/components/common/KycBenefits.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this))
          ] }, void 0, true, {
            fileName: "app/components/common/KycBenefits.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/KycBenefits.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/common/KycBenefits.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "relative", textAlign: "center", zIndex: 1 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          badge_default,
          {
            count: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleFilled_default, { style: { fontSize: 30, color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/common/KycBenefits.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            offset: [-8, 76],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              avatar_default,
              {
                size: 90,
                src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png"
              },
              void 0,
              false,
              {
                fileName: "app/components/common/KycBenefits.tsx",
                lineNumber: 91,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycBenefits.tsx",
            lineNumber: 85,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/common/KycBenefits.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          card_default,
          {
            bordered: false,
            style: {
              marginTop: -45,
              backgroundColor: "#cefb6a",
              ...cardStyle
            },
            bodyStyle: { paddingBlock: 60, paddingInline: 30 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  level: 3,
                  style: { margin: 0, textAlign: "center", color: "#231f20" },
                  children: t("verified user")
                },
                void 0,
                false,
                {
                  fileName: "app/components/common/KycBenefits.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
                fileName: "app/components/common/KycBenefits.tsx",
                lineNumber: 117,
                columnNumber: 15
              }, this),
              kycLists.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { gap: 10, align: "flex-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    CheckCircleOutlined_default,
                    {
                      style: { fontSize: "1.8em", color: "#7a6fee" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/common/KycBenefits.tsx",
                      lineNumber: 121,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { color: "#231f20" }, children: item }, void 0, false, {
                    fileName: "app/components/common/KycBenefits.tsx",
                    lineNumber: 124,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/common/KycBenefits.tsx",
                  lineNumber: 120,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
                  fileName: "app/components/common/KycBenefits.tsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, this)
              ] }, `general-${index}`, true, {
                fileName: "app/components/common/KycBenefits.tsx",
                lineNumber: 119,
                columnNumber: 17
              }, this)),
              onVerifyKyc && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                TiltButton,
                {
                  color: "dark",
                  style: { padding: "15px 30px" },
                  onClick: onVerifyKyc,
                  children: t("start verification")
                },
                void 0,
                false,
                {
                  fileName: "app/components/common/KycBenefits.tsx",
                  lineNumber: 130,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/common/KycBenefits.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycBenefits.tsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/common/KycBenefits.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/KycBenefits.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/KycBenefits.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};

// app/components/common/KycWizard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var KycWizard = (props) => {
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { children } = props;
  const { user } = (0, import_react3.useContext)(AuthContext);
  const [modal, setModal] = (0, import_react3.useState)(false);
  const [kycFormModal, setKycFormModal] = (0, import_react3.useState)(false);
  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal2) => modal2,
    styles: {
      body: { padding: "20px 30px", maxWidth: "100%", overflow: "auto" }
    }
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openKycModal = () => {
    setKycFormModal(true);
  };
  const closeKycModal = () => {
    setKycFormModal(false);
  };
  const handleOpenKycModal = () => {
    setKycFormModal(true);
    setModal(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, align: "center", justify: "center", gap: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title2, { level: 3, style: { margin: 0, textAlign: "center" }, children: t("verify identity") }, void 0, false, {
        fileName: "app/components/common/KycWizard.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { children: children ? children : t("start buy sell & anonymous after complete verification") }, void 0, false, {
        fileName: "app/components/common/KycWizard.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { style: { marginBlock: 15 }, size: 20, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          avatar_default,
          {
            size: 50,
            src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png"
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycWizard.tsx",
            lineNumber: 74,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DoubleRightOutlined_default, { style: { fontSize: 20 } }, void 0, false, {
          fileName: "app/components/common/KycWizard.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          badge_default,
          {
            count: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckCircleFilled_default, { style: { fontSize: 24, color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/common/KycWizard.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            offset: [-8, 52],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              avatar_default,
              {
                size: 65,
                src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "image/placeholder.png"
              },
              void 0,
              false,
              {
                fileName: "app/components/common/KycWizard.tsx",
                lineNumber: 89,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/common/KycWizard.tsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/common/KycWizard.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        TiltButton,
        {
          style: { padding: "15px 30px" },
          onClick: openKycModal,
          color: "primary",
          children: t("start verification")
        },
        void 0,
        false,
        {
          fileName: "app/components/common/KycWizard.tsx",
          lineNumber: 99,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        flex_default,
        {
          justify: "flex-end",
          style: { width: "100%", marginTop: 10, cursor: "pointer" },
          gap: 5,
          onClick: openModal,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { children: t("KYC benefits") }, void 0, false, {
              fileName: "app/components/common/KycWizard.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { style: { color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/common/KycWizard.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/common/KycWizard.tsx",
          lineNumber: 106,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/common/KycWizard.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(modal_default, { ...modalProps, onCancel: closeModal, open: modal, width: 800, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(KycBenefits, { onVerifyKyc: handleOpenKycModal }, void 0, false, {
      fileName: "app/components/common/KycWizard.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/KycWizard.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(modal_default, { ...modalProps, onCancel: closeKycModal, open: kycFormModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(KycForm, {}, void 0, false, {
      fileName: "app/components/common/KycWizard.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/KycWizard.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/KycWizard.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};

export {
  KycWizard
};
//# sourceMappingURL=/build/_shared/chunk-PJTOFOWN.js.map
