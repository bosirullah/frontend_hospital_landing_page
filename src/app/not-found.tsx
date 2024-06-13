import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack gap={1} textAlign={"center"}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "50px", sm: "120px" }, color: "#CA2118" }}
        >
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Link href="/">
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Return to Home
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NotFound;
