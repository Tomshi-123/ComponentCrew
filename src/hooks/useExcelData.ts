import { useState } from "react";
import type { TableData } from "../types/Types";
import { parseExcelFile } from "../utils/excelUtils";

export function useExcelData(
  onDataLoaded?: (data: TableData) => void,
  onError?: (error: Error) => void
) {
  // En custom Hook för logik kring Excel-data
  // läsa/parsa/ladda/state hantering

  const [tableData, setTableData] = useState<TableData>([]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const parsedData = await parseExcelFile(file);
      setTableData(parsedData);
      onDataLoaded?.(parsedData);
    } catch (error) {
      console.error("Fel vid uppladdning av Excel:", error);
      onError?.(error as Error);
    }
  };

  return {
    tableData,
    handleFileUpload,
  };
}
