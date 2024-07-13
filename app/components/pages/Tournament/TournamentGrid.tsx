import { Col, Row, Typography } from "antd";
import { TournamentEntry } from ".";
const { Title } = Typography;

interface TournamentGridProps {
  data: any[] | null;
  loading?: boolean;
  title?: string;
}

export function TournamentGrid(props: TournamentGridProps) {
  const { data, loading, title } = props;
  const dummy = Array(8).fill("");
  const entries = loading ? dummy : data ? data : [];

  return (
    <>
      {title && (
        <Title level={4} style={{ marginTop: 0, marginBottom: 30 }}>
          {title}
        </Title>
      )}
      <Row gutter={[20, 20]}>
        {entries.map((item: any, index: number) => (
          <Col span={24} md={6} key={loading ? `dummy-${index}` : item.id}>
            <TournamentEntry data={item} loading={loading} />
          </Col>
        ))}
      </Row>
    </>
  );
}
