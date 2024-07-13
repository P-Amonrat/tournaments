import { json, type LoaderFunction } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
  useRevalidator,
  useSubmit,
} from "@remix-run/react";
import {
  Card,
  Col,
  Divider,
  Empty,
  Form,
  Modal,
  notification,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { isEmpty, isNil, omitBy } from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as APIServer from "~/api";
import { dummyWebboards, Pagination, TiltButton } from "~/components/common";
import { getSessionFromRequest } from "~/session.server";
import { resetFetcher } from "~/utils/helper";
import { AlbumForm } from "~/components/pages/User/AlbumForm";
import { AppContext, AuthContext } from "~/contexts";
import { SortableList } from "~/components/pages/Sorting/SortableList";
import { AlbumIndexEntry } from "~/components/pages/User/AlbumIndexEntry";
import { LuBook } from "react-icons/lu";
import { ArrowUpDown } from "lucide-react";
const { Text } = Typography;

export const loader: LoaderFunction = async ({ params, request }) => {
  const { uuid } = params;
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let albumRes: any;
  let albums: any;
  const me = session.get("me");

  try {
    if (uuid !== undefined) {
      if (me) {
        albumRes = await APIServer.clientFromSession(session).request(
          APIServer.getAlbum(uuid, searchParams)
        );
      } else {
        albumRes = await APIServer.clientFromSession().request(
          APIServer.getAlbum(uuid, searchParams)
        );
      }
      if (albumRes.data) {
        albums = albumRes.data;
      }
    }
  } catch (e) {
    albums = dummyWebboards; // FIXME: remove this out
    console.log("my albums error", e);
  }
  return json({ searchParams, albums, uuid });
};

const modalProps = {
  closeIcon: false,
  footer: null,
  modalRender: (modal: any) => modal,
} as any;

export default function MyAlbums() {
  const { searchParams, albums, uuid } = useLoaderData();
  const revalidator = useRevalidator();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const location = useLocation();
  const navigation = useNavigation();
  const { scheme } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const [api, contextHolder] = notification.useNotification();
  const [openCreateAlbumModal, setOpenCreateAlbumModal] = useState(false);
  const [sortingModal, setSortingModal] = useState<boolean>(false);
  const [albumsList, setAlbumsList] = useState<any>(albums.items);
  const [form] = Form.useForm();
  const isOwner = (user && user.uuid === uuid) || user?.userName === uuid;

  const handleOpenCreateAlbumModal = () => {
    setOpenCreateAlbumModal(true);
  };

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

  const handleToggleSortingMode = () => {
    setSortingModal(!sortingModal);
  };

  const onChangeSortItems = (items: any) => {
    setAlbumsList(items);
  };

  const onCloseSortingModal = () => {
    setSortingModal(false);
  };

  const handleSubmitSorting = () => {
    setSortingModal(false);
    const itemsId = {
      albumIds: albumsList.map((item: any, index: number) => item.id),
    };
    fetcher.submit(
      {
        data: JSON.stringify(itemsId),
      },
      {
        method: "post",
        action: `/resources/sorting-albums`,
      }
    );
  };

  useEffect(() => {
    setAlbumsList(albums.items && albums.items.length ? albums.items : []);
  }, [albums.items]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }

    if (fetcher.data.albums.items) {
      setAlbumsList(fetcher.data.albums.items);
    }
  }, [fetcher.data]);

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

  return (
    <>
      {navigation.state === "loading" &&
      navigation.location.pathname === location.pathname ? (
        <Skeleton active />
      ) : (
        <Card
          style={{
            borderRadius: 12,
            boxShadow:
              scheme === "dark"
                ? "0px 12px 10px -10px rgba(0, 0, 0, 0.6)"
                : "0px 12px 10px -10px rgba(0, 0, 0, 0.2)",
            border: "none",
          }}
        >
          <Row
            justify="space-between"
            style={{ alignItems: "center" }}
            gutter={[0, 10]}
          >
            <Col flex="auto">
              <Space
                style={{
                  fontWeight: 600,
                  marginRight: "10px",
                  fontSize: "24px",
                }}
              >
                <LuBook style={{ color: "#7C6FF6" }} />
                <Text style={{ fontSize: "24px", fontWeight: 600 }}>
                  {t("my albums")}
                </Text>
              </Space>
            </Col>
            {isOwner && (
              <Col>
                <Space size={15} align="center">
                  {albumsList.length > 0 && (
                    <Space
                      align="center"
                      onClick={handleToggleSortingMode}
                      style={{ cursor: "pointer" }}
                    >
                      <ArrowUpDown
                        style={{ color: "#7C6FF6", fontSize: "1.2em" }}
                      />
                      {t("sort order")}
                    </Space>
                  )}
                  <TiltButton
                    color="primary"
                    onClick={handleOpenCreateAlbumModal}
                  >
                    {t("create album")}
                  </TiltButton>
                </Space>
              </Col>
            )}
          </Row>
          <Divider style={{ marginBlock: 10 }} />
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
          {albumsList && albumsList.length ? (
            <Row gutter={[30, 30]}>
              {albumsList.map((album: any, index: number) => (
                <Col key={index} span={12} md={8}>
                  <AlbumIndexEntry album={album} uuid={uuid} />
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description={<span>{t("no data")}</span>} />
          )}
          <Pagination
            currentPage={albums.page}
            totalPages={albums.totalPages}
            onPageClicked={handleChangePage}
          />
        </Card>
      )}
      <Modal
        {...modalProps}
        onCancel={() => setSortingModal(false)}
        open={sortingModal}
      >
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <Text style={{ fontSize: "24px", fontWeight: "600" }}>
            {t("sorting order")}
          </Text>
          <Divider style={{ margin: 7 }} />
          <SortableList
            items={albumsList}
            onChange={onChangeSortItems}
            renderItem={(item: any, items: any[]) => (
              <SortableList.Item id={item.id}>
                <div style={{ position: "relative", margin: "15px" }}>
                  <div style={{ position: "absolute", zIndex: 1000 }}>
                    {<SortableList.DragHandle />}
                  </div>
                  <TiltButton color="gray">{item.name}</TiltButton>
                </div>
              </SortableList.Item>
            )}
          />
          <Row gutter={10} style={{ marginTop: 30 }}>
            <Col span={12}>
              <TiltButton color="secondary" onClick={onCloseSortingModal}>
                {t("cancel")}
              </TiltButton>
            </Col>
            <Col span={12}>
              <TiltButton color="primary" onClick={handleSubmitSorting}>
                {t("save")}
              </TiltButton>
            </Col>
          </Row>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
}
