import { createAction } from "@reduxjs/toolkit";
import {
  CreateGoodMorningType,
  CreateGoodMorningPayload,
  CreateGoodMorningFailurePayload,
  CreateGoodMorningSuccessPayload,
} from "../types";

export const createGoodMorning = createAction<CreateGoodMorningPayload>(
  CreateGoodMorningType.TRIGGER
);
export const createGoodMorningRequest = createAction<CreateGoodMorningPayload>(
  CreateGoodMorningType.REQUEST
);
export const createGoodMorningSuccess = createAction<CreateGoodMorningSuccessPayload>(
  CreateGoodMorningType.SUCCESS
);
export const createGoodMorningFailure = createAction<CreateGoodMorningFailurePayload>(
  CreateGoodMorningType.FAILURE
);
