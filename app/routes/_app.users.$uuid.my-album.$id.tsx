import { json, type LoaderFunction } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
  useNavigate,
  useRevalidator,
  useSubmit,
} from "@remix-run/react";
import { Button, Flex, Form, Modal, notification, Skeleton, Space } from "antd";
import { isEmpty, isNil, omitBy } from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as APIServer from "~/api";
import { dummyWebboards, TiltButton } from "~/components/common";
import { getSessionFromRequest } from "~/session.server";
import { resetFetcher } from "~/utils/helper";
import { AlbumForm } from "~/components/pages/User/AlbumForm";
import { AuthContext } from "~/contexts";
import { AlbumSingle } from "~/components/pages/User/AlbumSingle";

export const loader: LoaderFunction = async ({ params, request }) => {
  const { uuid, id } = params;
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let singleAlbumRes: any;
  let singleAlbum: any;
  let singlePhotosAlbumRes: any;
  let singlePhotosAlbum: any;
  const me = session.get("me");

  try {
    if (id !== undefined) {
      if (me) {
        singleAlbumRes = await APIServer.clientFromSession(session).request(
          APIServer.getSingleAlbum(id)
        );
        singlePhotosAlbumRes = await APIServer.clientFromSession(
          session
        ).request(APIServer.getPhotosSingleAlbum(id, searchParams));
      } else {
        singleAlbumRes = await APIServer.clientFromSession().request(
          APIServer.getSingleAlbum(id)
        );
        singlePhotosAlbumRes = await APIServer.clientFromSession().request(
          APIServer.getPhotosSingleAlbum(id, searchParams)
        );
      }
      if (singleAlbumRes.data) {
        singleAlbum = singleAlbumRes.data;
      }
      if (singlePhotosAlbumRes.data) {
        singlePhotosAlbum = singlePhotosAlbumRes.data;
      }
    }
  } catch (e) {
    singleAlbum = dummyWebboards; // FIXME: remove this out
  }
  return json({ searchParams, singleAlbum, singlePhotosAlbum, uuid });
};

const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
} as any;

export default function UserMyWebboards() {
  const { searchParams, singleAlbum, singlePhotosAlbum, uuid } =
    useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification();
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = useState(false);
  const [items, setItems] = useState<any>([...singlePhotosAlbum.items]);
  const [form] = Form.useForm();
  const isOwner = user && user.uuid === uuid;

  const navigateToAlbums = () => {
    navigate(`/users/${uuid}/my-album`);
  };

  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };

  const handleLoadMore = useCallback(() => {
    const newSearchParams = {
      ...searchParams,
      offset: singlePhotosAlbum.items.length,
    };
    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();

    fetcher.load(`.?${queryString}`);
  }, [singlePhotosAlbum.items, searchParams]);

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
      if (fetcher.data.success && fetcher.data.success === "delete-album") {
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

  useEffect(() => {
    setItems([...singlePhotosAlbum.items]);
  }, [singlePhotosAlbum]);

  useEffect(() => {
    if (fetcher.data?.singlePhotosAlbum) {
      setItems((items: any[]) => [
        ...items,
        ...fetcher.data?.singlePhotosAlbum.items,
      ]);
    }
  }, [fetcher.data]);

  return (
    <>
      {navigation.state === "loading" &&
      navigation.location.pathname === location.pathname ? (
        <Skeleton active />
      ) : (
        <>
          <Space style={{ marginBottom: 10 }}>
            <TiltButton color="primary" onClick={navigateToAlbums}>
              {t("back to albums")}
            </TiltButton>
          </Space>
          <Modal
            {...modalProps}
            onCancel={() => setOpenCreateAlbumModal(false)}
            open={openCreateAlbumModal}
          >
            <AlbumForm
              fetcher={fetcher}
              form={form}
              onCancel={() => setOpenCreateAlbumModal(false)}
              action="create"
            />
          </Modal>
          <Flex vertical gap={20}>
            <AlbumSingle
              fetcher={fetcher}
              key={singleAlbum.id}
              data={singleAlbum}
              photos={items}
              isMyWebboard={true}
              uuid={uuid}
            />
          </Flex>
          {singlePhotosAlbum && items.length < singlePhotosAlbum.total && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button onClick={handleLoadMore} size="large">
                {t("load more")}
              </Button>
            </div>
          )}
        </>
      )}
      {contextHolder}
    </>
  );
}
