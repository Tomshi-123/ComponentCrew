import type { TableData } from "../types/Types";

type DataTableProps = {
  data: TableData;
  setData: React.Dispatch<React.SetStateAction<TableData>>;
};

export default function DataTable({ data, setData }: DataTableProps) {
  // → Tar emot den parsade datan och visar i Material React Table.
  // → Hanterar inline-redigering.

  return <div></div>;
}
