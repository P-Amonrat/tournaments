import React, { useContext } from "react";
import { Affix, theme } from "antd";
import { AppContext } from "~/contexts";
interface AffixMenuProps {
  children?: any;
  direction?: "vertical" | "horizontal";
  offsetTop?: number;
}

const { useToken } = theme;

export const AffixMenu: React.FC<AffixMenuProps> = (props: AffixMenuProps) => {
  const { children, direction, offsetTop } = props;
  const { token } = useToken();
  const { scheme } = useContext(AppContext);

  return (
    <Affix offsetTop={offsetTop ? offsetTop : 64}>
      <div
        style={{
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          backgroundColor: token.colorBgLayout,
          paddingTop: direction === "vertical" ? 0 : 30,
          paddingBottom: 30,
          marginBottom: direction === "vertical" ? 0 : 30,
          borderBottom:
            direction === "vertical"
              ? "none"
              : `1px solid  ${scheme === "dark" ? "#3e3e3e" : "#dfdfdf"}`,
        }}
      >
        {children}
      </div>
    </Affix>
  );
};
