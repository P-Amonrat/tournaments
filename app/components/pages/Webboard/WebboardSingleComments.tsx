import { useContext } from "react";
import { Card, Flex, theme } from "antd";
import { AppContext } from "~/contexts";
import { WebboardSingleComment } from ".";

const { useToken } = theme;

interface WebboardSingleCommentsProps {
  data: any[];
  fetcher: any;
  separate?: boolean;
  onReplyComment?: (comment: any) => void;
  reactionOptions?: any[];
}

export function WebboardSingleComments(props: WebboardSingleCommentsProps) {
  const { data, fetcher, onReplyComment, reactionOptions, separate } = props;
  const { token } = useToken();
  const { scheme } = useContext(AppContext);

  const cardStyle = {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow:
      scheme === "dark"
        ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
        : "0px 4px 15px -5px rgba(0,0,0,0.75)",
  };

  return separate ? (
    <Flex vertical>
      {data.map((comment: any, index: number) => (
        <Card
          key={`comment-${comment.id}`}
          bodyStyle={{ padding: 0 }}
          style={cardStyle}
        >
          <WebboardSingleComment
            data={comment}
            fetcher={fetcher}
            onReply={onReplyComment}
            reactionOptions={reactionOptions}
          />
        </Card>
      ))}
    </Flex>
  ) : (
    <Card bordered={false} bodyStyle={{ padding: 0 }} style={cardStyle}>
      <Flex vertical>
        {data.map((comment: any, index: number) => (
          <WebboardSingleComment
            key={`comment-${comment.id}`}
            data={comment}
            fetcher={fetcher}
            onReply={onReplyComment}
            reactionOptions={reactionOptions}
            borderBottom={
              index !== data.length - 1 ? `1px solid ${token.colorBorder}` : 0
            }
          />
        ))}
      </Flex>
    </Card>
  );
}
