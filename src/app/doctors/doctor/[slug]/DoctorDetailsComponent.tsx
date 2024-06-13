"use client";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

const DoctorDetailsComponent = () => {
  const { currentDoctor } = useSelector((state: any) => state?.doctors);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              p={4}
              sx={{
                border: "1px solid #20A6A2",
                background: "#fff",
                boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2)",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h3" my={2}>
                {currentDoctor?.name}
              </Typography>
              <Typography variant="body1">
                {currentDoctor?.description}
              </Typography>
              <Typography variant="h4" my={2}>
                {currentDoctor?.specialty}
              </Typography>
              <Stack flexWrap={"wrap"} alignItems={"flex-start"} gap={2}>
                <Chip label={`Age: ${currentDoctor.age}`} />
                <Chip
                  label={`${currentDoctor.experience} years of Experience`}
                />
                <Chip
                  icon={<PlaceIcon />}
                  label={`${currentDoctor.location}`}
                />
              </Stack>

              <Box mt={4}>
                <Link href={`/appointment`}>
                  <Button
                    disableRipple
                    size="large"
                    sx={{
                      backgroundColor: "#20A6A2",
                      color: "#fff",
                      textTransform: "none",
                      padding: "14px 20px",
                      borderRadius: "30px",
                      boxShadow:
                        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                      "&:hover": {
                        backgroundColor: "#20A6A2",
                        transition: "all 0.1s ease-in-out",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Book An Appointment
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { md: "420px", lg: "650px" },
                height: { md: "350px", lg: "500px" },
              }}
            >
              <Image
                src={"/assets/details-image.jpg"}
                fill
                alt={`doctor ${currentDoctor.name}`}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DoctorDetailsComponent;
