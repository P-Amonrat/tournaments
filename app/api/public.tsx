import type { AxiosRequestConfig } from "axios";

export function getTournaments(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments`,
    params,
  };
}

export function getHomeBanner(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/banners/home`,
    params,
  };
}

export function getTournamentsPaginate(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/paginate`,
    params,
  };
}

export function getGames(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/games`,
    params,
  };
}

export function getGamesWithRanksAndModes(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/games/with-ranks-and-modes`,
    params,
  };
}

export function getRelatedTournaments(
  tournamentId: number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/relate/${tournamentId}`,
  };
}

export function getTournament(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/${id}`,
  };
}

export function getTournamentTeam(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/${id}/teams`,
  };
}

export function getTournamentTeamApproved(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/${id}/teams?status=approved`,
  };
}

export function getTournamentTeamPending(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/${id}/teams?status=pending`,
  };
}

export function getTeam(uuid: string | undefined): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/teams/${uuid}`,
  };
}

export function getUserFromUuid(uuid: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/profile/${uuid}`,
  };
}

export function getUserSummaryFromUuid(uuid: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/profile/${uuid}/summary`,
  };
}

export function getJoinedTournament(uuid: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/${uuid}/tournaments`,
  };
}

export function getAllTournamentByOrganizer(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/organizers/v1/tournaments?status=all`,
  };
}

/////////////
// Pending //
/////////////
export function getWebboard(id: string | number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/posts/${id}`,
  };
}

export function getWebboards(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/posts`,
    params,
  };
}

export function getWebboardsInfo(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/webboards`,
    params,
  };
}

export function getCommentsFromWebboardId(
  id: string | number,
  params?: any
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/posts/${id}/comments`,
    params,
  };
}

export function getCommentPosition(
  postId: string | number,
  commentId: string | number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/posts/${postId}/comments/${commentId}/position`,
  };
}

export function getWebboardRooms(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/rooms`,
    params,
  };
}

export function getWebboardTags(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tags`,
    params,
  };
}

export function getReactions(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/reactions`,
    params,
  };
}

export function getParties(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `api/v1/party-matchings`,
    params,
  };
}

export function getParty(
  id: number | string,
  gameId: number | string | undefined
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/party-matchings/${id}?game=${gameId}`,
  };
}

export function getTournamentWebboard(id: string | number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/posts/${id}`,
  };
}

export function getSearchUser(params?: any): AxiosRequestConfig {
  // Rename userName to name in searchParams
  if (params.userName) {
    params.name = params.userName;
    delete params.userName; // Remove userName from searchParams
  }

  return {
    method: "GET",
    url: `/api/v1/users/search`,
    params,
  };
}
