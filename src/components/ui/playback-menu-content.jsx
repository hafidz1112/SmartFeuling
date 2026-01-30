import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPause,
  faStop,
  faDownload,
  faExpand,
  faSearch,
  faCalendar,
  faMapMarkerAlt,
  faClock,
  faVideo,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/ui/modal";

export function PlaybackMenuModalContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(1.0);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [currentTime, setCurrentTime] = useState("14:30:00");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedDayForVideo, setSelectedDayForVideo] = useState(null);
  const [calendarData, setCalendarData] = useState({ weekDays: [], weeks: [] });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Data kendaraan
  const vehicles = [
    { id: "1", plate: "B 9655 SFV", type: "RTC_Balikpapan_1", status: "Active" },
    { id: "2", plate: "B 9641 SFV", type: "RTC_Balikpapan_1", status: "Active" },
    { id: "3", plate: "B 9657 SFV", type: "RTC_Balikpapan_1", status: "Inactive" },
    { id: "4", plate: "B 9365 TFV", type: "RTC_Balikpapan_1", status: "Active" },
    { id: "5", plate: "B 9272 TFV", type: "RTC_Balikpapan_1", status: "Active" },
    { id: "6", plate: "B 9146 SFV", type: "RTC_Balikpapan_1", status: "Inactive" },
    { id: "7", plate: "B 9678 SFV", type: "RTC_Balikpapan_1", status: "Active" },
    { id: "8", plate: "B 9780 TFV", type: "RTC_Balikpapan_1", status: "Active" },
  ];

  // Speed options
  const speedOptions = [
    { label: "0.25x", value: 0.25 },
    { label: "0.5x", value: 0.5 },
    { label: "1.0x", value: 1.0 },
    { label: "1.5x", value: 1.5 },
    { label: "2.0x", value: 2.0 },
    { label: "4.0x", value: 4.0 },
  ];

  // Bulan dalam setahun
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Fungsi untuk generate kalender dinamis
  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    const startDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Tambahkan hari kosong di awal bulan
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Tambahkan hari-hari dalam bulan
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    // Bagi ke dalam minggu-minggu
    const weeks = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    
    return { weekDays, weeks };
  };

  // Generate kalender saat bulan/tahun berubah
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const calendar = generateCalendar(currentYear, currentMonth);
    setCalendarData(calendar);
    
    // Set tanggal hari ini jika bulan dan tahun sama
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      setSelectedDayForVideo(currentDay);
    } else {
      setSelectedDayForVideo(1); // Set ke hari pertama jika bukan bulan ini
    }
  }, [currentMonth, currentYear]);

  // Navigasi bulan sebelumnya
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigasi bulan berikutnya
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Set ke bulan dan tahun saat ini
  const goToCurrentMonth = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDayForVideo(today.getDate());
  };

  // Handle klik tanggal
  const handleDateClick = (day) => {
    if (day !== null) {
      setSelectedDayForVideo(day);
      setShowVideoModal(true);
    }
  };

  // Get current month and year untuk display
  const getCurrentMonthYear = () => {
    return `${months[currentMonth]} ${currentYear}`;
  };

  // Video modal content
  const VideoModalContent = () => {
    return (
      <div className="space-y-4">
        {/* Video Player */}
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-white font-semibold">
              Video Recording - {months[currentMonth]} {selectedDayForVideo}, {currentYear}
            </h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                HD 1080p
              </span>
            </div>
          </div>
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <FontAwesomeIcon 
                  icon={faVideo} 
                  className="text-blue-500 text-6xl mb-4 opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faPlayCircle} 
                    className="text-white text-4xl cursor-pointer hover:text-blue-300 transition-colors"
                  />
                </div>
              </div>
              <p className="text-gray-400 mt-4">Playing recording from {months[currentMonth]} {selectedDayForVideo}, {currentYear}</p>
              <p className="text-gray-500 text-sm mt-2">Camera: CAM-001 - Dispenser A1 Front</p>
            </div>
          </div>
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">00:12:45</span>
              <span className="text-gray-400 text-sm">01:00:00</span>
            </div>
            <div className="relative">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-1/3"></div>
              </div>
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex justify-center items-center gap-4">
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700">
              <FontAwesomeIcon icon={faStop} />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
              Play
            </Button>
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700">
              <FontAwesomeIcon icon={faExpand} />
            </Button>
            
            {/* Speed selector */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Speed:</span>
              <select 
                className="border border-gray-300 rounded px-3 py-1 text-sm"
                value={currentSpeed}
                onChange={(e) => setCurrentSpeed(parseFloat(e.target.value))}
              >
                {speedOptions.map((speed) => (
                  <option key={speed.value} value={speed.value}>
                    {speed.label}
                  </option>
                ))}
              </select>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Video Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-700 mb-2 text-sm">Recording Details</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{months[currentMonth]} {selectedDayForVideo}, {currentYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">1h 45m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">4.2 GB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2 text-sm">Camera Info</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Camera ID:</span>
                <span className="font-medium">CAM-001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">Dispenser A1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-700 mb-2 text-sm">Vehicle Info</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Plate:</span>
                <span className="font-medium">B 9655 SFV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">RTC_Balikpapan_1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Video Modal */}
      <Modal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        title={
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faVideo} />
            <span className="text-lg">Video Playback - {months[currentMonth]} {selectedDayForVideo}, {currentYear}</span>
          </div>
        }
        size="xl"
        contentClassName="bg-gray-50"
      >
        <VideoModalContent />
      </Modal>

      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Home</h1>
            <div className="relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="pls input key word"
                className="w-[500px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Current Time</div>
              <div className="text-xl font-bold text-blue-600">{currentTime}</div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              {getCurrentMonthYear()}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Kolom Kiri - Kendaraan & Kontrol */}
        <div className="xl:col-span-1 space-y-6">
          {/* Section Elnusa */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Elnusa</h2>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Online</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500" />
                Elnusa Balikpapan
              </h3>
              <div className="ml-4">
                <h4 className="font-medium text-gray-600">RTC_Balikpapan_1</h4>
                <div className="mt-2 space-y-2">
                  {vehicles.map((vehicle) => (
                    <div 
                      key={vehicle.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedVehicle === vehicle.id 
                          ? 'bg-blue-50 border-2 border-blue-300' 
                          : 'border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-bold text-gray-800">{vehicle.plate}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          vehicle.status === 'Active' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}>
                          {vehicle.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Playing Control */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Playing Control</h3>
            <div className="space-y-4">
              {/* Tombol kontrol utama */}
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4"
                  onClick={() => setCurrentTime("00:00:00")}
                >
                  <FontAwesomeIcon icon={faStop} />
                </Button>
                <Button 
                  className={`${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white px-6`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlayCircle} className="mr-2" />
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                  <FontAwesomeIcon icon={faExpand} />
                </Button>
              </div>

              {/* Speed curve selection */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Speed Curve</h4>
                <div className="grid grid-cols-3 gap-2">
                  {speedOptions.map((speed) => (
                    <Button
                      key={speed.value}
                      variant={currentSpeed === speed.value ? "default" : "outline"}
                      className={`text-sm ${
                        currentSpeed === speed.value 
                          ? 'bg-blue-600 text-white' 
                          : 'border border-gray-300'
                      }`}
                      onClick={() => setCurrentSpeed(speed.value)}
                    >
                      {speed.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="pt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div 
                      style={{ width: '58%' }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                  <div className="absolute left-[58%] top-0 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Tengah - Map (POSISI PERTAMA) */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 h-full">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Map</h2>
            <div className="bg-gray-50 rounded border border-gray-200 h-full">
              {/* Embed Google Maps */}
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16276432.294640914!2d110.96395117499999!3d-2.5488911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Southeast Asia Map"
                  className="rounded"
                ></iframe>
              </div>
              
              {/* Current location marker */}
              <div className="p-3 bg-blue-50 border-t border-blue-200">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <div>
                    <div className="font-medium text-blue-700">Current Position</div>
                    <div className="text-xs text-gray-600">Balikpapan, Indonesia • RTC_Balikpapan_1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan - Kalender (POSISI KEDUA) */}
        <div className="xl:col-span-1 space-y-6">
          {/* Kalender dengan kontrol bulan/tahun */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Calendar</h2>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={prevMonth}
                  className="h-8 w-8 p-0"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={nextMonth}
                  className="h-8 w-8 p-0"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
                </Button>
              </div>
            </div>
            
            {/* Month/Year Selector */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">Month</label>
                <select 
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                >
                  {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">Year</label>
                <select 
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm"
                  value={currentYear}
                  onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mb-4 text-xs"
              onClick={goToCurrentMonth}
            >
              Go to Current Month
            </Button>
            
            {/* Kalender */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    {calendarData.weekDays && calendarData.weekDays.map((day, index) => (
                      <th key={index} className="py-2 px-1 text-center text-xs font-medium text-gray-500">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarData.weeks && calendarData.weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <td 
                          key={dayIndex}
                          className={`py-2 px-1 text-center text-sm cursor-pointer transition-all ${
                            day === selectedDayForVideo 
                              ? 'bg-blue-100 rounded font-bold text-blue-700 border border-blue-300' 
                              : day !== null ? 'hover:bg-gray-50 hover:rounded' : ''
                          } ${day === null ? 'text-gray-300' : 'text-gray-800'}`}
                          onClick={() => handleDateClick(day)}
                        >
                          {day !== null ? (
                            <div className="flex flex-col items-center">
                              <span>{day}</span>
                              {day === selectedDayForVideo && (
                                <div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                          ) : ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-2 bg-blue-50 rounded border border-blue-200">
              <div className="text-xs text-blue-700">
                <div className="font-medium">Selected: {months[currentMonth]} {selectedDayForVideo}, {currentYear}</div>
                <div className="text-gray-600 mt-1">Click any date to view video</div>
              </div>
            </div>
          </div>

          {/* Time Scale */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500" />
              Time Scale
            </h2>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="grid grid-cols-4 gap-1">
                {["00:00", "06:00", "12:00", "18:00"].map((time, index) => (
                  <div 
                    key={index}
                    className={`p-2 rounded border text-center cursor-pointer transition-all ${
                      time === "12:00" 
                        ? 'bg-blue-600 text-white border-blue-600 shadow' 
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-xs font-medium">{time}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPlayCircle} className="text-green-600 mr-2 text-sm" />
                    <span className="font-medium text-green-700 text-sm">Ready</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Speed</div>
                    <div className="text-sm font-bold text-green-600">{currentSpeed}x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="border-gray-300"
          onClick={() => setShowVideoModal(true)}
        >
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
          View Selected Video
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Save Configuration
        </Button>
        <Button className="bg-green-600 hover:bg-green-700">
          Start Playback
        </Button>
      </div>
    </div>
  );
}