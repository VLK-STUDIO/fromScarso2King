import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImage, getImagesList, getImagesStatus } from "./selectors";
import { fetchImages as fetchImagesAction } from "./actions";
import { AppState, DomainStatus } from "../types";

export function useImages() {
  const dispatch = useDispatch();
  const images = useSelector(getImagesList);
  const status = useSelector(getImagesStatus);

  const fetchImages = useCallback(() => {
    dispatch(fetchImagesAction());
  }, [dispatch]);

  useEffect(() => {
    if (status === DomainStatus.IDLE) {
      fetchImages();
    }
  }, [status, fetchImages]);

  return { images, fetchImages };
}

export function useImage(id: string) {
  const image = useSelector((state: AppState) => getImage(state, id));

  return image;
}
