import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "3px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
