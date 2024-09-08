import {
  accuChek,
  ankamedikal,
  atilimsaglik,
  aurafix,
  canped,
  digerCihaz,
  doctor1,
  doctor2,
  fizikTedavi,
  freely,
  golfi,
  hartmann,
  haspet,
  hastaBezi,
  hastaneEkipmanlari,
  havaliYatak,
  hyal,
  karadenizMedikal,
  lenfOdem,
  liposuctionKorse,
  mainat,
  maske1,
  maske2,
  mediways,
  micomme,
  ortopedikUrun,
  ottobock,
  philips,
  philipsProduct,
  plusmed,
  rame,
  resmed,
  slipplus,
  solunumCihaz,
  tansiyonAleti,
  tekerlekliSandalye,
  tracoe,
  varisCorap,
  visomat,
  yaraBakim,
  yurumeYardim,
} from "@/public";
import { t } from "i18next";

export const dropdownMenu = [
  {
    category: "categories:respiratory-equipment",
    link: "respiratory-equipment",
    img: solunumCihaz,
    subcategory: [
      {
        category: "categories:respiratory-equipment_oxygen-concentrator",
        link: "oxygen-concentrator",
      },
      {
        category:
          "categories:respiratory-equipment_portable_oxygen-concentrator",
        link: "portable-oxygen-concentrator",
      },
      {
        category: "categories:respiratory-equipment_cpap",
        link: "cpap",
      },
      {
        category: "categories:respiratory-equipment_auto-cpap",
        link: "auto-cpap",
      },
      {
        category: "categories:respiratory-equipment_bipap",
        link: "bipap",
      },
      {
        category: "categories:respiratory-equipment_auto-bipap",
        link: "auto-bipap",
      },
      {
        category: "categories:respiratory-equipment_bipap-st",
        link: "bipap-st",
      },
      {
        category: "categories:respiratory-equipment_avaps",
        link: "avaps",
      },
      {
        category: "categories:respiratory-equipment_asv",
        link: "asv",
      },
      {
        category: "categories:respiratory-equipment_ventilator",
        link: "ventilator",
      },
      {
        category: "categories:respiratory-equipment_tracheostomy-cannula",
        link: "tracheostomy-cannula",
      },
      {
        category: "categories:respiratory-equipment_cough-assist-device",
        link: "cough-assist-devices",
      },
      {
        category: "categories:respiratory-equipment_aspirator",
        link: "aspirator",
      },
      {
        category: "categories:respiratory-equipment_nebulizer",
        link: "nebulizer",
      },
      {
        category: "categories:respiratory-equipment_chamber",
        link: "chamber",
      },
      {
        category: "categories:respiratory-equipment_pep&imt",
        link: "pep&imt",
      },
      {
        category: "categories:respiratory-equipment_triflo",
        link: "triflo",
      },
      {
        category: "categories:respiratory-equipment_pulse-oximeter",
        link: "pulse-oximeter",
      },
      {
        category: "categories:respiratory-equipment_oxygen-cylinder",
        link: "oxygen-cylinder",
      },
      {
        category: "categories:respiratory-equipment_oxygen-therapy-device",
        link: "manometer",
      },
      {
        category: "categories:respiratory-equipment_peak-flow-meter",
        link: "pef-meter",
      },
    ],
  },
  {
    category: "categories:respiratory-devices-masks",
    img: "",
    link: "respiratory-devices-masks",
    subcategory: [
      {
        category: "categories:respiratory-masks_nasal-mask",
        link: "nasal-mask",
      },
      {
        category: "categories:respiratory-masks_oral-nasal-mask",
        link: "oral-nasal-mask",
      },
    ],
  },
  {
    category: "categories:lymphedema-burn",
    link: "lymphedema-burn",
    img: lenfOdem,
    subcategory: [
      {
        category: "categories:lymphedema-burn_lymphedema",
        link: "lymphedema",
      },
      {
        category: "categories:lymphedema-burn_burnt-clothing",
        link: "burnt-clothing",
      },
      {
        category: "categories:lymphedema-burn_silicone-burn-cover",
        link: "silicone-burn-cover",
      },
    ],
  },
  {
    category: "categories:orthopedic-products",
    link: "orthopedic-products",
    img: ortopedikUrun,
    subcategory: [
      {
        category: "categories:orthopedic-products_upper-extremity",
        link: "upper-extremity",
      },
      {
        category: "categories:orthopedic-products_lower-extremity",
        link: "lower-extremity",
      },
      {
        category: "categories:orthopedic-products_child-orthopedics",
        link: "child-orthopedics",
      },
    ],
  },
  {
    category: "categories:liposuction-corsets",
    link: "liposuction-corsets",
    img: liposuctionKorse,
    subcategory: [
      {
        category: "categories:liposuction-corsets_head-area",
        link: "head-area",
      },
      {
        category: "categories:liposuction-corsets_upper-extremity-area",
        link: "upper-extremity-area",
      },
      {
        category: "categories:liposuction-corsets_lower-extremity-area",
        link: "lower-extremity-area",
      },
      {
        category: "categories:liposuction-corsets_whole-body-area",
        link: "whole-body-area",
      },
    ],
  },
  {
    category: "categories:varicose-stockings",
    link: "varicose-stockings",
    img: varisCorap,
    subcategory: [
      {
        category: "categories:varicose-stockings_below-knee-stockings",
        link: "below-knee-stockings",
      },
      {
        category: "categories:varicose-stockings_above-knee-stockings",
        link: "above-knee-stockings",
      },
      {
        category: "categories:varicose-stockings_varicose-veins-pantyhose",
        link: "varicose-veins-pantyhose",
      },
      {
        category: "categories:varicose-stockings_pregnant-varicose-stockings",
        link: "pregnant-varicose-stockings",
      },
    ],
  },
  {
    category: "categories:wound-care",
    link: "wound-care",
    img: yaraBakim,
    subcategory: [
      {
        category: "Hartmann",
        link: "hartmann",
      },
      {
        category: "Hyal04",
        link: "hyal04",
      },
      {
        category: "Crystalin",
        link: "crystalin",
      },
      {
        category: "Ottobock",
        link: "ottobock",
      },
      {
        category: "categories:wound-care_other",
        link: "other",
      },
    ],
  },
  {
    category: "categories:wheelchairs",
    link: "wheelchairs",
    img: tekerlekliSandalye,
    subcategory: [
      {
        category: "categories:wheelchairs_battery-powered-wheelchair",
        link: "battery-powered-wheelchair",
      },
      {
        category: "categories:wheelchairs_featured-wheelchair",
        link: "featured-wheelchair",
      },
      {
        category: "categories:wheelchairs_lightweight-manual-wheelchair",
        link: "lightweight-manual-wheelchair",
      },
      {
        category: "categories:wheelchairs_active-wheelchair",
        link: "active-wheelchair",
      },
      {
        category: "categories:wheelchairs_toilet-chair",
        link: "toilet-chair",
      },
      {
        category: "categories:wheelchairs_simple-wheelchair",
        link: "simple-wheelchair",
      },
      {
        category: "categories:wheelchairs_child-chair",
        link: "child-chair",
      },
    ],
  },
  {
    category: "categories:walking",
    link: "walking",
    img: yurumeYardim,
    subcategory: [
      {
        category: "categories:walking_walking-stick",
        link: "walking-stick",
      },
      {
        category: "categories:walking_kanedian",
        link: "kanedian",
      },
      {
        category: "categories:walking_crutch",
        link: "crutch",
      },
      {
        category: "categories:walking_walker",
        link: "walker",
      },
      {
        category: "categories:walking_rollator",
        link: "rollator",
      },
    ],
  },
  {
    category: "categories:patient-beds-and-air-mattresses",
    link: "patient-beds-and-air-mattresses",
    img: havaliYatak,
    subcategory: [
      {
        category:
          "categories:patient-beds-and-air-mattresses_motorized-hospital-bed",
        link: "motorized-hospital-bed",
      },
      {
        category:
          "categories:patient-beds-and-air-mattresses_positioning-tube-type-air-mattress",
        link: "positioning-tube-type-air-mattress",
      },
      {
        category:
          "categories:patient-beds-and-air-mattresses_tube-type-air-mattress",
        link: "tube-type-air-mattress",
      },
      {
        category:
          "categories:patient-beds-and-air-mattresses_diamond-type-air-mattress",
        link: "diamond-type-air-mattress",
      },
    ],
  },
  {
    category: "categories:blood-pressure",
    link: "blood-pressure",
    img: tansiyonAleti,
    subcategory: [
      {
        category: "categories:blood-pressure_manual-blood-pressure-monitor",
        link: "manual-blood-pressure-monitor",
      },
      {
        category: "categories:blood-pressure_arm-blood-pressure-monitor",
        link: "arm-blood-pressure-monitor",
      },
      {
        category: "categories:blood-pressure_wrist-blood-pressure-monitor",
        link: "wrist-blood-pressure-monitor",
      },
      {
        category: "categories:blood-pressure_single-sided-stethoscope",
        link: "single-sided-stethoscope",
      },
      {
        category: "categories:blood-pressure_double-sided-stethoscope",
        link: "double-sided-stethoscope",
      },
    ],
  },
  {
    category: "categories:physical",
    link: "physical",
    img: fizikTedavi,
    subcategory: [
      {
        category: "categories:physical_tens-and-ems-device",
        link: "tens-and-ems-device",
      },
      {
        category: "categories:physical_tens-and-ems-pad",
        link: "tens-and-ems-pad",
      },
      {
        category: "categories:physical_pain-band",
        link: "pain-band",
      },
      {
        category: "categories:physical_exercise-products",
        link: "exercise-products",
      },
    ],
  },
  {
    category: "categories:diapers",
    link: "diapers",
    img: hastaBezi,
    subcategory: [
      {
        category: "categories:diapers_binding-type-patient-diaper",
        link: "binding-type-patient-diaper",
      },
      {
        category: "categories:diapers_panty-type-absorbent-patient-diaper",
        link: "panty-type-absorbent-patient-diaper",
      },
      {
        category: "categories:diapers_child-diaper",
        link: "child-diaper",
      },
      {
        category: "categories:diapers_anatomical-gland",
        link: "anatomical-gland",
      },
      {
        category: "categories:diapers_bladder-pad",
        link: "bladder-pad",
      },
      {
        category: "categories:diapers_colostomy-and-ileostomy",
        link: "colostomy-and-ileostomy",
      },
      {
        category: "categories:diapers_urostomy",
        link: "urostomy",
      },
      {
        category: "categories:diapers_probes",
        link: "probes",
      },
      {
        category: "categories:diapers_bed-guard",
        link: "bed-guard",
      },
      {
        category: "categories:diapers_cleansing-foam",
        link: "cleansing-foam",
      },
      {
        category: "categories:diapers_barrier-cream",
        link: "barrier-cream",
      },
    ],
  },
  {
    category: "categories:other-equipments",
    link: "other-equipments",
    img: digerCihaz,
    subcategory: [
      {
        category: "categories:other-equipments_thermometer",
        link: "thermometer",
      },
      {
        category: "categories:other-equipments_talking-device",
        link: "talking-device",
      },
      {
        category: "categories:other-equipments_sugar-measuring-device",
        link: "sugar-measuring-device",
      },
      {
        category: "categories:other-equipments_room-humidifier",
        link: "room-humidifier",
      },
      {
        category: "categories:other-equipments_heat-humidity-meter",
        link: "heat-humidity-meter",
      },
      {
        category: "categories:other-equipments_scales-and-height-meter",
        link: "scales-and-height-meter",
      },
      {
        category: "categories:other-equipments_milk-pump",
        link: "milk-pump",
      },
      {
        category: "categories:other-equipments_otoscope-ophthalmascope",
        link: "otoscope-ophthalmascope",
      },
      {
        category: "categories:other-equipments_toilet-seat",
        link: "toilet-seat",
      },
      {
        category: "categories:other-equipments_toilet-seat-riser",
        link: "toilet-seat-riser",
      },
      {
        category: "categories:other-equipments_injector",
        link: "injector",
      },
      {
        category: "categories:other-equipments_surgical-mask",
        link: "surgical-mask",
      },
      {
        category: "categories:other-equipments_protective-goggles",
        link: "protective-goggles",
      },
      {
        category: "categories:other-equipments_surgical-glove",
        link: "surgical-glove",
      },
      {
        category: "categories:other-equipments_disinfectant",
        link: "disinfectant",
      },
      {
        category: "categories:other-equipments_tuluk",
        link: "tuluk",
      },
      {
        category: "categories:other-equipments_bladder",
        link: "bladder",
      },
      {
        category: "categories:other-equipments_acupuncture",
        link: "acupuncture",
      },
    ],
  },
  {
    category: "categories:hospital-equipment",
    link: "hospital-equipment",
    img: hastaneEkipmanlari,
    subcategory: [
      {
        category: "categories:hospital-equipment_ekg-device",
        link: "ekg-device",
      },
      {
        category: "categories:hospital-equipment_nst-device",
        link: "nst-device",
      },
      {
        category: "categories:hospital-equipment_stretcher",
        link: "stretcher",
      },
      {
        category: "categories:hospital-equipment_examination-table",
        link: "examination-table",
      },
      {
        category: "categories:hospital-equipment_massage-table",
        link: "massage-table",
      },
      {
        category: "categories:hospital-equipment_iv-pole",
        link: "iv-pole",
      },
      {
        category: "categories:hospital-equipment_examination-lamp",
        link: "examination-lamp",
      },
    ],
  },
];

