import type { Session } from "@remix-run/node";
import type { Axios } from "axios";

export function configAxiosAuthorization(axios: Axios, session: Session) {
  const accessToken = session.get("accessToken");

  if (accessToken && accessToken !== "") {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}
