import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Search, Heart, Bell, ShoppingCart } from "lucide-react";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-neutral-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12M6 6v12M18 6v12"
              />
            </svg>
            <span className="font-medium text-lg">Library</span>
          </NavLink>
        </div>

        <div className="mx-6 hidden md:flex">
          <div className="relative w-120 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for the book you want and read"
              className="w-full rounded-md bg-neutral-800 pl-9 pr-4 py-2 text-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavLink
                to="/orders"
                className="hover:text-gray-300 transition-colors"
              >
                Orders
              </NavLink>
              <Heart className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <Bell className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <Logout />
            </>
          ) : (
            <>
              <NavLink
                to="/users/login"
                className="hover:text-gray-300 transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/users/signup"
                className="btn-primary"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
