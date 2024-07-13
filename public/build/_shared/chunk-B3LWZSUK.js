import {
  avatar_default,
  space_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/Author.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Author(props) {
  const { children, avatarSize, displayImage, fontSize } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    space_default,
    {
      direction: "horizontal",
      size: 5,
      style: fontSize ? { fontSize } : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          avatar_default,
          {
            size: avatarSize ? avatarSize : 22,
            src: displayImage ? displayImage : null,
            children
          },
          void 0,
          false,
          {
            fileName: "app/components/common/Author.tsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        ),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/common/Author.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

export {
  Author
};
//# sourceMappingURL=/build/_shared/chunk-B3LWZSUK.js.map
