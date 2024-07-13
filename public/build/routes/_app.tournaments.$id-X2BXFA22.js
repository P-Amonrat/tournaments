import {
  ImageSelector
} from "/build/_shared/chunk-KKNWOUET.js";
import {
  AffixMenu
} from "/build/_shared/chunk-N2TOCZNK.js";
import {
  TournamentTeam
} from "/build/_shared/chunk-HJN2TGDW.js";
import "/build/_shared/chunk-JFV4VOHN.js";
import {
  InlineAvatar
} from "/build/_shared/chunk-A5OSP4DA.js";
import {
  KycForm
} from "/build/_shared/chunk-VMEWQXI4.js";
import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import "/build/_shared/chunk-C3CQI34N.js";
import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  TournamentGrid
} from "/build/_shared/chunk-6DQQZVHB.js";
import {
  TournamentDate
} from "/build/_shared/chunk-YUNIXQN2.js";
import {
  Author
} from "/build/_shared/chunk-B3LWZSUK.js";
import "/build/_shared/chunk-CF33ONIU.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  renderData,
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
  ArrowLeftOutlined_default,
  CameraOutlined_default,
  InfoCircleOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  EditOutlined_default,
  ExclamationCircleFilled_default,
  LoadingOutlined_default,
  avatar_default,
  button_default,
  card_default,
  checkbox_default,
  col_default,
  date_picker_default,
  divider_default,
  form_default,
  image_default,
  input_default,
  modal_default,
  notification_default,
  require_dayjs_min,
  result_default,
  row_default,
  skeleton_default,
  space_default,
  theme_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useMatches,
  useRevalidator
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tournaments.$id.tsx
var import_react7 = __toESM(require_react());
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());

