import wretch from "wretch";
import { GoodMorning } from "../../../types";
import { BASE_URL, GOOD_MORNINGS_BASE_URL } from "../../constants/urls";

export async function removeGoodMorningApi(
  goodMorningId: GoodMorning["id"]
): Promise<undefined> {
  return await wretch(`${BASE_URL}${GOOD_MORNINGS_BASE_URL}/${goodMorningId}`)
    .delete()
    .json();
}
