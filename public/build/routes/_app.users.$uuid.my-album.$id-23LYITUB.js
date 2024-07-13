import {
  AlbumForm
} from "/build/_shared/chunk-GEQTK47T.js";
import {
  LuHelpCircle,
  LuImagePlus
} from "/build/_shared/chunk-NZBABY6K.js";
import "/build/_shared/chunk-ECVYUX7O.js";
import "/build/_shared/chunk-KD3NNI5X.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  ShareDropDown
} from "/build/_shared/chunk-ZP5K5WKW.js";
import "/build/_shared/chunk-EKWFIVWG.js";
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
  LockOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  DeleteOutlined_default,
  EditOutlined_default,
  ExclamationCircleFilled_default,
  button_default,
  card_default,
  col_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  modal_default,
  notification_default,
  row_default,
  select_default,
  skeleton_default,
  space_default,
  spin_default,
  theme_default,
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
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useRevalidator,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.users.$uuid.my-album.$id.tsx
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());
var import_react6 = __toESM(require_react());

// app/components/common/FileUploaderMultiple.tsx
var import_react = __toESM(require_react());

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// app/components/common/FileUploaderMultiple.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FileUploaderMultiple = (props) => {
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
    isUploading
  } = props;
  const limitFileSize = maxFileSize ? maxFileSize : 2e6;
  const [imageList, setImageList] = (0, import_react.useState)([]);
  const fileInputRef = (0, import_react.useRef)(null);
  const getUUIDs = (array) => {
    return new Set(array.map((item) => item.uid));
  };
  const handleFileUpload = () => {
    var _a;
    const fileList = (_a = fileInputRef.current) == null ? void 0 : _a.files;
    const fileReadPromises = [];
    const timestamp = Math.floor(Date.now() / 1e3);
    const uploadLength = imageList.length > 0 ? maxUpload - imageList.length : maxUpload;
    for (let i = 0; i < Math.min(fileList.length, uploadLength); i++) {
      const fileItem = fileList[i];
      if (onUploading) {
        onUploading(true);
      }
      if (fileItem.size && fileItem.size > limitFileSize || fileList.length <= 0) {
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
        reader.onload = (e) => {
          fileItem.base64 = reader.result;
          const key = `${timestamp}-${fileItem.name}`;
          if (fileItem.base64) {
            resolve({
              key,
              name: fileItem.name,
              size: fileItem.size,
              type: fileItem.type,
              file: encode(fileItem.base64),
              // Assuming you have an encode function for base64 encoding
              field: fieldName,
              isSlip,
              previewImage: encode(fileItem.base64),
              uuid: v4_default()
            });
          }
        };
        reader.readAsArrayBuffer(fileItem);
      });
      fileReadPromises.push(fileReadPromise);
    }
    Promise.all(fileReadPromises).then((images) => {
      const updatedImageList = [...imageList];
      console.log("image lis before", updatedImageList);
      console.log("images", images);
      setImageList([...images]);
      const imageData = images.map((image) => ({
        size: image.size,
        type: image.type,
        name: image.name,
        uuid: image.uuid
      }));
      const imageFileData = images.map((image) => ({
        size: image.size,
        type: image.type,
        name: image.name,
        uuid: image.uuid,
        file: image.file
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
          field: fieldName
        },
        {
          method: "put",
          action: "/resources/uploadMultiple",
          encType: "multipart/form-data"
        }
      );
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        ref: fileInputRef,
        onInput: handleFileUpload,
        multiple: true,
        type: "file",
        accept: "image/*",
        style: { display: "none" }
      },
      void 0,
      false,
      {
        fileName: "app/components/common/FileUploaderMultiple.tsx",
        lineNumber: 164,
        columnNumber: 7
      },
      this
    ),
    isUploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      spin_default,
      {
        tip: "Uploading",
        size: "large",
        style: {
          color: "#7C6FF6",
          backgroundColor: "#7C6FF6",
          marginTop: "95px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content" }, void 0, false, {
          fileName: "app/components/common/FileUploaderMultiple.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/common/FileUploaderMultiple.tsx",
        lineNumber: 173,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => {
      var _a;
      return (_a = fileInputRef.current) == null ? void 0 : _a.click();
    }, children }, void 0, false, {
      fileName: "app/components/common/FileUploaderMultiple.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/FileUploaderMultiple.tsx",
    lineNumber: 163,
    columnNumber: 5
  }, this);
};

