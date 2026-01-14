const regions = [
  {
    name: "Region I",
    cities: [
      {
        name: "Aceh",
        spbus: [
          {
            name: "11.101.01 - SPBU Banda Aceh",
            lat: 5.5465,
            lng: 95.3247,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser A2", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser B1", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser B2", lat: 5.5465, lng: 95.3247 },
            ],
          },
        ],
      },
      {
        name: "Medan",
        spbus: [
          {
            name: "06.123.45 - SPBU Medan",
            lat: 3.597,
            lng: 98.675,
            zoom: 14,
            dispensers: [
              { name: "Dispenser A1", lat: 3.597, lng: 98.675 },
              { name: "Dispenser B1", lat: 3.597, lng: 98.675 },
            ],
          },
        ],
      },
      {
        name: "Pekanbaru",
        spbus: [],
      },
    ],
  },
  {
    name: "Region II",
    cities: [
      {
        name: "Palembang",
        spbus: [
          {
            name: "16.401.01 - SPBU Dem...",
            lat: -2.99,
            lng: 104.75,
            zoom: 13,
            dispensers: [{ name: "Dispenser A1", lat: -2.99, lng: 104.75 }],
          },
        ],
      },
      {
        name: "Jambi",
        spbus: [],
      },
      {
        name: "Lampung",
        spbus: [],
      },
    ],
  },
  {
    name: "Region III",
    cities: [
      {
        name: "Banten",
        spbus: [
          {
            name: "36.701.01 - SPBU Serang",
            lat: 5.5465,
            lng: 95.3247,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser A2", lat: 5.5465, lng: 95.3247 },
            ],
          },
        ],
      },
      {
        name: "Tangerang",
        spbus: [
          {
            name: "36.801.01 - SPBU Tangerang",
            lat: 5.5465,
            lng: 95.3247,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser A2", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser B1", lat: 5.5465, lng: 95.3247 },
              { name: "Dispenser B2", lat: 5.5465, lng: 95.3247 },
            ],
          },
        ],
      },
      {
        name: "DKI Jakarta",
        spbus: [
          {
            name: "31.111.01 - SPBU Gatot Subroto",
            lat: -6.2146,
            lng: 106.8451,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1 Left", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser A2 Right", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser A2", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser B1", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser B2 Left", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser B2 Right", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser C1", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser C2", lat: -6.2146, lng: 106.8451 },
            ],
          },
          {
            name: "31.112.02 - SPBU Thamrin",
            lat: -6.2146,
            lng: 106.8451,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser A2", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser B1", lat: -6.2146, lng: 106.8451 },
              { name: "Dispenser B2", lat: -6.2146, lng: 106.8451 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Region IV",
    cities: [
      {
        name: "Bekasi",
        spbus: [
          {
            name: "32.901.01 - SPBU Harapan Indah",
            lat: -6.186,
            lng: 106.97,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.186, lng: 106.97 },
              { name: "Dispenser A2", lat: -6.186, lng: 106.97 },
              { name: "Dispenser B1", lat: -6.186, lng: 106.97 },
              { name: "Dispenser B2", lat: -6.186, lng: 106.97 },
            ],
          },
        ],
      },
      {
        name: "Bogor",
        spbus: [
          {
            name: "32.101.01 - SPBU Pajajaran",
            lat: -6.597,
            lng: 106.806,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.597, lng: 106.806 },
              { name: "Dispenser A2", lat: -6.597, lng: 106.806 },
              { name: "Dispenser B1 Left", lat: -6.597, lng: 106.806 },
              { name: "Dispenser B1 Right", lat: -6.597, lng: 106.806 },
              { name: "Dispenser B2", lat: -6.597, lng: 106.806 },
            ],
          },
        ],
      },
      {
        name: "Bandung",
        spbus: [
          {
            name: "34.401.01 - SPBU Pasteur",
            lat: -6.895,
            lng: 107.59,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1 Left", lat: -6.895, lng: 107.59 },
              { name: "Dispenser A1 Right", lat: -6.895, lng: 107.59 },
              { name: "Dispenser A2 Left", lat: -6.895, lng: 107.59 },
              { name: "Dispenser A2 Right", lat: -6.895, lng: 107.59 },
              { name: "Dispenser B1", lat: -6.895, lng: 107.59 },
              { name: "Dispenser B2", lat: -6.895, lng: 107.59 },
            ],
          },
          {
            name: "34.401.02 - SPBU Dago",
            lat: -6.885,
            lng: 107.614,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1 Left", lat: -6.885, lng: 107.614 },
              { name: "Dispenser A1 Right", lat: -6.885, lng: 107.614 },
              { name: "Dispenser A2", lat: -6.885, lng: 107.614 },
            ],
          },
        ],
      },
      {
        name: "Cirebon",
        spbus: [
          {
            name: "32.501.01 - SPBU Siliwangi",
            lat: -6.706,
            lng: 108.555,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.706, lng: 108.555 },
              { name: "Dispenser A2", lat: -6.706, lng: 108.555 },
            ],
          },
        ],
      },
      {
        name: "Sumedang",
        spbus: [
          {
            name: "34.601.01 - SPBU Sumedang Kota",
            lat: -6.858,
            lng: 107.92,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.858, lng: 107.92 },
              { name: "Dispenser A2", lat: -6.858, lng: 107.92 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Region V",
    cities: [
      {
        name: "Brebes",
        spbus: [
          {
            name: "33.701.01 - SPBU Brebes",
            lat: -6.8797,
            lng: 109.0379,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -6.8797, lng: 109.0379 },
              { name: "Dispenser A2", lat: -6.8797, lng: 109.0379 },
            ],
          },
        ],
      },
      {
        name: "Solo",
        spbus: [
          {
            name: "33.801.01 - SPBU Slamet Riyadi",
            lat: -7.5755,
            lng: 110.8243,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -7.5755, lng: 110.8243 },
              { name: "Dispenser A2", lat: -7.5755, lng: 110.8243 },
              { name: "Dispenser B1", lat: -7.5755, lng: 110.8243 },
              { name: "Dispenser B2", lat: -7.5755, lng: 110.8243 },
            ],
          },
        ],
      },
      {
        name: "Boyolali",
        spbus: [
          {
            name: "33.901.01 - SPBU Boyolali",
            lat: -7.5385,
            lng: 110.5966,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -7.5385, lng: 110.5966 },
              { name: "Dispenser A2", lat: -7.5385, lng: 110.5966 },
            ],
          },
        ],
      },
      {
        name: "DI Yogyakarta",
        spbus: [
          {
            name: "34.101.01 - SPBU Gejayan",
            lat: -7.7828,
            lng: 110.3608,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -7.7828, lng: 110.3608 },
              { name: "Dispenser A2", lat: -7.7828, lng: 110.3608 },
              { name: "Dispenser B1", lat: -7.7828, lng: 110.3608 },
              { name: "Dispenser B2", lat: -7.7828, lng: 110.3608 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Region VI",
    cities: [
      {
        name: "Surabaya",
        spbus: [
          {
            name: "35.201.01 - SPBU Ahmad Yani",
            lat: -7.3115,
            lng: 112.7334,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -7.3115, lng: 112.7334 },
              { name: "Dispenser A2", lat: -7.3115, lng: 112.7334 },
              { name: "Dispenser B1", lat: -7.3115, lng: 112.7334 },
              { name: "Dispenser B2", lat: -7.3115, lng: 112.7334 },
              { name: "Dispenser C1", lat: -7.3115, lng: 112.7334 },
              { name: "Dispenser C2", lat: -7.3115, lng: 112.7334 },
            ],
          },
        ],
      },
      {
        name: "Malang",
        spbus: [
          {
            name: "35.301.01 - SPBU Soekarno Hatta",
            lat: -7.9429,
            lng: 112.6225,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -7.9429, lng: 112.6225 },
              { name: "Dispenser A2", lat: -7.9429, lng: 112.6225 },
              { name: "Dispenser B1", lat: -7.9429, lng: 112.6225 },
              { name: "Dispenser B2", lat: -7.9429, lng: 112.6225 },
            ],
          },
        ],
      },
      {
        name: "Bali",
        spbus: [
          {
            name: "51.101.01 - SPBU Sunset Road",
            lat: -8.7071,
            lng: 115.1743,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -8.7071, lng: 115.1743 },
              { name: "Dispenser A2", lat: -8.7071, lng: 115.1743 },
              { name: "Dispenser B1", lat: -8.7071, lng: 115.1743 },
              { name: "Dispenser B2", lat: -8.7071, lng: 115.1743 },
            ],
          },
        ],
      },
      {
        name: "Nusa Tenggara Timur",
        spbus: [
          {
            name: "53.101.01 - SPBU Kupang",
            lat: -10.1772,
            lng: 123.5775,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -10.1772, lng: 123.5775 },
              { name: "Dispenser A2", lat: -10.1772, lng: 123.5775 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Region VII",
    cities: [
      {
        name: "Kalimantan Timur - Banjarmasin",
        spbus: [
          {
            name: "64.101.01 - SPBU Ahmad Yani",
            lat: -1.2654,
            lng: 116.8312,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -1.2654, lng: 116.8312 },
              { name: "Dispenser A2", lat: -1.2654, lng: 116.8312 },
              { name: "Dispenser B1", lat: -1.2654, lng: 116.8312 },
              { name: "Dispenser B2", lat: -1.2654, lng: 116.8312 },
            ],
          },
        ],
      },
      {
        name: "Kalimantan Barat",
        spbus: [
          {
            name: "61.101.01 - SPBU Pontianak",
            lat: -0.0263,
            lng: 109.3425,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -0.0263, lng: 109.3425 },
              { name: "Dispenser A2", lat: -0.0263, lng: 109.3425 },
            ],
          },
        ],
      },
      {
        name: "Kalimantan Selatan",
        spbus: [
          {
            name: "63.101.01 - SPBU Barabai",
            lat: -2.5842,
            lng: 115.3871,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -2.5842, lng: 115.3871 },
              { name: "Dispenser A2", lat: -2.5842, lng: 115.3871 },
            ],
          },
        ],
      },
      {
        name: "Sulawesi - Sulawesi Barat",
        spbus: [
          {
            name: "76.101.01 - SPBU Mamuju",
            lat: -2.6778,
            lng: 118.8899,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -2.6778, lng: 118.8899 },
              { name: "Dispenser A2", lat: -2.6778, lng: 118.8899 },
            ],
          },
        ],
      },
      {
        name: "Maluku",
        spbus: [
          {
            name: "81.101.01 - SPBU Ambon",
            lat: -3.6954,
            lng: 128.1813,
            zoom: 17,
            dispensers: [
              { name: "Dispenser A1", lat: -3.6954, lng: 128.1813 },
              { name: "Dispenser A2", lat: -3.6954, lng: 128.1813 },
            ],
          },
        ],
      },
    ],
  },
];

export default regions;
