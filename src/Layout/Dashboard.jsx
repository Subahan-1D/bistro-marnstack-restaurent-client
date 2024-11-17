import { BsShop } from "react-icons/bs";
import {
  FaHome,
  FaList,
  FaShoppingCart,
  FaStreetView,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMenuOpen, MdOutlineEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-64 w-16 bg-orange-600 text-white p-4 space-y-6 shadow-xl transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <FaUtensils size={28} />
          <span className="text-2xl font-semibold hidden lg:block">Restaurant</span>
        </div>

        {/* Sidebar links */}
        <ul className="space-y-4 text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaHome size={20} />
                  <span className="hidden lg:block">Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaUtensils size={20} />
                  <span className="hidden lg:block">Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaList size={20} />
                  <span className="hidden lg:block">Manage Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaUsers size={20} />
                  <span className="hidden lg:block">All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaHome size={20} />
                  <span className="hidden lg:block">User Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaShoppingCart size={20} />
                  <span className="hidden lg:block">My Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaStreetView size={20} />
                  <span className="hidden lg:block">Add Review</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
                >
                  <FaList size={20} />
                  <span className="hidden lg:block">Payment History</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Nav Links */}
          <div className="divider my-4 border-gray-300"></div>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
            >
              <FaHome size={20} />
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
            >
              <MdMenuOpen size={20} />
              <span className="hidden lg:block">Our Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/salad"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
            >
              <BsShop size={20} />
              <span className="hidden lg:block">Our Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/contact"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-lg transition-all duration-300"
            >
              <MdOutlineEmail size={20} />
              <span className="hidden lg:block">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="lg:hidden absolute top-4 right-4">
        <button className="text-white text-3xl">
          <MdMenuOpen />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
