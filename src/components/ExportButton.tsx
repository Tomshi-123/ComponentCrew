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
    alert("knapp klickes");
    if (data.length === 0) {
      console.warn("No data avaliable to export");
      alert("No data to export!");
      return;
    }

    const headers = ["Astronaut", "Mineral", "Amount", "Planet"];

    const rows = data.map((row) => [
      row.astronaut ?? "",
      row.mineral ?? "",
      String(row.amount ?? ""),
      row.planet ?? "",
    ]);

    console.log("Exporting data:", rows);

    exportDataToPDF(headers, rows, "sheet-data.pdf");
  };

  return (
    //Enkel behållare för layout med Material-UI
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
        Export to PDF
      </Button>
    </Box>
  );
}
