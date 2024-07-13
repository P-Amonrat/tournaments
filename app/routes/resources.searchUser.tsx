import { type LoaderFunction, json } from "@remix-run/node";
import * as APIServer from "~/api";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url) as any;
  const searchParams = Object.fromEntries(url.searchParams);
  let searchUserResult: any;
  let loadMore = false as boolean;

  try {
    const searchUserRes = await APIServer.clientFromSession().request(
      APIServer.getSearchUser(searchParams)
    );

    if (searchUserRes.data) {
      searchUserResult = searchUserRes.data;
    }

    // console.log("searchUserResult", searchUserResult);
  } catch (error: any) {
    console.error("searchUserResult Error", error.response.data);
  }

  if (searchParams.hasOwnProperty("offset")) {
    loadMore = true;
    console.log("The object contains the 'offset' property.");
  } else {
    loadMore = false;
    console.log("The object does not contain the 'offset' property.");
  }

  console.log("searchUserResult", searchUserResult);

  return json({ searchParams, searchUserResult, loadMore });
};
