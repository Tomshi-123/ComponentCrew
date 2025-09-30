import { exportDataToPDF } from "../utils/pdfUtils";
import { Box, Button } from "@mui/material";
import { useTableData } from "../hooks/useTableData";
import Toast from "./Toast";
import { useToast } from "../hooks/useToast";

export default function ExportButton() {
  const { tableData } = useTableData();
  const {
    showToast,
    toastMessage,
    toastType,
    showSuccess,
    showError,
    hideToast,
  } = useToast();

  const handleExport = () => {
    if (tableData.length === 0) {
      console.warn("No data available to export");
      showError("No data to export!");
      return;
    }

    const headers = ["Astronaut", "Mineral", "Amount", "Planet"];
    const rows = tableData.map((row) => [
      row.astronaut ?? "",
      row.mineral ?? "",
      String(row.amount ?? ""),
      row.planet ?? "",
    ]);

    exportDataToPDF(headers, rows, "sheet-data.pdf");
    showSuccess("File succesfully exported!");
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "100%" },
          marginTop: 3,
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          component="span"
          onClick={handleExport}
          sx={{
            position: "relative",
            overflow: "hidden",
            border: "2px solid #00ffff",
            borderRadius: "10px",
            color: "#00ffff",
            background: "transparent",
            fontFamily: "orbitron",
            fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
            zIndex: 1,
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background: "linear-gradient(90deg, #00ffff 0%, #00aaff 100%)",
              transition: "width 0.5s ease",
              zIndex: -1,
            },
            "&:hover::before": {
              width: "100%",
            },
            "&:hover": {
              color: "black",
              boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
            },
          }}
        >
          Export to PDF
        </Button>
      </Box>

      {showToast && (
        <Toast message={toastMessage} onClose={hideToast} type={toastType} />
      )}
    </>
  );
}
