import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCurrentDoctor } from "@/redux/slices/doctors.slice";
import PlaceIcon from "@mui/icons-material/Place";

const DoctorCard = ({ doctor }: any) => {
  const dispatch = useDispatch();
  const handleGetDoctorDetails = (doctor: any) => {
    dispatch(setCurrentDoctor(doctor));
  };

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image="assets/doctor.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {doctor.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 3,
              textOverflow: "ellipsis",
            }}
          >
            {doctor.description}
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={1.5}>
            <Chip label={`Age: ${doctor.age}`} />
            <Chip label={`${doctor.experience} years of Experience`} />
            <Chip icon={<PlaceIcon />} label={`${doctor.location}`} />
          </Stack>
        </CardContent>
        <CardActions sx={{ pl: 2 }}>
          <Link
            href={`doctors/doctor/${doctor?.id}`}
            onClick={() => handleGetDoctorDetails(doctor)}
            style={{ fontWeight: "bold", color: "#20A6A2" }}
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default DoctorCard;
