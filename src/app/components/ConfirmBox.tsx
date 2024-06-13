"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmBox({
  userName,
  docDetail,
  eventDt,
  isOpen,
  setIsOpen,
}: any) {
  const handleClose = () => setIsOpen(false);

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {userName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Dear {userName}, <br />
            This email confirms your appointment with Dr.{docDetail.name}, a{" "}
            {docDetail.specialty} specialist, on {eventDt}. <br />
            We look forward to seeing you! <br /> Sincerely, <br /> The
            CareConsult Team
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
