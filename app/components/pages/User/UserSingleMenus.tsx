import { useTranslation } from 'react-i18next';
import { Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const UserSingleMenus: any = (
  isOwner?: boolean,
  isOrganizer?: boolean
) => {
  const { t } = useTranslation();
  const menus = [
    {
      link: '.',
      level: 2,
      label: <span>{t('profile')}</span>,
    },
    {
      link: 'my-conversations',
      label: <span>{t('my conversations')}</span>,
    },
    {
      link: 'my-album',
      label: <span>{t('my album')}</span>,
    },
  ] as any[];

  if (isOwner) {
    // menus.push({
    //   link: "my-conversations",
    //   label: <span>{t("my conversations")}</span>,
    // });

    // menus.push({
    //   link: "my-album",
    //   label: <span>{t("my album")}</span>,
    // });

    menus.push({
      link: 'messages',
      label: <span>{t('my notifications')}</span>,
    });
  }

  menus.push({
    link: 'joined-tournaments',
    label: <span>{t('joined tournaments')}</span>,
  });

  if (isOwner) {
    menus.push({
      link: 'my-tournaments',
      label: <span>{t('my tournaments')}</span>,
    });
    menus.push({
      link: '/tournaments/new',
      label: (
        <Space size={10}>
          <PlusOutlined />
          {t('create tournament')}
        </Space>
      ),
    });
  }
  return { menus };
};
