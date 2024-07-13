import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  tooltip_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/TiltMenus.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TiltMenus = (props) => {
  const {
    activeFromQueryString,
    direction,
    menus,
    position,
    preventScrollReset,
    style
  } = props;
  const { scheme } = (0, import_react2.useContext)(AppContext);
  const location = useLocation();
  const renderLink = (menu) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        className: `tilt-menu-link${activeFromQueryString ? " query-string" : ""}${!activeFromQueryString && (location.pathname === menu.link || menu.link !== "/" && location.pathname.indexOf(menu.link) > -1) || menu.link === "." && location.pathname.split("/").filter((p) => p.length > 0).length === menu.level || activeFromQueryString && (location.search === menu.link.substring(1) || location.search === "?index" && menu.link === ".") ? " active" : ""}`,
        to: menu.link,
        preventScrollReset: preventScrollReset ? preventScrollReset : false,
        target: menu.link.indexOf("http") === 0 ? "_blank" : void 0,
        children: menu.label
      },
      void 0,
      false,
      {
        fileName: "app/components/common/TiltMenus.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      this
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "ul",
    {
      className: `tilt-menu${position ? ` ${position} ` : ""}${direction ? ` ${direction} ` : ""} ${scheme}`,
      style,
      children: menus.map((menu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "tilt-menu-item", children: menu.tooltip ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { title: menu.tooltip, placement: "bottom", arrow: false, children: renderLink(menu) }, void 0, false, {
        fileName: "app/components/common/TiltMenus.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) : renderLink(menu) }, index, false, {
        fileName: "app/components/common/TiltMenus.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this))
    },
    void 0,
    false,
    {
      fileName: "app/components/common/TiltMenus.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
};

export {
  TiltMenus
};
//# sourceMappingURL=/build/_shared/chunk-RGETFDE6.js.map
