/**
 * Transaction Utility Functions
 */

import { FRAUD_TYPE, SUBSIDY_STATUS, RFID_STATUS } from "./types";

/**
 * Fraud Detection Lookup Map
 * Maps subsidy-rfid combinations to fraud types
 */
const FRAUD_DETECTION_MAP = {
  [`${SUBSIDY_STATUS.VALID}-${RFID_STATUS.VALID}`]: FRAUD_TYPE.NO_FRAUD,
  [`${SUBSIDY_STATUS.NOT_APPLICABLE}-${RFID_STATUS.VALID}`]:
    FRAUD_TYPE.NO_FRAUD,
  [`${SUBSIDY_STATUS.VALID}-${RFID_STATUS.NOT_VALID}`]: FRAUD_TYPE.FRAUD_RFID,
  [`${SUBSIDY_STATUS.NOT_APPLICABLE}-${RFID_STATUS.NOT_VALID}`]:
    FRAUD_TYPE.FRAUD_RFID,
  [`${SUBSIDY_STATUS.NOT_VALID}-${RFID_STATUS.VALID}`]:
    FRAUD_TYPE.MISMATCH_SUBSIDY,
  [`${SUBSIDY_STATUS.NOT_VALID}-${RFID_STATUS.NOT_APPLICABLE}`]:
    FRAUD_TYPE.MISMATCH_SUBSIDY,
  [`${SUBSIDY_STATUS.NOT_VALID}-${RFID_STATUS.NOT_VALID}`]:
    FRAUD_TYPE.FRAUD_RFID,
};

/**
 * Determines fraud detection type based on subsidy and RFID status
 * @param {string} subsidy - Subsidy status
 * @param {string} rfid - RFID match status
 * @returns {string} Fraud detection result
 */
export const getFraudDetection = (subsidy, rfid) => {
  const key = `${subsidy}-${rfid}`;
  return FRAUD_DETECTION_MAP[key] || FRAUD_TYPE.UNKNOWN;
};

/**
 * Badge color mapping for status indicators
 */
export const STATUS_BADGE_COLORS = {
  [SUBSIDY_STATUS.VALID]: "bg-green-100 text-green-800",
  [SUBSIDY_STATUS.NOT_VALID]: "bg-red-100 text-red-800",
  [SUBSIDY_STATUS.NOT_APPLICABLE]: "bg-gray-100 text-gray-800",
  [RFID_STATUS.VALID]: "bg-green-100 text-green-800",
  [RFID_STATUS.NOT_VALID]: "bg-red-100 text-red-800",
  [RFID_STATUS.NOT_APPLICABLE]: "bg-gray-100 text-gray-800",
};

/**
 * Fraud badge color mapping
 */
export const FRAUD_BADGE_COLORS = {
  [FRAUD_TYPE.NO_FRAUD]: "bg-green-100 text-green-800",
  [FRAUD_TYPE.FRAUD_RFID]: "bg-red-100 text-red-800",
  [FRAUD_TYPE.MISMATCH_SUBSIDY]: "bg-yellow-100 text-yellow-800",
  [FRAUD_TYPE.UNKNOWN]: "bg-gray-100 text-gray-800",
};

/**
 * Get unique values from array of objects by key
 * @param {Array} array - Array of objects
 * @param {string} key - Key to extract unique values from
 * @returns {Array} Array of unique values
 */
export const getUniqueValues = (array, key) => {
  return [...new Set(array.map((item) => item[key]))];
};

/**
 * Filter transactions based on multiple criteria
 * @param {Array} transactions - Array of transactions
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered transactions
 */
export const filterTransactions = (transactions, filters) => {
  return transactions.filter((transaction) => {
    const matchSubsidy = filters.subsidy
      ? transaction.subsidy === filters.subsidy
      : true;
    const matchRfid = filters.rfid ? transaction.rfid === filters.rfid : true;
    const matchFraud = filters.fraud
      ? transaction.fraudDetection === filters.fraud
      : true;
    return matchSubsidy && matchRfid && matchFraud;
  });
};
