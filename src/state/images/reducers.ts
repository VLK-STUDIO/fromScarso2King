import { createReducer } from "@reduxjs/toolkit";
import { DomainStatus } from "../types";
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "./actions";
import { ImagesState, FetchImagesSuccess, FetchImagesFailure } from "./types";

const initialState: ImagesState = {
  data: {},
  status: DomainStatus.IDLE,
  errors: [],
};

const fetchImagesRequestCase = (state: ImagesState) => ({
  ...state,
  status: DomainStatus.LOADING,
});

const fetchImagesSuccessCase = (
  state: ImagesState,
  { payload }: FetchImagesSuccess
) => ({
  ...state,
  data: payload,
  status: DomainStatus.LOADED,
  errors: [],
});

const fetchImagesFailureCase = (
  state: ImagesState,
  { payload }: FetchImagesFailure
) => {
  return {
    ...state,
    data: {},
    status: DomainStatus.ERROR,
    errors: payload,
  };
};

export const imagesReducer = createReducer<ImagesState>(
  initialState,
  (builder) => {
    builder
      .addCase(fetchImagesRequest, fetchImagesRequestCase)
      .addCase(fetchImagesSuccess, fetchImagesSuccessCase)
      .addCase(fetchImagesFailure, fetchImagesFailureCase);
  }
);
