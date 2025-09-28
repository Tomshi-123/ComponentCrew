import Layout from "./layout/Layout";
import ExportButton from "./components/ExportButton";
import Main from "./components/Main";

import "./App.css";

function App() {
  return (
    <Layout>
      <Main />
      <ExportButton />
    </Layout>
  );
}

export default App;
