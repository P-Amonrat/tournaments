import { useCallback, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { json, type LoaderFunction } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Affix, Col, Row, Skeleton, Typography, notification } from "antd";
import * as APIServer from "~/api";
import {
  IndexFilter,
  Loading,
  Media,
  OverlayBg,
  Pagination,
  TiltButton,
} from "~/components/common";
import {
  WebboardIndexHeader,
  WebboardIndexSlider,
  WebboardLists,
  WebboardTags,
} from "~/components/pages/Webboard";
import { debounce, isEmpty, isNil, omitBy } from "lodash";
import { convertToObjectWithArrays, resetFetcher } from "~/utils/helper";
import { AuthContext } from "~/contexts";
import { commitSession, getSessionFromRequest } from "~/session.server";
const { Text } = Typography;

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let toQuerySearchParams = convertToObjectWithArrays(searchParams, [
    "rooms",
    "games",
  ]);
  let webboards: any;
  let featuredWebboards: any[] = [];
  const me = session.get("me");
  let webboardRes: any;
  let featuredWebboardRes: any;

  try {
    if (me) {
      webboardRes = await APIServer.clientFromSession(session).request(
        APIServer.getWebboards(toQuerySearchParams)
      );
      featuredWebboardRes = await APIServer.clientFromSession(session).request(
        APIServer.getWebboards({ featured: true })
      );
    } else {
      webboardRes = await APIServer.clientFromSession().request(
        APIServer.getWebboards(toQuerySearchParams)
      );
      featuredWebboardRes = await APIServer.clientFromSession().request(
        APIServer.getWebboards({ featured: true })
      );
    }

    if (webboardRes.data) {
      webboards = webboardRes.data;
    }
    if (featuredWebboardRes.data) {
      featuredWebboards = featuredWebboardRes.data;
    }
  } catch (e) {
    console.log("webboards index error", e);
  }

  return json(
    { searchParams, featuredWebboards, webboards },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export default function WebboardIndex() {
  const routeLoader = useRouteLoaderData("routes/_app.webboards");
  const revalidator = useRevalidator();
  const { searchParams, featuredWebboards, webboards } = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const navigate = useNavigate();
  const location = useLocation();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { user, openLoginModal } = useContext(AuthContext);
  const { games, rooms, reactionOptions, tags } = routeLoader;
  const [api, contextHolder] = notification.useNotification();

  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room: any) => ({
        label: t(room.nameEn),
        value: room.id,
      })),
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options:
        games.length > 0
          ? games.map((game: any) => ({
              label: game.name,
              value: game.id,
              image: game.iconUrl,
            }))
          : [],
    },
  ];

  const handleFilter = useCallback(
    (name: string, value: string | number) => {
      const newSearchParams = { ...searchParams } as any;
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
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );

  const handleDebounceFilter = useMemo(
    () => debounce(handleFilter, 300),
    [handleFilter]
  );

  const handleChangePage = useCallback(
    (page: number) => {
      const newSearchParams = { ...searchParams } as any;
      if (page === 1) {
        delete newSearchParams["page"];
      } else {
        newSearchParams["page"] = `${page}`;
      }
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams, submit]
  );

  useEffect(() => {
    if (
      fetcher &&
      fetcher.data &&
      fetcher.state === "idle" &&
      revalidator.state === "idle"
    ) {
      if (fetcher.data.success && fetcher.data.success === "delete-webboard") {
        revalidator.revalidate();
        resetFetcher(fetcher);
        api.open({
          message: t("successfully deleted post"),
          type: "success",
          duration: 5,
          placement: "bottomRight",
        });
      }
    }
  }, [fetcher, revalidator]);

  return (
    <div style={{ paddingBlock: 30 }}>
      {featuredWebboards && featuredWebboards.length > 0 && (
        <WebboardIndexSlider data={featuredWebboards} />
      )}
      <div
        style={{
          paddingInline: "3.5%",
          paddingBlock: 20,
          maxWidth: 1440,
          marginInline: "auto",
        }}
      >
        <Row gutter={[30, 10]}>
          <Col span={24} md={{ span: 6, order: 0 }}>
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
                  mobileAppendChildren={
                    <WebboardTags data={tags} fetcher={fetcher} mobileStyle />
                  }
                />
              </div>
            </Affix>
          </Col>
          <Col span={24} md={{ span: 6, order: 2 }}>
            <Media greaterThan="sm">
              <Affix offsetTop={80}>
                <div>
                  <WebboardTags data={tags} fetcher={fetcher} />
                </div>
              </Affix>
            </Media>
          </Col>
          <Col span={24} md={{ span: 12, order: 1 }}>
            <WebboardIndexHeader
              fetcher={fetcher}
              searchParams={searchParams}
              submit={submit}
            >
              <TiltButton
                color="primary"
                onClick={() =>
                  user ? navigate("/webboards/new") : openLoginModal()
                }
              >
                <Text>{t("new post")}</Text>
              </TiltButton>
            </WebboardIndexHeader>
            <div style={{ marginTop: 30 }}>
              {navigation.state === "loading" &&
              navigation.location.pathname === location.pathname ? (
                <Skeleton active />
              ) : (
                <>
                  <WebboardLists
                    data={webboards.items}
                    fetcher={fetcher}
                    reactionOptions={reactionOptions}
                  />
                  <Pagination
                    currentPage={webboards.page}
                    totalPages={webboards.totalPages}
                    onPageClicked={handleChangePage}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
      {contextHolder}
      {navigation.state === "loading" && (
        <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
          <Loading />
        </OverlayBg>
      )}
    </div>
  );
}
