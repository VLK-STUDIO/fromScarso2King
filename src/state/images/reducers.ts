import { createReducer } from '@reduxjs/toolkit';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from './actions';
import { ImagesState, FetchImagesSuccess, FetchImagesFailure } from './types';

const initialState: ImagesState = {
  data: {},
  status: 'idle',
  errors: [],
};

const fetchImagesRequestCase = (state: ImagesState) => ({
    ...state,
    status: 'loading',
  });

const fetchImagesSuccessCase = (state: ImagesState, { payload }: FetchImagesSuccess) => ({
  ...state,
  data: payload,
  status: 'loaded',
  errors: [],
})

const fetchImagesFailureCase = (state: ImagesState, { payload }: FetchImagesFailure) => {
  return {
    ...state,
    data: {},
    status: 'failed',
    errors: payload,
  }
}

export const imagesReducer = createReducer<ImagesState>(initialState, builder => {
  builder
    .addCase(fetchImagesRequest, fetchImagesRequestCase)
    .addCase(fetchImagesSuccess, fetchImagesSuccessCase)
    .addCase(fetchImagesFailure, fetchImagesFailureCase)
});