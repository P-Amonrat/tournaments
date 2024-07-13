import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ArrowUpDown,
  Globe,
  Lock
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  require_lib
} from "/build/_shared/chunk-JN57S7X7.js";
import {
  encode
} from "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  isPermalink
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
  LoadingOutlined_default,
  avatar_default,
  col_default,
  divider_default,
  flex_default,
  form_default,
  input_default,
  modal_default,
  notification_default,
  result_default,
  row_default,
  select_default,
  space_default,
  tooltip_default,
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

// app/routes/_app.settings._index.tsx
var import_react2 = __toESM(require_react());
var import_node = __toESM(require_node());

// app/components/common/PrivateFieldSelection.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function PrivateFieldSelection(props) {
  const { fieldName } = props;
  const { t } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default.Item, { name: fieldName, style: { marginBottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    select_default,
    {
      style: { width: 60 },
      dropdownStyle: { minWidth: 120 },
      optionLabelProp: "selectedLabel",
      options: [
        {
          selectedLabel: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { placement: "bottom", title: t("private"), arrow: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { size: 17, style: { color: "#7a6fee" } }, void 0, false, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 24,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          value: "private",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { size: 17, style: { color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/common/PrivateFieldSelection.tsx",
              lineNumber: 30,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { color: "#7a6fee" }, children: t("private") }, void 0, false, {
              fileName: "app/components/common/PrivateFieldSelection.tsx",
              lineNumber: 31,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 29,
            columnNumber: 15
          }, this)
        },
        {
          selectedLabel: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { placement: "bottom", title: t("public"), arrow: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { size: 17, style: { color: "#7a6fee" } }, void 0, false, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          value: "public",
          label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { size: 17, style: { color: "#7a6fee" } }, void 0, false, {
              fileName: "app/components/common/PrivateFieldSelection.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { color: "#7a6fee" }, children: t("public") }, void 0, false, {
              fileName: "app/components/common/PrivateFieldSelection.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/PrivateFieldSelection.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        }
      ]
    },
    void 0,
    false,
    {
      fileName: "app/components/common/PrivateFieldSelection.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/common/PrivateFieldSelection.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings._index.tsx
var import_session = __toESM(require_session());

// app/components/common/TextEditorNoTools.client.tsx
var import_react = __toESM(require_react());
var import_react_quill = __toESM(require_lib());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BlockEmbed = import_react_quill.Quill.import("blots/block/embed");
var Video = class extends BlockEmbed {
  static create(value) {
    let node = super.create(value);
    let iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("src", value);
    node.appendChild(iframe);
    return isPermalink(value) ? node : null;
  }
  static value(domNode) {
    if (domNode && domNode.firstChild) {
      return domNode.firstChild.getAttribute("src");
    }
  }
};
Video.blotName = "video";
Video.className = "ql-video";
Video.tagName = "div";
import_react_quill.Quill.register({
  "formats/video": Video
});
function TextEditorNoTools(props) {
  const { t } = useTranslation();
  const elRefs = (0, import_react.useRef)([]);
  const { disabled, id, initialValues, fetcher, onChange } = props;
  const imageFieldName = `${id}-editor-image`;
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const setButtonTitle = () => {
    const toolbarElements = document.querySelectorAll(
      '.ql-toolbar button[class*="ql-"], .ql-toolbar span.ql-picker.ql-color-picker'
    );
    let title = "";
    toolbarElements.forEach((element) => {
      if (element.tagName.toLowerCase() === "button") {
        const { className } = element;
        title = className.split("ql-")[1].split(" ")[0];
        title = title.charAt(0).toUpperCase() + title.slice(1);
        const value = element.getAttribute("value");
        title = t(`${title}${value ? `: ${value}` : ""}`);
      } else if (element.tagName.toLowerCase() === "span" && element.className.includes("ql-picker")) {
        title = element.className.split(" ")[0];
        title = title.split("ql-")[1];
        title = title.charAt(0).toUpperCase() + title.slice(1);
        title = t(`${title} picker`);
      }
      if (title.length > 0 && title !== "Video") {
        element.innerHTML += `<span class="text-editor-tooltip">${t(
          title
        )}</span>`;
      } else if (title === "Video") {
        element.innerHTML += `<span class="text-editor-tooltip">${t(
          "Video (YouTube supported)"
        )}</span>`;
      }
    });
  };
  const handleImageUpload = (e) => {
    if (e.target.files[0].size > 2e6) {
      messageApi.open({
        type: "error",
        message: t("file upload failed due to too large image size"),
        duration: 5,
        placement: "bottomRight"
      });
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      e.target.files[0].base64 = reader.result;
      if (e.target.files[0].base64) {
        fetcher.submit(
          {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
            type: e.target.files[0].type,
            file: encode(e.target.files[0].base64),
            field: imageFieldName
          },
          {
            method: "put",
            action: "/resources/upload",
            encType: "multipart/form-data"
          }
        );
      }
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
  const imageHandler = (e) => {
    elRefs.current[1].click();
  };
  const modules = (0, import_react.useMemo)(
    () => ({
      toolbar: false
    }),
    []
  );
  (0, import_react.useEffect)(() => {
    setButtonTitle();
  }, []);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.data.field === imageFieldName && fetcher.data.url) {
      setUploading(false);
      const editor = elRefs.current[0].getEditor();
      editor.insertEmbed(
        editor.getSelection(true).index,
        "image",
        fetcher.data.url
      );
    }
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react_quill.default,
      {
        id,
        className: "text-editor text-editor-no-tools ctrlg-html",
        theme: "snow",
        readOnly: disabled,
        modules,
        onChange,
        defaultValue: initialValues,
        ref: (el) => elRefs.current[0] = el
      },
      void 0,
      false,
      {
        fileName: "app/components/common/TextEditorNoTools.client.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "input",
      {
        type: "file",
        name: "image",
        disabled: uploading,
        style: { display: "none" },
        accept: "image/*",
        onChange: handleImageUpload,
        ref: (el) => elRefs.current[1] = el
      },
      void 0,
      false,
      {
        fileName: "app/components/common/TextEditorNoTools.client.tsx",
        lineNumber: 166,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/common/TextEditorNoTools.client.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}

// app/routes/_app.settings._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text2, Title } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function SettingsProfile() {
  const { t } = useTranslation();
  const { games } = useLoaderData();
  const submit = useSubmit();
  const { user } = (0, import_react2.useContext)(AuthContext);
  const [form] = form_default.useForm();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const socials = ["discord", "twitch", "facebook", "x"];
  const [sortingModal, setSortingModal] = (0, import_react2.useState)(false);
  const [textEditorLoading, setTextEditorLoading] = (0, import_react2.useState)(true);
  const updatedArray = user.profile.sortOrder.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  const [sortOrderList, setSortOrderList] = (0, import_react2.useState)(updatedArray);
  const fetcher = useFetcher();
  let initialValues = null;
  if (user) {
    initialValues = {
      displayName: user.displayName ? user.displayName : "",
      userName: (user == null ? void 0 : user.userName) ? user.userName : void 0,
      bio: user.profile.bio ? user.profile.bio : "",
      profileEmail: user.profile.profileEmail ? user.profile.profileEmail : "",
      privateEmail: user.profile.privateEmail === "public" ? "public" : "private",
      profilePhoneNumber: user.profile.profilePhoneNumber ? user.profile.profilePhoneNumber : "",
      privatePhone: user.profile.privatePhone === "public" ? "public" : "private",
      websiteUrl: user.profile.websiteUrl ? user.profile.websiteUrl : "",
      privateWebsite: user.profile.privateWebsite === "public" ? "public" : "private",
      discordId: user.profile.discordId ? user.profile.discordId : "",
      privateDiscordId: user.profile.privateDiscordId === "public" ? "public" : "private",
      facebookLink: user.profile.facebookLink ? user.profile.facebookLink : "",
      privateFacebookLink: user.profile.privateFacebookLink === "public" ? "public" : "private",
      twitchLink: user.profile.twitchLink ? user.profile.twitchLink : "",
      privateTwitchLink: user.profile.privateTwitchLink === "public" ? "public" : "private",
      xLink: user.profile.xLink ? user.profile.xLink : "",
      privateXLink: user.profile.privateXLink === "public" ? "public" : "private"
    };
    if (games && games.length > 0 && user.userGames) {
      games.map((game) => {
        var _a;
        initialValues[`username-${game.id}`] = (_a = user.userGames.find(
          (userGame) => userGame.gameId == game.id
        )) == null ? void 0 : _a.ign;
        return null;
      });
    }
  }
  const [userName, setUserName] = (0, import_react2.useState)(initialValues == null ? void 0 : initialValues.userName);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };
  const onChangeSortItems = (items) => {
    setSortOrderList(items);
  };
  const onCloseSortingModal = () => {
    setSortingModal(false);
  };
  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      order: sortOrderList.map((item, index) => item.name)
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
        uuid: user.uuid
      },
      {
        method: "post",
        action: `/resources/sorting-profile`
      }
    );
  };
  const onSubmit = (values) => {
    const result = {};
    Object.keys(values).map((key) => {
      if (values.hasOwnProperty(key)) {
        const parts = key.split("-");
        if (parts.length === 1) {
          result[key] = values[key];
        } else {
          switch (parts[0]) {
            case "private":
              if (!result.privateFields) {
                result.privateFields = [];
              }
              if (values[key] === "private") {
                result.privateFields.push(parts[1]);
              }
              break;
          }
        }
      }
    });
    const gamesData = [];
    for (const key in values) {
      if (key.startsWith("username-")) {
        const idKey = key.replace("username-", "gameId");
        const gameId = values[idKey];
        gamesData.push({ ign: values[key], gameId });
      }
    }
    submit(
      {
        ...result,
        userName,
        uuid: user.uuid,
        gameProfiles: JSON.stringify(gamesData),
        gameCount: gamesData.length
      },
      { method: "post" }
    );
  };
  (0, import_react2.useEffect)(() => {
    setTextEditorLoading(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title, { level: 2, style: { marginTop: 0, marginBottom: 40 }, children: t("profile") }, void 0, false, {
      fileName: "app/routes/_app.settings._index.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      form_default,
      {
        form,
        onFinish: onSubmit,
        layout: "vertical",
        initialValues,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "vertical", size: 10, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "displayName",
              rules: [
                {
                  required: true,
                  message: t("please input display name")
                },
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value.length && value.length > 20) {
                      return Promise.reject(
                        new Error(
                          `${t(
                            "display name is too long (maximum 20 characters)"
                          )}`
                        )
                      );
                    }
                    return Promise.resolve();
                  }
                })
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("display name") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 284,
                columnNumber: 15
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(input_default, {}, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 289,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 258,
              columnNumber: 11
            },
            this
          ),
          !textEditorLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { size: 10, direction: "vertical", style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "bio",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("bio") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 297,
                columnNumber: 19
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                TextEditorNoTools,
                {
                  id: "bio",
                  initialValues: form.getFieldValue("bio"),
                  fetcher,
                  onChange: (values) => form.setFieldValue("bio", values)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 302,
                  columnNumber: 17
                },
                this
              )
            },
            "bio",
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 293,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(result_default, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 311,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "profileEmail",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("email") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 326,
                columnNumber: 15
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                input_default,
                {
                  type: "email",
                  addonAfter: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PrivateFieldSelection, { fieldName: "privateEmail" }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 333,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 331,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 323,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "profilePhoneNumber",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("phone") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 339,
                columnNumber: 15
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                input_default,
                {
                  type: "tel",
                  addonAfter: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PrivateFieldSelection, { fieldName: "privatePhone" }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 346,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 344,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 336,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "websiteUrl",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("website") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 352,
                columnNumber: 15
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                input_default,
                {
                  type: "website",
                  addonAfter: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PrivateFieldSelection, { fieldName: "privateWebsite" }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 359,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 357,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 349,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: "userName",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("user url") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 366,
                columnNumber: 15
              }, this),
              rules: [
                {
                  pattern: /^[A-Za-z0-9]*$/,
                  message: t(
                    "only english characters and numbers are allowed, and no spaces"
                  )
                },
                {
                  min: 5,
                  message: t("username must be more than 5 characters")
                },
                {
                  max: 30,
                  message: t("username can't be more than 30 characters")
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { display: "flex", width: "100%" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { marginTop: "7px", marginRight: "9px" }, children: "ctrlg.gg/users/" }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 388,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(form_default.Item, { name: "userName", noStyle: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  input_default,
                  {
                    placeholder: t("username"),
                    value: userName,
                    onChange: handleUserNameChange,
                    style: { width: "100%" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 393,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 392,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 391,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 387,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 363,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { marginTop: "7px", color: "#C7C8CC" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: t("only english characters and numbers are allowed") }, void 0, false, {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 405,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: t("spaces are not allowed") }, void 0, false, {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 406,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: t("must contain 5-30 characters") }, void 0, false, {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 407,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 404,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 403,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { style: { marginTop: "0", display: "flex", paddingBottom: 5 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Text2,
            {
              style: {
                fontWeight: 600,
                fontSize: "inherit"
              },
              children: t("social accounts")
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 411,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 410,
            columnNumber: 11
          }, this),
          socials.map((social) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            form_default.Item,
            {
              name: social === "discord" ? `${social}Id` : `${social}Link`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                input_default,
                {
                  addonBefore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(avatar_default, { src: `image/social/${social}.png`, size: 40 }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 427,
                    columnNumber: 19
                  }, this),
                  placeholder: social === "discord" ? `Discord ID` : `https://www.${social}.com/username`,
                  addonAfter: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    PrivateFieldSelection,
                    {
                      fieldName: `private${social === "discord" ? `${social.charAt(0).toUpperCase() + social.slice(1)}Id` : `${social.charAt(0).toUpperCase() + social.slice(1)}Link`}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.settings._index.tsx",
                      lineNumber: 435,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 425,
                  columnNumber: 15
                },
                this
              )
            },
            social === "discord" ? `${social}Id` : `${social}Link`,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 421,
              columnNumber: 13
            },
            this
          )),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "space-between", style: { marginBottom: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Text2,
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
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 452,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 451,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Text2,
              {
                style: {
                  marginRight: 10,
                  marginTop: 0,
                  fontWeight: 600,
                  textAlign: "center",
                  cursor: "pointer"
                },
                onClick: handleToggleSortingMode,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ArrowUpDown, { style: { color: "#7C6FF6", fontSize: "1.2em" } }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 473,
                    columnNumber: 17
                  }, this),
                  t("sort order")
                ] }, void 0, true, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 472,
                  columnNumber: 15
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 462,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 450,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "vertical", children: sortOrderList.map((profile, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            index + 1,
            ". ",
            t(profile.name)
          ] }, index, true, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this)) }, void 0, false, {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 478,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            TiltButton,
            {
              color: "primary",
              onClick: () => form.submit(),
              style: { marginTop: 20 },
              children: t("save")
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.settings._index.tsx",
              lineNumber: 524,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_app.settings._index.tsx",
          lineNumber: 257,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings._index.tsx",
        lineNumber: 251,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setSortingModal(false),
        open: sortingModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 543,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 546,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                SortableList,
                {
                  items: sortOrderList,
                  onChange: onChangeSortItems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.settings._index.tsx",
                      lineNumber: 554,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.settings._index.tsx",
                      lineNumber: 553,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TiltButton, { color: "gray", children: t(`${item.name}`) }, void 0, false, {
                      fileName: "app/routes/_app.settings._index.tsx",
                      lineNumber: 556,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 552,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.settings._index.tsx",
                    lineNumber: 551,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 547,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TiltButton, { color: "secondary", onClick: onCloseSortingModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 563,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 562,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 568,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.settings._index.tsx",
                  lineNumber: 567,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.settings._index.tsx",
                lineNumber: 561,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.settings._index.tsx",
            lineNumber: 538,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.settings._index.tsx",
        lineNumber: 533,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_app.settings._index.tsx",
    lineNumber: 247,
    columnNumber: 5
  }, this);
}
export {
  SettingsProfile as default
};
//# sourceMappingURL=/build/routes/_app.settings._index-TADG76QZ.js.map
