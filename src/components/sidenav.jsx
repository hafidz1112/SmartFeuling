import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faVideo,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from "lucide-react";
import regions from "../data/regions";

const Sidenav = ({ setCurrentMapUrl, setCurrentLocation }) => {
  const [expandedRegions, setExpandedRegions] = useState({});
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedSpbus, setExpandedSpbus] = useState({});

  const toggleRegion = (regionName) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [regionName]: !prev[regionName],
    }));
  };

  const toggleCity = (cityName) => {
    setExpandedCities((prev) => ({
      ...prev,
      [cityName]: !prev[cityName],
    }));
  };

  const toggleSpbu = (spbuName) => {
    setExpandedSpbus((prev) => ({
      ...prev,
      [spbuName]: !prev[spbuName],
    }));
  };

  // Fungsi untuk mengarahkan map ke SPBU yang diklik
  const handleSpbuClick = (spbu, cityName, regionName) => {
    // Gunakan koordinat dari SPBU yang diklik dengan zoom level 14 (untuk kota)
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000!2d${spbu.lng}!3d${spbu.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z14!5e0!3m2!1sid!2sid!4v1700000000000`;
    setCurrentMapUrl(url);
    
    if (setCurrentLocation) {
      setCurrentLocation({
        region: regionName,
        city: cityName,
        spbu: spbu.name,
        dispenser: ""
      });
    }
  };

  // Fungsi untuk mengarahkan map ke kota saat kota diklik
  const handleCityClick = (cityName, regionName) => {
    // Cari kota dan ambil SPBU pertamanya
    for (const region of regions) {
      if (region.name === regionName) {
        for (const city of region.cities) {
          if (city.name === cityName && city.spbus.length > 0) {
            const spbu = city.spbus[0];
            const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000!2d${spbu.lng}!3d${spbu.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z14!5e0!3m2!1sid!2sid!4v1700000000000`;
            setCurrentMapUrl(url);
            
            if (setCurrentLocation) {
              setCurrentLocation({
                region: regionName,
                city: cityName,
                spbu: "",
                dispenser: ""
              });
            }
            return;
          }
        }
      }
    }
  };

  return (
    <div className="p-4 space-y-2 h-auto flex flex-col">
      {/* Header tetap di atas */}
      <div className="flex-shrink-0">
        <div className={`flex justify-between`}>
          <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400">
            SPBU LOCATIONS
          </h3>
        </div>
      </div>

      {/* Konten dengan scroll - Batasi tinggi */}
      <div className="flex-1 overflow-y-auto max-h-[680px]"> {/* Ubah angka 180 sesuai kebutuhan */}
        {regions.map((region, idx) => (
          <div key={idx} className="mb-2">
            {/* Region Header */}
            <div
              className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => toggleRegion(region.name)}
            >
              <ChevronRight
                className={`mr-1 transition-transform duration-200 dark:text-white ${
                  expandedRegions[region.name] ? "rotate-90" : ""
                }`}
                size={16}
              />
              <span className="mr-2 text-blue-600 dark:text-white">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className="dark:text-white">{region.name}</span>
            </div>

            {/* Cities (Expandable) */}
            {expandedRegions[region.name] && region.cities.length > 0 && (
              <div className="ml-6 mt-1 space-y-1">
                {region.cities.map((city, i) => (
                  <div key={i}>
                    {/* City Header */}
                    <div
                      className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => {
                        toggleCity(city.name);
                        handleCityClick(city.name, region.name);
                      }}
                    >
                      <ChevronRight
                        className={`mr-1 transition-transform dark:text-white duration-200 ${
                          expandedCities[city.name] ? "rotate-90" : ""
                        }`}
                        size={14}
                      />
                      <span className="mr-2 text-[10px] text-blue-700 dark:text-white">
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span className="text-xs dark:text-white">{city.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                        {city.spbus.length} SPBU
                      </span>
                    </div>

                    {/* SPBUs (Expandable) */}
                    {expandedCities[city.name] && city.spbus.length > 0 && (
                      <div className="ml-6 mt-1 space-y-1">
                        {city.spbus.map((spbu, j) => (
                          <div key={j}>
                            {/* SPBU Header */}
                            <div
                              className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={() => {
                                toggleSpbu(spbu.name);
                                handleSpbuClick(spbu, city.name, region.name);
                              }}
                            >
                              <ChevronRight
                                className={`mr-1 transition-transform dark:text-white duration-200 ${
                                  expandedSpbus[spbu.name] ? "rotate-90" : ""
                                }`}
                                size={12}
                              />
                              <span className="mr-1 text-[10px]">
                                <FontAwesomeIcon
                                  icon={faTv}
                                  className="text-green-600"
                                />
                              </span>
                              <span className="text-[10px] dark:text-white truncate">
                                {spbu.name}
                              </span>
                            </div>

                            {/* Dispensers (Expandable) */}
                            {expandedSpbus[spbu.name] &&
                              spbu.dispensers.length > 0 && (
                                <div className="ml-6 mt-1 space-y-1">
                                  {spbu.dispensers.map((dispenser, k) => (
                                    <div
                                      key={k}
                                      className="text-xs pl-2 py-1 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                      onClick={() => {
                                        // Untuk dispenser, gunakan zoom yang lebih detail (17)
                                        const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d${dispenser.lng}!3d${dispenser.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z17!5e0!3m2!1sid!2sid!4v1700000000000`;
                                        setCurrentMapUrl(url);
                                        
                                        if (setCurrentLocation) {
                                          setCurrentLocation({
                                            region: region.name,
                                            city: city.name,
                                            spbu: spbu.name,
                                            dispenser: dispenser.name
                                          });
                                        }
                                      }}
                                    >
                                      <span className="mr-1">
                                        <FontAwesomeIcon
                                          icon={faVideo}
                                          className="text-blue-600"
                                        />
                                      </span>
                                      <span className="dark:text-white truncate">
                                        {dispenser.name}
                                      </span>
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
    </div>
  );
};

export default Sidenav;