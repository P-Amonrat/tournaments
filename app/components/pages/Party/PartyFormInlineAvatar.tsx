import { useMatches } from "@remix-run/react";
import { Avatar, Badge, Flex, Image, Tooltip, theme } from "antd";
const { useToken } = theme;

interface PartyFormInlineAvatarProps {
  maxPlayers: number;
  members: any[];
  require: number;
}

export function PartyFormInlineAvatar(props: PartyFormInlineAvatarProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { maxPlayers, members, require } = props;
  const { token } = useToken();
  const finalMembers = [...members];
  if (require) {
    for (
      let index = 0;
      index < maxPlayers - require - members.length &&
      finalMembers.length < maxPlayers;
      index++
    ) {
      finalMembers.push({ status: "reserved", user: {} });
    }
  }
  if (finalMembers.length < maxPlayers) {
    for (let j = finalMembers.length; j < maxPlayers; j++) {
      finalMembers.push({ status: "pending", user: null });
    }
  }

  const renderAvatar = (member: any, index: number) => {
    return (
      <Badge
        count={
          index == 0 ? (
            <Image
              preview={false}
              src="/image/crowd-icon.png"
              width={24}
              height={24}
              wrapperStyle={{ position: "absolute", right: 5, top: 5 }}
            />
          ) : (
            <></>
          )
        }
        key={`member-${index}`}
      >
        <Avatar
          src={
            member.user
              ? member.user.displayImage
                ? `${cdnUrl}/${member.user.displayImage}`
                : `/image/party-lock-thumbnail.jpg`
              : `/image/party-available-thumbnail.jpg`
          }
          style={{
            border: `1px solid ${token.colorBorder}`,
          }}
          size={50}
        />
      </Badge>
    );
  };

  return (
    <Flex justify="center" gap={10}>
      {finalMembers.map((member: any, index: number) =>
        member.username ? (
          <Tooltip
            placement="top"
            title={member.username}
            key={`member-${index}`}
            arrow={false}
          >
            {renderAvatar(member, index)}
          </Tooltip>
        ) : (
          renderAvatar(member, index)
        )
      )}
    </Flex>
  );
}
