import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Divider, Flex, Image, Modal, Space, Typography } from "antd";
import { ExclamationCircleFilled, LogoutOutlined } from "@ant-design/icons";
import { AuthContext } from "~/contexts";
import { TiltButton } from "~/components/common";
import {
  PartyChat,
  PartyDetailForm,
  PartyDetailHeader,
  PartyMemberLists,
  PartyRequestForm,
  PartyRequests,
} from ".";
import { resetFetcher } from "~/utils/helper";
import { WebsocketContextProvider } from "~/contexts/WebsocketContext";
import { useMatches } from "@remix-run/react";
const { Text } = Typography;

interface PartyDetailProps {
  fetcher: any;
  hadParty?: boolean;
  party?: any;
  closePartyDetail: () => void;
}

export function PartyDetail(props: PartyDetailProps) {
  const { fetcher, hadParty, party, closePartyDetail } = props;
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const matches = useMatches();
  const { websocketUrl } = matches[0].data;
  // const { messageData } = useContext(WebsocketContext);
  const [currentParty, setCurrentParty] = useState<any>(party);
  const [modal, modalContextHolder] = Modal.useModal();
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<any[]>([]);

  const infoTab = {
    label: <Image src="/image/game-icon.svg" width={30} preview={false} />,
    slug: "info",
  };
  const membersTab = {
    label: <Image src="/image/user-icon.svg" width={30} preview={false} />,
    slug: "members",
  };
  const chatTab = {
    label: <Image src="/image/chat-icon.svg" width={30} preview={false} />,
    slug: "chat",
  };

  const isOwner = useCallback(
    (partyData: any) => {
      const master = partyData.partyMembers.find(
        (member: any) => member.isPartyMaster === true
      );
      return user ? master.userId === user.id : false;
    },
    [user]
  );

  const inTheTeam = useCallback(
    (partyData: any) => {
      return user &&
        partyData.partyMembers &&
        partyData.partyMembers.find((m: any) => m.userId === user.id)
        ? true
        : false;
    },
    [user]
  );

  const handleLeaveParty = useCallback(() => {
    modal.confirm({
      title: `${t(`are you sure to leave the party`)}?`,
      icon: <ExclamationCircleFilled />,
      okText: t("confirm"),
      okType: "danger",
      cancelText: t("cancel"),
      maskClosable: true,
      onOk() {
        fetcher.submit(
          { id: party.id, gameId: party.gameId },
          {
            method: "post",
            action: `/resources/leave-party`,
          }
        );
      },
    });
  }, [fetcher, party]);

  useEffect(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (
        fetcher.data.success &&
        (fetcher.data.success === "update-party" ||
          fetcher.data.success === "boost-party" ||
          fetcher.data.success === "create-party-member" ||
          fetcher.data.success === "update-party-member" ||
          fetcher.data.success === "delete-party-member")
      ) {
        if (fetcher.data.party) {
          setCurrentParty(fetcher.data.party);
        }
        resetFetcher(fetcher);
      }
    }
  }, [fetcher]);

  useEffect(() => {
    setCurrentParty(party);
    let newTabs = [];
    if (isOwner(party)) {
      newTabs = [infoTab, membersTab, chatTab];
    } else {
      newTabs = [membersTab];
      if (inTheTeam(party)) {
        newTabs.push(chatTab);
      }
    }
    setTabs(newTabs);
    setCurrentTabIndex(0);
  }, [party]);

  useEffect(() => {
    setCurrentTabIndex(0);
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <Flex gap={20} vertical>
        <PartyDetailHeader data={currentParty} />
        <Flex>
          {tabs.length > 0 &&
            tabs.map((tab: any, index: number) => (
              <TiltButton
                key={tab.slug}
                color={index === currentTabIndex ? "primary" : "transparent"}
                style={{ width: `${100 / tabs.length}%` }}
                noBorder
                onClick={() => setCurrentTabIndex(index)}
              >
                {tab.label}
              </TiltButton>
            ))}
        </Flex>
        <Divider style={{ margin: 0 }} />
        {tabs.length && tabs[currentTabIndex].slug === "info" ? (
          <PartyDetailForm fetcher={fetcher} party={currentParty} />
        ) : (
          <></>
        )}
        {tabs.length && tabs[currentTabIndex].slug === "members" ? (
          <Flex gap={20} vertical>
            <PartyMemberLists fetcher={fetcher} party={currentParty} />
            {isOwner(currentParty) && (
              <PartyRequests
                fetcher={fetcher}
                party={currentParty}
                accepted={(party) => setCurrentParty(party)}
              />
            )}
            {!hadParty &&
              !inTheTeam(currentParty) &&
              currentParty.isClosed === false && (
                <PartyRequestForm fetcher={fetcher} party={currentParty} />
              )}
            {inTheTeam(currentParty) &&
              currentParty.discordUrl &&
              currentParty.discordUrl.length && (
                <a
                  href={currentParty.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiltButton color="primary">
                    <Space size={10}>
                      <Avatar src="/image/social/discord.png" size={25} />
                      Discord
                    </Space>
                  </TiltButton>
                </a>
              )}
          </Flex>
        ) : (
          <></>
        )}
        {tabs.length && tabs[currentTabIndex].slug === "chat" ? (
          <WebsocketContextProvider
            websocketUrl={websocketUrl}
            identifier={user ? user.uuid : null}
          >
            <PartyChat
              fetcher={fetcher}
              party={currentParty}
              closePartyDetail={closePartyDetail}
            />
          </WebsocketContextProvider>
        ) : (
          <></>
        )}
        {inTheTeam(currentParty) && (
          <Flex
            justify="center"
            style={{ marginTop: 15, cursor: "pointer" }}
            onClick={handleLeaveParty}
          >
            <Text type="danger">
              {`${t("leave party")}  `}
              <LogoutOutlined type="danger" />
            </Text>
          </Flex>
        )}
      </Flex>
      {modalContextHolder}
    </div>
  );
}
