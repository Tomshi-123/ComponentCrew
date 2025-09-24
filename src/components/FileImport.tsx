import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import * as ExcelJS from "exceljs";
import type { TableData } from "../types/Types";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const workbook = new ExcelJS.Workbook();
    const arrayBuffer = await file.arrayBuffer();

    // ✅ Ingen Buffer – använd direkt
    await workbook.xlsx.load(arrayBuffer);

    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) {
      console.error("Inget första ark hittades i filen!");
      return;
    }

    const newData: any[] = [];

    worksheet.eachRow((row, rowNumber) => {
      // Row.values innehåller [empty, col1, col2, ...]
      // Tar bort första tomma indexet
      const rowValues = row.values as any[];
      newData.push(rowValues.slice(1));
    });

    setData(newData);
    onDataLoaded(newData as TableData);
  };

  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: "4rem",
      }}
    >
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        id="upload-input"
      />
      <label htmlFor="upload-input">
        <Button
          variant="contained"
          component="span"
          sx={{
            background: "transparent",
            border: "1px solid green",
            borderRadius: "10px",
          }}
        >
          Ladda upp Excel
        </Button>
      </label>
      {data.length > 0 && <div>Data laddad!</div>}
    </Box>
  );
}
