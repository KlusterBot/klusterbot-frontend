import {
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }: any) => {
  const data = active && payload?.[0].payload;
  return (
    active && (
      <div className="bg-white p-2 shadow-lg rounded-md text-center">
        <p>{data.day}</p>
        <p>{data.conversations}</p>
      </div>
    )
  );
};

const ConversationsChart = () => {
  const chartData = [
    {
      day: "Nov 23",
      conversations: "12",
    },
    {
      day: "Nov 24",
      conversations: "31",
    },
    {
      day: "Nov 25",
      conversations: "10",
    },
    {
      day: "Nov 26",
      conversations: "1",
    },
    {
      day: "Nov 27",
      conversations: "10",
    },
    {
      day: "Nov 28",
      conversations: "35",
    },
    {
      day: "Nov 29",
      conversations: "50",
    },
  ];
  return (
    <div className="">
      <header className="pb-2">
        <p>Conversations</p>
        <div>
          <div className="flex"></div>
        </div>
      </header>
      <ResponsiveContainer height={250} className="text-[.7rem]">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 25,
            left: -40,
            bottom: -10,
          }}
        >
          <p>On average</p>
          <XAxis dataKey={"day"} />
          <YAxis type="number" tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="conversations"
            stroke="#153ABA"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConversationsChart;
