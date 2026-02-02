/**
 * Transaction Types & Interfaces
 */

export const SUBSIDY_STATUS = {
  VALID: "Valid",
  NOT_VALID: "Not Valid",
  NOT_APPLICABLE: "N/A",
};

export const RFID_STATUS = {
  VALID: "Valid",
  NOT_VALID: "Not Valid",
  NOT_APPLICABLE: "N/A",
};

export const FRAUD_TYPE = {
  NO_FRAUD: "No Fraud",
  FRAUD_RFID: "Fraud RFID",
  MISMATCH_SUBSIDY: "Mismatch Subsidi",
  UNKNOWN: "Unknown",
};

export const VEHICLE_TYPE = {
  MOTORCYCLE: "Motorcycle",
  CAR: "Car",
  TRUCK: "Truck",
};

export const FUEL_TYPE = {
  PERTALITE: "Pertalite",
  PERTAMAX: "Pertamax",
  PERTAMAX_TURBO: "Pertamax Turbo",
  SOLAR: "Solar",
};


/**
 * Table Headers
 */
export const TABLE_HEADERS = [
  "Time",
  "SPBU",
  "Dispenser",
  "Vehicle Type",
  "Brand",
  "Color",
  "License Plate",
  "Fuel Type",
  "Volume (L)",
  "Harga",
  "Subsidy Status",
  "RFID Match",
  "Fraud Detection",
  "Evidence",
];

/**
 * UI Text Constants
 */
export const UI_STRINGS = {
  TITLE: "Real-Time Transaction Log",
  SHOWING_TRANSACTIONS: (filtered, total) =>
    `Showing ${filtered} of ${total} transactions`,
  ALL_SUBSIDY: "All Subsidy",
  ALL_RFID: "All RFID",
  ALL_FRAUD: "All Fraud",
  RESET: "Reset",
};
