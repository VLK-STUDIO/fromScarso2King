import { takeLatest } from "redux-saga/effects";
import {
  fetchGoodMornings,
  createGoodMorning,
  updateGoodMorning,
  removeGoodMorning,
} from "../actions";
import { fetchGoodMorningsSaga } from "./fetch";
import { createGoodMorningsSaga } from "./create";
import { updateGoodMorningsSaga } from "./update";
import { removeGoodMorningsSaga } from "./remove";

export function* goodMorningsRootSaga() {
  yield takeLatest(fetchGoodMornings, fetchGoodMorningsSaga);
  yield takeLatest(createGoodMorning, createGoodMorningsSaga);
  yield takeLatest(updateGoodMorning, updateGoodMorningsSaga);
  yield takeLatest(removeGoodMorning, removeGoodMorningsSaga);
}
