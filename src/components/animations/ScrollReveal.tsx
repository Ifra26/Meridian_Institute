import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import {
  variantMap,
  viewportOnce,
  transitionPremium,
  type RevealVariant,
} from '../../utils/motion';

interface ScrollRevealProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  as = 'div',
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();

  const components = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    li: motion.li,
    span: motion.span,
  };

  const Component = components[as];

  return (
    <Component
      className={className}
      variants={variantMap[variant]}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={viewportOnce}
      transition={{ ...transitionPremium, delay }}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
};

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: 'div' | 'ul' | 'section';
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className,
  stagger = 0.1,
  as = 'div',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const components = {
    div: motion.div,
    ul: motion.ul,
    section: motion.section,
  };

  const Component = components[as];

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </Component>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className,
  as = 'div',
}) => {
  const components = {
    div: motion.div,
    li: motion.li,
    article: motion.article,
  };

  const Component = components[as];

  return (
    <Component
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: transitionPremium,
        },
      }}
    >
      {children}
    </Component>
  );
};