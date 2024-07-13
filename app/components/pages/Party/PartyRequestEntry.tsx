import { useMatches } from "@remix-run/react";
import { Avatar, Divider, Flex, Space, Tooltip, Typography } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  CommentOutlined,
} from "@ant-design/icons";
// import { useTranslation } from 'react-i18next';
const { Text } = Typography;

interface PartyRequestEntryProps {
  fetcher: any;
  hasDivider?: boolean;
  request: any;
  partyId: number | string;
  gameId: number | string;
}

export function PartyRequestEntry(props: PartyRequestEntryProps) {
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;
  const { fetcher, hasDivider, request, partyId, gameId } = props;
  // const { t } = useTranslation();

  const handleApproveRequest = () => {
    fetcher.submit(
      {
        requestId: request.id,
        partyId,
        gameId,
      },
      {
        method: "post",
        action: `/resources/approve-party-request`,
      }
    );
  };

  const handleRejectRequest = () => {
    fetcher.submit(
      {
        requestId: request.id,
        partyId,
      },
      {
        method: "post",
        action: `/resources/reject-party-request`,
      }
    );
  };

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        // style={{ opacity: request.status !== "pending" ? 0.5 : 1 }}
        style={{ opacity: 1 }}
      >
        <Space size={10} style={{ alignItems: "center" }}>
          <Avatar
            src={
              request.user.displayImage
                ? `${cdnUrl}/${request.user.displayImage}`
                : "/image/placeholder.png"
            }
            size={50}
          />
          {request.user.userGames && (
            <Text>{request.user.userGames[0].ign}</Text>
          )}
          {request.message && (
            <Tooltip title={request.message} placement="top" arrow={false}>
              <CommentOutlined style={{ color: "#7a6fee" }} />
            </Tooltip>
          )}
        </Space>
        <Space size={10} style={{ alignItems: "center" }}>
          <CheckOutlined
            style={{ color: "#18Bd62", cursor: "pointer" }}
            onClick={handleApproveRequest}
          />
          <CloseOutlined
            style={{ color: "#cf1714", cursor: "pointer" }}
            onClick={handleRejectRequest}
          />
        </Space>
        {/* {request.status === 'pending' ? (
          fetcher.state !== 'idle' ? (
            <Skeleton.Button active size="small" shape="round" />
          ) : (
            <Space size={10} style={{ alignItems: 'center' }}>
              <CheckOutlined
                style={{ color: '#18Bd62', cursor: 'pointer' }}
                onClick={handleApproveRequest}
              />
              <CloseOutlined
                style={{ color: '#cf1714', cursor: 'pointer' }}
                onClick={handleRejectRequest}
              />
            </Space>
          )
        ) : request.status === 'approved' ? (
          <Space style={{ alignItems: 'center' }}>
            <CheckOutlined style={{ color: '#18Bd62' }} />
            <Text style={{ color: '#18Bd62' }}>{t('joined')}</Text>
          </Space>
        ) : (
          <Space>
            <CloseOutlined style={{ color: '#cf1714' }} />
            <Text style={{ color: '#cf1714' }}>{t('rejected')}</Text>
          </Space>
        )} */}
      </Flex>
      {hasDivider && <Divider style={{ marginBlock: 5 }} />}
    </>
  );
}
