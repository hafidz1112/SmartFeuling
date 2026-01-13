import React from "react";

const content = ({darkMode}) => {
    const transactions = [
        { time: "12:58:23", spbu: "SPBU Banda Aceh", dispenser: "B1", vehicle: "Motorcycle", plate: "BL 9012 NOP", fuel: "Pertalite", volume: "5.8", subsidy: "Valid", rfid: "Valid", fraud: "No Fraud" },
        { time: "12:45:10", spbu: "SPBU Sunset Road Bali", dispenser: "A1", vehicle: "Car", plate: "DK 3456 QRS", fuel: "Pertamax Turbo", volume: "32", subsidy: "N/A", rfid: "N/A", fraud: "No Fraud" },
        { time: "11:22:49", spbu: "SPBU Gatot Subroto", dispenser: "A1", vehicle: "Motorcycle", plate: "B 1122 TUV", fuel: "Pertalite", volume: "5.5", subsidy: "Valid", rfid: "Valid", fraud: "No Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        { time: "10:15:30", spbu: "SPBU Ahmad Yani Banjarmasin", dispenser: "B1", vehicle: "Truck", plate: "DA 7890 WXY", fuel: "Solar", volume: "120", subsidy: "Not Valid", rfid: "Valid", fraud: "RFID Fraud" },
        ];
    return (
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
            <h2 className="text-sm font-bold mb-2">Real-Time Transaction Log</h2>
            <p className="text-[12px] text-gray-500 mb-4">Showing all transactions</p>

            <div className="overflow-x-auto overflow-y-auto max-h-[250px] ">
                <table className="w-full text-[10px] min-w-max">
                    <thead>
                    <tr className={`border-b 'border-gray-200'}`}>
                        {['Time', 'SPBU', 'Dispenser', 'Vehicle Type', 'License Plate', 'Fuel Type', 'Volume (L)', 'Subsidy Status', 'RFID Match', 'Fraud Detection', 'Evidence'].map((header, idx) => (
                        <th key={idx} className="py-2 px-2 text-left whitespace-nowrap">
                            {header}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((t, idx) => (
                        <tr key={idx} className={`border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}>
                        <td className="py-2 px-2 whitespace-nowrap">{t.time}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.spbu}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.dispenser}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.vehicle}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.plate}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.fuel}</td>
                        <td className="py-2 px-2 whitespace-nowrap">{t.volume}</td>
                        <td className="py-2 px-2 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded text-xs ${
                            t.subsidy === 'Valid' ? 'bg-green-100 text-green-800' :
                            t.subsidy === 'Not Valid' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                            }`}>
                            {t.subsidy}
                            </span>
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded text-xs ${
                            t.rfid === 'Valid' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                            }`}>
                            {t.rfid}
                            </span>
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded text-xs ${
                            t.fraud === 'No Fraud' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                            }`}>
                            {t.fraud}
                            </span>
                        </td>
                        <td className="py-2 px-2 whitespace-nowrap">
                            {t.fraud === 'No Fraud' ? (
                                <span>📹</span>
                            ) : (
                                <span className="text-red-500">🔴📸</span>
                            )}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
          </div>
    )
}

export default content