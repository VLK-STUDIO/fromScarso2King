import { createAction } from "@reduxjs/toolkit";
import {
  UpdateGoodMorningType,
  UpdateGoodMorningPayload,
  UpdateGoodMorningFailurePayload,
  UpdateGoodMorningSuccessPayload,
} from "../types";

export const updateGoodMorning = createAction<UpdateGoodMorningPayload>(
  UpdateGoodMorningType.TRIGGER
);
export const updateGoodMorningRequest = createAction<UpdateGoodMorningPayload>(
  UpdateGoodMorningType.REQUEST
);
export const updateGoodMorningSuccess = createAction<UpdateGoodMorningSuccessPayload>(
  UpdateGoodMorningType.SUCCESS
);
export const updateGoodMorningFailure = createAction<UpdateGoodMorningFailurePayload>(
  UpdateGoodMorningType.FAILURE
);
