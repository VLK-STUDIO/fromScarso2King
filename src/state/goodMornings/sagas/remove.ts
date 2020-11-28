import { call, put } from "redux-saga/effects";
import {
  removeGoodMorningRequest,
  removeGoodMorningSuccess,
  removeGoodMorningFailure,
} from "../actions";
import { removeGoodMorningApi } from "../api";
import { RemoveGoodMorning } from "../types";

export function* removeGoodMorningsSaga(action: RemoveGoodMorning) {
  yield put(removeGoodMorningRequest(action.payload));
  try {
    yield call(removeGoodMorningApi, action.payload);
    yield put(removeGoodMorningSuccess(action.payload));
  } catch (e) {
    yield put(removeGoodMorningFailure([e.message]));
  }
}
