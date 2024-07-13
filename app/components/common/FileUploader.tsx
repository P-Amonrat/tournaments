import React from "react";
import { Upload } from "antd";
import { encode } from "base64-arraybuffer";

interface FileUploaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  fetcher: any;
  fieldName: string;
  fileType?: string;
  maxFileSize?: number;
  isSlip?: boolean;
  onErrorFileTooLarge?: () => void;
  onUploading?: (uploading: boolean) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = (
  props: FileUploaderProps
) => {
  const {
    children,
    disabled,
    fetcher,
    fieldName,
    fileType,
    maxFileSize,
    isSlip,
    onErrorFileTooLarge,
    onUploading,
  } = props;
  const limitFileSize = maxFileSize ? maxFileSize : 2000000;

  return (
    <Upload
      action="/resources/upload"
      accept={fileType ? fileType : "image/*"}
      disabled={disabled}
      maxCount={1}
      beforeUpload={() => false}
      onChange={(info: any) => {
        const { fileList } = info;
        const { name, size, type } = fileList[0];

        if (onUploading) {
          onUploading(true);
        }
        if ((size && size > limitFileSize) || fileList.length <= 0) {
          if (onErrorFileTooLarge) {
            onErrorFileTooLarge();
          }
          if (onUploading) {
            onUploading(false);
          }
          return;
        }

        const reader = new FileReader();
        reader.onload = (e: any) => {
          fileList[0].base64 = reader.result;

          if (fileList[0].base64) {
            fetcher.submit(
              {
                name,
                size,
                type,
                file: encode(fileList[0].base64),
                field: fieldName,
                isSlip: isSlip,
                previewImage: encode(fileList[0].base64),
              },
              {
                method: "put",
                action: "/resources/upload",
                encType: "multipart/form-data",
              }
            );
          }
        };
        reader.readAsArrayBuffer(fileList[0].originFileObj);
      }}
      showUploadList={false}
      style={{ width: "100%" }}
    >
      {children}
    </Upload>
  );
};
