import { useState } from "react";
import Layout from "./layout/Layout";
import DataTable from "./components/DataTable";
import FileImport from "./components/FileImport";
import ExportButton from "./components/ExportButton";
import type { TableData } from "./types/Types";
import "./App.css";

function App() {
  const [tabledata, setTableData] = useState<TableData>([]);

  return (
    <Layout>
      <DataTable data={tabledata} setData={setTableData} />
      <ExportButton />
    </Layout>
  );
}

export default App;
