import React, { useContext } from "react";
import { AppContext } from "~/contexts";

interface TiltButtonProps {
  color?: string;
  overLayStyle?: React.CSSProperties;
  children: React.ReactNode;
  disabled?: boolean;
  isSubmit?: boolean;
  noBorder?: boolean;
  onClick?: any;
  style?: React.CSSProperties;
}

export const TiltButton: React.FC<TiltButtonProps> = (
  props: TiltButtonProps
) => {
  const { children, color, disabled, noBorder, onClick, overLayStyle, style } =
    props;
  const { scheme } = useContext(AppContext);
  return (
    <div
      className={`tilt-button ${
        color && !disabled ? `${color} ` : "secondary "
      }${onClick && !disabled ? `clickable ` : ""} ${scheme} ${
        noBorder ? "no-border" : ""
      }`}
      style={style}
      onClick={!disabled ? onClick : undefined}
    >
      <span className="tilt-button-overlay" style={overLayStyle} />
      <span style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </span>
    </div>
  );
};
