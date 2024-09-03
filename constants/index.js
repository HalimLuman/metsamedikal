import { accuChek, ankamedikal, atilimsaglik, aurafix, canped, digerCihaz, doctor1, doctor2, fizikTedavi, freely, golfi, hartmann, haspet, hastaBezi, hastaneEkipmanlari, havaliYatak, hyal, karadenizMedikal, lenfOdem, liposuctionKorse, mainat, maske1, maske2, mediways, micomme, ortopedikUrun, ottobock, philips, philipsProduct, plusmed, rame, resmed, slipplus, solunumCihaz, tansiyonAleti, tekerlekliSandalye, tracoe, varisCorap, visomat, yaraBakim, yurumeYardim } from "@/public";

export const dropdownMenu = [
    {
        category: 'Respiratory equipment',
        link: 'respiratory-equipment',
        img: solunumCihaz,
        subcategory: [
            {
                category: 'Oxygen concentrator',
                link: 'oxygen-concentrator'
            },
            {
                category: 'Portable Oxygen Concentrator',
                link: 'portable-oxygen-concentrator'
            },
            {
                category: 'Cpap',
                link: 'cpap'
            },
            {
                category: 'Auto Cpap',
                link: 'auto-cpap'
            },
            {
                category: 'Bipap',
                link: 'bipap'
            },
            {
                category: 'Auto Bipap',
                link: 'auto-bipap'
            },
            {
                category: 'Bipap St',
                link: 'bipap-st'
            },
            {
                category: 'Avaps',
                link: 'avaps'
            },
            {
                category: 'Asv',
                link: 'asv'
            },
            {
                category: 'Ventilator',
                link: 'ventilator'
            },
            {
                category: 'Tracheostomy Cannula',
                link: 'tracheostomy-cannula'
            },
            {
                category: 'Cough Assist Devices',
                link: 'cough-assist-devices'
            },
            {
                category: 'Aspirator',
                link: 'aspirator'
            },
            {
                category: 'Nebulizer',
                link: 'nebulizer'
            },
            {
                category: 'Chamber',
                link: 'chamber'
            },
            {
                category: 'Pep&Imt',
                link: 'pep&imt'
            },
            {
                category: 'Triflo',
                link: 'triflo'
            },
            {
                category: 'Pulse Oximeter',
                link: 'pulse-oximeter'
            },
            {
                category: 'Oxygen Cylinder',
                link: 'oxygen-cylinder'
            },
            {
                category: 'Oxygen Therapy Device (Manometer)',
                link: 'manometer'
            },
            {
                category: 'Peak Flow Meter (Pef Meter)',
                link: 'pef-meter'
            },
        ]
    },
    {
        category: 'Respiratory Devices Masks',
        img: '',
        link: 'respiratory-devices-masks',
        subcategory: [
            {
                category: 'Nasal Mask',
                link: 'nasal-mask'
            },
            {
                category: 'Oral Nasal Mask',
                link: 'oral-nasal-mask'
            },
        ]
    },
    {
        category: 'Lymphedema and Burn Garments',
        link: 'lymphedema-and-burn-garments',
        img: lenfOdem,
        subcategory: [
            {
                category: 'Lymphedema',
                link: 'lymphedema'
            },
            {
                category: 'Burnt clothing',
                link: 'burnt-clothing'
            },
            {
                category: 'Silicone Burn Cover',
                link: 'silicone-burn-cover'
            },
        ]
    },
    {
        category: 'Orthopedic products',
        link: 'orthopedic-products',
        img: ortopedikUrun,
        subcategory: [
            {
                category: 'Upper Extremity',
                link: 'upper-extremity'
            },
            {
                category: 'Lower Extremity',
                link: 'lower-extremity'
            },
            {
                category: 'Child Orthopedics',
                link: 'child-orthopedics'
            },
        ]
    },
    {
        category: 'Liposuction Corsets',
        link: 'liposuction-corsets',
        img: liposuctionKorse,
        subcategory: [
            {
                category: 'Head Area',
                link: 'head-area'
            },
            {
                category: 'Upper Extremity Area',
                link: 'upper-extremity-area'
            },
            {
                category: 'Lower Extremity Area',
                link: 'lower-extremity-area'
            },
            {
                category: 'Whole Body Area',
                link: 'whole-body-area'
            },
        ]
    },
    {
        category: 'Varicose Stockings',
        link: 'varicose-stockings',
        img: varisCorap,
        subcategory: [
            {
                category: 'Below Knee Stockings',
                link: 'below-knee-stockings'
            },
            {
                category: 'Above Knee Stockings',
                link: 'above-knee-stockings'
            },
            {
                category: 'Varicose Veins Pantyhose',
                link: 'varicose-veins-pantyhose'
            },
            {
                category: 'Pregnant Varicose Stockings',
                link: 'pregnant-varicose-stockings'
            },
        ]
    },
    {
        category: 'Wound Care and Diabetic Products',
        link: 'wound-care-and-diabetic-products',
        img: yaraBakim,
        subcategory: [
            {
                category: 'Hartmann',
                link: 'hartmann'
            },
            {
                category: 'Hyal04',
                link: 'hyal04'
            },
            {
                category: 'Crystalin',
                link: 'crystalin'
            },
            {
                category: 'Ottobock',
                link: 'ottobock'
            },
            {
                category: 'Other',
                link: 'other'
            },
        ]
    },
    {
        category: 'Wheelchairs',
        link: 'wheelchairs',
        img: tekerlekliSandalye,
        subcategory: [
            {
                category: 'Battery Powered Wheelchair',
                link: 'battery-powered-wheelchaor'
            },
            {
                category: 'Featured Wheelchair',
                link: 'featured-wheelchair'
            },
            {
                category: 'Lightweight Manual Wheelchair',
                link: 'lightweight-manual-wheelchair'
            },
            {
                category: 'Active Wheelchair',
                link: 'active-wheelchair'
            },
            {
                category: 'Toilet Chair',
                link: 'toilet-chair'
            },
            {
                category: 'Simple Wheelchair',
                link: 'simple-wheelchair'
            },
            {
                category: 'Child-chair',
                link: 'child-chair'
            },
        ]
    },
    {
        category: 'Walking Assistants',
        link: 'walking-assistants',
        img: yurumeYardim,
        subcategory: [
            {
                category: 'Walking Stick',
                link: 'walking-stick'
            },
            {
                category: 'Kanedian',
                link: 'kanedian'
            },
            {
                category: 'Crutch',
                link: 'crutch'
            },
            {
                category: 'Walker',
                link: 'walker'
            },
            {
                category: 'Rollator',
                link: 'rollator'
            },
        ]
    },
    {
        category: 'Patient Beds and Air Mattresses',
        link: 'patient-beds-and-air-mattresses',
        img: havaliYatak,
        subcategory: [
            {
                category: 'Motorized Hospital Bed',
                link: 'motorized-hospital-bed'
            },
            {
                category: 'Positioning Tube Type Air Mattress',
                link: 'positioning-tube-type-air-mattress'
            },
            {
                category: 'Tube Type Air Mattress',
                link: 'tube-type-air-mattress'
            },
            {
                category: 'Diamond Type Air Mattress',
                link: 'diamond-type-air-mattress'
            },
        ]
    },
    {
        category: 'Blood Pressure Monitors and Stethoscopes',
        link: 'blood-pressure-monitors-and-stethoscopes',
        img: tansiyonAleti,
        subcategory: [
            {
                category: 'Manual Blood Pressure Monitor',
                link: 'manual-blood-pressure-monitor'
            },
            {
                category: 'Arm Blood Pressure Monitor',
                link: 'arm-blood-pressure-monitor'
            },
            {
                category: 'Wrist Blood Pressure Monitor',
                link: 'wrist-blood-pressure-monitor'
            },
            {
                category: 'Single Sided Stethoscope',
                link: 'single-sided-stethoscope'
            },
            {
                category: 'Double Sided Stethoscope',
                link: 'double-sided-stethoscope'
            },
        ]
    },
    {
        category: 'Physical Therapy Products',
        link: 'physical-therapy-products',
        img: fizikTedavi,
        subcategory: [
            {
                category: 'Tens and Ems Device',
                link: 'tens-and-ems-device'
            },
            {
                category: 'Tens and Ems Pad',
                link: 'tens-and-ems-pad'
            },
            {
                category: 'Pain Band',
                link: 'pain-band'
            },
            {
                category: 'Exercise Products',
                link: 'exercise-products'
            },
        ]
    },
    {
        category: 'Diapers and Other Care Products',
        link: 'diapers-and-other-care-products',
        img: hastaBezi,
        subcategory: [
            {
                category: 'Binding Type Patient Diaper',
                link: 'binding-type-patient-diaper'
            },
            {
                category: 'Panty Type Absorbent Patient Diaper',
                link: 'panty-type-absorbent-patient-diaper'
            },
            {
                category: 'Child Diaper',
                link: 'child-diaper'
            },
            {
                category: 'Anatomical Gland',
                link: 'anatomical-gland'
            },
            {
                category: 'Bladder Pad',
                link: 'bladder-pad'
            },
            {
                category: 'Colostomy and Ileostomy',
                link: 'colostomy-and-ileostomy'
            },
            {
                category: 'Urostomy',
                link: 'urostomy'
            },
            {
                category: 'Probes',
                link: 'probes'
            },
            {
                category: 'Bed Guard',
                link: 'bed-guard'
            },
            {
                category: 'Cleansing Foam',
                link: 'cleansing-foam'
            },
            {
                category: 'Barrier Cream',
                link: 'barrier-cream'
            },
        ]
    },
    {
        category: 'Other Equipments And Products',
        link: 'other-equipments-and-products',
        img: digerCihaz,
        subcategory: [
            {
                category: 'Thermometer',
                link: 'thermometer'
            },
            {
                category: 'Talking device',
                link: 'talking-device'
            },
            {
                category: 'Sugar Measuring Device',
                link: 'sugar-measuring-device'
            },
            {
                category: 'Room Humidifier',
                link: 'room-humidifier'
            },
            {
                category: 'Heat Humidity meter',
                link: 'heat-humidity-meter'
            },
            {
                category: 'Scales and Height meter',
                link: 'scales-and-height-meter'
            },
            {
                category: 'Milk Pump',
                link: 'milk-pump'
            },
            {
                category: 'Otoscope-Ophthalmascope',
                link: 'otoscope-ophthalmascope'
            },
            {
                category: 'Toilet Seat',
                link: 'toilet-seat'
            },
            {
                category: 'Toilet Seat Riser',
                link: 'toilet-seat-riser'
            },
            {
                category: 'Injector',
                link: 'injector'
            },
            {
                category: 'Surgical Mask',
                link: 'surgical-mask'
            },
            {
                category: 'Protective Goggles',
                link: 'protective-goggles'
            },
            {
                category: 'Surgical Glove',
                link: 'surgical-glove'
            },
            {
                category: 'Disinfectant',
                link: 'disinfectant'
            },
            {
                category: 'Tuluk',
                link: 'tuluk'
            },
            {
                category: 'Bladder',
                link: 'bladder'
            },
            {
                category: 'Acupuncture',
                link: 'acupuncture'
            },
        ]
    },
    {
        category: 'Hospital Equipment',
        link: 'hospital-equipment',
        img: hastaneEkipmanlari,
        subcategory: [
            {
                category: 'Ekg Device',
                link: 'ekg-device'
            },
            {
                category: 'Nst Device',
                link: 'nst-device'
            },
            {
                category: 'Stretcher',
                link: 'stretcher'
            },
            {
                category: 'Examination Table',
                link: 'examination-table'
            },
            {
                category: 'Massage Table',
                link: 'massage-table'
            },
            {
                category: 'IV Pole',
                link: 'iv-pole'
            },
            {
                category: 'Examination Lamp',
                link: 'examination-lamp'
            },
        ]
    },
]

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
    visomat
]

