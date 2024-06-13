import { all } from "redux-saga/effects";
import watchAuthSaga from "./sagas/auth.saga";
import watchDoctorsSaga from "./sagas/doctors.saga";

export default function* rootSaga() {
  yield all([watchAuthSaga(), watchDoctorsSaga()]);
}
