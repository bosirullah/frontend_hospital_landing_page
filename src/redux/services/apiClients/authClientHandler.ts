import { ToastError } from "@/app/components/Shared/Toasts";
import axios from "axios";

// Login Handler
export const loginHandlerClient = async ({ endpoint, userData }: any) => {
  try {
    const response = await axios.post(endpoint, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    ToastError(error?.response?.data);
  }
};

// Register Handler
export const registerHandlerClient = async ({ endpoint, userData }: any) => {
  try {
    const response = await axios.post(endpoint, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    ToastError(error?.response?.data?.message);
  }
};
