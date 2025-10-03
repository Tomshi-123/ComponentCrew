import { Box } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useReChartData } from "../hooks/useReChartData";
import { ReChartLegend } from "./ReChartLegend";
import { NEON_GREEN } from "../theme/ColorTheme";
import "@fontsource/orbitron/400.css";

export default function RechartPieChart() {
  const chartData = useReChartData();

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
        border: `1px solid ${NEON_GREEN}`,
        boxShadow: `
          0 0 32px ${NEON_GREEN},    
          0 0 8px ${NEON_GREEN},   
          0 0 6px ${NEON_GREEN}  
        `,
        py: 4.3,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="70%"
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
            content={(props) => (
              <ReChartLegend {...props} chartData={chartData} />
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
