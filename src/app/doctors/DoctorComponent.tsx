"use client";
import React, { useEffect, useState } from "react";
import { fetchDoctorsStart } from "@/redux/slices/doctors.slice";
import { Container, Grid, Typography, Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DoctorCard from "../components/Cards/DoctorCard";
import { RootState } from "@/redux/store";
import CardSkeleton from "../components/Skeletons/CardSkeleton";
import { useRouter } from "next/navigation";

const DoctorsComponent = () => {
  const router = useRouter();
  // route validating
  const user = localStorage.getItem("userInfo");
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  const dispatch = useDispatch();
  const { doctors, loading } = useSelector(
    (state: RootState) => state?.doctors
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 20;

  useEffect(() => {
    dispatch(fetchDoctorsStart());
  }, [dispatch]);

  // Calculate the current doctors to display
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // loading state
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2" my={3}>
          Doctors
        </Typography>
        <Grid container spacing={3}>
          {currentDoctors.map((doctor: any) => (
            <Grid key={doctor.id} item xs={12} sm={6} md={4} lg={3}>
              <DoctorCard doctor={doctor} />
            </Grid>
          ))}
        </Grid>
        <Stack mt={5} direction={"row"} justifyContent={"flex-end"}>
          <Pagination
            count={Math.ceil(doctors.length / doctorsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="medium"
            shape="rounded"
          />
        </Stack>
      </Container>
    </>
  );
};

export default DoctorsComponent;
