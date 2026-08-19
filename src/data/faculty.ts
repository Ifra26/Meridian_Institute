export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: 'Computer Science' | 'Business & Management' | 'Design & Media' | 'Biomedical Sciences' | 'Humanities & Languages';
  qualification: string;
  email: string;
  officeHours: string;
  image: string;
  bio: string;
  publications: string[];
  coursesTaught: string[];
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'dr-eleanor-vane',
    name: 'Dr. Eleanor Vane',
    title: 'Dean & Chair of Computer Science',
    department: 'Computer Science',
    qualification: 'Ph.D. in Computer Science (MIT), M.Sc. (Stanford)',
    email: 'e.vane@meridian.edu.pk',
    officeHours: 'Mon & Wed: 14:00 - 16:00 PKT',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Eleanor Vane is a renowned artificial intelligence researcher specializing in autonomous multi-agent systems and ethical AI governance. She has over 18 years of academic research and industry consulting experience.',
    publications: [
      'Vane, E. et al. (2025). "Neural Architectures for Ethically Bounded Decision Systems." Journal of AI Research.',
      'Vane, E. (2023). "Scalable Deep Learning in Distributed Heterogeneous Clusters." IEEE Transactions.'
    ],
    coursesTaught: [
      'Machine Learning Foundations (CS-401)',
      'Ethics in Artificial Intelligence (CS-480)',
      'Advanced Neural Networks (CS-610)'
    ]
  },
  {
    id: 'prof-marcus-sterling',
    name: 'Prof. Marcus Sterling',
    title: 'Professor of Strategic Leadership',
    department: 'Business & Management',
    qualification: 'Ph.D. in Management (Harvard), MBA (Wharton)',
    email: 'm.sterling@meridian.edu.pk',
    officeHours: 'Tue & Thu: 10:00 - 12:00 PKT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Former strategic advisor to global enterprise firms, Prof. Sterling brings extensive corporate turnaround experience into the MBA lecture hall.',
    publications: [
      'Sterling, M. (2024). "Agile Governance in Disruptive Markets." Harvard Business Review.',
      'Sterling, M. & Zhao, L. (2022). "Capital Structure and Global Expansion Strategies."'
    ],
    coursesTaught: [
      'Strategic Corporate Management (MBA-510)',
      'Organizational Leadership & Dynamics (MBA-530)'
    ]
  },
  {
    id: 'dr-sophia-chen',
    name: 'Dr. Sophia Chen',
    title: 'Associate Professor of Design Thinking',
    department: 'Design & Media',
    qualification: 'Ph.D. in Human-Computer Interaction (RCA London)',
    email: 's.chen@meridian.edu.pk',
    officeHours: 'Fri: 11:00 - 15:00 PKT',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Chen pioneers research in accessible interface design, spatial computing interfaces, and design systems for enterprise software.',
    publications: [
      'Chen, S. (2025). "Spatial Ergonomics in Next-Generation VR Interfaces." ACM SIGCHI.',
      'Chen, S. (2023). "Micro-interactions and User Delight in Mobile Systems."'
    ],
    coursesTaught: [
      'Design Thinking & HCD (UX-201)',
      'Design Systems Architecture (UX-402)'
    ]
  },
  {
    id: 'dr-arthur-pendelton',
    name: 'Dr. Arthur Pendelton',
    title: 'Head of Biomedical Research Lab',
    department: 'Biomedical Sciences',
    qualification: 'Ph.D. in Biochemistry (Oxford), B.Sc. (Cambridge)',
    email: 'a.pendelton@meridian.edu.pk',
    officeHours: 'Wed: 09:00 - 13:00 PKT',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Pendelton leads Meridian’s gene-editing and molecular biology laboratories, researching CRISPR application in rare metabolic disorders.',
    publications: [
      'Pendelton, A. (2024). "Precision Gene Therapies for Inborn Errors of Metabolism." Nature Biotechnology.',
      'Pendelton, A. et al. (2021). "Enzymatic Catalysis in Synthetic Biology."'
    ],
    coursesTaught: [
      'Advanced Molecular Biology (BM-501)',
      'Genomics & Bioinformatics (BM-604)'
    ]
  },
  {
    id: 'dr-clara-rodriguez',
    name: 'Dr. Clara Rodriguez',
    title: 'Senior Lecturer in Global Communication',
    department: 'Humanities & Languages',
    qualification: 'Ph.D. in Applied Linguistics (Columbia)',
    email: 'c.rodriguez@meridian.edu.pk',
    officeHours: 'Mon: 13:00 - 16:00 PKT',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in cross-cultural communication, corporate rhetoric, and diplomacy. Dr. Rodriguez advises international non-profit institutions.',
    publications: [
      'Rodriguez, C. (2023). "Linguistic Nuance in International Negotiations." Oxford Press.'
    ],
    coursesTaught: [
      'Executive Public Speaking (ENG-102)',
      'Cross-Cultural Communication (ENG-205)'
    ]
  }
];
