import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-2xl text-yellow-400 "><Link to='/'>Home</Link></li>
      <li className="text-2xl"><Link to='/menu'>Our Menu</Link></li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content shadow  rounded-box z-[1] mt-3 w-52 p-2 "
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl">
            Bistro Boss <br /> Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
