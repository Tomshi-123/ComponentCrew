import { exportDataToPDF } from "./pdfUtils";
import type { SpaceMineData } from "../types/Types";

export function handleExportDataToPDF(
  tableData: SpaceMineData[],
  onSuccess: (msg: string) => void,
  onError: (msg: string) => void
) {
  if (tableData.length === 0) {
    console.warn("No data avaliable to export");
    onError("No data to export!");
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
  onSuccess("File successfully exported!");
}
