//saga effects
import { fork } from "redux-saga/effects";

import { watchIncrement } from "./counterSagas";

// export default function* rootSaga() {

// }
const root = function* root() {
  yield fork(watchIncrement);
};
export default root;
