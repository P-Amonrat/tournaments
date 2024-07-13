import { useCallback, useContext, useState } from "react";
import {
  useLoaderData,
  useMatches,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Input,
  Modal,
  Result,
  Row,
  Space,
  Typography,
} from "antd";
import { DownloadOutlined, InboxOutlined } from "@ant-design/icons";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCSVDownloader, usePapaParse } from "react-papaparse";
import { ResponsiveImageCard, TiltButton } from "~/components/common";
import { TournamentTeam } from "~/components/pages/Tournament";
import * as APIServer from "~/api";
import { commitSession, getSessionFromRequest } from "~/session.server";
import { isString, remove, toNumber } from "lodash";
import { AuthContext } from "~/contexts";

const { Title } = Typography;

export const loader: LoaderFunction = async ({ params, request }) => {
  const { id } = params;
  const session = await getSessionFromRequest(request);
  const user = session.get("me");

  let exportPendingTeams: any[] = [];
  let exportApprovedTeams: any[] = [];
  let teams: any[] = [];
  let teamsPending: any[] = [];
  let tournament: any;

  if (id !== undefined) {
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getTournament(toNumber(id))
      );

      if (tournamentRes.data) {
        tournament = tournamentRes.data;
      }
      const isOrganizerAndOwenr = tournament.organizer.id === user?.id;

      if (isOrganizerAndOwenr) {
        const teamsExportApprovedRes = await APIServer.clientFromSession(
          session
        ).request(APIServer.getExportApprovedTeams(Number(id)));
        teamsExportApprovedRes.data.members.forEach((member: any) => {
          if (member.slipimageurl) {
            member.slipimageurl += `?t=${teamsExportApprovedRes.data.slipToken}`;
          }
        });
        if (teamsExportApprovedRes.data) {
          exportApprovedTeams = teamsExportApprovedRes.data.members;
        }

        const teamsExportPendingRes = await APIServer.clientFromSession(
          session
        ).request(APIServer.getExportPendingTeams(Number(id)));
        teamsExportPendingRes.data.members.forEach((member: any) => {
          if (member.slipimageurl) {
            member.slipimageurl += `?t=${teamsExportPendingRes.data.slipToken}`;
          }
        });

        if (teamsExportPendingRes.data) {
          exportPendingTeams = teamsExportPendingRes.data.members;
        }

        const teamsPendingRes = await APIServer.clientFromSession().request(
          APIServer.getTournamentTeamPending(Number(id))
        );
        if (teamsPendingRes.data) {
          teamsPending = teamsPendingRes.data;
        }
      }
    } catch (e: any) {
      console.log("error", e);
    }

    try {
      const teamsRes = await APIServer.clientFromSession().request(
        APIServer.getTournamentTeamApproved(Number(id))
      );

      if (teamsRes.data) {
        teams = teamsRes.data;
      }
    } catch (e: any) {
      console.log("error", e);
    }
  }

  return json({
    id,
    exportPendingTeams,
    exportApprovedTeams,
    teams,
    teamsPending,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const currentAction = formdata.get("action");
  const teamId = Number(formdata.get("teamId"));
  const teamIds: any = formdata.get("teamIds");

  const remark =
    formdata.get("remark") && isString(formdata.get("remark"))
      ? (formdata.get("remark") as string)
      : "";
  let success: any = null;

  try {
    switch (currentAction) {
      case "approve":
        await APIServer.clientFromSession(session).request(
          APIServer.approveTeam(teamId)
        );
        break;
      case "reject":
        await APIServer.clientFromSession(session).request(
          APIServer.rejectTeam(teamId, remark)
        );

        break;
      case "remove":
        await APIServer.clientFromSession(session).request(
          APIServer.removeTeam(teamId, remark)
        );
        break;
      case "bulk-approve":
        if (teamIds.length > 0) {
          await APIServer.clientFromSession(session).request(
            APIServer.bulkApproveTeams([teamIds])
          );
        }
        break;
      case "bulk-reject":
        if (teamIds.length > 0) {
          await APIServer.clientFromSession(session).request(
            APIServer.bulkRejectTeams(teamIds, remark)
          );
        }
        break;
    }
    success = currentAction;
    session.flash("flashMessage", {
      type: "success",
      message: `successfully ${currentAction}`,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message:
        e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data.message,
    });
  }
  return json(
    { success },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export default function TournamentSingleTeams() {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { exportPendingTeams, exportApprovedTeams, teams, teamsPending } =
    useLoaderData();
  const submit = useSubmit();
  const routeLoader = useRouteLoaderData("routes/_app.tournaments.$id");
  const { user } = useContext(AuthContext);
  const { tournament } = routeLoader;
  const { t } = useTranslation();
  const { CSVDownloader, Type } = useCSVDownloader();
  const { jsonToCSV } = usePapaParse();
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [teamModalId, setTeamModalId] = useState<null | number>(null);
  const [teamModalStatus, setTeamModalStatus] = useState<null | string>(null);
  const [remark, setRemark] = useState<string>("");
  const [remarkModal, setRemarkModal] = useState<boolean>(false);
  const isOrganizerAndOwenr = tournament.organizer.id === user?.id;

  const organizerActionAvailable =
    isOrganizerAndOwenr && tournament.status === "opening";

  const approvedTeams = teams.filter(
    (teams: any) => teams.status === "approved"
  );

  const pendingTeams = teamsPending;

  const handleTeamClicked = (teamId: number, status: string) => {
    setTeamModalId(teamId);
    setTeamModalStatus(status);
  };

  const handleCloseModal = () => {
    setTeamModalId(null);
    setTeamModalStatus(null);
  };

  const handleRemarkChanged = (e: any) => {
    setRemark(e.target.value);
  };

  const handleSelectTeam = useCallback(
    (teamId: number) => {
      if (checkedIds.includes(teamId)) {
        remove(checkedIds, (id) => id === teamId);
      } else {
        checkedIds.push(teamId);
      }
      setCheckedIds([...checkedIds]);
    },
    [checkedIds]
  );

  const handleSelectAll = useCallback(
    (e: any) => {
      if (checkedIds.length != pendingTeams.length) {
        setCheckedIds(pendingTeams.map((team: any) => team.id));
      } else {
        setCheckedIds([]);
      }
    },
    [checkedIds, pendingTeams]
  );

  const handleOrganizerAction = useCallback(
    (action: string, remark?: string) => {
      if (teamModalId) {
        submit(
          { action: action, remark: remark ? remark : "", teamId: teamModalId },
          { method: "post" }
        );
        setTeamModalId(null);
        setTeamModalStatus(null);
      }
    },
    [teamModalId]
  );

  const handleBulkApprove = useCallback(() => {
    submit(
      {
        action: "bulk-approve",
        teamIds: checkedIds,
      },
      { method: "post" }
    );
  }, [checkedIds]);

  const handleBulkReject = useCallback(() => {
    submit(
      {
        action: "bulk-reject",
        remark: remark ? remark : "",
        teamIds: checkedIds,
      },
      { method: "post" }
    );
    setRemark("");
    setRemarkModal(false);
  }, [checkedIds, remark]);

  return (
    <>
      <Space direction="vertical" size={20} style={{ display: "flex" }}>
        {organizerActionAvailable &&
          pendingTeams &&
          pendingTeams.length > 0 && (
            <>
              <Row
                style={{ alignItems: "center", marginBottom: 20 }}
                gutter={[10, 20]}
              >
                {isOrganizerAndOwenr && (
                  <Col flex="auto">
                    <Space size={10} style={{ display: "flex" }}>
                      <Title level={4} style={{ margin: 0 }}>
                        {t("pending teams")}
                      </Title>
                      <CSVDownloader
                        type={Type.Link}
                        filename={"pending-teams"}
                        bom={true}
                        data={jsonToCSV([...exportPendingTeams])}
                      >
                        <Button
                          icon={<DownloadOutlined />}
                          style={{
                            backgroundColor: "#7a6fee",
                            border: "none",
                            color: "#fff",
                          }}
                        >
                          {t("export all")}
                        </Button>
                      </CSVDownloader>
                    </Space>
                  </Col>
                )}

                <Col flex="none">
                  <Space size={10} style={{ display: "flex" }}>
                    <Checkbox
                      onChange={handleSelectAll}
                      checked={checkedIds.length == pendingTeams.length}
                    >
                      {t("select all")}
                    </Checkbox>
                    {checkedIds.length > 0 && (
                      <Space size={5}>
                        <Button type="primary" onClick={handleBulkApprove}>
                          {t("approve")}
                        </Button>
                      </Space>
                    )}
                  </Space>
                </Col>
              </Row>
              <Row gutter={[5, 5]}>
                {pendingTeams.map((team: any, index: number) => (
                  <Col key={`pending-${index}`} span={12} sm={8} md={6} lg={4}>
                    <ResponsiveImageCard
                      image={
                        team && team.logo
                          ? `url("${cdnUrl}/${team.logo}")`
                          : `url("/image/placeholder.png")`
                      }
                      label={team.name}
                      onClick={(e: any) =>
                        handleTeamClicked(team.id, team.status)
                      }
                    />
                    <span style={{ position: "absolute", top: 10, right: 10 }}>
                      <Checkbox
                        onChange={() => handleSelectTeam(team.id)}
                        checked={checkedIds.includes(team.id)}
                      />
                    </span>
                  </Col>
                ))}
              </Row>
              <Divider />
            </>
          )}
        <>
          <Space size={10} style={{ display: "flex" }}>
            <Title level={4} style={{ margin: 0 }}>
              {t("tournament participants")}
            </Title>
            {isOrganizerAndOwenr && (
              <CSVDownloader
                type={Type.Link}
                filename={"approved-teams"}
                bom={true}
                data={jsonToCSV([...exportApprovedTeams])}
              >
                <Button
                  icon={<DownloadOutlined />}
                  style={{
                    backgroundColor: "#7a6fee",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  {t("export all")}
                </Button>
              </CSVDownloader>
            )}
          </Space>

          {approvedTeams.length > 0 ? (
            <Row gutter={[5, 5]}>
              {approvedTeams.map((team: any, index: number) => (
                <Col key={`approved-${index}`} span={12} sm={8} md={6} lg={4}>
                  <ResponsiveImageCard
                    image={
                      team && team.logo
                        ? `url("${cdnUrl}/${team.logo}")`
                        : `url("/image/placeholder.png")`
                    }
                    label={team.name}
                    onClick={(e: any) =>
                      handleTeamClicked(team.id, team.status)
                    }
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Card style={{ borderRadius: 10 }}>
              <Result icon={<InboxOutlined />} title={t("no participant")} />
            </Card>
          )}
        </>
      </Space>
      <Modal
        closeIcon={false}
        footer={null}
        open={teamModalId !== null}
        onCancel={handleCloseModal}
        style={{ backgroundColor: "transparent" }}
        styles={{ body: { backgroundColor: "transparent" } }}
        modalRender={(modal) => modal}
      >
        {teamModalId !== null && (
          <TournamentTeam
            data={
              teamModalStatus === "approved"
                ? teams.find((team: any) => team.id === teamModalId)
                : teamsPending.find((team: any) => team.id === teamModalId)
            }
            onOrganizerAction={
              organizerActionAvailable ? handleOrganizerAction : undefined
            }
            additionalMembers={tournament.additionalPlayerCount}
            minMembers={tournament.playerCount}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          />
        )}
      </Modal>
      <Modal
        closeIcon={false}
        footer={null}
        open={remarkModal}
        onCancel={() => setRemarkModal(false)}
      >
        <Space size={20} direction="vertical" style={{ display: "flex" }}>
          <Title level={4} style={{ margin: 0 }}>
            {t("remark")}
          </Title>
          <Input.TextArea
            rows={4}
            value={remark}
            onChange={handleRemarkChanged}
          />
          <Row gutter={10}>
            <Col span={12}>
              <TiltButton
                color="secondary"
                onClick={() => setRemarkModal(false)}
              >
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="danger" onClick={handleBulkReject}>
                {t("confirm")}
              </TiltButton>
            </Col>
          </Row>
        </Space>
      </Modal>
    </>
  );
}
