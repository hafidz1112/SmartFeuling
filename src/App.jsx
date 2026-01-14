import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot, faBars} from '@fortawesome/free-solid-svg-icons';
import Navbar from "./component/navbar"
import Menu from "./component/menu"
import Content from './component/content'
import Sidenav from "./component/sidenav"


export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [currentMapUrl, setCurrentMapUrl] = useState(
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659008.493882835!2d95.84784495832173!3d-2.2671055891349647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1768191910659!5m2!1sid!2sid"
);


  return (
    <div>
      
    <Navbar 
      darkMode={darkMode} 
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen} 
    />
    <div className={`block bg-white lg:flex bg-gray-100 h-auto ${darkMode ? "dark" : ""} dark:bg-gray-900`}>
      {/* side bar */}
      <div className={`fixed bg-white lg:z-0 z-50 w-64 h-screen lg:h-auto shadow ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static dark:bg-gray-900`}>
        <Menu/>
        <div className=' flex justify-between border-b'>
          <div className='text-xl font-bold dark:text-gray-100'></div>
        </div>
        {/* navigation bar */}

        <Sidenav setCurrentMapUrl={setCurrentMapUrl} />       
        {/* dark mode */}
        <div className='flex text-2xl justify-left p-4'>
          {darkMode ? (
            <button className='p-2 bg-black rounded-full' onClick={() => setDarkMode (false)}>🌞</button> 
          ) : (
          <button className='p-2 bg-black rounded-full' onClick={() => setDarkMode(true) }>🌜</button>
        )}
        </div>
      </div>

      {/* main content */}
      <main className='flex-1 overflow-y-auto p-4'>
        
        
        {/* SPBU Network Map */}
        <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
          <div className="flex justify-between items-center mb-4 lg:space-x-0 space-x-1">
            <h2 className="text-[8px] lg:text-xl font-bold flex items-center">
              <span className="mr-2 text-blue-600 bg-blue-100 rounded-md p-2"><FontAwesomeIcon icon={faLocationDot} /></span> SPBU Network Map
            </h2>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search region or SPBU..."
                className={`px-3 py-2 rounded-md border lg:w-64 w-[120px] lg:text-sm text-[12px] ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
              />
              <button className={`p-2 rounded text-[8px] lg:text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>+</button>
              <button className={`p-2 rounded text-[8px] lg:text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>&minus;</button>
              <button className={`p-2 rounded text-[8px] ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px]'>
                  <path d="M11 12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6zm-7 0a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Kontainer map dengan tinggi tetap */}
          <div className="h-64 rounded-lg overflow-hidden relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-800">
            <iframe
              src={currentMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SPBU Network Map"
            ></iframe>

            {/* Overlay info (opsional) */}
            
          </div>
        </div>
        {/* realtime transaksi */}
          <Content darkMode={darkMode}/>
      </main>
      {/* ringht konten */}
      <aside className={`w-full lg:w-80 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-4 lg:pr-6`}>
          <h2 className="text-sm font-bold mb-4">LIVE CCTV FEED</h2>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {['CAM 01', 'CAM 02', 'CAM 03', 'CAM 04'].map((cam, idx) => (
              <div key={idx} className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex flex-col items-center`}>
                <div className="w-full h-20 bg-black rounded mb-1 relative">
                  <div className="absolute top-1 left-1 text-xs bg-red-500 text-white px-1 rounded">LIVE</div>
                </div>
                <div className="text-[10px] text-center">{cam}<br/>Dispenser A1</div>
              </div>
            ))}
          </div>

          {/* Statistik */}
          <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <h3 className="text-[10px] font-medium text-green-600">Valid Transactions</h3>
            <p className="text-md font-bold text-green-600">1,247</p>
          </div>

          <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-red-900/20 border border-red-700' : 'bg-red-50 border border-red-200'}`}>
            <h3 className="text-[10px] font-medium text-red-600">Fraud Alerts</h3>
            <p className="text-md font-bold text-red-600">3</p>
          </div>

          <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className="text-[10px] font-medium text-blue-600">Active Dispensers</h3>
            <p className="text-md font-bold text-blue-600">24</p>
          </div>

          {/* WhatsApp Alert */}
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-emerald-900/20 border border-emerald-700' : 'bg-emerald-50 border border-emerald-200'}`}>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-green-600 mr-2">
                <path d="M13.626 2.826a6.832 6.832 0 0 0-9.662 0A6.832 6.832 0 0 0 2.826 12.488c1.19.596 2.527.885 3.863.885a6.832 6.832 0 0 0 6.832-6.832c0-1.336-.289-2.673-.885-3.863zM12.488 11.344a5.688 5.688 0 0 1-8.044 0 5.688 5.688 0 0 1 0-8.044 5.688 5.688 0 0 1 8.044 0 5.688 5.688 0 0 1 0 8.044z"/>
                <path d="M11.344 6.832a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/>
              </svg>
              <h3 className="font-medium text-green-600">WhatsApp Alert</h3>
            </div>
            <p className="text-xs text-green-600 mb-1">System Active</p>
            <div className="text-xs text-gray-500 mb-2">
              Sent Today: <span className="font-semibold">24</span>
            </div>
            <div className="text-xs text-gray-500">
              Last Alert: <span className="font-semibold">23.00.28</span>
            </div>
            <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-1 rounded text-sm">
              ⚙️ Settings
            </button>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default App