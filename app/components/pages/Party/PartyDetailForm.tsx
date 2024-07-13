import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Row,
  Space,
  Statistic,
  Switch,
  Tooltip,
  Typography,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { PartyInlineAvatar } from ".";
import { PartyContext } from "~/contexts";
import { OverlayBg, SwipeButton, TiltButton } from "~/components/common";
const { Text } = Typography;
const { Countdown } = Statistic;

interface PartyDetailFormProps {
  fetcher: any;
  party?: any;
}

export function PartyDetailForm(props: PartyDetailFormProps) {
  const { fetcher, party } = props;
  const { t } = useTranslation();

  const { closePartyModal } = useContext(PartyContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastBoost, setLastBoost] = useState<any>(party.lastBoostAt);
  const [enableBoost, setEnableBoost] = useState<boolean>(
    !party.lastBoostAt ||
      (party.lastBoostAt && dayjs().diff(party.lastBoostAt, "minute") > 4)
  );
  const [form] = Form.useForm();

  const initValues = {
    name: party.name,
    discordUrl: party.discordUrl,
    isPrivate: party.isPrivate,
    isActive: !party.isClosed,
  };

  const handleCountDownFinish = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 100);
    setEnableBoost(true);
  };

  const handleSubmit = useCallback(
    (values: any) => {
      values = {
        ...values,
        isClosed: !values.isActive,
      };
      fetcher.submit(
        {
          id: party.id,
          data: JSON.stringify({ ...values }),
        },
        {
          method: "put",
          action: `/resources/update-party`,
        }
      );
    },
    [fetcher, party]
  );

  const handleBoostParty = useCallback(() => {
    fetcher.submit(
      { id: party.id },
      {
        method: "post",
        action: `/resources/boost-party`,
      }
    );
    setEnableBoost(false);
    setLastBoost(dayjs(new Date()));
  }, [fetcher, party]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 100);
    form.resetFields();
  }, [party]);

  return (
    <>
      <div style={{ marginTop: 15 }}>
        <PartyInlineAvatar
          members={party.partyMembers}
          maxPlayers={party.maxPlayers}
        />
      </div>
      <Form
        form={form}
        initialValues={initValues}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          key="name"
          name="name"
          rules={[
            {
              required: true,
              message: t("please input party name"),
            },
          ]}
          label={
            <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
              {t("party name")}
            </Text>
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          key="discordUrl"
          name="discordUrl"
          label={
            <Space size={5}>
              <Avatar src="/image/social/discord.png" size={25} />
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t("Discord URL")}
              </Text>
            </Space>
          }
        >
          <Input />
        </Form.Item>
        <Flex gap={10} align="baseline">
          <Form.Item key="isPrivate" name="isPrivate" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Text>{`${t("private party")} `}</Text>
          <Tooltip
            placement="top"
            arrow={false}
            title={t("party owner must approve before joining")}
          >
            <div>
              <QuestionCircleOutlined
                style={{ cursor: "pointer", color: "#7a6fee" }}
              />
            </div>
          </Tooltip>
        </Flex>
        <Flex gap={10} align="baseline">
          <Form.Item key="isActive" name="isActive" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Text>{t("party active")}</Text>
        </Flex>
        <Row gutter={10} style={{ marginTop: 10 }}>
          <Col span={12}>
            <TiltButton color="secondary" onClick={closePartyModal}>
              {t("cancel")}
            </TiltButton>
          </Col>
          <Col span={12}>
            <TiltButton color="primary" onClick={() => form.submit()}>
              {t("update")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: 48,
            backgroundColor: "#201d1d",
            transform: "skew(-15deg)",
            borderRadius: 10,
          }}
        />
      ) : (
        <div style={{ position: "relative" }}>
          <SwipeButton
            customCaretWidth={60}
            caret={
              <Image
                src="/image/chevron-right-icon.svg"
                width={30}
                preview={false}
              />
            }
            mainText={
              enableBoost ? (
                t("boost party")
              ) : (
                <Space size={5}>
                  <Text style={{ color: "#ffffff" }}>
                    {t("boost again in")}
                  </Text>
                  <Countdown
                    value={dayjs(lastBoost).add(5, "minute").toString()}
                    format="m:ss"
                    onFinish={handleCountDownFinish}
                    valueStyle={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  />
                </Space>
              )
            }
            overlayText={t("party boosted")}
            onSlideDone={enableBoost ? handleBoostParty : undefined}
          />
          {!enableBoost ? (
            <OverlayBg
              style={{ zIndex: 1, transform: "skew(-15deg)", borderRadius: 10 }}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}
