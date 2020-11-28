import { createAction } from "@reduxjs/toolkit";
import {
  SetCurrentGoodMorningType,
  SetCurrentGoodMorningPayload,
} from "../types";

export const setCurrentGoodMorning = createAction<SetCurrentGoodMorningPayload>(
  SetCurrentGoodMorningType.SET
);

export const resetCurrentGoodMorning = createAction(
  SetCurrentGoodMorningType.RESET
);
