import { createReducer, getType } from "@reduxjs/toolkit";
import { DomainStatus } from "../../types";
import * as fetchActions from "../actions/fetch";
import * as createActions from "../actions/create";
import { GoodMorningState } from "../types";
import * as fetchCases from "./fetch";
import * as createCases from "./create";

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
        fetchActions.fetchGoodMorningsRequest,
        fetchCases.fetchGoodMorningsRequestCase
      )
      .addCase(
        getType(fetchActions.fetchGoodMorningsSuccess),
        fetchCases.fetchGoodMorningsSuccessCase
      )
      .addCase(
        getType(fetchActions.fetchGoodMorningsFailure),
        fetchCases.fetchGoodMorningsFailureCase
      )
      .addCase(
        getType(createActions.createGoodMorningRequest),
        createCases.createGoodMorningsRequestCase
      )
      .addCase(
        getType(createActions.createGoodMorningSuccess),
        createCases.createGoodMorningsSuccessCase
      )
      .addCase(
        getType(createActions.createGoodMorningFailure),
        createCases.createGoodMorningsFailureCase
      );
  }
);
