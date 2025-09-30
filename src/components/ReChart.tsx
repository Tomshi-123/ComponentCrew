import { useMemo } from "react";
import { Box } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTableData } from "../hooks/useTableData";
import "@fontsource/orbitron/400.css";

const mineralColors: Record<string, string> = {
  Aetherium: "rgba(239, 115, 255, 1)",
  Lunarium: "rgba(0, 81, 255, 1)",
  Solenite: "rgba(0, 170, 255, 1)",
  Nebrillium: "rgba(0, 255, 242, 1)",
};

export default function RechartPieChart() {
  const { tableData } = useTableData();

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
      color: mineralColors[label] ?? "rgba(255,255,255,1)",
    }));
  }, [tableData]);

  return (
  <Box
    sx={{
      width: "100%",
      height: { xs: 350, sm: 400, md: 450, lg: 500 },
      borderRadius: "20px",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #45ffaeff",
      
      boxShadow: `
        0 0 10px #45bbff9d,       /* Liten och skarp glöd */
        0 0 20px #45ffaedc,       /* Medelstor glöd */
        0 0 40px rgba(162, 0, 255, 1) /* Stor och diffus glöd */
      `,
      
      py: 4.7,
    }}
  >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={"40%"}
            outerRadius={"70%"}
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
                  filter: `
                    drop-shadow(0 0 15px ${entry.color})
                    drop-shadow(0 0 25px ${entry.color})
                    drop-shadow(0 0 35px ${entry.color})
                  `,
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
            wrapperStyle={{
              fontFamily: "orbitron",
              fontSize: "16px",
              paddingTop: 10,
            }}
            content={(props: any) => {
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
                      chartData.find((d) => d.name === entry.payload.name)
                        ?.color ?? "rgba(255,255,255,1)";
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          margin: "4px 8px",
                          fontFamily: "orbitron",
                          fontSize: 16,
                          color: "white",
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
                        {entry.payload.name}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
