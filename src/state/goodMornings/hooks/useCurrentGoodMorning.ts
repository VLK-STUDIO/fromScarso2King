import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoodMorning } from "../../../types";
import {
  setCurrentGoodMorning as setCurrentGoodMorningAction,
  resetCurrentGoodMorning as resetCurrentGoodMorningAction,
} from "../actions";
import { getCurrentGoodMorningId } from "../selectors";
import { useGoodMorning } from "./useGoodMorning";
import { useGoodMornings } from "./useGoodMornings";

export function useCurrentGoodMorning() {
  const dispatch = useDispatch();
  const goodMorning = useSelector(getCurrentGoodMorningId);
  const { createGoodMorning } = useGoodMornings();
  const { updateGoodMorning } = useGoodMorning(goodMorning?.id);

  const isEdit = useMemo(() => goodMorning.id !== undefined, [goodMorning.id]);

  const submitGoodMorning = useCallback(() => {
    if (goodMorning.id) {
      updateGoodMorning(goodMorning as GoodMorning);
      return;
    }
    createGoodMorning(goodMorning);
  }, [goodMorning, createGoodMorning, updateGoodMorning]);

  const setCurrentGoodMorning = useCallback(
    (goodMorning?: Partial<GoodMorning>) => {
      dispatch(setCurrentGoodMorningAction(goodMorning));
    },
    [dispatch]
  );

  const resetCurrentGoodMorning = useCallback(() => {
    dispatch(resetCurrentGoodMorningAction());
  }, [dispatch]);

  return {
    isEdit,
    goodMorning,
    setGoodMorning: setCurrentGoodMorning,
    submitGoodMorning,
    resetCurrentGoodMorning,
  };
}
