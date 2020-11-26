import { PayloadAction } from "@reduxjs/toolkit";
import { GoodMorning } from "../../../types";

export enum CreateGoodMorningType {
  TRIGGER = "goodMorning/create",
  REQUEST = "goodMorning/create/request",
  SUCCESS = "goodMorning/create/success",
  FAILURE = "goodMorning/create/failure",
}

export type CreateGoodMorningResponse = GoodMorning;

export type CreateGoodMorningPayload = Partial<GoodMorning>;
export type CreateGoodMorningSuccessPayload = GoodMorning;
export type CreateGoodMorningFailurePayload = string[];

export type CreateGoodMorning = PayloadAction<
  CreateGoodMorningPayload,
  CreateGoodMorningType.TRIGGER
>;
export type CreateGoodMorningRequest = PayloadAction<
  CreateGoodMorningPayload,
  CreateGoodMorningType.REQUEST
>;
export type CreateGoodMorningSuccess = PayloadAction<
  CreateGoodMorningSuccessPayload,
  CreateGoodMorningType.SUCCESS
>;
export type CreateGoodMorningsFailure = PayloadAction<
  CreateGoodMorningFailurePayload,
  CreateGoodMorningType.TRIGGER
>;
