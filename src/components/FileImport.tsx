import React, { useState } from "react";
import { Button, Box } from "@mui/Material";
import * as ExcelJS from "exceljs";
import type { TableData } from "../types/Types";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const [data, setData] = useState<any[]>([]);

  // Funktion som triggas när en fil väljs – läser Excel-filen steg för steg
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Hämta den valda filen från inputen
    const file = event.target.files?.[0];
    if (file) {
      // Skapa ett tomt Excel-objekt med ExcelJS
      const workbook = new ExcelJS.Workbook();
      // Ladda filens innehåll asynkront – konvertera File till Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await workbook.xlsx.load(buffer);
      // Hämta det första sidan i filen
      const worksheet = workbook.getWorksheet(1);
      if (!worksheet) {
        console.error("Inget första ark hittades i filen!");
        return;
      }
      // Tom array för att samla alla rader från arket
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newData: any[] = [];

      // Gå igenom varje rad i arket
      worksheet.eachRow((row) => {
        // row.values är en array med värden från cellerna i raden, t.ex. [1, "Text", 100]
        newData.push(row.values);
      });
      // Uppdatera lokal stat med den nya datan
      setData(newData);
      // Skicka datan till förälder via callback
      onDataLoaded(newData as TableData);
    }
  };

  return (
    // Enkel behållare för layout med Material-UI
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: "4rem",
      }}
    >
      {/* Dold filinput – visas inte men hanterar filval */}
      <input
        type="file"
        accept=".xlsx" // Endast Excel-filer accepteras
        onChange={handleFileUpload}
        style={{ display: "none" }}
        id="upload-input"
      />
      {/* Label som fungerar som knapp för att öppna filval */}
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
      {/* Visa meddelande om data har laddats */}
      {data.length > 0 && <div>Data laddad!</div>}
    </Box>
  );
}
