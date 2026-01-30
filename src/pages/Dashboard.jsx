import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowsRotate,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu";
import Content from "@/components/content";
import Sidenav from "@/components/sidenav";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { useToast } from "../helper/use-toast";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMapUrl, setCurrentMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659008.493882835!2d95.84784495832173!3d-2.2671055891349647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1768191910659!5m2!1sid!2sid"
  );
  const [currentLocation, setCurrentLocation] = useState({
    region: "Indonesia",
    city: "All Regions",
    spbu: "",
    dispenser: ""
  });
  const [mapHeight, setMapHeight] = useState(256); // Default height
  const { showToast } = useToast();

  // Update map height berdasarkan ukuran layar
  useEffect(() => {
    const updateMapHeight = () => {
      if (window.innerWidth < 640) { // Mobile
        setMapHeight(200);
      } else if (window.innerWidth < 1024) { // Tablet
        setMapHeight(300);
      } else { // Desktop
        setMapHeight(300);
      }
    };

    updateMapHeight();
    window.addEventListener('resize', updateMapHeight);
    
    return () => window.removeEventListener('resize', updateMapHeight);
  }, []);

  // Fungsi untuk reset ke peta default Indonesia
  const resetToDefaultMap = () => {
    setCurrentMapUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659008.493882835!2d95.84784495832173!3d-2.2671055891349647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1768191910659!5m2!1sid!2sid");
    setCurrentLocation({
      region: "Indonesia",
      city: "All Regions",
      spbu: "",
      dispenser: ""
    });
    showToast("Map reset to Indonesia", "info", 1500);
  };

  // Fungsi untuk zoom in
  const zoomIn = () => {
    // Logic untuk zoom in (bisa diimplementasi dengan state zoom level)
    showToast("Map zoomed in", "info", 1500);
  };

  // Fungsi untuk zoom out
  const zoomOut = () => {
    // Logic untuk zoom out (bisa diimplementasi dengan state zoom level)
    showToast("Map zoomed out", "info", 1500);
  };

  // Fungsi untuk mendapatkan judul lokasi yang sedang ditampilkan
  const getLocationTitle = () => {
    if (currentLocation.dispenser) {
      return `${currentLocation.dispenser}`;
    } else if (currentLocation.spbu) {
      const spbuName = currentLocation.spbu.split(" - ")[1] || currentLocation.spbu;
      return `${spbuName}`;
    } else if (currentLocation.city !== "All Regions") {
      return `${currentLocation.city}, ${currentLocation.region}`;
    } else {
      return "SPBU Network Map - Indonesia";
    }
  };

  // Fungsi untuk mendapatkan detail lokasi
  const getLocationDetail = () => {
    if (currentLocation.dispenser) {
      return `${currentLocation.spbu.split(" - ")[1] || currentLocation.spbu}`;
    } else if (currentLocation.spbu) {
      return `${currentLocation.city}`;
    } else {
      return `${currentLocation.city}`;
    }
  };

  return (
    <div className="h-auto w-full flex flex-col overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={`flex-1 block lg:flex overflow-hidden relative ${
          darkMode ? "dark bg-slate-950" : "bg-gray-100"
        }`}
      >
        {/* side bar */}
        <div
          className={`fixed bg-white lg:z-0 z-50 w-64 h-screen lg:h-auto shadow ${
            sidebarOpen
              ? "translate-x-0 shadow-lg"
              : "-translate-x-64 lg:translate-x-0 lg:shadow-none"
          } lg:static dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 transition-transform duration-300 ease-in-out flex-none overflow-y-auto`}
        >
          <Menu />
          <div className=" flex justify-between border-b">
            <div className="text-xl font-bold dark:text-gray-100"></div>
          </div>
          
          <Sidenav 
            setCurrentMapUrl={setCurrentMapUrl} 
            setCurrentLocation={setCurrentLocation}
          />
        </div>

        {/* main content */}
        <main className="flex-1 overflow-y-auto p-2 sm:p-4">
          {/* SPBU Network Map - Responsive */}
          <div
            className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
              <div className="flex items-center">
                <h2 className="text-xs sm:text-sm md:text-xl font-bold flex items-center mr-2 sm:mr-4">
                  <span className="mr-1 sm:mr-2 text-blue-600 bg-blue-100 rounded-md p-1 sm:p-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xs sm:text-base" />
                  </span>
                  <span className="truncate">{getLocationTitle()}</span>
                </h2>
                
                {/* Location Info Badge */}
                <div className={`hidden sm:flex items-center px-2 sm:px-3 py-1 rounded-full text-xs ${
                  darkMode ? "bg-blue-900/50 text-blue-200" : "bg-blue-100 text-blue-700"
                }`}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-[8px] sm:text-[10px]" />
                  <span className="truncate max-w-[100px] sm:max-w-none">
                    {getLocationDetail()}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="relative flex-1 sm:flex-none">
                  <FontAwesomeIcon 
                    icon={faSearch} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`pl-7 pr-2 py-1 sm:py-2 rounded-md border w-full sm:w-48 lg:w-64 text-xs sm:text-sm ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  />
                </div>
                <button
                  className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={zoomIn}
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={zoomOut}
                  title="Zoom Out"
                >
                  &minus;
                </button>
                <button
                  className={`p-1 sm:p-2 rounded text-xs sm:text-sm ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={resetToDefaultMap}
                  title="Reset to Indonesia Map"
                >
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
              </div>
            </div>

            {/* Kontainer map responsif */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-800">
              <div 
                className="w-full"
                style={{ height: `${mapHeight}px` }}
              >
                <iframe
                  src={currentMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={getLocationTitle()}
                  key={currentMapUrl}
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>

              {/* Overlay info lokasi - Responsive */}
              {currentLocation.city !== "All Regions" && (
                <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg ${
                  darkMode 
                    ? "bg-gray-900/90 text-gray-100 border border-gray-700" 
                    : "bg-white/90 text-gray-800 border border-gray-200"
                } max-w-[80%] sm:max-w-none`}>
                  <div className="flex items-center text-[10px] sm:text-xs">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 sm:mr-2 text-red-500 text-xs sm:text-sm" />
                    <div className="truncate">
                      <div className="font-medium truncate">
                        {currentLocation.dispenser 
                          ? currentLocation.dispenser 
                          : currentLocation.spbu 
                          ? currentLocation.spbu.split(" - ")[1] || currentLocation.spbu
                          : currentLocation.city
                        }
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-[8px] sm:text-[10px] truncate">
                        {currentLocation.dispenser 
                          ? `${currentLocation.spbu.split(" - ")[1] || currentLocation.spbu}, ${currentLocation.city}`
                          : currentLocation.spbu
                          ? `${currentLocation.city}, ${currentLocation.region}`
                          : `${currentLocation.city}, ${currentLocation.region}`
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* realtime transaksi */}
          <Content darkMode={darkMode} />
        </main>

        {/* ringht konten */}
        <aside
          className={`w-full  lg:w-80 h-full overflow-y-auto ${
            darkMode
              ? "bg-slate-900 border-l border-slate-800"
              : "bg-white border-l border-gray-200"
          } shadow-lg p-4 flex-none`}
        >
          <h2
            className={`text-sm font-bold mb-4 ${
              darkMode ? "text-slate-100" : "text-gray-800"
            }`}
          >
            LIVE CCTV FEED
          </h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {["CAM 01", "CAM 02", "CAM 03", "CAM 04"].map((cam, idx) => (
              <div
                key={idx}
                className={`p-2 rounded border ${
                  darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-gray-100 border-transparent"
                } flex flex-col items-center group cursor-pointer hover:ring-2 ring-blue-500 transition-all`}
              >
                <div className="w-full h-20 bg-black rounded mb-1 relative">
                  <div className="absolute top-1 left-1 text-xs bg-red-500 text-white px-1 rounded">
                    LIVE
                  </div>
                </div>
                <div
                  className={`text-[10px] text-center font-medium ${
                    darkMode ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  {cam}
                  <br />
                  Dispenser A1
                </div>
              </div>
            ))}
          </div>

          {/* Statistik */}
          <div
            className={`p-4 rounded-lg mb-4 border ${
              darkMode
                ? "bg-emerald-950/30 border-emerald-900/50"
                : "bg-green-50 border-green-200"
            }`}
          >
            <h3 className="text-[10px] font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
              Valid Transactions
            </h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
              1,247
            </p>
          </div>

          <div
            className={`p-4 rounded-lg mb-4 border ${
              darkMode
                ? "bg-red-950/30 border-red-900/50"
                : "bg-red-50 border-red-200"
            }`}
          >
            <h3 className="text-[10px] font-medium text-red-600 dark:text-red-400 uppercase tracking-wider">
              Fraud Alerts
            </h3>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
              3
            </p>
          </div>

          <div
            className={`p-4 rounded-lg mb-4 ${
              darkMode
                ? "bg-blue-900/20 border border-blue-700"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <h3 className="text-[10px] font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Active Dispensers
            </h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
              24
            </p>
          </div>

          {/* WhatsApp Alert */}
          <div
            className={`p-4 rounded-lg w-full ${
              darkMode
                ? "bg-emerald-900/20 border border-emerald-700"
                : "bg-green-50 border border-green-300"
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <FaWhatsapp className="text-3xl text-green-600" />
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-green-700 text-sm">
                  WhatsApp Alert
                </h3>
                <p className="text-xs text-green-600 font-medium">
                  System Active
                </p>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-green-800">
                <span>Sent Today:</span>
                <span className="font-bold">15</span>
              </div>
              <div className="flex justify-between text-xs text-green-800">
                <span>Last Alert:</span>
                <span className="font-bold">06.24.17</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
            >
              ⚙️ Settings
            </button>
          </div>
        </aside>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={null}
          size="xl"
          contentClassName="p-0 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#10a37f] p-4 flex justify-between items-center text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <h3 className="text-lg font-bold">
                WhatsApp Alert Configuration
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            {/* Alert Types Section */}
            <section>
              <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
                <span className="text-blue-600">🔔</span> Alert Types (Select
                which events trigger WhatsApp notifications)
              </h4>
              <div className="space-y-3">
                {/* RFID Fraud */}
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-red-500">⚠️</span> RFID Fraud
                      Detection (Critical Priority)
                    </h5>
                    <p className="text-sm text-gray-500">
                      Instant alert when RFID mismatch or fraud is detected
                    </p>
                  </div>
                </div>

                {/* Subsidy Misuse */}
                <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-orange-500">⚠️</span> Subsidy Misuse
                      (High Priority)
                    </h5>
                    <p className="text-sm text-gray-500">
                      Alert when subsidized fuel is used incorrectly
                    </p>
                  </div>
                </div>

                {/* Critical Asset Status */}
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-red-600">🔔</span> Critical Asset
                      Status (Critical Priority)
                    </h5>
                    <p className="text-sm text-gray-500">
                      Immediate notification when CCTV enters critical status
                      (low voltage, high temp, storage full)
                    </p>
                  </div>
                </div>

                {/* Warning Asset Status */}
                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <h5 className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-yellow-600">⚠️</span> Warning Asset
                      Status (Medium Priority)
                    </h5>
                    <p className="text-sm text-gray-500">
                      Alert when CCTV shows warning signs requiring attention
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Numbers Section */}
            <section>
              <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
                <span className="text-blue-600">📞</span> Contact Numbers (Field
                Officers)
              </h4>
              <div className="space-y-3">
                {[
                  {
                    phone: "+62 812-3456-7890",
                    name: "Ahmad - Supervisor JABODETABEK",
                  },
                  {
                    phone: "+62 813-9876-5432",
                    name: "Budi - Tech Support JAWA BARAT",
                  },
                  {
                    phone: "+62 821-5555-6666",
                    name: "Citra - Operations Manager",
                  },
                ].map((contact, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      defaultValue={contact.phone}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      defaultValue={contact.name}
                      className="flex-[2] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))}
                <button className="w-full py-2 border border-blue-200 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 flex items-center justify-center gap-2 font-medium">
                  <span>+</span> Add Contact
                </button>
              </div>
            </section>

            {/* Webhook Section */}
            <section>
              <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
                <span className="text-blue-600">&lt;/&gt;</span> Webhook
                Integration (Optional)
              </h4>
              <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm mb-3 border border-blue-100">
                <strong>Note:</strong> You can also integrate with third-party
                services like Zapier, Make.com, or custom APIs for advanced
                automation.
              </div>
              <input
                type="text"
                placeholder="https://your-webhook-endpoint.com/alerts"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
              />
            </section>

            {/* Test Notification Section */}
            <section>
              <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
                <span className="text-blue-600">✓</span> Test Notification
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    showToast("Test fraud alert sent!", "error", 3000);
                  }}
                  className="bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 flex items-center justify-center gap-2"
                >
                  ⚠️ Test Fraud Alert
                </Button>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    showToast(
                      "Test critical asset alert sent!",
                      "warning",
                      3000
                    );
                  }}
                  className="bg-[#e65100] text-white font-bold py-3 rounded-md hover:bg-orange-700 flex items-center justify-center gap-2"
                >
                  🔔 Test Critical Asset Alert
                </Button>
              </div>
            </section>
          </div>

          <div className="p-4 border-t flex justify-end gap-3 bg-white rounded-b-lg">
            <Button
              onClick={() => {
                // setIsOpen(() => {
                //   showToast(
                //     "Alert settings saved successfully!",
                //     "sucess",
                //     2000
                //   );
                // }, 500);
                setTimeout(false);
                showToast(
                  "Saving WhatsApp Alert Configuration.",
                  "info",
                  2000
                );
                setIsOpen(false);
                showToast(
                  "Alert settings saved successfully!",
                  "sucess",
                  3000
                );
                
              }}
              className="bg-[#10a37f] hover:bg-green-700 text-white px-8 py-2 w-full sm:w-auto"
            >
              ✓ Save Configuration
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 w-full sm:w-auto"
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
