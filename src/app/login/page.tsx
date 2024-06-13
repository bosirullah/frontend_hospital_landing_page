import { Box } from "@mui/material";
import LoginComponent from "./Login";

const page = () => {
  return (
    <>
      <Box component="section" mt={{ xs: 10, sm: 14 }}>
        <LoginComponent />
      </Box>
    </>
  );
};

export default page;
