import { Container, Grid, Skeleton, Typography } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2" my={3}>
          Doctors
        </Typography>
        <Grid container spacing={3}>
          {Array.from(new Array(20)).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Skeleton variant="rounded" height={200} />
              <Skeleton height={50} />
              <Skeleton width="80%" />
              <Skeleton width="60%" />
              <Skeleton width="40%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardSkeleton;
