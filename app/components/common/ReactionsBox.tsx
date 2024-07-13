import { useMatches } from "@remix-run/react";
import { Avatar, Card, Flex } from "antd";

interface ReactionsBoxProps {
  data: any;
  onReactionSelect: (option: number | string) => void;
}

export function ReactionsBox(props: ReactionsBoxProps) {
  const { data, onReactionSelect } = props;
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  return (
    <Card
      bordered={false}
      bodyStyle={{
        padding: 10,
        width: 260,
        maxHeight: 260,
        overflow: "auto",
      }}
    >
      <Flex gap={10} wrap="wrap">
        {data &&
          data.length > 0 &&
          data.map((option: any) => (
            <Avatar
              key={option.id}
              shape="square"
              src={`${cdnUrl}/${option.image}`}
              size={40}
              onClick={() => onReactionSelect(option.id)}
              style={{ cursor: "pointer" }}
            />
          ))}
      </Flex>
    </Card>
  );
}
