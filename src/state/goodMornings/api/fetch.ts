import wretch from "wretch";
import { BASE_URL, GOOD_MORNINGS_BASE_URL } from "../../constants/urls";
import { FetchGoodMorningResponse } from "../types";

export async function fetchGoodMorningsApi(): Promise<FetchGoodMorningResponse> {
  return await wretch(`${BASE_URL}${GOOD_MORNINGS_BASE_URL}`).get().json();
}
