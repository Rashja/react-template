import { all } from "redux-saga/effects";
import { loginWatcher } from "./login";

export default function* rootSaga() {
  yield all([loginWatcher()]);
}
