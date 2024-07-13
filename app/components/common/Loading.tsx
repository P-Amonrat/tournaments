import { theme } from "antd";
const { useToken } = theme;

export function Loading() {
  const { token } = useToken();

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 300,
        height: 30,
        backgroundColor: token.colorBgContainer,
        backgroundImage: "url('/image/stripe.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        transform: "translate(-50%,-50%)",
        animation: "loadingStripe 15s linear infinite",
        zIndex: 100,
      }}
    />
  );
}
