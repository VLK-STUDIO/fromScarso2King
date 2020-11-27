import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../types";
import { getGoodMorningsObject } from "./general";

export const getGoodMorning = createSelector(
  getGoodMorningsObject,
  (_: AppState, id: string) => id,
  (byId, id) => {
    return byId[id] || {};
  }
);
