import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { ScrollingTechStack } from "../InfiniteMovingCards";
import { ColourfulText } from "../ui/colorful-text";
import { BentoProject } from "../BentoProject";

const Project = () => {
  return (
    <div className="grid grid-cols-1  gap-4 grid-rows-[auto_1fr_1fr]">
      <div className="stack-container">
        <motion.h1
          className="text-gray-200 font-bold text-center relative z-10 text-nowrap"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.6)}
        >
          My <ColourfulText text="Tech & Projects" />
        </motion.h1>
        <ScrollingTechStack />
      </div>

      <div>
        <BentoProject />
      </div>
      <div>2</div>
    </div>
  );
};

export default Project;
