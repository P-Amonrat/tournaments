import { Card, Flex, Result, Skeleton } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { PartyEntry } from './';
import { QueAnim } from '~/components/common';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

interface PartyListsProps {
  data: any[];
  onEntryClick: (data: any) => void;
}

export function PartyLists(props: PartyListsProps) {
  const { data, onEntryClick } = props;
  const { t } = useTranslation();

  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const handleEntryClick = (data: any) => {
    onEntryClick(data);
  };

  useEffect(() => {
    setInitialLoading(false);
  }, []);

  let items: any[] = [];
  if (data && data.length > 0) {
    items = data.map((item: any) => (
      <li
        key={`${item.id}-${dayjs(item.lastActivityAt).unix()}`}
        style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}
      >
        <PartyEntry data={item} onClick={handleEntryClick} />
      </li>
    ));
  }

  return initialLoading ? (
    <Skeleton active />
  ) : items.length > 0 ? (
    <Flex vertical>
      <QueAnim items={items} />
    </Flex>
  ) : (
    <Card style={{ borderRadius: 10 }}>
      <Result icon={<InboxOutlined />} title={t('no party matched')} />
    </Card>
  );
}
