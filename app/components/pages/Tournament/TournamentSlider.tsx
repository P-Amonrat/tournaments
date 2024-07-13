import { Carousel } from "antd";
import { TournamentSliderItem } from ".";

interface TournamentSliderProps {
  data: any[];
}

export function TournamentSlider(props: TournamentSliderProps) {
  const { data } = props;

  return (
    <Carousel dots={{ className: "left" }} arrows={true}>
      {data.map((item: any) => (
        <TournamentSliderItem key={item.id} data={item} />
      ))}
    </Carousel>
  );
}
