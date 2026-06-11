import { DegreeProgram, FacultyMetric } from "../types";

export const DEGREE_PROGRAMS: DegreeProgram[] = [
  {
    id: "bbst-bp",
    code: "BBST (BP)",
    title: "BBST (Hons) in Bioprocess Technology",
    department: "Department of Bio Process Technology",
    duration: "4 Years (8 Semesters)",
    slqfLevel: 6,
    tagline: "Pioneering green biotechnology and biomanufacturing solutions",
    description: "Equips students with solid biological science foundations integrated with chemical engineering principles. Focuses on scaling up laboratory bioprocesses into sustainable industrial production of enzymes, medical materials, energy, and bio-nutrients.",
    accentClass: "emerald",
    glowColor: "shadow-neon-green",
    iconName: "Dna",
    bgLettering: "BBST-BPT",
    corePillars: [
      {
        title: "Bioreactor Engineering",
        description: "Design and scale up industrial microbial and animal cell-culture fermentation systems.",
        icon: "Cpu"
      },
      {
        title: "Genetics & Recombinant DNA",
        description: "Manipulate cells and genomes to engineer high-yield microbial strains for pharmaceutical outputs.",
        icon: "Layers"
      },
      {
        title: "Downstream Processing",
        description: "Advanced separation, filtration, and purification processes of highly volatile biochemicals.",
        icon: "Filter"
      },
      {
        title: "Environmental Biotech",
        description: "Develop sustainable wastewater treatment, bioenergy reactors, and bioremediation techniques.",
        icon: "Leaf"
      }
    ],
    labs: [
      "Microbiology and Pathology Lab",
      "Bioreactor and Pilot Scale Unit",
      "Plant Tissue Culture and Genomics Suite",
      "Separation and Downstream Processing Lab"
    ],
    careerPaths: [
      "Bioprocess Engineer",
      "Pharmaceutical QA Executive",
      "Research Scientist (Biotech)",
      "Environmental Sustainability Officer"
    ],
    curriculumSemesters: {
      "Year 1": [
        {
          semester: 1,
          code: "CMT 1301",
          title: "Fundamentals of Physics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1302",
          title: "Fundamentals of Chemistry for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1303",
          title: "Fundamentals of Mathematics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1304",
          title: "Fundamentals of Computers for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1205",
          title: "Communication Skills I (English)",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CMT 1306",
          title: "Fundamentals of Biology for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1201",
          title: "Personality Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1202",
          title: "Presentation Skills",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 1201",
          title: "General Microbiology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 1202",
          title: "Cell Biology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 1201",
          title: "Organic Chemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1307",
          title: "Mathematics for Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1208",
          title: "Computer Programming for Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1209",
          title: "Communication Skills II",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "CML 1203",
          title: "Principles of Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1204",
          title: "Health and Wellbeing",
          credits: "2",
          status: "C"
        }
      ],
      "Year 2": [
        {
          semester: 1,
          code: "BPT 2201",
          title: "Quality Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 2202",
          title: "Introduction to Bioprocess Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 2203",
          title: "Genetics and Evolution",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "BPT 2204",
          title: "Plant Tissue Culture",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 2205",
          title: "Molecular Biology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 2202",
          title: "Basic Biochemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2301",
          title: "Fundamentals of Statistics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2202",
          title: "Communication Skills III",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CMT 2306",
          title: "Mathematics for Technology II",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2201",
          title: "Social Sciences and Humanities",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2202",
          title: "Engineering Economics",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2206",
          title: "Indigenous Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "BPT 2206",
          title: "Bioreactor Operation and Design",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 2207",
          title: "Basic Immunology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 2108",
          title: "Quality Assurance and Safety of Bioprocessed Products",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 2209",
          title: "Molecular Biotechnology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2305",
          title: "Analytical Chemistry",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 2203",
          title: "Computational Mathematics",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2204",
          title: "Foreign Language",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2205",
          title: "Ethics in Science and Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2208",
          title: "Introduction to Marketing",
          credits: "2",
          status: "O"
        }
      ],
      "Year 3": [
        {
          semester: 1,
          code: "BPT 3201",
          title: "Molecular Microbiology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3302",
          title: "Bioinformatics",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3203",
          title: "Bioprocess Instrumentation and Control",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3304",
          title: "Molecular Modelling",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3205",
          title: "Bioprocess Optimization and Simulation",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3206",
          title: "Molecular Immunology and Current Applications",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3207",
          title: "Enzyme Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3208",
          title: "Industrial Microbiology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 3101",
          title: "Legal and Patent Aspects",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 3108",
          title: "Seminar",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 3209",
          title: "Scientific Writing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 3610",
          title: "Internship",
          credits: "6",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 3102",
          title: "Industrial Safety",
          credits: "1",
          status: "C"
        }
      ],
      "Year 4": [
        {
          semester: 1,
          code: "BPT 4301",
          title: "Drug Designing",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4302",
          title: "Downstream Process Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4303",
          title: "Bioremediation and Waste Management",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4204",
          title: "Molecular Virology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4205",
          title: "Plant Cell Culture",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4206",
          title: "Pharmaceutical Biotechnology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 4207",
          title: "Bioproduct Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4201",
          title: "Entrepreneurship",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4202",
          title: "Human Resource Management",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "BPT 4808",
          title: "Bioprocess Technology Project",
          credits: "8",
          status: "C"
        }
      ]
    }
  },
  {
    id: "bbst-ft",
    code: "BBST (FT)",
    title: "BBST (Hons) in Food Technology",
    department: "Department of Food Technology",
    duration: "4 Years (8 Semesters)",
    slqfLevel: 6,
    tagline: "Architecting the future of food safety, security, and sustainability",
    description: "Combines strict food science foundations with advanced engineering technologies to improve food shelf life, safety, nutritional value, and packaging. Direct, hands-on exposure to agro-industrial food systems of Sri Lanka.",
    accentClass: "amber",
    glowColor: "shadow-neon-amber",
    iconName: "Salad",
    bgLettering: "BBST-FDT",
    corePillars: [
      {
        title: "Food Chemistry & Nutrition",
        description: "Structure and reactivity of protein, carbs, lipids, and microelements during processing.",
        icon: "ShieldAlert"
      },
      {
        title: "Smart Food Packaging",
        description: "Sustainable biodegradable packaging, modified atmosphere gas control, and intelligent shelf-life monitors.",
        icon: "Package"
      },
      {
        title: "Food Quality Standards",
        description: "Implementation of global standards including HACCP, ISO 22000, and FDA compliance models.",
        icon: "CheckCircle"
      },
      {
        title: "Agro-Product Valuation",
        description: "Converting Sri Lankan local crops, fruits, and spices into high-margin global market products.",
        icon: "Sparkles"
      }
    ],
    labs: [
      "Food Chemistry and Analytics Lab",
      "Sensory Evaluation Chamber",
      "Pilot-Scale Food Processing Plant",
      "Food Microbiology and Preservation Lab"
    ],
    careerPaths: [
      "Food Technologist",
      "Food Safety Auditor",
      "Product Development Executive",
      "Production Plant Manager"
    ],
    curriculumSemesters: {
      "Year 1": [
        {
          semester: 1,
          code: "CMT 1301",
          title: "Fundamentals of Physics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1302",
          title: "Fundamentals of Chemistry for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1303",
          title: "Fundamentals of Mathematics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1304",
          title: "Fundamentals of Computer for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1306",
          title: "Fundamentals of Biology for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1205",
          title: "Communication Skills I (English)",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CML 1201",
          title: "Personality Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1202",
          title: "Presentation Skills",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 1201",
          title: "General Microbiology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "BPT 1202",
          title: "Cell Biology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 1201",
          title: "Organic Chemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1307",
          title: "Mathematics for Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1208",
          title: "Computer Programming for Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1209",
          title: "Communication Skills II",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "CML 1203",
          title: "Principles of Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1204",
          title: "Health and Wellbeing",
          credits: "2",
          status: "C"
        }
      ],
      "Year 2": [
        {
          semester: 1,
          code: "FDT 2201",
          title: "Physical Chemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 2202",
          title: "Basic Biochemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 2203",
          title: "Introduction to Food Industry",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 2204",
          title: "Food Preservation",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2301",
          title: "Fundamental of Statistics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2306",
          title: "Mathematics for Technology II",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "CMT 2202",
          title: "Communication Skills III",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CML 2201",
          title: "Social Sciences and Humanities",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2206",
          title: "Indigenous Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "FDT 2305",
          title: "Analytical Chemistry",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2206",
          title: "Food Physics",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2207",
          title: "Food Chemistry",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2208",
          title: "Food Microbiology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2209",
          title: "Introduction to Human Nutrition",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 2210",
          title: "Food Biotechnology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 2203",
          title: "Computational Mathematics",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2204",
          title: "Foreign Language",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2205",
          title: "Ethics in Science and Technology",
          credits: "2",
          status: "C"
        }
      ],
      "Year 3": [
        {
          semester: 1,
          code: "FDT 3201",
          title: "Fruits & Vegetables Processing Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3202",
          title: "Food Engineering",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3203",
          title: "Food Analysis",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3204",
          title: "Meat and Fish Processing Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3205",
          title: "Functional Food and Food Toxicology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3206",
          title: "Dairy Product Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3207",
          title: "Confectionary and Beverage Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "FDT 3108",
          title: "Current Topics in Food Industry",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 3209",
          title: "Cereals and Pulses Processing Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 3101",
          title: "Legal and Patent Aspects",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "BPT 3207",
          title: "Enzyme Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "FDT 3212",
          title: "Spices and Oil Processing Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "FDT 3614",
          title: "Industrial Training",
          credits: "6",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 3215",
          title: "Food Packaging Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 3102",
          title: "Industrial Safety",
          credits: "1",
          status: "C"
        }
      ],
      "Year 4": [
        {
          semester: 1,
          code: "FDT 4302",
          title: "Food Product Development",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 4203",
          title: "Water Science and Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "FDT 4206",
          title: "Supply Chain Analysis",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 4107",
          title: "Scientific Writing",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "FDT 4208",
          title: "Cleaner Production",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "FDT 4209",
          title: "Sensory Evaluation",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4201",
          title: "Entrepreneurship",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4202",
          title: "Human Resource Management",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "FDT 4801",
          title: "Research Project",
          credits: "8",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 4204",
          title: "Quality Assurance, Safety and Standards in Food Industry",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 4205",
          title: "Food Marketing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "FDT 4207",
          title: "Nanotechnology",
          credits: "2",
          status: "O"
        }
      ]
    }
  },
  {
    id: "bet-ee",
    code: "BET (EET)",
    title: "BET (Hons) in Electrical and Electronic Technology",
    department: "Department of Electrical and Electronic Technology",
    duration: "4 Years (8 Semesters)",
    slqfLevel: 6,
    tagline: "Powering smart grids, robotic systems, and high-tech industries",
    description: "Focuses on engineering knowledge and skills in electronics design, power engineering, and custom automation. Empowers students to engineer electronic control systems, IoT hubs, electrical machines, and custom industrial architectures.",
    accentClass: "cyan",
    glowColor: "shadow-neon-cyan",
    iconName: "Cpu",
    bgLettering: "BET-EET",
    corePillars: [
      {
        title: "Power Systems & Renewables",
        description: "Generation, smart-grid dispatch, and optimization of clean solar, wind, and biomass energy.",
        icon: "Zap"
      },
      {
        title: "Robotics & Automation",
        description: "PLC programming, pneumatic actuators, machine vision, and custom articulated manipulator hands.",
        icon: "Activity"
      },
      {
        title: "Embedded Systems & IoT",
        description: "Schematic design, microcontroller unit compilation (ARM, ESP32), and distributed telemetry networks.",
        icon: "Binary"
      },
      {
        title: "Signal Processing & Telecom",
        description: "Wireless sensor arrays, high-frequency modulation, and advanced RF communication systems.",
        icon: "Radio"
      }
    ],
    labs: [
      "Electrical Power and Machines Lab",
      "Robotics and Industrial Automation Studio",
      "Analog and Digital Electronics Lab",
      "Telecommunication and RF Design Facility"
    ],
    careerPaths: [
      "Embedded Systems Developer",
      "Automation & PLC Engineer",
      "Power Distribution Executive",
      "IoT Systems Architect"
    ],
    curriculumSemesters: {
      "Year 1": [
        {
          semester: 1,
          code: "CML 1201",
          title: "Personality Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1202",
          title: "Presentation Skills",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1205",
          title: "Communication Skills I (English)",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CMT 1301",
          title: "Fundamentals of Physics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1302",
          title: "Fundamentals of Chemistry for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1303",
          title: "Fundamentals of Mathematics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1304",
          title: "Fundamentals of Computer for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1203",
          title: "Principles of Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1204",
          title: "Health and Wellbeing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1208",
          title: "Computer Programming for Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1209",
          title: "Communication Skills II",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "CMT 1307",
          title: "Mathematics for Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1203",
          title: "Engineering Drawing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1204",
          title: "Workshop Technology I",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1301",
          title: "Introduction to Basic Electronics",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1302",
          title: "Fundamentals of Electricity and Magnetism",
          credits: "3",
          status: "C"
        }
      ],
      "Year 2": [
        {
          semester: 1,
          code: "CML 2201",
          title: "Social Sciences and Humanity",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2202",
          title: "Engineering Economics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 2206",
          title: "Indigenous Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CMT 2202",
          title: "Communication Skills III",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CMT 2301",
          title: "Fundamentals of Statistics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2306",
          title: "Mathematics for Technology II",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 2202",
          title: "Electricity Network",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 2208",
          title: "Introduction to Electrical Power",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 2301",
          title: "Digital & Analog Electronics",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 2202",
          title: "Operating Systems",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 2303",
          title: "Data Structures and Algorithms",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 2304",
          title: "Object Oriented Programming",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 2204/EET 2207 ",
          title: "Computer Aided Design (CAD)",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2204",
          title: "Foreign Language",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2205",
          title: "Ethics in Science and Tech",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2208",
          title: "Introduction to Marketing",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CMT 2203",
          title: "Computational Mathematics",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 2203",
          title: "Electronic Devices and Circuits",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 2204",
          title: "Electrical Measurements and Instrumentation",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 2206",
          title: "Signals and Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 2305",
          title: "Electrical Machines",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2213",
          title: "Data Communication and Networking",
          credits: "2",
          status: "O"
        }
      ],
      "Year 3": [
        {
          semester: 1,
          code: "CML 3101",
          title: "Legal and Patent Aspects",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 3202",
          title: "Communication Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 3203",
          title: "Computer Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 3206",
          title: "Automation Technology I",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 3209",
          title: "Automobile Electrical Systems",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 3210",
          title: "Electrical Installations",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 3211",
          title: "Machine Element Design",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 3301",
          title: "Electrical Power Systems",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 3304",
          title: "Digital Signal Processing",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 3305",
          title: "Control Systems",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3217",
          title: "Advanced Computer Networking",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 3315",
          title: "Internet of Things",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 3102",
          title: "Industrial Safety",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 3607",
          title: "Industrial Training",
          credits: "6",
          status: "C"
        }
      ],
      "Year 4": [
        {
          semester: 1,
          code: "CML 4201",
          title: "Entrepreneurship",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 4202",
          title: "Human Resources Management",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4202",
          title: "Embedded System Design",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4206",
          title: "Automation Technology II",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4207",
          title: "Telecommunication Systems",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4208",
          title: "Fiber Optics Techniques",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4216",
          title: "Energy and Environment",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4301",
          title: "Electronic Circuit Design and Simulations",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 4303",
          title: "Electrical Energy Utilization",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4304",
          title: "Power Electronics",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "EET 4305",
          title: "Digital Communication",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "EET 4818",
          title: "Undergraduate Project",
          credits: "4",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 4209",
          title: "High Voltage Engineering",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4210",
          title: "Electronic Product Design",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "EET 4213",
          title: "Antenna and Propagation",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4214",
          title: "Wireless Communication",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4215",
          title: "Mechatronics",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4217",
          title: "Electrical Machines and Drives",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4219",
          title: "Green Energy and Zero Emission Concepts",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4220",
          title: "Graphical Programming and Data Acquisition",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4311",
          title: "Internet Technology and Applications",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4312",
          title: "Power System Analysis",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "EET 4818",
          title: "Undergraduate Project (cont.)",
          credits: "4",
          status: "C"
        }
      ]
    }
  },
  {
    id: "bet-mt",
    code: "BET (MT)",
    title: "BET (Hons) in Materials Technology",
    department: "Department of Materials Technology",
    duration: "4 Years (8 Semesters)",
    slqfLevel: 6,
    tagline: "Engineering sustainable, smart, and advanced materials from the atoms up",
    description: "Unravels the relationship between the structure, processing, and functional properties of materials. Special emphasis on high-performance polymers, rubbers, nanostructures, composites, and corrosion science crucial to heavy engineering and consumer products.",
    accentClass: "purple",
    glowColor: "shadow-neon-purple",
    iconName: "Atom",
    bgLettering: "BET-MAT",
    corePillars: [
      {
        title: "Polymer & Elastic Technology",
        description: "Synthesizing and processing robust vulcanized rubbers, thermoplastic composites, and biopolymers.",
        icon: "Flame"
      },
      {
        title: "Metallurgy & Advanced Alloys",
        description: "Heat treatment, phase diagrams, and crystalline microstructures of extreme structural alloys.",
        icon: "Layers"
      },
      {
        title: "Nanotechnology",
        description: "Carbon nanotubes, quantum dots, and nanofibres for modern medical sensors, shields, and catalyst arrays.",
        icon: "Award"
      },
      {
        title: "Defect Analysis & Corrosion",
        description: "Electrochemical testing, rust suppression, and non-destructive structural integrity inspections.",
        icon: "Activity"
      }
    ],
    labs: [
      "Material Structural Characterization Lab (SEM/XRD)",
      "Polymer Synthesis and Vulc Testing Lab",
      "Thermal Analysis and Metallurgy Unit",
      "Mechanical Defect Testing & Tensile Lab"
    ],
    careerPaths: [
      "Materials QA/QC Specialist",
      "Polymer Processing Engineer",
      "Metallurgical R&D Auditor",
      "Production Development Specialist"
    ],
    curriculumSemesters: {
      "Year 1": [
        {
          semester: 1,
          code: "CMT 1301",
          title: "Fundamentals of Physics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1302",
          title: "Chemistry for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1303",
          title: "Mathematics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1304",
          title: "Computer for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1201",
          title: "Personality Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 1202",
          title: "Presentation Skills",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1205",
          title: "Communication Skills I",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "ENT 1301",
          title: "Basic Electronics",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1302",
          title: "Electricity and Magnetism",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1307",
          title: "Mathematics for Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1208",
          title: "Programming for Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1204",
          title: "Workshop Technology I",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1203",
          title: "Principles of Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1204",
          title: "Health and Wellbeing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1209",
          title: "Communication Skills II",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "ENT 1203",
          title: "Engineering Drawing",
          credits: "2",
          status: "C"
        }
      ],
      "Year 2": [
        {
          semester: 1,
          code: "MTT 2201",
          title: "Solid-State Physics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 2202",
          title: "Chemistry for Materials Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 2203",
          title: "Ceramic Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 2204",
          title: "CAD",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2306",
          title: "Mathematics for Technology II",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2301",
          title: "Statistics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 2201",
          title: "Social Sciences and Humanities",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2206",
          title: "Indigenous Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 2202",
          title: "Engineering Economics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2202",
          title: "Communication Skills III",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "ICT 2304",
          title: "Object Oriented Programming",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 2206",
          title: "Graphical Programming",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 2210",
          title: "Mechanical Behavior of Materials",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2311",
          title: "Ceramic Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2205",
          title: "Introduction to Metallurgy",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2207",
          title: "Measurements, Error Analysis, Instrumentation",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2108",
          title: "Chemical Engineering Sciences",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2209",
          title: "Polymer Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 2110",
          title: "Introduction to Thermodynamics",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 2203",
          title: "Computational Mathematics",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2204",
          title: "Foreign Language",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2208",
          title: "Introduction to Marketing",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 2205",
          title: "Ethics in Science and Technology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 2206",
          title: "Multimedia and Web Technology",
          credits: "2",
          status: "O"
        }
      ],
      "Year 3": [
        {
          semester: 1,
          code: "MTT 3308",
          title: "Polymer Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3307",
          title: "Metallurgy I",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3306",
          title: "Ceramic Technology II",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3202",
          title: "Degradation of Materials",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3103",
          title: "Ceramic Pilot Plant Practices",
          credits: "1",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 3204",
          title: "Workshop Technology II",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3212",
          title: "Non-Destructive Testing",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 3111",
          title: "Thermodynamics for Materials Technology",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 3101",
          title: "Legal and Patent Aspects",
          credits: "1",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 3102",
          title: "Industrial Safety",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 3609",
          title: "Industrial Training",
          credits: "6",
          status: "C"
        }
      ],
      "Year 4": [
        {
          semester: 1,
          code: "MTT 4201",
          title: "Fluid Mechanics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 4121",
          title: "Research Methodology and Scientific Writing",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 4303",
          title: "Ceramic Technology III",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4219",
          title: "Applied Mechanics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 4104",
          title: "Glass Technology",
          credits: "1",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4305",
          title: "Polymer Technology II",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4206",
          title: "Mineral Processing",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4307",
          title: "Metallurgy II",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4820",
          title: "Research Project",
          credits: "-",
          status: "C"
        },
        {
          semester: 1,
          code: "MTT 4108",
          title: "Directed Reading",
          credits: "1",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4109",
          title: "Seminar",
          credits: "1",
          status: "O"
        },
        {
          semester: 1,
          code: "MTT 4210",
          title: "Work Shadowing",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 4201",
          title: "Entrepreneurship",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4202",
          title: "Human Resource Management",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4820",
          title: "Research Project",
          credits: "8",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 4311",
          title: "Advanced Materials",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4312",
          title: "Characterization of Materials",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4213",
          title: "Manufacturing Systems",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4114",
          title: "Quality Management",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 4215",
          title: "Cleaner Production",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "MTT 4216",
          title: "Industrial Metrology",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4217",
          title: "Composite Materials",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "MTT 4218",
          title: "Paint Technology",
          credits: "2",
          status: "O"
        }
      ]
    }
  },
  {
    id: "bict",
    code: "BICT",
    title: "BICT (Hons) - Bachelor of Information Communication Technology",
    department: "Department of Information and Communication Technology",
    duration: "4 Years (8 Semesters)",
    slqfLevel: 6,
    tagline: "Engineering future-proof systems in AI, Cloud, and Software Operations",
    description: "An intensive systems-level degree designed to produce highly skilled coders, cloud architects, database developers, and cyber defenders. Empowers graduates with a strong curriculum aligned with ACM/IEEE standards.",
    accentClass: "sky",
    glowColor: "shadow-neon-cyan",
    iconName: "Binary",
    bgLettering: "BICT-RUSL",
    corePillars: [
      {
        title: "Full-Stack Development",
        description: "Modern modular software engineering utilizing cloud APIs, reactive state, and robust backends.",
        icon: "Globe"
      },
      {
        title: "Data Science & GenAI",
        description: "Big data pipelining, neural networks, machine learning models, and complex data visualization.",
        icon: "Cpu"
      },
      {
        title: "Cloud Ops & Networking",
        description: "Docker, Kubernetes orchestration, virtual networks, and scalable serverless operations.",
        icon: "Cloud"
      },
      {
        title: "Cyber Security",
        description: "Ethical hacking, cryptography, security audits, and penetration testing on enterprise servers.",
        icon: "Shield"
      }
    ],
    labs: [
      "Information Security & Networks Lab",
      "Software Engineering Development Lab",
      "Data Science & High-Performance Computing Studio",
      "IoT Prototyping & Maker Space"
    ],
    careerPaths: [
      "Full-Stack Software Engineer",
      "Data & Machine Learning Engineer",
      "Cloud Infrastructure Architect",
      "Information Security Specialist"
    ],
    curriculumSemesters: {
      "Year 1": [
        {
          semester: 1,
          code: "ICT 1202",
          title: "Electronic Circuits",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 1305",
          title: "Program Designing and Programming",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 1111",
          title: "Productivity and Collaborative Tools",
          credits: "1",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1301",
          title: "Fundamentals of Physics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1303",
          title: "Fundamentals of Mathematics for Technology",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 1205",
          title: "Communication Skills I",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CML 1201",
          title: "Personality Development",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 1207",
          title: "Human Computer Interaction",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 1108",
          title: "Skill Development Project I",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 1209",
          title: "Web Technologies",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 1210",
          title: "Introduction to Multimedia",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1307",
          title: "Mathematics For Technology I",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "CMT 1209",
          title: "Communication Skills II",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 2,
          code: "CML 1203",
          title: "Principles of Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 1204",
          title: "Health and Wellbeing",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ENT 1302",
          title: "Fundamentals of Electricity and Magnetism",
          credits: "3",
          status: "O"
        }
      ],
      "Year 2": [
        {
          semester: 1,
          code: "ICT 2202",
          title: "Operating Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 2303",
          title: "Data Structures and Algorithms",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 2304",
          title: "Object Oriented Programming",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 2207",
          title: "Software System Design",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 2212",
          title: "Skill Development Project II",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 2202",
          title: "Engineering Economics",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CMT 2202",
          title: "Communication Skills III",
          credits: "2",
          status: "C-NGP"
        },
        {
          semester: 1,
          code: "CMT 2306",
          title: "Mathematics for Technology II",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 2305",
          title: "Computational Mathematics",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2308",
          title: "Database Systems",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2109",
          title: "Communication and Learning Skills",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2211",
          title: "Fundamentals of Statistics",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2213",
          title: "Data Communication and Networking",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 2214",
          title: "Introduction to Information Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2204",
          title: "Foreign Language",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "CML 2205",
          title: "Ethics in Science and Technology",
          credits: "2",
          status: "C"
        }
      ],
      "Year 3": [
        {
          semester: 1,
          code: "ICT 3201",
          title: "Software Project Management",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3203",
          title: "Scientific Computer Applications",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3206",
          title: "Skill Development Project III",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3307",
          title: "Computational Statistics",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 3208",
          title: "Design and Analysis of Algorithms",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3312",
          title: "Software Verification and Validation",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 3315",
          title: "Internet of Things",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 3217",
          title: "Advance Computer Networks",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 3218",
          title: "Basics of Virtual Reality",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 3101",
          title: "Legal and Patent Aspects",
          credits: "1",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3204",
          title: "E-Business Systems",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3209",
          title: "Computer Organization and Architecture",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3310",
          title: "Information Security",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3311",
          title: "Robotics",
          credits: "3",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 3213",
          title: "Advanced Software System Design",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 3314",
          title: "Embedded Systems",
          credits: "3",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3216",
          title: "Research Methodology",
          credits: "2",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 3219",
          title: "Mobile Application Development",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 3220",
          title: "Basics of Game Development",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "CML 3203",
          title: "Basics of Accountancy",
          credits: "2",
          status: "C"
        }
      ],
      "Year 4": [
        {
          semester: 1,
          code: "ICT 4301",
          title: "Mobile Computing",
          credits: "3",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 4202",
          title: "Internet Applications",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 4203",
          title: "Software Engineering",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 4205",
          title: "Current Topics in Information Technology",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "ICT 4306",
          title: "Data Science",
          credits: "3",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 4207",
          title: "Artificial Intelligence",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 4210",
          title: "Digital Image Processing",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "ICT 4211",
          title: "Computer Graphics and Visualization",
          credits: "2",
          status: "O"
        },
        {
          semester: 1,
          code: "CML 4201",
          title: "Entrepreneurship",
          credits: "2",
          status: "C"
        },
        {
          semester: 1,
          code: "CML 4202",
          title: "Human Resource Management",
          credits: "2",
          status: "O"
        },
        {
          semester: 2,
          code: "ICT 4808",
          title: "Research Project",
          credits: "8",
          status: "C"
        },
        {
          semester: 2,
          code: "ICT 4609",
          title: "Industrial Training",
          credits: "6",
          status: "C"
        }
      ]
    }
  }
];

export const FACULTY_STATS: FacultyMetric[] = [
  {
    label: "Departments",
    value: "05",
    description: "Specialized departments anchoring advanced technology streams"
  },
  {
    label: "Undergraduates",
    value: "1,200",
    suffix: "+",
    description: "Highly talented students pursuing elite honors technology careers"
  },
  {
    label: "Academic Laboratories",
    value: "20",
    suffix: "+",
    description: "State-of-the-art labs loaded with testing rigs and modern components"
  },
  {
    label: "Graduate Employability",
    value: "96",
    suffix: "%",
    description: "Record of immediate employment in modern local & global engineering firms"
  }
];
