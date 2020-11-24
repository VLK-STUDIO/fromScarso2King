import { Action, PayloadAction } from "@reduxjs/toolkit";
import { GoodMorning } from "../../../types";

export enum FetchGoodMorningType {
  TRIGGER = "goodMorning/fetch",
  REQUEST = "goodMorning/fetch/request",
  SUCCESS = "goodMorning/fetch/success",
  FAILURE = "goodMorning/fetch/failure",
}

export type FetchGoodMorningResponse = GoodMorning[];

export type FetchGoodMorningsSuccessPayload = GoodMorning[];
export type FetchGoodMorningsFailurePayload = string[];

export type FetchGoodMorning = Action<FetchGoodMorningType.TRIGGER>;
export type FetchGoodMorningRequest = Action<FetchGoodMorningType.REQUEST>;
export type FetchGoodMorningSuccess = PayloadAction<
  FetchGoodMorningsSuccessPayload,
  FetchGoodMorningType.SUCCESS
>;
export type FetchGoodMorningsFailure = PayloadAction<
  FetchGoodMorningsFailurePayload,
  FetchGoodMorningType.TRIGGER
>;
