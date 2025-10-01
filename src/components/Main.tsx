import { Box } from "@mui/system";
import DataTable from "./DataTable";
import ReChart from "./ReChart";
import { useTableData } from "../hooks/useTableData";
import SolarSystem from "./SolarSystem";

export default function Main() {
  const { tableData } = useTableData();


  const NEON_BLUE_GLOW = "#00FFFF"; 


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "center", lg: "flex-start" },
        gap: { xs: 0, sm: 0, md: 4 },
        marginTop: 5,
        flexDirection: { xs: "column", md: "column", lg: "row" },
        width: { xs: "100vw", md: "90vw" },
        height: "auto",
        padding: 2,
        backgroundColor: "#0000008a", 
        borderRadius: { xs: "0", sm: "20px" }, 
        border: "none", 
        

        boxShadow: `
          /* Primär glöd (Neon Blå) - Stark kärna */
          0 0 15px 5px ${NEON_BLUE_GLOW}, 
          
          /* Sekundär glöd (Neon Lila/Magenta) - Bred spridning */
          0 0 40px 10px rgba(0, 255, 13, 0.73), 
          
          /* Tertiär glöd (Neon Grön) - Mycket bred och diffus aura */
          0 0 40px 15px rgba(188, 37, 226, 0.81) 
        `,
        // ------------------------------
      }}
    >
      {tableData.length > 0 ? (
        <>
          {/* ... ditt innehåll ... */}
          <Box
            sx={{
              width: { xs: "95%", md: "95%", lg: "60%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DataTable />
          </Box>

          <Box
            sx={{
              width: { xs: "95%", md: "95%", lg: "40%" },
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: 3, md: 0 },
            }}
          >
            <ReChart />
          </Box>
        </>
      ) : (
        <SolarSystem
          isAnimating={false}
          text={"No data uploaded"}
          durationMs={0}
        />
      )}
    </Box>
  );
}