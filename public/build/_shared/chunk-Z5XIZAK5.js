import {
  require_lib
} from "/build/_shared/chunk-JN57S7X7.js";
import {
  encode
} from "/build/_shared/chunk-3W3BLEBW.js";
import {
  isPermalink
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  notification_default
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

// app/components/common/TextEditor.client.tsx
var import_react = __toESM(require_react());
var import_react_quill = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
function TextEditor(props) {
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
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video", "code-block", "html"]
        ],
        handlers: {
          image: imageHandler
        }
      }
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_quill.default,
      {
        id,
        className: "text-editor ctrlg-html",
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
        fileName: "app/components/common/TextEditor.client.tsx",
        lineNumber: 165,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        fileName: "app/components/common/TextEditor.client.tsx",
        lineNumber: 176,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/common/TextEditor.client.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
}

export {
  TextEditor
};
//# sourceMappingURL=/build/_shared/chunk-Z5XIZAK5.js.map
