import { call, put } from "redux-saga/effects";
import { GoodMorning } from "../../../types";
import { fetchGoodMorningsFailure, fetchGoodMorningsSuccess } from "../actions";
import { fetchGoodMorningsApi } from "../api";

export function* fetchGoodMorningsSaga() {
  try {
    const goodMornings: GoodMorning[] = yield call(fetchGoodMorningsApi);
    yield put(fetchGoodMorningsSuccess(goodMornings));
  } catch (e) {
    yield put(fetchGoodMorningsFailure([e.message]));
  }
}
