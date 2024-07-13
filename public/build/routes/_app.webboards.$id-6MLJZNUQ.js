import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.webboards.$id.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var webboard = null;
var contentWithoutTags = "";
function WebboardSingle() {
  const { webboard: webboard2 } = useLoaderData();
  (0, import_react2.useEffect)(() => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = (webboard2 == null ? void 0 : webboard2.content) || "";
    contentWithoutTags = tempElement.textContent || "";
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_app.webboards.$id.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
var meta = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E27\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E21\u0E41\u0E25\u0E30\u0E27\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E35\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E15"
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    { property: "og:title", content: (webboard == null ? void 0 : webboard.title) + " | Ctrlg.gg" },
    {
      property: "og:image",
      content: (webboard == null ? void 0 : webboard.thumbnailImage) ? `https://d2007awoau332v.cloudfront.net/${webboard == null ? void 0 : webboard.thumbnailImage}` : "https://d2007awoau332v.cloudfront.net/assets/webboard.jpg"
    },
    {
      property: "og:image:width",
      content: "200"
    },
    {
      property: "og:image:height",
      content: "200"
    },
    {
      property: "og:description",
      content: "\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E27\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E21\u0E41\u0E25\u0E30\u0E27\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E35\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E15"
    }
  ];
};
export {
  WebboardSingle as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.webboards.$id-6MLJZNUQ.js.map
