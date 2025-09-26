import { useMemo } from "react";
import { Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTableData } from "../hooks/useTableData";
import "@fontsource/orbitron/400.css";

export default function RechartPieChart() {
  const { tableData } = useTableData();

  // Fasta neonfärger per mineral
  const mineralColors: Record<string, string> = {
    Aetherium: "rgba(239, 115, 255, 1)",
    Lunarium: "rgba(0, 81, 255, 1)",
    Solenite: "rgba(0, 170, 255, 1)",
    Nebrillium: "rgba(0, 255, 242, 1)",
  };

  const chartData = useMemo(() => {
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
      color: mineralColors[label] ?? "rgba(255,255,255,1)", // vit för nya mineraler
    }));
  }, [tableData]);

  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "35%",
        height: "90%",
      }}
    >
      <PieChart width={500} height={500}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={6}
          cornerRadius={6}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={index}
              fill="transparent"
              stroke={entry.color}
              strokeWidth={4}
              style={{
                filter: `drop-shadow(0 0 20px ${entry.color}) drop-shadow(0 0 30px ${entry.color})`,
              }}
            />
          ))}
        </Pie>

        <Tooltip />

        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="square"
          wrapperStyle={{ fontFamily: "orbitron", fontSize: 16 }}
          content={(props) => {
            const { payload } = props;
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {payload?.map((entry: any, index: number) => {
                  const color =
                    chartData.find((d) => d.name === entry.value)?.color ??
                    "rgba(255,255,255,1)";
                  return (
                    <div
                      key={`item-${index}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "0 8px",
                        fontFamily: "orbitron",
                        fontSize: 16,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 16,
                          height: 16,
                          backgroundColor: color,
                          marginRight: 6,
                        }}
                      />
                      {entry.value}
                    </div>
                  );
                })}
              </div>
            );
          }}
        />
      </PieChart>
    </Box>
  );
}
