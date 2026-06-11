export interface DegreeProgram {
  id: string;
  code: string;
  title: string;
  department: string;
  duration: string;
  slqfLevel: number;
  description: string;
  tagline: string;
  accentClass: string; // Tailwind tint helper e.g. "cyan"
  glowColor: string; // e.g. "shadow-neon-cyan"
  iconName: string; // Name matching our custom rendering
  bgLettering: string; // Large background letters (e.g. "BICT")
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  labs: string[];
  careerPaths: string[];
  curriculumSemesters: {
    [key: string]: string[];
  };
}

export interface FacultyMetric {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}
