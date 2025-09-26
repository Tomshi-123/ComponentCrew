import { exportDataToPDF } from "../utils/pdfUtils";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useTableData } from "../hooks/useTableData";
import Toast from "./Toast";

export default function ExportButton() {
  const { tableData } = useTableData();

  const [showToast, setShowToast] = useState(true);
  // Knapp för export till PDF
  // och eventuellt till Ecxel
  // Använder funktioner från /utils/pdfUtils.ts och /utils/excelUtils.ts.

  const handleExport = () => {
    if (tableData.length === 0) {
      console.warn("No data avaliable to export");
      alert("No data to export!");
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

    setShowToast(true);
  };

  return (
    //Enkel behållare för layout med Material-UI
    <>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 4,
        }}
      >
        <Button
          variant="outlined"
          component="span"
          sx={{
            position: "relative",
            overflow: "hidden",
            border: "2px solid rgba(0, 240, 160, 1)",
            borderRadius: "10px",
            color: "rgba(0, 240, 160, 1)",
            background: "transparent",
            zIndex: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(0, 240, 160, 1) 0%, rgba(0, 200, 130, 1) 100%)",
              transition: "width 0.5s ease",
              zIndex: -1,
            },
            "&:hover::before": {
              width: "100%",
            },
            "&:hover": {
              color: "black",
              boxShadow:
                "0 0 10px rgba(0, 240, 160, 1), 0 0 20px rgba(0, 240, 160, 1), 0 0 40px rgba(0, 240, 160, 1)",
            },
          }}
          onClick={handleExport}
        >
          Export to PDF
        </Button>
      </Box>
      {showToast && (
        <Toast
          message="File exported successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
