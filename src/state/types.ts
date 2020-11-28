import { GoodMorningState } from "./goodMornings";
import { ImagesState } from "./images/types";
import { NotificationState } from './notifications/types/general';

export enum DomainStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export type ListData<T> = {
  byId: Record<string, T>;
  allIds: string[];
};

export type DomainState<T> = {
  data: T;
  rollbackData?: T;
  status: DomainStatus;
  errors?: string[];
};

export type ReducerError = {
  code: string;
};

export type AppState = {
  images: ImagesState;
  goodMornings: GoodMorningState;
  notification: NotificationState;
};
