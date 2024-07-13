import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetcher, useSubmit } from "@remix-run/react";
import { Result, Space, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { TextEditor, TiltButton } from "~/components/common";
import { AuthContext } from "~/contexts";
import { json, type ActionFunction } from "@remix-run/node";
import { commitSession, getSessionFromRequest } from "~/session.server";
import * as APIServer from "~/api";
const { Text, Title } = Typography;

export const action: ActionFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const formdata = await request.formData();
  const entries = Object.fromEntries(formdata);

  try {
    await APIServer.clientFromSession(session).request(
      APIServer.updateSignature(entries)
    );
    const { data } = await APIServer.clientFromSession(session).request(
      APIServer.me()
    );
    session.set("me", data);
    session.flash("flashMessage", {
      type: "success",
      message: `successfully update signature`,
    });
  } catch (e: any) {
    session.flash("flashMessage", {
      type: "error",
      message:
        e.errors && e.errors.length > 1 ? e.errors[0] : e.response.data.message,
    });
  }

  return json(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function SettingsWebboard() {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<any>("");
  const submit = useSubmit();

  const onSubmit = () => {
    submit(
      {
        signature: content,
      },
      { method: "post" }
    );
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: 600 }}>
      <Space size={10} direction="vertical" style={{ marginBottom: 20 }}>
        <Title level={2} style={{ margin: 0 }}>
          {t("webboard")}
        </Title>
        <Text>{t("signature")}</Text>
      </Space>
      <Space direction="vertical" size={20} style={{ display: "flex" }}>
        {!loading ? (
          <TextEditor
            id="signature"
            initialValues={user.signature && user.signature}
            fetcher={fetcher}
            onChange={setContent}
          />
        ) : (
          <Result icon={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        )}
        <TiltButton
          color="primary"
          onClick={onSubmit}
          style={{ marginTop: 20 }}
        >
          {t("save")}
        </TiltButton>
      </Space>
    </div>
  );
}
