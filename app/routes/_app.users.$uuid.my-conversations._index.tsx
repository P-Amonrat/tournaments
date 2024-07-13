import { json, type LoaderFunction } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
  useRevalidator,
  useSubmit,
} from "@remix-run/react";
import { notification, Skeleton } from "antd";
import { isEmpty, isNil, omitBy } from "lodash";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as APIServer from "~/api";
import { dummyWebboards, Pagination } from "~/components/common";
import { WebboardLists } from "~/components/pages/Webboard";
import { getSessionFromRequest } from "~/session.server";
import { resetFetcher } from "~/utils/helper";

export const loader: LoaderFunction = async ({ params, request }) => {
  const { uuid } = params;
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let webboardRes: any;
  let webboards: any;
  const me = session.get("me");

  try {
    if (uuid !== undefined) {
      if (me) {
        webboardRes = await APIServer.clientFromSession(session).request(
          APIServer.getMyWebboards(uuid, searchParams)
        );
      } else {
        webboardRes = await APIServer.clientFromSession().request(
          APIServer.getMyWebboards(uuid, searchParams)
        );
      }
      if (webboardRes.data) {
        webboards = webboardRes.data;
      }
    }
  } catch (e) {
    webboards = dummyWebboards; // FIXME: remove this out
    console.log("my webboards error", e);
  }
  return json({ searchParams, webboards });
};

export default function UserMyWebboards() {
  const { searchParams, webboards } = useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const [api, contextHolder] = notification.useNotification();

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
        { method: "get" }
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
    <>
      {navigation.state === "loading" &&
      navigation.location.pathname === location.pathname ? (
        <Skeleton active />
      ) : (
        <>
          <WebboardLists
            data={webboards.items}
            fetcher={fetcher}
            isMyWebboard={true}
          />
          <Pagination
            currentPage={webboards.page}
            totalPages={webboards.totalPages}
            onPageClicked={handleChangePage}
          />
        </>
      )}
      {contextHolder}
    </>
  );
}
