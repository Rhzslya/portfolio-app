"use client";
import { AnimatePresence, motion } from "framer-motion";

import { Search, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useEffect, useRef, useState } from "react";
import { popIn, textSwitcherVariants } from "@/utils/FramerMotionStyle";

export function GlowingEffectDemo() {
  return (
    <GridItem
      area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
      icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Coming soon on Aceternity UI"
      description="I'm writing the code as I record this, no shit."
    />
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({}: GridItemProps) => {
  const words = [
    "Rush Site",
    "Rapid Speed",
    "Rising Star",
    "Royal Squad",
    "Rogue System",
    "Radiant Sky",
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi untuk memulai atau mengatur ulang timer
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Bersihkan interval sebelumnya
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 10000); // 10 detik
  };

  // Ganti kata saat tombol di klik dan reset timer
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
    startTimer(); // Reset waktu saat tombol ditekan
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.div
      className="relative ml-auto lg:m-auto p-2 rounded-full"
      initial="hidden"
      animate="visible"
      variants={popIn(0.2)}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-neutral-200 w-fit mx-auto px-4 py-1 rounded-full shadow-[0_2px_12px_rgba(245,158,11,0.6)] overflow-hidden"
      >
        <Sparkles
          size={20}
          className="text-amber-600 drop-shadow-[0_0_6px_rgb(245,158,11)]"
        />
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="font-semibold text-amber-600 whitespace-nowrap"
            variants={textSwitcherVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </button>
    </motion.div>
  );
};
