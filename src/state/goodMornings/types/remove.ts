import { PayloadAction } from "@reduxjs/toolkit";
import { GoodMorning } from "../../../types";

export enum RemoveGoodMorningType {
  TRIGGER = "goodMorning/remove",
  REQUEST = "goodMorning/remove/request",
  SUCCESS = "goodMorning/remove/success",
  FAILURE = "goodMorning/remove/failure",
}

export type RemoveGoodMorningPayload = GoodMorning["id"];
export type RemoveGoodMorningSuccessPayload = GoodMorning["id"];
export type RemoveGoodMorningFailurePayload = string[];

export type RemoveGoodMorning = PayloadAction<
  RemoveGoodMorningPayload,
  RemoveGoodMorningType.TRIGGER
>;
export type RemoveGoodMorningRequest = PayloadAction<
  RemoveGoodMorningPayload,
  RemoveGoodMorningType.REQUEST
>;
export type RemoveGoodMorningSuccess = PayloadAction<
  RemoveGoodMorningSuccessPayload,
  RemoveGoodMorningType.SUCCESS
>;
export type RemoveGoodMorningsFailure = PayloadAction<
  RemoveGoodMorningFailurePayload,
  RemoveGoodMorningType.TRIGGER
>;
