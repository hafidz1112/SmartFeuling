// src/component/sidenav.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faLocationDot, faVideo, faTv} from '@fortawesome/free-solid-svg-icons';
import regions from "../data/regions"


const Sidenav = ({ darkMode, setCurrentMapUrl }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [expandedRegions, setExpandedRegions] = useState({});
    const [expandedCities, setExpandedCities] = useState({});
    const [expandedSpbus, setExpandedSpbus] = useState({});

//   const regions = [
//     {
//       name: "Region I",
//       cities: [
//         {
//           name: "Aceh",
//           spbus: [
//             {
//               name: "11.101.01 - SPBU Banda Aceh",
//               lat: 5.5465,
//               lng: 95.3247,
//               zoom: 17,
//               dispensers: [
//                 { name: "Dispenser A1", lat: 5.5465, lng: 95.3247 },
//                 { name: "Dispenser A2", lat: 5.5465, lng: 95.3247 },
//                 { name: "Dispenser B1", lat: 5.5465, lng: 95.3247 },
//                 { name: "Dispenser B2", lat: 5.5465, lng: 95.3247 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "Medan",
//           spbus: [
//             {
//               name: "06.123.45 - SPBU Medan",
//               lat: 3.597,
//               lng: 98.675,
//               zoom: 14,
//               dispensers: [
//                 { name: "Dispenser A1", lat: 3.597, lng: 98.675 },
//                 { name: "Dispenser B1", lat: 3.597, lng: 98.675 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "Pekanbaru",
//           spbus: []
//         }
//       ]
//     },
//     {
//       name: "Region II",
//       cities: [
//         {
//           name: "Palembang",
//           spbus: [
//             {
//               name: "16.401.01 - SPBU Dem...",
//               lat: -2.99,
//               lng: 104.75,
//               zoom: 13,
//               dispensers: [
//                 { name: "Dispenser A1", lat: -2.99, lng: 104.75 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "Jambi",
//           spbus: []
//         },
//         {
//           name: "Lampung",
//           spbus: []
//         }
//       ]
//     },
//     { name: "Region III", cities: [] },
//     { name: "Region IV", cities: [] },
//     { name: "Region V", cities: [] },
//     { name: "Region VI", cities: [] },
//     { name: "Region VII", cities: [] },
//   ];

  const toggleRegion = (regionName) => {
    setExpandedRegions(prev => ({
      ...prev,
      [regionName]: !prev[regionName]
    }));
  };

  const toggleCity = (cityName) => {
    setExpandedCities(prev => ({
      ...prev,
      [cityName]: !prev[cityName]
    }));
  };

  const toggleSpbu = (spbuName) => {
    setExpandedSpbus(prev => ({
      ...prev,
      [spbuName]: !prev[spbuName]
    }));
  };

  return (
    <div className="p-4 space-y-2">
        <div className={`flex justify-between`}>
            <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400">SPBU LOCATIONS</h3>
        </div>
      {regions.map((region, idx) => (
        <div key={idx} className="mb-2">
          {/* Region Header */}
          <div
            className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleRegion(region.name)}
          >
            <span className="mr-2 text-blue-600"><FontAwesomeIcon icon={faLocationDot} /></span>
            <span>{region.name}</span>
            {/* <span className="ml-auto text-sm">
              {expandedRegions[region.name] ? '▼' : '▶'}
            </span> */}
          </div>

          {/* Cities (Expandable) */}
          {expandedRegions[region.name] && region.cities.length > 0 && (
            <div className="ml-6 mt-1 space-y-1">
              {region.cities.map((city, i) => (
                <div key={i}>
                  {/* City Header */}
                  <div
                    className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => toggleCity(city.name)}
                  >
                    <span className="mr-2 text-[10px] text-blue-700"><FontAwesomeIcon icon={faHouse} /></span>
                    <span className='text-xs'>{city.name}</span>
                    {/* <span className="ml-auto text-[10px]">
                      {expandedCities[city.name] ? '▼' : '▶'}
                    </span> */}
                  </div>

                  {/* SPBUs (Expandable) */}
                  {expandedCities[city.name] && city.spbus.length > 0 && (
                    <div className="ml-6 mt-1 space-y-1">
                      {city.spbus.map((spbu, j) => (
                        <div key={j}>
                          {/* SPBU Header */}
                          <div
                            className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => toggleSpbu(spbu.name)}
                          >
                            <span className="mr-1 text-[10px]"><FontAwesomeIcon icon={faTv} className='text-green-600'/></span>
                            <span className='text-[10px] '>{spbu.name}</span>
                            
                          </div>

                          {/* Dispensers (Expandable) */}
                          {expandedSpbus[spbu.name] && spbu.dispensers.length > 0 && (
                            <div className="ml-6 mt-1 space-y-1">
                              {spbu.dispensers.map((dispenser, k) => (
                                <div
                                  key={k}
                                  className="text-xs pl-2 py-1 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                  onClick={() => {
                                    const url = `https://www.google.com/maps/embed?q=${dispenser.lat},${dispenser.lng}&zoom=${spbu.zoom}&output=embed`;
                                    setCurrentMapUrl(url);
                                  }}
                                >
                                  <span className="mr-1"><FontAwesomeIcon icon={faVideo} className='text-blue-600'/></span>
                                  <span>{dispenser.name}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidenav;