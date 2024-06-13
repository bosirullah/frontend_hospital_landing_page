import { createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
  email: string;
  id: string;
  token: string;
}

export interface AuthType {
  loading: boolean;
  userInfo: UserInfo;
  error: Error | null;
}

// Default UserInfo
const defaultUserInfo: UserInfo = {
  email: "",
  id: "",
  token: "",
};

const initialState: AuthType = {
  loading: false,
  userInfo: defaultUserInfo,
  error: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Registration
    createAccountStart: (state, action) => {
      state.loading = true;
    },
    createAccountSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    createAccountFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Login
    loginAccountStart: (state, action) => {
      state.loading = true;
    },
    loginAccountSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    loginAccountFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Logout
    logoutAccount: (state) => {
      state.userInfo = defaultUserInfo;
      state.loading = false;
    },
  },
});

export const {
  createAccountStart,
  createAccountSuccess,
  createAccountFailure,
  loginAccountStart,
  loginAccountSuccess,
  loginAccountFailure,
  logoutAccount,
} = authSlice.actions;

export default authSlice.reducer;
