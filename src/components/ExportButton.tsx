import type { TableData } from "../types/Types";

type ButtonProps = {
  data: TableData;
};

export default function Button({ data }: ButtonProps) {
  // Knapp för export till PDF
  // och eventuellt till Ecxel
  // Använder funktioner från /utils/pdfUtils.ts och /utils/excelUtils.ts.

  return <div></div>;
}
