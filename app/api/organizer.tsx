import type { AxiosRequestConfig } from "axios";

export function getExportPendingTeams(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/organizers/v1/tournaments/${id}/teams/export?status=pending`,
  };
}

export function getExportApprovedTeams(id: number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/organizers/v1/tournaments/${id}/teams/export?status=approved`,
  };
}

export function createTournament(data: any): AxiosRequestConfig {
  const {
    requirementFields,
    isOnline,
    isKycRequired,
    isDiscordIdRequired,
    isEmailRequired,
    isPhoneNumberRequired,
    isIgnRequired,
    isTournamentPost,
    additionalPlayerCount,
    ...values
  } = data;

  const arrayContainsNull = (arr: any) => {
    return arr.some((item: any) => item === null);
  };

  const dataToSend = {
    ...values,
    requirementFields: data.requirementFields ? data.requirementFields : [],
    isOnline: data.isOnline ? data.isOnline : false,
    isKycRequired: data.isKycRequired ? data.isKycRequired : false,
    isDiscordIdRequired: data.isDiscordIdRequired
      ? data.isDiscordIdRequired
      : false,
    isEmailRequired: data.isEmailRequired ? data.isEmailRequired : false,
    isPhoneNumberRequired: data.isPhoneNumberRequired
      ? data.isPhoneNumberRequired
      : false,
    isIgnRequired: data.isIgnRequired ? data.isIgnRequired : false,
    isSlipRequired: data.isSlipRequired ? data.isSlipRequired : false,
    isTournamentPost: data.isTournamentPost ? data.isTournamentPost : true,
    additionalPlayerCount: data.additionalPlayerCount
      ? data.additionalPlayerCount
      : 0,
    prize: arrayContainsNull(data.prize) ? ["", "", ""] : data.prize,
  };

  return {
    method: "POST",
    url: `/organizers/v1/tournaments`,
    data: dataToSend,
  };
}

export function updateTournament(data: any, id: number): AxiosRequestConfig {
  const { requirementFields, prize, ...values } = data;
  const dataToSend = {
    ...values,
    requirementFields: data.requirementFields ? data.requirementFields : [],
    prize: data.prize ? data.prize : ["", "", ""],
  };

  return {
    method: "PUT",
    url: `/organizers/v1/tournaments/${id}`,
    data: dataToSend,
  };
}

export function deleteTournament(id: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/organizers/v1/tournaments/${id}`,
  };
}

export function approveTeam(
  teamId: number,
  remark?: string
): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/organizers/v1/teams/approve",
    data: { remark: remark ? remark : "" },
  };
}

export function bulkApproveTeams(teamIds: any): AxiosRequestConfig {
  // Input array containing strings
  const inputArray = teamIds;

  // Split the string, convert to numbers, and store in a new array
  const outputArray = inputArray[0].split(",").map(function (item: any) {
    return parseInt(item, 10); // Use parseFloat(item) for decimal numbers
  });

  return {
    method: "PATCH",
    url: `/organizers/v1/teams/approve`,
    data: { ids: outputArray },
  };
}

export function bulkRejectTeams(
  teamIds: number[],
  remark?: string
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/v1/organizer/bulk-approve`,
    data: { ids: teamIds, remark: remark ? remark : "" },
  };
}

export function rejectTeam(
  teamId: number,
  remark?: string
): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/organizers/v1/teams/${teamId}/reject`,
    data: { remark: remark ? remark : "" },
  };
}

export function removeTeam(
  teamId: number,
  remark?: string
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/organizers/v1/teams/${teamId}/remove`,
    data: { remark: remark ? remark : "" },
  };
}
