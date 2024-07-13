import { Avatar, Badge, Flex, Image, Space, Tooltip, Typography } from "antd";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CloseOutlined } from "@ant-design/icons";
import { AppContext, PartyContext } from "~/contexts";
import { TiltButton } from "~/components/common";
import { ShareDropDown } from "~/components/common/ShareDropDown";
import { useMatches } from "@remix-run/react";
const { Text, Title } = Typography;

interface PartyDetailHeaderProps {
  data: any;
}

export function PartyDetailHeader(props: PartyDetailHeaderProps) {
  const { data } = props;
  const { t } = useTranslation();
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { baseUrl } = useContext(AppContext);
  const { closePartyModal } = useContext(PartyContext);
  const inviteUrl = `${baseUrl}/parties/${data.gameId}?join=${data.id}`;

  return (
    <Flex justify="space-between" align="flex-start">
      <Space size={15} wrap>
        <Image
          preview={false}
          src={
            data.game.mainImageUrl
              ? `${cdnUrl}/${data.game.mainImageUrl}`
              : "/image/placeholder.png"
          }
          width={60}
        />
        <Space direction="vertical">
          <Title level={4} style={{ margin: 0 }}>
            {data.name}
          </Title>
          <Space wrap>
            <TiltButton
              color="secondary"
              style={{ paddingBlock: 3, fontWeight: 400 }}
            >
              {data.mode.name}
            </TiltButton>
            {data.rankOnParties && data.rankOnParties.length > 0 ? (
              <Space size={3}>
                {data.rankOnParties.map((rankOnParty: any, index: number) => (
                  <Tooltip
                    placement="top"
                    key={`${data.id}-rank-${index}`}
                    title={rankOnParty.rank.name}
                    arrow={false}
                  >
                    <Avatar
                      shape="square"
                      src={
                        rankOnParty.rank.imageUrl
                          ? `${cdnUrl}/${rankOnParty.rank.imageUrl}`
                          : "/image/placeholder.png"
                      }
                      size={30}
                    />
                  </Tooltip>
                ))}
              </Space>
            ) : (
              <></>
            )}
            <Badge
              status={!data.isClosed ? "success" : "error"}
              text={!data.isClosed ? t("active") : t("inactive")}
              style={{ fontStyle: "italic" }}
              styles={{ indicator: { padding: 4 } }}
            />
          </Space>
        </Space>
      </Space>
      <Space size={20}>
        <ShareDropDown
          postUrl={inviteUrl}
          copiedMessage={t("party link copied")}
        />
        <Text
          style={{ fontSize: 18, cursor: "pointer" }}
          onClick={closePartyModal}
        >
          <CloseOutlined />
        </Text>
      </Space>
    </Flex>
  );
}
