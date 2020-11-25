import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../types";

export function getGoodMorningsState(state: AppState) {
  return state.goodMornings;
}

export const getGoodMorningsData = createSelector(
  getGoodMorningsState,
  (state) => {
    return state.data;
  }
);

export const getGoodMorningsObject = createSelector(
  getGoodMorningsData,
  (data) => {
    return data.byId;
  }
);

export const getGoodMorningsIds = createSelector(
  getGoodMorningsData,
  (data) => {
    return data.allIds;
  }
);
