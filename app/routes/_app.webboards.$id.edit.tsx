import {
  redirect,
  type ActionFunction,
  type LoaderFunction,
  json,
} from "@remix-run/node";
import { Affix, Col, Form, Row } from "antd";
import {
  useFetcher,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Media } from "~/components/common";
import { WebboardForm, WebboardTags } from "~/components/pages/Webboard";
import * as APIServer from "~/api";
import {
  commitSession,
  getSessionFromRequest,
  mustAuthenticated,
} from "~/session.server";
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

export const action: ActionFunction = async ({ request, params }) => {
  mustAuthenticated(request);
  const { id } = params;
  const session = await getSessionFromRequest(request);
  const formData = await request.formData();
  const data = formData.get("data") as string;
  const toSubmitData = JSON.parse(data);
  let webboard: any = null;

  if (id) {
    try {
      const webboardRes = await APIServer.clientFromSession(session).request(
        APIServer.updateWebboard(id, toSubmitData)
      );
      if (webboardRes && webboardRes.data) {
        webboard = webboardRes.data;
      }
      session.flash("flashMessage", {
        type: "success",
        message: "successfully update webboard",
      });
    } catch (e: any) {
      console.log("e", e.response.data);

      session.flash("flashMessage", {
        type: "error",
        message: e.response.data.message,
      });
    }
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

export default function WebboardEdit() {
  const routeLoader = useRouteLoaderData("routes/_app.webboards.$id");
  const { webboard } = routeLoader;
  const webboardRouteLoader = useRouteLoaderData("routes/_app.webboards");
  const { games, rooms, tags } = webboardRouteLoader;
  const fetcher = useFetcher();
  const submit = useSubmit();
  const [form] = Form.useForm();
  const initialValues = {
    ...webboard,
    hasPoll: webboard.poll ? true : false,
    roomIds: webboard.postRooms.map((postRoom: any) => postRoom.room.id),
    gameIds: webboard.postGames.map((postGame: any) => postGame.game.id),
    tags: webboard.postTags.map((postTag: any) => postTag.tag.name),
  };
  if (webboard.poll) {
    initialValues.pollOptions = webboard.poll.options.map(
      (option: any) => option.option
    );
  }
  const navigation = useNavigation();
  const navigationState = navigation.state;

  const handleUpdateWebboard = (values: any) => {
    const { roomIds, ...value } = values;
    const newValues = {
      ...value,
      roomIds: values.roomIds ? values.roomIds : [6],
    };
    if (!newValues.hasPoll) {
      delete newValues.pollOptions;
    }
    delete newValues.hasPoll;

    submit(
      {
        data: JSON.stringify(newValues),
      },
      { method: "put" }
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
          <Form
            form={form}
            layout="vertical"
            onFinish={handleUpdateWebboard}
            initialValues={initialValues}
          >
            <WebboardForm
              editmode
              fetcher={fetcher}
              form={form}
              games={games}
              rooms={rooms}
              tags={tags}
              tournament={webboard.tournamentId}
              navigationState={navigationState}
            />
          </Form>
        </Col>
      </Row>
    </div>
  );
}
