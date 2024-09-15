import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserHome = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const axiosPublic = useAxiosPublic();
  const { data: stats = [] } = useQuery({
    queryKey: ["users-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stat"],
    queryFn: async () => {
      const res = await axiosPublic.get("/order-stat");
      return res.data;
    },
  });

  // custom shape for the bar chat
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div className="font-lato">
      <h2 className="text-3xl ">
        <span className="font-mono text-red-600">Hi , Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="stats shadow mt-5 mr-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title text-center text-xl">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShoppingCart className="text-4xl"></FaShoppingCart>
          </div>
          <div className="stat-title text-center text-2xl">My Cart</div>
          <div className="stat-value text-center">{cart.length}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title text-center text-2xl">Orders</div>
          <div className="stat-value text-center">{stats.orders}</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={300} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
