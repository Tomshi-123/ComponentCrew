import { Typography } from "@mui/Material";
import { Box } from "@mui/system";
import "@fontsource/roboto/700.css";
import "@fontsource/orbitron/400.css";
import FileImport from "./FileImport";
import { useTableData } from "../context/TableDataContext";

export default function Header() {
  const { setTableData } = useTableData();
  return (
    <Box
      sx={{
        backgroundColor: "#001428cb",
        width: "95%",
        height: "auto",

        color: "white",
        padding: "2rem",
        marginLeft: "auto",
        marginRight: "auto",

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
          Component Crew
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
