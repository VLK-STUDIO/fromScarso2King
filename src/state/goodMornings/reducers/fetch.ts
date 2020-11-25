import { DomainStatus } from "../../types";
import { formatListToState } from "../../utils";
import {
  FetchGoodMorningSuccess,
  FetchGoodMorningsFailure,
  GoodMorningState,
} from "../types";

export function fetchGoodMorningsRequestCase(
  state: GoodMorningState
): GoodMorningState {
  return {
    ...state,
    status: DomainStatus.LOADING,
  };
}

export function fetchGoodMorningsSuccessCase(
  state: GoodMorningState,
  action: FetchGoodMorningSuccess
): GoodMorningState {
  return {
    ...state,
    data: formatListToState(action.payload, "id"),
    status: DomainStatus.LOADED,
  };
}

export function fetchGoodMorningsFailureCase(
  state: GoodMorningState,
  action: FetchGoodMorningsFailure
): GoodMorningState {
  return {
    ...state,
    status: DomainStatus.ERROR,
    errors: action.payload,
  };
}
