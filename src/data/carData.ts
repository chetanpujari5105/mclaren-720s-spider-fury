export const carData = {
  hero: {
    title: "McLAREN",
    subtitle: "720S SPIDER FURY",
    tagline: "Where aerodynamic precision meets open-air exhilaration",
    price: "£250,000",
    priceNote: "Starting from",
    cta: "Configure Yours",
  },

  aerodynamics: {
    title: "AERODYNAMICS",
    subtitle: "ENGINEERED BY AIR",
    description:
      "Every surface is sculpted by computational fluid dynamics. The dihedral doors channel airflow into the side intakes, while the active rear wing generates up to 150kg of downforce at speed.",
    stats: [
      { label: "Active Aero", value: "FULL CARBON FIBER" },
      { label: "Drag Coefficient", value: "Cd 0.32" },
      { label: "Downforce", value: "150 KG" },
      { label: "Body Panels", value: "100% CARBON FIBER" },
    ],
  },

  engine: {
    title: "ENGINE",
    subtitle: "TWIN-TURBO FURY",
    description:
      "The 4.0-litre twin-turbocharged V8 produces 720PS and 770Nm of torque, channelled through a 7-speed SSG gearbox for devastating acceleration.",
    specs: [
      { label: "Power", value: "720", unit: "PS" },
      { label: "Torque", value: "770", unit: "NM" },
      { label: "0–60 MPH", value: "2.9", unit: "SEC" },
      { label: "Top Speed", value: "212", unit: "MPH" },
    ],
    engineDetails: [
      { label: "Configuration", value: "4.0L Twin-Turbo V8" },
      { label: "Transmission", value: "7-Speed SSG" },
      { label: "Weight", value: "1,332 KG (DRY)" },
      { label: "Power-to-Weight", value: "540 PS/TONNE" },
    ],
  },

  specsGrid: [
    {
      category: "PERFORMANCE",
      items: [
        { label: "0–62 MPH", value: "2.9s" },
        { label: "0–124 MPH", value: "7.8s" },
        { label: "0–200 KM/H", value: "7.8s" },
        { label: "Top Speed", value: "212 MPH" },
      ],
    },
    {
      category: "POWERTRAIN",
      items: [
        { label: "Engine", value: "4.0L Twin-Turbo V8" },
        { label: "Power", value: "720 PS (710 BHP)" },
        { label: "Torque", value: "770 Nm" },
        { label: "Transmission", value: "7-Speed SSG" },
      ],
    },
    {
      category: "CHASSIS",
      items: [
        { label: "Construction", value: "Carbon Fibre Monocage II-S" },
        { label: "Dry Weight", value: "1,332 kg" },
        { label: "Weight Distribution", value: "42:58 F/R" },
        { label: "Fuel Capacity", value: "72 Litres" },
      ],
    },
    {
      category: "DIMENSIONS",
      items: [
        { label: "Length", value: "4,543 mm" },
        { label: "Width", value: "2,059 mm" },
        { label: "Height", value: "1,196 mm" },
        { label: "Wheelbase", value: "2,670 mm" },
      ],
    },
  ],

  features: [
    {
      title: "MONOCAGE II-S",
      description:
        "The carbon fibre monocage forms the structural backbone of the 720S Spider, integrating the retractable hardtop mechanism without compromising torsional rigidity.",
      icon: "chassis",
    },
    {
      title: "PROACTIVE CHASSIS CONTROL II",
      description:
        "Linked hydraulic dampers with dual-valve technology provide unparalleled body control, adapting in real-time to road conditions and driver inputs.",
      icon: "suspension",
    },
    {
      title: "ELECTROHYDRAULIC STEERING",
      description:
        "Quick-ratio electrohydraulic power steering delivers razor-sharp response with nuanced road feel, essential for precision at any speed.",
      icon: "steering",
    },
    {
      title: "RETRACTABLE HARDTOP",
      description:
        "The one-piece retractable hardtop folds in just 11 seconds at speeds up to 31 MPH, transforming the coupe into a breathtaking open-air supercar.",
      icon: "roof",
    },
  ],

  footer: {
    tagline: "FEARLESSLY ENGINEERED",
    copyright: `© ${new Date().getFullYear()} McLaren Automotive Ltd. All rights reserved.`,
    links: ["Configurator", "Ownership", "Motorsport", "Heritage"],
  },
} as const;
