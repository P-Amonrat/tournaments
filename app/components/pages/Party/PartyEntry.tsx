import { useCallback, useContext } from "react";
import { useMatches } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Avatar, Card, Flex, Space, Tooltip, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { AppContext } from "~/contexts";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { PartyEntryMembers } from "./PartyEntryMembers";
import { Media, TiltButton } from "~/components/common";
import dayjs from "dayjs";

const { Text, Title } = Typography;

interface PartyEntryProps {
  data: any;
  fetcher?: any;
  onClick?: any;
}

export function PartyEntry(props: PartyEntryProps) {
  const { data, onClick } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl } = useContext(AppContext);
  const { t } = useTranslation();
  const inviteUrl = `${baseUrl}/parties/${data.gameId}?join=${data.id}`;
  const isOwner = data.isPartyMaster === true;
  const joined = data.status === "joined";

  const handleClick = useCallback(() => {
    onClick(data);
  }, [data]);

  return (
    <div style={{ paddingInline: 20 }}>
      <Card
        bordered={false}
        style={{
          transform: "skew(-15deg)",
          filter: "drop-shadow(4px 4px 0px rgba(124, 111, 246, 0.50))",
        }}
        bodyStyle={{ padding: 15 }}
      >
        <Flex vertical gap={20}>
          <Flex justify="space-between" align="center">
            <Space size={10} style={{ alignItems: "center" }}>
              <Title level={3} style={{ margin: 0 }}>
                {data.name}
              </Title>
              {data.rankOnParties && data.rankOnParties.length > 0 ? (
                <Space size={3} style={{ transform: "skew(15deg)" }}>
                  {data.rankOnParties.map((rankOnParty: any, index: number) => (
                    <Tooltip
                      placement="top"
                      key={`${data.id}-rank-${index}-${rankOnParty.id}`}
                      title={rankOnParty.rank.name}
                      arrow={false}
                    >
                      <Avatar
                        shape="square"
                        src={`${cdnUrl}/${rankOnParty.rank.imageUrl}`}
                        size={26}
                      />
                    </Tooltip>
                  ))}
                </Space>
              ) : (
                <></>
              )}
            </Space>
            <Space size={5}>
              <Media greaterThan="sm">
                <Text style={{ opacity: 0.6 }}>
                  {dayjs(data.createdAt).format("DD MMM YYYY")}
                </Text>
              </Media>
              <ShareDropDown
                postUrl={inviteUrl}
                copiedMessage={t("party link copied")}
              />
            </Space>
          </Flex>
          <Media greaterThan="sm">
            <Flex gap={10} align="flex-end">
              {data.partyMembers && data.partyMembers.length > 0 ? (
                <PartyEntryMembers
                  members={data.partyMembers}
                  maxPlayers={data.maxPlayers}
                />
              ) : (
                <></>
              )}
              <Flex
                vertical
                gap={5}
                wrap="nowrap"
                style={{ width: 140 }}
                align="end"
              >
                {data.availableSlots > 0 && (
                  <Text>{`${t("available")} ${data.availableSlots}`}</Text>
                )}
                <Space>
                  <TiltButton
                    color={
                      isOwner
                        ? "secondary-brand"
                        : joined
                        ? "secondary"
                        : "primary"
                    }
                    style={{ whiteSpace: "nowrap", transform: "skew(15deg)" }}
                    onClick={handleClick}
                  >
                    {isOwner ? (
                      t("manage")
                    ) : joined && data.availableSlots > 0 ? (
                      t("detail") // joined
                    ) : data.isPrivate && data.availableSlots > 0 ? (
                      <Space size={5}>
                        <LockOutlined />
                        {t("request")}
                      </Space> // request to join
                    ) : (
                      t("join")
                    )}
                  </TiltButton>
                </Space>
              </Flex>
            </Flex>
          </Media>
          <Media at="sm">
            <Flex vertical gap={15}>
              {data.partyMembers && data.partyMembers.length > 0 ? (
                <PartyEntryMembers
                  members={data.partyMembers}
                  maxPlayers={data.maxPlayers}
                />
              ) : (
                <></>
              )}
              <Flex justify="space-between" align="center">
                <Text style={{ opacity: 0.6 }}>
                  {dayjs(data.createdAt).format("DD MMM YYYY")}
                </Text>
                <Space size={10}>
                  {data.availableSlots > 0 && (
                    <Text>{`${t("available")} ${data.availableSlots}`}</Text>
                  )}
                  <TiltButton
                    color={
                      isOwner
                        ? "secondary-brand"
                        : joined
                        ? "secondary"
                        : "primary"
                    }
                    style={{
                      paddingBlock: 8,
                      whiteSpace: "nowrap",
                      transform: "skew(15deg)",
                    }}
                    onClick={handleClick}
                  >
                    {isOwner ? (
                      t("manage")
                    ) : joined && data.availableSlots > 0 ? (
                      t("detail") // joined
                    ) : data.isPrivate && data.availableSlots > 0 ? (
                      <Space size={5}>
                        <LockOutlined />
                        {t("request")}
                      </Space> // request to join
                    ) : (
                      t("join")
                    )}
                  </TiltButton>
                </Space>
              </Flex>
            </Flex>
          </Media>
        </Flex>
      </Card>
    </div>
  );
}
