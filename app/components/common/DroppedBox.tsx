import { DragPreviewImage, useDrag } from "react-dnd";

interface DroppedBoxProps {
  children: any;
  name: string;
  editMode?: boolean;
}

export function DroppedBox(props: DroppedBoxProps) {
  const { children, name } = props;

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "box",
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name]
  );

  return (
    <>
      <DragPreviewImage
        src={`/image/campaign/${name}-thumbnail.png`}
        connect={preview}
      />
      <div
        className="box"
        ref={drag}
        style={{
          display: "inline-block",
          width: "20%",
          cursor: "move",
          borderRadius: 10,
          backgroundColor: isDragging ? "rgba(255,255,255,0.8)" : "transparent",
          opacity: isDragging ? 0.4 : 1,
        }}
        data-testid="box"
      >
        {children}
      </div>
    </>
  );
}
