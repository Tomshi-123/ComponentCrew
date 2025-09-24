import { createContext } from "react";

import type { TableData } from "../types/Types";

// Typ för Context
type TableDataContextType = {
  tableData: TableData;
  setTableData: (data: TableData) => void;
};

// Skapa context
export const TableDataContext = createContext<TableDataContextType | undefined>(
  undefined
);
