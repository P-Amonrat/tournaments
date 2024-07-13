import {
  ToCopyField
} from "/build/_shared/chunk-JFV4VOHN.js";
import {
  InlineAvatar
} from "/build/_shared/chunk-A5OSP4DA.js";
import {
  UserAvatar
} from "/build/_shared/chunk-C3CQI34N.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  EditOutlined_default,
  ExclamationCircleFilled_default,
  card_default,
  col_default,
  input_default,
  modal_default,
  row_default,
  space_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import {
  useMatches,
  useNavigate
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/pages/Tournament/TournamentTeam.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text, Title } = typography_default;
function TournamentTeam(props) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const {
    additionalMembers,
    data,
    displayInviteLink,
    minMembers,
    onDelete,
    onEdit,
    onOrganizerAction,
    onRemoveTeamMember,
    onSubmit,
    style,
    submitAction
  } = props;
  const [remark, setRemark] = (0, import_react.useState)("");
  const { baseUrl, scheme } = (0, import_react.useContext)(AppContext);
  const navigate = useNavigate();
  const minimumParticipants = minMembers ? minMembers : 5;
  const [modal, contextHolder] = modal_default.useModal();
  const slots = Array(
    additionalMembers ? minimumParticipants + additionalMembers : minimumParticipants
  ).fill("");
  const requiredSlots = Array(minimumParticipants).fill("");
  const joinTeamUrl = data ? `${baseUrl}/teams/${data.uuid}/join` : "";
  const members = data && data.members ? data.members : [];
  const moreMembers = minimumParticipants - members.length;
  let cardStyle = {
    borderRadius: 10,
    boxShadow: scheme === "dark" ? "0px 4px 15px -5px rgba(255,255,255,0.75)" : "0px 4px 15px -5px rgba(0,0,0,0.75)"
  };
  if (style) {
    cardStyle = { ...cardStyle, ...style };
  }
  const handleUserClicked = (uuid) => {
    navigate(`/users/${uuid}`);
  };
  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
  };
  const handleOrganizerAction = (0, import_react.useCallback)(
    (action) => {
      if (onOrganizerAction) {
        modal.confirm({
          title: `${t(`are you sure to ${action} team`)}?`,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          okText: t("confirm"),
          cancelText: t("cancel"),
          maskClosable: true,
          onOk() {
            onOrganizerAction(action, remark);
            setRemark("");
          }
        });
      }
    },
    [remark]
  );
  const handleRemoveTeamMember = (teamUuid, memberUuid) => {
    if (onRemoveTeamMember) {
      modal.confirm({
        title: `${t(`are you sure to delete team member`)}?`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          onRemoveTeamMember(teamUuid, memberUuid);
        }
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: cardStyle, bordered: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
      data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { wrap: false, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            InlineAvatar,
            {
              avatarUrl: data.displayImage,
              title: data.name,
              subtitle: data.createdBy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: `${t("by")} ${data.createdBy.username}` }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
                lineNumber: 128,
                columnNumber: 23
              }, this) : null
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          onEdit && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            EditOutlined_default,
            {
              onClick: onEdit,
              style: { cursor: "pointer", color: "#8263ea" }
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 135,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, style: { fontSize: 14, margin: 0 }, children: t("team members") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 4, style: { marginTop: 0 }, children: t("my team") }, void 0, false, {
        fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { direction: "vertical", size: 30, style: { display: "flex" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [15, 15], wrap: true, justify: "center", children: slots.map((slot, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: members[index] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          UserAvatar,
          {
            size: 50,
            display: members[index].user.displayImage ? `${cdnUrl}/${members[index].user.displayImage}` : "/image/user-placeholder.png",
            name: members[index].user.displayName,
            onClick: (e) => {
              var _a, _b;
              return handleUserClicked(
                ((_b = (_a = data == null ? void 0 : data.members[index]) == null ? void 0 : _a.user) == null ? void 0 : _b.userName) ? data.members[index].user.userName : data.members[index].user.uuid
              );
            },
            onRemove: onRemoveTeamMember && index != 0 ? (e) => handleRemoveTeamMember(
              data.uuid,
              data.members[index].user.uuid
            ) : void 0
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 156,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          UserAvatar,
          {
            size: 50,
            dashed: index > minimumParticipants - 1
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 182,
            columnNumber: 19
          },
          this
        ) }, `team-member-${index}`, false, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        slots.length - members.length > 0 && displayInviteLink && data && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 10,
            style: { display: "flex", textAlign: "center" },
            children: [
              joinTeamUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToCopyField, { text: joinTeamUrl }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
                lineNumber: 196,
                columnNumber: 31
              }, this),
              requiredSlots.length - members.length <= 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("Member limit reached") }, void 0, false, {
                fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
                t("you require"),
                " ",
                moreMembers,
                " ",
                t("more member")
              ] }, void 0, true, {
                fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 191,
            columnNumber: 13
          },
          this
        ),
        !data && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 10,
            style: { display: "flex", textAlign: "center" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("you are not in a team") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 212,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 207,
            columnNumber: 13
          },
          this
        ),
        onSubmit && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          TiltButton,
          {
            color: submitAction === "leave" ? "danger" : "primary",
            onClick: onSubmit,
            children: t(`${submitAction} team`)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 216,
            columnNumber: 13
          },
          this
        ),
        submitAction === "submit" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TiltButton, { color: "danger", onClick: onDelete, children: t("delete team") }, void 0, false, {
          fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    onOrganizerAction && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      space_default,
      {
        style: { display: "flex", marginTop: 20 },
        direction: "vertical",
        size: 15,
        children: [
          data.status === "pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, style: { fontSize: 14, margin: 0 }, children: t("reject comment") }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Title,
              {
                level: 5,
                style: { fontSize: 14, margin: 0 },
                children: t("remove comment")
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
                lineNumber: 242,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: t("removed team members have to create a new team") }, void 0, false, {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            input_default.TextArea,
            {
              rows: 4,
              onChange: handleRemarkChange,
              value: remark
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 252,
              columnNumber: 11
            },
            this
          ),
          data.status === "pending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltButton,
            {
              color: "danger",
              onClick: () => handleOrganizerAction("reject"),
              children: t("reject team")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 260,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            TiltButton,
            {
              color: "danger",
              onClick: () => handleOrganizerAction("remove"),
              children: t("remove team")
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
              lineNumber: 279,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
            lineNumber: 277,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
        lineNumber: 231,
        columnNumber: 9
      },
      this
    ),
    contextHolder
  ] }, void 0, true, {
    fileName: "app/components/pages/Tournament/TournamentTeam.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

export {
  TournamentTeam
};
//# sourceMappingURL=/build/_shared/chunk-HJN2TGDW.js.map
