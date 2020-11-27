import { formatter } from "../../utils";
import {
  UpdateGoodMorning,
  UpdateGoodMorningSuccess,
  UpdateGoodMorningsFailure,
  GoodMorningState,
} from "../types";

export function updateGoodMorningsRequestCase(
  state: GoodMorningState,
  action: UpdateGoodMorning
): GoodMorningState {
  return {
    ...state,
    rollbackData: state.data,
    data: formatter(state.data)
      .insert({
        item: action.payload,
        key: "id",
      })
      .get(),
  };
}

export function updateGoodMorningsSuccessCase(
  state: GoodMorningState,
  action: UpdateGoodMorningSuccess
): GoodMorningState {
  return {
    ...state,
    rollbackData: undefined,
    data: formatter(state.data)
      .insert({
        item: action.payload,
        key: "id",
      })
      .get(),
  };
}

export function updateGoodMorningsFailureCase(
  state: GoodMorningState,
  action: UpdateGoodMorningsFailure
): GoodMorningState {
  return {
    ...state,
    data: state.rollbackData || state.data,
    rollbackData: undefined,
    errors: action.payload,
  };
}
