import { Button, Box } from "@mui/material";
import { useExcelData } from "../hooks/useExcelData";
import type { TableData } from "../types/Types";

type FileImportProps = {
  onDataLoaded: (data: TableData) => void;
};

export default function FileImport({ onDataLoaded }: FileImportProps) {
  const { handleFileUpload } = useExcelData(onDataLoaded);

  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: "4rem",
        marginLeft: "auto",
        marginRight: { xs: "auto", sm: "0", md: "0" },
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
            position: "relative",
            overflow: "hidden",
            border: "1px solid #00ffff",
            borderRadius: "10px",
            color: "#00ffff",
            background: "transparent",
            boxShadow: "none",
            zIndex: 1,
            transition: "color 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(0, 200, 130, 1) 0%, rgba(57, 255, 20, 0.7) 100%)", // mörk → ljus
              transition: "width 0.5s ease",
              zIndex: -1,
            },
            "&:hover::before": {
              width: "100%",
            },
            "&:hover": {
              color: "black",
              boxShadow:
                "0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.7), 0 0 40px rgba(57, 255, 20, 0.7)",
            },
          }}
        >
          Ladda upp Excel
        </Button>
      </label>
    </Box>
  );
}
