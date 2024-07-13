import {
  AlbumIndexEntry
} from "/build/_shared/chunk-PDUDN3KR.js";
import {
  AlbumForm
} from "/build/_shared/chunk-GEQTK47T.js";
import {
  LuBook
} from "/build/_shared/chunk-NZBABY6K.js";
import "/build/_shared/chunk-ECVYUX7O.js";
import "/build/_shared/chunk-KD3NNI5X.js";
import {
  SortableList
} from "/build/_shared/chunk-5YF5Q5NP.js";
import "/build/_shared/chunk-64IMBVZI.js";
import {
  Pagination
} from "/build/_shared/chunk-JJYDDLYQ.js";
import {
  ArrowUpDown
} from "/build/_shared/chunk-EKWFIVWG.js";
import "/build/_shared/chunk-337STSEA.js";
import "/build/_shared/chunk-3W3BLEBW.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  resetFetcher
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  card_default,
  col_default,
  divider_default,
  empty_default,
  form_default,
  modal_default,
  notification_default,
  row_default,
  skeleton_default,
  space_default,
  typography_default
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

// app/routes/_app.users.$uuid.my-album._index.tsx
var import_node = __toESM(require_node());
var import_lodash = __toESM(require_lodash());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
var modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal) => modal
};
function MyAlbums() {
  const { searchParams, albums, uuid } = useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const { scheme } = (0, import_react2.useContext)(AppContext);
  const { user } = (0, import_react2.useContext)(AuthContext);
  const [api, contextHolder] = notification_default.useNotification();
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = (0, import_react2.useState)(false);
  const [sortingModal, setSortingModal] = (0, import_react2.useState)(false);
  const [albumsList, setAlbumsList] = (0, import_react2.useState)(albums.items);
  const [form] = form_default.useForm();
  const isOwner = user && user.uuid === uuid || (user == null ? void 0 : user.userName) === uuid;
  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };
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
  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };
  const onChangeSortItems = (items) => {
    setAlbumsList(items);
  };
  const onCloseSortingModal = () => {
    setSortingModal(false);
  };
  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      albumIds: albumsList.map((item, index) => item.id)
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId)
      },
      {
        method: "post",
        action: `/resources/sorting-albums`
      }
    );
  };
  (0, import_react2.useEffect)(() => {
    setAlbumsList(albums.items && albums.items.length ? albums.items : []);
  }, [albums.items]);
  (0, import_react2.useEffect)(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.albums.items) {
      setAlbumsList(fetcher.data.albums.items);
    }
  }, [fetcher.data]);
  (0, import_react2.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && revalidator.state === "idle") {
      if (fetcher.data.success && fetcher.data.success === "delete-album") {
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
      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      card_default,
      {
        style: {
          borderRadius: 12,
          boxShadow: scheme === "dark" ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)" : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
          border: "none"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            row_default,
            {
              justify: "space-between",
              style: { alignItems: "center" },
              gutter: [0, 10],
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  space_default,
                  {
                    style: {
                      fontWeight: 600,
                      marginRight: "10px",
                      fontSize: "24px"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LuBook, { style: { color: "#7C6FF6" } }, void 0, false, {
                        fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "24px", fontWeight: 600 }, children: t("my albums") }, void 0, false, {
                        fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                    lineNumber: 196,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 195,
                  columnNumber: 13
                }, this),
                isOwner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: 15, align: "center", children: [
                  albumsList.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    space_default,
                    {
                      align: "center",
                      onClick: handleToggleSortingMode,
                      style: { cursor: "pointer" },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          ArrowUpDown,
                          {
                            style: { color: "#7C6FF6", fontSize: "1.2em" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                            lineNumber: 218,
                            columnNumber: 23
                          },
                          this
                        ),
                        t("sort order")
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                      lineNumber: 213,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    TiltButton,
                    {
                      color: "primary",
                      onClick: handleOpenCreateAlbumModal,
                      children: t("create album")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                      lineNumber: 224,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 211,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 210,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
              lineNumber: 190,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { marginBlock: 10 } }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 234,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            modal_default,
            {
              ...modalProps,
              onCancel: () => setOpenCreateAlbumModal(false),
              open: openCreateAlbumModal,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                AlbumForm,
                {
                  fetcher,
                  form,
                  onCancel: () => setOpenCreateAlbumModal(false),
                  action: "create"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 240,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
              lineNumber: 235,
              columnNumber: 11
            },
            this
          ),
          albumsList && albumsList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [30, 30], children: albumsList.map((album, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlbumIndexEntry, { album, uuid }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 251,
            columnNumber: 19
          }, this) }, index, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 250,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(empty_default, { description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("no data") }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 256,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Pagination,
            {
              currentPage: albums.page,
              totalPages: albums.totalPages,
              onPageClicked: handleChangePage
            },
            void 0,
            false,
            {
              fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
              lineNumber: 258,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
        lineNumber: 180,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      modal_default,
      {
        ...modalProps,
        onCancel: () => setSortingModal(false),
        open: sortingModal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              marginTop: "15px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: { fontSize: "24px", fontWeight: "600" }, children: t("sorting order") }, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                lineNumber: 275,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(divider_default, { style: { margin: 7 } }, void 0, false, {
                fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                lineNumber: 278,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                SortableList,
                {
                  items: albumsList,
                  onChange: onChangeSortItems,
                  renderItem: (item, items) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SortableList.Item, { id: item.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "relative", margin: "15px" }, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { position: "absolute", zIndex: 1e3 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SortableList.DragHandle, {}, void 0, false, {
                      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                      lineNumber: 286,
                      columnNumber: 22
                    }, this) }, void 0, false, {
                      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                      lineNumber: 285,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "gray", children: item.name }, void 0, false, {
                      fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                      lineNumber: 288,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                    lineNumber: 284,
                    columnNumber: 17
                  }, this) }, void 0, false, {
                    fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                    lineNumber: 283,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 279,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, style: { marginTop: 30 }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "secondary", onClick: onCloseSortingModal, children: t("cancel") }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 295,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 294,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "primary", onClick: handleSubmitSorting, children: t("save") }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 300,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                  lineNumber: 299,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
                lineNumber: 293,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
            lineNumber: 270,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
        lineNumber: 265,
        columnNumber: 7
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/routes/_app.users.$uuid.my-album._index.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
export {
  MyAlbums as default
};
//# sourceMappingURL=/build/routes/_app.users.$uuid.my-album._index-LWWKLYWB.js.map
