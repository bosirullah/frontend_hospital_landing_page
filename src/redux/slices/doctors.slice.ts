import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
  doctors: [],
  currentDoctor: [],
  loading: false,
  error: null,
};

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    fetchDoctorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorsSuccess(state, action) {
      state.loading = false;
      state.doctors = action.payload;
    },
    fetchDoctorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    setCurrentDoctor(state, action) {
      state.currentDoctor = action.payload;
    },
  },
});

export const {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
  setCurrentDoctor,
} = doctorsSlice.actions;

export default doctorsSlice.reducer;
