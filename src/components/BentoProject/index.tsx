import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoProject() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-sky-50 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <span>Project Image</span>
  </div>
);
const items = [
  {
    title: "Flugel Bot Whatsapp",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    link: "www.facebook.com",
  },
  {
    title: "NKS Gift",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    link: "www.google.com",
  },
  {
    title: "Restaurant Management",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    link: "www.google.com",
  },
  {
    title: "Portfolio App",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    link: "www.google.com",
  },
  {
    title: "Flugelnime",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    link: "www.google.com",
  },
];
