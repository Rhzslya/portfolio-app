import { cn } from "@/utils/lib/utils";
import { GlowingEffect } from "./glowing-effect";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { stackIcons } from "@/utils/StackIcons";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
  stack,
  index,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  stack?: string[] | string;
  index?: number;
}) => {
  return (
    <Link
      href={`${link}`}
      target="_blank"
      className={cn(
        "relative row-span-1 rounded-xl group/bento group hover:shadow-xl transition duration-200 shadow-input p-4   border border-transparent justify-between flex flex-col space-y-4",
        className,
      )}
    >
      <GlowingEffect disabled={false} glow={true} />
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <motion.div
          className="font-sans font-bold text-gray-300 mb-2 mt-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.div>

        <motion.div
          className="font-sans font-normal text-gray-300 text-xs"
          initial={{
            opacity: 0,
            x: index !== undefined && index % 2 === 0 ? -40 : 40,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-2 mt-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {Array.isArray(stack) &&
            stack.map((tech) => (
              <motion.span
                key={tech}
                className="flex items-center gap-1"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {stackIcons[tech] ? (
                  stackIcons[tech]
                ) : (
                  <span className="px-2 py-1 text-[10px] font-semibold bg-gray-800 text-gray-300 rounded-md border border-gray-700 capitalize">
                    {tech}
                  </span>
                )}
              </motion.span>
            ))}
        </motion.div>
      </div>
    </Link>
  );
};
