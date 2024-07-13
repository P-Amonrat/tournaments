import {
  WebboardForm
} from "/build/_shared/chunk-PWW2RPXV.js";
import "/build/_shared/chunk-64CVQ3LE.js";
import "/build/_shared/chunk-5IANIR6E.js";
import {
  WebboardTags
} from "/build/_shared/chunk-WSOOSU5J.js";
import "/build/_shared/chunk-A5OSP4DA.js";
import "/build/_shared/chunk-PJTOFOWN.js";
import {
  KycForm
} from "/build/_shared/chunk-VMEWQXI4.js";
import "/build/_shared/chunk-KD3NNI5X.js";
import "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  affix_default,
  col_default,
  form_default,
  modal_default,
  row_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useNavigation,
  useRouteLoaderData,
  useSubmit
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.webboards.new.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function WebboardNew() {
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const { games, rooms, tags, allTags } = webboardRouteLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const [kycModal, setKycModal] = (0, import_react2.useState)(false);
  const navigation = useNavigation();
  const navigationState = navigation.state;
  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent" } },
    modalRender: (modal) => modal
  };
  const handleCreateWebboard = (values) => {
    const newValues = { ...values };
    if (!newValues.hasPoll) {
      delete newValues.pollOptions;
    }
    delete newValues.hasPoll;
    submit(
      {
        data: JSON.stringify(newValues)
      },
      { method: "post" }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        paddingInline: "3.5%",
        paddingBlock: 30,
        maxWidth: 1440,
        marginInline: "auto"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [30, 10], children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 6, order: 1 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(affix_default, { offsetTop: 80, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WebboardTags, { data: tags, fetcher }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 18, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(form_default, { form, layout: "vertical", onFinish: handleCreateWebboard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          WebboardForm,
          {
            fetcher,
            form,
            games,
            rooms,
            tags,
            allTags,
            onKycClicked: () => setKycModal(true),
            navigationState
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.webboards.new.tsx",
            lineNumber: 135,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.new.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          modal_default,
          {
            ...modalProps,
            onCancel: () => setKycModal(false),
            open: kycModal,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              KycForm,
              {
                fetcher,
                form,
                loading: navigation.state !== "idle"
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.webboards.new.tsx",
                lineNumber: 152,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.webboards.new.tsx",
            lineNumber: 147,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/_app.webboards.new.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.webboards.new.tsx",
      lineNumber: 115,
      columnNumber: 5
    },
    this
  );
}
export {
  WebboardNew as default
};
//# sourceMappingURL=/build/routes/_app.webboards.new-2QFR6M2U.js.map
