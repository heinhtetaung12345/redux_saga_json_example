import {
  DISPLAY_REQUEST,
  DISPLAY_SUCCESSED,
  DISPLAY_FAILED
} from "../src/action/actionTypes";
//saga effects
import { delay } from "redux-saga";
import { put, takeEvery, takeLatest, select, call } from "redux-saga/effects";
import { getTimes } from "../src/Selector";

import { getApiList } from "./ApiServices";

//increaseAction

function* increment(action) {
  try {
    const apiList = yield call(getApiList);
    console.log("from service", apiList);
    yield put({
      type: DISPLAY_SUCCESSED,
      payload: apiList
    });
  } catch (e) {
    yield put({ type: DISPLAY_FAILED, payload: e.message });
  }
}

//export

export function* watchIncrement() {
  yield takeLatest(DISPLAY_REQUEST, increment);
}
