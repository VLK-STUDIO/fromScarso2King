import { createSelector } from "@reduxjs/toolkit";
import { DomainStatus } from "../../types";
import {
  getGoodMorningsState,
  getGoodMorningsIds,
  getGoodMorningsObject,
} from "./general";

export const getGoodMornings = createSelector(
  getGoodMorningsIds,
  getGoodMorningsObject,
  (allIds, byId) => {
    return allIds.map((id) => byId[id]);
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
