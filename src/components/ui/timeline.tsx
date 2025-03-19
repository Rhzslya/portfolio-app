"use client";
import { formatName } from "@/utils/Capitalize";
import { backgroundVariants } from "@/utils/FramerMotionStyle";
import { GitHubRepo } from "@/utils/Type";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useLayoutEffect } from "react";
import { FaCodeBranch, FaSyncAlt } from "react-icons/fa";

export const Timeline = ({ data }: { data: GitHubRepo[] }) => {
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
  const groupedData = data.reduce((acc, item) => {
    const date = new Date(item.updatedAt);
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });

    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];
    acc[year][month].push(item);

    return acc;
  }, {} as Record<number, Record<string, GitHubRepo[]>>);

  const yearColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#D1D5DB", "#F59E0B"]
  ); // Dari abu-abu ke amber

  const monthOrder = (month: string) => new Date(`${month} 1, 2000`).getMonth();
  let globalIndex = 0;
  return (
    <div
      className="w-full font-sans px-6 md:px-10 py-10 background-main"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative pl-6 md:pl-12">
          <div
            ref={lineRef}
            className="absolute left-3 md:left-6 w-[2px] bg-gray-300 dark:bg-gray-700 h-full"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-amber-500 via-orange-500 to-transparent"
            />
          </div>
          {Object.entries(groupedData)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Urutkan tahun dari terbaru ke lama
            .map(([year, months]) => (
              <div key={year} className="mb-10 flex relative">
                <motion.h2
                  className="text-5xl font-bold transition-colors"
                  style={{ color: yearColor }}
                >
                  {year}
                </motion.h2>{" "}
                <div className="absolute -left-[31px] top-[15px] w-4 h-4 bg-amber-500 rounded-full border-4 border-white" />
                <div className="w-full relative ml-10">
                  {Object.entries(months)
                    .sort(
                      ([monthA], [monthB]) =>
                        monthOrder(monthB) - monthOrder(monthA)
                    )
                    .map(([month, items]) => (
                      <div
                        key={month}
                        className="mb-6 relative w-full px-4 py-2 rounded-md"
                      >
                        <div className="">
                          <h3 className="text-2xl font-bold text-amber-500">
                            {month}
                          </h3>
                          <ul className="mt-2 space-y-3">
                            {items.map((item) => {
                              const isLeft = globalIndex % 2 === 0;
                              globalIndex++;

                              return (
                                <li
                                  key={item.hashCommit}
                                  className={`grid ${
                                    isLeft ? "justify-start" : "justify-end"
                                  }`}
                                >
                                  <Link
                                    href={`${item.latestCommit?.commitUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                          "0px 4px 10px rgba(255, 193, 7, 0.3)",
                                      }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.3 }}
                                      className={`relative flex flex-col w-full background-main border-2 border-amber-500 px-4 py-3 rounded-md ${
                                        isLeft ? "self-start" : "self-end"
                                      }`}
                                    >
                                      <motion.div
                                        className="absolute h-full inset-0 bg-grid-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"
                                        variants={backgroundVariants}
                                        initial="hidden"
                                        animate="visible"
                                      ></motion.div>
                                      <div className="mb-4">
                                        <h3 className="font-bold text-white text-xl text-right">
                                          {formatName(item.name)}
                                        </h3>
                                      </div>

                                      <div className="grid grid-cols-3 grid-rows-1 gap-4 text-neutral-200 text-sm md:text-base">
                                        <span className="flex items-center gap-2">
                                          <FaSyncAlt className="text-gray-400 text-lg" />
                                          {new Date(
                                            item.updatedAt
                                          ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                          })}
                                          ,{" "}
                                          {new Date(
                                            item.updatedAt
                                          ).toLocaleTimeString("en-US", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                          })}
                                        </span>

                                        <span className="relative group flex items-center gap-2 mx-auto">
                                          <FaCodeBranch className="text-gray-400 text-[20px]" />
                                          {item.hashCommit?.slice(0, 8) ||
                                            "N/A"}
                                        </span>

                                        <div className="text-green-500 text-sm ml-auto">
                                          <span className="">
                                            {item.latestCommit?.message}
                                          </span>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </Link>
                                </li>
                              );
                            })}
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
