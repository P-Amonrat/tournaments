import { useCallback, useContext, useEffect, useState } from "react";
import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import { toNumber } from "lodash";
import {
  Avatar,
  Card,
  Col,
  Divider,
  Form,
  Modal,
  Row,
  Space,
  Typography,
  notification,
  theme,
} from "antd";
import { ExclamationCircleFilled, EditOutlined } from "@ant-design/icons";
import { KycForm, TiltButton, TiltMenus } from "~/components/common";
import * as APIServer from "~/api";
import {
  TournamentGrid,
  TournamentHero,
  TournamentInvitationAlert,
  TournamentSingleMenu,
  TournamentTeam,
  TournamentTeamForm,
  TournamentTeamMemberForm,
} from "~/components/pages/Tournament";
import { AffixMenu } from "~/components/layouts";
import { useTranslation } from "react-i18next";
import { commitSession, getSessionFromRequest } from "~/session.server";
import { AuthContext } from "~/contexts";
import { joinTournaments, resetFetcher } from "~/utils/helper";
import jwt_decode from "jwt-decode";
const { useToken } = theme;
const { Text, Title } = Typography;
let tournament: any = null;

export const loader: LoaderFunction = async ({ params, request }) => {
  const { id } = params;
  const session = await getSessionFromRequest(request);
  const toJoinTeams = session.get("toJoinTeams");
  const accessToken = session.get("accessToken");
  let uuid = "" as string;
  let getInviteAndHaveTeam = false;

  // let tournament: any;
  let relatedTournaments: any;
  let myTeam: any;
  let joinedTournaments: any[] = [];
  let transformedJoinedTournaments: any[] = [];
  try {
    if (id !== undefined) {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getTournament(toNumber(id))
      );

      if (tournamentRes.data) {
        tournament = tournamentRes.data;
      }
      const relatedTournamentsRes = await APIServer.clientFromSession().request(
        APIServer.getTournamentsPaginate({ game: tournament.game.name })
      );
      if (relatedTournamentsRes.data) {
        relatedTournaments = relatedTournamentsRes.data.data.slice(0, 5);
      }
      if (accessToken) {
        const myTeamRes = await APIServer.clientFromSession(session).request(
          APIServer.getMyTeamFromTournamentId(toNumber(id))
        );
        if (myTeamRes.data && Object.keys(myTeamRes.data).length > 0) {
          myTeam = myTeamRes.data;
        }
      }
    }
  } catch (e) {
    console.log("e", e);
    return redirect("/tournaments");
  }

  if (accessToken) {
    const accessTokenDecoded: any = jwt_decode(accessToken);
    uuid = accessTokenDecoded.sub;
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getJoinedTournament(uuid)
      );
      if (tournamentRes.data) {
        joinedTournaments = tournamentRes.data;
      }

      transformedJoinedTournaments = joinedTournaments.map((item) => {
        return {
          id: item.tournament.id,
          name: item.tournament.name,
          nameEn: item.tournament.nameEn,
          discordUrl: item.tournament.discordUrl,
          registrationStartDate: item.tournament.registrationStartDate,
          registrationEndDate: item.tournament.registrationEndDate,
          startDate: item.tournament.startDate,
          endDate: item.tournament.endDate,
          maxTeam: item.tournament.maxTeam,
          playerCount: item.tournament.playerCount,
          additionalPlayerCount: item.tournament.additionalPlayerCount,
          type: item.tournament.type,
          status: item.tournament.status,
          finalRoundLocation: item.tournament.finalRoundLocation,
          finalRoundLocationEn: item.tournament.finalRoundLocationEn,
          prize: item.tournament.prize,
          description: item.tournament.description,
          descriptionEn: item.tournament.descriptionEn,
          qualificationRules: item.tournament.qualificationRules,
          qualificationRulesEn: item.tournament.qualificationRulesEn,
          isOnline: item.tournament.isOnline,
          bannerImageUrl: item.tournament.bannerImageUrl,
          thumbnailImageUrl: item.tournament.thumbnailImageUrl,
          remark: item.tournament.remark,
          isKycRequired: item.tournament.isKycRequired,
          isDiscordIdRequired: item.tournament.isDiscordIdRequired,
          isEmailRequired: item.tournament.isEmailRequired,
          isPhoneNumberRequired: item.tournament.isPhoneNumberRequired,
          isIgnRequired: item.tournament.isIgnRequired,
          requirementFields: item.tournament.requirementFields,
          organizerId: item.tournament.organizerId,
          gameId: item.tournament.gameId,
          organizer: item.tournament.organizer,
          game: item.tournament.game,
          createdDate: item.tournament.createdDate,
          updatedDate: item.tournament.updatedDate,
        };
      });
      relatedTournaments = joinTournaments(
        relatedTournaments,
        transformedJoinedTournaments
      );
    } catch (e) {
      console.log("e", e);
    }
  }

  if (toJoinTeams && myTeam) {
    getInviteAndHaveTeam = true;
  }

  return json({
    id,
    myTeam,
    relatedTournaments,
    toJoinTeams,
    tournament,
    getInviteAndHaveTeam,
  });
};

