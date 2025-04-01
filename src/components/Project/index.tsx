import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { ScrollingTechStack } from "../InfiniteMovingCards";
import { ColourfulText } from "../ui/colorful-text";
import { BentoProject } from "../BentoProject";
import { Timeline } from "../Timeline";
import { GitHubRepo } from "@/utils/Type";

const Project = ({ repoData }: { repoData: GitHubRepo[] }) => {
  return (
    <section className="grid grid-cols-1  gap-8 grid-rows-[auto_1fr_auto]">
      <div className="stack-project-container">
        <motion.h1
          className="text-gray-200 font-bold text-center relative z-10 text-nowrap my-5"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.6)}
        >
          My <ColourfulText text="Tech & Projects" />
        </motion.h1>
        <ScrollingTechStack />
        <BentoProject />
      </div>

      <div className="flex justify-center">
        <Timeline repoData={repoData} />
      </div>
    </section>
  );
};

export default Project;
