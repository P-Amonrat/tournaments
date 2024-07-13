import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  theme,
  Tooltip,
  Typography,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { AuthContext } from "~/contexts";
import {
  GameCard,
  GameSelect,
  TiltButton,
  TiltCheck,
} from "~/components/common";
import { PartyFormInlineAvatar } from "./PartyFormInlineAvatar";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;
const { useToken } = theme;

interface PartyFormProps {
  fetcher: any;
  form: any;
  game?: any;
  games: any[];
  initialValues?: any;
  onCancel: () => void;
}

export function PartyForm(props: PartyFormProps) {
  const { fetcher, form, game, games, initialValues, onCancel } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { token } = useToken();
  const { user } = useContext(AuthContext);
  let defaultValues: any = initialValues ? initialValues : undefined;
  let defaultMode: any = null;
  let ign = "";
  const gameId = game.id;
  const userGame =
    user && user.userGames && user.userGames.length > 0
      ? user.userGames.find((userGame: any) => userGame.gameId === gameId)
      : null;
  if (userGame) {
    ign = userGame.ign;
  }

  if (game && game.modes) {
    defaultMode = game.modes.find((m: any) => m.isDefaultMode);
    if (defaultMode) {
      defaultValues = {
        mode: defaultMode.name,
        slots: defaultMode.maxPlayer - 1,
        username: ign,
      };
    }
  }
  const [gameModal, setGameModal] = useState<boolean>(false);
  const [currentSlots, setCurrentSlots] = useState<number>(
    defaultMode ? defaultMode.maxPlayer - 1 : 0
  );
  const [currentMax, setCurrentMax] = useState<any>(
    defaultMode ? defaultValues.maxPlayer : null
  );
  const [selectedGameId, setSelectedGameId] = useState<any>(
    initialValues && initialValues.gameId
      ? initialValues.gameId
      : game.id
      ? game.id
      : null
  );
  const [selectedGame, setSelectedGame] = useState<any>(
    initialValues && initialValues.gameId
      ? games.find((g: any) => g.id == initialValues.gameId)
      : game
      ? game
      : null
  );

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
  } as any;

  const openGameModal = () => {
    setGameModal(true);
  };

  const closeGameModal = () => {
    setGameModal(false);
  };

  const handleGameChanged = (gameId: any) => {
    const newSelectedGame = games.find((g: any) => g.id == gameId);
    const defaultMode = newSelectedGame.modes.find((m: any) => m.isDefaultMode);
    if (defaultMode) {
      form.setFieldsValue({
        mode: defaultMode.name,
        slots: defaultMode.maxPlayer - 1,
      });
      setCurrentSlots(defaultMode.maxPlayer - 1);
      setCurrentMax(defaultMode.maxPlayer);
    } else {
      form.setFieldsValue({ mode: null, slots: null });
      setCurrentSlots(0);
      setCurrentMax(null);
    }
    setGameModal(false);
    setSelectedGameId(gameId);
    setSelectedGame(newSelectedGame);
  };

  const handleTiltSelect = useCallback(
    (field: string, values: any) => {
      if (field === "mode" && selectedGame) {
        const selectedMode = selectedGame.modes.find(
          (m: any) => m.name === values
        );
        const newSlots = selectedMode.maxPlayer
          ? selectedMode.maxPlayer - 1
          : 0;
        setCurrentSlots(newSlots);
        form.setFieldValue("slots", newSlots);
        setCurrentMax(selectedMode.maxPlayer ? selectedMode.maxPlayer : null);
      } else if (field === "slots") {
        setCurrentSlots(values);
      }
      form.setFieldValue(field, values);
    },
    [selectedGame]
  );

  const handleSubmit = useCallback(
    (values: any) => {
      const mode = selectedGame.modes.find(
        (mode: any) => mode.name === values.mode
      );

      if (selectedGameId && mode) {
        const newValues = {
          name: values.name,
          gameId: selectedGameId,
          modeId: mode.id,
          maxPlayers: mode.maxPlayer,
          availableSlots: values.slots,
          discordUrl: values.discordUrl,
          isPrivate: values.isPrivate ? values.isPrivate : false,
          ign: values.username,
          rankIds: values.ranks,
        };

        fetcher.submit(
          {
            data: JSON.stringify(newValues),
          },
          {
            method: "post",
            action: `/resources/create-party`,
          }
        );
      }
      onCancel();
    },
    [selectedGameId]
  );

  return (
    <div style={{ padding: 10 }}>
      <Form
        form={form}
        initialValues={defaultValues}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Title level={4} style={{ margin: 0 }}>
          {t("create party")}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <PartyFormInlineAvatar
            members={
              initialValues?.members || [{ status: "active", user: user }]
            }
            maxPlayers={currentMax ? currentMax : 5}
            require={currentSlots}
          />
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
              <Space size={10}>
                <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                  {t("party name")}
                </Text>
                <Tooltip
                  placement="top"
                  arrow={false}
                  title={t("fill in party detail")}
                >
                  <div>
                    <QuestionCircleOutlined
                      style={{ cursor: "pointer", color: "#7a6fee" }}
                    />
                  </div>
                </Tooltip>
              </Space>
            }
          >
            <Input />
          </Form.Item>
          <Row gutter={[15, 15]}>
            <Col flex="none">
              <Space>
                {selectedGame ? (
                  <GameCard
                    avatarStyle={{
                      position: "relative",
                      width: 160,
                      overflow: "hidden",
                      cursor: "pointer",
                      borderRadius: 10,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage:
                        selectedGame &&
                        selectedGame.mainImageUrl &&
                        selectedGame.mainImageUrl !== "-"
                          ? `url("${cdnUrl}/${selectedGame.mainImageUrl}")`
                          : `url("/image/placeholder.png")`,
                    }}
                    onClick={openGameModal}
                  />
                ) : (
                  <Card
                    style={{
                      backgroundColor: token.colorBgElevated,
                      textAlign: "center",
                    }}
                    bodyStyle={{ padding: "30px 10px", cursor: "pointer" }}
                    onClick={openGameModal}
                  >
                    <Space direction="vertical" size={5} align="center">
                      <Image
                        preview={false}
                        src="/image/game-icon.svg"
                        width={30}
                        height={30}
                      />
                      <Text>{t("select game")}</Text>
                    </Space>
                  </Card>
                )}
              </Space>
            </Col>
            {selectedGame && (
              <Col flex="auto">
                <Form.Item
                  key="username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: t("please input game username"),
                    },
                  ]}
                  label={
                    <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                      {`${selectedGame.name} ${t("username")}`}
                    </Text>
                  }
                >
                  <Input />
                </Form.Item>
              </Col>
            )}
          </Row>
          {selectedGame && (
            <>
              <Form.Item
                key="mode"
                name="mode"
                rules={[
                  {
                    required: true,
                    message: t("please select at least 1 mode"),
                  },
                ]}
                label={
                  <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                    {t("mode")}
                  </Text>
                }
              >
                <TiltCheck
                  fieldName="mode"
                  labelKey="name"
                  labelValue="name"
                  options={selectedGame.modes ? selectedGame.modes : []}
                  onSelect={handleTiltSelect}
                  initialValues={
                    form.getFieldValue("mode") || defaultValues.mode
                  }
                />
              </Form.Item>
              {(form.getFieldValue("mode") || defaultValues.mode) && (
                <Form.Item
                  key="slots"
                  name="slots"
                  rules={[
                    {
                      required: true,
                      message: t("please select slots"),
                    },
                  ]}
                  label={
                    <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                      {t("required slots")}
                    </Text>
                  }
                >
                  <TiltCheck
                    fieldName="slots"
                    labelKey="label"
                    labelValue="value"
                    options={Array(currentMax ? currentMax - 1 : 4)
                      .fill("")
                      .map((_, index) => ({
                        label: index + 1,
                        value: index + 1,
                      }))}
                    onSelect={handleTiltSelect}
                    initialValues={
                      form.getFieldValue("slots") || defaultValues.slots
                    }
                  />
                </Form.Item>
              )}
              <Form.Item
                key="ranks"
                name="ranks"
                label={
                  <Space size={10}>
                    <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                      {t("ranks")}
                    </Text>
                    <Tooltip
                      placement="top"
                      arrow={false}
                      title={t("select the preferred ranks")}
                    >
                      <div>
                        <QuestionCircleOutlined
                          style={{ cursor: "pointer", color: "#7a6fee" }}
                        />
                      </div>
                    </Tooltip>
                  </Space>
                }
                rules={[
                  () => ({
                    validator(_, value) {
                      if (!value) {
                        return Promise.resolve();
                      } else {
                        if (value.length > 3) {
                          form.setFieldValue("ranks", value.slice(0, 3));
                        }
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder={t("select ranks")}
                  options={
                    selectedGame.ranks
                      ? selectedGame.ranks.map((rank: any) => ({
                          label: (
                            <Space size={5}>
                              {rank.imageUrl ? (
                                <Avatar
                                  src={`${cdnUrl}/${rank.imageUrl}`}
                                  size={20}
                                  shape="square"
                                />
                              ) : (
                                <></>
                              )}
                              <Text style={{ color: "inherit" }}>
                                {rank.name}
                              </Text>
                            </Space>
                          ),
                          value: rank.id,
                        }))
                      : []
                  }
                />
              </Form.Item>
            </>
          )}
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
          <Space size={10}>
            <Form.Item
              key="isPrivate"
              name="isPrivate"
              valuePropName="checked"
              noStyle
            >
              <Switch />
            </Form.Item>
            <Text>{t("private party")}</Text>
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
          </Space>
        </Flex>
        <Row gutter={10} style={{ marginTop: 30 }}>
          <Col span={12}>
            <TiltButton color="secondary" onClick={onCancel}>
              {t("cancel")}
            </TiltButton>
          </Col>
          <Col span={12}>
            <TiltButton color="primary" onClick={() => form.submit()}>
              {t("create party")}
            </TiltButton>
          </Col>
        </Row>
      </Form>
      {!initialValues ? (
        <Modal
          {...modalProps}
          width={600}
          onCancel={closeGameModal}
          open={gameModal}
        >
          <GameSelect
            currentGameId={selectedGameId ? selectedGameId : null}
            games={games}
            onGameSelect={handleGameChanged}
          />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
