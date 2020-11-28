import { PayloadAction, Action } from "@reduxjs/toolkit";
import { GoodMorningState } from "./general";

export enum SetCurrentGoodMorningType {
  SET = "goodMorning/setCurren/set",
  RESET = "goodMorning/setCurren/reset",
}

export type SetCurrentGoodMorningPayload = GoodMorningState["currentGoodMorning"];

export type SetCurrentGoodMorning = PayloadAction<
  SetCurrentGoodMorningPayload,
  SetCurrentGoodMorningType.SET
>;

export type ResetCurrentGoodMorning = Action<SetCurrentGoodMorningType.SET>;
