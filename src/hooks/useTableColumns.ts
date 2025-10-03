import { useMemo } from "react";
import type { MRT_ColumnDef } from "material-react-table";
import type { TableData } from "../types/Types";

//Genererar kolumner baserat på datans keys.
// Returnerar en tom array om ingen data finns.

export function useTableColumns(data: TableData) {
  return useMemo<MRT_ColumnDef<TableData[number]>[]>(() => {
    if (!data || data.length === 0) return [];

    return Object.keys(data[0]).map((key) => ({
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1),
      size: 150,
    }));
  }, [data]);
}