export const banner = [
    {
        title:'Enhance Your Breathing with Our Top Respiratory Products!',
        description: ' Discover a range of high-quality respiratory products designed to improve lung health and breathing efficiency. Our products ensure better care and comfort for patients with respiratory conditions.',
        image: doctor2,
    },
    {
        title:'Superior Orthopedic Products for Optimal Support and Recovery!',
        description: 'Our orthopedic products are crafted to provide maximum support, stability, and comfort. Ideal for patients recovering from injuries or surgery, these products ensure a swift and effective recovery.',
        image: doctor1,
    },
    {
        title:'Lymphedema Care Made Easy with Our Specialized Products!',
        description: ' We offer a comprehensive selection of lymphedema products that are designed to provide effective management and comfort. Explore our range to find the best solutions for your needs.',
        image: doctor1,
    },
]

export const products = [
    {
        name: 'Philips Everfio',
        price: '4500',
        img: philipsProduct,
    },
    {
        name: 'Pico - Respironics',
        price: '1400',
        img: maske1,
    },
    {
        name: 'Amara Jel',
        price: '800',
        img: maske2
    },
    {
        name: 'Philips Everfio',
        price: '4500',
        img: philipsProduct
    },
    {
        name: 'Philips Everfio',
        price: '4500',
        img: maske2
    },
]