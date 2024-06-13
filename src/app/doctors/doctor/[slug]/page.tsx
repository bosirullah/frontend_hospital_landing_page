import { Box } from "@mui/material";
import DoctorDetailsComponent from "./DoctorDetailsComponent";

const page = () => {
  return (
    <>
      <Box component="section" py={14}>
        <DoctorDetailsComponent />
      </Box>
    </>
  );
};

export default page;
