import { takeEvery } from "redux-saga/effects";
import { sendNotificationSaga } from './send';

export function* notificationRootSaga() {
  yield takeEvery('*', sendNotificationSaga);
}