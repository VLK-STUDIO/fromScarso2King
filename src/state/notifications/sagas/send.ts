import { select, put, delay } from "redux-saga/effects";
import { nanoid } from "@reduxjs/toolkit";
import { getMessages } from "../selectors";
import { SendNotification } from "../types";
import { sendNotificationSync, removeNotification } from "../actions";
import { NotificationType } from "../types/general";

const getNotificationType = (actionType: string): NotificationType => {
  if (actionType.toLowerCase().includes("success")) {
    return NotificationType.SUCCESS;
  }
  return NotificationType.ERROR;
};

export function* sendNotificationSaga(action: SendNotification) {
  const messages = yield select(getMessages);
  const actionType = action.type;
  const message = messages[action?.type];
  if (message) {
    const id = nanoid();
    const type = getNotificationType(actionType);
    yield put(sendNotificationSync({ type, message, id }));
    yield delay(3000);
    return yield put(removeNotification({ id }));
  }
  return;
}
