export type PageRoute = 
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'apply'
  | 'tracking'
  | 'faculty'
  | 'campus-life'
  | 'gallery'
  | 'news'
  | 'contact'
  | 'admin';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}
