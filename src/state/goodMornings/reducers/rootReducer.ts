import { createReducer, getType } from "@reduxjs/toolkit";
import { DomainStatus } from "../../types";
import {
  fetchGoodMorningsRequest,
  fetchGoodMorningsSuccess,
  fetchGoodMorningsFailure,
} from "../actions";
import { GoodMorningState } from "../types";
import * as fetchCases from "./fetch";

const initialState: GoodMorningState = {
  data: {
    byId: {},
    allIds: [],
  },
  status: DomainStatus.IDLE,
};

export const goodMorningsRootReducer = createReducer<GoodMorningState>(
  initialState,
  (builder) => {
    builder
      .addCase(
        fetchGoodMorningsRequest,
        fetchCases.fetchGoodMorningsRequestCase
      )
      .addCase(
        getType(fetchGoodMorningsSuccess),
        fetchCases.fetchGoodMorningsSuccessCase
      )
      .addCase(
        getType(fetchGoodMorningsFailure),
        fetchCases.fetchGoodMorningsFailureCase
      );
  }
);
