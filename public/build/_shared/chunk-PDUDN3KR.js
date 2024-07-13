import {
  LuLock
} from "/build/_shared/chunk-NZBABY6K.js";
import {
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  Link,
  useMatches
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/User/AlbumIndexEntry.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
function AlbumIndexEntry(props) {
  const { t } = useTranslation();
  const { album, uuid } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/users/${uuid}/my-album/${album.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 10, style: { display: "flex" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          width: "100%",
          paddingBottom: "60%",
          borderRadius: 12,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: album && album.cover && album.cover !== "-" ? `url("${cdnUrl}/${album.cover}")` : void 0
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 0, style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 8, children: [
        album.isPrivate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LuLock, { style: { fontSize: "1em" } }, void 0, false, {
          fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
          lineNumber: 36,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: album.name }, void 0, false, {
          fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      album.totalPhotos && album.totalPhotos !== "0" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: `${album.totalPhotos} ${t("images")}` }, void 0, false, {
        fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/AlbumIndexEntry.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

export {
  AlbumIndexEntry
};
//# sourceMappingURL=/build/_shared/chunk-PDUDN3KR.js.map
