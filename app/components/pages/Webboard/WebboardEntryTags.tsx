import { Link } from "@remix-run/react";
import { Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
const { Text } = Typography;

interface WebboardEntryTagsProps {
  data: any[];
}

export function WebboardEntryTags(props: WebboardEntryTagsProps) {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <Space wrap size={[10, 4]} style={{ lineHeight: 1 }}>
      {data
        .sort((a: any, b: any) => {
          if (a.id > b.id) return -1;
          if (a.id < b.id) return 1;
          return 0;
        })
        .map((postTag: any) => (
          <Link key={postTag.tag.name} to={`/tags/${postTag.tag.id}`}>
            <Text style={{ color: "#7a6fee" }}>
              {t(`#${postTag.tag.name}`)}
            </Text>
          </Link>
        ))}
    </Space>
  );
}
