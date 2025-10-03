export function ReChartLegend({ payload, chartData }: any) {
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
          chartData.find((d) => d.name === entry.payload.name)?.color ??
          "rgba(255,255,255,1)";
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
}
