import { Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import "@fontsource/roboto/700.css";
import "@fontsource/orbitron/400.css";
import FileImport from "./FileImport";
import { useTableData } from "../hooks/useTableData";

export default function Header() {
  const { setTableData } = useTableData();

  const textGlowKeyframes = keyframes`
    0% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff; }
    50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
    100% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff; }
  `;

  const bottomGlowKeyframes = keyframes`
    0% { box-shadow: 0 0 3px #00ffff, 0 0 6px #00ffff; }
    50% { box-shadow: 0 0 6px #00ffff, 0 0 12px #00ffff; }
    100% { box-shadow: 0 0 3px #00ffff, 0 0 6px #00ffff; }
  `;

  return (
    <Box
      sx={{
        backgroundColor: "#001428cb",
        width: "100vw",
        py: "2rem",
        position: "relative",

        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100vw", md: "93vw" },

          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: {
            xs: "center",
            md: "space-between",
            lg: "space-between",
          },
          alignItems: { xs: "center", lg: "center" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 1,
            fontFamily: "orbitron",
            fontSize: { xs: "1.75rem", sm: "3rem", md: "3rem" },
            fontWeight: "300",
            color: "#00ffff",
            animation: `${textGlowKeyframes} 2s ease-in-out infinite alternate`,
          }}
        >
          Space Mine Project
        </Typography>

        <FileImport onDataLoaded={setTableData} />
      </Box>

      {/* Glödande linje */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#00ffff",
          animation: `${bottomGlowKeyframes} 2s ease-in-out infinite alternate`,
          zIndex: 1,
        }}
      />
    </Box>
  );
}
