import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import {
  TextEditor
} from "/build/_shared/chunk-Z5XIZAK5.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  DeleteOutlined_default,
  EditOutlined_default,
  LoadingOutlined_default,
  PlusOutlined_default,
  button_default,
  checkbox_default,
  col_default,
  date_picker_default,
  divider_default,
  form_default,
  image_default,
  input_default,
  notification_default,
  require_dayjs_min,
  result_default,
  row_default,
  select_default,
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

// app/components/pages/Tournament/TournamentForm.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_react = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function TournamentForm(props) {
  const {
    fetcher,
    form,
    games,
    initialAdditionalLength,
    prizeInitialAdditionalLength,
    loading,
    submitLabel
  } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const [textEditorLoading, setTextEditorLoading] = (0, import_react.useState)(true);
  const [additionalFieldsLength, setAdditionalFieldsLength] = (0, import_react.useState)(
    initialAdditionalLength ? initialAdditionalLength : 0
  );
  const [prizeAdditionalFieldsLength, setPrizeAdditionalFieldsLength] = (0, import_react.useState)(
    prizeInitialAdditionalLength ? prizeInitialAdditionalLength : 3
  );
  const gameOptions = [];
  if ((0, import_lodash.isArray)(games) && games.length > 0) {
    games.map((game) => {
      gameOptions.push({
        label: game.name,
        value: game.id
      });
    });
  }
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const handleAddMoreFields = () => {
    setAdditionalFieldsLength((previous) => 1 + previous);
  };
  const handleAddMorePrizeFields = () => {
    setPrizeAdditionalFieldsLength((previous) => 1 + previous);
  };
  const valueZeroRemart = t("value must be higher than 0");
  const handleDeleteAdditionalField = (0, import_react.useCallback)(
    (index) => {
      if (index != additionalFieldsLength - 1 && additionalFieldsLength - 1 > 0) {
        Array(additionalFieldsLength - 1).fill("").map((field, i) => {
          if (i >= index) {
            form.setFieldsValue({
              [`additionalFields[${i}]["isRequired"]`]: form.getFieldValue(
                `additionalFields[${i + 1}]["isRequired"]`
              ),
              [`additionalFields[${i}]["type"]`]: form.getFieldValue(
                `additionalFields[${i + 1}]["type"]`
              ),
              [`additionalFields[${i}]["name"]`]: form.getFieldValue(
                `additionalFields[${i + 1}]["name"]`
              ),
              [`additionalFields[${i}]["nameEn"]`]: form.getFieldValue(
                `additionalFields[${i + 1}]["nameEn"]`
              )
            });
          }
        });
      }
      form.resetFields([
        `additionalFields[${additionalFieldsLength - 1}]["isRequired"]`,
        `additionalFields[${additionalFieldsLength - 1}]["type"]`,
        `additionalFields[${additionalFieldsLength - 1}]["name"]`,
        `additionalFields[${additionalFieldsLength - 1}]["nameEn"]`
      ]);
      setAdditionalFieldsLength((previous) => previous - 1);
    },
    [additionalFieldsLength, form]
  );
  const handleDeletePrizeAdditionalField = (0, import_react.useCallback)(
    (index) => {
      if (index != prizeAdditionalFieldsLength - 1 && prizeAdditionalFieldsLength - 1 > 0) {
        Array(prizeAdditionalFieldsLength - 1).fill("").map((field, i) => {
          if (i >= index) {
            form.setFieldsValue({
              [`prize[${i}]`]: form.getFieldValue(`prize[${i + 1}]`)
            });
          }
        });
      }
      form.resetFields([`prize[${prizeAdditionalFieldsLength - 1}]`]);
      setPrizeAdditionalFieldsLength((previous) => previous - 1);
    },
    [prizeAdditionalFieldsLength, form]
  );
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "thumbnailImageUrl") {
        form.setFieldValue("thumbnailImageUrl", fetcher.data.key);
      }
      if (fetcher.data.field === "bannerImageUrl") {
        form.setFieldValue("bannerImageUrl", fetcher.data.key);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);
  (0, import_react.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "gameId",
          rules: [
            {
              required: true,
              message: t("please select game")
            }
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("game") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(select_default, { options: gameOptions }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this)
        },
        "gameId",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 176,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "type",
          rules: [
            {
              required: true,
              message: t("please select tournament type")
            }
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("tournament type") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            select_default,
            {
              options: [
                {
                  label: t("single elimination"),
                  value: "single_elimination"
                }
              ]
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 210,
              columnNumber: 13
            },
            this
          )
        },
        "type",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 195,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, style: { display: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isOnline",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is online") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this)
        },
        "isOnline",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 221,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "name",
        rules: [
          {
            required: true,
            message: t("please input tournament name")
          }
        ],
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("tournament name") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 250,
          columnNumber: 9
        }, this)
      },
      "name",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 235,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "nameEn",
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("tournament name (English)") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 261,
          columnNumber: 9
        }, this)
      },
      "nameEn",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 252,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "discordUrl",
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("discord url") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 267,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, {}, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 272,
          columnNumber: 9
        }, this)
      },
      "discordUrl",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 263,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isKycRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is kyc required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 286,
            columnNumber: 13
          }, this)
        },
        "isKycRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 276,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isDiscordIdRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is discordId required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        },
        "isDiscordIdRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 290,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isEmailRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is email required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 309,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 314,
            columnNumber: 13
          }, this)
        },
        "isEmailRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 304,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isPhoneNumberRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is phone Number required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 328,
            columnNumber: 13
          }, this)
        },
        "isPhoneNumberRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 318,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isIgnRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is ign required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 337,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 342,
            columnNumber: 13
          }, this)
        },
        "isIgnRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 332,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "isSlipRequired",
          valuePropName: "checked",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("is slip required") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 351,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this)
        },
        "isSlipRequired",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 346,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 345,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 360,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      space_default,
      {
        direction: "vertical",
        size: 5,
        style: { display: "flex", marginBottom: 20 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { marginBottom: 10, alignItems: "baseline" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "required", style: { fontWeight: 600 }, children: [
              t("please upload thumnail image"),
              " (",
              t("recommended ratio"),
              " 2:1)"
            ] }, void 0, true, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 368,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 367,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "thumbnailImageUrl",
                rules: [
                  {
                    required: true,
                    message: `${t("please upload thumnail image")} ${t(
                      "recommended ratio"
                    )} 2:1`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  FileUploader,
                  {
                    fetcher,
                    fieldName: "thumbnailImageUrl",
                    onUploading: setUploading,
                    onErrorFileTooLarge: handleFileTooLarge,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                        lineNumber: 392,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("upload") }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                        lineNumber: 393,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                      lineNumber: 391,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                    lineNumber: 385,
                    columnNumber: 15
                  },
                  this
                )
              },
              "thumbnailImageUrl",
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 373,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 372,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 366,
            columnNumber: 9
          }, this),
          uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 400,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 400,
            columnNumber: 11
          }, this) : form && form.getFieldValue("thumbnailImageUrl") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            image_default,
            {
              preview: false,
              style: { maxWidth: 400 },
              src: `${cdnUrl}/${form.getFieldValue("thumbnailImageUrl")}`
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 402,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 408,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 361,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      space_default,
      {
        direction: "vertical",
        size: 5,
        style: { display: "flex", marginBottom: 20 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { marginBottom: 10, alignItems: "baseline" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "required", style: { fontWeight: 600 }, children: [
              t("please upload banner image"),
              " (",
              t("recommended ratio"),
              " 3:1)"
            ] }, void 0, true, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 418,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 417,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              form_default.Item,
              {
                name: "bannerImageUrl",
                rules: [
                  {
                    required: true,
                    message: `${t("please upload banner image")} ${t(
                      "recommended ratio"
                    )} 3:1`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  FileUploader,
                  {
                    fetcher,
                    fieldName: "bannerImageUrl",
                    onUploading: setUploading,
                    onErrorFileTooLarge: handleFileTooLarge,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                        lineNumber: 442,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("upload") }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                        lineNumber: 443,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                      lineNumber: 441,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                    lineNumber: 435,
                    columnNumber: 15
                  },
                  this
                )
              },
              "bannerImageUrl",
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 423,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 422,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 416,
            columnNumber: 9
          }, this),
          uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 450,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 450,
            columnNumber: 11
          }, this) : form && form.getFieldValue("bannerImageUrl") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            image_default,
            {
              preview: false,
              style: { maxWidth: 400 },
              src: `${cdnUrl}/${form.getFieldValue("bannerImageUrl")}`
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 452,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 458,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 411,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 461,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "registrationStartDate",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("registration start date") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 467,
            columnNumber: 15
          }, this),
          rules: [
            {
              required: true,
              message: `${t("please select registration start date")}`
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.resolve();
                } else {
                  if (getFieldValue("registrationEndDate")) {
                    if (value.isBefore(
                      (0, import_dayjs.default)(getFieldValue("registrationEndDate"))
                    )) {
                      return Promise.resolve();
                    }
                  } else {
                    return Promise.resolve();
                  }
                  return Promise.reject("start date must be before end date");
                }
              }
            })
          ],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            date_picker_default,
            {
              name: "registrationStartDate",
              showToday: false,
              allowClear: false,
              placeholder: "DD/MM/YYYY",
              format: "DD/MM/YYYY",
              style: { display: "flex" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 498,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 464,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 463,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "registrationEndDate",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("registration end date") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 512,
            columnNumber: 15
          }, this),
          rules: [
            {
              required: true,
              message: `${t("please select registration end date")}`
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || !getFieldValue("registrationStartDate")) {
                  return Promise.resolve();
                }
                if (value.isAfter((0, import_dayjs.default)(getFieldValue("registrationStartDate")))) {
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
              name: "registrationEndDate",
              showToday: false,
              allowClear: false,
              placeholder: "DD/MM/YYYY",
              format: "DD/MM/YYYY",
              style: { display: "flex" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 538,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 509,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 508,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 462,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "startDate",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("start date") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 554,
            columnNumber: 15
          }, this),
          rules: [
            {
              required: true,
              message: `${t("please select start date")}`
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.resolve();
                } else {
                  if (getFieldValue("endDate")) {
                    if (value.isBefore((0, import_dayjs.default)(getFieldValue("endDate")))) {
                      return Promise.resolve();
                    }
                  } else {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "start date must be before end date and at least 2 days later than today"
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
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 583,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 551,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 550,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "endDate",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("end date") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 597,
            columnNumber: 15
          }, this),
          rules: [
            {
              required: true,
              message: `${t("please select end date")}`
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
              style: { display: "flex" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 621,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 594,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 593,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 549,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 632,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "maxTeam",
          rules: [
            {
              required: true,
              message: t("please input max team")
            }
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("maximum team") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 645,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            select_default,
            {
              options: [
                {
                  value: 8,
                  label: "8"
                },
                {
                  value: 16,
                  label: "16"
                },
                {
                  value: 32,
                  label: "32"
                },
                {
                  value: 64,
                  label: "64"
                },
                {
                  value: 128,
                  label: "128"
                },
                {
                  value: 256,
                  label: "256"
                },
                {
                  value: 512,
                  label: "512"
                }
              ]
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 650,
              columnNumber: 13
            },
            this
          )
        },
        "maxTeam",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 635,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 634,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "playerCount",
          rules: [
            {
              required: true,
              message: t("please input number of required player")
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.resolve();
                }
                if (value > 0) {
                  return Promise.resolve();
                }
                return Promise.reject(valueZeroRemart);
              }
            })
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("required players") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 706,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "number" }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 711,
            columnNumber: 13
          }, this)
        },
        "playerCount",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 685,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 684,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "additionalPlayerCount",
          rules: [
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.resolve();
                }
                if (value > 0) {
                  return Promise.resolve();
                }
                return Promise.reject(valueZeroRemart);
              }
            })
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("additional player") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 732,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "number" }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 737,
            columnNumber: 13
          }, this)
        },
        "additionalPlayerCount",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 715,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 714,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 633,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 741,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "finalRoundLocation",
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("final round location") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 752,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default.TextArea, { rows: 4 }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 757,
          columnNumber: 9
        }, this)
      },
      "finalRoundLocation",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 742,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "finalRoundLocationEn",
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("final round location (English)") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 763,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default.TextArea, { rows: 4 }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 768,
          columnNumber: 9
        }, this)
      },
      "finalRoundLocationEn",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 759,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 770,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      form_default.Item,
      {
        name: "totalPrize",
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("total prize") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 781,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "number" }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 786,
          columnNumber: 9
        }, this)
      },
      "totalPrize",
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 771,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [20, 10], style: { marginTop: 15, marginBottom: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("prize additional fields") }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 790,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 789,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 788,
      columnNumber: 7
    }, this),
    prizeAdditionalFieldsLength > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: Array(prizeAdditionalFieldsLength).fill("").map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      row_default,
      {
        gutter: [10, 15],
        style: { alignItems: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginLeft: "6px", marginRight: "10px" }, children: [
            t("prizeNumber"),
            " ",
            index + 1
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 805,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: `prize[${index}]`,
              style: { marginBottom: 0 },
              rules: [
                {
                  validator: async () => {
                    if (prizeAdditionalFieldsLength > 10) {
                      return Promise.reject(
                        new Error(t("maximum 10 prizes"))
                      );
                    }
                  }
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { placeholder: t("prize") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 824,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 809,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 808,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            button_default,
            {
              danger: true,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 830,
                columnNumber: 27
              }, this),
              onClick: () => handleDeletePrizeAdditionalField(index)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 828,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 827,
            columnNumber: 17
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 800,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 796,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        button_default,
        {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 840,
            columnNumber: 17
          }, this),
          style: {
            backgroundColor: "#7a6fee",
            color: "#fff"
          },
          onClick: handleAddMorePrizeFields,
          children: t("add more prize")
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 839,
          columnNumber: 9
        },
        this
      ),
      prizeAdditionalFieldsLength > 10 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { color: "red" }, children: t("maximum 10 prizes") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 850,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 838,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 933,
      columnNumber: 7
    }, this),
    !textEditorLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "description",
          rules: [
            {
              required: true,
              message: t("please input description")
            }
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("description") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 946,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextEditor,
            {
              id: "description",
              initialValues: form.getFieldValue("description"),
              fetcher,
              onChange: (values) => form.setFieldValue("description", values)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 951,
              columnNumber: 13
            },
            this
          )
        },
        "description",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 936,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "descriptionEn",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("descriptionEn") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 964,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextEditor,
            {
              id: "descriptionEn",
              initialValues: form.getFieldValue("descriptionEn"),
              fetcher,
              onChange: (values) => form.setFieldValue("descriptionEn", values)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 969,
              columnNumber: 13
            },
            this
          )
        },
        "descriptionEn",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 960,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 935,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 980,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 980,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 982,
      columnNumber: 7
    }, this),
    !textEditorLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "qualificationRules",
          rules: [
            {
              required: true,
              message: t("please input qualification rules")
            }
          ],
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("qualification rules") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 995,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextEditor,
            {
              id: "qualificationRules",
              initialValues: form.getFieldValue("qualificationRules"),
              fetcher,
              onChange: (values) => form.setFieldValue("qualificationRules", values)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1e3,
              columnNumber: 13
            },
            this
          )
        },
        "qualificationRules",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 985,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "qualificationRulesEn",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("qualification rules (English)") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1013,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextEditor,
            {
              id: "qualificationRulesEn",
              initialValues: form.getFieldValue("qualificationRulesEn"),
              fetcher,
              onChange: (values) => form.setFieldValue("qualificationRulesEn", values)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1018,
              columnNumber: 13
            },
            this
          )
        },
        "qualificationRulesEn",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 1009,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default.Item,
        {
          name: "bracketContent",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("Upload bracket") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1031,
            columnNumber: 15
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TextEditor,
            {
              id: "bracketContent",
              initialValues: form.getFieldValue("bracketContent"),
              fetcher,
              onChange: (values) => form.setFieldValue("bracketContent", values)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1036,
              columnNumber: 13
            },
            this
          )
        },
        "bracketContent",
        false,
        {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 1027,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 984,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1047,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1047,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 20, justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("create tournament post") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 1052,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default.Item,
          {
            name: "isTournamentPost",
            valuePropName: "checked",
            style: { marginTop: "10px" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(switch_default, { defaultChecked: true }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1061,
              columnNumber: 15
            }, this)
          },
          "isTournamentPost",
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1055,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1051,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1050,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { style: { marginTop: "14px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("tournament Q&A post title can be edited on webboard") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1066,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1065,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1049,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, {}, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1071,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [20, 10], style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t("additional fields") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1074,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1073,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { style: { marginTop: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          button_default,
          {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusOutlined_default, {}, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1088,
              columnNumber: 21
            }, this),
            style: { backgroundColor: "#7a6fee", color: "#fff" },
            onClick: handleAddMoreFields,
            children: t("add more")
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1087,
            columnNumber: 13
          },
          this
        ),
        additionalFieldsLength > 10 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { color: "red" }, children: t("maximum 10 fields") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentForm.tsx",
          lineNumber: 1095,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1086,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1078,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1072,
      columnNumber: 7
    }, this),
    additionalFieldsLength > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: Array(additionalFieldsLength).fill("").map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      row_default,
      {
        gutter: [10, 15],
        style: { alignItems: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: `requirementFields[${index}]["isRequired"]`,
              valuePropName: "checked",
              style: { marginBottom: 0 },
              rules: [
                {
                  validator: async () => {
                    if (additionalFieldsLength > 10) {
                      return Promise.reject(
                        new Error(t("maximum 10 fields"))
                      );
                    }
                  }
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(checkbox_default, { children: t("required") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 1127,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1111,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: `requirementFields[${index}]["type"]`,
              style: { marginBottom: 0 },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                select_default,
                {
                  style: { width: 120 },
                  options: [
                    {
                      label: t("text input"),
                      value: "text"
                    },
                    {
                      label: t("date picker"),
                      value: "date"
                    }
                  ]
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                  lineNumber: 1135,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1131,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: `requirementFields[${index}]["name"]`,
              style: { marginBottom: 0 },
              rules: [
                {
                  required: true,
                  message: t("please input name")
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { placeholder: t("name") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 1161,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1151,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            form_default.Item,
            {
              name: `requirementFields[${index}]["nameEn"]`,
              style: { marginBottom: 0 },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { placeholder: t("name (English)") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 1169,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1165,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1164,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            button_default,
            {
              danger: true,
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentForm.tsx",
                lineNumber: 1175,
                columnNumber: 27
              }, this),
              onClick: () => handleDeleteAdditionalField(index)
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentForm.tsx",
              lineNumber: 1173,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentForm.tsx",
            lineNumber: 1172,
            columnNumber: 17
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1105,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1101,
      columnNumber: 9
    }, this),
    contextHolder,
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", style: { marginTop: 40 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1186,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Tournament/TournamentForm.tsx",
      lineNumber: 1185,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TiltButton,
      {
        color: "primary",
        onClick: () => form.submit(),
        style: { marginTop: 40 },
        children: submitLabel
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentForm.tsx",
        lineNumber: 1189,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Tournament/TournamentForm.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this);
}

export {
  TournamentForm
};
//# sourceMappingURL=/build/_shared/chunk-BLNU4UUY.js.map
