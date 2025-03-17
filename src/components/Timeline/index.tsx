"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/FramerMotionStyle";
import { TimelineBox } from "../TimelineBox";

interface Repo {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  commits: number;
}

interface TimelineItem {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  commits: number;
}

interface TimelineEntry {
  title: string;
  items: TimelineItem[];
}

export function Timeline({ repoData }: { repoData: Repo[] }) {
  // Format ulang repoData agar sesuai dengan format yang dibutuhkan TimelineBox
  const formattedData: TimelineEntry[] = [
    {
      title: "Repositories",
      items: repoData.map((repo) => ({
        name: repo.name,
        createdAt: repo.createdAt,
        updatedAt: repo.updatedAt,
        description: repo.description,
        url: repo.url,
        commits: repo.commits,
      })),
    },
  ];

  return (
    <div className="w-full flex flex-col background-main items-center justify-center overflow-hidden rounded-md">
      <motion.h1
        className="text-gray-300 font-bold text-center relative z-10 text-nowrap"
        style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn(0.6)}
      >
        Timeline
      </motion.h1>
      <div className="w-[40rem] h-5 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent h-px w-1/4" />
      </div>
      <TimelineBox data={formattedData} />
    </div>
  );
}
