"use client";

import HeroPage from "@/components/Home";
import Project from "@/components/Project";

export default function Main() {
  return (
    <div className="my-[56px] px-10 lg:px-14 pt-14">
      <HeroPage />
      <Project />
    </div>
  );
}
