"use client";
import { Container } from "@mui/material";
import axios from "axios";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { formatTimestamp } from "@/app/utils/formatTimestamp";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  minWidth?: string;
  height?: string;
}
const AppointmentComponent = ({ credential }: any) => {
  const router = useRouter();
  const { currentDoctor } = useSelector((state: RootState) => state?.doctors);
  const fetchEventDetails = async (eventUri: any) => {
    const uuid = eventUri.split("/").pop();

    try {
      const response = await axios.get(eventUri, {
        headers: {
          Authorization: `Bearer ${credential.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  // emailSystem();
  useCalendlyEventListener({
    onEventScheduled: async (e: any) => {
      const eventUri = e.data.payload.event.uri;
      const response = await fetchEventDetails(eventUri);

      setTimeout(() => {
        router.push("/doctors");
      }, 3000);
    },
  });

  // redirecting
  const user = localStorage.getItem("userInfo");
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <InlineWidget
          url={credential.calendlyUrl}
          styles={{ height: "700px", width: "100%" }}
        ></InlineWidget>
      </Container>
    </>
  );
};

export default AppointmentComponent;
