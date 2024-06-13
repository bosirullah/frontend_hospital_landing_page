import { combineReducers } from "@reduxjs/toolkit";
import doctorsReducer from "@/redux/slices/doctors.slice";
import authReducer from "@/redux/slices/auth.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
