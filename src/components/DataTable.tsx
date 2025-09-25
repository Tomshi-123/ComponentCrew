
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box } from "@mui/system";
import "@fontsource/orbitron/400.css";
import type { TableData } from "../types/Types";
import PieChart from "./PieChart";
import SolarSystem from "./SolarSystem";
import { useTableData } from "../hooks/useTableData"; 


export default function DataTable() {
  

  const { tableData: data, setTableData: setData } = useTableData(); 

  const columns: MRT_ColumnDef<TableData[number]>[] =
    data && data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          accessorKey: key, 
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
    },
  });


  const mainContent = data.length > 0 ? (
    <>
      <MaterialReactTable table={table} />
      <PieChart />
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
        backgroundColor: "#001428cb",
        width: "95%",
        height: "60vh",
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {data.length > 0 ? (
        <MaterialReactTable table={table} />
      ) : (
        <Typography sx={{ fontFamily: "orbitron", textAlign: "center", mt: 4 }}>
          Ingen data uppladdad ännu
        </Typography>
      )}

      <PieChart />
    </Box>
  );
}