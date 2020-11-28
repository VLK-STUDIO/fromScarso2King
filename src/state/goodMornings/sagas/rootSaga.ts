import { takeLatest } from "redux-saga/effects";
import {
  fetchGoodMornings,
  createGoodMorning,
  updateGoodMorning,
} from "../actions";
import { fetchGoodMorningsSaga } from "./fetch";
import { createGoodMorningsSaga } from "./create";
import { updateGoodMorningsSaga } from "./update";

export function* goodMorningsRootSaga() {
  yield takeLatest(fetchGoodMornings, fetchGoodMorningsSaga);
  yield takeLatest(createGoodMorning, createGoodMorningsSaga);
  yield takeLatest(updateGoodMorning, updateGoodMorningsSaga);
}
