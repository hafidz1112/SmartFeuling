import React from "react";
import {
  Video,
  Image as ImageIcon,
  Download,
  CheckCircle,
  Smartphone,
  Mail,
  X,
} from "lucide-react";
import Modal from "@/components/ui/modal";
import { useState } from "react";

const Content = ({ darkMode }) => {
  const [selectedTx, setSelectedTx] = useState(null);

  const openModal = (tx) => {
    setSelectedTx(tx);
  };

  const closeModal = () => {
    setSelectedTx(null);
  };

  const transactions = [
    {
      time: "12:58:23",
      spbu: "SPBU Banda Aceh",
      dispenser: "B1",
      vehicle: "Motorcycle",
      plate: "BL 9012 NOP",
      fuel: "Pertalite",
      volume: "5.8",
      subsidy: "Valid",
      rfid: "Valid",
      fraud: "No Fraud",
    },
    {
      time: "12:45:10",
      spbu: "SPBU Sunset Road Bali",
      dispenser: "A1",
      vehicle: "Car",
      plate: "DK 3456 QRS",
      fuel: "Pertamax Turbo",
      volume: "32",
      subsidy: "N/A",
      rfid: "N/A",
      fraud: "No Fraud",
    },
    {
      time: "11:22:49",
      spbu: "SPBU Gatot Subroto",
      dispenser: "A1",
      vehicle: "Motorcycle",
      plate: "B 1122 TUV",
      fuel: "Pertalite",
      volume: "5.5",
      subsidy: "Valid",
      rfid: "Valid",
      fraud: "No Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
    {
      time: "10:15:30",
      spbu: "SPBU Ahmad Yani Banjarmasin",
      dispenser: "B1",
      vehicle: "Truck",
      plate: "DA 7890 WXY",
      fuel: "Solar",
      volume: "120",
      subsidy: "Not Valid",
      rfid: "Valid",
      fraud: "RFID Fraud",
    },
  ];
  return (
    <div
      className={`p-4 rounded-lg border ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-white shadow"
      }`}
    >
      <h2
        className={`text-sm font-bold mb-2 ${
          darkMode ? "text-slate-100" : "text-gray-900"
        }`}
      >
        Real-Time Transaction Log
      </h2>
      <p
        className={`text-[12px] mb-4 ${
          darkMode ? "text-slate-400" : "text-gray-500"
        }`}
      >
        Showing all transactions
      </p>

      <div className="overflow-x-auto overflow-y-auto max-h-[250px] ">
        <table className="w-full text-[11px] min-w-max">
          <thead>
            <tr
              className={`border-b ${
                darkMode
                  ? "border-slate-700 text-slate-300"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {[
                "Time",
                "SPBU",
                "Dispenser",
                "Vehicle Type",
                "License Plate",
                "Fuel Type",
                "Volume (L)",
                "Subsidy Status",
                "RFID Match",
                "Fraud Detection",
                "Evidence",
              ].map((header, idx) => (
                <th key={idx} className="py-2 px-2 text-left whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors ${
                  darkMode ? "text-slate-300" : "text-gray-600"
                }`}
              >
                <td className="py-2 px-2 whitespace-nowrap">{t.time}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.spbu}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.dispenser}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.vehicle}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.plate}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.fuel}</td>
                <td className="py-2 px-2 whitespace-nowrap">{t.volume}</td>
                <td className="py-2 px-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      t.subsidy === "Valid"
                        ? "bg-green-100 text-green-800"
                        : t.subsidy === "Not Valid"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {t.subsidy}
                  </span>
                </td>
                <td className="py-2 px-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      t.rfid === "Valid"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {t.rfid}
                  </span>
                </td>
                <td className="py-2 px-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      t.fraud === "No Fraud"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {t.fraud}
                  </span>
                </td>
                <td className="py-2 px-2 whitespace-nowrap">
                  {t.fraud === "No Fraud" ? (
                    <button
                      onClick={() => openModal(t)}
                      className="focus:outline-none hover:opacity-80 transition-opacity"
                    >
                      <Video className="text-blue-700" size={20} />
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openModal(t)}
                        className="relative inline-flex focus:outline-none hover:opacity-80 transition-opacity"
                      >
                        {/* Ping animation effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                        {/* Icon */}
                        <span className="relative text-red-500">
                          <Video className="text-red-500" size={20} />
                        </span>
                      </button>

                      <button
                        onClick={() => openModal(t)}
                        className="focus:outline-none hover:opacity-80 transition-opacity"
                      >
                        <ImageIcon className="text-orange-500" size={20} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={selectedTx !== null}
        onClose={closeModal}
        title={
          <div className="flex items-center gap-2">
            <Video size={20} />
            <span>CCTV Evidence - Transaction Recording & Fraud Snapshots</span>
          </div>
        }
        size="xl"
      >
        {selectedTx && (
          <div className="space-y-4 font-sans">
            {/* Top Transaction Info - Light Blue Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 grid grid-cols-5 gap-6 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  Time
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {selectedTx.time}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  SPBU
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {selectedTx.spbu}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  Dispenser
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {selectedTx.dispenser}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  License Plate
                </p>
                <p className="font-bold text-blue-600">{selectedTx.plate}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
                  Fraud Status
                </p>
                <div className="flex items-center gap-1 font-bold text-green-600">
                  <CheckCircle
                    size={14}
                    className={
                      selectedTx.fraud === "No Fraud"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  />
                  <span
                    className={
                      selectedTx.fraud === "No Fraud"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {selectedTx.fraud}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Video Recording */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
                  <Video size={16} className="text-blue-500" />
                  Video Recording
                </h4>

                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-sm group">
                  {/* Top Left Cam Info */}
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono">
                    CAM {selectedTx.dispenser} - RECORDING
                  </div>

                  {/* Top Right Rec Indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    REC
                  </div>

                  {/* Center Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60">
                    <Video size={48} className="text-gray-500 mb-2" />
                    <p className="text-gray-400 text-xs">Full Video Evidence</p>
                  </div>

                  {/* Bottom Timestamp */}
                  <div className="absolute bottom-3 left-3 font-mono text-xs text-white opacity-80">
                    2026-01-14 &nbsp; {selectedTx.time}
                  </div>

                  {/* Play Button Overlay (Optional) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                      <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Download size={16} />
                  Download Video (MP4)
                </button>
              </div>

              {/* Right Column: Fraud Snapshots */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
                  <ImageIcon size={16} className="text-red-500" />
                  Fraud Detection Snapshots
                </h4>

                {/* Snapshot 1: Plate Detection */}
                <div className="relative h-40 bg-gray-800 rounded-lg overflow-hidden border border-yellow-500/50">
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <div className="w-1 h-3 bg-yellow-500 rounded-sm"></div>
                    <span className="text-[10px] text-gray-300">
                      License Plate Detection
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                    AUTO-CAPTURED
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-4 transform scale-90">
                      <div className="bg-white px-4 py-2 rounded text-center border-4 border-black shadow-lg">
                        <p className="text-[8px] text-gray-500 tracking-widest">
                          INDONESIA
                        </p>
                        <p className="font-mono text-2xl font-bold text-black leading-none">
                          {selectedTx.plate}
                        </p>
                        <p className="text-[8px] text-gray-500 text-right">
                          08.27
                        </p>
                      </div>
                      <div className="border border-yellow-500 border-dashed px-2 py-1 rounded text-yellow-500 text-[10px]">
                        PLATE_DETECTED
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-1.5 py-0.5 rounded">
                    Confidence: 98.5%
                  </div>
                </div>

                {/* Snapshot 2: Face/Suspect Detection */}
                <div className="relative h-40 bg-gray-800 rounded-lg overflow-hidden border border-red-500/50">
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
                    <span className="text-[10px] text-gray-300">
                      Driver Face Detection
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                    FRAUD SUSPECT
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded overflow-hidden border-2 border-red-500/50 relative bg-gray-700 mx-auto">
                        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gray-600 rounded-t-full mx-2"></div>
                        <div className="absolute top-2 inset-x-0 mx-auto w-6 h-6 bg-gray-500 rounded-full"></div>
                      </div>
                      <div className="absolute -top-3 -right-6 bg-red-500/80 text-white text-[8px] px-1 rounded">
                        FACE_ID: F-2847
                      </div>
                      <div className="mt-2 flex items-center justify-center gap-1 text-red-400 text-[10px]">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        SUSPICIOUS ACTIVITY
                      </div>

                      {/* Dotted Box */}
                      <div className="absolute -inset-2 border border-red-500/30 border-dashed rounded-lg"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-1.5 py-0.5 rounded">
                    Confidence: 94.2%
                  </div>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Download size={16} />
                  Download All Snapshots (ZIP)
                </button>
              </div>
            </div>

            {/* Bottom Summary Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <h5 className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-gray-400">📊</span> Evidence Summary
              </h5>
              <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100 dark:divide-gray-700">
                <div className="px-2">
                  <p className="text-[10px] text-gray-500">Video Duration</p>
                  <p className="text-xs font-semibold">00:02:34</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] text-gray-500">
                    Snapshots Captured
                  </p>
                  <p className="text-xs font-semibold">2 Images</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] text-gray-500">Detection Quality</p>
                  <p className="text-xs font-semibold text-green-600">
                    96.35% Avg
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium text-sm flex items-center justify-center gap-2">
                <Mail size={16} /> Email Evidence Package
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium text-sm flex items-center justify-center gap-2">
                <Smartphone size={16} /> Send via WhatsApp
              </button>
              <button
                onClick={closeModal}
                className="px-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded font-medium text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Content;
