import React from "react";
import { Routes, Route } from "react-router";
import { LoginPage } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ToastProvider } from "./contexts/ToastContext";

const App = () => {
  return (
    <ToastProvider>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ToastProvider>
  );
};

export default App;
