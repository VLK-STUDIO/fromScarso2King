import { ImagesState } from './images/types';

export type DomainState<T> = {
  data: T;
  rollbackData?: T;
  status: string;
  errors: string[];
};

export type ReducerError = {
  code: string;
};

export type AppState = {
  images: ImagesState;
};