// app/routes/_app.users.$uuid.my-album.$id.tsx
var import_session = __toESM(require_session());

// app/components/pages/User/AlbumSingle.tsx
var import_react3 = __toESM(require_react());

// app/components/pages/User/AlbumEntryControl.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function AlbumEntryControl(props) {
  const {
    fetcher,
    id,
    userUuid,
    ignoreShare,
    isOwner,
    isForumAdmin,
    postType,
    initialValues
  } = props;
  const { t } = useTranslation();
  const { baseUrl } = (0, import_react2.useContext)(AppContext);
  const { user } = (0, import_react2.useContext)(AuthContext);
  const [reason, setReason] = (0, import_react2.useState)("");
  const [modal, contextHolder] = modal_default.useModal();
  const [reportModal, setReportModal] = (0, import_react2.useState)(false);
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = (0, import_react2.useState)(false);
  const [form] = form_default.useForm();
  const albumUrl = `${baseUrl}/users/${userUuid}/my-album/${id}`;
  const { Option } = select_default;
  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };
  const openReportModal = () => {
    setReportModal(true);
  };
  const closeReportModal = () => {
    setReportModal(false);
  };
  const onReasonChanged = (e) => {
    setReason(e.target.value);
  };
  const [selectedReason, setSelectedReason] = (0, import_react2.useState)("");
  const reasonOptions = [
    { label: " Inappropriate Content", value: "Inappropriate Content" },
    { label: "Violence", value: "Violence" },
    { label: "Harassment", value: "Harassment" },
    { label: " False Information", value: "False Information" },
    { label: "Spam", value: "Spam" },
    { label: "Unauthorized Sales", value: "Unauthorized Sales" },
    { label: "Others", value: "Others" }
  ];
  const onReasonSelected = (value) => {
    if (value !== "Others") {
      setReason(value);
    } else {
      setReason("");
    }
    setSelectedReason(value);
  };
  const reasonSelect = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    select_default,
    {
      style: { width: "100%" },
      onChange: onReasonSelected,
      value: selectedReason ? selectedReason : void 0,
      disabled: fetcher.state !== "idle",
      placeholder: t("select reason"),
      listHeight: 300,
      children: reasonOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Option, { value: option.value, children: option.label }, option.value, false, {
        fileName: "app/components/pages/User/AlbumEntryControl.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/pages/User/AlbumEntryControl.tsx",
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
  const submitReport = (0, import_react2.useCallback)(() => {
    if (reason.length > 0) {
      fetcher.submit(
        { reason, id, type: postType },
        {
          method: "post",
          action: `/resources/report-post`
        }
      );
    }
  }, [fetcher, postType, reason]);
  const handleDeleteAlbum = (0, import_react2.useCallback)(() => {
    modal.confirm({
      title: `${t(`are you sure you want to delete this album?`)}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/components/pages/User/AlbumEntryControl.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this),
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: initialValues.id, uuid: user.uuid },
          {
            method: "post",
            action: `/resources/delete-album`
          }
        );
      }
    });
  }, [fetcher]);
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.data.success === `report-${postType ? postType : "webboard"}` && fetcher.state === "idle") {
      setReason("");
      setReportModal(false);
      resetFetcher(fetcher);
    }
  }, [fetcher, postType]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 15, children: [
      !ignoreShare && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        ShareDropDown,
        {
          copiedMessage: t("album url copied"),
          postUrl: albumUrl
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/AlbumEntryControl.tsx",
          lineNumber: 162,
          columnNumber: 11
        },
        this
      ),
      isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Text,
          {
            style: { fontSize: 18, cursor: "pointer" },
            onClick: handleOpenCreateAlbumModal,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EditOutlined_default, {}, void 0, false, {
              fileName: "app/components/pages/User/AlbumEntryControl.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumEntryControl.tsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Text,
          {
            style: {
              fontSize: 18,
              cursor: "pointer",
              color: "#ffff",
              backgroundColor: "#f5222d",
              padding: "0 5px",
              borderRadius: 5
            },
            onClick: handleDeleteAlbum,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
              fileName: "app/components/pages/User/AlbumEntryControl.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumEntryControl.tsx",
            lineNumber: 175,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/User/AlbumEntryControl.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/AlbumEntryControl.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setOpenCreateAlbumModal(false),
        open: openCreateAlbumModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          AlbumForm,
          {
            fetcher,
            form,
            onCancel: () => setOpenCreateAlbumModal(false),
            initialValues,
            action: "edit"
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumEntryControl.tsx",
            lineNumber: 196,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/AlbumEntryControl.tsx",
        lineNumber: 191,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      modal_default,
      {
        closeIcon: false,
        footer: null,
        open: reportModal,
        onCancel: closeReportModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { level: 4, style: { margin: 0 }, children: t("please input reason to report") }, void 0, false, {
            fileName: "app/components/pages/User/AlbumEntryControl.tsx",
            lineNumber: 211,
            columnNumber: 11
          }, this),
          reasonSelect,
          selectedReason === "Others" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            input_default.TextArea,
            {
              rows: 4,
              onChange: onReasonChanged,
              value: reason,
              disabled: fetcher.state !== "idle"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/AlbumEntryControl.tsx",
              lineNumber: 216,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            TiltButton,
            {
              color: "danger",
              onClick: submitReport,
              disabled: !reason.length || fetcher.state !== "idle",
              children: t("report")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/AlbumEntryControl.tsx",
              lineNumber: 223,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/User/AlbumEntryControl.tsx",
          lineNumber: 210,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/AlbumEntryControl.tsx",
        lineNumber: 204,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AlbumEntryControl.tsx",
    lineNumber: 159,
    columnNumber: 5
  }, this);
}

// app/components/pages/User/AlbumSingle.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { useToken } = theme_default;
var { Text: Text2, Title: Title2 } = typography_default;
function AlbumSingle(props) {
  const { data, uuid, photos, fetcher } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { scheme } = (0, import_react3.useContext)(AppContext);
  const { user } = (0, import_react3.useContext)(AuthContext);
  const { t } = useTranslation();
  const { token } = useToken();
  const isOwner = user && data && data.userId && data.userId === user.id;
  const isForumAdmin = user && user.roles.includes("forum_admin");
  const [messageApi, contextHolder] = notification_default.useNotification();
  const [uploading, setUploading] = (0, import_react3.useState)(false);
  const [visible, setVisible] = (0, import_react3.useState)(false);
  const [hoveredPhoto, setHoveredPhoto] = (0, import_react3.useState)(null);
  const [modal, contextHolder2] = modal_default.useModal();
  const photosStyle = {
    height: 200,
    opacity: 0,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  const cardStyle = {
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "none" : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    border: "none"
  };
  const handleFileTooLarge = () => {
    messageApi.open({
      type: "error",
      message: t("file upload failed due to too large image size"),
      duration: 5,
      placement: "bottomRight"
    });
  };
  const handleDelete = (0, import_react3.useCallback)(
    (photoId) => {
      modal.confirm({
        title: `${t(`are you sure you want to delete this photo?`)}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/components/pages/User/AlbumSingle.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { albumId: data.id, photoId },
            {
              method: "post",
              action: `/resources/delete-photo-album`
            }
          );
        }
      });
    },
    [fetcher]
  );
  (0, import_react3.useEffect)(() => {
    if (fetcher.data && fetcher.data.field && fetcher.state) {
      if (fetcher.data.field === "paths" && fetcher.data.imageKeyOnlyList) {
        fetcher.submit(
          {
            paths: JSON.stringify({ paths: fetcher.data.imageKeyOnlyList }),
            id: data.id
          },
          {
            method: "put",
            action: "/resources/upload-album-paths",
            encType: "multipart/form-data"
          }
        );
      }
      setUploading(false);
    }
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(card_default, { style: cardStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { gap: 20, vertical: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(flex_default, { justify: "space-between", align: "flex-start", wrap: "wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title2, { level: 5, children: [
          data.isPrivate ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            LockOutlined_default,
            {
              style: { color: "#7C6FF6", marginRight: "5px" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/AlbumSingle.tsx",
              lineNumber: 127,
              columnNumber: 17
            },
            this
          ) : "",
          data.name
        ] }, void 0, true, {
          fileName: "app/components/pages/User/AlbumSingle.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          AlbumEntryControl,
          {
            fetcher,
            id: data.id,
            userUuid: uuid,
            isOwner,
            isForumAdmin,
            initialValues: data,
            postType: "album"
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumSingle.tsx",
            lineNumber: 135,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/pages/User/AlbumSingle.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { children: data.description }, void 0, false, {
        fileName: "app/components/pages/User/AlbumSingle.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(row_default, { gutter: [20, 20], wrap: true, children: [
        isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 12, md: 6, children: uploading ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              paddingBottom: "60%",
              borderRadius: 12,
              backgroundColor: token.colorBgLayout
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              space_default,
              {
                direction: "vertical",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(spin_default, { size: "large", style: { color: "#7C6FF6" } }, void 0, false, {
                    fileName: "app/components/pages/User/AlbumSingle.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { style: { color: "#7C6FF6", margin: 0 }, children: t("uploading") }, void 0, false, {
                    fileName: "app/components/pages/User/AlbumSingle.tsx",
                    lineNumber: 172,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/AlbumSingle.tsx",
                lineNumber: 159,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumSingle.tsx",
            lineNumber: 150,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          FileUploaderMultiple,
          {
            fetcher,
            fieldName: "paths",
            maxUpload: 5,
            onUploading: setUploading,
            onErrorFileTooLarge: handleFileTooLarge,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "div",
                {
                  style: {
                    position: "relative",
                    width: "100%",
                    paddingBottom: "60%",
                    borderRadius: 12,
                    backgroundColor: token.colorBgLayout,
                    cursor: "pointer"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    space_default,
                    {
                      direction: "horizontal",
                      size: 10,
                      style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LuImagePlus, { style: { fontSize: "1.5em" } }, void 0, false, {
                          fileName: "app/components/pages/User/AlbumSingle.tsx",
                          lineNumber: 205,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Title2, { level: 5, style: { margin: 0 }, children: t("upload images in album") }, void 0, false, {
                          fileName: "app/components/pages/User/AlbumSingle.tsx",
                          lineNumber: 206,
                          columnNumber: 25
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/pages/User/AlbumSingle.tsx",
                      lineNumber: 195,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/AlbumSingle.tsx",
                  lineNumber: 185,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { position: "absolute", top: -10, right: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                tooltip_default,
                {
                  placement: "top",
                  arrow: false,
                  title: `${t("recommended resolution")} 1920x1080 px`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    LuHelpCircle,
                    {
                      size: 24,
                      style: { cursor: "pointer", color: "#7a6fee" }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/AlbumSingle.tsx",
                      lineNumber: 217,
                      columnNumber: 25
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/User/AlbumSingle.tsx",
                  lineNumber: 212,
                  columnNumber: 23
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/User/AlbumSingle.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/User/AlbumSingle.tsx",
            lineNumber: 178,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/User/AlbumSingle.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        uploading && photos.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { span: 12, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          card_default,
          {
            bordered: false,
            style: {
              ...photosStyle
            }
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/AlbumSingle.tsx",
            lineNumber: 229,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/User/AlbumSingle.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this) : false,
        photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          col_default,
          {
            span: 12,
            md: 6,
            onMouseEnter: () => setHoveredPhoto(photo.path),
            onMouseLeave: () => setHoveredPhoto(null),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "div",
              {
                style: {
                  width: "100%",
                  paddingBottom: "60%",
                  borderRadius: 12,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url("${cdnUrl}/${photo.path}")`,
                  cursor: "pointer"
                },
                onClick: () => setVisible(photo.path),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    image_default,
                    {
                      style: { display: "none" },
                      wrapperStyle: { display: "none" },
                      src: `${cdnUrl}/${photo.path}`,
                      preview: {
                        visible: visible === photo.path,
                        src: `${cdnUrl}/${photo.path}`,
                        onVisibleChange: (value) => {
                          setVisible(value);
                        }
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/AlbumSingle.tsx",
                      lineNumber: 259,
                      columnNumber: 19
                    },
                    this
                  ),
                  hoveredPhoto === photo.path && isOwner && // <Button
                  //   type="primary"
                  //   shape="circle"
                  //   icon={<DeleteOutlined />}
                  //   style={{
                  // position: "absolute",
                  // top: 10,
                  // right: 10,
                  //   }}
                  //   onClick={(e) => {
                  //     e.stopPropagation();
                  //     handleDelete(photo.id);
                  //   }}
                  // />
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text2,
                    {
                      style: {
                        position: "absolute",
                        top: 10,
                        right: 15,
                        fontSize: 18,
                        cursor: "pointer",
                        color: "#ffff",
                        backgroundColor: "#f5222d",
                        padding: "0 5px",
                        borderRadius: 5
                      },
                      onClick: (e) => {
                        e.stopPropagation();
                        handleDelete(photo.id);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteOutlined_default, {}, void 0, false, {
                        fileName: "app/components/pages/User/AlbumSingle.tsx",
                        lineNumber: 303,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/User/AlbumSingle.tsx",
                      lineNumber: 286,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/pages/User/AlbumSingle.tsx",
                lineNumber: 247,
                columnNumber: 17
              },
              this
            )
          },
          index,
          false,
          {
            fileName: "app/components/pages/User/AlbumSingle.tsx",
            lineNumber: 240,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/components/pages/User/AlbumSingle.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/AlbumSingle.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    contextHolder,
    contextHolder2
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AlbumSingle.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/AlbumSingle.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// app/routes/_app.users.$uuid.my-album.$id.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var modalProps2 = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function UserMyWebboards() {
  const { searchParams, singleAlbum, singlePhotosAlbum, uuid } = useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { user } = (0, import_react6.useContext)(AuthContext);
  const [api, contextHolder] = notification_default.useNotification();
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = (0, import_react6.useState)(false);
  const [items, setItems] = (0, import_react6.useState)([...singlePhotosAlbum.items]);
  const [form] = form_default.useForm();
  const isOwner = user && user.uuid === uuid;
  const navigateToAlbums = () => {
    navigate(`/users/${uuid}/my-album`);
  };
  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };
  const handleLoadMore = (0, import_react6.useCallback)(() => {
    const newSearchParams = {
      ...searchParams,
      offset: singlePhotosAlbum.items.length
    };
    const queryString = new URLSearchParams(
      (0, import_lodash.omitBy)(newSearchParams, import_lodash.isNil)
    ).toString();
    fetcher.load(`.?${queryString}`);
  }, [singlePhotosAlbum.items, searchParams]);
  const handleChangePage = (0, import_react6.useCallback)(
    (page) => {
      const newSearchParams = { ...searchParams };
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
        { method: "get" }
      );
    },
    [searchParams, submit]
  );
  (0, import_react6.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "delete-album") {
        revalidator.revalidate();
        resetFetcher(fetcher);
        api.open({
          message: t("successfully deleted post"),
          type: "success",
          duration: 5,
          placement: "bottomRight"
        });
      }
    }
  }, [fetcher, revalidator]);
  (0, import_react6.useEffect)(() => {
    setItems([...singlePhotosAlbum.items]);
  }, [singlePhotosAlbum]);
  (0, import_react6.useEffect)(() => {
    var _a;
    if ((_a = fetcher.data) == null ? void 0 : _a.singlePhotosAlbum) {
      setItems((items2) => {
        var _a2;
        return [
          ...items2,
          ...(_a2 = fetcher.data) == null ? void 0 : _a2.singlePhotosAlbum.items
        ];
      });
    }
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    navigation.state === "loading" && navigation.location.pathname === location.pathname ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { style: { marginBottom: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TiltButton, { color: "primary", onClick: navigateToAlbums, children: t("back to albums") }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        modal_default,
        {
          ...modalProps2,
          onCancel: () => setOpenCreateAlbumModal(false),
          open: openCreateAlbumModal,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            AlbumForm,
            {
              fetcher,
              form,
              onCancel: () => setOpenCreateAlbumModal(false),
              action: "create"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
              lineNumber: 173,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
          lineNumber: 168,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flex_default, { vertical: true, gap: 20, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        AlbumSingle,
        {
          fetcher,
          data: singleAlbum,
          photos: items,
          isMyWebboard: true,
          uuid
        },
        singleAlbum.id,
        false,
        {
          fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
          lineNumber: 181,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      singlePhotosAlbum && items.length < singlePhotosAlbum.total && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { textAlign: "center", marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(button_default, { onClick: handleLoadMore, size: "large", children: t("load more") }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.my-album.$id.tsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}
export {
  UserMyWebboards as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.my-album.$id-23LYITUB.js.map
