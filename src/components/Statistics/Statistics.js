import "./Statistics.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
} from "recharts";
import { useContext, useState } from "react";
import { ExamCategories } from "../../routes/Main/Main";

const Statistics = () => {
  const examCategory = useContext(ExamCategories);
  const [data, setData] = useState(examCategory);

  return (
    <div>
      <div className="recharts-wrapper" style={{ maxWidth: 500, height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="total" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p className="text-center font-bold">Category Graph by total questions </p>
      </div>
    </div>
  );
};

export default Statistics;
