import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Card, Result } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import * as APIServer from "~/api";
import { TournamentGrid } from "~/components/pages/Tournament";
import { joinTournaments } from "~/utils/helper";
import { getSessionFromRequest } from "~/session.server";
import jwt_decode from "jwt-decode";

export const loader: LoaderFunction = async ({ params, request }) => {
  const session = await getSessionFromRequest(request);
  const { uuid } = params;
  const accessToken = session.get("accessToken");
  let uuidUser = "" as string;
  let tournaments: any[] = [];
  let transformedTournaments: any[] = [];
  let joinedTournaments: any[] = [];
  let transformedJoinedTournaments: any[] = [];
  if (uuid) {
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getJoinedTournament(uuid)
      );
      if (tournamentRes.data) {
        tournaments = tournamentRes.data;
      }

      transformedTournaments = tournaments.map((item) => {
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
      tournaments = transformedTournaments;
    } catch (e) {
      console.log("e", e);
    }
  }

  if (accessToken) {
    const accessTokenDecoded: any = jwt_decode(accessToken);
    uuidUser = accessTokenDecoded.sub;
    try {
      const tournamentRes = await APIServer.clientFromSession().request(
        APIServer.getJoinedTournament(uuidUser)
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
      tournaments = joinTournaments(
        transformedTournaments,
        transformedJoinedTournaments
      );
    } catch (e) {
      console.log("e", e);
    }
  }
  return json({ uuid, tournaments });
};

export default function UserJoinedTournaments() {
  const { tournaments } = useLoaderData();
  const { t } = useTranslation();

  return tournaments.length ? (
    <TournamentGrid loading={tournaments === null} data={tournaments} />
  ) : (
    <Card style={{ borderRadius: 10 }}>
      <Result icon={<InboxOutlined />} title={t("no past tournament")} />
    </Card>
  );
}
