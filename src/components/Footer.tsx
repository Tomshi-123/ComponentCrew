import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import "@fontsource/orbitron/400.css";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#00142825",
        width: "100%",
        height: "auto",
        color: "white",
        padding: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: "Roboto", fontSize: "1rem", fontWeight: "700" }}
        >
          © 2025 Component Crew. All rights reserved.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "orbitron",
            fontSize: "1rem",
            fontWeight: "300",
            color: "#009082",
          }}
        >
          Space Mining Operations Division
        </Typography>
      </Box>
    </Box>
  );
}
