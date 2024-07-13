import React, { useRef, useState } from "react";
import { Upload } from "antd";
import { encode } from "base64-arraybuffer";

import { v4 as uuidv4 } from "uuid";

interface FileUploaderProps {
  children: React.ReactNode;
  disabled?: boolean;
  fetcher: any;
  maxUpload: number;
  fieldName: string;
  fileType?: string;
  maxFileSize?: number;
  isSlip?: boolean;
  onErrorFileTooLarge?: () => void;
  onUploading?: (uploading: boolean) => void;
}

type ImageList = {
  key: string;
  name: string;
  type: string;
  size: number;
  source: string;
  base64: any;
};

type Previews = {
  key: string;
  path: string;
  name: string;
  source: string;
  isSuccess: boolean;
};

export const FileUploaderMultiple: React.FC<FileUploaderProps> = (
  props: FileUploaderProps
) => {
  const {
    children,
    disabled,
    fetcher,
    maxUpload,
    fieldName,
    fileType,
    maxFileSize,
    isSlip,
    onErrorFileTooLarge,
    onUploading,
  } = props;
  const limitFileSize = maxFileSize ? maxFileSize : 2000000;
  const [imageList, setImageList] = useState<ImageList[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Upload
      action="/resources/uploadMultiple"
      accept={fileType ? fileType : "image/*"}
      disabled={disabled}
      maxCount={maxUpload}
      multiple
      beforeUpload={() => false}
      onChange={(info: any) => {
        const { fileList } = info;
        const fileReadPromises = [] as any;
        const timestamp = Math.floor(Date.now() / 1000);

        fileList.forEach((fileItem: any, index: number) => {
          if (onUploading) {
            onUploading(true);
          }
          if (
            (fileItem.size && fileItem.size > limitFileSize) ||
            fileList.length <= 0
          ) {
            if (onErrorFileTooLarge) {
              onErrorFileTooLarge();
            }
            if (onUploading) {
              onUploading(false);
            }
            return;
          }
          const fileReadPromise = new Promise((resolve) => {
            const reader = new FileReader();

            // This event fires when the file has been read
            reader.onload = (e: any) => {
              fileItem.base64 = reader.result;
              const key = `${timestamp}-${fileItem.name}`;
              if (fileItem.base64) {
                resolve({
                  key: key,
                  name: fileItem.name,
                  size: fileItem.size,
                  type: fileItem.type,
                  file: encode(fileItem.base64), // Assuming you have an encode function for base64 encoding
                  field: fieldName,
                  isSlip: isSlip,
                  previewImage: encode(fileItem.base64),
                  uuid: uuidv4(),
                });
              }
            };
            // Start reading the file
            reader.readAsArrayBuffer(fileItem.originFileObj);
          });
          fileReadPromises.push(fileReadPromise);
        });
        Promise.all(fileReadPromises).then((images: any) => {
          setImageList([...imageList, ...images]);

          const imageData = images.map((image: any) => ({
            size: image.size,
            type: image.type,
            name: image.name,
            uuid: image.uuid,
          }));

          const imageFileData = images.map((image: any) => ({
            size: image.size,
            type: image.type,
            name: image.name,
            uuid: image.uuid,
            file: image.file,
          }));

          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }

          const inputData = { images: imageData };
          fetcher.submit(
            {
              inputData: JSON.stringify(inputData),
              imageList: JSON.stringify(imageFileData),
              field: fieldName,
            },
            {
              method: "put",
              action: "/resources/uploadMultiple",
              encType: "multipart/form-data",
            }
          );
        });
      }}
      showUploadList={false}
      style={{ width: "100%" }}
    >
      {children}
    </Upload>
  );
};
