import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  LeftOutlined_default,
  RightOutlined_default,
  space_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/Pagination.tsx
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Pagination(props) {
  const { currentPage, onPageClicked, totalPages } = props;
  let pages = ["1", `${totalPages}`];
  const start = Math.max(currentPage - 2, 2);
  const end = Math.min(currentPage + 2, totalPages - 1);
  const surroundingPages = [];
  for (let i = start; i <= end; i++) {
    surroundingPages.push(`${i}`);
  }
  if (start > 2) {
    surroundingPages.unshift("...");
  }
  if (end < totalPages - 1) {
    surroundingPages.push("...");
  }
  pages.splice(1, 0, ...surroundingPages);
  if (totalPages > 1) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 10, style: { marginTop: 30 }, children: [
      currentPage > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        TiltButton,
        {
          color: "secondary",
          onClick: () => onPageClicked((0, import_lodash.toNumber)(currentPage - 1)),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LeftOutlined_default, {}, void 0, false, {
            fileName: "app/components/common/Pagination.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/Pagination.tsx",
          lineNumber: 36,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/common/Pagination.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      pages.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        TiltButton,
        {
          color: page === `${currentPage}` ? "primary" : "secondary",
          onClick: page !== `${currentPage}` && page !== "..." ? () => onPageClicked((0, import_lodash.toNumber)(page)) : void 0,
          children: page
        },
        page,
        false,
        {
          fileName: "app/components/common/Pagination.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      )),
      currentPage < totalPages && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        TiltButton,
        {
          color: "secondary",
          onClick: () => onPageClicked((0, import_lodash.toNumber)(currentPage + 1)),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RightOutlined_default, {}, void 0, false, {
            fileName: "app/components/common/Pagination.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/Pagination.tsx",
          lineNumber: 59,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/common/Pagination.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Pagination.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this);
  }
}

export {
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-JJYDDLYQ.js.map
