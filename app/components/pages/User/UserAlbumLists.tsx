import { Card, Flex, Result } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { AlbumEntry } from "./AlbumEntry";

interface AlbumListsProps {
  data: any[];
  uuid: string;
  fetcher?: any;
  reactionOptions?: any[];
  isMyWebboard?: boolean;
}

export function AlbumLists(props: AlbumListsProps) {
  const { data, fetcher, isMyWebboard, uuid } = props;
  const { t } = useTranslation();

  if (data.length > 0) {
    return (
      <Flex vertical gap={20}>
        {data.map((item: any) => (
          <AlbumEntry
            fetcher={fetcher}
            key={item.id}
            data={item}
            isMyWebboard={isMyWebboard}
            uuid={uuid}
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
