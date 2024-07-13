import { Card, Empty, Flex, Skeleton, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PartyRequestEntry } from ".";
const { Title } = Typography;

interface PartyRequestsProps {
  fetcher: any;
  party: any;
  accepted: (newParty: any) => void;
}

export function PartyRequests(props: PartyRequestsProps) {
  const { fetcher, party, accepted } = props;
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    fetcher.load(
      `/resources/party-requests?partyId=${party.id}&gameId=${party.gameId}`
    );
  }, [party]);

  useEffect(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle") {
      if (
        fetcher.data.requests &&
        fetcher.data.partyId &&
        `${fetcher.data.partyId}` === `${party.id}`
      ) {
        setLoading(false);
        setRequests(fetcher.data.requests);
      } else if (
        fetcher.data.success &&
        (fetcher.data.success === "approve-party-request" ||
          fetcher.data.success === "reject-party-request")
      ) {
        setRequests([]);
        setLoading(true);
        if (fetcher.data.party) {
          accepted(fetcher.data.party);
        }
        fetcher.load(
          `/resources/party-requests?partyId=${party.id}&gameId=${party.gameId}`
        );
      }
    }
  }, [fetcher, party]);

  return (
    <Card
      bodyStyle={{
        padding: 20,
        maxHeight: 400,
        overflowY: "auto",
        overflowX: "hidden",
        border: "1px solid #dfdfdf",
      }}
    >
      <Title level={4} style={{ marginTop: 0, marginBottom: 20 }}>
        {t("party requests")}
      </Title>
      {loading ? (
        <Skeleton active title={false} />
      ) : requests && requests.length > 0 ? (
        <Flex vertical>
          {requests.map((request: any, index: number) => (
            <PartyRequestEntry
              key={`request-${request.id}`}
              partyId={party.id}
              request={request}
              fetcher={fetcher}
              hasDivider={index < requests.length - 1}
              gameId={party.gameId}
            />
          ))}
        </Flex>
      ) : (
        <Empty description={t("no party request")} />
      )}
    </Card>
  );
}
