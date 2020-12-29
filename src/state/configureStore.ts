import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { messages } from "../constants";
import { imagesReducer, imagesRootSaga } from "./images";
import { goodMorningsRootSaga, goodMorningsRootReducer } from "./goodMornings";
import {
  initNotifications,
  notificationRootSaga,
  notificationRootReducer,
} from "./notifications";

const reducer = combineReducers({
  images: imagesReducer,
  goodMornings: goodMorningsRootReducer,
  notification: notificationRootReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  const sagas = [imagesRootSaga, goodMorningsRootSaga, notificationRootSaga];
  yield all(sagas.map((saga) => fork(saga)));
}

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

store.dispatch(initNotifications(messages));

sagaMiddleware.run(rootSaga);
