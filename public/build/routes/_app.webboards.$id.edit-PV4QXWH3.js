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
import "/build/_shared/chunk-VMEWQXI4.js";
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.webboards.$id.edit.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function WebboardEdit() {
  const routeLoader = useRouteLoaderData("routes/_app.webboards.$id");
  const { webboard } = routeLoader;
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const { games, rooms, tags } = webboardRouteLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const initialValues = {
    ...webboard,
    hasPoll: webboard.poll ? true : false,
    roomIds: webboard.postRooms.map((postRoom) => postRoom.room.id),
    gameIds: webboard.postGames.map((postGame) => postGame.game.id),
    tags: webboard.postTags.map((postTag) => postTag.tag.name)
  };
  if (webboard.poll) {
    initialValues.pollOptions = webboard.poll.options.map(
      (option) => option.option
    );
  }
  const navigation = useNavigation();
  const navigationState = navigation.state;
  const handleUpdateWebboard = (values) => {
    const { roomIds, ...value } = values;
    const newValues = {
      ...value,
      roomIds: values.roomIds ? values.roomIds : [6]
    };
    if (!newValues.hasPoll) {
      delete newValues.pollOptions;
    }
    delete newValues.hasPoll;
    submit(
      {
        data: JSON.stringify(newValues)
      },
      { method: "put" }
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
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, md: { span: 18, order: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          form_default,
          {
            form,
            layout: "vertical",
            onFinish: handleUpdateWebboard,
            initialValues,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              WebboardForm,
              {
                editmode: true,
                fetcher,
                form,
                games,
                rooms,
                tags,
                tournament: webboard.tournamentId,
                navigationState
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.webboards.$id.edit.tsx",
                lineNumber: 152,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/_app.webboards.$id.edit.tsx",
            lineNumber: 146,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_app.webboards.$id.edit.tsx",
          lineNumber: 145,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.webboards.$id.edit.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.webboards.$id.edit.tsx",
      lineNumber: 127,
      columnNumber: 5
    },
    this
  );
}
export {
  WebboardEdit as default
};
//# sourceMappingURL=/build/routes/_app.webboards.$id.edit-PV4QXWH3.js.map
