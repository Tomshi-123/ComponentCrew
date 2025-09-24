// Funtioner för import och export av Excel med xlsx.

// Import logik
import * as ExcelJS from "exceljs";
import type { TableData } from "../types/Types";

export async function parseExcelFile(file: File): Promise<TableData> {
  const workbook = new ExcelJS.Workbook();
  const arrayBuffer = await file.arrayBuffer();

  // ✅ Ingen Buffer – använd direkt
  await workbook.xlsx.load(arrayBuffer);
  const worksheet = workbook.getWorksheet(1);

  if (!worksheet) {
    throw new Error("Inget första ark hittades i filen!");
  }

  const newData: (string | number | boolean | Date | null)[][] = [];

  worksheet.eachRow((row) => {
    const values = row.values;

    if (!Array.isArray(values)) return;

    const cleanedRow = values
      .slice(1)
      .map(
        (cell: ExcelJS.CellValue): string | number | boolean | Date | null => {
          if (
            typeof cell === "string" ||
            typeof cell === "number" ||
            typeof cell === "boolean" ||
            cell instanceof Date ||
            cell === null
          ) {
            return cell;
          }
          return null;
        }
      );
    newData.push(cleanedRow);
  });

  return newData;
}
