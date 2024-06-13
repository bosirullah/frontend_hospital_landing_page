import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  createAccountFailure,
  createAccountSuccess,
  loginAccountFailure,
  loginAccountSuccess,
} from "@/redux/slices/auth.slice";
import { AUTH_ENDPOINTS } from "@/redux/services/apiEndpoints";
import { ToastError, ToastSuccess } from "@/app/components/Shared/Toasts";
import {
  registerHandlerClient,
  loginHandlerClient,
} from "../services/apiClients/authClientHandler";

// Worker function for Registration
function* createAccountSaga(action: any) {
  const { userData, successCallback } = action.payload;
  const credential: any = {
    endpoint: AUTH_ENDPOINTS.register,
    userData,
  };

  try {
    const response: AxiosResponse = yield call(
      registerHandlerClient,
      credential
    );
    if (response) {
      let data: any = response.data;
      localStorage.setItem("userinfo", JSON.stringify(data?.user));
      yield put(createAccountSuccess(data?.user));
      successCallback();
      ToastSuccess(response.data);
    } else {
      ToastError(response);
    }
  } catch (err: any) {
    ToastError(err);
    yield put(createAccountFailure(err));
  }
}

// Worker function for Login
function* loginAccountSaga(action: any) {
  const { userData, successCallback } = action.payload;
  const credential: any = {
    endpoint: AUTH_ENDPOINTS.login,
    userData,
  };

  try {
    const response: AxiosResponse = yield call(loginHandlerClient, credential);
    if (response) {
      localStorage.setItem("userInfo", JSON.stringify(response?.data));

      yield put(loginAccountSuccess(response?.data));

      // Call success callback if provided
      if (successCallback) {
        successCallback();
      }
      ToastSuccess(response?.data?.message);
    }
  } catch (err: any) {
    ToastError(err.message);
    yield put(loginAccountFailure(err));
  }
}

// Watcher Functions
function* watchAuthSaga() {
  yield takeEvery("authSlice/createAccountStart", createAccountSaga);
  yield takeEvery("authSlice/loginAccountStart", loginAccountSaga);
}

export default watchAuthSaga;
