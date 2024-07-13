import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { json, V2_MetaFunction, type LoaderFunction } from "@remix-run/node";
import {
  Affix,
  Col,
  Divider,
  Flex,
  Form,
  Modal,
  Row,
  Skeleton,
  Space,
  Typography,
  notification,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  dummyParties,
  dummyPartyItems3,
  GameSelect,
  IndexFilter,
  Loading,
  Media,
  OverlayBg,
  TiltButton,
} from "~/components/common";
import {
  PartyDetail,
  PartyForm,
  PartyHero,
  PartyIndexHeader,
  PartyLists,
  PartyRules,
} from "~/components/pages/Party";
import * as APIServer from "~/api";
import { convertToObjectWithArrays, resetFetcher } from "~/utils/helper";
import { AuthContext, PartyContext } from "~/contexts";
import { ceil, debounce, floor, isEmpty, isNil, omitBy } from "lodash";
import { getSessionFromRequest } from "~/session.server";

const { Text, Title } = Typography;

let currentGame: any;

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionFromRequest(request);
  const { gameId } = params;
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let toQuerySearchParams = convertToObjectWithArrays(searchParams, [
    "ranks",
    "modes",
  ]);
  let parties: any = null;
  let games: any[];

  toQuerySearchParams = {
    ...toQuerySearchParams,
    game: gameId,
  };

  try {
    const partiesRes = await APIServer.clientFromSession(session).request(
      APIServer.getParties(toQuerySearchParams)
    );

    if (partiesRes.data) {
      parties = partiesRes.data;
    }

    const gameRes = await APIServer.clientFromSession(session).request(
      APIServer.getGamesWithRanksAndModes()
    );
    if (gameRes.data) {
      games = gameRes.data;
      currentGame = games.find((game: any) => `${game.id}` === `${gameId}`);
    }
  } catch (e) {
    // FIXME: remove this out
    parties = searchParams.offset ? dummyPartyItems3 : dummyParties;
  }
  return json({ gameId, parties, searchParams });
};

export { currentGame };

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CTRL G" },
    {
      name: "description",
      content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
    },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, user-scalable=no" },
    {
      property: "og:title",
      content: `หาเพื่อนเล่นเกม! ${
        currentGame?.name ? currentGame?.name : "Valorant"
      } รับรองมันส์แน่ถ้าแม่ไม่ว่า | Ctrlg.gg`,
    },
    {
      property: "og:image",
      content: `https://d2007awoau332v.cloudfront.net/assets/party.jpg`,
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
      content: "หาเพื่อนเล่นเกมได้ง่าย ๆ ตี้ไม่ครบจบที่ CTRL G",
    },
  ];
};

