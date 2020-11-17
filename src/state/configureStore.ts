import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { imagesReducer } from './images/reducers'
import { imagesRootSaga } from './images'

const reducer = combineReducers({
  images: imagesReducer,
})

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  const sagas = [imagesRootSaga];
  yield all(sagas.map((saga) => fork(saga)))
};

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
})

sagaMiddleware.run(rootSaga);