import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl ">
        <span className="font-mono">Hi , Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="stats shadow mt-5">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title text-center text-2xl">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title text-center text-2xl">Users</div>
          <div className="stat-value text-center">{stats.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-center text-2xl">Menu Items</div>
          <div className="stat-value text-center">{stats.menuItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title text-center text-2xl">Orders</div>
          <div className="stat-value text-center">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
