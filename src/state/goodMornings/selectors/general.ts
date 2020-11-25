import { createSelector } from "@reduxjs/toolkit";
import { AppState, DomainStatus } from "../../types";

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

export const getGoodMornings = createSelector(
  getGoodMorningsIds,
  getGoodMorningsObject,
  (allIds, byId) => {
    return allIds.map((id) => byId[id]);
  }
);

export const getGoodMorning = createSelector(
  getGoodMorningsObject,
  (_: AppState, id: string) => id,
  (byId, id) => {
    return byId[id];
  }
);

export const getGoodMorningsStatus = createSelector(
  getGoodMorningsState,
  (state) => {
    return state.status;
  }
);

export const getGoodMorningsAreIdle = createSelector(
  getGoodMorningsStatus,
  (status) => {
    return status === DomainStatus.IDLE;
  }
);

export const getGoodMorningsAreLoading = createSelector(
  getGoodMorningsStatus,
  (status) => {
    return status === DomainStatus.LOADING;
  }
);

export const getGoodMorningsAreLoaded = createSelector(
  getGoodMorningsStatus,
  (status) => {
    return status === DomainStatus.LOADED;
  }
);

export const getGoodMorningsAreFailed = createSelector(
  getGoodMorningsStatus,
  (status) => {
    return status === DomainStatus.ERROR;
  }
);

export const getGoodMorningsErrors = createSelector(
  getGoodMorningsState,
  (state) => {
    return state.errors;
  }
);