export default function PartyIndex() {
  const { parties, gameId, searchParams } = useLoaderData();
  const routeLoader = useRouteLoaderData("routes/_app.parties");
  const matches = useMatches();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const submit = useSubmit();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const { cdnUrl } = matches[0].data;
  const { games, myParties } = routeLoader;
  const [form] = Form.useForm();
  const { user, openLoginModal } = useContext(AuthContext);
  const [searchArgs] = useSearchParams();
  const [gameModal, setGameModal] = useState<boolean>(false);
  const [newPartyModal, setNewPartyModal] = useState<boolean>(false);
  const [partyDetail, setPartyDetail] = useState<any>(null);
  const [api, contextHolder] = notification.useNotification();
  const [items, setItems] = useState<any>(parties.items);
  const [nextCursor, setNextCursor] = useState<any>(parties.nextCursor);
  const [isTheLastPage, setIsTheLastPage] = useState<any>(
    parties.isTheLastPage
  );
  const selectedGame = games.find((game: any) => `${game.id}` === `${gameId}`);
  const filters = [] as any[];
  const navigation = useNavigation();

  if (selectedGame.ranks && selectedGame.ranks.length > 0) {
    filters.push({
      type: "tilt-button",
      name: "ranks",
      title: t("select rank"),
      withAvatar: true,
      options:
        selectedGame.ranks && selectedGame.ranks.length
          ? selectedGame.ranks.map((rank: any) => ({
              label: rank.name,
              value: rank.id,
              image: `${cdnUrl}/${rank.imageUrl}`,
            }))
          : [],
    });
  }
  if (selectedGame.modes && selectedGame.modes.length > 0) {
    filters.push({
      type: "tilt-button",
      name: "modes",
      title: t("select mode"),
      options:
        selectedGame.modes && selectedGame.modes.length
          ? selectedGame.modes.map((mode: any) => ({
              label: mode.name,
              value: mode.id,
            }))
          : [],
    });
  }
  if (selectedGame.maxPlayers) {
    filters.push({
      type: "tilt-button",
      name: "availableSlots",
      title: t("available slots"),
      options: Array(selectedGame.maxPlayers - 1)
        .fill("")
        .map((_, index) => ({ label: index + 1, value: index + 1 })),
    });
  }

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
  } as any;

  const changeGame = (id: any) => {
    navigate(`/parties/${id}`);
    setGameModal(false);
  };

  const openGameModal = () => {
    setGameModal(true);
  };

  const closeGameModal = () => {
    setGameModal(false);
  };

  const openNewPartyModal = () => {
    setNewPartyModal(true);
  };

  const closeNewPartyModal = () => {
    setNewPartyModal(false);
  };

  const openPartyDetail = (party: any) => {
    setPartyDetail(party);
  };

  const closePartyDetail = useCallback(() => {
    setPartyDetail(null);
    if (searchArgs && searchArgs.get("join")) {
      navigate(location.pathname, { preventScrollReset: true });
    }
  }, [searchArgs]);

  const handleFilter = useCallback(
    (name: string, value: string | number) => {
      let newSearchParams = { ...searchParams } as any;
      if (searchParams && searchParams[name]) {
        const values = searchParams[name].split(",");
        const containedIndex = values.indexOf(`${value}`);
        if (containedIndex > -1) {
          values.splice(containedIndex, 1);
        } else {
          values.push(value.toString());
        }
        if (values.length) {
          newSearchParams[name] = values.join(",");
        } else {
          delete newSearchParams[name];
        }
      } else {
        newSearchParams[name] = `${value}`;
      }
      if (floor(items.length / 20)) {
        newSearchParams["take"] = ceil(items.length / 20) * 20;
      }

      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit, items]
  );

  const handleDebounceFilter = useMemo(
    () => debounce(handleFilter, 300),
    [handleFilter]
  );

  const handleLoadMore = useCallback(() => {
    const newSearchParams = {
      ...searchParams,
      cursor: nextCursor,
      game: gameId,
    };
    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();

    fetcher.load(`.?${queryString}`);
  }, [items, searchParams]);

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      revalidator.state === "idle"
    ) {
      if (
        fetcher.data.success &&
        (fetcher.data.success === "create-party" ||
          fetcher.data.success === "leave-party" ||
          fetcher.data.success === "join-party") &&
        `${fetcher.data.gameId}` === `${gameId}`
      ) {
        revalidator.revalidate();
        setPartyDetail(null);
        setNewPartyModal(false);
        resetFetcher(fetcher);
        api.open({
          message: t(`successfully ${fetcher.data.success}`),
          type: "success",
          duration: 5,
          placement: "bottomRight",
        });
      } else if (
        fetcher.data.party &&
        `${fetcher.data.gameId}` === `${gameId}`
      ) {
        setPartyDetail(fetcher.data.party);
        resetFetcher(fetcher);
      } else if (fetcher.data.parties) {
        setItems([...items, ...fetcher.data.parties.items]);
        setNextCursor(fetcher.data.parties.nextCursor);
        setIsTheLastPage(fetcher.data.parties.isTheLastPage);
        resetFetcher(fetcher);
      }
    }
  }, [items, fetcher, revalidator]);

  useEffect(() => {
    setItems(parties.items);
    setNextCursor(parties.nextCursor);
    setIsTheLastPage(parties.isTheLastPage);
  }, [parties]);

  useEffect(() => {
    if (searchArgs && searchArgs.get("join")) {
      fetcher.load(
        `/resources/party?partyId=${searchArgs.get("join")}&gameId=${gameId}`
      );
    }
  }, [gameId, searchArgs]);

  return (
    <PartyContext.Provider
      value={{
        closePartyModal: closePartyDetail,
      }}
    >
      <PartyHero
        loading={!selectedGame}
        game={selectedGame}
        onGameClick={openGameModal}
      />
      <div
        style={{
          paddingInline: "3.5%",
          paddingBlock: 20,
          maxWidth: 1440,
          marginInline: "auto",
        }}
      >
        <Row gutter={[30, 10]} style={{ paddingBlock: 30 }}>
          <Col span={24} md={{ span: 6, order: 0 }} style={{ paddingTop: 30 }}>
            {!selectedGame ? <Skeleton active /> : <></>}
            {selectedGame && selectedGame.name ? (
              <Title level={2} style={{ marginTop: 0, marginBottom: 40 }}>
                {selectedGame.name}
              </Title>
            ) : (
              <></>
            )}
            <Affix offsetTop={80}>
              <div
                className="hide-scrollbar"
                style={{
                  maxHeight: "calc(100vh - 60px)",
                  overflowY: "auto",
                }}
              >
                <IndexFilter
                  values={searchParams}
                  onFilterClicked={handleDebounceFilter}
                  filters={filters}
                />
              </div>
            </Affix>
          </Col>
          <Col span={24} md={{ span: 6, order: 2 }}>
            <Media greaterThan="sm">
              <Affix offsetTop={80}>
                <div>
                  <PartyRules
                    title={
                      <Space size={10}>
                        <InfoCircleOutlined />
                        {`${t("how it works")}?`}
                      </Space>
                    }
                  />
                </div>
              </Affix>
            </Media>
          </Col>
          <Col span={24} md={{ span: 12, order: 1 }}>
            <PartyIndexHeader
              fetcher={fetcher}
              onRefresh={revalidator.revalidate}
              searchParams={searchParams}
              submit={submit}
            >
              <TiltButton
                color="primary"
                onClick={user ? openNewPartyModal : openLoginModal}
              >
                <Text>{t("new party")}</Text>
              </TiltButton>
            </PartyIndexHeader>
            <div style={{ marginTop: 30 }}>
              {myParties && myParties.length > 0 ? (
                <div style={{ marginBottom: 30 }}>
                  <Divider
                    orientation="left"
                    orientationMargin={0}
                    style={{ marginBottom: 20 }}
                  >
                    {t("my parties")}
                  </Divider>
                  <PartyLists data={myParties} onEntryClick={openPartyDetail} />
                </div>
              ) : (
                <></>
              )}
              <Divider
                orientation="left"
                orientationMargin={0}
                style={{ marginBottom: 20 }}
              >
                {t("all parties")}
              </Divider>
              <PartyLists
                data={items}
                onEntryClick={user ? openPartyDetail : openLoginModal}
              />
              {!isTheLastPage && (
                <Flex justify="center">
                  <TiltButton
                    color="primary"
                    onClick={handleLoadMore}
                    disabled={isTheLastPage === true}
                    style={{ padding: "15px 30px" }}
                  >
                    {t("load more")}
                  </TiltButton>
                </Flex>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <Modal {...modalProps} onCancel={closeNewPartyModal} open={newPartyModal}>
        <PartyForm
          fetcher={fetcher}
          form={form}
          game={selectedGame}
          games={games}
          onCancel={closeNewPartyModal}
        />
      </Modal>
      <Modal {...modalProps} onCancel={closePartyDetail} open={partyDetail}>
        <PartyDetail
          fetcher={fetcher}
          party={partyDetail}
          hadParty={myParties && myParties.length > 0}
          closePartyDetail={closePartyDetail}
        />
      </Modal>
      <Modal
        {...modalProps}
        width={600}
        onCancel={closeGameModal}
        open={gameModal}
      >
        <GameSelect
          currentGameId={gameId}
          games={games}
          onGameSelect={changeGame}
        />
      </Modal>
      {contextHolder}
      {navigation.state === "loading" && (
        <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
          <Loading />
        </OverlayBg>
      )}
    </PartyContext.Provider>
  );
}
