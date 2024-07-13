import type { AxiosRequestConfig } from "axios";

export function claimReward(rarity: string): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/frames/claim`,
    data: { rarity },
  };
}
