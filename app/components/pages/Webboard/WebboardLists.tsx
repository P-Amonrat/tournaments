import { Card, Flex, Result } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { WebboardEntry } from "./WebboardEntry";

interface WebboardListsProps {
  data: any[];
  fetcher?: any;
  reactionOptions?: any[];
  isMyWebboard?: boolean;
}

export function WebboardLists(props: WebboardListsProps) {
  const { data, fetcher, reactionOptions, isMyWebboard } = props;
  const { t } = useTranslation();

  if (data.length > 0) {
    return (
      <Flex vertical gap={16}>
        {data.map((item: any) => (
          <WebboardEntry
            fetcher={fetcher}
            key={item.id}
            data={item}
            reactionOptions={reactionOptions}
            isMyWebboard={isMyWebboard}
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
