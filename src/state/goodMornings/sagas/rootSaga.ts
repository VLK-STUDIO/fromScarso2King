import { takeLatest } from "redux-saga/effects";
import { fetchGoodMornings, createGoodMorning } from "../actions";
import { fetchGoodMorningsSaga } from "./fetch";
import { createGoodMorningsSaga } from "./create";

export function* goodMorningsRootSaga() {
  yield takeLatest(fetchGoodMornings, fetchGoodMorningsSaga);
  yield takeLatest(createGoodMorning, createGoodMorningsSaga);
}
