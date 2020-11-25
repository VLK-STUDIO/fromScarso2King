import { FilterKeys } from "../types";

export function convertArrayToObjectByKey<T extends Record<string, any>>(
  items: T[],
  key: FilterKeys<T, string>
): Record<string, T> {
  return items.reduce((acc, item) => {
    const currentKey = item[key];
    return {
      ...acc,
      [currentKey]: item,
    };
  }, {});
}
