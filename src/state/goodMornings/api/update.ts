import wretch from "wretch";
import { GoodMorning } from "../../../types";
import { BASE_URL, GOOD_MORNINGS_BASE_URL } from "../../constants/urls";
import { UpdateGoodMorningResponse } from "../types";

export async function updateGoodMorningApi(
  goodMorning: Partial<GoodMorning>
): Promise<UpdateGoodMorningResponse> {
  return await wretch(`${BASE_URL}${GOOD_MORNINGS_BASE_URL}/${goodMorning.id}`)
    .put(goodMorning)
    .json();
}
