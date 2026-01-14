// src/component/Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ darkMode, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className={`flex justify-between items-center px-4 lg:px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} bg-white border-b border-gray-200 sticky top-0 z-50`}>
      <div className="flex items-center">
        <img src="/images/logo.png" alt="logo" className='w-[80px]'/>
        <button
        className='p-2 text-xl font-bold lg:hidden dark:text-gray-100'
        onClick={() => setSidebarOpen(!sidebarOpen)} // ✅ toggle buka/tutup
        >
        <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-[8px] lg:text-sm font-bold hidden lg:block">
          Saturday, January 10, 2026 at 11:07:30 PM
        </span>
        <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          🔔
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">A</div>
          <span className='hidden lg:block'>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;