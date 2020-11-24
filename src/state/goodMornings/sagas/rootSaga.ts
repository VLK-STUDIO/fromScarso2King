import { takeLatest } from "redux-saga/effects";
import { fetchGoodMornings } from "../actions";
import { fetchGoodMorningsSaga } from "./fetch";

export function* goodMorningsRootSaga() {
  yield takeLatest(fetchGoodMornings, fetchGoodMorningsSaga);
}
