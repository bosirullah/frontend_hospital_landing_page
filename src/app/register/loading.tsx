import { Box, Container, Skeleton, Stack } from "@mui/material";

const loading = () => {
  return (
    <Box component="section" py={8} bgcolor="#f9fdfd">
      <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box
            sx={{
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
              <Skeleton variant="text" width="60%" height={40} />
            </Box>
            <Box py={1}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                my={2}
              >
                <Stack width="48%">
                  <Skeleton variant="text" height={30} />
                  <Skeleton
                    variant="rounded"
                    height={50}
                    sx={{ mt: 1, borderRadius: "8px" }}
                  />
                </Stack>
                <Stack width="48%">
                  <Skeleton variant="text" height={30} />
                  <Skeleton
                    variant="rounded"
                    height={50}
                    sx={{ mt: 1, borderRadius: "8px" }}
                  />
                </Stack>
              </Stack>
              <Stack my={2}>
                <Skeleton variant="text" height={30} />
                <Skeleton
                  variant="rounded"
                  height={50}
                  sx={{ mt: 1, borderRadius: "8px" }}
                />
              </Stack>
              <Stack my={2}>
                <Skeleton variant="text" height={30} />
                <Skeleton
                  variant="rounded"
                  height={50}
                  sx={{ mt: 1, borderRadius: "8px" }}
                />
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={2}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={30}
                  sx={{ ml: 2 }}
                />
              </Stack>
              <Skeleton
                variant="rounded"
                height={50}
                sx={{ borderRadius: "14px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "0.4rem",
              display: {
                sm: "none",
                xs: "none",
                md: "flex",
              },
              p: ".8rem",
            }}
          >
            <Skeleton
              variant="rounded"
              width={600}
              height={550}
              sx={{ margin: "0 auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default loading;