export { tournament };

export const action: ActionFunction = async ({ params, request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const currentAction = formdata.get("action");
  const teamUuid = formdata.get("teamUuid") as string;
  const toJoinTeamUuid = formdata.get("toJoinTeamUuid") as string;
  const memberUuid = formdata.get("memberUuid") as string;
  const submitData = formdata.get("data");
  const tournamentId = formdata.get("tournamentId");

  let success: any = null;
  let updatedTeam: any = null;
  try {
    const flashObject = {
      type: "success",
      message: `successfully ${currentAction}`,
      updateUser: true,
    } as any;
    if (request.method === "DELETE") {
      const deleteTeamRes = await APIServer.clientFromSession(session).request(
        APIServer.deleteTeamMember(teamUuid, memberUuid)
      );
      if (deleteTeamRes.data) {
        updatedTeam = deleteTeamRes.data;
      }
    } else {
      if (teamUuid) {
        if (submitData) {
          await APIServer.clientFromSession(session).request(
            currentAction === "join-team"
              ? APIServer.createTeamMember(toJoinTeamUuid, submitData)
              : currentAction === "update-team-member"
              ? APIServer.updateTeamMember(teamUuid, submitData)
              : APIServer.updateTeam(tournamentId, submitData)
          );
          session.unset("toJoinTeams");
          flashObject.updateUser = true;
        } else {
          await APIServer.clientFromSession(session).request(
            currentAction === "leave-team"
              ? APIServer.leaveTeam(teamUuid)
              : currentAction === "submit-team"
              ? APIServer.submitTeam(teamUuid)
              : APIServer.deleteTeam(teamUuid)
          );
        }
      } else if (submitData) {
        await APIServer.clientFromSession(session).request(
          currentAction === "submit-kyc"
            ? APIServer.submitKyc(submitData)
            : APIServer.createTeam(tournamentId, submitData)
        );
        flashObject.updateUser = true;
      }
    }
    success = currentAction;
    if (currentAction === "unset-invite") {
      session.unset("toJoinTeams");
      session.flash("flashMessage", {
        type: "error",
        message: "You are already in a team",
      });
    } else {
      session.flash("flashMessage", flashObject);
    }
  } catch (e: any) {
    if (currentAction !== "submit-kyc") {
      session.flash("flashMessage", {
        type: "error",
        message:
          e.errors && e.errors.length > 1
            ? e.errors[0]
            : e.response.data.message,
      });
    } else {
      session.flash("flashMessage", {
        type: "error",
        message:
          e.errors && e.errors.length > 1
            ? e.errors[0]
            : e.response.data.message.desc
            ? e.response.data.message.desc
            : e.response.data.error,
      });
    }
  }
  return json(
    { success, team: updatedTeam },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "พบกับทัวร์นาเมนต์สุดมันส์ ใคร ๆ ก็เป็นได้ทั้งนักแข่งและผู้จัด",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    { property: "og:title", content: tournament?.name + " | Ctrlg.gg" },
    {
      property: "og:image",
      content: tournament?.thumbnailImageUrl
        ? `https://d2007awoau332v.cloudfront.net/${tournament?.thumbnailImageUrl}`
        : "https://d2007awoau332v.cloudfront.net/assets/root.jpg",
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:description",
      content: "พบกับทัวร์นาเมนต์สุดมันส์ ใคร ๆ ก็เป็นได้ทั้งนักแข่งและผู้จัด",
    },
  ];
};

export default function TournamentSingle() {
  const {
    id,
    myTeam,
    relatedTournaments,
    toJoinTeams,
    tournament,
    getInviteAndHaveTeam,
  } = useLoaderData();
  const { t } = useTranslation();
  const { token } = useToken();
  const { user, openLoginModal } = useContext(AuthContext);
  const isOrganizer = tournament.organizer.id === user?.id;
  const { menus } = TournamentSingleMenu(isOrganizer);

  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();
  const [currentTeam, setCurrentTeam] = useState<any>(myTeam);
  const [toUpdateTeamData, setToUpdateTeamData] = useState<any>(null);
  const [kycModal, setKycModal] = useState<boolean>(false);
  const [afterKycSuccess, setAfterKycSuccess] = useState<string>("");
  const [teamModal, setTeamModal] = useState<boolean>(false);
  const [memberModal, setMemberModal] = useState<boolean>(false);
  const [joinTeamModal, setJoinTeamModal] = useState<any>(false);
  const [api, messageContextHolder] = notification.useNotification();

  const deleteTournament = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure to delete this tournamnet`)}?`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id },
          {
            method: "delete",
            action: `/resources/delete-tournament`,
          }
        );
      },
    });
  }, [fetcher, id]);

  if (tournament.discordUrl) {
    menus.push({
      link: tournament.discordUrl,
      label: (
        <Space size={10}>
          <Avatar src="/image/social/discord.png" />
          <Text>{t("Discord")}</Text>
        </Space>
      ),
    });
  }
  if (isOrganizer) {
    menus.push({
      link: "edit",
      label: (
        <Space size={5}>
          <EditOutlined /> {t("edit")}
        </Space>
      ),
    });
  }

  const isTeamOwner = (team: any) => {
    return team && team.createdById && user && user.id == team.createdById;
  };
  const isOwner = isTeamOwner(currentTeam);

  let toJoinTeam: any = null;

  if (!myTeam) {
    if (toJoinTeams && toJoinTeams.length > 0) {
      toJoinTeam = toJoinTeams.find((t: any) => t.tournamentId == id);
      if (user && toJoinTeam && toJoinTeam.createdById == user.id) {
        toJoinTeam = null;
      }
    }
  }

  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent" } },
    modalRender: (modal: any) => modal,
  } as any;

  const kycNeeded = (currentUser: any) => {
    return (
      tournament.isKycRequired &&
      currentUser &&
      (!currentUser.profile || !currentUser.isDopaVerified)
    );
  };

  const handleTeamActionClicked = useCallback(
    (action?: string) => {
      if (!user) {
        openLoginModal();
        return;
      }
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("team");
        return;
      }
      if (currentTeam && currentTeam.uuid) {
        modal.confirm({
          title: action
            ? `${t(`are you sure to ${action} team`)}?`
            : isOwner
            ? `${t(`are you sure to submit team`)}?`
            : `${t(`are you sure to leave team`)}?`,
          icon: <ExclamationCircleFilled />,
          okText: t("confirm"),
          okType: action === "delete" || isOwner ? "primary" : "danger",
          cancelText: t("cancel"),
          maskClosable: true,
          onOk() {
            fetcher.submit(
              {
                action: `${
                  action ? action : isOwner ? "submit" : "leave"
                }-team`,
                teamUuid: currentTeam.uuid,
              },
              { method: "post" }
            );
          },
        });
      } else {
        setTeamModal(true);
      }
    },
    [currentTeam, user]
  );

  const handleTeamEditClicked = useCallback(() => {
    if (!user) {
      openLoginModal();
      return;
    }
    if (isTeamOwner(currentTeam)) {
      setTeamModal(true);
    } else {
      setMemberModal(true);
    }
  }, [currentTeam, user]);

  const handleJoinTeam = useCallback(() => {
    if (toJoinTeam) {
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("join");
        return;
      }
      setJoinTeamModal(true);
    }
  }, [user]);

  const handleRemoveTeamMember = (teamUuid: string, memberUuid: string) => {
    fetcher.submit(
      {
        action: "delete-team-member",
        teamUuid,
        memberUuid,
      },
      { method: "delete" }
    );
  };

  const handleMemberSubmitted = useCallback(
    (values: any) => {
      if (!user) {
        openLoginModal();
        return;
      }
      if (toUpdateTeamData) {
        if (currentTeam && currentTeam.uuid) {
          fetcher.submit(
            {
              action: "update-team",
              data: JSON.stringify({
                ...values,
                ...toUpdateTeamData,
              }),
              teamUuid: currentTeam.uuid,
              tournamentId: tournament.id,
            },
            { method: "post" }
          );
        } else {
          fetcher.submit(
            {
              action: "create-team",
              data: JSON.stringify({
                ...values,
                ...toUpdateTeamData,
              }),
              tournamentId: tournament.id,
            },
            { method: "post" }
          );
        }
      } else if (toJoinTeam) {
        fetcher.submit(
          {
            action: "join-team",
            data: JSON.stringify(values),
            teamUuid: toJoinTeam.uuid,
            toJoinTeamUuid: toJoinTeam.uuid,
          },
          { method: "post" }
        );
      } else if (currentTeam && currentTeam.uuid) {
        fetcher.submit(
          {
            action: "update-team-member",
            data: JSON.stringify(values),
            teamUuid: currentTeam.uuid,
          },
          { method: "put" }
        );
      }
    },
    [currentTeam, toUpdateTeamData, user]
  );

  // Auto popup join team modal
  useEffect(() => {
    if (toJoinTeam) {
      if (!user) {
        openLoginModal();
        return;
      }
      if (kycNeeded(user)) {
        setKycModal(true);
        setAfterKycSuccess("join");
        return;
      }
      setJoinTeamModal(true);
    }
  }, [user]);

  useEffect(() => {
    setCurrentTeam(myTeam);
  }, [myTeam]);

  useEffect(() => {
    if (getInviteAndHaveTeam) {
      fetcher.submit(
        {
          action: "unset-invite",
        },
        { method: "patch" }
      );
    }
  }, [getInviteAndHaveTeam]);

  useEffect(() => {
    if (
      fetcher.data &&
      fetcher.data.success &&
      fetcher.state === "idle" &&
      revalidator.state === "idle"
    ) {
      if (fetcher.data.team) {
        setCurrentTeam(fetcher.data.team);
      }
      let joinModal = false;
      let teamModal = false;
      if (fetcher.data.success === "submit-kyc") {
        if (afterKycSuccess === "team") {
          teamModal = true;
        } else if (afterKycSuccess === "join") {
          joinModal = true;
        }
      }
      setJoinTeamModal(joinModal);
      setTeamModal(teamModal);
      setMemberModal(false);
      setKycModal(false);
      revalidator.revalidate();
      api.open({
        message: t(`successfully ${fetcher.data.success}`),
        type: "success",
        duration: 5,
        placement: "bottomRight",
      });
      resetFetcher(fetcher);
    }
  }, [fetcher, afterKycSuccess, revalidator]);

  const canEdit =
    tournament.status === "opening" &&
    (!currentTeam ||
      (currentTeam && currentTeam.status === "draft") ||
      currentTeam.status === "rejected");

  return (
    <>
      {contextHolder}
      <TournamentHero data={tournament} />
      <div
        style={{
          paddingInline: "3.5%",
          paddingTop: 0,
          paddingBottom: 30,
          maxWidth: 1440,
          marginInline: "auto",
        }}
      >
        {toJoinTeam && (
          <TournamentInvitationAlert
            data={toJoinTeam}
            onClick={handleJoinTeam}
          />
        )}
        <AffixMenu>
          <Space>
            <TiltMenus menus={menus} preventScrollReset />
            {isOrganizer && (
              <TiltButton color="danger" onClick={deleteTournament}>
                {t("delete")}
              </TiltButton>
            )}
          </Space>
        </AffixMenu>
        <Row gutter={[40, 40]}>
          <Col span={24} md={{ span: 8, order: 1 }}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <TournamentTeam
                data={currentTeam}
                displayInviteLink={canEdit}
                onDelete={() => handleTeamActionClicked("delete")}
                onSubmit={
                  canEdit
                    ? () =>
                        handleTeamActionClicked(isOwner ? "submit" : "leave")
                    : undefined
                }
                onRemoveTeamMember={
                  canEdit && isTeamOwner(currentTeam)
                    ? handleRemoveTeamMember
                    : undefined
                }
                onEdit={canEdit ? handleTeamEditClicked : undefined}
                additionalMembers={tournament.additionalPlayerCount}
                minMembers={tournament.playerCount}
                submitAction={
                  currentTeam
                    ? canEdit && isTeamOwner(currentTeam)
                      ? "submit"
                      : "leave"
                    : "create"
                }
              />
              {currentTeam && currentTeam.status === "pending" ? (
                <Card
                  bodyStyle={{ padding: 10, textAlign: "center" }}
                  bordered={false}
                  style={{
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase,
                  }}
                >
                  <Title
                    level={5}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {t("your team is waiting for approval")}
                  </Title>
                </Card>
              ) : currentTeam && currentTeam.status === "rejected" ? (
                <Card
                  bodyStyle={{ padding: 10, textAlign: "center" }}
                  bordered={false}
                  style={{
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase,
                  }}
                >
                  <Space direction="vertical">
                    <Title
                      level={4}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#c73320",
                      }}
                    >
                      {t("your team has been rejected")}
                    </Title>
                    <Title
                      level={5}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {t(currentTeam.remark)}
                    </Title>
                  </Space>
                </Card>
              ) : currentTeam && currentTeam.status === "approved" ? (
                <Card
                  bodyStyle={{ padding: 10, textAlign: "center" }}
                  bordered={false}
                  style={{
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase,
                  }}
                >
                  <Title
                    level={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {t("your team has been approved")}
                  </Title>
                </Card>
              ) : currentTeam && currentTeam.status === "pending" ? (
                <Card
                  bodyStyle={{ padding: 10, textAlign: "center" }}
                  bordered={false}
                  style={{
                    borderRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    backgroundColor: token.colorBgBase,
                  }}
                >
                  <Title
                    level={4}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {t("your team is waiting for approval")}
                  </Title>
                </Card>
              ) : null}
            </Space>
          </Col>
          <Col span={24} md={{ span: 16, order: 0 }}>
            <Outlet />
          </Col>
        </Row>
        <Divider style={{ marginBlock: 40 }} />
        <Title level={3} style={{ marginBottom: 30 }}>
          {t("related tournaments")}
        </Title>
        <TournamentGrid data={relatedTournaments} />
        <Modal
          {...modalProps}
          onCancel={() => setKycModal(false)}
          open={kycModal}
        >
          <KycForm
            fetcher={fetcher}
            form={form}
            loading={fetcher.state !== "idle"}
          />
        </Modal>
        <Modal
          {...modalProps}
          onCancel={() => setTeamModal(false)}
          open={teamModal && !(memberModal || joinTeamModal)}
          zIndex={1001}
        >
          <TournamentTeamForm
            team={currentTeam}
            form={form}
            isSlipRequired={tournament.isSlipRequired}
            onCancel={() => {
              setTeamModal(false);
              setToUpdateTeamData(null);
            }}
            onSubmit={(values: any) => {
              setToUpdateTeamData({ ...values });
              setMemberModal(true);
              setTeamModal(false);
            }}
            submitLabel={t("next")}
          />
        </Modal>
        <Modal
          {...modalProps}
          onCancel={() => {
            setMemberModal(false);
            setJoinTeamModal(false);
          }}
          open={memberModal || joinTeamModal}
          zIndex={1002}
        >
          <TournamentTeamMemberForm
            currentTeam={currentTeam}
            team={
              joinTeamModal
                ? toJoinTeam
                : toUpdateTeamData
                ? toUpdateTeamData
                : currentTeam
            }
            onBack={
              toUpdateTeamData
                ? // eslint-disable-next-line no-sequences
                  () => (setMemberModal(false), setTeamModal(true))
                : undefined
            }
            isDiscordIdRequired={tournament.isDiscordIdRequired}
            isEmailRequired={tournament.isEmailRequired}
            isPhoneNumberRequired={tournament.isPhoneNumberRequired}
            isIgnRequired={tournament.isIgnRequired}
            additionalFields={tournament.requirementFields}
            onSubmit={handleMemberSubmitted}
            submitLabel={
              currentTeam
                ? t("save")
                : joinTeamModal
                ? t("join")
                : t("create team")
            }
          />
        </Modal>
        {messageContextHolder}
      </div>
    </>
  );
}
