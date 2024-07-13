import { Button, Result } from "antd";

interface ErrorResultsProps {
  status: number | "unknown";
}

export function ErrorResults(props: ErrorResultsProps) {
  const { status } = props;

  let title = "Sorry, the page you visited does not exist.";
  if (status === 500 || status === "unknown") {
    title = "Sorry, something went wrong.";
  }

  return (
    <Result
      status="error"
      title={title}
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  );
}
