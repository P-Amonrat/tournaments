import {
  Card,
  Col,
  Flex,
  Modal,
  Result,
  Row,
  Skeleton,
  Space,
  theme,
  Typography,
} from "antd";
import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  InboxOutlined,
} from "@ant-design/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";
const { useToken } = theme;
const { Text } = Typography;

interface PollProps {
  onClick?: (e: any) => void;
  data: any;
  queryInitialAnswer?: boolean;
  fetcher?: any;
  fromIndex?: boolean;
  webboardId?: boolean;
}

export function Poll(props: PollProps) {
  const { onClick, data, queryInitialAnswer, fetcher, fromIndex, webboardId } =
    props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useToken();
  const { user, openLoginModal } = useContext(AuthContext);
  const [modal, contextHolder] = Modal.useModal();
  const [poll, setPoll] = useState<any>(data);
  const [loading, setLoading] = useState<boolean>(
    user && queryInitialAnswer ? true : false
  );
  const [answered, setAnswered] = useState<any>(null);

  const handleVote = useCallback(
    (answerId: string | number) => {
      modal.confirm({
        title: (
          <Space direction="vertical" size={0}>
            <Text>{`${t("are you to vote")}?`}</Text>
            <Text>{t("this action cannot be undone")}</Text>
          </Space>
        ),
        icon: <ExclamationCircleFilled />,
        okText: t("confirm"),
        cancelText: t("cancel"),
        maskClosable: true,
        onOk() {
          fetcher.submit(
            { id: data.id, answerId },
            {
              method: "post",
              action: `/resources/submit-poll`,
            }
          );
        },
      });
    },
    [data, fetcher]
  );

  useEffect(() => {
    if (user && queryInitialAnswer) {
      setLoading(true);
      fetcher.load(`/resources/poll-answer?id=${data.id}`);
    }
  }, []);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      fetcher.data.pollId &&
      `${fetcher.data.pollId}` === `${data.id}`
    ) {
      setAnswered(fetcher.data.answer ? fetcher.data.answer : null);
      if (fetcher.data.poll) {
        setPoll(fetcher.data.poll);
      }
      setLoading(false);
    }
  }, [data, fetcher]);

  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: token.colorBgElevated,
        borderRadius: 10,
        // maskImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2))`,
      }}
    >
      <Flex gap={10} vertical>
        {loading ? (
          <Skeleton active />
        ) : poll.options && poll.options.length > 0 ? (
          <>
            {poll.options
              .slice(0, fromIndex ? 4 : undefined)
              .sort((a: any, b: any) => {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
              })
              .map((option: any) => (
                <Row
                  gutter={10}
                  key={option.id}
                  style={{ alignItems: "center" }}
                  wrap={false}
                >
                  <Col flex="none">
                    {(option.userPollSelections &&
                      option.userPollSelections[0]) ||
                    `${option.id}` === `${answered}` ? (
                      <CheckCircleFilled
                        style={{ color: "#7a6fee", fontSize: 30 }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          border: `2px solid ${token.colorBorder}`,
                          borderRadius: "50%",
                          cursor: answered ? "default" : "pointer",
                        }}
                        onClick={
                          answered
                            ? undefined
                            : user
                            ? onClick
                              ? onClick
                              : () => handleVote(option.id)
                            : () => openLoginModal()
                        }
                      />
                    )}
                  </Col>
                  <Col flex="auto">
                    <Card
                      style={
                        // answered &&
                        // `${option.userPollSelections}` === `${answered}`
                        //   ? { backgroundColor: "#7a6fee" }
                        //   : undefined
                        ((option.userPollSelections &&
                          option.userPollSelections[0]) ||
                          `${option.id}` === `${answered}`) && {
                          backgroundColor: "#7a6fee",
                        }
                      }
                      bodyStyle={{
                        padding: 15,
                      }}
                    >
                      <Text
                        style={{
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color:
                            (option.userPollSelections &&
                              option.userPollSelections[0]) ||
                            `${option.id}` === `${answered}`
                              ? "#fff"
                              : undefined,
                        }}
                      >
                        {option.option}
                      </Text>
                    </Card>
                  </Col>
                  <Col
                    flex="none"
                    style={{ minWidth: 40, textAlign: "center" }}
                  >
                    <Text style={{ fontSize: "1.1em" }}>{option.count}</Text>
                  </Col>
                </Row>
              ))}
            {poll.options.length > 4 && fromIndex === true && (
              <Text
                style={{ textAlign: "center", zIndex: 1000 }}
                onClick={() => navigate(`/webboards/${webboardId}`)}
              >
                {t("and more options...")}
              </Text>
            )}
          </>
        ) : (
          <Result icon={<InboxOutlined />} title={t("no option")} />
        )}
      </Flex>
      {contextHolder}
    </Card>
  );
}
