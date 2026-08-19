export interface CampusEvent {
  id: string;
  title: string;
  category: 'Conference' | 'Workshop' | 'Cultural' | 'Admissions' | 'Career Fair';
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  description: string;
  speaker?: string;
  image: string;
}

export const EVENTS_DATA: CampusEvent[] = [
  {
    id: 'global-tech-summit-2026',
    title: 'Meridian International Tech & Leadership Summit 2026',
    category: 'Conference',
    date: 'September 15, 2026',
    month: 'SEP',
    day: '15',
    time: '09:00 AM - 05:00 PM',
    location: 'Meridian Grand Auditorium & Online Stream',
    speaker: 'Dr. Eleanor Vane & Guest Keynote Speakers',
    description: 'A landmark gathering of tech visionaries, venture capitalists, and academic leaders discussing the future of AI, quantum computing, and ethical technology.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'fall-open-day',
    title: 'Fall 2026 Campus Open Day & Program Experience',
    category: 'Admissions',
    date: 'September 28, 2026',
    month: 'SEP',
    day: '28',
    time: '10:00 AM - 03:00 PM',
    location: 'Main Campus Quadrangle',
    speaker: 'Admissions Directorate & Department Chairs',
    description: 'Prospective students and families are invited for guided campus tours, live lab demonstrations, application workshops, and direct meetings with faculty.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'annual-career-expo',
    title: 'Global Enterprise Career & Internship Fair 2026',
    category: 'Career Fair',
    date: 'October 12, 2026',
    month: 'OCT',
    day: '12',
    time: '09:30 AM - 04:30 PM',
    location: 'Meridian Student Center & Exhibition Hall',
    speaker: '50+ Global Enterprise Employers',
    description: 'Connect directly with leading corporate recruiters, technology firms, finance houses, and healthcare institutions recruiting Meridian seniors and alumni.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
  }
];
