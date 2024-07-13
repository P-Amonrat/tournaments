import {
  encode
} from "/build/_shared/chunk-3W3BLEBW.js";
import {
  upload_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/FileUploader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FileUploader = (props) => {
  const {
    children,
    disabled,
    fetcher,
    fieldName,
    fileType,
    maxFileSize,
    isSlip,
    onErrorFileTooLarge,
    onUploading
  } = props;
  const limitFileSize = maxFileSize ? maxFileSize : 2e6;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    upload_default,
    {
      action: "/resources/upload",
      accept: fileType ? fileType : "image/*",
      disabled,
      maxCount: 1,
      beforeUpload: () => false,
      onChange: (info) => {
        const { fileList } = info;
        const { name, size, type } = fileList[0];
        if (onUploading) {
          onUploading(true);
        }
        if (size && size > limitFileSize || fileList.length <= 0) {
          if (onErrorFileTooLarge) {
            onErrorFileTooLarge();
          }
          if (onUploading) {
            onUploading(false);
          }
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          fileList[0].base64 = reader.result;
          if (fileList[0].base64) {
            fetcher.submit(
              {
                name,
                size,
                type,
                file: encode(fileList[0].base64),
                field: fieldName,
                isSlip,
                previewImage: encode(fileList[0].base64)
              },
              {
                method: "put",
                action: "/resources/upload",
                encType: "multipart/form-data"
              }
            );
          }
        };
        reader.readAsArrayBuffer(fileList[0].originFileObj);
      },
      showUploadList: false,
      style: { width: "100%" },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/common/FileUploader.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
};

export {
  FileUploader
};
//# sourceMappingURL=/build/_shared/chunk-KD3NNI5X.js.map
