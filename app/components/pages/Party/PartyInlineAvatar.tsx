import { useMatches } from "@remix-run/react";
import { Avatar, Badge, Flex, Image, Tooltip, theme } from "antd";
const { useToken } = theme;

interface PartyInlineAvatarProps {
  maxPlayers: number;
  members: any[];
}

export function PartyInlineAvatar(props: PartyInlineAvatarProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { maxPlayers, members } = props;
  const { token } = useToken();
  const transformedMembers = transformMembers(members, maxPlayers);

  const renderAvatar = (member: any, index: number) => {
    const avatarUrl =
      member.status === "member"
        ? `${cdnUrl}/${member.user.displayImage}`
        : member.status === "lockedSlot"
        ? `/image/party-lock-thumbnail.jpg`
        : `/image/party-available-thumbnail.jpg`;
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
          src={avatarUrl}
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
      {transformedMembers.map((member: any, index: number) =>
        member.user ? (
          <Tooltip
            placement="top"
            title={member.user.username}
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

function transformMembers(members: any[], maxPlayers: number) {
  const copyMembers = [...members]; // Create a copy of the original members array
  let transformedMembers = [];

  const masterIndex = copyMembers.findIndex(
    (member) => member.isPartyMaster === true
  );
  if (masterIndex !== -1) {
    transformedMembers.push({
      ...copyMembers[masterIndex],
      status: "member",
    });
    copyMembers.splice(masterIndex, 1);
  }

  while (transformedMembers.length < maxPlayers) {
    const memberIndex = copyMembers.findIndex(
      (member) => member.isSlotLocked === false
    );

    if (memberIndex === -1) {
      const lockedIndex = copyMembers.findIndex(
        (member) => member.isSlotLocked === true
      );
      if (lockedIndex !== -1) {
        transformedMembers.push({
          ...copyMembers[lockedIndex],
          status: "lockedSlot",
        });
        copyMembers.splice(lockedIndex, 1);
      } else {
        break; // Break out of the loop if no more members to add
      }
    } else {
      transformedMembers.push({
        ...copyMembers[memberIndex],
        status: "member",
      });
      copyMembers.splice(memberIndex, 1);
    }
  }

  // Fill remaining slots with 'availableSlot'
  while (transformedMembers.length < maxPlayers) {
    transformedMembers.push({
      status: "availableSlot",
      id: `availableSlot-${transformedMembers.length}`,
    });
  }

  return transformedMembers;
}
