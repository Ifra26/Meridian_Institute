export interface Program {
  id: string;
  title: string;
  code: string;
  category: 'technology' | 'business' | 'design' | 'science' | 'languages';
  level: 'Undergraduate' | 'Postgraduate' | 'Certificate' | 'Diploma';
  duration: string;
  credits: number;
  format: 'On-Campus' | 'Hybrid' | 'Online';
  shortDescription: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  tuitionFee: string;
  eligibility: string[];
  careerOpportunities: string[];
  curriculum: {
    semester: string;
    modules: string[];
  }[];
}

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'cs-ai',
    title: 'B.Sc. Computer Science & Artificial Intelligence',
    code: 'BS-CS-101',
    category: 'technology',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    credits: 132,
    format: 'On-Campus',
    shortDescription: 'Master modern software engineering, deep machine learning algorithms, cloud computing, and intelligent systems design.',
    fullDescription: 'The B.Sc. Computer Science & Artificial Intelligence program equips students with rigorous computational theory, advanced algorithms, and hands-on software development expertise. Designed in consultation with leading technology partners in Karachi, the curriculum bridges theoretical computer science with applied AI technologies.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tuitionFee: 'PKR 285,000 / Semester',
    eligibility: [
      'Intermediate (F.Sc Pre-Engineering / ICS) or A-Levels with Min 65% Marks',
      'Meridian Academic Aptitude Test (MAAT) & Entry Interview',
      'Proof of Mathematics & Analytical Aptitude'
    ],
    careerOpportunities: [
      'AI / Machine Learning Engineer',
      'Full Stack Software Developer',
      'Data Architect & Engineer',
      'Cybersecurity Specialist',
      'Tech Startup Founder'
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        modules: ['Calculus & Linear Algebra', 'Introduction to Computer Programming (Python/C++)', 'Digital Logic & Computer Architecture', 'Academic Writing & Communication']
      },
      {
        semester: 'Semester 2',
        modules: ['Data Structures & Algorithms', 'Discrete Mathematics', 'Object-Oriented Programming (Java)', 'Probability & Statistics for AI']
      },
      {
        semester: 'Semester 3',
        modules: ['Database Management Systems', 'Operating Systems & Networks', 'Machine Learning Foundations', 'Software Engineering Principles']
      },
      {
        semester: 'Semester 4',
        modules: ['Deep Learning & Neural Networks', 'Web Technologies & Cloud Computing', 'Computer Vision Basics', 'Ethics in Artificial Intelligence']
      }
    ]
  },
  {
    id: 'mba-leadership',
    title: 'Master of Business Administration (Global Leadership)',
    code: 'MBA-GL-501',
    category: 'business',
    level: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    credits: 66,
    format: 'Hybrid',
    shortDescription: 'Accelerate your executive trajectory with global strategic management, financial intelligence, and corporate leadership.',
    fullDescription: 'The Meridian MBA in Global Leadership transforms high-potential professionals into visionary corporate decision-makers. Featuring real-world case studies, executive consulting capstones, and industry leadership mentorship.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tuitionFee: 'PKR 340,000 / Semester',
    eligibility: [
      '16-Year Bachelor’s Degree in any discipline (Min CGPA 2.8 / 60%)',
      'Minimum 2 years of relevant professional work experience',
      'Two letters of recommendation & Statement of Purpose'
    ],
    careerOpportunities: [
      'Management Consultant',
      'Chief Operations Officer / Director',
      'Strategic Planning Manager',
      'Investment Banking Analyst',
      'Global Product Executive'
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        modules: ['Strategic Corporate Management', 'Financial Accounting & Analysis', 'Managerial Economics', 'Organizational Leadership']
      },
      {
        semester: 'Semester 2',
        modules: ['Global Marketing Strategy', 'Corporate Finance & Valuation', 'Operations & Supply Chain Excellence', 'Business Analytics']
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Professional Diploma in Digital Marketing & Growth Hacking',
    code: 'DIP-DM-202',
    category: 'business',
    level: 'Diploma',
    duration: '1 Year (2 Semesters)',
    credits: 32,
    format: 'Hybrid',
    shortDescription: 'Master SEO, multi-channel performance advertising, conversion optimization, brand strategy, and consumer analytics.',
    fullDescription: 'This high-impact diploma delivers cutting-edge digital growth strategies, programmatic ad management, content ecosystem creation, and ROI-driven marketing analytics tailored for modern digital brands.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tuitionFee: 'PKR 145,000 / Semester',
    eligibility: [
      'Intermediate (FA/F.Sc) or A-Levels',
      'Basic familiarity with web technologies and social platforms'
    ],
    careerOpportunities: [
      'Digital Marketing Manager',
      'Growth Hacker / Lead Specialist',
      'SEO & SEM Consultant',
      'Performance Ad Strategist'
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        modules: ['Foundations of Digital Strategy', 'Search Engine Optimization (SEO)', 'Content Marketing & Copywriting', 'Google & Meta Ads Optimization']
      }
    ]
  },
  {
    id: 'ux-design',
    title: 'B.Des. User Experience & Product Design',
    code: 'BD-UX-301',
    category: 'design',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    credits: 124,
    format: 'On-Campus',
    shortDescription: 'Shape intuitive digital products through design thinking, user research, wireframing, interactive prototyping, and design systems.',
    fullDescription: 'Merge aesthetic mastery with user psychology. Students work in state-of-the-art interactive design labs crafting real applications, spatial interfaces, and enterprise design system solutions.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tuitionFee: 'PKR 260,000 / Semester',
    eligibility: [
      'Intermediate or A-Levels in any group',
      'Creative portfolio submission or entrance design task'
    ],
    careerOpportunities: [
      'UI/UX Designer',
      'Product Designer',
      'User Experience Researcher',
      'Design Systems Architect'
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        modules: ['Design Thinking & Human-Centered Design', 'Visual Hierarchy & Typography', 'Design History', 'Digital Sketching']
      }
    ]
  },
  {
    id: 'biomedical-science',
    title: 'M.Sc. Biomedical Science & Biotechnology',
    code: 'MS-BM-601',
    category: 'science',
    level: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    credits: 60,
    format: 'On-Campus',
    shortDescription: 'Pioneer groundbreaking innovations in genomics, molecular diagnostics, bioengineering, and therapeutic medicine.',
    fullDescription: 'Hands-on advanced research in cleanroom laboratories and bio-computing labs. Focus on molecular genetics, immunology, gene editing techniques, and pharmaceutical research.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tuitionFee: 'PKR 310,000 / Semester',
    eligibility: [
      'Bachelor Degree in Biology, Chemistry, Pharmacy, or Life Sciences',
      'Minimum CGPA 3.0 or equivalent'
    ],
    careerOpportunities: [
      'Biomedical Research Scientist',
      'Biotech Product Manager',
      'Clinical Trials Specialist',
      'Genetic Analyst'
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        modules: ['Advanced Molecular Biology', 'Genomics & Bioinformatics', 'Cellular Engineering', 'Bioethics & Biosafety']
      }
    ]
  },
  {
    id: 'english-comm',
    title: 'Certificate in Executive Business Communication',
    code: 'CERT-ENG-101',
    category: 'languages',
    level: 'Certificate',
    duration: '6 Months',
    credits: 16,
    format: 'Online',
    shortDescription: 'Enhance corporate business negotiations, academic writing, public speaking, and intercultural communication skills.',
    fullDescription: 'Comprehensive certificate program designed for corporate professionals and students seeking polished fluency, presentation skills, and corporate negotiation techniques.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tuitionFee: 'PKR 85,000 Total',
    eligibility: ['Open enrollment with basic English comprehension'],
    careerOpportunities: [
      'Corporate Relations Officer',
      'International Liaison',
      'Content Specialist',
      'Public Relations Assistant'
    ],
    curriculum: [
      {
        semester: 'Module 1',
        modules: ['Advanced Business Communication', 'Executive Public Speaking & Rhetoric', 'Cross-Cultural Negotiations']
      }
    ]
  }
];
