import React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box } from "@mui/system";
import "@fontsource/orbitron/400.css";
import { Typography } from "@mui/material";
import type { TableData } from "../types/Types";

type DataTableProps = {
  data: TableData;
  setData: React.Dispatch<React.SetStateAction<TableData>>;
};

export default function DataTable({ data, setData }: DataTableProps)   {

  const columns : MRT_ColumnDef<TableData[number]>[] = 
    data && data.length > 0
    ? Object.keys(data[0]).map((key) => ({
      accessoryKey: key,
      header: key.toUpperCase() + key.slice(1),
      size: 150,
    }))
    : [];

    const table = useMaterialReactTable({
      columns,
      data,
      enableEditing: true,
      onEditingRowSave: async ({ values, row }) => {
        const updatedData = [...data];
        updatedData[row.index] = values;
        setData(updatedData);
      } 
    })

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
      <Typography variant="h5" sx={{ fontFamily: "orbitron", mb: 2 }}>
        Excel Data
      </Typography>
      {data.length > 0 ? (
        <MaterialReactTable table={table} />
      ) : (
        <Typography sx={{ textAlign: "center", mt: 4 }}>
          Ingen data uppladdad ännu
        </Typography>
      )}
    </Box>
  );
}
