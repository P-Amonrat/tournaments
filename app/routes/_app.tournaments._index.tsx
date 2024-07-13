import { useCallback, useEffect, useState } from "react";
import { json, type LoaderFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
// import { Button } from "antd";
import * as APIServer from "~/api";
import {
  TournamentIndexHeader,
  TournamentGrid,
  TournamentSlider,
  TournamentSliderItem,
} from "~/components/pages/Tournament";
import { Loading, OverlayBg, TiltMenus } from "~/components/common";
import { AffixMenu } from "~/components/layouts";
import { omitBy, isNil, isEmpty } from "lodash";
import jwt_decode from "jwt-decode";
import { getSessionFromRequest } from "~/session.server";
import { joinTournaments } from "~/utils/helper";
import { Button } from "antd";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSessionFromRequest(request);
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  const accessToken = session.get("accessToken");
  let uuid = "" as string;

  let tournaments: any[] = [];
  let games: any[] = [];
  let joinedTournaments: any[] = [];
  let transformedJoinedTournaments: any[] = [];
  let count: number = 0;

  try {
    const tournamentRes = await APIServer.clientFromSession().request(
      APIServer.getTournamentsPaginate(searchParams)
    );
    const gameRes = await APIServer.clientFromSession().request(
      APIServer.getGames()
    );
    if (tournamentRes.data) {
      tournaments = tournamentRes.data.data;
      count = tournamentRes.data.count;
    }
    if (gameRes.data) {
      games = gameRes.data;
    }
  } catch (e) {
    console.log("e", e);
  }

  if (accessToken) {
    const accessTokenDecoded: any = jwt_decode(accessToken);
    uuid = accessTokenDecoded.sub;
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getJoinedTournament(uuid)
      );
      if (tournamentRes.data) {
        joinedTournaments = tournamentRes.data;
      }

      transformedJoinedTournaments = joinedTournaments.map((item) => {
        return {
          id: item.tournament.id,
          name: item.tournament.name,
          nameEn: item.tournament.nameEn,
          discordUrl: item.tournament.discordUrl,
          registrationStartDate: item.tournament.registrationStartDate,
          registrationEndDate: item.tournament.registrationEndDate,
          startDate: item.tournament.startDate,
          endDate: item.tournament.endDate,
          maxTeam: item.tournament.maxTeam,
          playerCount: item.tournament.playerCount,
          additionalPlayerCount: item.tournament.additionalPlayerCount,
          type: item.tournament.type,
          status: item.tournament.status,
          finalRoundLocation: item.tournament.finalRoundLocation,
          finalRoundLocationEn: item.tournament.finalRoundLocationEn,
          totalPrize: item.tournament.totalPrize,
          prize: item.tournament.prize,
          description: item.tournament.description,
          descriptionEn: item.tournament.descriptionEn,
          qualificationRules: item.tournament.qualificationRules,
          qualificationRulesEn: item.tournament.qualificationRulesEn,
          isOnline: item.tournament.isOnline,
          bannerImageUrl: item.tournament.bannerImageUrl,
          thumbnailImageUrl: item.tournament.thumbnailImageUrl,
          remark: item.tournament.remark,
          isKycRequired: item.tournament.isKycRequired,
          isDiscordIdRequired: item.tournament.isDiscordIdRequired,
          isEmailRequired: item.tournament.isEmailRequired,
          isPhoneNumberRequired: item.tournament.isPhoneNumberRequired,
          isIgnRequired: item.tournament.isIgnRequired,
          requirementFields: item.tournament.requirementFields,
          organizerId: item.tournament.organizerId,
          gameId: item.tournament.gameId,
          organizer: item.tournament.organizer,
          game: item.tournament.game,
          createdDate: item.tournament.createdDate,
          updatedDate: item.tournament.updatedDate,
        };
      });
      tournaments = joinTournaments(tournaments, transformedJoinedTournaments);
    } catch (e) {
      console.log("e", e);
    }
  }

  return json({ searchParams, tournaments, count, games });
};

export default function TournamentLayout() {
  const { searchParams, tournaments, games, count } = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const location = useLocation();
  const [featuredTournaments, setFeaturedTournaments] = useState<any>(null);
  const [items, setItems] = useState<any>(null);

  const handleLoadMore = useCallback(() => {
    const newSearchParams = { ...searchParams, offset: items.length };
    const queryString = new URLSearchParams(
      omitBy(newSearchParams, isNil)
    ).toString();

    fetcher.load(`.?${queryString}`);
  }, [items, searchParams]);

  const handleGameChanged = useCallback(
    (game: string) => {
      const newSearchParams = { ...searchParams };
      if (game && game.length > 0) {
        newSearchParams["game"] = game;
      } else {
        delete newSearchParams["game"];
      }
      submit(
        omitBy(newSearchParams, (v) => isNil(v) && isEmpty(v)),
        { method: "get", preventScrollReset: true }
      );
    },
    [searchParams]
  );

  useEffect(() => {
    fetcher.load("/resources/featured-tournaments");
  }, []);

  useEffect(() => {
    setItems([...tournaments]);
  }, [tournaments]);

  useEffect(() => {
    if (!fetcher.data || fetcher.state !== "idle") {
      return;
    }
    if (fetcher.data.featuredTournaments) {
      setFeaturedTournaments(fetcher.data.featuredTournaments);
    }
    if (fetcher.data.tournaments) {
      setItems((items: any[]) => [...items, ...fetcher.data.tournaments]);
    }
  }, [fetcher.data]);

  const hasSearchParams =
    searchParams.game && searchParams.game.length > 0 ? true : false;

  return (
    <div
      style={{
        paddingInline: "3.5%",
        paddingBlock: 20,
        maxWidth: 1440,
        marginInline: "auto",
      }}
    >
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        {!featuredTournaments ? (
          <TournamentSliderItem loading data={null} />
        ) : (
          <TournamentSlider data={featuredTournaments} />
        )}
      </div>
      <AffixMenu>
        <TiltMenus
          activeFromQueryString
          menus={[
            {
              link: hasSearchParams ? `.?game=${searchParams.game}` : ".",
              label: <span>{t("all tournaments")}</span>,
            },
            {
              link: hasSearchParams
                ? `.?status=upcoming&game=${searchParams.game}`
                : ".?status=upcoming",
              label: <span>{t("upcoming tournaments")}</span>,
            },
            {
              link: hasSearchParams
                ? `.?status=opening&game=${searchParams.game}`
                : ".?status=opening",
              label: <span>{t("opening tournaments")}</span>,
            },
            {
              link: hasSearchParams
                ? `.?status=ongoing&game=${searchParams.game}`
                : ".?status=ongoing",
              label: <span>{t("ongoing tournaments")}</span>,
            },
            {
              link: hasSearchParams
                ? `.?status=finished&game=${searchParams.game}`
                : ".?status=finished",
              label: <span>{t("finished tournaments")}</span>,
            },
          ]}
          preventScrollReset
        />
      </AffixMenu>
      <TournamentIndexHeader
        initialValues={searchParams}
        items={items}
        games={games}
        onGameChanged={handleGameChanged}
      />
      <TournamentGrid
        loading={
          navigation.state === "loading" &&
          navigation.location.pathname === location.pathname
        }
        data={items}
      />
      {items && items.length < count && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button onClick={handleLoadMore} size="large">
            {t("load more")}
          </Button>
        </div>
      )}
      {navigation.state === "loading" && (
        <OverlayBg style={{ position: "fixed", zIndex: 100 }} opacity={0.7}>
          <Loading />
        </OverlayBg>
      )}
    </div>
  );
}
