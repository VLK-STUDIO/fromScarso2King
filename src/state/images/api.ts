import wretch from "wretch";
import { BASE_URL, IMAGES_BASE_URL } from "../constants/urls";
import { FetchImagesApiResponse } from "./types";

export const fetchImagesApi = async (): Promise<FetchImagesApiResponse> => {
  return await wretch(`${BASE_URL}${IMAGES_BASE_URL}`).get().json();
};
