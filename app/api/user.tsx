import type { AxiosRequestConfig } from "axios";

export function me(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/api/v1/users/me",
  };
}

export function getMyGameProfiles(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/api/v1/users/games",
  };
}

export function getMyAsset(): AxiosRequestConfig {
  return {
    method: "GET",
    url: "/api/v1/frames/me",
  };
}

export function refreshToken(refreshToken: string): AxiosRequestConfig {
  const headers = { Authorization: `Bearer ${refreshToken}` };
  return {
    method: "POST",
    url: "/api/v1/auth/refresh-token",
    headers,
  };
}

export function submitKyc(data: any): AxiosRequestConfig {
  const submitData = JSON.parse(data);
  return {
    method: "POST",
    url: `/api/v1/auth/verify-id-card`,
    data: submitData,
  };
}

export function updateProfile(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/profile`,
    data,
  };
}

export function updateFrame(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/frames/update-user-frame`,
    data: { frameId: data },
  };
}

export function noFrame(): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/frames/remove-user-frame`,
  };
}

export function updateGameProfile(data: any): AxiosRequestConfig {
  const sanitizedString = data.gameProfiles.replace(/'/g, "");
  const gameProfilesArray = JSON.parse(sanitizedString);

  return {
    method: "PUT",
    url: `/api/v1/users/games`,
    data: { gameProfiles: gameProfilesArray },
  };
}

export function updateSignature(data: any): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/api/v1/users/signature`,
    data,
  };
}

export function getMyTeamFromTournamentId(
  tournamentId: number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/tournaments/${tournamentId}/my-team`,
  };
}

export function createTeam(tournamentId: any, data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/tournaments/${tournamentId}/teams`,
    data: JSON.parse(data),
  };
}

export function currentUserLike(uuid: string | undefined): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/${uuid}/is-liked`,
  };
}

export function allLikeByUser(
  uuid: string | undefined,
  params?: any
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/${uuid}/liked-by`,
    params,
  };
}

export function likeToggleUser(uuid: string | undefined): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/${uuid}/toggle-like`,
  };
}

export function createTeamMember(
  teamUuid: string | undefined,
  data: any
): AxiosRequestConfig {
  const submitData = JSON.parse(data);
  return {
    method: "POST",
    url: `/api/v1/teams/${teamUuid}/join`,
    data: submitData,
  };
}

export function updateTeamMember(
  teamMemberUuid: any,
  data: any
): AxiosRequestConfig {
  const submitData = JSON.parse(data);
  return {
    method: "PUT",
    url: `/api/v1/teams/${teamMemberUuid}/members`,
    data: submitData,
  };
}

export function updateTeam(tournamentId: any, data: any): AxiosRequestConfig {
  const submitData = JSON.parse(data);
  return {
    method: "PUT",
    url: `/api/v1/tournaments/${tournamentId}/teams`,
    data: submitData,
  };
}

export function deleteTeamMember(
  teamUuid: string,
  userUuid: string
): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/teams/${teamUuid}/members/${userUuid}`,
  };
}

export function leaveTeam(teamUuid: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/teams/${teamUuid}/leave`,
  };
}

export function submitTeam(teamUuid: string): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/teams/${teamUuid}`,
  };
}

export function deleteTeam(teamUuid: string): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/teams/${teamUuid}`,
  };
}

export function updateDisplayImage(data: any): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/api/v1/users/display-image`,
    data: { displayImage: data },
  };
}

export function updateCoverImage(data: any): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/api/v1/users/cover-image`,
    data: { coverImage: data },
  };
}

/////////////
// Pending //
/////////////
export function createWebboard(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/posts`,
    data,
  };
}

export function reportWebboard(
  id: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/posts/${id}/report`,
    data,
  };
}

export function reportComment(
  id: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/comments/${id}/report`,
    data,
  };
}

export function deleteWebboard(id: string | number): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/posts/${id}`,
  };
}

export function deleteComment(id: string | number): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/comments/${id}`,
  };
}

export function reactionWebboard(
  id: string | number,
  reactionId: string | number
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/posts/${id}/reactions/${reactionId}`,
  };
}

export function reactionComment(
  id: string | number,
  reactionId: string | number
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/comments/${id}/reactions/${reactionId}`,
  };
}

export function submitPoll(
  id: string | number,
  choiceId: string | number
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/polls/${id}/options/${choiceId}`,
  };
}

export function getMyPollAnswer(id: string | number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/polls/${id}/answer`,
  };
}

export function createComment(
  postId: string | number,
  comment: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/posts/${postId}/comments`,
    data: comment,
  };
}

export function getComment(id: string | number): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/comments/${id}`,
  };
}

export function updateComment(
  commentId: string | number,
  comment: any
): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/comments/${commentId}`,
    data: comment,
  };
}

export function updateWebboard(
  id: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/posts/${id}`,
    data,
  };
}

export function getMyActiveParties(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `api/v1/party-matchings/self`,
    params,
  };
}

export function getMyPartyRequests(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/v1/party-requests/my`,
    params,
  };
}

export function createParty(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings`,
    data,
  };
}

export function boostParty(id: string | number): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${id}/boost`,
  };
}

export function updateParty(
  id: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/api/v1/party-matchings/${id}`,
    data,
  };
}

export function leaveParty(id: string | number): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${id}/leave`,
  };
}

export function createPartyMember(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/lock-slot`,
    data,
  };
}

