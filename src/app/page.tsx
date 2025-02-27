"use client";

import ExperienceBox from "@/components/ExperienceBox";
import { GlowingEffectDemo } from "@/components/GlowingEffect";
import ImageStack from "@/components/ImageStack";
import MiniTerminal from "@/components/MiniTerminal";
import ScrollMouse from "@/components/ScrollMouse";
import TerminalWithApi from "@/components/TerminalWithApi";
import {
  backgroundVariants,
  buttonVariants,
  fadeIn,
  slideInFromLeft,
} from "@/utils/FramerMotionStyle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home_root min-h-screen my-[56px] px-14 pt-14 grid grid-cols-4 grid-rows-3 gap-4">
      <GlowingEffectDemo />
      <div className="hero-box relative col-span-2 row-span-2 mx-auto max-w-[800px] overflow-hidden m-auto">
        {/* Background Grid */}
        <motion.div
          className="absolute h-full inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"
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
            Junior Software Engineer focused on building scalable,
            high-performance web applications.
          </motion.p>
        </motion.div>
        <motion.div
          className="button-container w-[50%] mx-auto my-4 group"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button className="bg-amber-600 w-full px-4 py-2 text-white font-semibold rounded-md group-hover:text-black duration-300">
            <motion.a>Learn More!</motion.a>
          </motion.button>
        </motion.div>
      </div>
      <TerminalWithApi />
      <ImageStack />
      <ExperienceBox />
      <ScrollMouse />
    </main>
  );
}
