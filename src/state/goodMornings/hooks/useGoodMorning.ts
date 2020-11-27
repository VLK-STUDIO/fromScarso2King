import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoodMorning } from "../../../types";
import { AppState } from "../../types";
import {
  updateGoodMorning as updateGoodMorningAction,
  createGoodMorning as createGoodMorningAction,
} from "../actions";
import { getGoodMorning } from "../selectors";

export function useGoodMorning(id: string = "-1") {
  const dispatch = useDispatch();
  const goodMorning = useSelector((state: AppState) =>
    getGoodMorning(state, id)
  );

  const createGoodMorning = useCallback(
    (payload: Partial<GoodMorning>) => {
      dispatch(createGoodMorningAction(payload));
    },
    [dispatch]
  );

  const updateGoodMorning = useCallback(
    (payload: GoodMorning) => {
      dispatch(updateGoodMorningAction(payload));
    },
    [dispatch]
  );

  const setGoodMorning = useCallback(
    (payload: GoodMorning | Partial<GoodMorning>) => {
      if (payload.id) {
        return updateGoodMorning(payload as GoodMorning);
      }
      createGoodMorning(payload);
    },
    [createGoodMorning, updateGoodMorning]
  );

  return {
    goodMorning,
    setGoodMorning,
    createGoodMorning,
    updateGoodMorning,
  };
}
