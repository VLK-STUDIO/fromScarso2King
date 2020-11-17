import { createAction } from '@reduxjs/toolkit';
import { FetchImagesSuccessPayload, FetchImagesFailurePayload } from './types';

export const fetchImages = createAction('images/fetch');
export const fetchImagesRequest = createAction('images/fetch/request');
export const fetchImagesSuccess = createAction<FetchImagesSuccessPayload>('images/fetch/success');
export const fetchImagesFailure = createAction<FetchImagesFailurePayload>('images/fetch/failure');