"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { backgroundVariants } from "@/utils/FramerMotionStyle";
import { formatName } from "@/utils/Capitalize";
import { FaCodeBranch, FaSyncAlt } from "react-icons/fa";
import { GitHubRepo } from "@/utils/Type";
import TimelineItemSkeleton from "../Skeleton/TimelineSkeleton";

const TimelineContents = ({
  item,
  isLeft,
  isLoading,
}: {
  item: GitHubRepo;
  isLeft: boolean;
  isLoading: boolean;
}) => {
  return (
    <li className={`grid ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
      {isLoading ? (
        <TimelineItemSkeleton />
      ) : (
        <Link
          href={`${item.latestCommit?.commitUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(255, 193, 7, 0.3)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={`relative flex flex-col max-w-[465px] sm:max-w-full w-full background-main border-2 border-amber-500 px-4 py-3 rounded-md ${
              isLeft ? "self-start" : "self-end"
            }`}
          >
            <motion.div
              className="absolute h-full inset-0 bg-grid-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="relative mb-4 ml-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white text-base sm:text-xl text-right">
                {formatName(item.name)}
              </h3>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </motion.div>

            <div className="grid grid-rows-auto md:grid-cols-3 grid-rows-1 gap-4 text-neutral-200 text-sm md:text-base">
              <motion.span
                className="flex items-center gap-2 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FaSyncAlt className="text-gray-400 text-lg" />
                {new Date(item.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
                ,{" "}
                {new Date(item.updatedAt).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </motion.span>

              <motion.span
                className="relative group flex items-center gap-2 sm:mx-auto text-xs sm:text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FaCodeBranch className="text-gray-400 text-[20px]" />
                {item.hashCommit?.slice(0, 8) || "N/A"}
              </motion.span>

              <motion.div
                className="text-green-500 text-xs sm:text-sm sm:ml-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span>{item.latestCommit?.message}</span>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      )}
    </li>
  );
};

export default TimelineContents;
