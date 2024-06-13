"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const HomeComponent = () => {
  const user = localStorage.getItem("userInfo");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, lg: 8 },
        textAlign: "center",
        color: "white",
        backgroundImage: `url('assets/home.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.9,
      }}
    >
      <Box sx={{ width: { xs: "98%", lg: "65%" } }}>
        <Typography variant="h1">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Meet careConsult, your partner in healthcare management. Book
          appointments, get reminders, and stay on top of your health
          effortlessly. Start your health journey today.
        </Typography>
        {user ? (
          <Link href="/doctors">
            <Button
              size="large"
              color="primary"
              sx={{
                mt: 3,
                backgroundColor: "#003938",
                color: "#fff",
                padding: "14px 25px",
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "18px",
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                "&:hover": {
                  background: "#20A6A2",
                },
              }}
            >
              See Services
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button
              size="large"
              color="primary"
              sx={{
                mt: 3,
                backgroundColor: "#003938",
                color: "#fff",
                padding: "14px 25px",
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "18px",
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                "&:hover": {
                  background: "#20A6A2",
                },
              }}
            >
              Get Started
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default HomeComponent;
