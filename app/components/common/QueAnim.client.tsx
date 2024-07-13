import QueueAnim from "rc-queue-anim";

interface QueAnimProps {
  items: any;
}

export function QueAnim(props: QueAnimProps) {
  const { items } = props;

  return (
    <QueueAnim
      component="ul"
      type={["right", "left"]}
      style={{ padding: 0, margin: 0 }}
      leaveReverse
    >
      {items}
    </QueueAnim>
  );
}
