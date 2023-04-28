import "../App.css";
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const name = useSelector((state) => state.profile.name);
  const isProf = useSelector((state) => state.profile.is_faculty);

  return (
    <nav className="bg-gray-800 drop-shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="inline-flex items-center justify-center">
                <div className="w-10 h-10 rounded-full ring-2 ring-white">
                  <img
                    className="w-full h-full rounded-full"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-3 relative text-white">
              Welcome, {name}
            </div>
            {!isProf ? (<Link
              to="/enroll"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Enroll
            </Link>) :
            (<Link
              to="/create-course"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Course
            </Link>)}
            <button
              onClick={handleLogout}
              className="ml-4 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