export const partners = [
  accuChek,
  ankamedikal,
  atilimsaglik,
  aurafix,
  canped,
  freely,
  golfi,
  hartmann,
  hyal,
  haspet,
  karadenizMedikal,
  mainat,
  micomme,
  mediways,
  ottobock,
  philips,
  plusmed,
  rame,
  resmed,
  slipplus,
  tracoe,
  visomat,
];

export const banner = [
  {
    title: "Enhance Your Breathing with Our Top Respiratory Products!",
    description:
      " Discover a range of high-quality respiratory products designed to improve lung health and breathing efficiency. Our products ensure better care and comfort for patients with respiratory conditions.",
    image: doctor2,
  },
  {
    title: "Superior Orthopedic Products for Optimal Support and Recovery!",
    description:
      "Our orthopedic products are crafted to provide maximum support, stability, and comfort. Ideal for patients recovering from injuries or surgery, these products ensure a swift and effective recovery.",
    image: doctor1,
  },
  {
    title: "Lymphedema Care Made Easy with Our Specialized Products!",
    description:
      " We offer a comprehensive selection of lymphedema products that are designed to provide effective management and comfort. Explore our range to find the best solutions for your needs.",
    image: doctor1,
  },
];

export const products = [
  {
    name: "Philips Everfio",
    price: "4500",
    img: philipsProduct,
  },
  {
    name: "Pico - Respironics",
    price: "1400",
    img: maske1,
  },
  {
    name: "Amara Jel",
    price: "800",
    img: maske2,
  },
  {
    name: "Philips Everfio",
    price: "4500",
    img: philipsProduct,
  },
  {
    name: "Philips Everfio",
    price: "4500",
    img: maske2,
  },
];

