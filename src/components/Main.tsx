import { Box } from "@mui/system";
import DataTable from "./DataTable";
import ReChart from "./ReChart";
import { useTableData } from "../hooks/useTableData";
import SolarSystem from "./SolarSystem";

export default function Main() {
  const { tableData } = useTableData();

  return (
    <Box
      sx={{
        border: "1px solid #00ffff",
        backgroundColor: "#0000008a",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "center", lg: "flex-start" },
        gap: { xs: 0, sm: 0, md: 4 },
        marginTop: 5,
        flexDirection: { xs: "column", md: "column", lg: "row" }, // column på små skärmar, row på stora
        width: { xs: "100vw", md: "90vw" },
        borderRadius: { xs: "0", sm: "20px" },
        height: "auto",
        padding: 2,
        boxShadow: "0px 0px 15px 1px rgba(0, 255, 255, 1)",
      }}
    >
      {tableData.length > 0 ? (
        <>
          {/* Tabell */}
          <Box
            sx={{
              width: { xs: "95%", md: "95%", lg: "60%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DataTable />
          </Box>

          {/* ReChart */}
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
