import {DomainState} from '../types';
import { fetchImagesSuccess, fetchImagesFailure } from './actions';

export type ImageValue = {
  id: string;
  url: string;
  label: string;
  defaultTextColor: string;
}

export type ImageData = {
  [key: string]: ImageValue;
};


export type ImagesState = DomainState<ImageData>;
export type FetchImagesSuccessPayload = ImageData; 
export type FetchImagesFailurePayload = string[];

export type FetchImagesApiResponse = ImageValue[];

export type FetchImagesSuccess = ReturnType<typeof fetchImagesSuccess>;
export type FetchImagesFailure = ReturnType<typeof fetchImagesFailure>;