import { Card, Flex, Result } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { ExperienceEntry } from "./ExpereinceEntry";

interface ExperienceListsProps {
  data: any[];
  fetcher?: any;
  reactionOptions?: any[];
  isMyWebboard?: boolean;
}

export function AlbumLists(props: ExperienceListsProps) {
  const { data, fetcher, isMyWebboard } = props;
  const { t } = useTranslation();

  if (data.length > 0) {
    return (
      <Flex vertical gap={20}>
        {data.map((item: any) => (
          <ExperienceEntry
            fetcher={fetcher}
            key={item.id}
            data={item}
            isMyWebboard={isMyWebboard}
          />
        ))}
      </Flex>
    );
  } else {
    return (
      <Card style={{ borderRadius: 10 }}>
        <Result icon={<InboxOutlined />} title={t("no album")} />
      </Card>
    );
  }
}
