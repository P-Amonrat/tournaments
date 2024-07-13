import { Card, Flex, Result } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { WebboardEntry } from "./WebboardEntry";

interface MyWebboardListsProps {
  data: any[];
  fetcher?: any;
  reactionOptions?: any[];
}

export function MyWebboardLists(props: MyWebboardListsProps) {
  const { data, fetcher, reactionOptions } = props;
  const { t } = useTranslation();

  if (data.length > 0) {
    return (
      <Flex vertical gap={20}>
        {data.map((item: any) => (
          <WebboardEntry
            fetcher={fetcher}
            key={item.id}
            data={item}
            reactionOptions={reactionOptions}
          />
        ))}
      </Flex>
    );
  } else {
    return (
      <Card style={{ borderRadius: 10 }}>
        <Result icon={<InboxOutlined />} title={t("no webboard")} />
      </Card>
    );
  }
}
