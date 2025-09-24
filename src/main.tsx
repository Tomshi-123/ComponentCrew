import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { TableDataProvider } from "./context/TableDataProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TableDataProvider>
      <App />
    </TableDataProvider>
  </StrictMode>
);
