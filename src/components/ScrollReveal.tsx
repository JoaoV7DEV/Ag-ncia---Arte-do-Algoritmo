import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.85,
  distance = 38,
  scale = 0.96,
  blur = true,
  className = '',
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop keeps the deep, slower, blur-focused animations.
  // Mobile uses fast, simple, lightweight animations (no heavy blur filters, small displacement, 0.4s duration).
  const effectiveDuration = isMobile ? 0.42 : duration;
  const effectiveDistance = isMobile ? 18 : distance;
  const effectiveDelay = isMobile ? Math.min(delay, 0.1) : delay;
  const effectiveScale = isMobile ? 1 : scale;
  const effectiveBlur = isMobile ? false : blur;
  const effectiveMargin = isMobile ? '-25px' : '-65px';

  const getInitial = () => {
    const base: {
      opacity: number;
      scale?: number;
      filter?: string;
      x?: number;
      y?: number;
    } = {
      opacity: 0,
      scale: effectiveScale,
    };

    if (effectiveBlur) {
      base.filter = 'blur(6px)';
    }

    switch (direction) {
      case 'up':
        base.y = effectiveDistance;
        break;
      case 'down':
        base.y = -effectiveDistance;
        break;
      case 'left':
        base.x = -effectiveDistance;
        break;
      case 'right':
        base.x = effectiveDistance;
        break;
      case 'none':
      default:
        break;
    }

    return base;
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: effectiveBlur ? 'blur(0px)' : undefined,
      }}
      viewport={{ once: true, margin: effectiveMargin }}
      transition={{
        duration: effectiveDuration,
        delay: effectiveDelay,
        ease: isMobile ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


