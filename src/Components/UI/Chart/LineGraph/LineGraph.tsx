import { XAxis, AreaChart, YAxis, Area, ResponsiveContainer } from "recharts";
import GraphFilter from "../GraphFilter/GraphFilter";
import "../Chart.scss";

const LineGraph = () => {
  const data = [
    {
      name: "1Mar",
      uv: 400,
      amt: 800,
    },
    {
      name: "2Mar",
      uv: 250,
      amt: 800,
    },
    {
      name: "3Mar",
      uv: 800,
      amt: 800,
    },
    {
      name: "4Mar",
      uv: 150,
      amt: 800,
    },
    {
      name: "5Mar",
      uv: 650,
      amt: 800,
    },
    {
      name: "6Mar",
      uv: 700,
      amt: 800,
    },
    {
      name: "7Mar",
      uv: 500,
      amt: 800,
    },
    {
      name: "8Mar",
      uv: 100,
      amt: 800,
    },
    {
      name: "9Mar",
      uv: 350,
      amt: 800,
    },
    {
      name: "10Mar",
      uv: 425,
      amt: 800,
    },
    {
      name: "11Mar",
      uv: 750,
      amt: 800,
    },
    {
      name: "12Mar",
      uv: 200,
      amt: 800,
    },
  ];
  return (
    <div className="chart-graph">
      <GraphFilter />
      <div className="chart-graph__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, bottom: -10 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  // stopColor="rgba(2, 2, 204, 0.4)"
                  stopColor="rgba(0, 0, 0, 0.4)"
                  stopOpacity={0.7}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(2, 2, 204, 0)"
                  stopOpacity={0.15}
                />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" />
            <YAxis />
            <Area
              type="linear"
              dataKey="uv"
              // stroke="rgba(2, 2, 204, 1)"
              stroke="#000000"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
