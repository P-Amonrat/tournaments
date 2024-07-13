import {
  OverlayBg
} from "/build/_shared/chunk-GKESGK3R.js";
import {
  FileUploader
} from "/build/_shared/chunk-KD3NNI5X.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  card_default,
  col_default,
  divider_default,
  image_default,
  modal_default,
  notification_default,
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

// app/components/common/ImageSelector.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function ImageSelector(props) {
  const {
    callback,
    children,
    fetcher,
    fieldName,
    onSelect,
    presetImages,
    presetRound,
    title,
    frameImages
  } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const [modal, setModal] = (0, import_react.useState)(false);
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react.useState)(false);
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const handleSelectImage = (image, action) => {
    const imageKey = image.replace(`${cdnUrl}/`, "");
    if (action === "frame") {
      if (callback) {
        const toSubmit = {};
        toSubmit["assetId"] = imageKey;
        fetcher.submit(toSubmit, {
          method: callback.method,
          action: callback.path
        });
      } else if (onSelect) {
        onSelect({ key: imageKey, url: image });
      }
    } else if (action === "all") {
      if (callback) {
        const toSubmit = {};
        toSubmit[callback.key] = imageKey;
        fetcher.submit(toSubmit, {
          method: callback.method,
          action: callback.path
        });
      } else if (onSelect) {
        onSelect({ key: imageKey, url: image });
      }
    }
    setModal(false);
  };
  const handleNoFrame = (0, import_react.useCallback)(() => {
    fetcher.submit(null, {
      method: "put",
      action: `/resources/no-frame`
    });
    setModal(false);
  }, [fetcher]);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state && fetcher.state === "idle") {
      if (fetcher.data.field === fieldName && fetcher.data.url) {
        setUploading(false);
        if (callback) {
          const toSubmit = {};
          toSubmit[callback.key] = fetcher.data.key;
          fetcher.submit(toSubmit, {
            method: callback.method,
            action: callback.path
          });
        } else if (onSelect) {
          onSelect(fetcher.data);
        }
        setModal(false);
      }
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setModal(true), children }, void 0, false, {
      fileName: "app/components/common/ImageSelector.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        closable: !uploading,
        footer: null,
        open: modal,
        onCancel: () => setModal(false),
        modalRender: (modal2) => modal2,
        zIndex: 1002,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          card_default,
          {
            bodyStyle: { padding: 20 },
            style: { backgroundColor: "transparent" },
            bordered: false,
            children: [
              frameImages && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                space_default,
                {
                  direction: "vertical",
                  size: 30,
                  style: {
                    display: "flex",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Title,
                      {
                        level: 3,
                        style: { marginBottom: 20, marginTop: 0, textAlign: "center" },
                        children: t("select frame")
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/common/ImageSelector.tsx",
                        lineNumber: 146,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [15, 15], style: { position: "relative" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        col_default,
                        {
                          span: 4,
                          style: { justifyContent: "center", cursor: "pointer" },
                          onClick: handleNoFrame,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            image_default,
                            {
                              src: "/image/no-frame.png",
                              preview: false,
                              wrapperStyle: presetRound ? { borderRadius: "50%", overflow: "hidden" } : void 0
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/common/ImageSelector.tsx",
                              lineNumber: 158,
                              columnNumber: 19
                            },
                            this
                          )
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/common/ImageSelector.tsx",
                          lineNumber: 153,
                          columnNumber: 17
                        },
                        this
                      ),
                      frameImages.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        col_default,
                        {
                          span: 4,
                          style: { justifyContent: "center", cursor: "pointer" },
                          onClick: () => handleSelectImage(image.id, "frame"),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            image_default,
                            {
                              src: image.url,
                              preview: false,
                              wrapperStyle: presetRound ? { borderRadius: "50%", overflow: "hidden" } : void 0
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/common/ImageSelector.tsx",
                              lineNumber: 175,
                              columnNumber: 21
                            },
                            this
                          )
                        },
                        image.id,
                        false,
                        {
                          fileName: "app/components/common/ImageSelector.tsx",
                          lineNumber: 169,
                          columnNumber: 19
                        },
                        this
                      )),
                      uploading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayBg, { loading: true }, void 0, false, {
                        fileName: "app/components/common/ImageSelector.tsx",
                        lineNumber: 186,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/common/ImageSelector.tsx",
                      lineNumber: 152,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { plain: true, style: { marginBlock: 0, marginBottom: "15px" } }, void 0, false, {
                      fileName: "app/components/common/ImageSelector.tsx",
                      lineNumber: 188,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/common/ImageSelector.tsx",
                  lineNumber: 138,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                space_default,
                {
                  direction: "vertical",
                  size: 30,
                  style: {
                    display: "flex",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Title,
                      {
                        level: 3,
                        style: { marginBottom: 20, marginTop: 0, textAlign: "center" },
                        children: title
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/common/ImageSelector.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [15, 15], style: { position: "relative" }, children: [
                      presetImages.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        col_default,
                        {
                          span: 4,
                          style: { justifyContent: "center", cursor: "pointer" },
                          onClick: () => handleSelectImage(image, "all"),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            image_default,
                            {
                              src: image,
                              preview: false,
                              wrapperStyle: presetRound ? { borderRadius: "50%", overflow: "hidden" } : void 0
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/common/ImageSelector.tsx",
                              lineNumber: 213,
                              columnNumber: 19
                            },
                            this
                          )
                        },
                        image,
                        false,
                        {
                          fileName: "app/components/common/ImageSelector.tsx",
                          lineNumber: 207,
                          columnNumber: 17
                        },
                        this
                      )),
                      uploading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayBg, { loading: true }, void 0, false, {
                        fileName: "app/components/common/ImageSelector.tsx",
                        lineNumber: 224,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/common/ImageSelector.tsx",
                      lineNumber: 205,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { plain: true, style: { marginBlock: 0 }, children: t("or") }, void 0, false, {
                      fileName: "app/components/common/ImageSelector.tsx",
                      lineNumber: 226,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      FileUploader,
                      {
                        disabled: uploading,
                        fetcher,
                        fieldName,
                        onUploading: setUploading,
                        onErrorFileTooLarge: handleFileTooLarge,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          TiltButton,
                          {
                            color: uploading ? "secondary" : "primary",
                            style: { width: 600, cursor: "pointer", maxWidth: "100%" },
                            children: t("upload image")
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/common/ImageSelector.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/common/ImageSelector.tsx",
                        lineNumber: 229,
                        columnNumber: 13
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/common/ImageSelector.tsx",
                  lineNumber: 191,
                  columnNumber: 11
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/common/ImageSelector.tsx",
            lineNumber: 132,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/common/ImageSelector.tsx",
        lineNumber: 123,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/common/ImageSelector.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

export {
  ImageSelector
};
//# sourceMappingURL=/build/_shared/chunk-KKNWOUET.js.map
