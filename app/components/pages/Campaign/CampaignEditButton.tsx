import { Avatar, Button } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Media } from "~/components/common";

interface CampaignEditButtonProps {
  editMode: boolean;
  onClick: () => void;
}

export function CampaignEditButton(props: CampaignEditButtonProps) {
  const { t } = useTranslation();
  const { editMode, onClick } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: -15,
      }}
    >
      <Media greaterThan="sm">
        {editMode ? (
          <Avatar
            icon={<CloseOutlined />}
            style={{
              backgroundColor: "#eb4d4f",
              cursor: "pointer",
            }}
            onClick={onClick}
            size={48}
          />
        ) : (
          <Button
            style={{
              height: 48,
              color: "#fff",
              backgroundColor: "#eb4d4f",
              border: "none",
            }}
            icon={<EditOutlined />}
            shape="round"
            onClick={onClick}
          >
            {t("edit")}
          </Button>
        )}
      </Media>
      <Media at="sm">
        {editMode ? (
          <Avatar
            icon={<CloseOutlined />}
            style={{
              backgroundColor: "#eb4d4f",
              cursor: "pointer",
            }}
            onClick={onClick}
            size={36}
          />
        ) : (
          <Button
            style={{
              height: 32,
              padding: "0 10px",
              fontSize: 10,
              color: "#fff",
              backgroundColor: "#eb4d4f",
              border: "none",
            }}
            icon={<EditOutlined />}
            shape="round"
            onClick={onClick}
          >
            {t("edit")}
          </Button>
        )}
      </Media>
    </div>
  );
}
