const regions = [
  {
    name: "Region I",
    cities: [
      {
        name: "Aceh",
        spbus: [
          {
            name: "11.231.401 - SPBU Banda Aceh",
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
            name: "11.201.102 - SPBU Medan Merak Jingga",
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
            name: "21.301.01 - SPBU Palembang Kenten",
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
            name: "31.421.01 - SPBU Serang",
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
            name: "31.153.02 - SPBU BSD City",
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
            name: "31.124.01 - SPBU Fatmawati 1",
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
            name: "31.124.02 - SPBU Fatmawati 2",
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
            name: "31.171.03 - SPBU Narogong",
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
            name: "31.169.01 - SPBU Cibinong",
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
            name: "31.401.01 - SPBU Dago",
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
            name: "31.406.01 - SPBU Soekarno-Hatta",
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
            name: "31.451.01 - SPBU Brigjen Darsono",
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
    ],
  },
  {
    name: "Region V",
    cities: [
      {
        name: "Solo",
        spbus: [
          {
            name: "41.575.01 - SPBU Solo Baru",
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
            name: "41.573.01 - SPBU Teras Boyolali",
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
            name: "41.551.01 - SPBU Lempuyangan",
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
            name: "51.601.6 - SPBU Jemursari",
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
            name: "51.651.16 - SPBU Langsep",
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
            name: "51.801.30 - SPBU Hayam Wuruk",
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
            name: "51.851.08 - SPBU Kupang",
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
        name: "Kalimantan Timur",
        spbus: [
          {
            name: "61.711.001 - SPBU Brigjen Hasan Basri KM.3",
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
      // {
      //   name: "Kalimantan Barat",
      //   spbus: [
      //     {
      //       name: "61.101.01 - SPBU Pontianak",
      //       lat: -0.0263,
      //       lng: 109.3425,
      //       zoom: 17,
      //       dispensers: [
      //         { name: "Dispenser A1", lat: -0.0263, lng: 109.3425 },
      //         { name: "Dispenser A2", lat: -0.0263, lng: 109.3425 },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: "Kalimantan Selatan",
      //   spbus: [
      //     {
      //       name: "63.101.01 - SPBU Barabai",
      //       lat: -2.5842,
      //       lng: 115.3871,
      //       zoom: 17,
      //       dispensers: [
      //         { name: "Dispenser A1", lat: -2.5842, lng: 115.3871 },
      //         { name: "Dispenser A2", lat: -2.5842, lng: 115.3871 },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: "Sulawesi - Sulawesi Barat",
      //   spbus: [
      //     {
      //       name: "76.101.01 - SPBU Mamuju",
      //       lat: -2.6778,
      //       lng: 118.8899,
      //       zoom: 17,
      //       dispensers: [
      //         { name: "Dispenser A1", lat: -2.6778, lng: 118.8899 },
      //         { name: "Dispenser A2", lat: -2.6778, lng: 118.8899 },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: "Maluku",
      //   spbus: [
      //     {
      //       name: "81.101.01 - SPBU Ambon",
      //       lat: -3.6954,
      //       lng: 128.1813,
      //       zoom: 17,
      //       dispensers: [
      //         { name: "Dispenser A1", lat: -3.6954, lng: 128.1813 },
      //         { name: "Dispenser A2", lat: -3.6954, lng: 128.1813 },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];

export default regions;
