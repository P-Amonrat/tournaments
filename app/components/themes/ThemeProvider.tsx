import * as React from "react";
import { ConfigProvider } from "antd";
import { resetGlobalState } from "react-use-websocket";

interface ThemeProviderProps {
  mode?: string;
  brandColor?: string;
  children: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (
  props: ThemeProviderProps
) => {
  const { brandColor, children, mode } = props;
  const primaryBrand = "#d5f87c";
  const borderColor = "#dfdfdf";
  const boderColorDark = "#3e3e3e";
  const boxShadow = "0 12px 10px -10px rgba(0, 0, 0, 0.2)";
  const boxShadowDark = "0 12px 10px -10px rgba(0, 0, 0, 0.6)";

  const lightToken = {
    colorBgBase: "#eee",
    colorBgContainer: "#fff",
    colorBgElevated: "#f8f8f8",
    colorBgLayout: "#f8f8f8",
    colorBgHeader: "#fff",
    colorPrimary: brandColor ? brandColor : primaryBrand,
    colorBorder: borderColor,
    colorBorderBg: borderColor,
    colorTextBase: "#231f20",
    fontFamily: "FC Twist VF",
    fontSize: 16,
  };
  const darkToken = {
    colorBgBase: "#000",
    colorBgContainer: "#231F20",
    colorBgElevated: "#121212",
    colorBgLayout: "#121212",
    colorBgHeader: "#000",
    colorPrimary: brandColor ? brandColor : primaryBrand,
    colorBorder: boderColorDark,
    colorBorderBg: boderColorDark,
    colorTextBase: "#ffffff",
    colorLink: "#ffffff",
    fontFamily: "FC Twist VF",
    fontSize: 16,
  };
  return (
    <ConfigProvider
      theme={{
        token: mode === "dark" ? darkToken : lightToken,
        components: {
          Button: {
            primaryColor: "#000",
            colorTextLightSolid: "#000",
            controlHeightLG: 50,
          },
          Checkbox: {
            colorBorder: "#8861f2",
            colorPrimary: "#8861f2",
            colorPrimaryHover: "#8861f2",
            controlInteractiveSize: 20,
          },
          Card: {
            padding: 12,
            paddingLG: 18,
            lineWidth: 0,
            boxShadow: mode === "dark" ? boxShadowDark : boxShadow,
          },
          Carousel: {
            dotWidth: 30,
            dotActiveWidth: 30,
            colorBgContainer: primaryBrand,
          },
          DatePicker: {
            colorBorder: mode === "dark" ? boderColorDark : borderColor,
            colorBgContainer: "transparent",
            controlHeight: 46,
            controlOutlineWidth: 0,
          },
          Divider: {
            colorSplit: mode === "dark" ? boderColorDark : borderColor,
          },
          Form: {
            marginLG: 10,
            paddingXS: 5,
          },
          Input: {
            addonBg: "transparent",
            colorBorder: mode === "dark" ? boderColorDark : borderColor,
            colorBgContainer: "transparent",
            paddingBlock: 8,
          },
          Layout: {
            headerBg: mode === "dark" ? "#000" : "#fff",
          },
          Menu: {
            fontSize: 16,
            itemBg: "transparent",
            itemSelectedColor: "#201c1d",
            itemSelectedBg: primaryBrand,
          },
          Modal: {
            contentBg: mode === "dark" ? "#222" : "#fff",
          },
          Result: {
            colorInfo: "#7a6fee",
          },
          Select: {
            colorBgContainer: "transparent",
            colorBorder: mode === "dark" ? boderColorDark : borderColor,
            optionSelectedBg: primaryBrand,
            optionSelectedColor: "#000",
            controlHeight: 40,
            controlOutlineWidth: 0,
          },
          Switch: {
            colorPrimary: "#7b46cb",
            colorPrimaryHover: "#7b46cb",
            controlHeight: 40,
          },
          Tooltip: {
            colorTextLightSolid: mode === "dark" ? "#000" : "#fff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
