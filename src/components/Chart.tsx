import { useMemo } from "react";
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { useTableData } from "../hooks/useTableData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrera Chart.js-elementen
ChartJS.register(ArcElement, Tooltip, Legend);

export default function MineralPieChart() {
  const { tableData } = useTableData();

  // Summera mängder per mineral
  const chartData = useMemo(() => {
    const totals: Record<string, number> = {};

    tableData.forEach((row) => {
      const mineral = row["mineral"]; // column "mineral" i excelfil
      const amount = Number(row["amount"]) || 0; // column "amount" i excelfil
      if (totals[mineral]) {
        totals[mineral] += amount; // om mineralen redan finns  plussa bara på amount
      } else {
        totals[mineral] = amount; // Om mineralen inte finns, lägg till och lägg till amount
      }
    });

    return {
      labels: Object.keys(totals),
      datasets: [
        {
          label: "Samlad mängd",
          data: Object.values(totals),
          backgroundColor: [
            "rgba(57, 255, 20, 0.7)",
            "rgba(255, 7, 58, 0.7)",
            "rgba(0, 255, 255, 0.7)",
            "rgba(255, 0, 255, 0.7)",
            "rgba(255, 211, 0, 0.7)",
            "rgba(0, 191, 255, 0.7)",
          ],
          borderColor: [
            "rgba(57, 255, 20, 1)",
            "rgba(255, 7, 58, 1)",
            "rgba(0, 255, 255, 1)",
            "rgba(255, 0, 255, 1)",
            "rgba(255, 211, 0, 1)",
            "rgba(0, 191, 255, 1)",
          ],
          borderWidth: 3,
        },
      ],
    };
  }, [tableData]);

  return (
    <Box
      sx={{
        backgroundColor: "#0A0A0A",
        padding: "2rem",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        height: "500px",
        margin: "0 auto",
      }}
    >
      <Pie data={chartData} />
    </Box>
  );
}
