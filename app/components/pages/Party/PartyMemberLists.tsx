import { Flex } from "antd";
import { useContext } from "react";
import { AuthContext } from "~/contexts";
import { PartyMemberEntry } from "./PartyMemberEntry";

interface PartyMemberListsProps {
  fetcher: any;
  party: any;
}

export function PartyMemberLists(props: PartyMemberListsProps) {
  const { fetcher, party } = props;
  const { user } = useContext(AuthContext);
  const master = party.partyMembers.find(
    (member: any) => member.isPartyMaster === true
  );
  const isOwner = user ? master.userId === user.id : false;
  const editable =
    user &&
    party.partyMembers &&
    party.partyMembers.find((m: any) => m.userId === user.id)
      ? true
      : false;

  const transformedMembers = transformMembers(
    party.partyMembers,
    party.maxPlayers
  );

  return (
    <Flex vertical gap={10}>
      {transformedMembers.map((member: any) => (
        <PartyMemberEntry
          key={`member-${member.id}`}
          editable={editable}
          fetcher={fetcher}
          member={member}
          partyId={party.id}
          gameId={party.gameId}
          isPartyOwner={isOwner}
        />
      ))}
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
