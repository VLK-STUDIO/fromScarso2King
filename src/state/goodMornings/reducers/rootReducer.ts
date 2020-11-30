import { createReducer, getType } from "@reduxjs/toolkit";
import { DomainStatus } from "../../types";
import { GoodMorningState } from "../types";
import * as actions from "../actions";
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
        actions.fetchGoodMorningsRequest,
        fetchCases.fetchGoodMorningsRequestCase
      )
      .addCase(
        getType(actions.fetchGoodMorningsSuccess),
        fetchCases.fetchGoodMorningsSuccessCase
      )
      .addCase(
        getType(actions.fetchGoodMorningsFailure),
        fetchCases.fetchGoodMorningsFailureCase
      )
      .addCase(
        getType(actions.createGoodMorningRequest),
        createCases.createGoodMorningsRequestCase
      )
      .addCase(
        getType(actions.createGoodMorningSuccess),
        createCases.createGoodMorningsSuccessCase
      )
      .addCase(
        getType(actions.createGoodMorningFailure),
        createCases.createGoodMorningsFailureCase
      )
      .addCase(
        getType(actions.updateGoodMorningRequest),
        updateCases.updateGoodMorningsRequestCase
      )
      .addCase(
        getType(actions.updateGoodMorningSuccess),
        updateCases.updateGoodMorningsSuccessCase
      )
      .addCase(
        getType(actions.updateGoodMorningFailure),
        updateCases.updateGoodMorningsFailureCase
      )
      .addCase(
        getType(actions.removeGoodMorningRequest),
        removeCases.removeGoodMorningsRequestCase
      )
      .addCase(
        getType(actions.removeGoodMorningSuccess),
        removeCases.removeGoodMorningsSuccessCase
      )
      .addCase(
        getType(actions.removeGoodMorningFailure),
        removeCases.removeGoodMorningsFailureCase
      )
      .addCase(
        getType(actions.setCurrentGoodMorning),
        setCurrentCases.setCurrentGoodMorningCase
      )
      .addCase(
        getType(actions.resetCurrentGoodMorning),
        setCurrentCases.resetCurrentGoodMorningCase
      );
  }
);
