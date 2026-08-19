export interface NewsArticle {
  id: string;
  title: string;
  category: 'Research' | 'Campus News' | 'Academic' | 'Student Success';
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  featured?: boolean;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'ai-lab-inauguration',
    title: 'Meridian Opens State-of-the-Art Artificial Intelligence Research Center in Karachi',
    category: 'Research',
    date: 'August 14, 2026',
    readTime: '4 min read',
    author: 'Office of Communications',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'The multi-disciplinary AI research facility includes high-performance GPU clusters, quantum simulation computing units, and dedicated robotics suites.',
    content: 'The Meridian Institute officially inaugurated its flagship AI & Robotics Research Facility at the Gulshan-e-Iqbal campus today. Attended by leading Pakistani tech pioneers and international academics, the facility provides students and faculty with supercomputing power to research ethical AI, autonomous systems, and predictive healthcare models.',
    featured: true
  },
  {
    id: 'global-exchange-program',
    title: 'Meridian Expands Student Exchange Partnerships with Top European Universities',
    category: 'Academic',
    date: 'August 02, 2026',
    readTime: '3 min read',
    author: 'International Relations',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'New bilateral academic exchange agreements allow Meridian scholars to complete dual-degree semesters across 14 prestigious partner institutions.',
    content: 'Starting Spring 2027, Meridian undergraduates can spend up to two semesters abroad with full credit transfer. Partner institutions include top-ranking technology institutes in Zurich, Munich, and London.',
    featured: false
  },
  {
    id: 'hackathon-winners-2026',
    title: 'Meridian Engineering Team Takes 1st Place at National CleanTech Innovation Challenge',
    category: 'Student Success',
    date: 'July 25, 2026',
    readTime: '5 min read',
    author: 'Faculty of Science',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Student team "Sol-Tech" developed a low-cost, solar-powered water filtration device capable of purifying 1,000 liters daily.',
    content: 'Out of 120 competing university teams across Pakistan, Meridian Computer Science and Biomedical engineering seniors captured top honors for their smart IoT-enabled water purification system.',
    featured: false
  }
];
