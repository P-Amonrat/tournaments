import React from "react";
import { Avatar, Space } from "antd";

interface UserSocialProps {
  data: any;
  isOwner?: boolean;
}

export const UserSocial: React.FC<UserSocialProps> = (
  props: UserSocialProps
) => {
  const { data, isOwner } = props;

  return (
    <Space size={10} style={{ display: "flex", flexWrap: "wrap" }}>
      {data.profile.facebookLink &&
        (data.profile.privateFacebookLink !== "private" || isOwner) && (
          <a
            href={
              data.profile.facebookLink.indexOf("https://") > -1
                ? data.profile.facebookLink
                : `https://${data.profile.facebookLink}`
            }
            target="_blank"
            rel="noreferrer"
          >
            <Avatar src="/image/social/facebook.png" size={40} />
          </a>
        )}
      {data.profile.xLink &&
        (data.profile.privateXLink !== "private" || isOwner) && (
          <a
            href={
              data.profile.xLink.indexOf("https://") > -1
                ? data.profile.xLink
                : `https://${data.profile.xLink}`
            }
            target="_blank"
            rel="noreferrer"
          >
            <Avatar src="/image/social/x.png" size={40} />
          </a>
        )}
      {data.profile.twitchLink &&
        (data.profile.privateTwitchLink !== "private" || isOwner) && (
          <a
            href={
              data.profile.twitchLink.indexOf("https://") > -1
                ? data.profile.twitchLink
                : `https://${data.profile.twitchLink}`
            }
            target="_blank"
            rel="noreferrer"
          >
            <Avatar src="/image/social/twitch.png" size={40} />
          </a>
        )}
    </Space>
  );
};
