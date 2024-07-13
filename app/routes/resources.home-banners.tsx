import { json, type LoaderFunction } from "@remix-run/node";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async () => {
  let homeBanners: any[] = [];
  let featuredTournaments: any[] = [];
  try {
    const homeBannersRes = await APIServer.clientFromSession().request(
      APIServer.getHomeBanner({ featured: true })
    );
    if (homeBannersRes.data) {
      homeBanners = homeBannersRes.data;
    }
    const tournamentRes = await APIServer.clientFromSession().request(
      APIServer.getTournaments({ featured: true })
    );
    if (tournamentRes.data) {
      featuredTournaments = tournamentRes.data;
    }
  } catch (e) {
    console.log("e", e);
  }

  let filteredHomeBanners = homeBanners.filter(
    (item: any) => item.image !== null
  );

  return json({ homeBanners: filteredHomeBanners, featuredTournaments });
};
