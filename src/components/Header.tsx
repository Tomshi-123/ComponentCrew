import { Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import "@fontsource/roboto/700.css";
import "@fontsource/orbitron/400.css";
import FileImport from "./FileImport";
import { useTableData } from "../hooks/useTableData";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function Header() {
  const { setTableData } = useTableData();


const textGlowKeyframes = keyframes`
  0% {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff;
  }
  50% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  }
  100% {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff;
  }
`;


  const bottomGlowKeyframes = keyframes`
    0% {
      box-shadow: 0 0 3px #00ff00, 0 0 6px #00ff00;
    }
    50% {
      box-shadow: 0 0 6px #00ff00, 0 0 12px #00ff00;
    }
    100% {
      box-shadow: 0 0 3px #00ff00, 0 0 6px #00ff00;
    }
  `;

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
        position: "relative", 
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
              color: "#00ffff", // neonblå färg
    animation: `${textGlowKeyframes} 2s ease-in-out infinite alternate`,
          }}
        >
          Space Mine Project
        </Typography>
      </Box>
      <FileImport onDataLoaded={setTableData}></FileImport>

      
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px", 
          backgroundColor: "#00ff00", 
          animation: `${bottomGlowKeyframes} 2s ease-in-out infinite alternate`,
          zIndex: 1,
        }}
      />
    </Box>
  );
}