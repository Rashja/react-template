import { put, takeEvery } from "redux-saga/effects";

/*--------------------------- send mobile ---------------------- */
// function* sendMobile({ mobileNumber, time, token }) {
//   yield put(showLoading());
//   const result = yield fecthMobileNumber(mobileNumber, time, token);

//   if (result.success && result.data.status !== "error") {
//     yield put(hideLoading());
//     yield put(loginActions.getLogId(result.data.log_id));
//   }

//   if (result.data.status === "error") {
//     yield put(hideLoading());
//     yield put(showToastify(result.data.message, "error"));
//   }
// }
/*-------------------------------------------------------------- */
// function* actionLoginWatcher() {
//   yield takeEvery(loginActions.SEND_MOBILE, sendMobile);
// }

export function* loginWatcher() {
  //   yield actionLoginWatcher();
}
