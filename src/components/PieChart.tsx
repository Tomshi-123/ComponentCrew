import { useMemo } from "react";
import { Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { useTableData } from "../hooks/useTableData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "@fontsource/orbitron/400.css";

// Registrera Chart.js-elementen
ChartJS.register(ArcElement, Tooltip, Legend);

export default function MineralPieChart() {
  const { tableData } = useTableData();

  // Summera mängder per mineral
  const chartData = useMemo(() => {
    const totals = tableData.reduce((acc: Record<string, number>, row) => {
      const mineral = row.mineral?.trim() || "Okänt";
      const amount = Number(row.amount) || 0;

      if (amount > 0) acc[mineral] = (acc[mineral] || 0) + amount;
      return acc;
    }, {});

    const labels = Object.keys(totals);
    const data = Object.values(totals);

    // Om ingen data finns, visa ett dummyvärde för att undvika fel i PieChart
    if (labels.length === 0) {
      labels.push("Ingen data");
      data.push(1);
    }

    return {
      labels,
      datasets: [
        {
          label: "Samlad mängd",
          data,
          backgroundColor: ["transparent"],
          borderColor: [
            "rgba(57, 255, 20, 1)",
            "rgba(255, 7, 58, 1)",
            "rgba(0, 255, 255, 1)",
            "rgba(255, 0, 255, 1)",
            "rgba(255, 211, 0, 1)",
            "rgba(0, 191, 255, 1)",
          ],
          borderWidth: 3,
          borderRadius: 6,
          spacing: 10,
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
      <Doughnut
        data={chartData}
        height={500}
        width={500}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: 30,
          },
          plugins: {
            legend: {
              position: "right",
              labels: {
                font: {
                  family: "orbitron",
                  size: 16,
                },
                padding: 20,
              },
            },
            tooltip: {
              padding: 12,
            },
          },
        }}
      />
    </Box>
  );
}
