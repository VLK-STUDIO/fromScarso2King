import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoodMorning } from "../../../types";
import {
  fetchGoodMornings as fetchGoodMorningsAction,
  createGoodMorning as createGoodMorningAction,
} from "../actions";
import {
  getGoodMornings,
  getGoodMorningsAreFailed,
  getGoodMorningsAreIdle,
  getGoodMorningsAreLoaded,
  getGoodMorningsAreLoading,
} from "../selectors";

export function useGoodMornings() {
  const dispatch = useDispatch();
  const goodMornings = useSelector(getGoodMornings);
  const isIdle = useSelector(getGoodMorningsAreIdle);
  const isFailed = useSelector(getGoodMorningsAreFailed);
  const isLoaded = useSelector(getGoodMorningsAreLoaded);
  const isLoading = useSelector(getGoodMorningsAreLoading);

  const fetchGoodMornings = useCallback(() => {
    dispatch(fetchGoodMorningsAction());
  }, [dispatch]);

  const createGoodMorning = useCallback(
    (goodMorning: Partial<GoodMorning>) => {
      dispatch(createGoodMorningAction(goodMorning));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isIdle) {
      fetchGoodMornings();
    }
  }, [fetchGoodMornings, isIdle]);

  return {
    goodMornings,
    isIdle,
    isFailed,
    isLoaded,
    isLoading,
    fetchGoodMornings,
    createGoodMorning,
  };
}
