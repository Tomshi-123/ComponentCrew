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
        backgroundColor: "#0000008a",
        display: "flex",
        justifyContent: "center",
        alignItems: { md: "center", lg: "flex-start" },
        gap: { xs: 0, sm: 0, md: 4 },
        marginTop: 5,
        flexDirection: { xs: "column", md: "column", lg: "row" }, // column på små skärmar, row på stora
        width: "95vw",
        borderRadius: "20px",
        height: "auto",
        padding: 2,
      }}
    >
      {tableData.length > 0 ? (
        <>
          {/* Tabell */}
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "70%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DataTable />
          </Box>

          {/* ReChart */}
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "70%" },
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
          text={"Ingen data uppladdad ännu"}
          durationMs={0}
        />
      )}
    </Box>
  );
}
