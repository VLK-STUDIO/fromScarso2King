import { createAction } from "@reduxjs/toolkit";
import {
  RemoveGoodMorningType,
  RemoveGoodMorningPayload,
  RemoveGoodMorningFailurePayload,
  RemoveGoodMorningSuccessPayload,
} from "../types";

export const removeGoodMorning = createAction<RemoveGoodMorningPayload>(
  RemoveGoodMorningType.TRIGGER
);
export const removeGoodMorningRequest = createAction<RemoveGoodMorningPayload>(
  RemoveGoodMorningType.REQUEST
);
export const removeGoodMorningSuccess = createAction<RemoveGoodMorningSuccessPayload>(
  RemoveGoodMorningType.SUCCESS
);
export const removeGoodMorningFailure = createAction<RemoveGoodMorningFailurePayload>(
  RemoveGoodMorningType.FAILURE
);
