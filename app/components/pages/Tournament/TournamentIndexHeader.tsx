import { useContext } from "react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Col, Row, Select, Skeleton, Space, Typography, theme } from "antd";
import { ControlOutlined, HistoryOutlined } from "@ant-design/icons";
import { AuthContext } from "~/contexts";
import { isArray } from "lodash";

const { useToken } = theme;
const { Text } = Typography;

interface TournamentIndexHeaderProps {
  initialValues: any;
  items: any;
  games: any;
  onGameChanged: (game: string) => void;
}

export function TournamentIndexHeader(props: TournamentIndexHeaderProps) {
  const { t } = useTranslation();
  const { token } = useToken();
  const { user } = useContext(AuthContext);
  const { initialValues, items, games, onGameChanged } = props;

  const gameOptions = [
    {
      label: t("all games"),
      value: "",
    },
  ];
  if (isArray(games) && games.length > 0) {
    games.map((game: any) => {
      gameOptions.push({
        label: game.name,
        value: game.name,
      });
    });
  }

  return (
    <>
      <Select
        defaultValue={initialValues.game ? initialValues.game : ""}
        onSelect={onGameChanged}
        options={gameOptions}
        style={{ width: 140, marginBottom: 20 }}
      />
      <Row style={{ marginBottom: 20 }}>
        <Col flex="none">
          <Skeleton active loading={items === null} paragraph={false} title>
            <Text style={{ color: token.colorTextSecondary }}>{`${
              items ? items.length : 0
            } ${t("items")}`}</Text>
          </Skeleton>
        </Col>
        {user && (
          <Col flex="auto" style={{ textAlign: "right" }}>
            <Space direction="horizontal" size={15}>
              <Link
                to={`/users/${user.userName ? user.userName : user.uuid}`}
                style={{ color: token.colorTextBase }}
              >
                <Space direction="horizontal" size={5}>
                  <ControlOutlined style={{ color: "#7063f4" }} />
                  {t("dashboard")}
                </Space>
              </Link>
              <Link
                to={`/users/${
                  user?.userName ? user.userName : user.uuid
                }/joined-tournaments`}
                style={{ color: token.colorTextBase }}
              >
                <Space direction="horizontal" size={5}>
                  <HistoryOutlined style={{ color: "#7063f4" }} />
                  {t("history")}
                </Space>
              </Link>
            </Space>
          </Col>
        )}
      </Row>
    </>
  );
}
