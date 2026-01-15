import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCalendar,
  faBars,
  faChartSimple,
  faDownload,
  faAngleDown,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Modal from "@/components/ui/modal";
import { SummaryDashboardModalContent } from "./summary-dashboard-content";
import { DownloadReportModalContent } from "./download-report-content";

// ... existing code ...

export function MenuDropdown() {
  const [showTrackOpen, setShowTrackOpen] = useState(false);
  const [assetStatusOpen, setAssetStatusOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex justify-between bg-blue-600 hover:bg-blue-700 w-full text-white border-none"
          >
            <div className="flex items-center">
              <h1 className="px-2 text-xs">
                <FontAwesomeIcon icon={faBars} />
              </h1>
              <h2>Menu</h2>
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 p-2">
          <DropdownMenuItem
            className="flex items-center gap-2 py-2 cursor-pointer"
            onSelect={() => {
              setTimeout(() => {
                setShowTrackOpen(true);
              }, 0);
            }}
          >
            <FontAwesomeIcon icon={faCalendar} className="text-blue-600" />
            <div>
              <span>Show Track</span>
              <br />
              <span className="text-xs text-gray-500">Riwayat transaksi</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-2 py-2 cursor-pointer"
            onSelect={() => {
              setTimeout(() => {
                setAssetStatusOpen(true);
              }, 0);
            }}
          >
            <FontAwesomeIcon icon={faVideo} className="text-green-600" />
            <div>
              <span>Asset Status</span>
              <br />
              <span className="text-xs text-gray-500">Status CCTV</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-2 py-2 cursor-pointer"
            onSelect={() => {
              setTimeout(() => {
                setSummaryOpen(true);
              }, 0);
            }}
          >
            <FontAwesomeIcon icon={faChartSimple} className="text-blue-600" />
            <div>
              <span>Summary Dashboard</span>
              <br />
              <span className="text-xs text-gray-500">Analisis & grafik</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-2 py-2 cursor-pointer"
            onSelect={() => {
              setTimeout(() => {
                setDownloadOpen(true);
              }, 0);
            }}
          >
            <FontAwesomeIcon icon={faDownload} className="text-violet-600" />
            <div>
              <span>Download Report</span>
              <br />
              <span className="text-xs text-gray-500">Export data</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Show Track Modal */}
      <Modal
        isOpen={showTrackOpen}
        onClose={() => setShowTrackOpen(false)}
        title="Show Track - Dispenser Transactions"
        size="xl"
        contentClassName="bg-gray-50 min-w-[900px]"
      >
        <ShowTrackModalContent />
      </Modal>

      {/* Asset Status Modal */}
      <Modal
        isOpen={assetStatusOpen}
        onClose={() => setAssetStatusOpen(false)}
        title={
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faVideo} />
            <span>CCTV Asset Status Monitoring</span>
          </div>
        }
        size="xl"
        contentClassName="bg-gray-50 w-full rounded-lg"
      >
        <AssetStatusModalContent />
      </Modal>

      {/* Summary Dashboard Modal */}
      <Modal
        isOpen={summaryOpen}
        onClose={() => setSummaryOpen(false)}
        title={
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Summary Dashboard - Business Intelligence</span>
          </div>
        }
        size="none" // bypassing standard sizes
        contentClassName="bg-gray-50 min-w-[95vw] h-[85vh] overflow-y-auto rounded-lg"
      >
        <SummaryDashboardModalContent />
      </Modal>

      {/* Download Report Modal */}
      <Modal
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        title={
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Report</span>
          </div>
        }
        size="lg"
      >
        <DownloadReportModalContent onClose={() => setDownloadOpen(false)} />
      </Modal>
    </>
  );
}

