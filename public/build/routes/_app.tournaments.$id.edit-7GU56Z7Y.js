import {
  TournamentForm
} from "/build/_shared/chunk-BLNU4UUY.js";
import "/build/_shared/chunk-KD3NNI5X.js";
import "/build/_shared/chunk-Z5XIZAK5.js";
import "/build/_shared/chunk-JN57S7X7.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  flattenObject,
  unflattenObject
} from "/build/_shared/chunk-7PTPQV33.js";
import "/build/_shared/chunk-CTZTP5OE.js";
import "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  form_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  useFetcher,
  useLoaderData,
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

// app/routes/_app.tournaments.$id.edit.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TournamentEdit() {
  const { t } = useTranslation();
  const { games } = useLoaderData();
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { tournament } = routeLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = form_default.useForm();
  const navigation = useNavigation();
  const handleEditTournament = (values) => {
    if (values.isOnline) {
      const { finalRoundLocation, finalRoundLocationEn, ...value } = values;
      submit(
        {
          data: JSON.stringify(
            unflattenObject({
              ...value
            })
          )
        },
        { method: "post" }
      );
    } else {
      const { playerCount, additionalPlayerCount, ...rest } = values;
      submit(
        {
          data: JSON.stringify(
            unflattenObject({
              ...rest,
              playerCount: Number(playerCount),
              additionalPlayerCount: Number(additionalPlayerCount)
            })
          )
        },
        { method: "post" }
      );
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    card_default,
    {
      style: {
        borderRadius: 12,
        maxWidth: 800,
        marginInline: "auto"
      },
      bodyStyle: { padding: 30 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        form_default,
        {
          form,
          onFinish: handleEditTournament,
          layout: "vertical",
          initialValues: flattenObject(tournament),
          scrollToFirstError: true,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TournamentForm,
            {
              fetcher,
              form,
              games,
              initialAdditionalLength: tournament && tournament.requirementFields && tournament.requirementFields.length,
              prizeInitialAdditionalLength: tournament && tournament.prize && tournament.prize.length,
              loading: navigation.state !== "idle",
              submitLabel: t("submit"),
              edit: true
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.tournaments.$id.edit.tsx",
              lineNumber: 135,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.tournaments.$id.edit.tsx",
          lineNumber: 128,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.tournaments.$id.edit.tsx",
      lineNumber: 120,
      columnNumber: 5
    },
    this
  );
}
export {
  TournamentEdit as default
};
//# sourceMappingURL=/build/routes/_app.tournaments.$id.edit-7GU56Z7Y.js.map
