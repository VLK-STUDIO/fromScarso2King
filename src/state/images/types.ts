import { DomainState } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";

export type ImageValue = {
  id: string;
  url: string;
  label: string;
  defaultTextColor: string;
};

export type ImageData = {
  [key: string]: ImageValue;
};

export type ImagesState = DomainState<ImageData>;
export type FetchImagesSuccessPayload = ImageData;
export type FetchImagesFailurePayload = string[];

export type FetchImagesApiResponse = ImageValue[];

export type FetchImagesSuccess = PayloadAction<FetchImagesSuccessPayload>;
export type FetchImagesFailure = PayloadAction<FetchImagesFailurePayload>;
