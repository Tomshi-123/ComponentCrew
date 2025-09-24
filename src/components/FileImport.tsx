import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { parseExcelFile } from "../utils/excelUtils";
import type { TableData } from "../types/Types";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const [data, setData] = useState<TableData>([]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const parsedData = await parseExcelFile(file);
      setData(parsedData);
      onDataLoaded(parsedData);
    } catch (error) {
      console.error("Fel Vid uppladdning av Excel:", error);
    }
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
