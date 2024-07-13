import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { json, type LoaderFunction } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Affix, Col, Row, Skeleton, Typography, notification } from "antd";
import * as APIServer from "~/api";
import {
  BackButton,
  IndexFilter,
  Media,
  Pagination,
} from "~/components/common";
import {
  WebboardIndexHeader,
  WebboardLists,
  WebboardTags,
} from "~/components/pages/Webboard";
import { debounce, isEmpty, isNil, omitBy } from "lodash";
import { convertToObjectWithArrays, resetFetcher } from "~/utils/helper";
import { getSessionFromRequest } from "~/session.server";
const { Title } = Typography;

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSessionFromRequest(request);
  const { tag } = params;
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  const toQuerySearchParams = convertToObjectWithArrays(searchParams, [
    "rooms",
    "games",
  ]);
  let webboards: any;

  try {
    const webboardRes = await APIServer.clientFromSession(session).request(
      APIServer.getWebboards({ ...toQuerySearchParams, tag: tag })
    );
    if (webboardRes.data) {
      webboards = webboardRes.data;
    }
  } catch (e) {
    console.log("webboards tag error", e);
  }
  return json({ searchParams, tag, webboards });
};

export default function TagSingle() {
  const routeLoader = useRouteLoaderData("routes/_app.tags");
  const revalidator = useRevalidator();
  const submit = useSubmit();
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const { searchParams, webboards } = useLoaderData();
  const { games, rooms, reactionOptions, tags } = routeLoader;
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();

  const filters = [
    {
      type: "tilt-button",
      name: "rooms",
      title: t("select room"),
      options: rooms.map((room: any) => ({
        label: room.name,
        value: room.id,
      })),
    },
    {
      type: "avatar",
      name: "games",
      title: t("select game"),
      options: games.map((game: any) => ({
        label: game.name,
        value: game.id,
        image: game.iconUrl,
      })),
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
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 30,
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
          <BackButton />
          <WebboardIndexHeader
            fetcher={fetcher}
            searchParams={searchParams}
            submit={submit}
          >
            <Title
              level={2}
              style={{ fontStyle: "italic", margin: 0 }}
            >{`#${webboards.tagName}`}</Title>
          </WebboardIndexHeader>
          <div style={{ marginTop: 30 }}>
            {navigation.state !== "idle" ? (
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
      {contextHolder}
    </div>
  );
}
