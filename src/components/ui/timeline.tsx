"use client";
import { formatName } from "@/utils/Capitalize";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState, useLayoutEffect } from "react";

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

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (lineRef.current) {
        setLineHeight(lineRef.current.getBoundingClientRect().height);
      }
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Fungsi untuk mengelompokkan data berdasarkan tahun dan bulan
  const groupedData = data.reduce((acc, entry) => {
    entry.items.forEach((item) => {
      const date = new Date(item.updatedAt);
      const year = date.getFullYear();
      const month = date.toLocaleString("en-US", { month: "long" });

      if (!acc[year]) acc[year] = {};
      if (!acc[year][month]) acc[year][month] = [];
      acc[year][month].push(item);
    });

    return acc;
  }, {} as Record<number, Record<string, TimelineItem[]>>);

  const monthOrder = (month: string) => new Date(`${month} 1, 2000`).getMonth();

  return (
    <div
      className="w-full font-sans px-6 md:px-10 py-10 background-main"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          My Development Timeline
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10">
          A chronological record of my progress and milestones.
        </p>

        <div className="relative pl-6 md:pl-12">
          <div
            ref={lineRef}
            className="absolute left-3 md:left-6 w-[2px] bg-gray-300 dark:bg-gray-700 h-full"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
            />
          </div>
          {Object.entries(groupedData)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Urutkan tahun dari terbaru ke lama
            .map(([year, months]) => (
              <div key={year} className="mb-10 flex relative">
                <h2 className="text-5xl font-bold text-gray-300">{year}</h2>
                <div className="absolute -left-[31px] top-[15px] w-4 h-4 bg-amber-500 rounded-full border-4 border-white" />
                <div className="w-full">
                  {Object.entries(months)
                    .sort(
                      ([monthA], [monthB]) =>
                        monthOrder(monthB) - monthOrder(monthA)
                    ) // Urutkan bulan dari terbaru ke lama
                    .map(([month, items]) => (
                      <div key={month} className="mb-6 relative w-full">
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 md:p-6 ml-6 md:ml-12">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                            {month}
                          </h3>
                          <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                            {items.map((item, i) => (
                              <li key={i} className="mt-1">
                                <span className="font-medium">
                                  {formatName(item.name)}
                                </span>
                                <span>{item.description}</span>
                                <span>{item.url}</span>
                                <span>{item.updatedAt}</span>
                                <span>{item.commits}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
