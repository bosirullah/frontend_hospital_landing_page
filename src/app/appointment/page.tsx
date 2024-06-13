import { Box } from "@mui/material";
import AppointmentComponent from "./AppointmentComponent";

interface ProcessEnv {
  calendlyUrl: string;
}

const page = () => {
  const calendlyUrl = process.env.calendlyUrl as string;
  const token = process.env.personalAccessToken;

  const credential = {
    calendlyUrl,
    token,
  };

  return (
    <>
      <Box component="section">
        <AppointmentComponent credential={credential} />
      </Box>
    </>
  );
};

export default page;
