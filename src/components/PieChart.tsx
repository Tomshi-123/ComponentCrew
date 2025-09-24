import { useMemo } from "react";
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { useTableData } from "../hooks/useTableData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "@fontsource/orbitron/400.css";

// Registrera Chart.js-elementen
ChartJS.register(ArcElement, Tooltip, Legend);

export default function MineralPieChart() {
  const { tableData } = useTableData();

  // Summera mängder per mineral
  const chartData = useMemo(() => {
    const totals: Record<string, number> = {};

    tableData.forEach((row) => {
      const mineral = row.mineral; // kolumnindex för "Mineral"
      const amount = row.amount || 0; // kolumnindex för "Mängd"

      if (totals[mineral]) {
        totals[mineral] += amount;
      } else {
        totals[mineral] = amount;
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
        width: "40%",
        height: "90%",
      }}
    >
      <Pie
        data={chartData}
        height={500}
        width={500}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: 30, // mer padding runt hela diagrammet
          },
          plugins: {
            legend: {
              position: "right",
              labels: {
                font: {
                  family: "orbitron",
                  size: 16,
                },
                padding: 50, // mer mellanrum mellan cirkeln och legend
              },
            },
            tooltip: {
              padding: 12, // ökar “luften” inuti tooltip
            },
          },
        }}
      />
    </Box>
  );
}
