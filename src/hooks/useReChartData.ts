import { useMemo } from "react";
import { useTableData } from "./useTableData";
import { mineralColors } from "../theme/MineralColors";

export function useReChartData() {
  const { tableData } = useTableData();

  return useMemo(() => {
    const totals = tableData.reduce((acc: Record<string, number>, row) => {
      const mineral = row.mineral?.trim() || "Okänt";
      const amount = Number(row.amount) || 0;
      if (amount > 0) acc[mineral] = (acc[mineral] || 0) + amount;
      return acc;
    }, {});

    const labels = Object.keys(totals);
    const data = Object.values(totals);

    if (labels.length === 0) {
      labels.push("Ingen data");
      data.push(1);
    }

    return labels.map((label, index) => ({
      name: label,
      value: data[index],
      color: mineralColors[label] ?? "rgba(101, 247, 238, 1)",
    }));
  }, [tableData]);
}
