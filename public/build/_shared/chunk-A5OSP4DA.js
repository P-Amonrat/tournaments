import {
  avatar_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/InlineAvatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
var InlineAvatar = (props) => {
  const { avatarUrl, avatarSize, title, titleLevel, subtitle } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { alignItems: "center" }, children: [
    avatarUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: avatarUrl, size: avatarSize ? avatarSize : 60 }, void 0, false, {
      fileName: "app/components/common/InlineAvatar.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: titleLevel ? titleLevel : 5, style: { margin: 0 }, children: title }, void 0, false, {
        fileName: "app/components/common/InlineAvatar.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      subtitle && subtitle
    ] }, void 0, true, {
      fileName: "app/components/common/InlineAvatar.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/InlineAvatar.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

export {
  InlineAvatar
};
//# sourceMappingURL=/build/_shared/chunk-A5OSP4DA.js.map
