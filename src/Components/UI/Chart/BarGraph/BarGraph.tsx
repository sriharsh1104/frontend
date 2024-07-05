import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GraphFilter from "../GraphFilter/GraphFilter";
import "../Chart.scss";

const BarGraph = () => {
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
          <BarChart data={data} margin={{ left: -10, bottom: -10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
            <Tooltip />

            <Bar
              dataKey="uv"
              // fill="rgba(2, 2, 204, 1)"
              fill="#000000"
              background={{ fill: "rgba(233, 236, 241, 1)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraph;
