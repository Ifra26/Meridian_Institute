export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Events' | 'Students' | 'Facilities' | 'Graduation';
  image: string;
  caption: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Meridian Central Library & Learning Hub',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    caption: 'State-of-the-art quiet study pods, digital archives, and collaborative work lounges.'
  },
  {
    id: 'gal-2',
    title: 'Advanced AI & Robotics Computing Lab',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students developing intelligent robotic perception models in the engineering center.'
  },
  {
    id: 'gal-3',
    title: 'Class of 2025 Graduation Ceremony',
    category: 'Graduation',
    image:'https://images.unsplash.com/photo-1695425173758-37e9c23b962a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrating academic excellence and international achievement at Meridian Grand Hall.'
  },
  {
    id: 'gal-4',
    title: 'Main Quadrangle & Student Center',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    caption: 'The heart of student life, outdoor events, and peer networking.'
  },
  {
    id: 'gal-5',
    title: 'Biomedical Micro-Genomics Cleanroom',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    caption: 'High-level biosafety research space equipped for gene synthesis and analysis.'
  },
  {
    id: 'gal-6',
    title: 'Design & UX Prototype Studio',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Interactive product prototyping and design thinking critique workshops.'
  }
];

export interface VideoGalleryItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export const VIDEO_GALLERY_DATA: VideoGalleryItem[] = [
  {
    id: 'vid-1',
    title: 'Meridian Campus Life & Student Experience Tour',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/9dhZ1mX96jc', // TEMP: University of Miami campus tour — replace with Meridian's own tour footage
    category: 'Campus Tour'
  },
  {
    id: 'vid-2',
    title: 'Artificial Intelligence & Robotics Department Showcase',
    duration: '4:20',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/9Ss6cCSaQFo', // TEMP: U. Rochester Robotics & AI Lab tour — replace with Meridian's own AI/robotics lab footage
    category: 'Academics'
  },
  {
    id: 'vid-3',
    title: 'Alumni Spotlight: Building Future-Ready Global Careers',
    duration: '2:50',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/TE0pFlSQs-g', // TEMP: U. Glasgow alumni spotlight — replace with a Meridian alumni interview
    category: 'Testimonials'
  }
];