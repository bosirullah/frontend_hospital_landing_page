"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useDispatch } from "react-redux";
import { loginAccountStart } from "@/redux/slices/auth.slice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

function LoginComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Form Validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, action) => {
      const userData = {
        email: values.email,
        password: values.password,
      };
      const obj = {
        userData,
        successCallback: () => {
          router.replace("/doctors");
        },
      };
      dispatch(loginAccountStart(obj));
      action.resetForm();
    },
  });

  return (
    <Container maxWidth="lg">
      <Stack direction={"row"} justifyContent={"space-between"}>
        {/* ************ Form Area ********* */}
        <Stack
          sx={{
            border: ".5px solid #20A6A2",
            backgroundColor: "#fff",
            borderRadius: ".4rem",
            boxShadow: "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
            width: { xs: "100%" },
            maxWidth: "600px",
            margin: { xs: "auto", md: "0" },
            p: 2,
          }}
        >
          <Stack my={1}>
            <Typography my={2} variant="h3">
              Welcome Back!
            </Typography>
          </Stack>
          <Stack>
            <Box component="form" onSubmit={formik.handleSubmit}>
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
                  Password *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Password"
                  autoComplete="off"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  name="password"
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
                Sign In
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: ".5rem",
                  mt: "1rem",
                }}
              >
                <Typography> Don’t have an account?</Typography>
                <Link
                  style={{
                    color: "black",
                    fontSize: ".9rem",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  href="/register"
                >
                  Sign up
                </Link>
              </Box>
            </Box>
          </Stack>
        </Stack>

        {/* ************ Image Area ********* */}
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
            height={480}
            style={{ margin: "0 auto" }}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default LoginComponent;
