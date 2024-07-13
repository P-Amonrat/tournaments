import {
  redirect,
  type ActionFunction,
  type LoaderFunction,
  json,
} from "@remix-run/node";
import { Affix, Col, Form, Modal, Row } from "antd";
import {
  useFetcher,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { KycForm, Media } from "~/components/common";
import { WebboardForm, WebboardTags } from "~/components/pages/Webboard";
import * as APIServer from "~/api";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
import { useState } from "react";
// import { parseAndConvert } from "~/utils/helper";

export const loader: LoaderFunction = async ({ request }) => {
  await mustAuthenticated(request);
  try {
    return null;
  } catch (e) {
    console.log("e", e);
  }
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await mustAuthenticated(request);
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;
  const toSubmitData = JSON.parse(data);
  let webboard: any = null;

  try {
    const webboardRes = await APIServer.clientFromSession(session).request(
      APIServer.createWebboard(toSubmitData)
    );
    if (webboardRes && webboardRes.data) {
      webboard = webboardRes.data;
    }
    session.flash("flashMessage", {
      type: "success",
      message: "successfully create webboard",
    });
  } catch (e: any) {
    console.log("error from create", e.response);

    session.flash("flashMessage", {
      type: "error",
      message: "failed to create webboard",
    });
  }
  if (webboard) {
    session.flash("backToIndex", true);
    return redirect(`/webboards/${webboard.id}`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return json(
      { success: false },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }
};

export default function WebboardNew() {
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const { games, rooms, tags, allTags } = webboardRouteLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = Form.useForm();
  const [kycModal, setKycModal] = useState<boolean>(false);
  const navigation = useNavigation();
  const navigationState = navigation.state;

  const modalProps = {
    closeIcon: false,
    footer: null,
    style: { backgroundColor: "transparent" },
    styles: { body: { backgroundColor: "transparent" } },
    modalRender: (modal: any) => modal,
  };

  const handleCreateWebboard = (values: any) => {
    const newValues = { ...values };
    if (!newValues.hasPoll) {
      delete newValues.pollOptions;
    }
    delete newValues.hasPoll;

    submit(
      {
        data: JSON.stringify(newValues),
      },
      { method: "post" }
    );
  };

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
        <Col span={24} md={{ span: 6, order: 1 }}>
          <Media greaterThan="sm">
            <Affix offsetTop={80}>
              <div>
                <WebboardTags data={tags} fetcher={fetcher} />
              </div>
            </Affix>
          </Media>
        </Col>
        <Col span={24} md={{ span: 18, order: 0 }}>
          <Form form={form} layout="vertical" onFinish={handleCreateWebboard}>
            <WebboardForm
              fetcher={fetcher}
              form={form}
              games={games}
              rooms={rooms}
              tags={tags}
              allTags={allTags}
              onKycClicked={() => setKycModal(true)}
              navigationState={navigationState}
            />
          </Form>
        </Col>
        <Modal
          {...modalProps}
          onCancel={() => setKycModal(false)}
          open={kycModal}
        >
          <KycForm
            fetcher={fetcher}
            form={form}
            loading={navigation.state !== "idle"}
          />
        </Modal>
      </Row>
    </div>
  );
}
