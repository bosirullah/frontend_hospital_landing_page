import { Box } from "@mui/material";
import RegisterComponent from "./Register";

const page = () => {
  return (
    <>
      <Box component="section" py={5}>
        <RegisterComponent />
      </Box>
    </>
  );
};

export default page;
