import { useMatches, useNavigate } from "@remix-run/react";
import { Flex, Tooltip } from "antd";
import { useTranslation } from "react-i18next";

interface PartyEntryMembersProps {
  members: any[];
  maxPlayers: number;
}

export function PartyEntryMembers(props: PartyEntryMembersProps) {
  const matches = useMatches();
  const { t } = useTranslation();
  const { cdnUrl } = matches[0].data;
  const { members, maxPlayers } = props;
  const transformedMembers = transformMembers(members, maxPlayers);

  const handleUserClicked = (uuid: string) => {
    window.open(`/users/${uuid}`, "_blank");
  };

  return (
    <Flex gap={5} style={{ width: "100%" }}>
      {transformedMembers.map((member: any) => (
        <Tooltip
          key={member.id ? member.id : null}
          placement="top"
          title={
            member.user
              ? member.user.displayName
              : member.status === "availableSlot"
              ? t("available")
              : t("reserved")
          }
          arrow={false}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "20%",
              borderRadius: 10,
              overflow: "hidden",
              cursor: member.user ? "pointer" : "default",
            }}
            onClick={
              member.user
                ? () =>
                    handleUserClicked(
                      member.user?.userName
                        ? member.user.userName
                        : member.user.uuid
                    )
                : undefined
            }
          >
            <div
              style={{
                width: "100%",
                paddingBottom: "125%",
                transform: "skew(15deg)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-15%",
                  width: "130%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    member.status === "member"
                      ? `url("${cdnUrl}/${member.user.displayImage}")`
                      : member.status === "lockedSlot"
                      ? `url("/image/party-lock-slot.jpg")`
                      : `url("/image/party-available-slot.jpg")`,
                }}
              />
            </div>
          </div>
        </Tooltip>
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
