"use client";

import HeroPage from "@/components/Home";
import Project from "@/components/Project";
import { useState } from "react";

export default function Main() {
  const [repoData, setRepoData] = useState<
    {
      name: string;
      createdAt: string;
      description: string;
      url: string;
      updatedAt: string;
      commits: number;
      hashCommits?: string;
      message?: string;
    }[]
  >([]);

  return (
    <div className="my-[56px] px-10 lg:px-14 pt-14">
      <HeroPage setRepoData={setRepoData} />
      <Project repoData={repoData} />
    </div>
  );
}
