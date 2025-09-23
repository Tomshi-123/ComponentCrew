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
    exportDataToPDF(data, "sheet-data.pdf");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleExport}>
        Export to PDF
      </Button>
    </div>
  );
}
