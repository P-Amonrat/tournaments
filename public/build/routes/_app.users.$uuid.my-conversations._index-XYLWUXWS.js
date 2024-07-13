import {
  WebboardLists
} from "/build/_shared/chunk-N5A7AEUL.js";
import "/build/_shared/chunk-D5KO673L.js";
import "/build/_shared/chunk-ZP5K5WKW.js";
import {
  Pagination
} from "/build/_shared/chunk-JJYDDLYQ.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  notification_default,
  skeleton_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
  useLocation,
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

// app/routes/_app.users.$uuid.my-conversations._index.tsx
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserMyWebboards() {
  const { searchParams, webboards } = useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const [api, contextHolder] = notification_default.useNotification();
  const handleChangePage = (0, import_react2.useCallback)(
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
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "delete-webboard") {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    navigation.state === "loading" && navigation.location.pathname === location.pathname ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skeleton_default, { active: true }, void 0, false, {
      fileName: "app/routes/_app.users.$uuid.my-conversations._index.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        WebboardLists,
        {
          data: webboards.items,
          fetcher,
          isMyWebboard: true
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.users.$uuid.my-conversations._index.tsx",
          lineNumber: 104,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Pagination,
        {
          currentPage: webboards.page,
          totalPages: webboards.totalPages,
          onPageClicked: handleChangePage
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.users.$uuid.my-conversations._index.tsx",
          lineNumber: 109,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_app.users.$uuid.my-conversations._index.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.my-conversations._index.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
export {
  UserMyWebboards as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.my-conversations._index-XYLWUXWS.js.map
