import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  flex_default,
  list_default,
  modal_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  Link
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Webboard/WebboardTags.tsx
var import_react2 = __toESM(require_react());

// app/components/common/BuySellAgreement.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var BuySellAgreement = (props) => {
  const { t } = useTranslation();
  const { onCancel } = props;
  const handleAcceptAgreemnet = () => {
    onCancel();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 3, style: { margin: 0 }, children: t("Buy Sell rules") }, void 0, false, {
      fileName: "app/components/common/BuySellAgreement.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t(
        "1. Membership posting in the buy-sell section is reserved exclusively for users who have completed the KYC process."
      ) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t(
        "2. Posting any form of direct sales business, chain sharing, online work, or anything causing harm or disturbance to others is strictly prohibited."
      ) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
        t(
          "3. Before making any transactions, please check the seller\u2019s history at"
        ),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "https://www.blacklistseller.com/",
            target: "_blank",
            style: { color: "#39A7FF" },
            children: "https://www.blacklistseller.com/"
          },
          void 0,
          false,
          {
            fileName: "app/components/common/BuySellAgreement.tsx",
            lineNumber: 58,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
        t("4. In case of fraud, report the incident online at"),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "https://thaipoliceonline.com",
            target: "_blank",
            style: { color: "#39A7FF" },
            children: "https://thaipoliceonline.com"
          },
          void 0,
          false,
          {
            fileName: "app/components/common/BuySellAgreement.tsx",
            lineNumber: 71,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/common/BuySellAgreement.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        t(
          "and contact platform administrators for information about the fraudulent party."
        )
      ] }, void 0, true, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t(
        "5. Contact platform administrators via the Facebook Page ctrl g"
      ) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t(
        "Note: KYC refers to the Know Your Customer process, a standard in the financial industry to verify the identity of customers."
      ) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BuySellAgreement.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/BuySellAgreement.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: handleAcceptAgreemnet, children: t("close") }, void 0, false, {
      fileName: "app/components/common/BuySellAgreement.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/BuySellAgreement.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/BuySellAgreement.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
};

// app/components/common/WebboardUsageRules.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var WebboardUsageRules = (props) => {
  const { t } = useTranslation();
  const { onCancel } = props;
  const rules = [
    "weebboard usage rule 1",
    "weebboard usage rule 2",
    "weebboard usage rule 3",
    "weebboard usage rule 4",
    "weebboard usage rule 5",
    "weebboard usage rule 6",
    "weebboard usage rule 7",
    "weebboard usage rule 8",
    "weebboard usage rule 9",
    "weebboard usage rule 10",
    "weebboard usage rule 11",
    "weebboard usage rule 12",
    "weebboard usage rule 13"
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title2, { level: 3, style: { margin: 0 }, children: t("Webboard usage rules") }, void 0, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(list_default, { children: rules.map((rule, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text2, { children: t(rule) }, void 0, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, `rule-${index}`, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TiltButton, { color: "primary", onClick: onCancel, children: t("close") }, void 0, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/common/WebboardUsageRules.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/WebboardUsageRules.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};

// app/components/pages/Webboard/WebboardTags.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text3, Title: Title3 } = typography_default;
function WebboardTags(props) {
  const { scheme } = (0, import_react2.useContext)(AppContext);
  const { data, fetcher, mobileStyle } = props;
  const { t } = useTranslation();
  const [buySellModal, setBuySellModal] = (0, import_react2.useState)(false);
  const [webboardRules, setWebboardRules] = (0, import_react2.useState)(false);
  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal) => modal,
    styles: {
      body: { padding: "20px 30px" }
    }
  };
  const openWebboardRules = () => {
    setWebboardRules(true);
  };
  const closeWebboardRules = () => {
    setWebboardRules(false);
  };
  const openBuySellModal = () => {
    setBuySellModal(true);
  };
  const closeBuySellModal = () => {
    setBuySellModal(false);
  };
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success && fetcher.data.success === "accept-buy-sell-agreement" && fetcher.state === "idle") {
      setBuySellModal(false);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { vertical: true, gap: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        card_default,
        {
          bordered: false,
          style: {
            backgroundColor: mobileStyle ? "transparent" : scheme === "light" ? "#ebebeb" : "#0f0e0e",
            borderRadius: 10,
            boxShadow: "none"
          },
          bodyStyle: {
            padding: mobileStyle ? 0 : 30
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title3, { level: mobileStyle ? 5 : 4, style: { marginTop: 0 }, children: t("popular tags") }, void 0, false, {
              fileName: "app/components/pages/Webboard/WebboardTags.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            data.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/tags/${tag.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              space_default,
              {
                direction: "vertical",
                size: 5,
                style: { display: "flex", cursor: "pointer" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text3,
                    {
                      style: {
                        fontStyle: "italic",
                        fontWeight: 500,
                        fontSize: "1.2em"
                      },
                      children: [
                        "#",
                        tag.name
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
                      lineNumber: 89,
                      columnNumber: 19
                    },
                    this
                  ),
                  !mobileStyle && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text3, { children: `${tag.count} ${t("posts")}` }, void 0, false, {
                    fileName: "app/components/pages/Webboard/WebboardTags.tsx",
                    lineNumber: 98,
                    columnNumber: 36
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/Webboard/WebboardTags.tsx",
                lineNumber: 84,
                columnNumber: 17
              },
              this
            ) }, tag.name, false, {
              fileName: "app/components/pages/Webboard/WebboardTags.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this))
          ] }, void 0, true, {
            fileName: "app/components/pages/Webboard/WebboardTags.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Webboard/WebboardTags.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        flex_default,
        {
          vertical: true,
          gap: 10,
          justify: "center",
          style: { textAlign: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Text3,
              {
                style: { cursor: "pointer", fontWeight: 600 },
                onClick: openBuySellModal,
                children: t("buy sell conditions")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardTags.tsx",
                lineNumber: 110,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Text3,
              {
                style: { cursor: "pointer", fontWeight: 600 },
                onClick: openWebboardRules,
                children: t("webboard usage rules")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Webboard/WebboardTags.tsx",
                lineNumber: 116,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/Webboard/WebboardTags.tsx",
          lineNumber: 104,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(modal_default, { ...modalProps, onCancel: closeBuySellModal, open: buySellModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BuySellAgreement, { fetcher, onCancel: closeBuySellModal }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(modal_default, { ...modalProps, onCancel: closeWebboardRules, open: webboardRules, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WebboardUsageRules, { onCancel: closeWebboardRules }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Webboard/WebboardTags.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Webboard/WebboardTags.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

export {
  WebboardTags
};
//# sourceMappingURL=/build/_shared/chunk-WSOOSU5J.js.map
