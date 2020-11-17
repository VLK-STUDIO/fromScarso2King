import { takeLatest, put, call, select } from 'redux-saga/effects'
import { DEFAULT_ERROR } from '../constants';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure, fetchImages } from './actions';
import { getImagesAreIdle } from './selectors';
import { fetchImagesApi } from './api';
import { FetchImagesApiResponse } from './types';
import { convertArrayToObjectByKey } from '../../utils'

export function* fetchImagesSaga() {
  const imagesAreIdle = yield select(getImagesAreIdle);
  if (!imagesAreIdle) {
    return;
  }
  yield put(fetchImagesRequest());
  try {
    const response: FetchImagesApiResponse = yield call(fetchImagesApi);
    return yield put(fetchImagesSuccess(convertArrayToObjectByKey(response, 'id')));
  } catch(e){
    return yield put(fetchImagesFailure([DEFAULT_ERROR]));
  }
};

export function* imagesRootSaga() {
  yield takeLatest(fetchImages, fetchImagesSaga);
};