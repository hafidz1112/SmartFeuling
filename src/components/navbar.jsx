// src/component/Navbar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Bell, ChevronRight, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const dateStr = date.toLocaleDateString("en-US", dateOptions);
    const timeStr = date.toLocaleTimeString("en-US", timeOptions);

    return `${dateStr} at ${timeStr}`;
  };

  return (
    <header
      className={`flex justify-between items-center px-4 lg:px-6 ${
        darkMode
          ? "bg-slate-900 border-slate-800 text-slate-100"
          : "bg-white border-gray-200 text-gray-800"
      } border-b sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex items-center">
        <img src="/images/logo.png" alt="logo" className="w-[80px]" />
        <h1 className="text-xl font-bold hidden lg:block">Smart Fueling Verification System</h1>
        <button
          className="p-2 text-xl font-bold lg:hidden dark:text-slate-100"
          onClick={() => setSidebarOpen(!sidebarOpen)} // ✅ toggle buka/tutup
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-[8px] lg:text-sm font-bold hidden lg:block">
          {formatDate(currentDate)}
        </span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-colors duration-200 ${
            darkMode
              ? "bg-slate-800 text-yellow-500 hover:bg-slate-700"
              : "bg-gray-100 text-slate-600 hover:bg-gray-200"
          }`}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 relative">
          <Bell size={20} />
          {/* Notification Badge */}
          <span className="absolute top-1 animate-ping right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            A
          </div>
          <span className="hidden lg:block">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
