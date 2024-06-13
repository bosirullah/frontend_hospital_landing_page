import axios from "axios";

export const fetchDataFromApi = async (credential: any) => {
  const { DOCTORS_API_BASE_URL, API_KEY } = credential;
  try {
    const response = await axios.get(DOCTORS_API_BASE_URL, {
      headers: {
        "X-Master-Key": API_KEY,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching data from API: " + error.message);
  }
};
