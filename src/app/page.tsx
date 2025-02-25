"use client";

import { GlowingEffectDemo } from "@/components/GlowingEffect";
import ImageStack from "@/components/ImageStack";
import {
  backgroundVariants,
  fadeIn,
  slideInFromLeft,
} from "@/utils/FramerMotionStyle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home_root my-[56px] px-14 pt-40 grid grid-cols-4 grid-rows-3 gap-4">
      {/* <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={popIn(0.2)}
      >
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
      </motion.div> */}
      <GlowingEffectDemo />
      <div className="hero-box relative col-span-2 row-span-2 mx-auto max-w-[800px] overflow-hidden">
        {/* Background Grid */}
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>

        {/* Content */}
        <motion.span
          className="text-amber-600 text-2xl font-bold text-left pl-28 relative z-10"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.4)}
        >
          Hello I&rsquo;m
        </motion.span>

        <motion.h1
          className="text-gray-200 font-bold text-center relative z-10"
          style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.6)}
        >
          Rizqi Sabilla
        </motion.h1>

        <motion.div
          className="text-gray-200 font-medium text-xl leading-loose text-center relative z-10"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={slideInFromLeft(0.8)}
            style={{ fontSize: "clamp(1rem, 2vw, 20px)" }}
          >
            I&rsquo;m a Junior Software Engineer With Experience in Website
            Development
          </motion.p>
        </motion.div>
      </div>
      <ImageStack />
    </main>
  );
}
