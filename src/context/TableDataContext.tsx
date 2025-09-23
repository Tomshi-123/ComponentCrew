import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { TableData } from "../types/Types";

// Typ för Context
type TableDataContextType = {
  tableData: TableData;
  setTableData: (data: TableData) => void;
};

// Skapa context
const TableDataContext = createContext<TableDataContextType | undefined>(
  undefined
);

// Provider-komponent
export function TableDataProvider({ children }: { children: ReactNode }) {
  const [tableData, setTableData] = useState<TableData>([]);
  return (
    <TableDataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </TableDataContext.Provider>
  );
}

// Hook för enklare åtkomst
export function useTableData() {
  const context = useContext(TableDataContext);
  if (!context)
    throw new Error("useTableData must be used within a TableDataProvider");
  return context;
}
