import Layout from "./layout/Layout";
import DataTable from "./components/DataTable";
import ExportButton from "./components/ExportButton";

import "./App.css";

function App() {
  return (
    <Layout>
      <DataTable />
      <ExportButton />
    </Layout>
  );
}

export default App;
