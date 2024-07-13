import { Avatar, Badge, theme } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "~/contexts/AppContext";
import { useLocation } from "@remix-run/react";
import { Mail } from "lucide-react";
const { useToken } = theme;

interface NotifcationIconProps {
  count: number;
  user: any;
}

export function NotifcationIcon(props: NotifcationIconProps) {
  const { count, user } = props;
  const location = useLocation();
  const { scheme } = useContext(AppContext);
  const { token } = useToken();
  const [notiCount, setNotiCount] = useState(count);
  const regex = new RegExp("^/users/[^/]+/messages$");

  useEffect(() => {
    setNotiCount(regex.test(location.pathname) ? 0 : count);
  }, [count, location]);

  return (
    <a
      style={{ display: "flex", marginRight: 10 }}
      href={`/users/${user?.userName ? user.userName : user.uuid}/messages`}
    >
      <Badge count={notiCount}>
        <Avatar
          size={40}
          style={{
            backgroundColor:
              scheme === "dark" ? "#221f20" : token.colorBgLayout,
            color: token.colorTextBase,
          }}
          icon={<Mail />}
        />
      </Badge>
    </a>
  );
}
