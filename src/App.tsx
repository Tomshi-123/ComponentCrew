import Layout from "./layout/Layout";
import DataTable from "./components/DataTable";
import ExportButton from "./components/ExportButton";
import { useTableData } from "./hooks/useTableData";
import "./App.css";

function App() {
  const { tableData, setTableData } = useTableData();

  console.log("ExportButton rendered, data length:", tableData.length);
  return (
    <Layout>
      <DataTable data={tableData} setData={setTableData} />
      <ExportButton
        data={tableData}
        onClick={() => console.log("Exported to PDF")}
      />
    </Layout>
  );
}

export default App;
