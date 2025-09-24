import { exportDataToPDF } from "../utils/pdfUtils";
import type { TableData } from "../types/Types";
import { Box, Button } from "@mui/material";

type ButtonProps = {
  data: TableData;
  onClick: () => void;
};

export default function ExportButton({ data }: ButtonProps) {
  // Knapp för export till PDF
  // och eventuellt till Ecxel
  // Använder funktioner från /utils/pdfUtils.ts och /utils/excelUtils.ts.

  const handleExport = () => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const rows = data.map((row) => headers.map((header) => row[header]));

    exportDataToPDF(headers, rows, "sheet-data.pdf");
  };

  return (
    // Enkel behållare för layout med Material-UI
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
        variant="contained"
        component="span"
        sx={{
          background: "transparent",
          border: "1px solid green",
          borderRadius: "10px",
        }}
        onClick={handleExport}
      >
        Expport to PDF
      </Button>
    </Box>
  );
}
