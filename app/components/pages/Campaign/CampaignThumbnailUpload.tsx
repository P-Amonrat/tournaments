import { CameraOutlined } from "@ant-design/icons";
import { OverlayBg } from "~/components/common";

interface CampaignThumbnailUploadProps {
  style: React.CSSProperties;
  onUpload: (e: any) => void;
}

export function CampaignThumbnailUpload(props: CampaignThumbnailUploadProps) {
  const { style, onUpload } = props;

  return (
    <label htmlFor="upload-button" style={style}>
      <OverlayBg style={{ cursor: "pointer" }}>
        <CameraOutlined style={{ fontSize: 36, color: "#fff" }} />
      </OverlayBg>
      <input
        type="file"
        id="upload-button"
        accept="image/png,image/jpeg"
        style={{ display: "none" }}
        onChange={onUpload}
      />
    </label>
  );
}
