// Funtioner för import och export av Excel med xlsx.

// Import logik
import * as ExcelJS from "exceljs";
import type { SpaceMineData } from "../types/Types";

export async function parseExcelFile(file: File): Promise<SpaceMineData[]> {
  const workbook = new ExcelJS.Workbook();
  const arrayBuffer = await file.arrayBuffer();

  // ✅ Ingen Buffer – använd direkt
  await workbook.xlsx.load(arrayBuffer);
  const worksheet = workbook.getWorksheet(1);

  if (!worksheet) {
    throw new Error("Inget första ark hittades i filen!");
  }

  const newData: SpaceMineData[] = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;

    const astronaut = row.getCell(1).value?.toString().trim() || "";
    const planet = row.getCell(2).value?.toString().trim() || "";
    const mineral = row.getCell(3).value?.toString().trim() || "";
    const amount = Number(row.getCell(4).value) || 0;

    if (astronaut && planet && mineral) {
      newData.push({ astronaut, planet, mineral, amount });
    }
  });

  return newData;
}
