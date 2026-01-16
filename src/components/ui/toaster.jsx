// src/components/ui/toaster.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faCheck,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Toaster = ({
  message,
  type = "success",
  duration = 3000,
  onClose,
  index = 0,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide setelah durasi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Jika user klik X
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  // Konfigurasi warna dan icon berdasarkan tipe
  const config = {
    success: { bg: "#39c964", icon: faCheck },
    info: { bg: "#3b82f6", icon: faFloppyDisk },
    error: { bg: "#ef4444", icon: faTimesCircle },
    warning: { bg: "#f59e0b", icon: faExclamationTriangle },
  };

  const { bg, icon } = config[type] || config.success;

  return (
    <div
      style={{
        position: "fixed",
        top: `${1 + index * 5}rem`, // Stack multiple toasts
        right: "1rem",
        maxWidth: "28rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: bg,
        color: "white",
        display: "flex",
        gap: "0.75rem",
        zIndex: 9999,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        animation: "slideInRight 0.3s ease-out",
      }}
    >
      <span style={{ fontSize: "1.25rem" }}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div style={{ flex: 1, fontSize: "0.875rem", fontWeight: 500 }}>
        {message}
      </div>
      <button
        onClick={handleClose}
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "1.25rem",
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default Toaster;
