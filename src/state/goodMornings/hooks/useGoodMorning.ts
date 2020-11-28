import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoodMorning } from "../../../types";
import { AppState } from "../../types";
import {
  updateGoodMorning as updateGoodMorningAction,
  removeGoodMorning as removeGoodMorningAction,
} from "../actions";
import { getGoodMorning } from "../selectors";

export function useGoodMorning(id: string = "") {
  const dispatch = useDispatch();
  const goodMorning = useSelector((state: AppState) =>
    getGoodMorning(state, id)
  );

  const updateGoodMorning = useCallback(
    (payload: GoodMorning) => {
      dispatch(updateGoodMorningAction(payload));
    },
    [dispatch]
  );

  const removeGoodMorning = useCallback(
    (payload: GoodMorning["id"]) => {
      dispatch(removeGoodMorningAction(payload));
    },
    [dispatch]
  );

  return {
    goodMorning,
    updateGoodMorning,
    removeGoodMorning,
  };
}
