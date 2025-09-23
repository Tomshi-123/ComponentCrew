import type { TableData } from "../types/Types";
import { Box } from "@mui/system";
import "@fontsource/orbitron/400.css";
import { Typography } from "@mui/Material";

type DataTableProps = {
  data: TableData;
  setData: React.Dispatch<React.SetStateAction<TableData>>;
};

export default function DataTable() {
  // → Tar emot den parsade datan och visar i Material React Table.
  // → Hanterar inline-redigering.

  return (
    <Box
      sx={{
        backgroundColor: "#001428cb",
        width: "95%",
        height: "60vh",
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "orbitron" }}>
        {" "}
        Table data here...
      </Typography>
    </Box>
  );
}
