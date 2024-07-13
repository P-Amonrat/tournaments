import { useCallback, useContext, useEffect, useState } from "react";
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
  theme,
  Typography,
} from "antd";
import { AuthContext } from "~/contexts";
import { GameCard, TiltButton } from "~/components/common";
import { useMatches } from "@remix-run/react";
import { GameUserSelect } from "./GameUserSelect";
import { flattenObject } from "~/utils/helper";
const { Text, Title } = Typography;
const { useToken } = theme;

interface UserGameFormProps {
  fetcher: any;
  form: any;
  action: string;
  game?: any;
  games: any[];
  initialValues?: any;
  onCancel: () => void;
}

export function UserGameForm(props: UserGameFormProps) {
  const { fetcher, form, game, games, action, initialValues, onCancel } = props;
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
  const [selectedGameId, setSelectedGameId] = useState<any>(
    initialValues && initialValues.rankingGameId
      ? initialValues.rankingGameId
      : game.id
      ? game.id
      : null
  );

  const [selectedGame, setSelectedGame] = useState<any>(
    initialValues && initialValues.rankingGameId
      ? games.find((g: any) => g.id == initialValues.rankingGameId)
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

    form.resetFields();
    setGameModal(false);
    setSelectedGameId(gameId);
    setSelectedGame(newSelectedGame);
  };

  const handleSubmit = useCallback(
    (values: any) => {
      if (selectedGameId) {
        const newValues = {
          ...values,
          rankingGameId: selectedGameId,
          id: initialValues ? initialValues.id : null,
        };

        fetcher.submit(
          {
            data: JSON.stringify(newValues),
          },
          action === "create"
            ? {
                method: "post",
                action: `/resources/create-user-in-game`,
              }
            : {
                method: "put",
                action: `/resources/edit-user-in-game`,
              }
        );
        form.resetFields();
      }

      onCancel();
    },
    [selectedGameId]
  );

  useEffect(() => {
    if (initialValues && fetcher.data && fetcher.data.success) {
      if (fetcher.data.success) {
        form.setFieldsValue(flattenObject(initialValues));
      }
    }
  }, [initialValues, form, fetcher.data]);

  return (
    <div style={{ padding: 10 }}>
      <Form
        form={form}
        initialValues={defaultValues}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Title level={4} style={{ margin: 0 }}>
          {t(`${action === "create" ? "add game" : "edit game"}`)}
        </Title>
        <Divider />
        <Flex gap={15} vertical>
          <Row gutter={[15, 15]}>
            <Col flex="none">
              <Space>
                {selectedGame ? (
                  <GameCard
                    avatarStyle={{
                      position: "relative",
                      width: 160,
                      overflow: "hidden",
                      cursor: action === "update" ? "default" : "pointer",
                      borderRadius: 10,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage:
                        selectedGame &&
                        selectedGame.image &&
                        selectedGame.image !== "-"
                          ? `url("${cdnUrl}/${selectedGame.image}")`
                          : `url("/image/placeholder.png")`,
                    }}
                    onClick={openGameModal}
                    action={action}
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
                  key="ign"
                  name="ign"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: t('please input game username'),
                  //   },
                  // ]}
                  label={
                    <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                      {/* {`${selectedGame.name} ${t("username")}`} */}
                      {`${t("in game username")}`}
                    </Text>
                  }
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  key="rank"
                  name="rank"
                  rules={[
                    {
                      required: true,
                      message: t("please input game rank"),
                    },
                  ]}
                  label={
                    <Space size={10}>
                      <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                        {t("rank")}
                      </Text>
                    </Space>
                  }
                >
                  <Select
                    style={{ width: "100%" }}
                    placeholder={t("select rank")}
                    options={
                      selectedGame.rank
                        ? selectedGame.rank.map((rank: any) => ({
                            label: (
                              <Space size={5}>
                                {rank.icon ? (
                                  <Avatar
                                    src={`${cdnUrl}/${rank.icon}`}
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
                            value: rank.name,
                          }))
                        : []
                    }
                  />
                </Form.Item>
              </Col>
            )}
          </Row>
        </Flex>
        <Row gutter={10} style={{ marginTop: 30 }}>
          <Col span={12}>
            <TiltButton color="secondary" onClick={onCancel}>
              {t("cancel")}
            </TiltButton>
          </Col>
          <Col span={12}>
            <TiltButton color="primary" onClick={() => form.submit()}>
              {t(`${action === "create" ? "add game" : "edit"}`)}
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
          <GameUserSelect
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
