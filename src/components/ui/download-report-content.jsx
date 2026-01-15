import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudDownloadAlt,
  faFileAlt,
  faVideo,
  faChartSimple,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export function DownloadReportModalContent({ onClose }) {
  const [reportType, setReportType] = useState("transaction");
  const [format, setFormat] = useState("pdf");

  const reportTypes = [
    {
      id: "transaction",
      title: "Transaction Report",
      desc: "All transaction data",
      icon: faFileAlt,
      border: "border-blue-200",
      activeBorder: "border-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    {
      id: "fraud",
      title: "Fraud Report",
      desc: "Fraud alerts only",
      icon: faVideo,
      border: "border-red-200",
      activeBorder: "border-red-500",
      bg: "bg-red-50",
      text: "text-red-700",
    },
    {
      id: "asset",
      title: "Asset Status Report",
      desc: "CCTV status data",
      icon: faVideo,
      border: "border-green-200",
      activeBorder: "border-green-500",
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      id: "summary",
      title: "Summary Report",
      desc: "Aggregated statistics",
      icon: faChartSimple,
      border: "border-violet-200",
      activeBorder: "border-violet-500",
      bg: "bg-violet-50",
      text: "text-violet-700",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Report Type */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3">Select Report Type</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setReportType(type.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-start gap-4 ${
                reportType === type.id
                  ? `${
                      type.activeBorder
                    } bg-white shadow-sm ring-1 ring-offset-1 ${type.text.replace(
                      "700",
                      "500"
                    )}`
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div className={`mt-1`}>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    reportType === type.id
                      ? "border-none bg-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {reportType === type.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-800">{type.title}</h5>
                <p className="text-sm text-gray-500">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3">Date Range</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">From</label>
            <div className="relative">
              <input
                type="date"
                defaultValue="2026-01-08"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500">To</label>
            <div className="relative">
              <input
                type="date"
                defaultValue="2026-01-15"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export Format */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3">Export Format</h4>
        <div className="grid grid-cols-3 gap-4">
          <label
            className={`flex items-center justify-center gap-3 p-3 rounded border cursor-pointer hover:bg-gray-50 ${
              format === "pdf"
                ? "border-blue-500 bg-blue-50/50"
                : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="format"
              checked={format === "pdf"}
              onChange={() => setFormat("pdf")}
              className="accent-blue-600"
            />
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">
                <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
              </span>
              <span className="text-sm font-medium">PDF</span>
            </div>
          </label>
          <label
            className={`flex items-center justify-center gap-3 p-3 rounded border cursor-pointer hover:bg-gray-50 ${
              format === "excel"
                ? "border-green-500 bg-green-50/50"
                : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="format"
              checked={format === "excel"}
              onChange={() => setFormat("excel")}
              className="accent-blue-600"
            />
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">
                <FontAwesomeIcon icon={faFileExcel} className="text-xl" />
              </span>
              <span className="text-sm font-medium">Excel</span>
            </div>
          </label>
          <label
            className={`flex items-center justify-center gap-3 p-3 rounded border cursor-pointer hover:bg-gray-50 ${
              format === "csv"
                ? "border-blue-500 bg-blue-50/50"
                : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="format"
              checked={format === "csv"}
              onChange={() => setFormat("csv")}
              className="accent-blue-600"
            />
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-bold">
                <FontAwesomeIcon icon={faFileCsv} className="text-xl" />
              </span>
              <span className="text-sm font-medium">CSV</span>
            </div>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <Button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg shadow-lg shadow-violet-200">
          <FontAwesomeIcon icon={faCloudDownloadAlt} className="mr-2" />
          Generate & Download
        </Button>
        <Button
          variant="outline"
          className="px-8 py-6 text-gray-600 bg-gray-100 hover:bg-gray-200 border-none"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
