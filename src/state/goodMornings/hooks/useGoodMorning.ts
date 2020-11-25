import { useSelector } from "react-redux";
import { AppState } from "../../types";
import { getGoodMorning } from "../selectors";

export function useGoodMorning(id: string) {
  const goodMorning = useSelector((state: AppState) =>
    getGoodMorning(state, id)
  );

  return {
    goodMorning,
  };
}
