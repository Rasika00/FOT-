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
      "Year 1-2 Foundations": [
        "CMT 1301 Fundamentals of Physics for Technology",
        "CMT 1302 Fundamentals of Chemistry for Technology",
        "CMT 1303 Fundamentals of Mathematics for Technology",
        "CMT 1304 Fundamentals of Computers for Technology",
        "CMT 1306 Fundamentals of Biology for Technology",
        "BPT 1201 General Microbiology",
        "BPT 1202 Cell Biology",
        "FDT 1201 Organic Chemistry",
        "CMT 1307 Mathematics for Technology I"
      ],
      "Year 3 Specialization": [
        "BPT 2202 Introduction to Bioprocess Technology",
        "BPT 2204 Plant Tissue Culture",
        "BPT 2205 Molecular Biology",
        "BPT 2206 Bioreactor Operation and Design",
        "BPT 2207 Basic Immunology",
        "BPT 2209 Molecular Biotechnology",
        "BPT 3201 Molecular Microbiology",
        "BPT 3302 Bioinformatics",
        "BPT 3203 Bioprocess Instrumentation & Control"
      ],
      "Year 4 Advanced & Research": [
        "BPT 4301 Drug Designing",
        "BPT 4302 Downstream Process Technology",
        "BPT 4303 Bioremediation & Waste Management",
        "BPT 4204 Molecular Virology",
        "BPT 4205 Plant Cell Culture",
        "BPT 4206 Pharmaceutical Biotechnology",
        "BPT 4808 Bioprocess Technology Project (8 Credits)"
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
      "Year 1-2 Foundations": [
        "CMT 1301 Fundamentals of Physics for Technology",
        "CMT 1302 Fundamentals of Chemistry for Technology",
        "CMT 1303 Fundamentals of Mathematics for Technology",
        "CMT 1304 Fundamentals of Computers for Technology",
        "CMT 1306 Fundamentals of Biology for Technology",
        "BPT 1201 General Microbiology",
        "FDT 2201 Physical Chemistry",
        "FDT 2203 Introduction to Food Industry",
        "FDT 2204 Food Preservation"
      ],
      "Year 3 Specialization": [
        "FDT 2207 Food Chemistry",
        "FDT 2208 Food Microbiology",
        "FDT 2209 Introduction to Human Nutrition",
        "FDT 3201 Fruits & Vegetables Processing Technology",
        "FDT 3202 Food Engineering",
        "FDT 3203 Food Analysis",
        "FDT 3204 Meat and Fish Processing Technology",
        "FDT 3205 Functional Food and Food Toxicology",
        "FDT 3614 Industrial Training"
      ],
      "Year 4 Advanced & Research": [
        "FDT 4302 Food Product Development",
        "FDT 4204 Quality Assurance, Safety & Standards",
        "FDT 4205 Food Marketing",
        "FDT 4206 Supply Chain Analysis",
        "FDT 4209 Sensory Evaluation",
        "FDT 4801 Research Project (8 Credits)"
      ]
    }
  },
  {
    id: "bet-ee",
    code: "BET (EE)",
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
      "Year 1-2 Foundations": [
        "CMT 1301 Fundamentals of Physics for Technology",
        "CMT 1302 Fundamentals of Chemistry for Technology",
        "CMT 1303 Fundamentals of Mathematics for Technology",
        "CMT 1304 Fundamentals of Computers for Technology",
        "ENT 1203 Engineering Drawing",
        "ENT 1204 Workshop Technology I",
        "ENT 1301 Introduction to Basic Electronics",
        "ENT 1302 Fundamentals of Electricity & Magnetism"
      ],
      "Year 3 Specialization": [
        "EET 2202 Electricity Network",
        "EET 2208 Introduction to Electrical Power",
        "EET 2301 Digital & Analog Electronics",
        "EET 2203 Electronic Devices and Circuits",
        "EET 2204 Electrical Measurements and Instrumentation",
        "EET 2206 Signals and Systems",
        "EET 2305 Electrical Machines",
        "EET 3301 Electrical Power Systems",
        "EET 3304 Digital Signal Processing",
        "EET 3305 Control Systems",
        "EET 3607 Industrial Training"
      ],
      "Year 4 Advanced & Research": [
        "EET 4301 Electronic Circuit Design and Simulations",
        "EET 4304 Power Electronics",
        "EET 4210 Electronic Product Design",
        "EET 4818 Undergraduate Project"
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
      "Year 1-2 Foundations": [
        "CMT 1301 Fundamentals of Physics for Technology",
        "CMT 1302 Fundamentals of Chemistry for Technology",
        "CMT 1303 Fundamentals of Mathematics for Technology",
        "CMT 1304 Fundamentals of Computers for Technology",
        "ENT 1301 Introduction to Basic Electronics",
        "ENT 1302 Fundamentals of Electricity & Magnetism",
        "ENT 1204 Workshop Technology I",
        "ENT 1203 Engineering Drawing"
      ],
      "Year 3 Specialization": [
        "MTT 2201 Fundamentals of Solid-State Physics",
        "MTT 2202 Chemistry for Materials Technology",
        "MTT 2203 Introduction to Ceramic Technology",
        "MTT 2204 Computer Aided Design (CAD)",
        "MTT 2210 Mechanical Behavior of Materials",
        "MTT 2311 Ceramic Technology I",
        "MTT 2205 Introduction to Metallurgy",
        "MTT 2209 Introduction to Polymer Technology",
        "MTT 3308 Polymer Technology I",
        "MTT 3307 Metallurgy I",
        "MTT 3306 Ceramic Technology II",
        "MTT 3609 Industrial Training (6 Credits)"
      ],
      "Year 4 Advanced & Research": [
        "MTT 4201 Fluid Mechanics",
        "MTT 4121 Research Methodology & Scientific Writing",
        "MTT 4219 Applied Mechanics",
        "MTT 4104 Glass Technology",
        "MTT 4305 Polymer Technology II",
        "MTT 4820 Research Project (8 Credits)"
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
      "Year 1-2 Foundations": [
        "ICT 1202 Electronic Circuits",
        "ICT 1305 Program Designing and Programming",
        "ICT 1111 Productivity and Collaborative Tools",
        "CMT 1301 Fundamentals of Physics for Technology",
        "CMT 1303 Fundamentals of Mathematics for Technology",
        "ICT 1207 Human Computer Interaction",
        "ICT 1108 Skill Development Project I",
        "ICT 1209 Web Technologies",
        "ICT 1210 Introduction to Multimedia"
      ],
      "Year 3 Specialization": [
        "ICT 2202 Operating Systems",
        "ICT 2303 Data Structures and Algorithms",
        "ICT 2304 Object Oriented Programming",
        "ICT 2207 Software System Design",
        "ICT 2212 Skill Development Project II",
        "ICT 2305 Computational Mathematics",
        "ICT 2308 Database Systems",
        "ICT 2213 Data Communication and Networking",
        "ICT 3201 Software Project Management",
        "ICT 3312 Software Verification and Validation"
      ],
      "Year 4 Advanced & Research": [
        "ICT 4301 Mobile Computing",
        "ICT 4202 Internet Applications",
        "ICT 4203 Software Engineering",
        "ICT 4205 Current Topics in Information Technology",
        "ICT 4808 Research Project (8 Credits)",
        "ICT 4609 Industrial Training (6 Credits)"
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
