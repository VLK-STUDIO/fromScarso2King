import { FilterKeys } from "../../../types";
import { ListData } from "../../types";

const DEFAULT_PLACEHOLDER = "-1";

type Params<T extends object> = {
  data: ListData<T>;
  item: Partial<T>;
  placeholderKey?: string;
};

type RemoveParams<T extends object> = Omit<Params<T>, "item">;

type InsertParams<T extends object> = Omit<Params<T>, "placeholderKey"> & {
  item: T;
  key: FilterKeys<T, string>;
};

function formatListForCreation<T extends object>({
  data,
  item,
  placeholderKey = DEFAULT_PLACEHOLDER,
}: Params<T>): ListData<T> {
  const byId = { ...data.byId, [placeholderKey]: item };
  const allIds = [placeholderKey, ...data.allIds];

  return {
    byId,
    allIds,
  } as any;
}

function removePlaceholderFromList<T extends object>({
  data,
  placeholderKey = DEFAULT_PLACEHOLDER,
}: RemoveParams<T>): ListData<T> {
  const allIds = data.allIds.filter((key) => key !== placeholderKey);
  const byId = allIds.reduce(
    (acc, key) => ({
      ...acc,
      [key]: data.byId[key],
    }),
    {}
  );

  return {
    byId,
    allIds,
  };
}

function insertItemIntoList<T extends object>({
  data,
  item,
  key,
}: InsertParams<T>): ListData<T> {
  const id = (item[key] as unknown) as string;
  const allIds = Array.from(new Set([id, ...data.allIds]));
  const byId = { ...data.byId, [id]: item };

  return {
    allIds,
    byId,
  };
}

export function formatter<T extends object>(initialData: ListData<T>) {
  const callback = (data: ListData<T>) => ({
    forCreation: (params: Omit<Params<T>, "data">) => {
      const newData = formatListForCreation({ ...params, data });
      return formatter(newData);
    },
    removePlaceholder: (params?: Omit<RemoveParams<T>, "data">) => {
      const newData = removePlaceholderFromList({ ...(params || {}), data });
      return formatter(newData);
    },
    insert: (params: Omit<InsertParams<T>, "data">) => {
      const newData = insertItemIntoList({ ...params, data });
      return formatter(newData);
    },
    get: () => data,
  });

  return callback(initialData);
}
