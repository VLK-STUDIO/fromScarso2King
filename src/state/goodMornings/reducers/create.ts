import { formatter } from "../../utils";
import {
  CreateGoodMorning,
  CreateGoodMorningSuccess,
  CreateGoodMorningsFailure,
  GoodMorningState,
} from "../types";

export function createGoodMorningsRequestCase(
  state: GoodMorningState,
  action: CreateGoodMorning
): GoodMorningState {
  return {
    ...state,
    rollbackData: state.data,
    data: formatter(state.data)
      .forCreation({
        item: action.payload,
      })
      .get(),
  };
}

export function createGoodMorningsSuccessCase(
  state: GoodMorningState,
  action: CreateGoodMorningSuccess
): GoodMorningState {
  return {
    ...state,
    rollbackData: undefined,
    data: formatter(state.data)
      .removePlaceholder()
      .insert({
        item: action.payload,
        key: "id",
      })
      .get(),
  };
}

export function createGoodMorningsFailureCase(
  state: GoodMorningState,
  action: CreateGoodMorningsFailure
): GoodMorningState {
  return {
    ...state,
    data: state.rollbackData || state.data,
    rollbackData: undefined,
    errors: action.payload,
  };
}
