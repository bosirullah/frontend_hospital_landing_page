import { SagaIterator } from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
import {
  fetchDoctorsFailure,
  fetchDoctorsSuccess,
} from "@/redux/slices/doctors.slice";
import { fetchDataFromApi } from "../services/apiClients/fetchDataFromApi";
import { DOCTORS_API_BASE_URL } from "@/redux/services/apiEndpoints";

const API_KEY = "$2a$10$.Rr4wfVHtGqq9ApKnYvP9.gA.jbsdJ/w45RWVnPELJy71iSifSgOW";
// const API_KEY = process.env.DOCTOR_API_MASTER_KEY;

const credential = { DOCTORS_API_BASE_URL, API_KEY };
// Worker functions for users saga
function* fetchDoctorsSaga(): SagaIterator {
  try {
    const response = yield call(fetchDataFromApi, credential);
    yield put(fetchDoctorsSuccess(response?.record?.Doctors));
  } catch (error: any) {
    yield put(fetchDoctorsFailure(error.message));
  }
}

// watcher functions for users saga
function* watchDoctorsSaga() {
  yield takeEvery("doctors/fetchDoctorsStart", fetchDoctorsSaga);
}

export default watchDoctorsSaga;
