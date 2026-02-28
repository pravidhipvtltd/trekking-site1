// Shared Framer Motion variants and easing for cinematic, smooth animations

// Premium easing curves (smooth deceleration at end)
export const easeSmooth = [0.16, 1, 0.3, 1]; // easeOutExpo-like
export const easeOrganic = [0.22, 1, 0.36, 1]; // smooth
export const easeCinema = [0.25, 0.46, 0.45, 0.94]; // easeOutQuad
export const easeReveal = [0.33, 1, 0.68, 1]; // strong easeOut

// Spring configs for natural motion
export const springSmooth = { type: 'spring', stiffness: 300, damping: 30 };
export const springBouncy = { type: 'spring', stiffness: 400, damping: 25 };
export const springGentle = { type: 'spring', stiffness: 200, damping: 24 };
export const springSnappy = { type: 'spring', stiffness: 500, damping: 30 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeSmooth } },
  exit: { opacity: 0, y: 20 },
};

export const fadeUpStrong = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeSmooth } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: easeSmooth } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easeSmooth } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easeSmooth } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

export const staggerItemFast = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

export const transition = {
  type: 'tween',
  duration: 0.7,
  ease: easeSmooth,
};

export const transitionFast = {
  type: 'tween',
  duration: 0.4,
  ease: easeSmooth,
};

export const viewport = {
  once: true,
  margin: '-100px',
  amount: 0.15,
};

export const viewportTight = {
  once: true,
  margin: '-60px',
  amount: 0.3,
};
