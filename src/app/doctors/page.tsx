import { Box } from "@mui/material";
import DoctorsComponent from "./DoctorComponent";

const page = () => {
  return (
    <>
      <Box component="section" py={8}>
        <DoctorsComponent />
      </Box>
    </>
  );
};

export default page;
