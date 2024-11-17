import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navLinks = (
    <>
      <li className="px-2">
        <Link to="/" className="text-xl hover:text-yellow-400 transition">
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link to="/menu" className="text-xl hover:text-yellow-400 transition">
          Our Menu
        </Link>
      </li>
      <li className="px-2">
        <Link to="/shop/salad" className="text-xl hover:text-yellow-400 transition">
          Our Shop
        </Link>
      </li>
      {user && isAdmin && (
        <li className="px-2">
          <Link to="/dashboard/adminHome" className="text-xl hover:text-yellow-400 transition">
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li className="px-2">
          <Link to="/dashboard/userHome" className="text-xl hover:text-yellow-400 transition">
            Dashboard
          </Link>
        </li>
      )}
      <li className="px-2">
        <Link to="/dashboard/cart" className="text-xl">
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <span className="badge badge-secondary">{cart.length}</span>
          </div>
        </Link>
      </li>

      {user ? (
        <li className="px-2">
          <button onClick={logOut} className="text-xl hover:text-yellow-400 transition">
            Sign Out
          </button>
        </li>
      ) : (
        <li className="px-2">
          <Link to="/login" className="text-xl hover:text-yellow-400 transition">
            Sign In
          </Link>
        </li>
      )}
      <label className="swap swap-rotate ml-3">
        <input type="checkbox" onChange={handleToggle} />
        <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
          <path d="M5.64,17l-.71.71..." />
        </svg>
        <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
        </svg>
      </label>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50 max-w-screen-xl  lg:px-8">
      <div className="navbar-start">
        <Link to="/" className="font-bold text-2xl text-yellow-500">
          Delicious Restaurant
        </Link>
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3">{navLinks}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <img referrerPolicy="no-referrer" alt="User" src={user?.photoURL} className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
