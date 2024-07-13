import { useCallback, useContext, useEffect, useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Outlet,
  useFetcher,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import {
  AuthenticityTokenProvider,
  createAuthenticityToken,
} from "remix-utils";

import { AppContext, AuthContext } from "~/contexts";
import { LayoutDashboard } from "~/components/layouts";
import { LoginForm } from "~/components/common";
import { getSessionFromRequest } from "~/session.server";
import { Modal } from "antd";
import { resetFetcher } from "~/utils/helper";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const me = session.get("me");
  const csrf = createAuthenticityToken(session);

  return json({ csrf, me });
};

export default function AppLayout() {
  const { csrf, me } = useLoaderData();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [clickedId, setClickedId] = useState<string | undefined>(undefined);
  const [isStickerDrop, setIsStickerDrop] = useState<boolean>(false);
  const { scheme } = useContext(AppContext);

  const handleDivClick = (event: any) => {
    setClickedId(event.target.id);
    setIsStickerDrop(
      event.target?.className?.includes("campaign-sticker-drop")
    );
  };

  // const handleDivTouch = useCallback((event: any) => {
  //   console.log("div touch", event.target);
  // }, []);

  const handleLogout = useCallback(() => {
    if (fetcher.state === "idle") {
      fetcher.submit({}, { method: "post", action: "/resources/logout" });
    }
  }, [fetcher]);

  const handleOpenLoginModal = useCallback(() => {
    if (!me) {
      setLoginModal(true);
    }
  }, [me]);

  useEffect(() => {
    if (me) {
      setLoginModal(false);
    }
  }, [me]);

  useEffect(() => {
    if (fetcher && fetcher.data && revalidator.state === "idle") {
      if (fetcher.data.logout) {
        window.location.reload();
      } else if (fetcher.data.me && fetcher.state === "idle") {
        revalidator.revalidate();
        resetFetcher(fetcher);
      }
    }
  }, [fetcher, revalidator]);

  return (
    <AuthContext.Provider
      value={{
        logout: handleLogout,
        user: me ? me : undefined,
        openLoginModal: handleOpenLoginModal,
        clickedId: clickedId,
        isStickerDrop: isStickerDrop,
      }}
    >
      <AuthenticityTokenProvider token={csrf}>
        <div
          onClick={handleDivClick}
          onTouchStart={handleDivClick}
          className={scheme === "dark" ? "dark-theme" : ""}
        >
          <LayoutDashboard>
            <Outlet />
            {!me && (
              <Modal
                closeIcon={false}
                footer={null}
                open={loginModal && !me}
                onCancel={() => setLoginModal(false)}
                width={420}
                styles={{ body: { paddingBlock: 25, paddingInline: 10 } }}
                modalRender={(modal) => modal}
              >
                <LoginForm
                  fetcher={fetcher}
                  loading={fetcher.state !== "idle"}
                />
              </Modal>
            )}
          </LayoutDashboard>
        </div>
      </AuthenticityTokenProvider>
    </AuthContext.Provider>
  );
}
