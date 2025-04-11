import React from "react";
import { motion } from "framer-motion";
import { fadeIn, scrollVariants } from "@/utils/FramerMotionStyle";

const ScrollMouse = () => {
  const handleScrollToProject = () => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial="hidden"
      variants={fadeIn(0.5)}
      animate="visible"
      className="xl:col-start-4 xl:row-start-3 lg:col-start-2 row-start-6 lg:row-start-5 flex justify-center items-center xl:mb-auto max-xl:m-auto"
    >
      <motion.button
        onClick={handleScrollToProject}
        className="flex flex-col justify-center items-center"
        variants={scrollVariants}
        animate="animate"
      >
        <svg
          height="50px"
          width="50px"
          viewBox="0 0 512 512"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Scroll Mouse Icon"
        >
          <g>
            <path
              d="M224.609,156.127v60.57c0,17.336,14.043,31.391,31.39,31.391c17.348,0,31.391-14.055,31.391-31.391v-60.57 
            c0-17.334-14.043-31.391-31.391-31.391C238.653,124.736,224.609,138.793,224.609,156.127z"
            />
            <path
              d="M269.027,0v100.336c25.38,5.936,44.378,28.633,44.378,55.792v60.57c0,31.659-25.735,57.407-57.406,57.407 
            c-31.646,0-57.418-25.748-57.418-57.407v-60.57c0-27.159,19.038-49.856,44.418-55.792V0C154.775,6.672,85.193,80.23,85.193,170.146 
            v171.061C85.193,435.519,161.663,512,256,512c94.324,0,170.807-76.481,170.807-170.794V170.146 
            C426.807,80.23,357.252,6.672,269.027,0z"
            />
          </g>
        </svg>
        <div className="p-2 max-[350px]:text-sm">
          <span>Scroll Down</span>
        </div>
        <div className="">
          <i className="bx bxs-chevrons-down text-3xl"></i>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ScrollMouse;
