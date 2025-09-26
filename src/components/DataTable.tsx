import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box } from "@mui/system";
import "@fontsource/orbitron/400.css";
import type { TableData } from "../types/Types";
import ReChart from "./ReChart";
import SolarSystem from "./SolarSystem";
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
  const NEON_GREEN = "#00ff00";
  const UNIFIED_BG = "#001428cb";
  const DARK_BG = "#001a33";

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,

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
        backgroundColor: "transparent",
        boxShadow: "none",
        color: NEON_BLUE,
      },
    },

    muiTopToolbarProps: {
      sx: {
        backgroundColor: DARK_BG,
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    muiSearchTextFieldProps: {
      sx: {
        "& .MuiInputBase-root": { backgroundColor: DARK_BG, color: NEON_BLUE },
        "& .MuiInputLabel-root": { color: NEON_BLUE },
      },
    },

    muiTableContainerProps: {
      sx: {
        backgroundColor: "transparent",
        maxHeight: "50vh",
        overflow: "auto",
        "&::-webkit-scrollbar": { width: "8px", height: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `${NEON_BLUE}55`,
          borderRadius: "4px",
        },
      },
    },

    muiTableHeadProps: {
      sx: { backgroundColor: DARK_BG },
    },

    muiTableHeadCellProps: {
      sx: {
        color: NEON_BLUE,
        fontSize: "1rem",
        fontWeight: "bold",
        borderBottom: `3px solid ${NEON_BLUE}`,
        backgroundColor: DARK_BG,
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    muiTableBodyRowProps: {
      sx: {
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: `${NEON_BLUE}15` },
      },
    },

    muiTableBodyCellProps: {
      sx: {
        color: NEON_GREEN,
        fontSize: "0.95rem",
        borderBottom: `1px solid ${NEON_GREEN}30`,
        "& .MuiSvgIcon-root": { color: NEON_BLUE },
      },
    },

    // =========================================================
    // FOOTER & PAGINATION FIX
    // =========================================================
    muiBottomToolbarProps: {
      sx: {
        backgroundColor: DARK_BG,
        // Footern
        "& .MuiTablePagination-root": { backgroundColor: DARK_BG },
        "& .MuiTablePagination-toolbar": { backgroundColor: DARK_BG },
        "& .MuiTablePagination-spacer": { backgroundColor: DARK_BG },
        "& .MuiTablePagination-caption": { color: NEON_BLUE }, // Rows per page text
        "& .MuiSelect-select": { color: NEON_BLUE }, // dropdown number
        "& .MuiSvgIcon-root": { color: NEON_BLUE }, // dropdown arrow
        // Dropdown menu items
        "& .MuiMenu-paper": {
          backgroundColor: DARK_BG,
          "& .MuiMenuItem-root": { color: NEON_BLUE },
        },
      },
    },
  });

  const mainContent =
    data.length > 0 ? (
      <>
        <Box
          sx={{
            width: { xs: "95%", md: "55%" },
          }}
        >
          <MaterialReactTable table={table} />
        </Box>
        <ReChart />
      </>
    ) : (
      <SolarSystem
        isAnimating={false}
        text={"Ingen data uppladdad ännu"}
        durationMs={0}
      />
    );

  return (
    <Box
      sx={{
        backgroundColor: UNIFIED_BG,
        width: { xs: "84%", md: "90%" },
        minHeight: "60vh",
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        color: "white",
        flexDirection: { xs: "column", md: "row" },
        display: "flex",
        justifyContent: data.length > 0 ? "space-between" : "center",
        alignItems: "center",

        padding: data.length > 0 ? "2rem" : 0,
        position: "relative",
        overflow: "auto",
      }}
    >
      {mainContent}
    </Box>
  );
}
