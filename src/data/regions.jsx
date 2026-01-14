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
                { name: "Dispenser B2", lat: 5.5465, lng: 95.3247 }
              ]
            }
          ]
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
                { name: "Dispenser B1", lat: 3.597, lng: 98.675 }
              ]
            }
          ]
        },
        {
          name: "Pekanbaru",
          spbus: []
        }
      ]
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
              dispensers: [
                { name: "Dispenser A1", lat: -2.99, lng: 104.75 }
              ]
            }
          ]
        },
        {
          name: "Jambi",
          spbus: []
        },
        {
          name: "Lampung",
          spbus: []
        }
      ]
    },
    { name: "Region III", cities: [] },
    { name: "Region IV", cities: [] },
    { name: "Region V", cities: [] },
    { name: "Region VI", cities: [] },
    { name: "Region VII", cities: [] },
  ];

export default regions