import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPause,
  faStop,
  faDownload,
  faExpand,
  faCalendar,
  faVideo,
  faVideoCamera,
  faSearch,
  faSlidersH,
  faForward,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/ui/modal";
import Sidenav from "../sidenav";

export function PlaybackMenuModalContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState("1x");
  const [currentTime, setCurrentTime] = useState("14:30:00");
  const [showReplayModal, setShowReplayModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [calendarData, setCalendarData] = useState({ weekDays: [], weeks: [] });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const speeds = ["1x", "2x", "4x", "8x", "16x"];
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = Array(firstDay).fill(null).concat([...Array(daysInMonth).keys()].map(i => i + 1));
    const weeks = [];
    while (days.length) weeks.push(days.splice(0, 7));
    setCalendarData({ weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], weeks });
  }, [currentMonth, currentYear]);

  const triggerPlayback = (day = selectedDay) => {
    setSelectedDay(day);
    setShowReplayModal(true);
  };

  return (
    <div className="bg-[#f8f9fc] min-h-screen p-6 space-y-6 text-gray-800">
      
      {/* MODAL VIDEO PLAYBACK */}
      <Modal
        isOpen={showReplayModal}
        onClose={() => setShowReplayModal(false)}
        title={
          <div className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faVideo} /> 
            <span>Playback: {selectedDay} {months[currentMonth]} {currentYear} ({playbackSpeed})</span>
          </div>
        }
        size="xl"
        contentClassName="bg-black"
        headerClassName="bg-[#1a1a1a] border-b border-gray-800"
      >
        <div className="p-4 space-y-4">
          <div className="aspect-video bg-[#050505] rounded-lg border border-gray-800 flex items-center justify-center relative">
             <div className="absolute top-4 left-4 text-green-500 font-mono text-xs opacity-70">
                REC ● {currentYear}-{currentMonth + 1}-{selectedDay} | {currentTime}
             </div>
             {isPlaying && (
               <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-bold animate-pulse">
                 {playbackSpeed} Fast Forward
               </div>
             )}
             <FontAwesomeIcon icon={faVideoCamera} className="text-gray-900 text-7xl" />
          </div>
          <div className="bg-[#111] p-4 rounded-xl border border-gray-800 flex justify-between items-center">
             <div className="flex gap-4 items-center">
                <button onClick={() => setIsPlaying(!isPlaying)} className="text-white text-2xl">
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlayCircle} />
                </button>
                <div className="flex bg-gray-900 rounded-md p-1 border border-gray-800">
                   {speeds.slice(0, 3).map(s => (
                     <button 
                      key={s}
                      onClick={() => setPlaybackSpeed(s)}
                      className={`px-3 py-1 text-[10px] font-bold rounded ${playbackSpeed === s ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                     >
                       {s}
                     </button>
                   ))}
                </div>
             </div>
             <div className="text-gray-400 text-xs font-mono tracking-widest uppercase">Streaming Recording...</div>
          </div>
        </div>
      </Modal>

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">CCTV DASHBOARD</h1>
          <div className="mt-2 relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FontAwesomeIcon icon={faSearch} size="sm" />
            </span>
            <input 
              type="text" 
              placeholder="Cari SPBU / Kamera..." 
              className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-lg text-xs outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">System Time</div>
            <div className="text-xl font-bold text-blue-600 tracking-tighter">{currentTime}</div>
          </div>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/20">
            <FontAwesomeIcon icon={faCalendar} size="sm" />
            <span className="font-bold text-xs uppercase">{months[currentMonth]} {currentYear}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* SIDEBAR: LOKASI */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-gray-100 p-5 h-full shadow-sm">
            <h2 className="font-bold text-gray-400 text-[10px] uppercase mb-4 tracking-widest">Region Selection</h2>
            <Sidenav />
          </div>
        </div>

        {/* CENTER: MONITORING & CONTROLS */}
        <div className="col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-6 text-gray-800">Video Monitoring Grid</h2>
            
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  onClick={() => triggerPlayback()}
                  className="relative aspect-video bg-black rounded-lg cursor-pointer group hover:ring-2 hover:ring-blue-500 transition-all shadow-inner"
                >
                  <div className="absolute top-2 left-2 z-10">
                    <div className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-md">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div> LIVE
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FontAwesomeIcon icon={faVideoCamera} className="text-gray-900 text-xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* PLAYING CONTROL */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                  <FontAwesomeIcon icon={faSlidersH} /> <span>Playing Control</span>
                </div>
                {/* Speed Indicator */}
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-blue-600 font-bold text-[10px]">
                  <FontAwesomeIcon icon={faForward} />
                  <span>SPEED: {playbackSpeed}</span>
                </div>
              </div>

              <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-xl">
                <div className="flex flex-col gap-6">
                  {/* Timeline */}
                  <div className="relative h-1.5 bg-gray-800 rounded-full">
                    <div className="absolute h-full bg-blue-600 w-1/3 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-blue-500 rounded-full shadow-lg"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5 items-center">
                      <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-blue-400 transform hover:scale-110 transition-all">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlayCircle} size="2xl" />
                      </button>
                      <button className="text-gray-600 hover:text-red-500 transition-colors"><FontAwesomeIcon icon={faStop} size="lg" /></button>
                      
                      {/* SPEED SELECTOR */}
                      <div className="flex items-center bg-gray-900 border border-gray-800 rounded-lg p-1 ml-2">
                        {speeds.map((s) => (
                          <button 
                            key={s} 
                            onClick={() => setPlaybackSpeed(s)}
                            className={`px-2 py-1 text-[9px] font-black rounded transition-all ${playbackSpeed === s ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-center">
                      <div className="text-[10px] font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                         {currentTime} / 23:59:59
                      </div>
                      <button className="text-gray-500 hover:text-white transition-colors" title="Download Clip">
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm h-full">
            <h2 className="font-bold text-lg mb-4 text-gray-800">Select Date</h2>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <select 
                value={currentMonth} 
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-xs font-bold outline-none cursor-pointer"
              >
                {months.map((m, index) => <option key={m} value={index}>{m}</option>)}
              </select>
              <select 
                value={currentYear} 
                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-xs font-bold outline-none cursor-pointer"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mt-6">
              {calendarData.weekDays.map(d => (
                <div key={d} className="text-[9px] font-black text-gray-300 py-1">{d}</div>
              ))}
              {calendarData.weeks.map((week, wi) => (
                <React.Fragment key={wi}>
                  {week.map((day, di) => (
                    <div 
                      key={di}
                      onClick={() => day && triggerPlayback(day)}
                      className={`py-2 text-[11px] font-bold cursor-pointer rounded-lg transition-all
                        ${day === selectedDay ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 ring-2 ring-blue-50' : 'text-gray-600 hover:bg-blue-50'}
                        ${!day && 'invisible'}`}
                    >
                      {day}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
               <div className="flex items-center gap-2 text-blue-700 font-bold text-[10px] mb-1">
                 <FontAwesomeIcon icon={faClock} /> <span>RECORDING INFO</span>
               </div>
               <p className="text-[10px] text-blue-900 leading-tight">
                 Data rekaman untuk <strong>{selectedDay} {months[currentMonth]}</strong> tersedia dengan kualitas HD.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}