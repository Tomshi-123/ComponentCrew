// funktioner för export till PDF med jspdf-autotable.

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportDataToPDF(
  headers: string[],
  rows: Array<Array<string | number>>,
  fileName: string = "export.pdf"
) {
  const doc = new jsPDF();

  autoTable(doc, {
    head: [headers],
    body: rows,
  });

  doc.save(fileName);
}
