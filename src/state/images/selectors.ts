import { createSelector } from '@reduxjs/toolkit';
import { ImagesState, ImageData, ImageValue } from './types';
import { AppState } from '../types';

function getImagesState(state: AppState): ImagesState {
  return state.images;
}

export const getImagesData = createSelector(getImagesState, (imagesState): ImageData => {
  return imagesState.data;
});

export const getImagesList = createSelector(getImagesData, (imagesData: ImageData): ImageValue[] => {
  return Object.values(imagesData);
});

export const getImage = createSelector(
  getImagesData, 
  (_: AppState, id: string) => id, 
  (imagesData: ImageData, id): ImageValue => {
  return imagesData[id];
});

export const getImagesStatus = createSelector(getImagesState, (imagesState): string => {
  return imagesState.status;
});

export const getImagesAreLoading= createSelector(getImagesStatus, (status: string): boolean => {
  return status === 'loading';
});

export const getImagesAreIdle = createSelector(getImagesStatus, (status: string): boolean => {
  return status === 'idle';
});