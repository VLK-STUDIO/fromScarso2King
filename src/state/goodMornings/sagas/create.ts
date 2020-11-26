import { call, put } from "redux-saga/effects";
import { GoodMorning } from "../../../types";
import {
  createGoodMorningRequest,
  createGoodMorningSuccess,
  createGoodMorningFailure,
} from "../actions";
import { createGoodMorningApi } from "../api";
import { CreateGoodMorning } from "../types";

export function* createGoodMorningsSaga(action: CreateGoodMorning) {
  yield put(createGoodMorningRequest(action.payload));
  try {
    const goodMorning: GoodMorning = yield call(
      createGoodMorningApi,
      action.payload
    );
    yield put(createGoodMorningSuccess(goodMorning));
  } catch (e) {
    yield put(createGoodMorningFailure([e.message]));
  }
}
