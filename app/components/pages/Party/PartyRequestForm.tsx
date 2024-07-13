import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Card,
  Col,
  Flex,
  Input,
  Modal,
  Row,
  Skeleton,
  Typography,
} from "antd";
import { ExclamationCircleFilled, LogoutOutlined } from "@ant-design/icons";
import { TiltButton } from "~/components/common";
import { useMatches, useRouteLoaderData } from "@remix-run/react";
import { AuthContext } from "~/contexts";
const { Text, Title } = Typography;

interface PartyRequestFormProps {
  fetcher: any;
  party: any;
}

export function PartyRequestForm(props: PartyRequestFormProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { fetcher, party } = props;
  const { user, openLoginModal } = useContext(AuthContext);
  const { t } = useTranslation();
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const { hasParty } = routeLoader;
  const [modal, modalContextHolder] = Modal.useModal();
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [request, setRequest] = useState<any>(null);

  let ign = "";
  const gameId = party.gameId;
  const userGame =
    user && user.userGames && user.userGames.length > 0
      ? user.userGames.find((userGame: any) => userGame.gameId === gameId)
      : null;
  if (userGame) {
    ign = userGame.ign;
  }

  const handleUsernameChanged = (e: any) => {
    setUsername(e.target.value);
  };

  const handleMessageChanged = (e: any) => {
    setMessage(e.target.value);
  };

  const handleDeleteRequest = useCallback(() => {
    if (request && request.id) {
      modal.confirm({
        title: `${t(`are you sure to delete party request`)}?`,
        icon: <ExclamationCircleFilled />,
        okText: t("confirm"),
        okType: "danger",
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { requestId: request.id, partyId: party.id, gameId: party.gameId },
            {
              method: "delete",
              action: `/resources/delete-party-request`,
            }
          );
        },
      });
    }
  }, [party, request]);

  const handleSubmitRequest = useCallback(() => {
    const values = {
      ign: username,
      message,
      isPrivate: party.isPrivate,
    };
    fetcher.submit(
      {
        data: JSON.stringify({ ...values, hasParty: hasParty }),
        partyId: party.id,
        gameId: party.gameId,
      },
      {
        method: "post",
        action: `/resources/create-party-request`,
      }
    );
  }, [party, message, username]);

  useEffect(() => {
    setRequest(null);
    setLoading(true);
    setUsername(ign);
    setMessage("");
    fetcher.load(
      `/resources/party-request?partyId=${party.id}&&gameId=${party.gameId}`
    );
  }, [party]);

  useEffect(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (
        fetcher.data.request &&
        fetcher.data.partyId &&
        `${fetcher.data.partyId}` === `${party.id}`
      ) {
        setLoading(false);
        setRequest(fetcher.data.request);
        setUsername(fetcher.data.request.user.userGames[0].ign);
        setMessage(
          fetcher.data.request.message ? fetcher.data.request.message : ""
        );
      } else if (
        fetcher.data.success &&
        fetcher.data.success === "delete-party-request"
      ) {
        setRequest(null);
      } else if (
        fetcher.data.success &&
        fetcher.data.success === "join-party"
      ) {
        return;
      } else {
        setLoading(false);
      }
    }
  }, [fetcher, party]);

  if (loading) {
    return <Skeleton active paragraph={{ rows: 2 }} />;
  }

  if (!user) {
    return (
      <TiltButton color="primary" onClick={openLoginModal}>
        {party.isPrivate ? t("request") : t("join")}
      </TiltButton>
    );
  }
  return (
    <>
      <Flex vertical gap={20}>
        <Card style={{ borderRadius: 12 }}>
          <Title level={4} style={{ marginTop: 0, marginBottom: 20 }}>
            {request
              ? t(`party request`)
              : party.isPrivate
              ? t("request to join party")
              : t("confirm game username")}
          </Title>
          <Flex vertical gap={5} style={{ marginBottom: 10 }}>
            <Title level={5} style={{ margin: 0 }}>
              {`${party.game.name} ${t("username")}`}
            </Title>
            <Row gutter={10} wrap={false} style={{ alignItems: "center" }}>
              <Col flex="none">
                <Avatar
                  size={50}
                  src={
                    user && user.displayImage
                      ? `${cdnUrl}/${user.displayImage}`
                      : "/image/placeholder.png"
                  }
                />
              </Col>
              <Col flex="auto">
                <Input
                  autoFocus
                  status={!username.length ? "error" : undefined}
                  onChange={handleUsernameChanged}
                  disabled={request ? true : false}
                  value={username}
                />
              </Col>
            </Row>
            {party.isPrivate === true ? (
              <Flex vertical gap={5}>
                <Title level={5} style={{ margin: 0 }}>
                  {t("request message")}
                </Title>
                <Input
                  onChange={handleMessageChanged}
                  disabled={request ? true : false}
                  value={message}
                />
              </Flex>
            ) : (
              false
            )}
          </Flex>
        </Card>
        <TiltButton
          color={request || !username.length ? "secondary" : "primary"}
          disabled={!username.length}
          onClick={!request ? handleSubmitRequest : undefined}
        >
          {request
            ? t("request sent")
            : party.isPrivate
            ? t("request")
            : t("join")}
        </TiltButton>
        {request && (
          <Flex
            justify="center"
            style={{ marginTop: 15, cursor: "pointer" }}
            onClick={handleDeleteRequest}
          >
            <Text type="danger">
              {`${t("delete request")}  `}
              <LogoutOutlined type="danger" />
            </Text>
          </Flex>
        )}
      </Flex>
      {modalContextHolder}
    </>
  );
}
