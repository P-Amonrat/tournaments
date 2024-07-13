import { useContext } from "react";
import { AppContext } from "~/contexts";

export default function ComingSoon() {
  const { scheme } = useContext(AppContext);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("/image/comingsoon-${scheme}.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
