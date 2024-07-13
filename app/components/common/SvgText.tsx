interface SvgTextProps {
  color: string;
  message: string;
}

export const SvgText: React.FC<SvgTextProps> = (props: SvgTextProps) => {
  const { color, message } = props;
  return (
    <div className="svg-text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360.96 358.98"
        style={{ width: "100%", height: "auto" }}
      >
        <text
          style={{
            color: color,
            fontFamily: "FC Twist VF",
            transform: "translate(40px, 202px)",
            fontSize: "62px",
            fill: color,
          }}
        >
          {message}
        </text>
      </svg>
    </div>
  );
};
