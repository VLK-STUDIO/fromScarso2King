import { createAction } from "@reduxjs/toolkit";
import {
  FetchGoodMorningType,
  FetchGoodMorningsFailurePayload,
  FetchGoodMorningsSuccessPayload,
} from "../types";

export const fetchGoodMornings = createAction(FetchGoodMorningType.TRIGGER);
export const fetchGoodMorningsRequest = createAction(
  FetchGoodMorningType.REQUEST
);
export const fetchGoodMorningsSuccess = createAction<FetchGoodMorningsSuccessPayload>(
  FetchGoodMorningType.SUCCESS
);
export const fetchGoodMorningsFailure = createAction<FetchGoodMorningsFailurePayload>(
  FetchGoodMorningType.FAILURE
);
