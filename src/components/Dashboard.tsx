import { Box } from "@mui/system";
import DataTable from "./DataTable";
import ReChart from "./ReChart";
import { useTableData } from "../hooks/useTableData";
import SolarSystem from "./SolarSystem";
import { GLOW_PURPLE, NEON_BLUE, NEON_GREEN } from "../theme/ColorTheme";
export default function Main() {
  const { tableData } = useTableData();

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
        0 0 15px 8px ${NEON_GREEN},
        0 0 10px 6px ${GLOW_PURPLE},
        0 0 5px 4px ${NEON_BLUE}
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
