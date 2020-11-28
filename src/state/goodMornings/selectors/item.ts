import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../types";
import { GoodMorningState } from "../types";
import { getGoodMorningsObject, getGoodMorningsState } from "./general";

export const getGoodMorning = createSelector(
  getGoodMorningsObject,
  (_: AppState, id: string) => id,
  (byId, id) => {
    return byId[id] || {};
  }
);

export const getCurrentGoodMorningId = createSelector(
  getGoodMorningsState,
  ({ currentGoodMorning }: GoodMorningState) => {
    return currentGoodMorning || {};
  }
);
