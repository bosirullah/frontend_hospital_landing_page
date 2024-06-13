import React from "react";
import NavBar from "../components/Shared/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default layout;
