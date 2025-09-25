import { useState } from "react";
import type { ReactNode } from "react";
import type { TableData } from "../types/Types";
import { TableDataContext } from "./TableDataContext";

export function TableDataProvider({ children }: { children: ReactNode }) {
  const [tableData, setTableData] = useState<TableData>([]);
  return (
    <TableDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </TableDataContext.Provider>
  );
}
