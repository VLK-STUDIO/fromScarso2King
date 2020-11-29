import wretch from "wretch";
import { nanoid } from "@reduxjs/toolkit";
import { GoodMorning } from "../../../types";
import { BASE_URL, GOOD_MORNINGS_BASE_URL } from "../../constants/urls";
import { CreateGoodMorningResponse } from "../types";

export async function createGoodMorningApi(
  goodMorning: Partial<GoodMorning>
): Promise<CreateGoodMorningResponse> {
  return await wretch(`${BASE_URL}${GOOD_MORNINGS_BASE_URL}`)
    .post({ ...goodMorning, id: nanoid() })
    .json();
}