// app/components/pages/Tournament/TournamentHero.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var { useToken } = theme_default;
function TournamentHero(props) {
  const { token } = useToken();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const { locale } = (0, import_react.useContext)(AppContext);
  const { data, loading } = props;
  const cardStyle = {
    position: "relative",
    display: "flex",
    height: 350,
    flexDirection: "column",
    borderRadius: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: data && data.bannerImageUrl ? `url("${cdnUrl}/${data.bannerImageUrl}")` : void 0
  };
  const bodyStyle = {
    display: "flex",
    flex: "auto",
    alignItems: "end",
    width: "100%",
    paddingInline: "3.5%",
    maxWidth: 1440,
    marginInline: "auto",
    paddingBlock: 20
  };
  const overlayStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { bordered: false, style: cardStyle, bodyStyle, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: overlayStyle }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentHero.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentHero.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 15, style: { display: "flex", position: "relative" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          avatar_default,
          {
            size: 72,
            src: data.game.iconUrl ? `${cdnUrl}/${data.game.iconUrl}` : "",
            children: data.game.name
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, style: { margin: 0, color: "#fff" }, children: renderData(data, "name", locale) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { style: { color: "#fff" }, gutter: [15, 10], wrap: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              TournamentDate,
              {
                startDate: data.startDate,
                endDate: data.endDate
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                lineNumber: 86,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentHero.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Author,
              {
                displayImage: data.organizer && data.organizer.displayImage ? `${cdnUrl}/${data.organizer.displayImage}` : void 0,
                children: data.organizer.displayName
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                lineNumber: 92,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentHero.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Tournament/TournamentHero.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentHero.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentHero.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: { paddingInline: "3.5%", maxWidth: 1440, marginInline: "auto" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          card_default,
          {
            bodyStyle: { padding: "10px 15px" },
            bordered: false,
            style: {
              borderRadius: 10,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              backgroundColor: token.colorBgBase
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              space_default,
              {
                style: { display: "flex", justifyContent: "space-between" },
                wrap: true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("opening registration") }, void 0, false, {
                      fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                      lineNumber: 125,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600 }, children: (0, import_dayjs.default)(data.registrationStartDate).format("DD MMM YYYY") }, void 0, false, {
                      fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                      lineNumber: 126,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                    lineNumber: 124,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 5, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("participants") }, void 0, false, {
                      fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                      lineNumber: 131,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      card_default,
                      {
                        style: { borderRadius: 6, backgroundColor: "transparent" },
                        bodyStyle: { padding: "0 10px" },
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 4, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "1.5em" }, children: data.maxTeam.toLocaleString() }, void 0, false, {
                            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                            lineNumber: 137,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "0.9em" }, children: t("teams") }, void 0, false, {
                            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                            lineNumber: 140,
                            columnNumber: 19
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                          lineNumber: 136,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                        lineNumber: 132,
                        columnNumber: 15
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                    lineNumber: 130,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/Tournament/TournamentHero.tsx",
                lineNumber: 120,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentHero.tsx",
            lineNumber: 110,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Tournament/TournamentHero.tsx",
        lineNumber: 107,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/pages/Tournament/TournamentHero.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/components/pages/Tournament/TournamentInvitationAlert.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TournamentInvitationAlert(props) {
  const { data, onClick } = props;
  const { t } = useTranslation();
  if (!data || data.length <= 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    card_default,
    {
      bodyStyle: { padding: "10px 15px" },
      bordered: false,
      style: {
        backgroundColor: "#7164f4",
        color: "#fff",
        border: 0,
        marginTop: 30
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { style: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InfoCircleOutlined_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentInvitationAlert.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          `${t("tournament invitation to")} "${data.name}"`
        ] }, void 0, true, {
          fileName: "app/components/pages/Tournament/TournamentInvitationAlert.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          button_default,
          {
            type: "primary",
            size: "middle",
            style: { color: "#000", borderRadius: 4 },
            onClick: (e) => onClick(data),
            children: t("join")
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentInvitationAlert.tsx",
            lineNumber: 36,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentInvitationAlert.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/Tournament/TournamentInvitationAlert.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentSingleMenu.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var TournamentSingleMenu = (isOrganizer) => {
  const { t } = useTranslation();
  const menus = [
    {
      link: ".",
      level: 2,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("detail_1") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentSingleMenu.tsx",
        lineNumber: 11,
        columnNumber: 14
      }, this)
    },
    {
      link: "schedule",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("tournament schedule") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentSingleMenu.tsx",
        lineNumber: 15,
        columnNumber: 14
      }, this)
    },
    {
      link: "teams",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("participants") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentSingleMenu.tsx",
        lineNumber: 19,
        columnNumber: 14
      }, this)
    },
    {
      link: "webboard",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("tournament board") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentSingleMenu.tsx",
        lineNumber: 23,
        columnNumber: 14
      }, this)
    }
  ];
  return { menus };
};

// app/components/pages/Tournament/TournamentTeamForm.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title: Title2 } = typography_default;
var { useToken: useToken2 } = theme_default;
var randomNumber = Math.floor(Math.random() * 8) + 1;
function TournamentTeamForm(props) {
  const { form, isSlipRequired, onCancel, onSubmit, submitLabel, team } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { token } = useToken2();
  const displayImageField = "logo";
  const [previewImage, setPreviewImage] = (0, import_react3.useState)();
  const [isContactPerson, setIsContactPerson] = (0, import_react3.useState)(
    team && team.isContactPerson ? team.isContactPerson : false
  );
  const [uploading, setUploading] = (0, import_react3.useState)(false);
  const [isSlip, setIsSlip] = (0, import_react3.useState)(false);
  const [previewUploadImage, setPreviewUploadImage] = (0, import_react3.useState)();
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
  const handleContactPersonChange = (e) => {
    setIsContactPerson(e.target.checked);
  };
  const handleSelectPresetImage = (0, import_react3.useCallback)(
    (image) => {
      form.setFieldValue(displayImageField, image.key);
      setPreviewImage(image.url);
    },
    [form]
  );
  const displayPresetImages = Array(8).fill("").map(
    (arg, index) => `${cdnUrl}/profile-teams/profile-team-${index + 1}.jpg`
  );
  (0, import_react3.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "slipImageUrl") {
        form.setFieldValue("slipImageUrl", fetcher.data.key);
        setIsSlip(fetcher.data.isSlip);
        setPreviewUploadImage(fetcher.data.previewImage);
      }
      setUploading(false);
    }
  }, [form, fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    form_default,
    {
      form,
      onFinish: onSubmit,
      initialValues: team,
      layout: "vertical",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title2, { level: 4, style: { margin: 0 }, children: t(team ? "team info" : "create team") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
          lineNumber: 119,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
          lineNumber: 122,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 0, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            form_default.Item,
            {
              name: displayImageField,
              initialValue: `profile-teams/profile-team-${randomNumber}.jpg`,
              style: { margin: "0px", marginBottom: "25px", padding: "0px" },
              rules: [
                {
                  required: true,
                  message: t("please input team logo")
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { style: { marginBottom: 10 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", size: 5, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { style: { fontWeight: 600 }, children: t("team logo") }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                  }, this),
                  fetcher && fetcher.state && fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(avatar_default, { size: 75, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 141,
                    columnNumber: 19
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { marginTop: "60px", marginBottom: "60px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: avatarStyle, className: "hover-show-parent", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      avatar_default,
                      {
                        size: 75,
                        src: previewImage ? previewImage : team && team.logo ? `${cdnUrl}/${team.logo}` : `${cdnUrl}/profile-teams/profile-team-${randomNumber}.jpg`
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                        lineNumber: 147,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                      ImageSelector,
                      {
                        title: t("select display image"),
                        fetcher,
                        fieldName: displayImageField,
                        onSelect: handleSelectPresetImage,
                        presetImages: displayPresetImages,
                        presetRound: true,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                                lineNumber: 169,
                                columnNumber: 27
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                            lineNumber: 165,
                            columnNumber: 25
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                        lineNumber: 157,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 146,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 145,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 138,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 137,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  ImageSelector,
                  {
                    title: t("select display image"),
                    fetcher,
                    fieldName: displayImageField,
                    onSelect: handleSelectPresetImage,
                    presetImages: displayPresetImages,
                    presetRound: true,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                        lineNumber: 189,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { children: t("change") }, void 0, false, {
                        fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                        lineNumber: 190,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                      lineNumber: 188,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 179,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 136,
                columnNumber: 11
              }, this)
            },
            displayImageField,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 124,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            form_default.Item,
            {
              name: "name",
              rules: [
                {
                  required: true,
                  message: t("please input team name")
                }
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("team name") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 206,
                columnNumber: 13
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 211,
                columnNumber: 11
              }, this)
            },
            "name",
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 196,
              columnNumber: 9
            },
            this
          ),
          isSlipRequired && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            space_default,
            {
              direction: "vertical",
              size: 5,
              style: { display: "flex", marginBottom: 20 },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { style: { marginBottom: 10, alignItems: "baseline" }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    Text2,
                    {
                      className: isSlipRequired ? "required" : void 0,
                      style: { fontWeight: 600 },
                      children: t("upload slip image")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                      lineNumber: 221,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 220,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    form_default.Item,
                    {
                      name: "slipImageUrl",
                      rules: [
                        {
                          required: true,
                          message: `${t("please upload slip image")}`
                        }
                      ],
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                        FileUploader,
                        {
                          fetcher,
                          fieldName: "slipImageUrl",
                          onUploading: setUploading,
                          onErrorFileTooLarge: handleFileTooLarge,
                          isSlip: true,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { size: 5, style: { cursor: "pointer" }, children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EditOutlined_default, { style: { color: "#8263ea" } }, void 0, false, {
                              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                              lineNumber: 247,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { children: t("upload") }, void 0, false, {
                              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                              lineNumber: 248,
                              columnNumber: 23
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                            lineNumber: 246,
                            columnNumber: 21
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                          lineNumber: 239,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    "slipImageUrl",
                    false,
                    {
                      fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                      lineNumber: 229,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 228,
                    columnNumber: 15
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 219,
                  columnNumber: 13
                }, this),
                uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  result_default,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
                      fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                      lineNumber: 256,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 255,
                    columnNumber: 15
                  },
                  this
                ) : form && form.getFieldValue("slipImageUrl") ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  image_default,
                  {
                    preview: false,
                    style: { maxWidth: "400px" },
                    alt: "slip",
                    src: !isSlip ? `${cdnUrl}/${form.getFieldValue("slipImageUrl")}` : `data:image/png;base64,${previewUploadImage}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                    lineNumber: 259,
                    columnNumber: 15
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, {}, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 270,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 214,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            form_default.Item,
            {
              name: "isContactPerson",
              initialValue: false,
              valuePropName: "checked",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(checkbox_default, { onChange: handleContactPersonChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { children: t("you are team contact person") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 281,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 280,
                columnNumber: 11
              }, this)
            },
            "isContactPerson",
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 274,
              columnNumber: 9
            },
            this
          ),
          isContactPerson === false && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title2, { level: 4, style: { margin: 0 }, children: t("contact person") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 286,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
              lineNumber: 289,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              form_default.Item,
              {
                name: "contactName",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("contact person name") }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 294,
                  columnNumber: 17
                }, this),
                rules: [
                  {
                    required: true,
                    message: `${t("please input contactName")}`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, {}, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 305,
                  columnNumber: 15
                }, this)
              },
              "contactName",
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 290,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              form_default.Item,
              {
                name: "contactEmail",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("contact person email") }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 311,
                  columnNumber: 17
                }, this),
                rules: [
                  {
                    required: true,
                    message: `${t("please input email")}`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, { type: "email" }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 322,
                  columnNumber: 15
                }, this)
              },
              "contactEmail",
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 307,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              form_default.Item,
              {
                name: "contactPhoneNumber",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("contact person phone") }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 328,
                  columnNumber: 17
                }, this),
                rules: [
                  {
                    required: true,
                    message: `${t("please input phone number")}`
                  }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(input_default, { type: "tel" }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                  lineNumber: 339,
                  columnNumber: 15
                }, this)
              },
              "contactPhoneNumber",
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
                lineNumber: 324,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 285,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(row_default, { gutter: 15, style: { marginTop: 20 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "secondary", onClick: onCancel, children: t("cancel") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 346,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 345,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(col_default, { span: 12, children: fetcher && fetcher.state && fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 353,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 352,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "primary", onClick: () => form.submit(), children: submitLabel }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
            lineNumber: 350,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
          lineNumber: 344,
          columnNumber: 7
        }, this),
        contextHolder
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentTeamForm.tsx",
      lineNumber: 113,
      columnNumber: 5
    },
    this
  );
}

// app/components/pages/Tournament/TournamentTeamMemberForm.tsx
var import_react5 = __toESM(require_react());
var import_dayjs2 = __toESM(require_dayjs_min());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken3 } = theme_default;
var { Text: Text3, Title: Title3 } = typography_default;
function TournamentTeamMemberForm(props) {
  const { t } = useTranslation();
  const {
    isDiscordIdRequired,
    isEmailRequired,
    isPhoneNumberRequired,
    isIgnRequired,
    additionalFields,
    loading,
    onBack,
    onSubmit,
    submitLabel,
    team,
    currentTeam
  } = props;
  const [form] = form_default.useForm();
  const { token } = useToken3();
  const { user } = (0, import_react5.useContext)(AuthContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  let userMemberData = null;
  let initialData = null;
  if (currentTeam) {
    userMemberData = currentTeam.members.find(
      (member) => member.userId === user.id
    );
    initialData = userMemberData;
  }
  const handleSubmitForm = (values) => {
    const { email, phoneNumber, discordId, ign, ...additionalFields2 } = values;
    const customFields = Object.entries(additionalFields2).map(
      ([name, value]) => ({
        name,
        value
      })
    );
    const formData = {
      email,
      phoneNumber,
      discordId,
      ign,
      customFields
    };
    onSubmit(formData);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    form_default,
    {
      form,
      onFinish: handleSubmitForm,
      initialValues: initialData ? initialData : null,
      layout: "vertical",
      children: [
        onBack && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          space_default,
          {
            size: 5,
            style: { cursor: "pointer", marginBottom: 20 },
            onClick: onBack,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ArrowLeftOutlined_default, {}, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                lineNumber: 119,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { children: t("back to edit team") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                lineNumber: 120,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 114,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title3, { level: 4, style: { margin: 0 }, children: t("player info") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(divider_default, { style: { marginBlock: 15 } }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Title3, { level: 5, children: "Team Name" }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          card_default,
          {
            bordered: false,
            style: { backgroundColor: token.colorBgBase, marginBottom: 15 },
            bodyStyle: { padding: 10 },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              InlineAvatar,
              {
                avatarUrl: `${cdnUrl}/${team == null ? void 0 : team.logo}`,
                title: team == null ? void 0 : team.name,
                subtitle: (team == null ? void 0 : team.createdBy) ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { children: `${t("by")} ${team == null ? void 0 : team.createdBy.username}` }, void 0, false, {
                  fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                  lineNumber: 138,
                  columnNumber: 15
                }, this) : null
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                lineNumber: 133,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 128,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          form_default.Item,
          {
            name: "email",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("email") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 146,
              columnNumber: 11
            }, this),
            initialValue: (user == null ? void 0 : user.profile.profileEmail) ? user.profile.profileEmail : null,
            rules: submitLabel === "Create Team" || submitLabel === "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E21" || isEmailRequired ? [
              {
                required: true,
                message: `${t("please input email")}`
              }
            ] : [],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(input_default, { type: "email" }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 166,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 143,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          form_default.Item,
          {
            name: "phoneNumber",
            initialValue: (user == null ? void 0 : user.profile.profilePhoneNumber) ? user.profile.profilePhoneNumber : null,
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("phone number") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 176,
              columnNumber: 11
            }, this),
            rules: submitLabel === "Create Team" || submitLabel === "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E21" || isPhoneNumberRequired ? [
              {
                required: true,
                message: `${t("please input phone")}`
              }
            ] : [],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(input_default, { type: "tel" }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 193,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 168,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          form_default.Item,
          {
            name: "discordId",
            initialValue: (user == null ? void 0 : user.profile.discordId) ? user.profile.discordId : null,
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("discord id") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            rules: isDiscordIdRequired ? [
              {
                required: true,
                message: `${t("please input discord id")}`
              }
            ] : [],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(input_default, {}, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 214,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 195,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          form_default.Item,
          {
            name: "ign",
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("game username") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 219,
              columnNumber: 11
            }, this),
            rules: isIgnRequired ? [
              {
                required: true,
                message: `${t("please input game username")}`
              }
            ] : [],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(input_default, {}, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 234,
              columnNumber: 9
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 216,
            columnNumber: 7
          },
          this
        ),
        additionalFields && additionalFields.length > 0 && additionalFields.map((field, index) => {
          var _a, _b, _c;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            form_default.Item,
            {
              name: field.name,
              initialValue: initialData ? field.type === "date" ? (0, import_dayjs2.default)((_a = initialData.customFields[index]) == null ? void 0 : _a.value) : ((_b = initialData.customFields[index]) == null ? void 0 : _b.value) ? (_c = initialData.customFields[index]) == null ? void 0 : _c.value : null : null,
              rules: [
                {
                  required: field.isRequired,
                  message: `${t("please input data")}`
                }
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text3, { style: { fontWeight: 600, fontSize: "inherit" }, children: t(field.name) }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                lineNumber: 258,
                columnNumber: 15
              }, this),
              children: field.type === "date" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                date_picker_default,
                {
                  showToday: false,
                  allowClear: true,
                  placeholder: "DD/MM/YYYY",
                  format: "DD/MM/YYYY",
                  style: { display: "flex" }
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                  lineNumber: 264,
                  columnNumber: 15
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
                lineNumber: 272,
                columnNumber: 15
              }, this)
            },
            field.name,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
              lineNumber: 239,
              columnNumber: 11
            },
            this
          );
        }),
        loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TiltButton, { color: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
          lineNumber: 277,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          TiltButton,
          {
            color: "primary",
            onClick: () => form.submit(),
            style: { marginTop: 20 },
            children: submitLabel
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
            lineNumber: 281,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/pages/Tournament/TournamentTeamMemberForm.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app.tournaments.$id.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken4 } = theme_default;
var { Text: Text4, Title: Title4 } = typography_default;
var tournament = null;
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E1E\u0E1A\u0E01\u0E31\u0E1A\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E2A\u0E38\u0E14\u0E21\u0E31\u0E19\u0E2A\u0E4C \u0E43\u0E04\u0E23 \u0E46 \u0E01\u0E47\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E19\u0E31\u0E01\u0E41\u0E02\u0E48\u0E07\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    { property: "og:title", content: (tournament == null ? void 0 : tournament.name) + " | Ctrlg.gg" },
    {
      property: "og:image",
      content: (tournament == null ? void 0 : tournament.thumbnailImageUrl) ? `https://d2007awoau332v.cloudfront.net/${tournament == null ? void 0 : tournament.thumbnailImageUrl}` : "https://d2007awoau332v.cloudfront.net/assets/root.jpg"
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
      content: "\u0E1E\u0E1A\u0E01\u0E31\u0E1A\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E19\u0E32\u0E40\u0E21\u0E19\u0E15\u0E4C\u0E2A\u0E38\u0E14\u0E21\u0E31\u0E19\u0E2A\u0E4C \u0E43\u0E04\u0E23 \u0E46 \u0E01\u0E47\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E19\u0E31\u0E01\u0E41\u0E02\u0E48\u0E07\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14"
    }
  ];
};
function TournamentSingle() {
  const {
    id,
    myTeam,
    relatedTournaments,
    toJoinTeams,
    tournament: tournament2,
    getInviteAndHaveTeam
  } = useLoaderData();
  const { t } = useTranslation();
  const { token } = useToken4();
  const { user, openLoginModal } = (0, import_react7.useContext)(AuthContext);
  const isOrganizer = tournament2.organizer.id === (user == null ? void 0 : user.id);
  const { menus } = TournamentSingleMenu(isOrganizer);
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [form] = form_default.useForm();
  const [modal, contextHolder] = modal_default.useModal();
  const [currentTeam, setCurrentTeam] = (0, import_react7.useState)(myTeam);
  const [toUpdateTeamData, setToUpdateTeamData] = (0, import_react7.useState)(null);
  const [kycModal, setKycModal] = (0, import_react7.useState)(false);
  const [afterKycSuccess, setAfterKycSuccess] = (0, import_react7.useState)("");
  const [teamModal, setTeamModal] = (0, import_react7.useState)(false);
  const [memberModal, setMemberModal] = (0, import_react7.useState)(false);
  const [joinTeamModal, setJoinTeamModal] = (0, import_react7.useState)(false);
  const [api, messageContextHolder] = notification_default.useNotification();
  const deleteTournament = (0, import_react7.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this tournamnet`)}?`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/routes/_app.tournaments.$id.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id },
          {
            method: "delete",
            action: `/resources/delete-tournament`
          }
        );
      }
    });
  }, [fetcher, id]);
  if (tournament2.discordUrl) {
    menus.push({
      link: tournament2.discordUrl,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(avatar_default, { src: "/image/social/discord.png" }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.tsx",
          lineNumber: 348,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text4, { children: t("Discord") }, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.tsx",
          lineNumber: 349,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.tournaments.$id.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, this)
    });
  }
  if (isOrganizer) {
    menus.push({
      link: "edit",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { size: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(EditOutlined_default, {}, void 0, false, {
          fileName: "app/routes/_app.tournaments.$id.tsx",
          lineNumber: 359,
          columnNumber: 11
        }, this),
        " ",
        t("edit")
      ] }, void 0, true, {
        fileName: "app/routes/_app.tournaments.$id.tsx",
        lineNumber: 358,
        columnNumber: 9
      }, this)
    });
  }
  const isTeamOwner = (team) => {
    return team && team.createdById && user && user.id == team.createdById;
  };
  const isOwner = isTeamOwner(currentTeam);
  let toJoinTeam = null;
  if (!myTeam) {
    if (toJoinTeams && toJoinTeams.length > 0) {
      toJoinTeam = toJoinTeams.find((t2) => t2.tournamentId == id);
      if (user && toJoinTeam && toJoinTeam.createdById == user.id) {
        toJoinTeam = null;
      }
    }
  }
  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent" } },
    modalRender: (modal2) => modal2
  };
  const kycNeeded = (currentUser) => {
    return tournament2.isKycRequired && currentUser && (!currentUser.profile || !currentUser.isDopaVerified);
  };
  const handleTeamActionClicked = (0, import_react7.useCallback)(
    (action) => {
      if (!user) {
        openLoginModal();
        return;
      }
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("team");
        return;
      }
      if (currentTeam && currentTeam.uuid) {
        modal.confirm({
          title: action ? `${t(`are you sure to ${action} team`)}?` : isOwner ? `${t(`are you sure to submit team`)}?` : `${t(`are you sure to leave team`)}?`,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 415,
            columnNumber: 17
          }, this),
          okText: t("confirm"),
          okType: action === "delete" || isOwner ? "primary" : "danger",
          cancelText: t("cancel"),
          maskClosable: true,
          onOk() {
            fetcher.submit(
              {
                action: `${action ? action : isOwner ? "submit" : "leave"}-team`,
                teamUuid: currentTeam.uuid
              },
              { method: "post" }
            );
          }
        });
      } else {
        setTeamModal(true);
      }
    },
    [currentTeam, user]
  );
  const handleTeamEditClicked = (0, import_react7.useCallback)(() => {
    if (!user) {
      openLoginModal();
      return;
    }
    if (isTeamOwner(currentTeam)) {
      setTeamModal(true);
    } else {
      setMemberModal(true);
    }
  }, [currentTeam, user]);
  const handleJoinTeam = (0, import_react7.useCallback)(() => {
    if (toJoinTeam) {
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("join");
        return;
      }
      setJoinTeamModal(true);
    }
  }, [user]);
  const handleRemoveTeamMember = (teamUuid, memberUuid) => {
    fetcher.submit(
      {
        action: "delete-team-member",
        teamUuid,
        memberUuid
      },
      { method: "delete" }
    );
  };
  const handleMemberSubmitted = (0, import_react7.useCallback)(
    (values) => {
      if (!user) {
        openLoginModal();
        return;
      }
      if (toUpdateTeamData) {
        if (currentTeam && currentTeam.uuid) {
          fetcher.submit(
            {
              action: "update-team",
              data: JSON.stringify({
                ...values,
                ...toUpdateTeamData
              }),
              teamUuid: currentTeam.uuid,
              tournamentId: tournament2.id
            },
            { method: "post" }
          );
        } else {
          fetcher.submit(
            {
              action: "create-team",
              data: JSON.stringify({
                ...values,
                ...toUpdateTeamData
              }),
              tournamentId: tournament2.id
            },
            { method: "post" }
          );
        }
      } else if (toJoinTeam) {
        fetcher.submit(
          {
            action: "join-team",
            data: JSON.stringify(values),
            teamUuid: toJoinTeam.uuid,
            toJoinTeamUuid: toJoinTeam.uuid
          },
          { method: "post" }
        );
      } else if (currentTeam && currentTeam.uuid) {
        fetcher.submit(
          {
            action: "update-team-member",
            data: JSON.stringify(values),
            teamUuid: currentTeam.uuid
          },
          { method: "put" }
        );
      }
    },
    [currentTeam, toUpdateTeamData, user]
  );
  (0, import_react7.useEffect)(() => {
    if (toJoinTeam) {
      if (!user) {
        openLoginModal();
        return;
      }
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("join");
        return;
      }
      setJoinTeamModal(true);
    }
  }, [user]);
  (0, import_react7.useEffect)(() => {
    setCurrentTeam(myTeam);
  }, [myTeam]);
  (0, import_react7.useEffect)(() => {
    if (getInviteAndHaveTeam) {
      fetcher.submit(
        {
          action: "unset-invite"
        },
        { method: "patch" }
      );
    }
  }, [getInviteAndHaveTeam]);
  (0, import_react7.useEffect)(() => {
    if (fetcher.data && fetcher.data.success && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.team) {
        setCurrentTeam(fetcher.data.team);
      }
      let joinModal = false;
      let teamModal2 = false;
      if (fetcher.data.success === "submit-kyc") {
        if (afterKycSuccess === "team") {
          teamModal2 = true;
        } else if (afterKycSuccess === "join") {
          joinModal = true;
        }
      }
      setJoinTeamModal(joinModal);
      setTeamModal(teamModal2);
      setMemberModal(false);
      setKycModal(false);
      revalidator.revalidate();
      api.open({
        message: t(`successfully ${fetcher.data.success}`),
        type: "success",
        duration: 5,
        placement: "bottomRight"
      });
      resetFetcher(fetcher);
    }
  }, [fetcher, afterKycSuccess, revalidator]);
  const canEdit = tournament2.status === "opening" && (!currentTeam || currentTeam && currentTeam.status === "draft" || currentTeam.status === "rejected");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    contextHolder,
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TournamentHero, { data: tournament2 }, void 0, false, {
      fileName: "app/routes/_app.tournaments.$id.tsx",
      lineNumber: 604,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        style: {
          paddingInline: "3.5%",
          paddingTop: 0,
          paddingBottom: 30,
          maxWidth: 1440,
          marginInline: "auto"
        },
        children: [
          toJoinTeam && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            TournamentInvitationAlert,
            {
              data: toJoinTeam,
              onClick: handleJoinTeam
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 615,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AffixMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TiltMenus, { menus, preventScrollReset: true }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 622,
              columnNumber: 13
            }, this),
            isOrganizer && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TiltButton, { color: "danger", onClick: deleteTournament, children: t("delete") }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 624,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 621,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 620,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(row_default, { gutter: [40, 40], children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(col_default, { span: 24, md: { span: 8, order: 1 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { direction: "vertical", style: { display: "flex" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                TournamentTeam,
                {
                  data: currentTeam,
                  displayInviteLink: canEdit,
                  onDelete: () => handleTeamActionClicked("delete"),
                  onSubmit: canEdit ? () => handleTeamActionClicked(isOwner ? "submit" : "leave") : void 0,
                  onRemoveTeamMember: canEdit && isTeamOwner(currentTeam) ? handleRemoveTeamMember : void 0,
                  onEdit: canEdit ? handleTeamEditClicked : void 0,
                  additionalMembers: tournament2.additionalPlayerCount,
                  minMembers: tournament2.playerCount,
                  submitAction: currentTeam ? canEdit && isTeamOwner(currentTeam) ? "submit" : "leave" : "create"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 633,
                  columnNumber: 15
                },
                this
              ),
              currentTeam && currentTeam.status === "pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                card_default,
                {
                  bodyStyle: { padding: 10, textAlign: "center" },
                  bordered: false,
                  style: {
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    Title4,
                    {
                      level: 5,
                      style: { display: "flex", justifyContent: "center" },
                      children: t("your team is waiting for approval")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.tournaments.$id.tsx",
                      lineNumber: 670,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 660,
                  columnNumber: 17
                },
                this
              ) : currentTeam && currentTeam.status === "rejected" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                card_default,
                {
                  bodyStyle: { padding: 10, textAlign: "center" },
                  bordered: false,
                  style: {
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(space_default, { direction: "vertical", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Title4,
                      {
                        level: 4,
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          color: "#c73320"
                        },
                        children: t("your team has been rejected")
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.tournaments.$id.tsx",
                        lineNumber: 689,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Title4,
                      {
                        level: 5,
                        style: {
                          display: "flex",
                          justifyContent: "center"
                        },
                        children: t(currentTeam.remark)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/_app.tournaments.$id.tsx",
                        lineNumber: 699,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.tournaments.$id.tsx",
                    lineNumber: 688,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 678,
                  columnNumber: 17
                },
                this
              ) : currentTeam && currentTeam.status === "approved" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                card_default,
                {
                  bodyStyle: { padding: 10, textAlign: "center" },
                  bordered: false,
                  style: {
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    Title4,
                    {
                      level: 4,
                      style: {
                        display: "flex",
                        justifyContent: "center"
                      },
                      children: t("your team has been approved")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.tournaments.$id.tsx",
                      lineNumber: 721,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 711,
                  columnNumber: 17
                },
                this
              ) : currentTeam && currentTeam.status === "pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                card_default,
                {
                  bodyStyle: { padding: 10, textAlign: "center" },
                  bordered: false,
                  style: {
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    Title4,
                    {
                      level: 4,
                      style: {
                        display: "flex",
                        justifyContent: "center"
                      },
                      children: t("your team is waiting for approval")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.tournaments.$id.tsx",
                      lineNumber: 742,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 732,
                  columnNumber: 17
                },
                this
              ) : null
            ] }, void 0, true, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 632,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 631,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(col_default, { span: 24, md: { span: 16, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 756,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 755,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 630,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(divider_default, { style: { marginBlock: 40 } }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 759,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Title4, { level: 3, style: { marginBottom: 30 }, children: t("related tournaments") }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 760,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TournamentGrid, { data: relatedTournaments }, void 0, false, {
            fileName: "app/routes/_app.tournaments.$id.tsx",
            lineNumber: 763,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            modal_default,
            {
              ...modalProps,
              onCancel: () => setKycModal(false),
              open: kycModal,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                KycForm,
                {
                  fetcher,
                  form,
                  loading: fetcher.state !== "idle"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 769,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 764,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            modal_default,
            {
              ...modalProps,
              onCancel: () => setTeamModal(false),
              open: teamModal && !(memberModal || joinTeamModal),
              zIndex: 1001,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                TournamentTeamForm,
                {
                  team: currentTeam,
                  form,
                  isSlipRequired: tournament2.isSlipRequired,
                  onCancel: () => {
                    setTeamModal(false);
                    setToUpdateTeamData(null);
                  },
                  onSubmit: (values) => {
                    setToUpdateTeamData({ ...values });
                    setMemberModal(true);
                    setTeamModal(false);
                  },
                  submitLabel: t("next")
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 781,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 775,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            modal_default,
            {
              ...modalProps,
              onCancel: () => {
                setMemberModal(false);
                setJoinTeamModal(false);
              },
              open: memberModal || joinTeamModal,
              zIndex: 1002,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                TournamentTeamMemberForm,
                {
                  currentTeam,
                  team: joinTeamModal ? toJoinTeam : toUpdateTeamData ? toUpdateTeamData : currentTeam,
                  onBack: toUpdateTeamData ? (
                    // eslint-disable-next-line no-sequences
                    () => (setMemberModal(false), setTeamModal(true))
                  ) : void 0,
                  isDiscordIdRequired: tournament2.isDiscordIdRequired,
                  isEmailRequired: tournament2.isEmailRequired,
                  isPhoneNumberRequired: tournament2.isPhoneNumberRequired,
                  isIgnRequired: tournament2.isIgnRequired,
                  additionalFields: tournament2.requirementFields,
                  onSubmit: handleMemberSubmitted,
                  submitLabel: currentTeam ? t("save") : joinTeamModal ? t("join") : t("create team")
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.tournaments.$id.tsx",
                  lineNumber: 806,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.tsx",
              lineNumber: 797,
              columnNumber: 9
            },
            this
          ),
          messageContextHolder
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.tournaments.$id.tsx",
        lineNumber: 605,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.tournaments.$id.tsx",
    lineNumber: 602,
    columnNumber: 5
  }, this);
}
export {
  TournamentSingle as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.tournaments.$id-X2BXFA22.js.map
