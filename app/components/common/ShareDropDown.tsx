import { Avatar, Dropdown, notification, Space, Typography } from "antd";
import { CopyOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { TiltButton } from "./TiltButton";
import { RiShareForwardLine } from "react-icons/ri";
import { Share } from "lucide-react";

const { Text } = Typography;

interface ShareDropDownProps {
  copiedMessage?: string;
  postUrl: string;
  dropDownPlacement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  shareProfile?: boolean;
}

export function ShareDropDown(props: ShareDropDownProps) {
  const { copiedMessage, dropDownPlacement, postUrl, shareProfile } = props;
  const { t } = useTranslation();
  const [messageApi, contextHolder] = notification.useNotification();

  const sharedMenus = [
    {
      label: (
        <Space size={5}>
          <Avatar icon={<CopyOutlined />} size={20} />
          Copy URL
        </Space>
      ),
      onClick: () => {
        navigator.clipboard.writeText(postUrl);
        messageApi.open({
          type: "success",
          message: copiedMessage ? copiedMessage : t("post url copied"),
          duration: 5,
          placement: "bottomRight",
        });
      },
    },
    {
      label: (
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Space size={5}>
            <Avatar src="/image/social/facebook.png" size={20} />
            Facebook
          </Space>
        </a>
      ),
    },
    {
      label: (
        <a
          href={`http://twitter.com/share?url=${postUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Space size={5}>
            <Avatar src="/image/social/x.png" size={20} />X
          </Space>
        </a>
      ),
    },
  ] as any[];

  return (
    <>
      <Dropdown
        arrow={false}
        menu={{ items: sharedMenus }}
        placement={dropDownPlacement ? dropDownPlacement : "bottomRight"}
        trigger={["click"]}
      >
        {shareProfile ? (
          <TiltButton color="secondary-brand" style={{ paddingInline: 15 }}>
            <Space size={5} style={{ strokeWidth: 2, fontSize: "1.2em" }}>
              <Share />
            </Space>
          </TiltButton>
        ) : (
          <Text style={{ fontSize: 18, cursor: "pointer" }}>
            <Share />
          </Text>
        )}
      </Dropdown>
      {contextHolder}
    </>
  );
}
