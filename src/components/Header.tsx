import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "@fontsource/roboto/700.css";
import "@fontsource/orbitron/400.css";
import FileImport from "./FileImport";
import { useTableData } from "../hooks/useTableData";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function Header() {
  const { setTableData } = useTableData();
  return (
    <Box
      sx={{
        backgroundColor: "#001428cb",
        width: "100%",
        height: "auto",
        color: "white",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontFamily: "Roboto", fontSize: "3rem", fontWeight: "700" }}
        >
          Component Crew <RocketLaunchIcon></RocketLaunchIcon>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "orbitron",
            fontSize: "2rem",
            fontWeight: "300",
            color: "#009082",
          }}
        >
          Space Mine Project
        </Typography>
      </Box>
      <FileImport onDataLoaded={setTableData}></FileImport>
    </Box>
  );
}
