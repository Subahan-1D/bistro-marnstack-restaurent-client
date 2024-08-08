import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        {" "}
        <Link to="/" className="text-2xl text-yellow-400 ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-2xl ml-5">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/shop/salad" className="text-2xl ml-5">
          Our Shop
        </Link>
      </li>
      <li>
        <Link to="/screet" className="text-2xl ml-5">
          Screet
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/" onClick={logOut} className="text-2xl ml-5">
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <Link to="/login" className="text-2xl ml-5 mt-2">
            Login
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black lg:text-white md:text-white sm:text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className=" normal-case text-xl">Bistro Boss</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {/* conditional rendering */}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title={user?.displayName}>
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
