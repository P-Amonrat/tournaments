import { Tag } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { toNumber } from "lodash";

interface TournamentRewardProps {
  reward: number | string;
}

export function TournamentReward(props: TournamentRewardProps) {
  const { t } = useTranslation();
  const { reward } = props;

  return reward ? (
    <Tag
      icon={<TrophyOutlined />}
      style={{ margin: 0, lineHeight: "24px", fontSize: 12 }}
      color="#7063f4"
    >
      {toNumber(reward).toLocaleString()} {t("thb")}
    </Tag>
  ) : null;
}
