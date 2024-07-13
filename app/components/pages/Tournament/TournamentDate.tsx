import { Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

interface TournamentDateProps {
  startDate: string;
  endDate: string;
  size?: number;
}

export function TournamentDate(props: TournamentDateProps) {
  const { startDate, endDate, size } = props;

  return (
    <Space
      direction="horizontal"
      size={5}
      style={size ? { fontSize: size } : {}}
    >
      <CalendarOutlined />
      {`${dayjs(startDate).format("DD MMM")} - ${dayjs(endDate).format(
        "DD MMM"
      )}`}
    </Space>
  );
}
