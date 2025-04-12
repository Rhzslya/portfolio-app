"use client";
import { GitHubRepo } from "@/utils/Type";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState, useLayoutEffect } from "react";
import TimelineContents from "../TimelineContents";

export const Timeline = ({
  data,
  isLoading,
}: {
  data: GitHubRepo[];
  isLoading: boolean;
}) => {
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
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC", // <--- penting untuk konsistensi
  });
  // Fungsi untuk mengelompokkan data berdasarkan tahun dan bulan
  const groupedData = data.reduce((acc, item) => {
    const date = new Date(item.updatedAt);
    const year = date.getFullYear();
    const month = formatter.format(date);

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
      className="w-full font-sans px-1 xs:px-4 sm:px-6 md:px-10 py-10 background-main"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative pl-6 md:pl-12">
          <div
            ref={lineRef}
            className="absolute left-3 md:left-6 w-[2px] bg-gray-300 h-full"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 w-[2px] bg-gradient-to-b from-amber-500 via-orange-500 to-transparent"
            />
          </div>
          {Object.entries(groupedData)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Urutkan tahun dari terbaru ke lama
            .map(([year, months]) => (
              <div key={year} className="mb-10 flex relative">
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-colors"
                  style={{ color: yearColor }}
                >
                  {year}
                </motion.h2>{" "}
                <div className="absolute -left-[20px] md:-left-[31px] top-[10px] md:top-[15px] w-4 h-4 bg-amber-500 rounded-full border-4 border-white" />
                <div className="w-full relative ml-6 sm:ml-10">
                  {Object.entries(months)
                    .sort(
                      ([monthA], [monthB]) =>
                        monthOrder(monthB) - monthOrder(monthA)
                    )
                    .map(([month, items]) => (
                      <div
                        key={month}
                        className="mb-4 sm:mb-6 relative w-full px-0 sm:px-4 py-2 rounded-md"
                      >
                        <div className="">
                          <motion.h3
                            className="text-xl sm:text-2xl font-bold text-amber-500"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {month}
                          </motion.h3>

                          <ul className="mt-2 space-y-3">
                            {items.map((item) => {
                              const isLeft = globalIndex % 2 === 0;
                              globalIndex++;

                              return (
                                <TimelineContents
                                  item={item}
                                  key={item.hashCommit}
                                  isLeft={isLeft}
                                  isLoading={isLoading}
                                />
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
