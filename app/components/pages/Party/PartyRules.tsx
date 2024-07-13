/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Flex, Modal, Space, theme, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { AppContext } from "~/contexts";
import { HowToCraeteParty } from "~/components/common/HowToCreateParty";
import { HowToJoinParty } from "~/components/common/HowToJoinParty";
import { HowToStartGame } from "~/components/common/HowToStartGame";
import { ArrowUpRight } from "lucide-react";
const { Title } = Typography;
const { useToken } = theme;

interface PartyRulesProps {
  menus?: any[];
  mobileStyle?: boolean;
  title: any;
}

export function PartyRules(props: PartyRulesProps) {
  const { menus, mobileStyle, title } = props;
  const { t } = useTranslation();
  const { scheme } = useContext(AppContext);
  const { token } = useToken();
  const [createPartyModal, setcreatePartyModal] = useState<boolean>(false);
  const [joinPartyModal, setJoinPartyModal] = useState<boolean>(false);
  const [startGameModal, setStartGameModal] = useState<boolean>(false);

  const modalProps = {
    closeIcon: false,
    footer: null,
    modalRender: (modal: any) => modal,
    styles: {
      body: { padding: "20px 30px" },
    },
  } as any;

  const openCreateParty = () => {
    setcreatePartyModal(true);
  };

  const closeCreateParty = () => {
    setcreatePartyModal(false);
  };

  const openJoinParty = () => {
    setJoinPartyModal(true);
  };

  const closeJoinParty = () => {
    setJoinPartyModal(false);
  };

  const openStartGame = () => {
    setStartGameModal(true);
  };

  const closeStartGame = () => {
    setStartGameModal(false);
  };

  const filteredMenus = menus
    ? menus
    : ([
        {
          title: "how to create party",
          onClick: openCreateParty,
        },
        {
          title: "how to join party",
          onClick: openJoinParty,
        },
        {
          title: "how to start the game",
          onClick: openStartGame,
        },
      ] as any[]);

  return (
    <>
      <Card
        bordered={false}
        style={{
          backgroundColor: mobileStyle
            ? "transparent"
            : scheme === "light"
            ? "#ebebeb"
            : "#0f0e0e",
          borderRadius: 10,
          boxShadow: "none",
        }}
        bodyStyle={{
          padding: mobileStyle ? 0 : 20,
        }}
      >
        <Flex gap={10} vertical>
          <Title level={mobileStyle ? 5 : 4} style={{ marginTop: 0 }}>
            {title}
          </Title>
          {filteredMenus.map((menu: any, index: number) => (
            <Button
              key={`menu-${index}`}
              type={"text"}
              onClick={menu.onClick}
              className={`ctrlg-link ${scheme}`}
              style={{ padding: 5, borderRadius: 6 }}
            >
              <Flex
                justify="space-between"
                gap={10}
                style={{ fontSize: "1.05em" }}
              >
                <Space
                  size={8}
                  style={{
                    color: token.colorTextBase,
                    alignItems: "flex-start",
                  }}
                >
                  <CaretRightOutlined style={{ fontSize: "1.1em" }} />
                  {t(menu.title)}
                </Space>
                <ArrowUpRight
                  className="arrow-icon"
                  style={{ color: "#7a6fee" }}
                />
              </Flex>
            </Button>
          ))}
        </Flex>
      </Card>
      <Modal
        {...modalProps}
        onCancel={closeCreateParty}
        open={createPartyModal}
      >
        <HowToCraeteParty onCancel={closeCreateParty} />
      </Modal>
      <Modal {...modalProps} onCancel={closeJoinParty} open={joinPartyModal}>
        <HowToJoinParty onCancel={closeJoinParty} />
      </Modal>
      <Modal {...modalProps} onCancel={closeStartGame} open={startGameModal}>
        <HowToStartGame onCancel={closeStartGame} />
      </Modal>
    </>
  );
}
