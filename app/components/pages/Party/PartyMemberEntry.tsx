import { useMatches } from "@remix-run/react";
import {
  Avatar,
  Badge,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  LockOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { TiltButton, ToCopyField } from "~/components/common";
import { AuthContext } from "~/contexts";
const { Text } = Typography;
const { useToken } = theme;

interface PartyMemberEntryProps {
  editable?: boolean;
  fetcher: any;
  member: any;
  partyId: number | string;
  gameId: number | string;
  isPartyOwner: boolean;
}

export function PartyMemberEntry(props: PartyMemberEntryProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { user } = useContext(AuthContext);
  const { editable, fetcher, member, isPartyOwner, partyId, gameId } = props;
  const { t } = useTranslation();
  const { token } = useToken();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [modal, modalContextHolder] = Modal.useModal();
  const [form] = Form.useForm();

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateMember = useCallback(
    (values: any) => {
      if (member.status === "availableSlot") {
        fetcher.submit(
          {
            data: JSON.stringify({ ign: values.username }),
            gameId: gameId,
            partyId: partyId,
          },
          {
            method: "post",
            action: `/resources/create-party-member`,
          }
        );
      } else {
        fetcher.submit(
          {
            data: JSON.stringify({ ign: values.username, memberId: member.id }),
            gameId: gameId,
            partyId: partyId,
          },
          {
            method: "put",
            action: `/resources/update-party-member`,
          }
        );
      }
      setEditMode(false);
    },
    [member, partyId]
  );

  const handleRemove = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure to delete party member`)}?`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { memberId: member.id, partyId: partyId, gameId: gameId },
          {
            method: "delete",
            action: `/resources/delete-party-member`,
          }
        );
      },
    });
  }, [member, partyId]);

  const handleClick = useCallback(() => {
    if (member.user && member.user.uuid) {
      window.open(
        `/users/${
          member.user?.userName ? member.user.userName : member.user.uuid
        }`,
        "_blank"
      );
    }
  }, [member]);

  return (
    <>
      <Row
        gutter={[20, 15]}
        style={{
          alignItems: "center",
        }}
      >
        <Col flex="none">
          {member.status === "availableSlot" ? (
            <Avatar
              src={"/image/party-available-thumbnail.jpg"}
              style={{
                border: `1px solid ${token.colorBorder}`,
              }}
              size={50}
            />
          ) : (
            <Badge
              count={
                member.isPartyMaster ? (
                  <Image
                    preview={false}
                    src="/image/crowd-icon.png"
                    width={24}
                    height={24}
                    wrapperStyle={{ position: "absolute", right: 5, top: 5 }}
                  />
                ) : isPartyOwner ? (
                  <div
                    style={{
                      position: "absolute",
                      right: 5,
                      top: 5,
                      display: "flex",
                      backgroundColor: "#c43025",
                      padding: 3,
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={handleRemove}
                  >
                    <MinusCircleOutlined
                      style={{ fontSize: 12, color: "#fff", strokeWidth: 2 }}
                    />
                  </div>
                ) : (
                  <></>
                )
              }
            >
              <Avatar
                src={
                  member && member.user && member.user.displayImage
                    ? `${cdnUrl}/${member.user.displayImage}`
                    : "/image/party-lock-thumbnail.jpg"
                }
                onClick={member.user ? handleClick : undefined}
                style={{
                  cursor: member.user ? "pointer" : "default",
                  border: `1px solid ${token.colorBorder}`,
                }}
                size={50}
              />
            </Badge>
          )}
        </Col>
        <Col flex="auto">
          {editMode ? (
            <Form
              form={form}
              initialValues={{
                username:
                  member && member.user
                    ? member.user.userGames[0].ign
                    : t("Unnamed Player"),
              }}
              onFinish={handleUpdateMember}
            >
              <Form.Item
                key="username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: `${t("please input username")}`,
                  },
                ]}
                noStyle
              >
                <Input
                  autoFocus={true}
                  suffix={
                    <Space size={10}>
                      <CheckOutlined
                        style={{ color: "#18Bd62", cursor: "pointer" }}
                        onClick={() => form.submit()}
                      />
                      <CloseOutlined
                        style={{ color: "#cf1714", cursor: "pointer" }}
                        onClick={closeEditMode}
                      />
                    </Space>
                  }
                />
              </Form.Item>
            </Form>
          ) : (
            <Flex justify="space-between" align="center">
              {member && member.user && editable ? (
                <ToCopyField
                  alertMessage={t("username copied")}
                  copyMessage={member.user.userGames[0].ign}
                  text={member.user.userGames[0].ign}
                  plain
                  style={{ paddingBlock: 5 }}
                />
              ) : member && member.user ? (
                <Text>{member.user.userGames[0].ign}</Text>
              ) : (
                <Text style={{ opacity: 0.75 }}>
                  {member.isSlotLocked === true
                    ? member.lockedSlotIgn
                    : t("available")}
                </Text>
              )}
              {member.status === "availableSlot" && isPartyOwner ? (
                <TiltButton color="primary" onClick={openEditMode}>
                  <Space size={5}>
                    <LockOutlined />
                    <Text>{t("lock")}</Text>
                  </Space>
                </TiltButton>
              ) : (user &&
                  member &&
                  member.userId &&
                  user.id === member.userId) ||
                (member.isSlotLocked && isPartyOwner) ? (
                <Space
                  size={10}
                  onClick={openEditMode}
                  style={{ cursor: "pointer" }}
                >
                  <EditOutlined style={{ color: "#7a6fee" }} />
                  <Text>{t("edit")}</Text>
                </Space>
              ) : (
                <></>
              )}
            </Flex>
          )}
        </Col>
      </Row>
      {modalContextHolder}
    </>
  );
}
