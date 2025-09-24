import { Button } from "@mui/material";
import { exportDataToPDF } from "../utils/pdfUtils";
import type { TableData } from "../types/Types";

type ButtonProps = {
  data: TableData;
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
    <div>
      <Button variant="outlined" onClick={handleExport}>
        Export to PDF
      </Button>
    </div>
  );
}
