import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { imagesReducer } from "./images/reducers";
import { imagesRootSaga } from "./images";
import { goodMorningsRootSaga, goodMorningsRootReducer } from "./goodMornings";
import { notificationRootSaga } from './notifications';
import { notificationRootReducer } from './notifications/reducers/rootReducer';
import { initNotifications } from './notifications/actions/init';
import { messages } from "../constants/messages";

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

store.dispatch(initNotifications(messages))

sagaMiddleware.run(rootSaga);
