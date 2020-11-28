import { createReducer, getType } from "@reduxjs/toolkit";
import { DomainStatus } from "../../types";
import { GoodMorningState } from "../types";
import * as fetchActions from "../actions/fetch";
import * as createActions from "../actions/create";
import * as updateActions from "../actions/update";
import * as removeActions from "../actions/remove";
import * as setCurrentActions from "../actions/setCurrent";
import * as fetchCases from "./fetch";
import * as createCases from "./create";
import * as updateCases from "./update";
import * as removeCases from "./remove";
import * as setCurrentCases from "./setCurrent";

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
      )
      .addCase(
        getType(updateActions.updateGoodMorningRequest),
        updateCases.updateGoodMorningsRequestCase
      )
      .addCase(
        getType(updateActions.updateGoodMorningSuccess),
        updateCases.updateGoodMorningsSuccessCase
      )
      .addCase(
        getType(updateActions.updateGoodMorningFailure),
        updateCases.updateGoodMorningsFailureCase
      )
      .addCase(
        getType(removeActions.removeGoodMorningRequest),
        removeCases.removeGoodMorningsRequestCase
      )
      .addCase(
        getType(removeActions.removeGoodMorningSuccess),
        removeCases.removeGoodMorningsSuccessCase
      )
      .addCase(
        getType(removeActions.removeGoodMorningFailure),
        removeCases.removeGoodMorningsFailureCase
      )
      .addCase(
        getType(setCurrentActions.setCurrentGoodMorning),
        setCurrentCases.setCurrentGoodMorningCase
      )
      .addCase(
        getType(setCurrentActions.resetCurrentGoodMorning),
        setCurrentCases.resetCurrentGoodMorningCase
      );
  }
);
