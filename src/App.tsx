import { useState } from "react";
import Layout from "./layout/Layout";
import Table from "./components/DataTable";
import FileImport from "./components/FileImport";
import ExportButton from "./components/ExportButton";
import type { TableData } from "./types/Types";

function App() {
  const [tabledata, setTableData] = useState<TableData>([]);

  return (
    <Layout>
      <FileImport onDataLoaded={setTableData} />
      <Table data={tabledata} setData={setTableData} />
      <ExportButton data={tabledata} />
    </Layout>
  );
}

export default App;
