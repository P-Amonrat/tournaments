import {
  Loading
} from "/build/_shared/chunk-O2SDKC5O.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  getRandomInt
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  col_default,
  divider_default,
  flex_default,
  image_default,
  list_default,
  modal_default,
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
  useNavigation
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.campaign._index.tsx
var import_node = __toESM(require_node());
var import_react6 = __toESM(require_react());

// app/components/pages/Campaign/CampaignActions.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal,
  styles: {
    body: { padding: "3px 5px", maxWidth: "100%" }
  }
};
function CampaignActions(props) {
  const { t } = useTranslation();
  const { onSubmit } = props;
  const [rareModal, setRareModal] = (0, import_react.useState)(false);
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const userAgent = navigator.userAgent || "";
    const isMobile2 = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobile2);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        // position: "relative",
        maxWidth: 700,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-2.png')`,
        backgroundSize: "cover",
        borderRadius: 30
      },
      bodyStyle: {
        paddingBlock: !isMobile ? 120 : 70,
        paddingInline: "6%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          flex_default,
          {
            vertical: true,
            justify: "center",
            gap: 50,
            style: { paddingInline: "7.5%", textAlign: "center" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  style: {
                    margin: 0,
                    color: "inherit",
                    fontSize: !isMobile ? void 0 : 20
                  },
                  level: 2,
                  children: t("finished quiz already, let's see who you look alike") + "!"
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                  lineNumber: 68,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                TiltButton,
                {
                  color: "pink",
                  onClick: () => onSubmit(true),
                  style: {
                    width: "100%",
                    fontSize: !isMobile ? 24 : 19,
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          top: -60,
                          right: 0,
                          width: "65px",
                          height: "65px"
                        },
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          image_default,
                          {
                            src: "/image/CTRLG-frame-reward.png",
                            alt: "Button Image",
                            preview: false,
                            onClick: (e) => {
                              e.stopPropagation();
                              setRareModal(true);
                            }
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                      },
                      this
                    ),
                    t("connect with CTRL G account to get reward and display result")
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                  lineNumber: 79,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { plain: true, style: { marginBlock: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  style: {
                    margin: 0,
                    color: "#fff"
                  },
                  level: 5,
                  children: t("or")
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                  lineNumber: 112,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                lineNumber: 111,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                card_default,
                {
                  onClick: () => onSubmit(false),
                  style: {
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                    borderRadius: 40,
                    cursor: "pointer"
                  },
                  bodyStyle: { padding: 10 },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: 24, color: "#fff" }, children: t("display result immediately") }, void 0, false, {
                    fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                  lineNumber: 122,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
            lineNumber: 62,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          modal_default,
          {
            ...modalProps,
            onCancel: () => setRareModal(false),
            open: rareModal,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                style: {
                  justifyContent: "center",
                  textAlign: "center"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, children: t("have a chance to get rare card") }, void 0, false, {
                    fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(image_default, { src: "/image/CTRLG-frame-reward.png", width: "30%" }, void 0, false, {
                    fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "div",
                    {
                      style: {
                        margin: "0 50px",
                        display: "flex",
                        flexDirection: "column"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          Title,
                          {
                            level: 5,
                            style: {
                              marginTop: "10px",
                              textAlign: "left",
                              textDecoration: "underline"
                            },
                            children: t("rare rules")
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, { style: { marginLeft: "25px", textAlign: "center" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("1. rule rare card") }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 169,
                            columnNumber: 17
                          }, this) }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("2. rule rare card") }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                          }, this) }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("3. rule rare card") }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 175,
                            columnNumber: 17
                          }, this) }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 174,
                            columnNumber: 15
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { marginRight: "25px" }, children: t("4. rule rare card") }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 178,
                            columnNumber: 17
                          }, this) }, void 0, false, {
                            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                          lineNumber: 167,
                          columnNumber: 13
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                      lineNumber: 150,
                      columnNumber: 11
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    TiltButton,
                    {
                      color: "primary",
                      onClick: () => setRareModal(false),
                      style: { marginTop: "10px" },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: t("close") }, void 0, false, {
                        fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                      lineNumber: 184,
                      columnNumber: 11
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/Campaign/CampaignActions.tsx",
                lineNumber: 142,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Campaign/CampaignActions.tsx",
            lineNumber: 137,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Campaign/CampaignActions.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Campaign/CampaignQuiz.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Title: Title2 } = typography_default;
function CampaignQuiz(props) {
  const { onSubmit } = props;
  const { t } = useTranslation();
  const [step, setStep] = (0, import_react2.useState)(0);
  const [values, setValues] = (0, import_react2.useState)("");
  const [isMobile, setIsMobile] = (0, import_react2.useState)(false);
  const questions = [
    {
      choices: [
        {
          label: "\u0E40\u0E25\u0E48\u0E19\u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27",
          value: 0
        },
        {
          label: "\u0E40\u0E25\u0E48\u0E19\u0E01\u0E31\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19",
          value: 1
        }
      ]
    },
    {
      choices: [
        {
          label: "\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E25",
          value: 0
        },
        {
          label: "\u0E40\u0E19\u0E49\u0E19\u0E42\u0E22\u0E19",
          value: 1
        }
      ]
    },
    {
      choices: [
        {
          label: "\u0E1B\u0E37\u0E19",
          value: 0
        },
        {
          label: "Spike",
          value: 1
        }
      ]
    },
    {
      choices: [
        {
          label: "\u0E08\u0E35\u0E1A\u0E01\u0E48\u0E2D\u0E19",
          value: 0
        },
        {
          label: "\u0E42\u0E14\u0E19\u0E08\u0E35\u0E1A",
          value: 1
        }
      ]
    },
    {
      label: "Q5 : Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      choices: [
        {
          label: "\u0E14\u0E33\u0E14\u0E49\u0E32\u0E19",
          value: 0
        },
        {
          label: "\u0E14\u0E33\u0E40\u0E07\u0E32",
          value: 1
        }
      ]
    }
  ];
  const handleSelect = (0, import_react2.useCallback)(
    (value) => {
      const newValues = `${values}${value.toString()}`;
      setValues(newValues);
      setStep((prev) => prev + 1);
      if (step == 4) {
        onSubmit(newValues);
      }
    },
    [values]
  );
  (0, import_react2.useEffect)(() => {
    const userAgent = navigator.userAgent || "";
    const isMobile2 = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobile2);
  }, []);
  return values.length < 5 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        position: "relative",
        maxWidth: 800,
        width: "80%",
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-1.png')`,
        backgroundSize: "cover",
        borderRadius: 30
      },
      bodyStyle: {
        paddingBlock: !isMobile ? 120 : 70,
        paddingInline: "6%"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(flex_default, { vertical: true, justify: "center", gap: 10, style: { textAlign: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Title2,
          {
            style: {
              margin: 0,
              color: "inherit",
              fontFamily: "A4SPEED",
              fontSize: !isMobile ? 50 : 35
            },
            level: 1,
            children: `${t("Question")} ${step + 1}`
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
            lineNumber: 122,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { gutter: [50, 30], style: { marginTop: !isMobile ? 40 : 3 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            flex_default,
            {
              align: "center",
              justify: "center",
              style: {
                minHeight: !isMobile ? 200 : 150,
                borderRadius: 20,
                backgroundImage: "url('/image/choice-a.jpg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                cursor: "pointer"
              },
              onClick: () => handleSelect(0),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Title2,
                {
                  style: {
                    margin: 0,
                    // fontFamily: "A4SPEED",
                    color: "#fff"
                  },
                  level: 1,
                  children: questions[step].choices[0].label
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
                  lineNumber: 148,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
              lineNumber: 135,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
            lineNumber: 134,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { span: 24, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            flex_default,
            {
              align: "center",
              justify: "center",
              style: {
                minHeight: !isMobile ? 200 : 150,
                borderRadius: 20,
                backgroundImage: "url('/image/choice-b.jpg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                cursor: "pointer"
              },
              onClick: () => handleSelect(1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Title2,
                {
                  style: {
                    margin: 0,
                    // fontFamily: "A4SPEED",
                    color: "#fff"
                  },
                  level: 1,
                  children: questions[step].choices[1].label
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
                  lineNumber: 174,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
              lineNumber: 161,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
      lineNumber: 103,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
    fileName: "app/components/pages/Campaign/CampaignQuiz.tsx",
    lineNumber: 190,
    columnNumber: 5
  }, this);
}

// app/components/pages/Campaign/CampaignStart.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Title: Title3 } = typography_default;
function CampaignStart(props) {
  const { onNext } = props;
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = (0, import_react4.useState)(false);
  const navigation = useNavigation();
  (0, import_react4.useEffect)(() => {
    const userAgent = navigator.userAgent || "";
    const isMobile2 = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobile2);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    card_default,
    {
      bordered: false,
      style: {
        position: "relative",
        maxWidth: 700,
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-0.png')`,
        backgroundSize: "cover",
        borderRadius: 30
      },
      bodyStyle: {
        paddingBlock: !isMobile ? 60 : void 0,
        paddingInline: "6%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { vertical: true, justify: "center", gap: 20, style: { textAlign: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            image_default,
            {
              src: "/image/logo.png",
              preview: false,
              width: !isMobile ? 240 : 200,
              wrapperStyle: { marginInline: "auto", marginBottom: 20 }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Campaign/CampaignStart.tsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Title3,
            {
              style: {
                margin: 0,
                color: "inherit",
                fontFamily: "A4SPEED",
                fontSize: !isMobile ? 50 : 35
              },
              level: 1,
              children: t("Valo Quiz")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Campaign/CampaignStart.tsx",
              lineNumber: 52,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Title3,
            {
              style: {
                margin: 0,
                color: "inherit",
                lineHeight: 1.5,
                fontSize: 24
              },
              level: 2,
              children: t("who you look alike in Valorant, let's create and share")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Campaign/CampaignStart.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/Campaign/CampaignStart.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "center", style: { paddingInline: 50, marginTop: 40 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          TiltButton,
          {
            color: "pink",
            onClick: onNext,
            style: {
              width: "100%",
              fontSize: !isMobile ? 32 : 27
            },
            children: [
              t("start quiz"),
              "!"
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Campaign/CampaignStart.tsx",
            lineNumber: 76,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/Campaign/CampaignStart.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        navigation.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(OverlayBg, { style: { position: "fixed", zIndex: 100 }, opacity: 0.7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loading, {}, void 0, false, {
          fileName: "app/components/pages/Campaign/CampaignStart.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Campaign/CampaignStart.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Campaign/CampaignStart.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app.campaign._index.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2B\u0E32\u0E09\u0E32\u0E22\u0E32 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E0A\u0E23\u0E4C\u0E43\u0E2B\u0E49\u0E42\u0E25\u0E01\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32x\u0E23\u0E36\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23 !"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: "\u0E17\u0E32\u0E22\u0E19\u0E34\u0E2A\u0E31\u0E22 ...\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23\u0E40\u0E27\u0E25\u0E32\u0E40\u0E25\u0E48\u0E19 Valorant | Ctrlg.gg"
    },
    {
      property: "og:image",
      content: "https://d2007awoau332v.cloudfront.net/assets/quiz.jpg"
    },
    {
      property: "og:image:width",
      content: "200"
    },
    {
      property: "og:image:height",
      content: "200"
    },
    {
      property: "og:description",
      content: "\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2B\u0E32\u0E09\u0E32\u0E22\u0E32 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E0A\u0E23\u0E4C\u0E43\u0E2B\u0E49\u0E42\u0E25\u0E01\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32x\u0E23\u0E36\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E04\u0E23 !"
    }
  ];
};
function CampaignIndex() {
  const fetcher = useFetcher();
  const { user, openLoginModal } = (0, import_react6.useContext)(AuthContext);
  const [step, setStep] = (0, import_react6.useState)(0);
  const [toSubmit, setToSubmit] = (0, import_react6.useState)("");
  const next = () => {
    setStep((prev) => prev + 1);
  };
  const handleQuizFinished = (0, import_react6.useCallback)(
    (values) => {
      if (user) {
        fetcher.submit(
          {
            campaignResult: JSON.stringify({
              result: values,
              character: getRandomInt(1, 16),
              powers: [
                getRandomInt(1, 5),
                getRandomInt(1, 5),
                getRandomInt(1, 5),
                getRandomInt(1, 5)
              ],
              alias: getRandomInt(1, 20)
            }),
            redirection: true
          },
          { method: "post" }
        );
      } else {
        setToSubmit(values);
        next();
      }
    },
    [user]
  );
  const handleSubmitQuiz = (0, import_react6.useCallback)(
    (withLogin) => {
      if (withLogin) {
        openLoginModal();
      }
      fetcher.submit(
        {
          campaignResult: JSON.stringify({
            result: toSubmit,
            character: getRandomInt(1, 16),
            powers: [
              getRandomInt(1, 5),
              getRandomInt(1, 5),
              getRandomInt(1, 5),
              getRandomInt(1, 5)
            ],
            alias: getRandomInt(1, 20)
          }),
          redirection: !withLogin || user ? true : false
        },
        { method: "post" }
      );
    },
    [toSubmit, user]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: step == 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CampaignQuiz, { onSubmit: handleQuizFinished }, void 0, false, {
    fileName: "app/routes/_app.campaign._index.tsx",
    lineNumber: 143,
    columnNumber: 9
  }, this) : step == 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CampaignActions, { onSubmit: handleSubmitQuiz }, void 0, false, {
    fileName: "app/routes/_app.campaign._index.tsx",
    lineNumber: 145,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CampaignStart, { onNext: next }, void 0, false, {
    fileName: "app/routes/_app.campaign._index.tsx",
    lineNumber: 147,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_app.campaign._index.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
export {
  CampaignIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.campaign._index-4UJHZG5J.js.map
