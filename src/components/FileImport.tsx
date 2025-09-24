import { Button, Box } from "@mui/material";
import * as ExcelJS from "exceljs";
import type { TableData, SpaceMineData } from "../types/Types";
import { useTableData } from "../hooks/useTableData";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const { tableData, setTableData } = useTableData();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const workbook = new ExcelJS.Workbook();
    const arrayBuffer = await file.arrayBuffer();
    await workbook.xlsx.load(arrayBuffer);

    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) {
      console.error("Inget första ark hittades i filen!");
      return;
    }

    const newData: SpaceMineData[] = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skippa header-raden

      const astronaut = row.getCell(1).value?.toString().trim() || "";
      const planet = row.getCell(2).value?.toString().trim() || "";
      const mineral = row.getCell(3).value?.toString().trim() || "";
      const amount = Number(row.getCell(4).value) || 0;

      // Bara lägg till om det finns data
      if (astronaut && planet && mineral) {
        newData.push({ astronaut, planet, mineral, amount });
      }
    });

    setTableData(newData);
    onDataLoaded(newData);
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
      {tableData.length > 0 && <div>Data laddad!</div>}
    </Box>
  );
}
