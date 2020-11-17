type FilterKeys<T extends object, P extends unknown> = {
  [K in keyof T]: T[K] extends P ? K : never;
}[keyof T];

type ReturnValue<T> = {
  [key: string]: T;
}

export function convertArrayToObjectByKey<T extends Record<string, any>>(
  items: T[], 
  key: FilterKeys<T, string>
): ReturnValue<T> {
  return items.reduce<ReturnValue<T>>((acc, item) => {
    const currentKey = item[key];
    return {
      ...acc,
      [currentKey]: item
    };
  }, {});
}