export const dropdown1 = [
  {
    title: "company-profile",
    link: "company-profile",
  },
  {
    title: "dealerships",
    link: "dealerships",
  },
];

export const dropdown2 = [
  {
    category: "diseases:sleep-disorders",
    link: "sleep-disorders",
    subcategory: [
      {
        category: "diseases:sleep-disorders_sleep-disordered-breathing",
        link: "sleep-disordered-breathing",
        subcategory: [
          {
            category: "diseases:sleep-disorders_sleep-disordered-breathing_obstructive-sleep-apnea",
            link: "obstructive-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_sleep-disordered-breathing_central-sleep-apnea",
            link: "central-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_sleep-disordered-breathing_complex-sleep-apnea",
            link: "complex-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_sleep-disordered-breathing_periodic-breathing",
            link: "periodic-breathing",
          },
        ],
      },
      {
        category: "diseases:sleep-disorders_diseases-associated-with-apnea",
        link: 'diseases-associated-with-apnea',
        subcategory: [
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_heart-disease-and-sleep-apnea",
            link: "heart-disease-and-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_diabetes-and-sleep-apnea",
            link: "diabetes-and-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_hypertension-and-sleep-apnea",
            link: "hypertension-and-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_paralysis-and-sleep-apnea",
            link: "paralysis-and-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_menopaus-and-sleep-apnea",
            link: "menopaus-and-sleep-apnea",
          },
          {
            category: "diseases:sleep-disorders_diseases-associated-with-apnea_chronic-pain-and-sleep-apnea",
            link: "chronic-pain-and-sleep-apnea",
          },
        ],
      },
      {
        category: "diseases:sleep-disorders_insomnia",
        link: "insomnia",
      },
      {
        category: "diseases:sleep-disorders_narcolepsy",
        link: "narcolepsy",
      },
      {
        category: "diseases:sleep-disorders_parasomnia",
        link: "parasomnia",
      },
      {
        category: "diseases:sleep-disorders_restless-legs-syndrome",
        link: "restless-legs-syndrome",
      },
    ],
  },
  {
    category: "diseases:respiratory-failure",
    link: 'respiratory-failure',
    subcategory: [
      {
        category: "diseases:respiratory-failure_chronic-obstructive-pulmonary-disease",
        link: "chronic-obstructive-pulmonary-disease",
      },
      {
        category: "diseases:respiratory-failure_emphysema",
        link: "emphysema",
      },
      {
        category: "diseases:respiratory-failure_muscular-dystrophy",
        link: "muscular-dystrophy",
      },
      {
        category: "diseases:respiratory-failure_post-polio-syndrome",
        link: "post-polio-syndrome",
      },
      {
        category: "diseases:respiratory-failure_amyotrophic-lateral-sclerosis",
        link: "amyotrophic-lateral-sclerosis",
      },
      {
        category: "diseases:respiratory-failure_chronic-bronchitis",
        link: "chronic-bronchitis",
      },
      {
        category: "diseases:respiratory-failure_bronchiectasis",
        link: "bronchiectasis",
      },
    ],
  },
];
