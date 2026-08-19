export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  graduationYear: string;
  company?: string;
  quote: string;
  image: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'AI Research Engineer',
    program: 'B.Sc. Computer Science & AI',
    graduationYear: 'Class of 2024',
    company: 'DeepMind Partner Labs',
    quote: 'The Meridian Institute gave me unprecedented access to research-grade AI infrastructure and world-class faculty mentorship. By my junior year, I was already publishing in top IEEE journals.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    rating: 5
  },
  {
    id: 't-2',
    name: 'David K. O’Connor',
    role: 'Global Marketing Director',
    program: 'MBA in Global Leadership',
    graduationYear: 'Class of 2023',
    company: 'Vanguard Enterprise Group',
    quote: 'The case-study methodology and international executive network at Meridian reshaped how I approach global business strategy. It was the single best career investment I ever made.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Senior Product Designer',
    program: 'B.Des. User Experience & Product Design',
    graduationYear: 'Class of 2025',
    company: 'Fintech Studio Zurich',
    quote: 'At Meridian, design isn’t just aesthetics—it’s user psychology and technical execution. The hands-on studio projects directly paved my way into European tech product leadership.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    rating: 5
  }
];
