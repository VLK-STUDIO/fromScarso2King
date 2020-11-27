import { PayloadAction } from "@reduxjs/toolkit";
import { GoodMorning } from "../../../types";

export enum UpdateGoodMorningType {
  TRIGGER = "goodMorning/update",
  REQUEST = "goodMorning/update/request",
  SUCCESS = "goodMorning/update/success",
  FAILURE = "goodMorning/update/failure",
}

export type UpdateGoodMorningResponse = GoodMorning;

export type UpdateGoodMorningPayload = GoodMorning;
export type UpdateGoodMorningSuccessPayload = GoodMorning;
export type UpdateGoodMorningFailurePayload = string[];

export type UpdateGoodMorning = PayloadAction<
  UpdateGoodMorningPayload,
  UpdateGoodMorningType.TRIGGER
>;
export type UpdateGoodMorningRequest = PayloadAction<
  UpdateGoodMorningPayload,
  UpdateGoodMorningType.REQUEST
>;
export type UpdateGoodMorningSuccess = PayloadAction<
  UpdateGoodMorningSuccessPayload,
  UpdateGoodMorningType.SUCCESS
>;
export type UpdateGoodMorningsFailure = PayloadAction<
  UpdateGoodMorningFailurePayload,
  UpdateGoodMorningType.TRIGGER
>;
