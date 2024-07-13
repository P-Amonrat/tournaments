import {
  MinusCircleOutlined_default,
  UserOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  avatar_default,
  badge_default,
  tooltip_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/UserAvatar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserAvatar(props) {
  const { dashed, display, name, onClick, onRemove, size } = props;
  let output = display ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      onClick: onClick ? onClick : void 0,
      style: { cursor: onClick ? "pointer" : "default" },
      children: name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { placement: "bottom", title: name, arrow: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: display, size: size ? size : 60 }, void 0, false, {
        fileName: "app/components/common/UserAvatar.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/UserAvatar.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(avatar_default, { src: display, size: size ? size : 60 }, void 0, false, {
        fileName: "app/components/common/UserAvatar.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/UserAvatar.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        padding: 4,
        border: `1px ${dashed ? "dashed" : "solid"} #c0b4b7`,
        borderRadius: "50%",
        height: size ? size : "60px",
        width: size ? size : "60px",
        lineHeight: size ? size : "60px",
        justifyContent: "center",
        alignItems: "center",
        cursor: onClick ? "pointer" : "default"
      },
      onClick: onClick ? onClick : void 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        UserOutlined_default,
        {
          style: {
            fontSize: 20,
            color: "#c0b4b7"
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/common/UserAvatar.tsx",
          lineNumber: 44,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/common/UserAvatar.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
  if (onRemove) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      badge_default,
      {
        count: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              display: "flex",
              backgroundColor: "#c43025",
              padding: 3,
              borderRadius: "50%",
              cursor: "pointer"
            },
            onClick: onRemove,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              MinusCircleOutlined_default,
              {
                style: { fontSize: 12, color: "#fff", strokeWidth: 2 }
              },
              void 0,
              false,
              {
                fileName: "app/components/common/UserAvatar.tsx",
                lineNumber: 67,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/common/UserAvatar.tsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        ),
        children: output
      },
      void 0,
      false,
      {
        fileName: "app/components/common/UserAvatar.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    );
  } else {
    return output;
  }
}

export {
  UserAvatar
};
//# sourceMappingURL=/build/_shared/chunk-C3CQI34N.js.map
