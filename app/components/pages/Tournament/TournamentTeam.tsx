import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMatches, useNavigate } from "@remix-run/react";
import { Card, Col, Input, Modal, Row, Space, Typography } from "antd";
import { EditOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import {
  InlineAvatar,
  TiltButton,
  ToCopyField,
  UserAvatar,
} from "~/components/common";
import { AppContext } from "~/contexts";
const { Text, Title } = Typography;

interface TournamentTeamProps {
  additionalMembers?: number;
  data: any;
  displayInviteLink?: boolean;
  minMembers?: number;
  onDelete?: () => void;
  onEdit?: (e: any) => void;
  onOrganizerAction?: (action: string, remark?: string) => void;
  onRemoveTeamMember?: (teamUuid: string, memberUuid: string) => void;
  onSubmit?: (e: any) => void;
  style?: any;
  submitAction?: string;
}

export function TournamentTeam(props: TournamentTeamProps) {
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
    submitAction,
  } = props;
  const [remark, setRemark] = useState<string>("");
  const { baseUrl, scheme } = useContext(AppContext);
  const navigate = useNavigate();
  const minimumParticipants = minMembers ? minMembers : 5;
  const [modal, contextHolder] = Modal.useModal();
  const slots = Array(
    additionalMembers
      ? minimumParticipants + additionalMembers
      : minimumParticipants
  ).fill("");
  const requiredSlots = Array(minimumParticipants).fill("");

  const joinTeamUrl = data ? `${baseUrl}/teams/${data.uuid}/join` : "";
  const members = data && data.members ? data.members : [];
  const moreMembers = minimumParticipants - members.length;
  let cardStyle = {
    borderRadius: 10,
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  if (style) {
    cardStyle = { ...cardStyle, ...style };
  }

  const handleUserClicked = (uuid: string) => {
    navigate(`/users/${uuid}`);
  };

  const handleRemarkChange = (e: any) => {
    setRemark(e.target.value);
  };

  const handleOrganizerAction = useCallback(
    (action: string) => {
      if (onOrganizerAction) {
        modal.confirm({
          title: `${t(`are you sure to ${action} team`)}?`,
          icon: <ExclamationCircleFilled />,
          okText: t("confirm"),
          cancelText: t("cancel"),
          maskClosable: true,
          onOk() {
            onOrganizerAction(action, remark);
            setRemark("");
          },
        });
      }
    },
    [remark]
  );

  const handleRemoveTeamMember = (teamUuid: string, memberUuid: string) => {
    if (onRemoveTeamMember) {
      modal.confirm({
        title: `${t(`are you sure to delete team member`)}?`,
        icon: <ExclamationCircleFilled />,
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          onRemoveTeamMember(teamUuid, memberUuid);
        },
      });
    }
  };

  return (
    <Card style={cardStyle} bordered={false}>
      <Space direction="vertical" size={20} style={{ display: "flex" }}>
        {data ? (
          <>
            <Row wrap={false}>
              <Col flex="auto">
                <InlineAvatar
                  avatarUrl={data.displayImage}
                  title={data.name}
                  subtitle={
                    data.createdBy ? (
                      <Text>{`${t("by")} ${data.createdBy.username}`}</Text>
                    ) : null
                  }
                />
              </Col>
              {onEdit && (
                <Col flex="none">
                  <EditOutlined
                    onClick={onEdit}
                    style={{ cursor: "pointer", color: "#8263ea" }}
                  />
                </Col>
              )}
            </Row>
            <Title level={5} style={{ fontSize: 14, margin: 0 }}>
              {t("team members")}
            </Title>
          </>
        ) : (
          <Title level={4} style={{ marginTop: 0 }}>
            {t("my team")}
          </Title>
        )}
        <Space direction="vertical" size={30} style={{ display: "flex" }}>
          <Row gutter={[15, 15]} wrap justify="center">
            {slots.map((slot: any, index: number) => (
              <Col key={`team-member-${index}`}>
                {members[index] ? (
                  <UserAvatar
                    size={50}
                    display={
                      members[index].user.displayImage
                        ? `${cdnUrl}/${members[index].user.displayImage}`
                        : "/image/user-placeholder.png"
                    }
                    name={members[index].user.displayName}
                    onClick={(e: any) =>
                      handleUserClicked(
                        data?.members[index]?.user?.userName
                          ? data.members[index].user.userName
                          : data.members[index].user.uuid
                      )
                    }
                    onRemove={
                      onRemoveTeamMember && index != 0
                        ? (e: any) =>
                            handleRemoveTeamMember(
                              data.uuid,
                              data.members[index].user.uuid
                            )
                        : undefined
                    }
                  />
                ) : (
                  <UserAvatar
                    size={50}
                    dashed={index > minimumParticipants - 1}
                  />
                )}
              </Col>
            ))}
          </Row>
          {slots.length - members.length > 0 && displayInviteLink && data && (
            <Space
              direction="vertical"
              size={10}
              style={{ display: "flex", textAlign: "center" }}
            >
              {joinTeamUrl && <ToCopyField text={joinTeamUrl} />}
              {requiredSlots.length - members.length <= 0 ? (
                <Text>{t("Member limit reached")}</Text>
              ) : (
                <Text>
                  {t("you require")} {moreMembers} {t("more member")}
                </Text>
              )}
            </Space>
          )}
          {!data && (
            <Space
              direction="vertical"
              size={10}
              style={{ display: "flex", textAlign: "center" }}
            >
              <Text>{t("you are not in a team")}</Text>
            </Space>
          )}
          {onSubmit && (
            <TiltButton
              color={submitAction === "leave" ? "danger" : "primary"}
              onClick={onSubmit}
            >
              {t(`${submitAction} team`)}
            </TiltButton>
          )}
          {submitAction === "submit" && (
            <TiltButton color="danger" onClick={onDelete}>
              {t("delete team")}
            </TiltButton>
          )}
        </Space>
      </Space>
      {onOrganizerAction && (
        <Space
          style={{ display: "flex", marginTop: 20 }}
          direction="vertical"
          size={15}
        >
          {data.status === "pending" ? (
            <Title level={5} style={{ fontSize: 14, margin: 0 }}>
              {t("reject comment")}
            </Title>
          ) : (
            <div>
              <Title
                level={5}
                // className="required"
                style={{ fontSize: 14, margin: 0 }}
              >
                {t("remove comment")}
              </Title>
              <Text>{t("removed team members have to create a new team")}</Text>
            </div>
          )}
          <Input.TextArea
            rows={4}
            onChange={handleRemarkChange}
            value={remark}
          />
          {data.status === "pending" ? (
            <Row gutter={10}>
              <Col span={24}>
                <TiltButton
                  color="danger"
                  onClick={() => handleOrganizerAction("reject")}
                >
                  {t("reject team")}
                </TiltButton>
              </Col>
              {/* <Col span={12}>
                <TiltButton
                  color="primary"
                  onClick={() => handleOrganizerAction("approve")}
                >
                  {t("approve team")}
                </TiltButton>
              </Col> */}
            </Row>
          ) : (
            <Row>
              <Col span={24}>
                <TiltButton
                  color="danger"
                  onClick={() => handleOrganizerAction("remove")}
                >
                  {t("remove team")}
                </TiltButton>
              </Col>
            </Row>
          )}
        </Space>
      )}
      {contextHolder}
    </Card>
  );
}
