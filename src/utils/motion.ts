import type { Transition, Variants } from 'framer-motion';

/** Premium easing curve — smooth, academic, not bouncy */
export const easePremium = [0.22, 1, 0.36, 1] as const;

export const transitionPremium: Transition = {
  duration: 0.7,
  ease: easePremium,
};

export const transitionFast: Transition = {
  duration: 0.45,
  ease: easePremium,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const heroBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easePremium, delay: 0.2 },
  },
};

export const heroHeadingLineVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easePremium, delay: 0.35 + i * 0.15 },
  }),
};

export const heroGoldTextVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: easePremium, delay: 0.65 },
  },
};

export const heroDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePremium, delay: 0.85 },
  },
};

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium, delay: 1.05 + i * 0.1 },
  }),
};

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: easePremium },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.18, ease: easePremium },
  },
};

export const variantMap = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  slideLeft: slideLeftVariants,
  slideRight: slideRightVariants,
  scaleIn: scaleInVariants,
} as const;

export type RevealVariant = keyof typeof variantMap;

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: '-40px 0px -40px 0px' as const,
};

/** Hero background video asset (served from public/) */
export const HERO_VIDEO_SRC = '/assets/videos/video.mp4';
export const HERO_VIDEO_POSTER =
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80';
