import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Search, Heart, Bell, ShoppingCart } from "lucide-react";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-[#292828] text-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-white"
              fill="none"
            >
              <path d="M1.5,3.41V16.77H9.14A2.86,2.86,0,0,1,12,19.64V6.27A2.86,2.86,0,0,0,9.14,3.41Z" />
              <path d="M22.5,3.41V16.77H14.86A2.86,2.86,0,0,0,12,19.64V6.27a2.86,2.86,0,0,1,2.86-2.86Z" />
              <polyline points="22.5 16.77 22.5 20.59 14.86 20.59 9.14 20.59 1.5 20.59 1.5 16.77" />
            </svg>

            <span className="font-medium text-lg">Library</span>
          </NavLink>
        </div>

    <div className="w-full md:w-auto md:flex mx-0 md:mx-6 my-2 md:my-0">
      <div className="relative w-full max-w-md md:w-120">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for the book you want and read"
          className="w-full rounded-md bg-[#373737] pl-9 pr-4 py-2 text-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavLink
                to="/admin"
                className="hover:text-gray-300 transition-colors"
              >
                Admin
              </NavLink>
              <Heart className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <Bell className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-gray-300" />
              <Logout />
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="hover:text-gray-300 transition-colors"
              >
                Login
              </NavLink>
              <NavLink to="/auth/signup" className="hover:text-gray-300 transition-colors">
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
