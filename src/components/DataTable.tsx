import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box } from "@mui/system";
import "@fontsource/orbitron/400.css";
import type { TableData } from "../types/Types";

import { useTableData } from "../hooks/useTableData";

export default function DataTable() {
  const { tableData: data, setTableData: setData } = useTableData();

  const columns: MRT_ColumnDef<TableData[number]>[] =
    data && data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          accessorKey: key,
          header: key.charAt(0).toUpperCase() + key.slice(1),
          size: 150,
        }))
      : [];

  const NEON_BLUE = "#00ffff";
  const NEON_GREEN = "#45ffaeff";

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    initialState: {
      density: "compact",
    },

    onEditingRowSave: async ({ values, row }) => {
      const updatedData = [...data];
      updatedData[row.index] = values;
      setData(updatedData);
    },

    // =========================================================
    // STYLING
    // =========================================================
    muiTablePaperProps: {
      sx: {
        backgroundColor: "black",
        boxShadow: "none",
        color: NEON_BLUE,
        border: `3px solid ${NEON_BLUE}`,
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
    },

    muiTopToolbarProps: {
      sx: {
        border: `1px solid ${NEON_BLUE}`,
        backgroundColor: "black",
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    muiSearchTextFieldProps: {
      inputProps: { style: { color: NEON_BLUE } },
      InputProps: {
        sx: {
          "& .MuiInputBase-input": { color: NEON_BLUE + " !important" },
        },
      },
      sx: {
        "& .MuiInputBase-root": {
          backgroundColor: "black",
        },
        "& input": {
          color: NEON_BLUE + " !important",
        },
        "& input::placeholder": {
          color: NEON_BLUE + " !important",
          opacity: 0.6,
        },
        "& .MuiInputLabel-root": { color: NEON_BLUE },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: NEON_BLUE,
        },
      },
    },

    muiTableContainerProps: {
      sx: {
        backgroundColor: "black",
        flex: 1,
        minHeight: 0, // så att flexbox shrink funkar
        overflow: "auto", // både x och y scroll vid behov
        "&::-webkit-scrollbar": { width: "8px", height: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "white",
          borderRadius: "4px",
        },
      },
    },

    muiTableHeadProps: { sx: { backgroundColor: "black" } },

    muiTableHeadCellProps: {
      sx: {
        color: NEON_BLUE,
        fontFamily: "orbitron",
        fontSize: "1rem",
        borderBottom: `3px solid ${NEON_BLUE}`,
        backgroundColor: "black",
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    muiTableBodyRowProps: {
      sx: {
        backgroundColor: "black",
        "&:hover": { backgroundColor: `${NEON_BLUE}15` },
      },
    },

    muiTableBodyCellProps: {
      sx: {
        color: NEON_GREEN,
        fontFamily: "monospace",
        fontSize: "0.95rem",
        borderBottom: `1px solid rgba(17, 168, 250, 0.34)`,
        backgroundColor: "black",
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    // =========================================================
    // FOOTER & PAGINATION FIX
    // =========================================================
    muiBottomToolbarProps: {
      sx: {
        backgroundColor: "black",
        "& .MuiTablePagination-caption": { color: "white !important" },
        "& .MuiTablePagination-selectLabel": { color: "white !important" },
        "& .MuiTablePagination-displayedRows": {
          color: NEON_BLUE + " !important",
        },
        "& .MuiTypography-root": { color: "white" },
        "& .MuiSelect-select": { color: NEON_BLUE },
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
        "& .MuiMenu-paper": {
          backgroundColor: "black",
          "& .MuiMenuItem-root": { color: NEON_BLUE },
        },
      },
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // Tabell tar upp 80% av viewport height
        borderRadius: "20px",
        padding: "1rem",
        border: `3px solid ${NEON_BLUE}`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // håller tabellen inom boxen
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
}
