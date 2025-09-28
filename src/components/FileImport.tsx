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
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mx: 3,
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
          variant="outlined"
          component="span"
          sx={{
            marginTop: "1rem",
            position: "relative",
            overflow: "hidden",
            border: "2px solid #00ffff",
            borderRadius: "10px",
            color: "#00ffff",
            background: "transparent",
            fontFamily: "orbitron",
            fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
            zIndex: 1,
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "0%",
              height: "100%",
              background: "linear-gradient(90deg, #00ffff 0%, #00aaff 100%)",
              transition: "width 0.5s ease",
              zIndex: -1,
            },
            "&:hover::before": {
              width: "100%",
            },
            "&:hover": {
              color: "black",
              boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
            },
          }}
        >
          Upload Excel
        </Button>
      </label>
    </Box>
  );
}
