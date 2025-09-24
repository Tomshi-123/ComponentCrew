import { Button, Box } from "@mui/material";
import { useExcelData } from "../hooks/useExcelData";
import type { TableData } from "../types/Types";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const { tableData, handleFileUpload } = useExcelData(onDataLoaded);

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
      {tableData.length > 0 && <div>Data laddad!</div>}
    </Box>
  );
}