function AssetStatusModalContent() {
  const stats = [
    {
      label: "Online",
      value: 72,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
      dot: "bg-green-500",
    },
    {
      label: "Warning",
      value: 20,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      dot: "bg-amber-500",
    },
    {
      label: "Critical",
      value: 7,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
      dot: "bg-red-500",
    },
    {
      label: "Total Cameras",
      value: 99,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      dot: "bg-blue-500",
    },
  ];

  const cameras = [
    {
      id: "CAM-001",
      name: "CAM 01 - Dispenser A1",
      spbu: "SPBU Banda Aceh",
      status: "Online",
      voltage: "12.3V",
      temp: "42°C",
      uptime: "720h",
      storage: "85%",
      maintenance: "2024-01-15",
    },
    {
      id: "CAM-002",
      name: "CAM 02 - Dispenser A2",
      spbu: "SPBU Banda Aceh",
      status: "Online",
      voltage: "12.1V",
      temp: "45°C",
      uptime: "720h",
      storage: "78%",
      maintenance: "2024-01-15",
    },
    {
      id: "CAM-003",
      name: "CAM 03 - Dispenser B1",
      spbu: "SPBU Banda Aceh",
      status: "Warning",
      voltage: "11.8V",
      temp: "48°C",
      uptime: "650h",
      storage: "92%",
      maintenance: "2024-01-10",
    },
    {
      id: "CAM-004",
      name: "CAM 04 - Dispenser B2",
      spbu: "SPBU Banda Aceh",
      status: "Online",
      voltage: "12.4V",
      temp: "41°C",
      uptime: "720h",
      storage: "81%",
      maintenance: "2024-01-15",
    },
    {
      id: "CAM-005",
      name: "CAM 05 - Dispenser A1 Left",
      spbu: "SPBU Gatot Subroto Medan",
      status: "Online",
      voltage: "12.2V",
      temp: "43°C",
      uptime: "710h",
      storage: "79%",
      maintenance: "2024-01-14",
    },
    {
      id: "CAM-006",
      name: "CAM 06 - Dispenser A1 Right",
      spbu: "SPBU Gatot Subroto Medan",
      status: "Online",
      voltage: "12.5V",
      temp: "40°C",
      uptime: "720h",
      storage: "75%",
      maintenance: "2024-01-15",
    },
    {
      id: "CAM-007",
      name: "CAM 07 - Dispenser A2",
      spbu: "SPBU Gatot Subroto Medan",
      status: "Online",
      voltage: "12.0V",
      temp: "44°C",
      uptime: "700h",
      storage: "82%",
      maintenance: "2024-01-14",
    },
    {
      id: "CAM-008",
      name: "CAM 08 - Dispenser B1",
      spbu: "SPBU Gatot Subroto Medan",
      status: "Warning",
      voltage: "11.6V",
      temp: "50°C",
      uptime: "620h",
      storage: "89%",
      maintenance: "2024-01-08",
    },
    {
      id: "CAM-011",
      name: "CAM 11 - Dispenser A2",
      spbu: "SPBU Sudirman Pekanbaru",
      status: "Critical",
      voltage: "-",
      temp: "-",
      uptime: "0h",
      storage: "-",
      maintenance: "-",
    },
    {
      id: "CAM-012",
      name: "CAM 12 - Dispenser A1",
      spbu: "SPBU Demang Palembang",
      status: "Online",
      voltage: "12.2V",
      temp: "43°C",
      uptime: "705h",
      storage: "60%",
      maintenance: "2024-01-12",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Filters Box */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">
              Filter by SPBU
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 bg-white">
              <option>All SPBU</option>
              <option>SPBU Banda Aceh</option>
              <option>SPBU Gatot Subroto Medan</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">
              Filter by Status
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 bg-white">
              <option>All Status</option>
              <option>Online</option>
              <option>Warning</option>
              <option>Critical</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Sort By</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 bg-white">
              <option>Camera Name</option>
              <option>Status</option>
              <option>Uptime</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bg} ${stat.border} border rounded-lg p-4 flex flex-col items-center justify-center`}
          >
            <span className={`text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-3 h-3 rounded-full ${stat.dot}`}></div>
              <span className={`text-sm font-medium ${stat.color}`}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {cameras.map((cam, idx) => (
          <div
            key={idx}
            className="bg-white border boundary-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-gray-800">{cam.name}</h4>
                <p className="text-xs text-gray-500">{cam.spbu}</p>
                <p className="text-[10px] text-gray-400 font-mono mt-1">
                  {cam.id}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1
                 ${
                   cam.status === "Online"
                     ? "bg-green-100 text-green-700"
                     : cam.status === "Warning"
                     ? "bg-amber-100 text-amber-700"
                     : "bg-red-100 text-red-700"
                 }`}
              >
                {cam.status === "Online" && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 rotate-45"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 rotate-45 -ml-1"></span>
                  </>
                )}
                {cam.status === "Warning" && <span className="mr-0.5">⚠️</span>}
                {cam.status === "Critical" && <span className="mr-0.5">✕</span>}
                {cam.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-[10px] text-gray-500 mb-0.5">Voltage</p>
                <p
                  className={`text-sm font-bold ${
                    cam.voltage === "-"
                      ? "text-gray-400"
                      : getMetricColor(cam.voltage, "voltage")
                  }`}
                >
                  {cam.voltage}
                </p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-[10px] text-gray-500 mb-0.5">Temperature</p>
                <p
                  className={`text-sm font-bold ${
                    cam.temp === "-" ? "text-gray-400" : "text-green-600"
                  }`}
                >
                  {cam.temp}
                </p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-[10px] text-gray-500 mb-0.5">Uptime</p>
                <p
                  className={`text-sm font-bold ${
                    cam.uptime === "0h" ? "text-red-500" : "text-blue-600"
                  }`}
                >
                  {cam.uptime}
                </p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-[10px] text-gray-500 mb-0.5">Storage</p>
                <p
                  className={`text-sm font-bold ${
                    cam.storage === "-"
                      ? "text-gray-400"
                      : getMetricColor(cam.storage, "storage")
                  }`}
                >
                  {cam.storage}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] text-gray-500">
              <span>Last Maintenance:</span>
              <span className="font-medium text-gray-700">
                {cam.maintenance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getMetricColor(value, type) {
  if (type === "voltage") {
    const num = parseFloat(value);
    if (num < 11.8 || num > 12.8) return "text-amber-600";
    return "text-green-600";
  }
  if (type === "storage") {
    const num = parseInt(value);
    if (num > 90) return "text-red-600";
    if (num > 80) return "text-amber-600";
    return "text-green-600";
  }
  return "text-gray-700";
}

function ShowTrackModalContent() {
  // Mock data matching the screenshot context
  const historyData = [
    {
      time: "14:23:45",
      spbu: "SPBU Pasteur",
      dispenser: "A1",
      plate: "D 1234 ABC",
      vehicle: "Motorcycle",
      fuel: "Pertalite",
      volume: "5.2",
      fraud: false,
    },
    {
      time: "14:22:31",
      spbu: "SPBU Dago",
      dispenser: "A2",
      plate: "D 5678 XYZ",
      vehicle: "Car",
      fuel: "Pertamax",
      volume: "20.5",
      fraud: false,
    },
    {
      time: "14:21:18",
      spbu: "SPBU Gatot Subroto",
      dispenser: "B1",
      plate: "B 9876 DEF",
      vehicle: "Motorcycle",
      fuel: "Pertalite",
      volume: "4.8",
      fraud: true,
    },
    {
      time: "14:20:02",
      spbu: "SPBU Pasteur",
      dispenser: "B2",
      plate: "D 2468 GHI",
      vehicle: "Car",
      fuel: "Solar",
      volume: "35",
      fraud: false,
    },
    {
      time: "14:18:47",
      spbu: "SPBU Pajajaran",
      dispenser: "A1",
      plate: "F 1357 JKL",
      vehicle: "Truck",
      fuel: "Solar",
      volume: "80",
      fraud: true,
    },
    {
      time: "14:17:33",
      spbu: "SPBU Dago",
      dispenser: "A1",
      plate: "D 8642 MNO",
      vehicle: "Motorcycle",
      fuel: "Pertalite",
      volume: "6",
      fraud: false,
    },
    {
      time: "14:15:20",
      spbu: "SPBU Ahmad Yani Surabaya",
      dispenser: "A1",
      plate: "L 1122 PQR",
      vehicle: "Car",
      fuel: "Pertamax",
      volume: "22",
      fraud: false,
    },
    {
      time: "14:10:05",
      spbu: "SPBU Gatot Subroto Medan",
      dispenser: "A2",
      plate: "BK 3344 STU",
      vehicle: "Motorcycle",
      fuel: "Pertalite",
      volume: "5.5",
      fraud: false,
    },
    {
      time: "14:08:42",
      spbu: "SPBU Thamrin",
      dispenser: "B1",
      plate: "B 5566 VWX",
      vehicle: "Car",
      fuel: "Pertamax Turbo",
      volume: "28",
      fraud: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">SPBU</label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All SPBU</option>
            <option>SPBU Pasteur</option>
            <option>SPBU Dago</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Dispenser
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Dispensers</option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="2026-01-15"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Time Range
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Day</option>
            <option>Morning (06:00 - 12:00)</option>
            <option>Afternoon (12:00 - 18:00)</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Apply Filters
        </Button>
        <Button
          variant="secondary"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          Reset
        </Button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="font-semibold text-gray-700">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">SPBU</th>
                <th className="px-4 py-3 font-semibold">Dispenser</th>
                <th className="px-4 py-3 font-semibold">License Plate</th>
                <th className="px-4 py-3 font-semibold">Vehicle Type</th>
                <th className="px-4 py-3 font-semibold">Fuel Type</th>
                <th className="px-4 py-3 font-semibold text-right">
                  Volume (L)
                </th>
                <th className="px-4 py-3 font-semibold text-center w-[200px] sticky right-0 bg-gray-50 shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historyData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-600 font-mono text-xs">
                    {item.time}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.spbu}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.dispenser}
                  </td>
                  <td className="px-4 py-3 font-mono font-semibold text-gray-700">
                    {item.plate}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.vehicle}</td>
                  <td className="px-4 py-3 text-gray-600">{item.fuel}</td>
                  <td className="px-4 py-3 text-gray-800 font-medium text-right">
                    {item.volume}
                  </td>
                  <td className="px-4 py-2 sticky right-0 bg-white shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-center gap-2">
                      {item.fraud ? (
                        <>
                          <Button
                            size="sm"
                            className="h-8 bg-red-100 hover:bg-red-200 text-red-700 border border-red-200 gap-2 px-3"
                          >
                            <FontAwesomeIcon icon={faVideo} />
                            Video
                          </Button>
                          <Button
                            size="sm"
                            className="h-8 bg-orange-100 hover:bg-orange-200 text-orange-800 border border-orange-200 gap-2 px-3"
                          >
                            <FontAwesomeIcon icon={faImage} />
                            Snapshots
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          className="h-8 bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200 gap-2 px-3 w-full max-w-[100px]"
                        >
                          <FontAwesomeIcon icon={faVideo} />
                          Video
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
