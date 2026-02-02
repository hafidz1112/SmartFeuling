// src/component/content.jsx
import React, { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  Video,
  Image as ImageIcon,
  Download,
  CheckCircle,
  Smartphone,
  Mail,
} from "lucide-react";
import Modal from "@/components/ui/modal";

import { mockTransactions } from "@/lib/data";
import {
  getFraudDetection,
  STATUS_BADGE_COLORS,
  FRAUD_BADGE_COLORS,
  getUniqueValues,
  filterTransactions,
} from "@/lib/transaction-utils";
import { TABLE_HEADERS, UI_STRINGS, FRAUD_TYPE } from "@/lib/types";

const Content = ({ darkMode }) => {
  const [selectedTx, setSelectedTx] = useState(null);
  const [evidenceType, setEvidenceType] = useState("all"); // 'video', 'face', 'plate'
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(TABLE_HEADERS);

  const [filters, setFilters] = useState({
    subsidy: "",
    rfid: "",
    fraud: "",
  });

  const openModal = (tx, type) => {
    setSelectedTx(tx);
    setEvidenceType(type);
  };

  const closeModal = () => {
    setSelectedTx(null);
    setEvidenceType("all");
  };

  const transactionsWithFraud = useMemo(() => {
    return mockTransactions.map((t) => ({
      ...t,
      fraudDetection: getFraudDetection(t.subsidy, t.rfid),
    }));
  }, []);

  const filteredTransactions = useMemo(() => {
    return filterTransactions(transactionsWithFraud, filters);
  }, [filters, transactionsWithFraud]);

  const uniqueFraud = useMemo(
    () => getUniqueValues(transactionsWithFraud, "fraudDetection"),
    [transactionsWithFraud],
  );

  const resetFilters = () => {
    setFilters({ subsidy: "", rfid: "", fraud: "" });
  };

  const getStatusBadgeColor = (status) => {
    return STATUS_BADGE_COLORS[status] || "bg-gray-100 text-gray-800";
  };

  const getFraudBadgeColor = (fraudType) => {
    return FRAUD_BADGE_COLORS[fraudType] || "bg-gray-100 text-gray-800";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const columnButton = e.target.closest(".column-toggle");
      const columnMenu = e.target.closest(".column-menu");
      if (!columnButton && !columnMenu) {
        setIsColumnMenuOpen(false);
      }
    };

    if (isColumnMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isColumnMenuOpen]);

  return (
    <div
      className={`p-4 rounded-lg border ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-white shadow"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
        <h2
          className={`text-sm font-bold ${
            darkMode ? "text-slate-100" : "text-gray-900"
          }`}
        >
          {UI_STRINGS.TITLE}
        </h2>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <div className="relative">
            <button
              className={`column-toggle px-3 py-1.5 text-xs rounded border flex items-center gap-1 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => setIsColumnMenuOpen(!isColumnMenuOpen)}
            >
              Columns <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {isColumnMenuOpen && (
              <div
                className={`column-menu absolute z-10 mt-1 w-48 p-2 rounded shadow-lg ${
                  darkMode
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border border-gray-200"
                }`}
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                <h4 className="text-[10px] font-medium mb-1 px-1">
                  Show Columns:
                </h4>
                {TABLE_HEADERS.map((header) => (
                  <label
                    key={header}
                    className="flex items-center text-[11px] py-1 px-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={visibleColumns.includes(header)}
                      onChange={(e) => {
                        setVisibleColumns((prev) => {
                          const newSet = new Set(prev);
                          if (e.target.checked) {
                            newSet.add(header);
                          } else {
                            newSet.delete(header);
                          }
                          return TABLE_HEADERS.filter((col) => newSet.has(col));
                        });
                      }}
                      className="mr-2 w-3 h-3"
                    />
                    {header}
                  </label>
                ))}
              </div>
            )}
          </div>

          <select
            value={filters.fraud}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, fraud: e.target.value }))
            }
            className={`px-3 py-1.5 text-xs rounded border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="">{UI_STRINGS.ALL_FRAUD}</option>
            {uniqueFraud.map((val, i) => (
              <option key={i} value={val}>
                {val}
              </option>
            ))}
          </select>

          <button
            onClick={resetFilters}
            className={`px-3 py-1.5 text-xs rounded ${
              darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {UI_STRINGS.RESET}
          </button>
        </div>
      </div>

      <p
        className={`text-[12px] mb-3 ${
          darkMode ? "text-slate-400" : "text-gray-500"
        }`}
      >
        {UI_STRINGS.SHOWING_TRANSACTIONS(
          filteredTransactions.length,
          mockTransactions.length,
        )}
      </p>

      <div className="overflow-x-auto h-64">
        <table className="w-full text-[11px] min-w-max border-collapse">
          <thead>
            <tr
              className={`border-b ${
                darkMode
                  ? "border-slate-700 text-slate-300"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {visibleColumns.map((header, idx) => (
                <th
                  key={idx}
                  className="py-2 px-2 text-left whitespace-nowrap sticky top-0 bg-white dark:bg-slate-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t, idx) => (
              <tr
                key={idx}
                className={`border-b ${
                  darkMode
                    ? "border-slate-800 hover:bg-slate-800/50"
                    : "border-gray-200 hover:bg-gray-50"
                } ${darkMode ? "text-slate-300" : "text-gray-600"}`}
              >
                {visibleColumns.map((col, i) => {
                  switch (col) {
                    case "Time":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.time}
                        </td>
                      );
                    case "SPBU":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.spbu}
                        </td>
                      );
                    case "Dispenser":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.dispenser}
                        </td>
                      );
                    case "Vehicle Type":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.vehicle}
                        </td>
                      );
                    case "Brand":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.brand}
                        </td>
                      );
                    case "Color":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.color}
                        </td>
                      );
                    case "License Plate":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.plate}
                        </td>
                      );
                    case "Fuel Type":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.fuel}
                        </td>
                      );
                    case "Volume (L)":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.volume}
                        </td>
                      );
                      case "Harga":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.harga}
                        </td>
                      );

                    case "Subsidy Status":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs ${getStatusBadgeColor(
                              t.subsidy,
                            )}`}
                          >
                            {t.subsidy}
                          </span>
                        </td>
                      );

                    case "RFID Match":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs ${getStatusBadgeColor(
                              t.rfid,
                            )}`}
                          >
                            {t.rfid}
                          </span>
                        </td>
                      );

                    case "Fraud Detection":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs ${getFraudBadgeColor(
                              t.fraudDetection,
                            )}`}
                          >
                            {t.fraudDetection}
                          </span>
                        </td>
                      );

                    case "Evidence":
                      return (
                        <td key={i} className="py-2 px-2 whitespace-nowrap">
                          {t.fraudDetection === FRAUD_TYPE.NO_FRAUD ? (
                            <button onClick={() => openModal(t, "video")}>
                              <Video className="text-blue-700" size={20} />
                            </button>
                          ) : (
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => openModal(t, "face")}
                                className="relative inline-flex"
                              >
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                                <span className="relative text-red-500">
                                  <Video className="text-red-500" size={20} />
                                </span>
                              </button>
                              <button onClick={() => openModal(t, "plate")}>
                                <ImageIcon
                                  className="text-orange-500"
                                  size={20}
                                />
                              </button>
                            </div>
                          )}
                        </td>
                      );

                    default:
                      return <td key={i}></td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={selectedTx !== null}
        onClose={closeModal}
        title={
          <div className="flex items-center gap-2">
            {evidenceType === "video" && <Video size={20} />}
            {evidenceType === "face" && (
              <ImageIcon size={20} className="text-red-500" />
            )}
            {evidenceType === "plate" && (
              <ImageIcon size={20} className="text-yellow-500" />
            )}
            <span>
              {evidenceType === "video"
                ? "Video Recording"
                : evidenceType === "face"
                  ? "Fraud Suspect Detection"
                  : "License Plate Snapshot"}
            </span>
          </div>
        }
        size="xl"
      >
        {selectedTx && (
          <div className="space-y-4 font-sans">
            {/* Info Transaksi */}
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
                      selectedTx.fraudDetection === "No Fraud"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  />
                  <span
                    className={
                      selectedTx.fraudDetection === "No Fraud"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {selectedTx.fraudDetection}
                  </span>
                </div>
              </div>
            </div>

            {/* VIDEO RECORDING */}
            {evidenceType === "video" && (
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
                  <Video size={16} className="text-blue-500" /> Video Recording
                </h4>
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-sm group">
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono">
                    CAM {selectedTx.dispenser} - RECORDING
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white"></span> REC
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60">
                    <Video size={48} className="text-gray-500 mb-2" />
                    <p className="text-gray-400 text-xs">Full Video Evidence</p>
                  </div>
                  <div className="absolute bottom-3 left-3 font-mono text-xs text-white opacity-80">
                    2026-01-14 &nbsp; {selectedTx.time}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                      <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Download size={16} /> Download Video (MP4)
                </button>
              </div>
            )}

            {/* LICENSE PLATE SNAPSHOT */}
            {evidenceType === "plate" && (
              <div className="space-y-2 w-full">
                <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
                  <ImageIcon size={16} className="text-yellow-500" /> License
                  Plate Detection
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
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
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                      <Download size={16} /> Download Plate Image
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="relative h-40 bg-gray-800 rounded-lg overflow-hidden border border-red-500/50">
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
                          <div className="absolute -inset-2 border border-red-500/30 border-dashed rounded-lg"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-1.5 py-0.5 rounded">
                        Confidence: 94.2%
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                      <Download size={16} /> Download Suspect Image
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* FRAUD SUSPECT (FACE) SNAPSHOT */}
            {evidenceType === "face" && (
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
                  <Video size={16} className="text-blue-500" /> Video Recording
                </h4>
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-sm group">
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono">
                    CAM {selectedTx.dispenser} - RECORDING
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white"></span> REC
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60">
                    <Video size={48} className="text-gray-500 mb-2" />
                    <p className="text-gray-400 text-xs">Full Video Evidence</p>
                  </div>
                  <div className="absolute bottom-3 left-3 font-mono text-xs text-white opacity-80">
                    2026-01-14 &nbsp; {selectedTx.time}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                      <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Download size={16} /> Download Video (MP4)
                </button>
              </div>
            )}

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
