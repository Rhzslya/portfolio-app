export const slideInFromLeft = (delay: number) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});

export const fadeIn = (delay: number) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration: 1,
      ease: "easeInOut",
    },
  },
});

export const popIn = (delay: number) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

export const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export const textSwitcherVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const imageStackAnimate = (
  initialX = 100,
  initialY = 100,
  duration = 1
) => ({
  hidden: { opacity: 0, x: initialX, y: initialY },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: duration, ease: "easeOut" },
  },
});

export const buttonVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // ⏳ Delay tiap child muncul
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};
