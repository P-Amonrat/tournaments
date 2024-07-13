import React, { useRef, useState } from "react";
import { Button, Skeleton, Space, Spin, Upload } from "antd";
import { encode } from "base64-arraybuffer";

import { v4 as uuidv4 } from "uuid";

interface FileUploaderProps {
  children: React.ReactNode;

  fetcher: any;
  maxUpload: number;
  fieldName: string;
  fileType?: string;
  maxFileSize?: number;
  isSlip?: boolean;
  disabled?: boolean;
  isUploading?: boolean;
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
    isUploading,
  } = props;
  const limitFileSize = maxFileSize ? maxFileSize : 2000000;
  const [imageList, setImageList] = useState<ImageList[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getUUIDs = (array: any) => {
    return new Set(array.map((item: any) => item.uid));
  };

  const handleFileUpload = () => {
    const fileList = fileInputRef.current?.files as any;

    const fileReadPromises = [] as any;
    const timestamp = Math.floor(Date.now() / 1000);
    const uploadLength =
      imageList.length > 0 ? maxUpload - imageList.length : maxUpload;

    for (let i = 0; i < Math.min(fileList.length, uploadLength); i++) {
      const fileItem = fileList[i];

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
        reader.readAsArrayBuffer(fileItem);
      });
      fileReadPromises.push(fileReadPromise);
    }

    Promise.all(fileReadPromises).then((images: any) => {
      const updatedImageList = [...imageList];
      console.log("image lis before", updatedImageList);

      console.log("images", images);

      setImageList([...images]);

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
      console.log("inputData", inputData);

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
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        onInput={handleFileUpload}
        multiple
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      {isUploading ? (
        <Spin
          tip="Uploading"
          size="large"
          style={{
            color: "#7C6FF6",
            backgroundColor: "#7C6FF6",
            marginTop: "95px",
          }}
        >
          <div className="content" />
        </Spin>
      ) : (
        <div onClick={() => fileInputRef.current?.click()}>{children}</div>
      )}
    </div>
  );
};
