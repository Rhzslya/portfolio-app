"use client";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomInUp } from "@/utils/FramerMotionStyle";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  stack: string[];
}

export function BentoProject() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleItems, setVisibleItems] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error("Gagal mengambil data proyek");

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 text-white">
        Sedang memuat data proyek dari GitHub...
      </div>
    );
  }

  return (
    <motion.div className="max-w-7xl mx-auto">
      <BentoGrid>
        {projects.slice(0, visibleItems).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            stack={item.stack}
            index={i}
            header={
              <motion.div
                className="relative w-full h-full rounded-xl overflow-hidden bg-[#0a0a0a]"
                variants={zoomInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]" />

                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 z-10 p-4"
                    priority={i === 0}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 z-10 relative">
                    Tidak Ada Pratinjau Gambar
                  </div>
                )}
              </motion.div>
            }
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {visibleItems < projects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-amber-600 font-semibold text-white rounded-md hover:text-black transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </motion.div>
  );
}
