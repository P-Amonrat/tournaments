import { useContext, useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import {
  Avatar,
  Card,
  Col,
  Empty,
  Flex,
  Form,
  Input,
  Row,
  Skeleton,
  theme,
  Typography,
} from "antd";
import { Element, scroller } from "react-scroll";
import dayjs from "dayjs";
import { AuthContext } from "~/contexts";
import { TiltButton } from "~/components/common";
import { useTranslation } from "react-i18next";
import { WebsocketContext } from "~/contexts/WebsocketContext";
const { Text } = Typography;
const { useToken } = theme;

interface PartyChatProps {
  fetcher: any;
  party: any;
  closePartyDetail: () => void;
}

export function PartyChat(props: PartyChatProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { fetcher, party, closePartyDetail } = props;
  const { user } = useContext(AuthContext);
  const { token } = useToken();
  const [loading, setLoading] = useState<boolean>(true);
  const [chats, setChats] = useState<any[]>([]);
  const { messageData } = useContext(WebsocketContext);

  const handleSendMessage = (values: any) => {
    fetcher.submit(
      {
        data: JSON.stringify({ message: values.message }),
        partyId: party.id,
      },
      {
        method: "post",
        action: `/resources/send-party-a-message`,
      }
    );
    const timeout = setTimeout(() => {
      scroller.scrollTo("last-chat", {
        containerId: "chat-messages",
        duration: 300,
      });
      clearTimeout(timeout);
    }, 200);
    form.resetFields();
  };

  // const handleScroll = (e: any) => {
  //   const { scrollTop } = e.target;
  //   if (scrollTop === 0) {
  //     // Load more messages when scrolled to the top
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    fetcher.load(
      `/resources/party-chat?partyId=${party.id}&gameId=${party.gameId}`
    );
  }, [party]);

  useEffect(() => {
    if (fetcher && fetcher.data) {
      const { sendFailed } = fetcher.data;
      if (sendFailed) {
        closePartyDetail();
      }
    }
  }, [fetcher]);

  useEffect(() => {
    if (messageData) {
      const newChats = [...chats, messageData];
      setChats(newChats);
    }
  }, [messageData]);

  useEffect(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (
        fetcher.data.chats &&
        fetcher.data.partyId &&
        `${fetcher.data.partyId}` === `${party.id}`
      ) {
        setLoading(false);
        setChats(fetcher.data.chats);
      }
    }
  }, [fetcher, party]);

  useEffect(() => {
    if (!loading) {
      scroller.scrollTo("last-chat", {
        containerId: "chat-messages",
        duration: 0,
      });
    }
  }, [loading]);

  // useEffect(() => {
  //   const container = document.getElementById("chat-messages");
  //   if (container) {
  //     container.addEventListener("scroll", handleScroll);
  //     return () => {
  //       container.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  const getChatMessage = (message: string) => {
    if (message === "system:PartyIsReady") {
      return t("All members of your party are here and ready to play!");
    }

    return message;
  };

  return (
    <Card style={{ borderRadius: 12 }} bodyStyle={{ padding: 0 }}>
      <Flex
        id="chat-messages"
        vertical
        gap={15}
        style={{ height: 350, padding: 15, overflowY: "auto" }}
      >
        {loading ? (
          <Skeleton active />
        ) : chats.length > 0 ? (
          chats.map((chat: any, index: number) => (
            <div
              key={`chat-${index}`}
              style={{
                paddingBottom: 15,
                borderBottom: `1px solid ${token.colorBorder}`,
              }}
            >
              <Row
                wrap={false}
                gutter={10}
                style={{ alignItems: "flex-start" }}
              >
                <Col flex="none">
                  <Avatar
                    src={
                      chat.createdBy.displayImage
                        ? `${cdnUrl}/${chat.createdBy.displayImage}`
                        : "/image/avatar-anonymous.jpg"
                    }
                    size={50}
                  />
                </Col>
                <Col flex="auto">
                  <Flex vertical gap={10}>
                    <Flex justify="space-between" align="flex-start">
                      <Flex>
                        <Text style={{ fontWeight: 600 }}>
                          {chat.createdBy.ign ? chat.createdBy.ign : "system"}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          style={{
                            opacity: 0.5,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {dayjs(chat.createdAt).isToday()
                            ? dayjs(chat.createdAt).format("HH:mm")
                            : dayjs(chat.createdAt).format("DD MMM HH:mm")}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text>{getChatMessage(chat.message)}</Text>
                  </Flex>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <Empty description={t("no chat")} />
        )}
        <Element name="last-chat" />
      </Flex>
      {user && (
        <Flex
          gap={10}
          align="center"
          style={{ padding: 15, borderTop: `1px solid ${token.colorBorder}` }}
        >
          <Avatar
            src={
              user.displayImage
                ? `${cdnUrl}/${user.displayImage}`
                : "/image/placeholder.png"
            }
            size={50}
          />
          <Form
            form={form}
            onFinish={handleSendMessage}
            style={{ width: "100%" }}
          >
            <Form.Item
              key="message"
              name="message"
              noStyle
              rules={[
                {
                  required: true,
                  message: `${t("please type message")}`,
                },
              ]}
            >
              <Input
                autoFocus={true}
                placeholder={t("type message here")}
                autoComplete="off"
                suffix={
                  <TiltButton
                    color="primary"
                    style={{ paddingBlock: 5 }}
                    onClick={form.submit}
                  >
                    {t("send")}
                  </TiltButton>
                }
              />
            </Form.Item>
          </Form>
        </Flex>
      )}
    </Card>
  );
}
