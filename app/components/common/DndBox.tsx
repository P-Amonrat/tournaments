import { useEffect, useState } from "react";
import Moveable from "moveable";
import type { MoveableManagerInterface, Renderer } from "moveable";

interface DndBoxProps {
  editMode?: boolean;
  id: any;
  isTargetImage?: boolean;
  left: number;
  title: string;
  top: number;
  isMobile?: boolean;
}

export function DndBox(props: DndBoxProps) {
  const { id, isTargetImage, left, title, top, editMode } = props;
  const [transformStyle, setTransformStyle] = useState<string>("");
  const [currentMoveable, setCurrentMoveable] = useState<any>(null);

  const handleDeleteClick = () => {
    const containerToRemove = document.getElementById(`container_${id}`);
    if (containerToRemove) {
      containerToRemove.remove();
      window.dispatchEvent(new Event("resize"));
    }
  };

  const DimensionViewable = {
    name: "dimensionViewable",
    props: [],
    events: [],
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
      const rect = moveable.getRect();
      return (
        <div
          key={"dimension-viewer"}
          className={"moveable-dimension"}
          style={{
            position: "absolute",
            left: `${rect.width / 2}px`,
            top: `${rect.height + 4}px`,
            cursor: "pointer",
            background: "white",
            border: "1px solid red",
            borderRadius: "4px",
            padding: "2px 6px",
            color: "red",
            fontSize: 12,
            whiteSpace: "nowrap",
            willChange: "transform",
            transform: `translate(-50%, 0px)`,
          }}
          onClick={handleDeleteClick}
          onTouchStart={handleDeleteClick}
        >
          {`x`}
          {``}
        </div>
      );
    },
  } as const;

  useEffect(() => {
    if (!currentMoveable) {
      const moveable = new Moveable(document.body, {
        target: isTargetImage ? `[id="${id}"]` : undefined,
        ables: [DimensionViewable],
        draggable: true,
        scalable: true,
        edge: ["w", "e"],
        rotatable: true,
        origin: false,
        props: { dimensionViewable: true },
      }).on("render", (e: any) => {
        setTransformStyle(e.transform);
      });
      setCurrentMoveable(moveable);
      window.addEventListener("resize", (e) => {
        moveable.updateRect();
      });
    } else {
      if (!editMode) {
        currentMoveable.target = undefined;
      } else {
        currentMoveable.target = isTargetImage ? `[id="${id}"]` : undefined;
      }
    }
  }, [editMode, id, isTargetImage]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        cursor: "move",
        width: "20%",
        alignItems: "center",
      }}
    >
      <div id={`container_${id}`}>
        <img
          id={id}
          src={`/image/campaign/${title}.png`}
          alt={title}
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            transform: transformStyle,
          }}
        />
      </div>
    </div>
  );
}
