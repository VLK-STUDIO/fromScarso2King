import { call, put } from "redux-saga/effects";
import { GoodMorning } from "../../../types";
import {
  updateGoodMorningRequest,
  updateGoodMorningSuccess,
  updateGoodMorningFailure,
} from "../actions";
import { updateGoodMorningApi } from "../api";
import { UpdateGoodMorning } from "../types";

export function* updateGoodMorningsSaga(action: UpdateGoodMorning) {
  yield put(updateGoodMorningRequest(action.payload));
  try {
    const goodMorning: GoodMorning = yield call(
      updateGoodMorningApi,
      action.payload
    );
    yield put(updateGoodMorningSuccess(goodMorning));
  } catch (e) {
    yield put(updateGoodMorningFailure([e.message]));
  }
}
