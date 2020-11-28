import { formatter } from "../../utils";
import { GoodMorningState } from "../types";
import {
  RemoveGoodMorningRequest,
  RemoveGoodMorningsFailure,
} from "../types/remove";

export function removeGoodMorningsRequestCase(
  state: GoodMorningState,
  action: RemoveGoodMorningRequest
): GoodMorningState {
  return {
    ...state,
    rollbackData: state.data,
    data: formatter(state.data)
      .remove({
        id: action.payload,
      })
      .get(),
  };
}

export function removeGoodMorningsSuccessCase(
  state: GoodMorningState
): GoodMorningState {
  return {
    ...state,
    rollbackData: undefined,
  };
}

export function removeGoodMorningsFailureCase(
  state: GoodMorningState,
  action: RemoveGoodMorningsFailure
): GoodMorningState {
  return {
    ...state,
    data: state.rollbackData || state.data,
    rollbackData: undefined,
    errors: action.payload,
  };
}
