"use client";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { createAccountStart } from "@/redux/slices/auth.slice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const RegisterComponent = ({ page }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();
  const router = useRouter();

  // Form validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values, action) => {
      const userData = {
        ...values,
        username: values.firstName,
        slug: values.firstName,
      };
      const obj = {
        userData,
        successCallback: () => {
          router.replace("/login");
        },
      };
      dispatch(createAccountStart(obj));
      action.resetForm();
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box
            sx={{
              border: ".5px solid #20A6A2",
              backgroundColor: "#fff",
              borderRadius: ".4rem",
              boxShadow: "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
              width: { xs: "100%", md: "50%" },
              maxWidth: "600px",
              margin: { xs: "auto", md: "0" },
            }}
            p={2}
          >
            <Box my={2}>
              <Typography variant="h3" sx={{ color: "#444" }}>
                Create an Account to Access Our Services
              </Typography>
            </Box>
            <Box component="form" my={3} onSubmit={formik.handleSubmit}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                my={2}
                gap={3}
              >
                <Stack width={"100%"}>
                  <Typography
                    my={1}
                    variant="h5"
                    sx={{ fontSize: ".9rem", mt: ".3rem" }}
                  >
                    First Name *{" "}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Your First Name"
                    autoComplete="off"
                    variant="outlined"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputProps={{
                      style: {
                        height: "2.2rem",
                      },
                    }}
                    sx={{
                      border: "1px solid #ccc",
                      padding: "6px",
                      borderRadius: "8px",
                      backgroundColor: "#F5F6FA",
                      "& fieldset": { border: "none", outline: "none" },
                    }}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <Typography variant="body2" color="error" mt={1}>
                      {formik.errors.firstName}
                    </Typography>
                  )}
                </Stack>
                <Stack width={"100%"}>
                  <Typography
                    my={1}
                    variant="h5"
                    sx={{ fontSize: ".9rem", mt: ".4rem" }}
                  >
                    Last Name *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Your Last Name"
                    autoComplete="off"
                    variant="outlined"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputProps={{
                      style: {
                        height: "2.2rem",
                      },
                    }}
                    sx={{
                      border: "1px solid #ccc",
                      padding: "6px",
                      borderRadius: "8px",
                      backgroundColor: "#F5F6FA",
                      "& fieldset": { border: "none", outline: "none" },
                    }}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <Typography variant="body2" color="error" mt={1}>
                      {formik.errors.lastName}
                    </Typography>
                  )}
                </Stack>
              </Stack>
              <Stack my={2}>
                <Typography
                  my={1}
                  variant="h5"
                  sx={{ fontSize: ".9rem", mt: ".3rem" }}
                >
                  Email *{" "}
                </Typography>
                <TextField
                  rows={1}
                  fullWidth
                  placeholder="your-email@example.com"
                  autoComplete="off"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    style: {
                      height: "2.2rem",
                    },
                  }}
                  sx={{
                    border: "1px solid #ccc",
                    padding: "6px",
                    borderRadius: "8px",
                    backgroundColor: "#F5F6FA",
                    "& fieldset": { border: "none", outline: "none" },
                  }}
                />
                {formik.touched.email && formik.errors.email && (
                  <Typography variant="body2" color="error" mt={1}>
                    {formik.errors.email}
                  </Typography>
                )}
              </Stack>
              <Stack my={2}>
                <Typography
                  my={1}
                  variant="h5"
                  sx={{ fontSize: ".9rem", mt: ".4rem" }}
                >
                  Create Password *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Password"
                  autoComplete="off"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    style: {
                      height: "2.2rem",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    border: "1px solid #ccc",
                    padding: "6px",
                    borderRadius: "8px",
                    backgroundColor: "#F5F6FA",
                    "& fieldset": { border: "none", outline: "none" },
                  }}
                />
                {formik.touched.password && formik.errors.password && (
                  <Typography variant="body2" color="error" mt={1}>
                    {formik.errors.password}
                  </Typography>
                )}
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox
                  {...label}
                  sx={{ color: "#20a6a2" }}
                  name="terms"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Typography variant="body1">
                  I agree to the{" "}
                  <Link
                    href=""
                    style={{
                      fontWeight: "700",
                      color: "#000",
                      textDecoration: "underline",
                    }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href=""
                    style={{
                      fontWeight: "700",
                      color: "#000",
                      textDecoration: "underline",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Stack>
              {formik.touched.terms && formik.errors.terms && (
                <Typography variant="body2" color="error" mt={1}>
                  {formik.errors.terms}
                </Typography>
              )}
              <Button
                startIcon={<RocketLaunchIcon style={{ marginRight: 1 }} />}
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  padding: "10px 25px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(32, 166, 162, 1)",
                  border: "1px solid rgba(32, 166, 162, 1)",
                  color: "#fff",
                  width: "100%",
                  marginTop: "20px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "rgba(32, 166, 162, 1)",
                    boxShadow: "none",
                  },
                }}
                fullWidth
              >
                Sign Up
              </Button>
              <Stack my={2} direction={"row"} alignItems={"center"} gap={1}>
                <Typography variant="body1">
                  Already have an account?
                </Typography>
                <Link
                  style={{
                    color: "black",
                    fontSize: ".9rem",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  href="/login"
                >
                  Login
                </Link>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              background: "#20A6A2",
              borderRadius: "0.4rem",
              display: {
                sm: "none",
                xs: "none",
                md: "flex",
              },
              p: ".8rem",
            }}
          >
            <Image
              src="/assets/register.svg"
              alt="login"
              width={450}
              height={600}
              style={{ margin: "0 auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default RegisterComponent;
