import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/system";
import { useTableData } from "../hooks/useTableData";
import { useTableColumns } from "../hooks/useTableColumns";
import { GLOW_PURPLE, NEON_PURPLE } from "../theme/ColorTheme";
import {
  paperProps,
  topToolbarProps,
  searchTextFieldProps,
  tableContainerProps,
  tableHeadProps,
  tableHeadCellProps,
  tableBodyRowProps,
  tableBodyCellProps,
  bottomToolbarProps,
} from "../theme/DataTableStyles";

export default function DataTable() {
  const { tableData: data, setTableData } = useTableData();
  const columns = useTableColumns(data);

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    initialState: { density: "compact" },

    onEditingRowSave: async ({ values, row }) => {
      const updatedData = [...data];
      updatedData[row.index] = values;
      setTableData(updatedData);
    },

    // Styling
    muiTablePaperProps: paperProps,
    muiTopToolbarProps: topToolbarProps,
    muiSearchTextFieldProps: searchTextFieldProps,
    muiTableContainerProps: tableContainerProps,
    muiTableHeadProps: tableHeadProps,
    muiTableHeadCellProps: tableHeadCellProps,
    muiTableBodyRowProps: tableBodyRowProps,
    muiTableBodyCellProps: tableBodyCellProps,
    muiBottomToolbarProps: bottomToolbarProps,
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        padding: "1rem",
        border: `1px solid ${NEON_PURPLE}`,
        boxShadow: `
        0 0 18px ${GLOW_PURPLE},     
        0 0 8px ${GLOW_PURPLE},   
        0 0 6px ${GLOW_PURPLE}
      `,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
}
