export interface Notice {
  id: string;
  title: string;
  category: 'Examination' | 'Admissions' | 'Finance' | 'General';
  date: string;
  refNo: string;
  summary: string;
  fileSize: string;
  important?: boolean;
}

export const NOTICES_DATA: Notice[] = [
  {
    id: 'notice-fall-exams',
    title: 'Fall 2026 Mid-Semester Examination Schedule & Regulations',
    category: 'Examination',
    date: 'August 10, 2026',
    refNo: 'EXAM/2026/08-14',
    summary: 'Detailed examination dates, hall assignments, and academic integrity regulations for undergraduate and postgraduate programs.',
    fileSize: '1.4 MB PDF',
    important: true
  },
  {
    id: 'notice-scholarship-applications',
    title: 'Meridian Excellence Merit Scholarship Applications Open (2026-2027)',
    category: 'Admissions',
    date: 'August 05, 2026',
    refNo: 'SCH/2026/08-02',
    summary: 'Eligible candidates with GPA 3.8+ may apply for up to 100% tuition coverage for the upcoming academic cycle.',
    fileSize: '850 KB PDF',
    important: true
  },
  {
    id: 'notice-fee-payment-deadline',
    title: 'Notice regarding Semester Tuition Fee Installment & Payment Deadlines',
    category: 'Finance',
    date: 'July 28, 2026',
    refNo: 'FIN/2026/07-99',
    summary: 'Guidelines for online portal fee payments, installment plans, and late fee waiver requests.',
    fileSize: '620 KB PDF',
    important: false
  }
];