export function deletePartyMember(
  partyId: string | number,
  data: { memberId: string | number }
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/kick`,
    data,
  };
}

export function updatePartyMember(
  id: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${id}/change-in-game-name`,
    data,
  };
}

export function getPartyRequests(
  id: string | number,
  gameId: string | number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/party-matchings/${id}/requesters?game=${gameId}`,
  };
}

export function getPartyChats(
  partyId: string | number,
  gameId: string | number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/party-matchings/${partyId}/chats?game=${gameId}`,
  };
}

export function sendMessageToPartyChat(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/chats`,
    data,
  };
}

export function getPartyRequest(
  id: string | number,
  gameId: string | number
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/party-matchings/${id}/my-request?game=${gameId}`,
  };
}

export function approvePartyRequest(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/accept`,
    data,
  };
}

export function rejectPartyRequest(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/reject`,
    data,
  };
}

export function deletePartyRequest(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/cancel-request`,
    data,
  };
}

export function createPartyRequest(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/request`,
    data,
  };
}

export function joinParty(
  partyId: string | number,
  data: any
): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/party-matchings/${partyId}/join`,
    data,
  };
}

export function acceptBuySellAgreement(): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/accept-buy-sell-agreement`,
  };
}

export function getNotifications(params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/notifications`,
    params,
  };
}

export function getUnreadNotificationsCount(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/notifications/unread`,
  };
}

export function readAllNotifications(): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/notifications/read-all`,
  };
}

export function getMyWebboards(uuid: string, params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/${uuid}/posts`,
    params,
  };
}

export function getMyComments(uuid: string, params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/${uuid}/comments`,
    params,
  };
}

export function submitFeedback(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/feedback`,
    data: data,
  };
}

export function getExperiencesTitle(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/experiences`,
  };
}

export function getExperiences(
  params: any,
  firstGameParam: any
): AxiosRequestConfig {
  params = Object.keys(params).length !== 0 ? params : firstGameParam;

  return {
    method: "GET",
    url: `/api/v1/users/experiences/titles`,
    params,
  };
}

export function createExpereinceTitle(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/experiences/titles`,
    data,
  };
}

export function createExpereince(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/experiences`,
    data,
  };
}

export function editExperienceTitle(id: number, data: any): AxiosRequestConfig {
  return {
    method: "PATCH",
    url: `/api/v1/users/experiences/titles/${id}`,
    data,
  };
}

export function editExperience(id: number, data: any): AxiosRequestConfig {
  const { rankingGameId, ...rest } = data;

  return {
    method: "PATCH",
    url: `/api/v1/users/experiences/${id}`,
    data: rest,
  };
}

export function deleteExperience(id: any): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/users/experiences/${id}`,
  };
}

export function deleteExperienceTitle(id: any): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/users/experiences/titles/${id}`,
  };
}

export function getAlbum(uuid: string, params?: any): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/albums?userUuid=${uuid}&take=1000`,
  };
}

export function createAlbum(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/albums`,
    data,
  };
}

export function editAlbum(id: number, data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/albums/${id}`,
    data,
  };
}

export function deleteAlbum(id: any): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/albums/${id}`,
  };
}

export function deletePhotoAlbum(
  albumId: any,
  photoId: any
): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/albums/${albumId}/photos/${photoId}`,
  };
}

export function getSingleAlbum(id: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/albums/${id}`,
  };
}

export function getPhotosSingleAlbum(
  id: string,
  params?: any
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/albums/${id}/photos`,
    params,
  };
}

export function addAlbumPhotos(id: string, data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/albums/${id}/photos`,
    data,
  };
}

export function getPersonalDetails(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/personal-details`,
  };
}

export function createPersonalDetails(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/personal-details`,
    data,
  };
}

export function updatePersonalDetails(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/personal-details`,
    data,
  };
}

export function getUserGameLists(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/ranking-games/games`,
  };
}

export function getUserGameInfo(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/ranking-games`,
  };
}

export function createUserInGame(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/ranking-games`,
    data,
  };
}

export function editUserInGame(id: number, data: any): AxiosRequestConfig {
  const { experienceTitleId, ...rest } = data;

  return {
    method: "PUT",
    url: `/api/v1/users/ranking-games/${id}`,
    data: rest,
  };
}

export function deleteUserInGame(id: any): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/users/ranking-games/${id}`,
  };
}

export function getAchievement(): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/users/achievements`,
  };
}

export function createAchievement(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/users/achievements`,
    data,
  };
}

export function editAchievementTitle(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/achievements/titles`,
    data,
  };
}

export function editAchievement(id: number, data: any): AxiosRequestConfig {
  const { type, ...rest } = data;

  return {
    method: "PUT",
    url: `/api/v1/users/achievements/${id}`,
    data: rest,
  };
}

export function deleteAchievement(id: any): AxiosRequestConfig {
  return {
    method: "DELETE",
    url: `/api/v1/users/achievements/${id}`,
  };
}

export function sortingAlbums(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/albums/sort`,
    data,
  };
}

export function sortingMyGames(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/ranking-games/sort`,
    data,
  };
}

export function sortingMyExperienceTitle(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/experiences/titles/sort`,
    data,
  };
}

export function sortingMyAcheivementTitle(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/achievements/titles/sort`,
    data,
  };
}

export function sortingMyAcheivement(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/achievements/sort`,
    data,
  };
}

export function sortingProfile(data: any): AxiosRequestConfig {
  return {
    method: "PUT",
    url: `/api/v1/users/profile/sort`,
    data,
  };
}
