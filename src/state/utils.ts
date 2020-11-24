import { FilterKeys } from "../types";
import { convertArrayToObjectByKey } from "../utils";
import { ListData } from "./types";

export function formatListToState<T extends object>(
  list: T[],
  key: FilterKeys<T, string>
): ListData<T> {
  const byId = convertArrayToObjectByKey(list, key);
  const allIds = list.map((item) => item[key]);

  return {
    byId,
    allIds,
  } as any;
}
