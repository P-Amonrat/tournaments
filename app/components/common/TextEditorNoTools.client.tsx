import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactQuill, { Quill } from "react-quill";
import { notification } from "antd";
import { encode } from "base64-arraybuffer";
import { isPermalink } from "~/utils/helper";

// const { useToken } = theme;

interface TextEditorNoToolsProps {
  disabled?: boolean;
  id: string;
  initialValues?: any;
  fetcher: any;
  onChange: (content: any) => void;
}

const BlockEmbed = Quill.import("blots/block/embed");

class Video extends BlockEmbed {
  static create(value: any) {
    let node = super.create(value);
    let iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("src", value);
    node.appendChild(iframe);
    return isPermalink(value) ? node : null;
  }

  static value(domNode: any) {
    if (domNode && domNode.firstChild) {
      return domNode.firstChild.getAttribute("src");
    }
  }
}
Video.blotName = "video";
Video.className = "ql-video";
Video.tagName = "div";

Quill.register({
  "formats/video": Video,
});

export function TextEditorNoTools(props: TextEditorNoToolsProps) {
  const { t } = useTranslation();
  // const { token } = useToken();
  const elRefs: any = useRef([]);
  const { disabled, id, initialValues, fetcher, onChange } = props;
  const imageFieldName = `${id}-editor-image`;
  const [messageApi, contextHolder] = notification.useNotification();
  const [uploading, setUploading] = useState<boolean>(false);

  const setButtonTitle = () => {
    const toolbarElements = document.querySelectorAll(
      '.ql-toolbar button[class*="ql-"], .ql-toolbar span.ql-picker.ql-color-picker'
    );
    let title = "";
    toolbarElements.forEach((element) => {
      if (element.tagName.toLowerCase() === "button") {
        const { className } = element;
        title = className.split("ql-")[1].split(" ")[0]; // Split by 'ql-' and take the first part
        title = title.charAt(0).toUpperCase() + title.slice(1);
        const value = element.getAttribute("value");
        title = t(`${title}${value ? `: ${value}` : ""}`);
      } else if (
        element.tagName.toLowerCase() === "span" &&
        element.className.includes("ql-picker")
      ) {
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

  const handleImageUpload = (e: any) => {
    if (e.target.files[0].size > 2000000) {
      messageApi.open({
        type: "error",
        message: t("file upload failed due to too large image size"),
        duration: 5,
        placement: "bottomRight",
      });
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      e.target.files[0].base64 = reader.result;
      if (e.target.files[0].base64) {
        fetcher.submit(
          {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
            type: e.target.files[0].type,
            file: encode(e.target.files[0].base64),
            field: imageFieldName,
          },
          {
            method: "put",
            action: "/resources/upload",
            encType: "multipart/form-data",
          }
        );
      }
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  const imageHandler = (e: any) => {
    elRefs.current[1].click();
  };

  const modules = useMemo(
    () => ({
      toolbar: false,
    }),
    []
  );

  useEffect(() => {
    setButtonTitle();
  }, []);

  useEffect(() => {
    if (
      fetcher.data &&
      fetcher.data.field &&
      fetcher.data.field === imageFieldName &&
      fetcher.data.url
    ) {
      setUploading(false);
      const editor = elRefs.current[0].getEditor();
      editor.insertEmbed(
        editor.getSelection(true).index,
        "image",
        fetcher.data.url
      );
    }
  }, [fetcher.data]);

  return (
    <>
      <ReactQuill
        id={id}
        className="text-editor text-editor-no-tools ctrlg-html"
        theme="snow"
        readOnly={disabled}
        modules={modules}
        // placeholder={t("write your content ...")}
        onChange={onChange}
        defaultValue={initialValues}
        ref={(el: any) => (elRefs.current[0] = el)}
      />
      <input
        type="file"
        name="image"
        disabled={uploading}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
        ref={(el: any) => (elRefs.current[1] = el)}
      />
      {contextHolder}
    </>
  );
}
