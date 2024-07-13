import { Image } from "antd";
import { DroppedBox } from "~/components/common";

export function CampaignStickers() {
  return Array(20)
    .fill("")
    .map((_, index) => (
      <DroppedBox key={`sticker-${index + 1}`} name={`sticker-${index + 1}`}>
        <Image
          preview={false}
          src={`/image/campaign/sticker-${index + 1}.png`}
          className="campaign-sticker-drop"
        />
      </DroppedBox>
    ));
}
