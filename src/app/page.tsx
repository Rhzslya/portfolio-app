"use client";

import Contact from "@/components/Contact";
import HeroPage from "@/components/Home";
import Project from "@/components/Project";
import { useState } from "react";

export default function Main() {
  const [repoData, setRepoData] = useState<
    {
      name: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      totalCount: number;
      description: string;
      hashCommit: string;
      latestCommit: {
        sha: string;
        message: string;
        commitUrl: string;
      };
    }[]
  >([]);

  return (
    <div className="my-[56px] px-10 lg:px-14 pt-14">
      <HeroPage setRepoData={setRepoData} />
      <Project repoData={repoData} />
      <Contact />
    </div>
  );
}
