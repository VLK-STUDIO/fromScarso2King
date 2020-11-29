import { GoodMorningState } from "../types";
import { SetCurrentGoodMorning } from "../types";

export function setCurrentGoodMorningCase(
  state: GoodMorningState,
  action: SetCurrentGoodMorning
): GoodMorningState {
  return {
    ...state,
    currentGoodMorning: action.payload,
  };
}

export function resetCurrentGoodMorningCase(
  state: GoodMorningState
): GoodMorningState {
  return {
    ...state,
    currentGoodMorning: undefined,
  };
}
