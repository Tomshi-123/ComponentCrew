// import type { TableData } from "../types/Types";
import { Box, Button } from "@mui/Material";

// type ButtonProps = {
//  data: TableData;
//  onClick: () => void;
// };

export default function ExportButton() {
  // Knapp för export till PDF
  // och eventuellt till Ecxel
  // Använder funktioner från /utils/pdfUtils.ts och /utils/excelUtils.ts.

  return (
    // Enkel behållare för layout med Material-UI
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 4,
      }}
    >
      <Button
        variant="contained"
        component="span"
        sx={{
          background: "transparent",
          border: "1px solid green",
          borderRadius: "10px",
        }}
      >
        Expport to PDF
      </Button>
    </Box>
  );
}
