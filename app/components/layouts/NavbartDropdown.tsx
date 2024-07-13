import { useContext } from "react";
import { Avatar, Dropdown, Flex, theme, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { TiltButton } from "../common";

import { AppContext, AuthContext } from "~/contexts";
import { useMatches } from "@remix-run/react";
import { Settings } from "lucide-react";

const { Text } = Typography;
const { useToken } = theme;

interface NavbarDropdownProps {
  menus?: any[];
}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = (
  props: NavbarDropdownProps
) => {
  const { menus } = props;
  const { user } = useContext(AuthContext);
  const { scheme } = useContext(AppContext);
  const matches = useMatches();
  const { token } = useToken();
  const { cdnUrl } = matches[0].data;

  return (
    <Dropdown
      menu={{ style: { width: 200 }, items: menus }}
      trigger={["click"]}
    >
      <div style={{ cursor: "pointer" }}>
        {user ? (
          <Flex gap={10} align="center">
            <Avatar
              size={40}
              src={
                user.displayImage
                  ? `${cdnUrl}/${user.displayImage}`
                  : "/image/placeholder.png"
              }
            />
            <Text
              style={{
                marginLeft: -25,
                padding: "5px 15px 5px 20px",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor:
                  scheme === "dark" ? "#221f20" : token.colorBgLayout,
              }}
            >
              {user.displayName}
            </Text>
          </Flex>
        ) : (
          <TiltButton color="secondary-brand">
            <Settings style={{ display: "flex", fontSize: 20 }} />
          </TiltButton>
        )}
      </div>
    </Dropdown>
  );
};
