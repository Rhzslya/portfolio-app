import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import { items } from "@/utils/ProjectList";
import { motion } from "framer-motion";
import { zoomInUp } from "@/utils/FramerMotionStyle";

export function BentoProject() {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };
  return (
    <motion.div className="max-w-7xl mx-auto">
      <BentoGrid>
        {items.slice(0, visibleItems).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            stack={item.stack}
            index={i}
            header={
              <motion.div
                className="relative w-full h-full rounded-xl overflow-hidden"
                variants={zoomInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <Image
                  src={`/project/${item.image}.png`}
                  alt={item.title}
                  objectFit="cover"
                  fill
                  className="rounded-xl group-hover:scale-105 duration-300"
                  priority={i === 0}
                  placeholder="blur"
                  blurDataURL={`/project/${item.image}.png`}
                />
              </motion.div>
            }
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {visibleItems < items.length && (
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
